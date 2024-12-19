import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'

// Set the PDF.js worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = process.env.PUBLIC_URL + '/pdf.worker.min.js'

interface PDFRendererProps {
	url: string
	width?: number
}

const PDFRenderer = ({ url, width = 800 }: PDFRendererProps) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		let mounted = true
		// Capture the current value of the ref
		const container = containerRef.current

		const renderPages = async () => {
			try {
				setLoading(true)
				setError(null)

				// Load the PDF document
				const pdf = await pdfjsLib.getDocument(url).promise

				if (!mounted) return

				// Clear container
				if (!container) return
				container.innerHTML = ''

				// Render each page
				for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
					if (!mounted) return
					const page = await pdf.getPage(pageNum)
					// Calculate height to maintain aspect ratio
					const viewport = page.getViewport({ scale: 1 })
					const scale = width / viewport.width
					const scaledViewport = page.getViewport({ scale })

					// Create page container
					const pageContainer = document.createElement('div')
					pageContainer.className = 'pdf-page'
					pageContainer.style.marginBottom = '20px'
					container.appendChild(pageContainer)

					// Create SVG container
					const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
					svg.setAttribute('width', scaledViewport.width.toString())
					svg.setAttribute('height', scaledViewport.height.toString())
					pageContainer.appendChild(svg)

					// Render PDF page to SVG
					const opList = await page.getOperatorList()
					const svgGfx = new pdfjsLib.SVGGraphics(page.commonObjs, page.objs)
					const svgElement = await svgGfx.getSVG(opList, scaledViewport)
					svg.appendChild(svgElement)
				}
				if (mounted) {
					setLoading(false)
				}
			} catch (err) {
				if (mounted) {
					setError(err instanceof Error ? err.message : 'Failed to load PDF')
					setLoading(false)
				}
			}
		}

		renderPages()

		// Cleanup function
		return () => {
			mounted = false
			if (containerRef.current) {
				containerRef.current.innerHTML = ''
			}
		}
	}, [url, width])

	if (error) {
		return <div className='error'>Error: {error}</div>
	}

	return (
		<div>
			{loading && <div>Loading...</div>}
			<div ref={containerRef} />
		</div>
	)
}

export default PDFRenderer
