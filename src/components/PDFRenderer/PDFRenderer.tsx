import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import { useTheme, Box, CircularProgress } from '@mui/material'

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
					const scale = 1
					const scaledViewport = page.getViewport({ scale })

					// Create page container with relative positioning
					const pageContainer = document.createElement('div')
					pageContainer.className = 'pdf-page'
					pageContainer.style.marginBottom = '20px'
					pageContainer.style.width = '100%'
					pageContainer.style.position = 'relative'
					currentContainer.appendChild(pageContainer)

					// Create SVG container with preserveAspectRatio
					const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
					svg.setAttribute('width', '100%')
					svg.setAttribute('viewBox', `0 0 ${scaledViewport.width} ${scaledViewport.height}`)
					svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
					pageContainer.appendChild(svg)

					// Add annotation layer
					const annotationLayer = document.createElement('div')
					annotationLayer.className = 'annotation-layer'
					annotationLayer.style.position = 'absolute'
					annotationLayer.style.top = '0'
					annotationLayer.style.left = '0'
					annotationLayer.style.width = '100%'
					annotationLayer.style.height = '100%'
					pageContainer.appendChild(annotationLayer)

					// Get annotations
					const annotations = await page.getAnnotations()
					
					// Process link annotations
					annotations
						.filter(annotation => annotation.subtype === 'Link')
						.forEach(annotation => {
							const [x1, y1, x2, y2] = annotation.rect
							const viewport = page.getViewport({ scale: 1 })
							
							// Convert PDF coordinates to viewport coordinates
							const { width, height } = viewport
							const link = document.createElement('a')
							link.href = annotation.url || ''
							link.style.position = 'absolute'
							link.style.left = `${(x1 / width) * 100}%`
							link.style.top = `${((height - y2) / height) * 100}%`
							link.style.width = `${((x2 - x1) / width) * 100}%`
							link.style.height = `${((y2 - y1) / height) * 100}%`
							link.style.cursor = 'pointer'
							link.className = 'pdf-annotation-link'
							
							if (annotation.url) {
								link.target = '_blank'
								link.rel = 'noopener noreferrer'
							}
							
							
							annotationLayer.appendChild(link)
						})

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
			{loading && (
				<Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
					<CircularProgress className='loading-progress' />
				</Box>
			)}
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
					'.pdf-annotation-link:hover, .pdf-annotation-link:focus': {
						backgroundColor: `${theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.primary.dark}40`,
						outline: 'none',
					},
					display: loading ? 'none' : 'block',
				}}
			/>
		</div>
	)
}

export default PDFRenderer
