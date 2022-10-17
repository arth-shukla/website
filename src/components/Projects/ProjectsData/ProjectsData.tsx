import React from 'react'

import DiceRollerLogo from './dice-roller.svg'

export interface Project {
	name: string
	GitHub?: URL
	logo: any
	deployment: URL
	description: React.ReactElement | string
	motivation: React.ReactElement | string
	features: React.ReactElement | string
}

const DiceRollerData: Project = {
	name: 'TTRPG Dice Roller',
	GitHub: new URL('https://github.com/arth-shukla/dice-roller'),
	logo: <DiceRollerLogo />,
	deployment: new URL('https://arth-shukla.github.io/dice-roller/'),
	description: "This is a dice roller made for quick rolling and an aesthetically pleasing, accessible design. It's great for TTRPGS like D&D, Cyberpunk Red, and more.",
	motivation: (
		<>
			Most Dice Rollers suffer from the same three problems:
			<ol>
				<li>
					<b>Efficiency</b>: Most dice rollers have clunky UIs or unnecessary forms; as a result, it takes several button presses to roll a single dice.
				</li>
				<li>
					<b>Aesthetically Pleasing</b>: Many dice roller UIs are unattractive, poorly layed out, or don't support mobile/tablet screens very well. However, the most likely use case for a dice roller would be one's phone/tablet!
				</li>
				<li>
					<b>Accessibility</b>: D&amp;D and TTRPGs shoud be inclusive to everyone, but some websites aren't made with certain accessiblity needs in mind.
				</li>
			</ol>
		</>
	),
	features: (
		<>
			To solve these issues, I implemented the following features:
			<ol>
				<li>
					<b>Efficiency</b>: Buttons are available to quickly roll 1-8 of a standard D&amp;D dice set (d4, d6, d8, d10, d12, d20) with a single button press. While this should cover most use cases, the user can also enter a custom number of dice as well.
				</li>
				<li>
					Aesthetically Pleasing: Create interface which is
					<ul>
						<li>simple,</li>
						<li>supports dark/light mode and different color themes, and</li>
						<li>supports mobile, tablet, and computer browsers and screen sizes.</li>
					</ul>
				</li>
				<li>Accessibility: This dice roller is compatible with the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards and uses the ARIA Authoring Practices Guide (APG) as a foundation for more complicated components.</li>
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
