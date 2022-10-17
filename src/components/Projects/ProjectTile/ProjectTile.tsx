import React from 'react'
import { ProjectContextConsumer } from '../ProjectContext'

function ProjectTile() {
	return (
		<ProjectContextConsumer>
			{project =>
				project && (
					<>
						<a
							target='_blank'
							rel='noreferrer'
							href={String(project.GitHub)}
						>
							{String(project.GitHub)}
						</a>
					</>
				)
			}
		</ProjectContextConsumer>
	)
}

export default ProjectTile
