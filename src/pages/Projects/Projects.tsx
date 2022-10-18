import React, { useCallback } from 'react'
import { Section, ProjectsData, ProjectsDataType, ProjectContextProvider, ProjectCard } from '../../components'

function Projects() {
	const renderProjects = useCallback((projectsData: ProjectsDataType) => {
		let renderedProjects = []

		for (const project in projectsData) {
			const projectCarousel = [
				{ label: <h2>Description</h2>, content: projectsData[project].description },
				{ label: <h2>Motivation</h2>, content: projectsData[project].motivation },
				{ label: <h2>Features</h2>, content: projectsData[project].features },
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
