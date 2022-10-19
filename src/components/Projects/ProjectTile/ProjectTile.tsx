import React, { useCallback } from 'react'
import CircleLogo from '../../CircleLogo'
import { ProjectContextConsumer } from '../ProjectContext'
import useTheme from '@mui/material/styles/useTheme'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'

import './ProjectTile.scss'

function ProjectTile({ size, identifier, ...rest }: { size: number; identifier?: string; [x: string]: any }) {
	const theme = useTheme()

	const ProjectLogo = useCallback(
		(project: any) => (
			<CircleLogo
				logo={project.logo(size, theme.palette.text.primary, theme.palette.primary.main, theme.palette.mode === 'dark')}
				size={size}
				identifier={String(identifier)}
				{...rest}
			/>
		),
		[theme.palette.text.primary, size, rest],
	)

	return (
		<ProjectContextConsumer>
			{project =>
				project && (
					<IconButton
						className='project-tile'
						component={Link}
						to={`/projects/${project.pagePath}`}
						aria-label={`Deployment for ${project.name}`}
						title={`Deployment for ${project.name}`}
					>
						{ProjectLogo(project)}
					</IconButton>
				)
			}
		</ProjectContextConsumer>
	)
}

export default ProjectTile
