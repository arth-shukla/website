import React, { useCallback } from 'react'
import CircleLogo from '../../CircleLogo'
import { ProjectContextConsumer } from '../ProjectContext'
import useTheme from '@mui/material/styles/useTheme'
import { useNavigate } from 'react-router-dom'

import './ProjectTile.scss'
import { Project } from '../ProjectsData'

function ProjectTile({ size, identifier, linkOverride, page, ...rest }: { size: number; identifier?: string; linkOverride?: URL; page?: boolean; [x: string]: any }) {
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

	const goto = (project: Project) => {
		if (linkOverride) window.open(linkOverride, '_blank')
		else navigate(`/projects/${project.pagePath}`)
		window.scrollTo(0, 0)
	}

	return (
		<ProjectContextConsumer>
			{project =>
				project && (
					<div
						className='project-tile-wrapper'
						style={{ height: size * 1.3, width: size * 1.3 }}
					>
						<button
							onClick={() => goto(project)}
							className='project-tile'
							aria-label={`${page ? 'Info Page' : 'Deployment'} for ${project.name}`}
							title={`${page ? 'Info Page' : 'Deployment'} for ${project.name}`}
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
