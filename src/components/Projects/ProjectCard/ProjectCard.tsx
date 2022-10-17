import React, { useEffect, useState } from 'react'
import { Carousel } from '../..'
import type { Project } from '../ProjectsData'

import './ProjectCard.scss'

function ProjectCard({ project }: { project: any }) {
	return <Carousel slides={project} />
}

export default ProjectCard
