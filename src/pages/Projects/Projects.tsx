import React from 'react'
import { Section, ProjectsData, ProjectsDataType, ProjectContextProvider, ProjectCard, ProjectTile } from '../../components'

const renderProjects = (projectsData: ProjectsDataType) => {
	let renderedProjects = []

	for (const project in projectsData) {
		renderedProjects.push(
			<>
				<ProjectContextProvider value={projectsData[project]}>
					<h1>{project}</h1>
					<ProjectTile />
					<ProjectCard />
				</ProjectContextProvider>
			</>,
		)
	}

	return renderedProjects
}

function Projects() {
	return <Section>{renderProjects(ProjectsData)}</Section>
}

export default Projects
