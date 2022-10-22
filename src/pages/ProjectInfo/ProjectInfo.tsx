import React from 'react'
import { Section, ProjectContextProvider, ProjectCard, Project } from '../../components'
import { Link as MUILink, Breadcrumbs, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

import './ProjectInfo.scss'

function Projectnfo({ project }: { project: Project }) {
	const theme = useTheme()

	return (
		<Section>
			<Breadcrumbs
				// sx={{ paddingBottom: '1em' }}
				className='project-info-breadcrumbs'
			>
				<MUILink
					component={Link}
					to='/projects'
					underline='hover'
					color='inherit'
					id='project-info-breadcrumbs-1'
				>
					Project
				</MUILink>
				<MUILink
					component={Link}
					to={`/projects/${project.pagePath}`}
					underline='hover'
					color={theme.palette.mode === 'dark' ? '#fff' : '#000'}
					id='project-info-breadcrumbs-2'
				>
					{project.name}
				</MUILink>
			</Breadcrumbs>
			<ProjectContextProvider value={project}>
				<ProjectCard />
			</ProjectContextProvider>
		</Section>
	)
}

export default Projectnfo
