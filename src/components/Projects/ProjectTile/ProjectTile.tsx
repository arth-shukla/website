import React, { useCallback } from 'react'
import CircleLogo from '../../CircleLogo'
import { ProjectContextConsumer } from '../ProjectContext'
import useTheme from '@mui/material/styles/useTheme'
import { useNavigate } from 'react-router-dom'

import './ProjectTile.scss'

function ProjectTile({ size, identifier, ...rest }: { size: number; identifier?: string; [x: string]: any }) {
	const theme = useTheme()
	const navigate = useNavigate()

	const ProjectLogo = useCallback(
		(project: any) => (
			<CircleLogo
				logo={project.logo(size, theme.palette.text.primary, theme.palette.primary.main, theme.palette.mode === 'dark')}
				size={size}
				identifier={String(identifier)}
				{...rest}
			/>
		),
		[theme.palette.text.primary, theme.palette.primary.main, theme.palette.mode, size, rest, identifier],
	)

	const hexToRGB = (hex: string) => {
		let r = hex.substring(1, 3)
		let g = hex.substring(3, 5)
		let b = hex.substring(5, 7)

		return `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}`
	}

	return (
		<ProjectContextConsumer>
			{project =>
				project && (
					<div
						className='project-tile-wrapper'
						style={{ height: size * 1.4, width: size * 1.3 }}
					>
						<button
							onClick={() => navigate(`/projects/${project.pagePath}`)}
							className='project-tile'
							aria-label={`Deployment for ${project.name}`}
							title={`Deployment for ${project.name}`}
							style={
								{
									'--project-tile-primary-main': hexToRGB(theme.palette.primary.main),
									'--project-tile-dim-factor': theme.palette.mode === 'dark' ? 0.1 : 0.2,
									'--project-tile-size': `${size}px`,
								} as React.CSSProperties
							}
						>
							<>{ProjectLogo(project)}</>
						</button>
					</div>
				)
			}
		</ProjectContextConsumer>
	)
}

export default ProjectTile
