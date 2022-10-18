import React from 'react'
import { Section, ProjectContextProvider, ProjectCard, Project } from '../../components'
import { Link as MUILink, Breadcrumbs } from '@mui/material'
import { Link } from 'react-router-dom'

function Projectnfo({ project }: { project: Project }) {
	return (
		<Section>
			<Breadcrumbs sx={{ paddingBottom: '1em' }}>
				<MUILink
					component={Link}
					to='/projects'
					underline='hover'
					color='inherit'
				>
					Project
				</MUILink>
				<MUILink
					component={Link}
					to={`/projects/${project.pagePath}`}
					underline='hover'
					color='#fff'
				>
					{project.name}
				</MUILink>
			</Breadcrumbs>
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
