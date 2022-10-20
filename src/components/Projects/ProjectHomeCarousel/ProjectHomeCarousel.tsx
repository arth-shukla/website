import React, { useCallback } from 'react'

import Carousel from 'components/Carousel'
import ProjectTile from '../ProjectTile'
import { ProjectsDataType } from '../ProjectsData'
import { ProjectContextProvider } from '../ProjectContext'

import { Button } from '@mui/material'
import Box from '@mui/system/Box'
import { Link } from 'react-router-dom'

interface ProjectHomeCarouselProps {
	width: number | string
	height?: number
	logoSize: number
	logosPerSlide: number
	projects: ProjectsDataType
	[x: string]: any
}

function ProjectHomeCarousel({ width, height, logoSize, logosPerSlide, projects, ...rest }: ProjectHomeCarouselProps) {
	const chunks = (a: Array<any>, size: number) => Array.from(new Array(Math.ceil(a.length / size)), (_, i) => a.slice(i * size, i * size + size))

	const generateCarouselData = useCallback(
		(projectsData: ProjectsDataType) => {
			let logos = []

			for (const project in projectsData) {
				logos.push(
					<ProjectContextProvider
						value={projectsData[project]}
						key={`${projectsData[project].pagePath}-home-carousel-card-provider`}
					>
						<ProjectTile
							size={logoSize}
							identifier={`${projectsData[project].pagePath}-home-carousel-card`}
						/>
					</ProjectContextProvider>,
				)
			}

			let separated = chunks(logos, logosPerSlide)

			let carouselSlides = []
			for (const chunk of separated) {
				carouselSlides.push({
					label: undefined,
					content: <Box sx={{ height: height ?? logoSize * 1.3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{chunk}</Box>,
				})
			}

			carouselSlides.push({
				label: undefined,
				content: (
					<Box
						sx={{
							height: height ?? logoSize * 1.3,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Button
							component={Link}
							to='/projects'
							variant='contained'
							sx={{ textAlign: 'center' }}
							size='large'
						>
							All Projects
						</Button>
					</Box>
				),
			})

			return carouselSlides
		},
		[logoSize, logosPerSlide, height],
	)

	return (
		<Carousel
			width={width}
			sx={{
				maxWidth: '100%',
			}}
			slides={[...generateCarouselData(projects)]}
			floatStepper
			showFloatOnHover
			{...rest}
		/>
	)
}

export default ProjectHomeCarousel
