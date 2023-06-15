import React from 'react'
import { Section, ProjectContextProvider, ProjectCard, Project } from '../../components'

import './ProjectInfo.scss'

function Projectnfo({ project }: { project: Project }) {
	return (
		<Section className='project-info'>
			<ProjectContextProvider value={project}>
				<ProjectCard />
			</ProjectContextProvider>
		</Section>
	)
}

export default Projectnfo
