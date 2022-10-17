import React, { useCallback } from 'react'
import { Section, ProjectsData, ProjectsDataType, ProjectContextProvider, ProjectCard, ProjectTile } from '../../components'

import Typography from '@mui/material/Typography'

function Projects() {
	const renderProjects = useCallback((projectsData: ProjectsDataType) => {
		let renderedProjects = []

		for (const project in projectsData) {
			const projectCardData = [
				{ label: <h2>Motivation</h2>, content: <Typography>{projectsData[project].motivation}</Typography> },
				{ label: <h2>Features</h2>, content: <Typography>{projectsData[project].features}</Typography> },
			]

			renderedProjects.push(
				<>
					<ProjectContextProvider value={projectsData[project]}>
						<h1>{project}</h1>
						<ProjectTile />
						<ProjectCard project={projectCardData} />
					</ProjectContextProvider>
				</>,
			)
		}

		return renderedProjects
	}, [])

	return <Section>{renderProjects(ProjectsData)}</Section>
}

export default Projects
