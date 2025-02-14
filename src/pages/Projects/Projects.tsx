import React, { useCallback } from 'react'
import { A, Carousel, ProjectContextProvider, ProjectsData, ProjectsDataType, ProjectTile, Section } from 'components'
import { Box } from '@mui/material'

function Projects() {
	const renderProjectsSlide = useCallback((projectsData: ProjectsDataType) => {
		let renderedProjects = []

		for (const project in projectsData) {
			renderedProjects.push({
				label: <h2>{projectsData[project].name}</h2>,
				content: (
					<div key={projectsData[project].name}>
						<Box sx={{ display: 'flex', justifyContent: 'space-evenly', paddingBottom: '1em' }}>
							<ProjectContextProvider value={projectsData[project]}>
								<ProjectTile
									size={200}
									identifier={projectsData[project].pagePath + '-projects-tile'}
									page
								/>
							</ProjectContextProvider>
						</Box>
						<p>{projectsData[project].description}</p>
					</div>
				),
			})
		}

		return renderedProjects
	}, [])

	return (
		<Section>
			<h1>Projects</h1>

			<p>
				Here are some projects I found interesting and informative. Even more projects are listed in my <A href='/documents/Arth_Shukla_CV.pdf'>CV</A>. To see more information, please click on the project icon.
			</p>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Carousel
					slides={[...renderProjectsSlide(ProjectsData)]}
					sx={{ maxWidth: 'min(100%, 1200px)' }}
				/>
			</Box>
		</Section>
	)
}

export default Projects
