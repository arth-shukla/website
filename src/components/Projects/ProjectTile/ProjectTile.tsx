import React, { useCallback } from 'react'
import CircleLogo from '../../CircleLogo'
import { ProjectContextConsumer } from '../ProjectContext'
import useTheme from '@mui/material/styles/useTheme'
import IconButton from '@mui/material/IconButton'
import { Link } from '@mui/material'

import './ProjectTile.scss'

function ProjectTile({ size }: { size: number }) {
	const theme = useTheme()

	const ProjectLogo = useCallback(
		(project: any) => (
			<CircleLogo
				logo={project.logo(size, theme.palette.text.primary)}
				size={size}
			/>
		),
		[theme.palette.text.primary, size],
	)

	return (
		<ProjectContextConsumer>
			{project =>
				project && (
					<IconButton
						component={Link}
						href={String(project.deployment)}
						target='_blank'
					>
						{ProjectLogo(project)}
					</IconButton>
				)
			}
		</ProjectContextConsumer>
	)
}

export default ProjectTile
