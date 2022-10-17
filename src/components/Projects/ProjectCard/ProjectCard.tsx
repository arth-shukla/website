import React from 'react'
import { ProjectContextConsumer } from '../ProjectContext'

import './ProjectCard.scss'

function ProjectCard() {
	return (
		<ProjectContextConsumer>
			{project =>
				project && (
					<div className='project-card'>
						<h2>{project.name}</h2>
						<p>Motivation</p>
						<p>{project.motivation}</p>
						<p>Features</p>
						<p>{project.features}</p>
					</div>
				)
			}
		</ProjectContextConsumer>
	)
}

export default ProjectCard
