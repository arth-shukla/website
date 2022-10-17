import React, { useCallback } from 'react'
import { Section, ProjectsData, ProjectsDataType, ProjectContextProvider, ProjectCard } from '../../components'

import Typography from '@mui/material/Typography'

function Projects() {
	const renderProjects = useCallback((projectsData: ProjectsDataType) => {
		let renderedProjects = []

		for (const project in projectsData) {
			const projectCarousel = [
				{ label: <h2>Motivation</h2>, content: <Typography>{projectsData[project].motivation}</Typography> },
				{ label: <h2>Features</h2>, content: <Typography>{projectsData[project].features}</Typography> },
			]

			renderedProjects.push(
				<p>
					<ProjectContextProvider value={projectsData[project]}>
						<ProjectCard projectCarousel={projectCarousel} />
					</ProjectContextProvider>
				</p>,
			)
		}

		return renderedProjects
	}, [])

	return <Section>{renderProjects(ProjectsData)}</Section>
}

export default Projects
