import React from 'react'
import { Project } from '..'

const DiceRollerData: Project = {
	name: 'TTRPG Dice Roller',
	GitHub: new URL('https://github.com/arth-shukla/dice-roller'),
	deployment: new URL('https://arth-shukla.github.io/dice-roller/'),
	description: "This is a dice roller made for quick rolling and an aesthetically pleasing, accessible design. It's great for TTRPGS like D&D, Cyberpunk Red, and more.",
	motivation: (
		<>
			<p>Most Dice Rollers suffer from the same three problems:</p>
			<ol>
				<li></li>
			</ol>
		</>
	),
}

export interface ProjectsDataType {
	[x: string]: Project
}

const ProjectsData = {
	'Dice Roller': DiceRollerData,
}

export default ProjectsData
