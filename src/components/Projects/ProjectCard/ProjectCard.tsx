import React from 'react'
import { Carousel, ProjectTile } from '../..'
import { ProjectContextConsumer } from '../ProjectContext'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from '@mui/material/Link'

import './ProjectCard.scss'

function ProjectCard({ projectCarousel }: { projectCarousel: any }) {
	return (
		<ProjectContextConsumer>
			{project =>
				project && (
					<Box className='project-card'>
						<Box sx={{ display: 'flex' }}>
							<Box sx={{ flexGrow: 1 }}>
								<h1 style={{ margin: 0 }}>{project.name}</h1>
								<IconButton
									component={Link}
									href={String(project.GitHub)}
									target='_blank'
									size='large'
									edge='start'
									color='inherit'
									aria-label={'GitHub page for ' + project.name}
								>
									<GitHubIcon fontSize='large' />
								</IconButton>
							</Box>
							<Box className='project-tile'>
								<ProjectTile size={100} />
							</Box>
						</Box>
						<Carousel slides={projectCarousel} />
					</Box>
				)
			}
		</ProjectContextConsumer>
	)
}

export default ProjectCard
