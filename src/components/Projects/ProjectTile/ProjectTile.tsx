import React, { useCallback } from 'react'
import CircleLogo from '../../CircleLogo'
import { ProjectContextConsumer } from '../ProjectContext'
import useTheme from '@mui/material/styles/useTheme'
import IconButton from '@mui/material/IconButton'
import { Link } from '@mui/material'

import './ProjectTile.scss'

function ProjectTile({ size, ...rest }: { size: number; [x: string]: any }) {
	const theme = useTheme()

	const ProjectLogo = useCallback(
		(project: any) => (
			<CircleLogo
				logo={project.logo(size, theme.palette.text.primary)}
				size={size}
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
						href={String(project.deployment)}
						target='_blank'
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
