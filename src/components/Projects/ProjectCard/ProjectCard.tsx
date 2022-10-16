import React from 'react'
import { ProjectContextConsumer } from '../ProjectContext'

function ProjectCard() {
	return (
		<ProjectContextConsumer>
			{project =>
				project && (
					<>
						<h2>{project.name}</h2>
					</>
				)
			}
		</ProjectContextConsumer>
	)
}

export default ProjectCard
