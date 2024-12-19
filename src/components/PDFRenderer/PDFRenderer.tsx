import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import { useTheme, Box } from '@mui/material'

import './PDFRenderer.scss'

const primary_fill_class = 'render-primary-fill'
const text_fill_class = 'render-text-fill'

// Set the PDF.js worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = process.env.PUBLIC_URL + '/pdf.worker.min.js'

interface PDFRendererProps {
	url: string
	maxWidth?: string
}

const PDFRenderer = ({ url, maxWidth = '1000px' }: PDFRendererProps) => {
	const theme = useTheme()
	const containerRef = useRef<HTMLDivElement>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const isBlack = (attr: string | null): boolean => {
		if (!attr) return false

		// Normalize the string by removing spaces and converting to lowercase
		const normalized = attr.toLowerCase().replace(/\s+/g, '')

		// Common black color representations
		if (['black', '#000', '#000000'].includes(normalized)) return true

		// Handle rgb/rgba formats
		const rgbMatch = normalized.match(/^rgba?\((\d+),(\d+),(\d+)(?:,[\d.]+)?\)$/)
		if (rgbMatch) {
			const [, r, g, b] = rgbMatch
			return r === '0' && g === '0' && b === '0'
		}

		return false
	}

	useEffect(() => {
		let mounted = true
		const currentContainer = containerRef.current

		const renderPages = async () => {
			try {
				setLoading(true)
				setError(null)

				// Load the PDF document
				const pdf = await pdfjsLib.getDocument(url).promise

				if (!mounted) return

				// Clear container
				if (!currentContainer) return
				currentContainer.innerHTML = ''

				// Render each page
				for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
					if (!mounted) return
					const page = await pdf.getPage(pageNum)
					// Calculate height to maintain aspect ratio
					const scale = 1
					const scaledViewport = page.getViewport({ scale })

					// Create page container
					const pageContainer = document.createElement('div')
					pageContainer.className = 'pdf-page'
					pageContainer.style.marginBottom = '20px'
					pageContainer.style.width = '100%'
					currentContainer.appendChild(pageContainer)

					// Create SVG container with preserveAspectRatio
					const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
					svg.setAttribute('width', '100%')
					svg.setAttribute('viewBox', `0 0 ${scaledViewport.width} ${scaledViewport.height}`)
					svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
					pageContainer.appendChild(svg)

					// Render PDF page to SVG
					const opList = await page.getOperatorList()
					const svgGfx = new pdfjsLib.SVGGraphics(page.commonObjs, page.objs)
					const svgElement = await svgGfx.getSVG(opList, scaledViewport)

					// Handle both fill and stroke attributes for tspan and path elements
					svgElement.querySelectorAll('[fill], [stroke]').forEach((element: SVGElement) => {
						if (element.tagName === 'svg:tspan' || element.tagName === 'svg:path') {
							const fill = element.getAttribute('fill')
							const stroke = element.getAttribute('stroke')

							if ((fill && !isBlack(fill)) || (stroke && !isBlack(stroke))) {
								const existingClasses = element.getAttribute('class') || ''
								const specificClass = element.tagName === 'svg:tspan' ? `${primary_fill_class}-text` : `${primary_fill_class}-path`
								element.setAttribute('class', `${existingClasses} ${specificClass}`.trim())
								element.removeAttribute('fill')
								element.removeAttribute('stroke')
							}
						}
					})

					// Add specific text-fill classes to tspan and path elements without primary classes
					svgElement.querySelectorAll(`svg tspan:not([class*="${primary_fill_class}"]), svg path:not([class*="${primary_fill_class}"])`).forEach((element: SVGElement) => {
						const existingClasses = element.getAttribute('class') || ''
						const specificClass = element.tagName === 'svg:tspan' ? `${text_fill_class}-text` : `${text_fill_class}-path`
						element.setAttribute('class', `${existingClasses} ${specificClass}`.trim())
					})

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

		// Cleanup function using captured reference
		return () => {
			mounted = false
			if (currentContainer) {
				currentContainer.innerHTML = ''
			}
		}
	}, [url])

	if (error) {
		return <div className='error'>Error: {error}</div>
	}

	return (
		<div style={{ width: '100%', maxWidth: maxWidth }}>
			{loading && <div>Loading...</div>}
			<Box
				ref={containerRef}
				className='pdf-renderer'
				sx={{
					width: '100%',
					[`.${primary_fill_class}-text`]: {
						fill: theme.palette.primary.main,
					},
					[`.${primary_fill_class}-path`]: {
						stroke: theme.palette.primary.main,
					},
					[`.${text_fill_class}-text`]: {
						fill: theme.palette.text.primary,
					},
					[`.${text_fill_class}-path`]: {
						stroke: theme.palette.text.primary,
					},
				}}
			/>
		</div>
	)
}

export default PDFRenderer
