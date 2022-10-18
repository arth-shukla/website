import React from 'react'
import { Section, ProjectContextProvider, ProjectCard, Project } from '../../components'

function Projectnfo({ project }: { project: Project }) {
	return (
		<Section>
			<ProjectContextProvider value={project}>
				<ProjectCard
					projectCarousel={[
						{ label: <h2>Description</h2>, content: project.description },
						{ label: <h2>Motivation</h2>, content: project.motivation },
						{ label: <h2>Features</h2>, content: project.features },
					]}
				/>
			</ProjectContextProvider>
		</Section>
	)
}

export default Projectnfo
