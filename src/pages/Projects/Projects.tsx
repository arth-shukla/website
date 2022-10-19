import React, { useCallback } from 'react'
import { Carousel, ProjectContextProvider, ProjectsData, ProjectsDataType, ProjectTile, Section } from '../../components'
import Box from '@mui/material/Box'

function Projects() {
	const renderProjectsSlide = useCallback((projectsData: ProjectsDataType) => {
		let renderedProjects = []

		for (const project in projectsData) {
			renderedProjects.push({
				label: <h2>{projectsData[project].name}</h2>,
				content: (
					<div key={projectsData[project].name}>
						<Box sx={{ display: 'flex', justifyContent: 'space-evenly', paddingBottom: '1em' }}>
							<ProjectContextProvider value={projectsData[project]}>
								<ProjectTile
									size={200}
									identifier={projectsData[project].pagePath + '-projects-tile'}
								/>
							</ProjectContextProvider>
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

			<p>Here are some projects I found interesting and informative. To see more information, please click on the project icon.</p>
			<Carousel slides={[...renderProjectsSlide(ProjectsData)]} />
		</Section>
	)
}

export default Projects
