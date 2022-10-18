import React, { useCallback } from 'react'
import { Carousel, ProjectContextProvider, ProjectsData, ProjectsDataType, ProjectTile, Section } from '../../components'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function Projects() {
	const renderProjectsSlide = useCallback((projectsData: ProjectsDataType) => {
		let renderedProjects = []

		for (const project in projectsData) {
			renderedProjects.push({
				label: <h2>{projectsData[project].name}</h2>,
				content: (
					<div key={projectsData[project].name}>
						<Box sx={{ display: 'flex', justifyContent: 'space-evenly', paddingBottom: '1em' }}>
							<Box>
								<ProjectContextProvider value={projectsData[project]}>
									<ProjectTile size={200} />
								</ProjectContextProvider>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<Button
									component={Link}
									to={projectsData[project].pagePath}
									sx={{ transition: 'all 0.4s ease-in-out' }}
									variant='outlined'
								>
									More Info
								</Button>
							</Box>
						</Box>
						<p>{projectsData[project].description}</p>
					</div>
				),
			})
		}

		return renderedProjects
	}, [])

	return (
		<Section>
			<h1>Projects</h1>

			<p>Here are some projects I found interesting and informative. To see the deployment, please click on the icon. To learn more information, click "More Info".</p>
			<Carousel slides={[...renderProjectsSlide(ProjectsData)]} />
		</Section>
	)
}

export default Projects
