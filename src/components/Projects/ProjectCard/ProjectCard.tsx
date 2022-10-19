import React from 'react'
import { Carousel, ProjectTile } from '../..'
import { ProjectContextConsumer } from '../ProjectContext'
import { Box, Link, Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

import './ProjectCard.scss'

function ProjectCard() {
	return (
		<ProjectContextConsumer>
			{project =>
				project && (
					<Box
						className='project-card'
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'stretch',
							justifyContent: 'space-evenly',
						}}
					>
						<Box className='info-container'>
							<Box
								className='project-card-header'
								sx={{ display: 'flex' }}
							>
								<Box sx={{ flexGrow: 1 }}>
									<h1 style={{ margin: 0 }}>{project.name}</h1>
									<Stack
										direction='row'
										spacing={1}
									>
										<IconButton
											component={Link}
											href={String(project.deployment)}
											target='_blank'
											size='large'
											edge='start'
											color='inherit'
											aria-label={'Deployment page for ' + project.name}
											title={'Deployment page for ' + project.name}
										>
											<LaunchIcon fontSize='large' />
										</IconButton>
										<IconButton
											component={Link}
											href={String(project.GitHub)}
											target='_blank'
											size='large'
											edge='start'
											color='inherit'
											aria-label={'GitHub page for ' + project.name}
											title={'GitHub page for ' + project.name}
										>
											<GitHubIcon fontSize='large' />
										</IconButton>
									</Stack>
								</Box>
								<Box
									className='project-tile-md-scr'
									sx={{ width: 225 }}
								>
									<ProjectTile
										size={100}
										className='project-tile-md-scr'
									/>
								</Box>
							</Box>
							<Box
								sx={{ display: 'flex', justifyContent: 'center' }}
								className='project-tile-sm-scr'
							>
								<ProjectTile
									size={200}
									className='project-tile-sm-scr'
								/>
							</Box>
							<Carousel
								slides={project.carouselSlides}
								maxHeight={400}
							/>
						</Box>
						<Box
							sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}
							className='project-tile-lg-scr'
						>
							<ProjectTile
								size={300}
								className='project-tile-lg-scr'
							/>
						</Box>
					</Box>
				)
			}
		</ProjectContextConsumer>
	)
}

export default ProjectCard
