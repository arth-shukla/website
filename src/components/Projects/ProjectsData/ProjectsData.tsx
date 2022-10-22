import React from 'react'

const ProjectIcons = {
	DiceRollerLogo: (size: number, theme: string) => {
		const r = ((size / 2) * Math.sqrt(2)) / 2

		return (
			<svg
				width={r * 2}
				height={r * 2}
				x={size / 2 - r}
				y={size / 2 - r}
				viewBox={`0 0 512.021 512.021`}
				className='circle-logo'
				aria-hidden={true}
			>
				<path
					fill={theme}
					d='M490.421,137.707c-0.085-1.003-0.149-2.005-0.555-2.987c-0.107-0.256-0.32-0.427-0.448-0.683 c-0.277-0.533-0.597-0.981-0.96-1.472c-0.725-1.003-1.536-1.835-2.517-2.517c-0.256-0.171-0.363-0.491-0.64-0.64l-224-128 c-3.285-1.877-7.296-1.877-10.581,0l-224,128c-0.256,0.171-0.363,0.469-0.619,0.64c-1.024,0.704-1.899,1.557-2.645,2.624 c-0.299,0.427-0.597,0.811-0.832,1.28c-0.149,0.277-0.384,0.469-0.512,0.768c-0.469,1.173-0.619,2.389-0.661,3.584 c0,0.128-0.107,0.256-0.107,0.384v0.171c0,0.021,0,0.021,0,0.043v234.304c0,0.021,0,0.064,0,0.085v0.064 c0,0.213,0.149,0.405,0.171,0.619c0.085,1.493,0.32,2.987,1.045,4.352c0.043,0.085,0.128,0.107,0.171,0.192 c0.277,0.491,0.768,0.811,1.131,1.259c0.789,0.981,1.557,1.941,2.603,2.603c0.107,0.064,0.149,0.192,0.235,0.235l224,128 c1.664,0.939,3.477,1.408,5.312,1.408s3.648-0.469,5.291-1.408l224-128c0.107-0.064,0.149-0.192,0.256-0.256 c0.981-0.597,1.664-1.493,2.411-2.389c0.427-0.512,1.003-0.896,1.323-1.472c0.043-0.064,0.107-0.107,0.149-0.171 c0.576-1.109,0.683-2.325,0.853-3.52c0.064-0.491,0.384-0.939,0.384-1.451V138.688 C490.677,138.347,490.443,138.048,490.421,137.707z M455.52,136.981l-78.251,31.296L291.211,43.093L455.52,136.981z M256.011,29.504l97.067,141.184H158.944L256.011,29.504z M220.747,43.115l-86.037,125.163L56.48,136.981L220.747,43.115z M42.677,154.432l80.768,32.32L42.677,332.16V154.432z M138.635,203.392l98.325,178.773L49.248,364.288L138.635,203.392z M245.344,482.965l-165.12-94.336l165.12,15.573V482.965z M256.011,372.544l-99.285-180.523h198.571L256.011,372.544z M266.677,482.965v-78.571l165.035-15.723L266.677,482.965z M274.997,382.357l98.411-178.901l89.365,160.853L274.997,382.357z M469.344,332.203l-80.811-145.451l80.811-32.32V332.203z'
				/>
			</svg>
		)
	},
	AnimLibraryIcon: (size: number, theme: string, primary: string, dark: boolean) => {
		return (
			<svg
				width='100%'
				// height={size}
				viewBox='0 0 200 200'
				y='4%'
				className='circle-logo'
				style={{ maxWidth: '100%' }}
				aria-hidden={true}
			>
				<rect
					x='43'
					y='70'
					width='100'
					height='65'
					rx='10'
					ry='10'
					fill={primary}
					fillOpacity='60%'
				/>
				<circle
					cx='103'
					cy='55'
					r='20'
					strokeWidth={18}
					stroke={primary}
					fill='none'
				/>
				<path
					d='M115,145 h40 a10,10 0 0 0 8,-14 l -25,-40 a6,6 0 0 0 -10,0 l-23,40 a10,10 0 0 0 8, 14 Z'
					fill={primary}
					points='30,50 60,50 45,25'
				/>
			</svg>
		)
	},
	NLPSeriesLogo: (size: number, theme: string, primary: string, dark: boolean) => {
		const svgProps = {
			fill: 'none',
			strokeWidth: 4,
			strokeLinecap: 'round' as 'round',
		}

		const textBoxProps = {
			...svgProps,
			stroke: theme,
		}

		const cpuOuterProps = {
			...svgProps,
			stroke: primary,
		}
		const cpuOuterLinesLength = 10

		const cpuInnerProps = {
			...svgProps,
			strokeWidth: 0,
			fill: theme,
		}

		return (
			<svg
				width='100%'
				// height={size}
				viewBox='0 0 280 280'
				y='4%'
				className='circle-logo'
				style={{ maxWidth: '100%' }}
				aria-hidden={true}
			>
				<path
					d='M125,55 h100 a10,10 0 0 1 10,10 v75 a10,10 0 0 1 -10,10 h-10 v15 l-20,-15 h-15 m-65,-65 v-20 a10,10 0 0 1 10,-10'
					{...textBoxProps}
					points='30,50 60,50 45,25'
				/>
				<path
					d='M55,100 h45 m65,65 v20 a10,10 0 0 1 -10,10 h-70 l-20,15 v-15 h-10 a10,10 0 0 1 -10,-10 v-75 a10,10 0 0 1 10,-10'
					{...textBoxProps}
					points='30,50 60,50 45,25'
				/>
				<rect
					x='113'
					y='98'
					width='54'
					height='54'
					rx='10'
					{...cpuOuterProps}
				/>
				{[1, 2, 3].map((v, k) => (
					<>
						<path
							d={`M${(v * 54) / 4 + 113},${98 - 2} v-${cpuOuterLinesLength}`}
							{...cpuOuterProps}
						/>
						<path
							d={`M${(v * 54) / 4 + 113},${98 + 2 + cpuOuterLinesLength + 54} v-${cpuOuterLinesLength}`}
							{...cpuOuterProps}
						/>
						<path
							d={`M${113 - 2},${(v * 54) / 4 + 98} h-${cpuOuterLinesLength}`}
							{...cpuOuterProps}
						/>
						<path
							d={`M${113 + 2 + cpuOuterLinesLength + 54},${(v * 54) / 4 + 98} h-${cpuOuterLinesLength}`}
							{...cpuOuterProps}
						/>
					</>
				))}
				<rect
					x='128'
					y='113'
					width='24'
					height='24'
					rx='2'
					{...cpuInnerProps}
				/>
			</svg>
		)
	},
}

export interface Project {
	name: string
	pagePath: string
	GitHub?: URL
	logo: any
	deployment: URL | undefined
	description: React.ReactElement | string
	carouselSlides: Array<{
		label: React.ReactElement | string
		content: React.ReactElement | string
	}>
}

const DiceRollerData: Project = {
	name: 'TTRPG Dice Roller',
	pagePath: 'dice-roller',
	GitHub: new URL('https://github.com/arth-shukla/dice-roller'),
	logo: ProjectIcons.DiceRollerLogo,
	deployment: new URL('https://arth-shukla.github.io/dice-roller/'),
	description: "This is a dice roller made for quick rolling and an aesthetically pleasing, accessible design. It's great for TTRPGS like D&D, Cyberpunk Red, and more.",
	carouselSlides: [
		{
			label: <h2>Description and Purpose</h2>,
			content: (
				<>
					<p>In TTRPGs like D&amp;D, rolling dice is essential to the game. I have sets of physical dice, but sometimes I forget them, and sometimes I can't bring the dice with me.</p>
					<p>However, most online rollers are a nightmare to use on phones. even the nicer options still have flaws.</p>
					<p>The Google roller is simple and looks nice, but is slow to roll many different dice. The D&amp;D Beyond roller is perfect in almost every way, but it only works on chracters made in D&amp;D Beyond&mdash;sometimes I want to play other TTRPGs.</p>
					<p>So, I made a dice roller for myself and my friends which is aesthetically pleasing, accessible design. It's great for TTRPGS like D&amp;D, Cyberpunk Red, and more.</p>
				</>
			),
		},
		{
			label: <h2>Motivation</h2>,
			content: (
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
		},
		{
			label: <h2>Features</h2>,
			content: (
				<>
					To solve these issues, I implemented the following features:
					<ol>
						<li>
							<b>Efficiency</b>: Buttons are available to quickly roll 1-8 of a standard D&amp;D dice set (d4, d6, d8, d10, d12, d20) with a single button press. While this should cover most use cases, the user can also enter a custom number of dice as well.
						</li>
						<li>
							<b>Aesthetically Pleasing</b>: Create interface which is
							<ul>
								<li>simple,</li>
								<li>supports dark/light mode and different color themes, and</li>
								<li>supports mobile, tablet, and computer browsers and screen sizes.</li>
							</ul>
						</li>
						<li>
							<b>Accessibility</b>: This dice roller is compatible with the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards and uses the ARIA Authoring Practices Guide (APG) as a foundation for more complicated components.
						</li>
					</ol>
				</>
			),
		},
	],
}

const AnimationLibrary: Project = {
	name: 'Animations and Icon Component Library',
	pagePath: 'anim-library',
	GitHub: new URL('https://github.com/arth-shukla/my-icons'),
	logo: ProjectIcons.AnimLibraryIcon,
	deployment: new URL('https://arth-shukla.github.io/my-icons-documentation/'),
	description: 'This is a React component library with animations and icons which I use frequently. Many of those components are used in this website!',
	carouselSlides: [
		{
			label: <h2>Description and Purpose</h2>,
			content: (
				<>
					<p>I often want similar functionality across different websites I make. So, I made a React component library with animations and icons which I use frequently. Many of those components are used in this website!</p>
					<p>
						The library can be installed by running <code>npm i @arth-shukla/my-icons</code>.
					</p>
				</>
			),
		},
		{
			label: <h2>Motivation</h2>,
			content: (
				<>
					<p>I often use certain components frequently to fulfill the same purposes, like</p>
					<ul>
						<li>changing page between light and dark mode,</li>
						<li>changing the color of some element, or</li>
						<li>animations to add extra flare.</li>
					</ul>
					<p>I didn't want to keep re-making these components, and I wanted flexibility with how I could use these components.</p>
					<p>If I want, I should be able to change the state of component using an external state variable (e.g. change light/dark mode button along with page), but I shouldn't need have access to essential functions of a component (e.g. the animation of a light/dark mode button when selected).</p>
				</>
			),
		},
		{
			label: <h2>Features</h2>,
			content: (
				<>
					<p>To meet development needs, I made each component in this library so that they are:</p>
					<ol>
						<li>
							<b>Adaptable</b>: The component can interact with external state variables (e.g. once a light/dark mode button is clicked, change the state of the page).
						</li>
						<li>
							<b>Self-Reliant</b>: Should maintain internal state (e.g. when left on its own, a light/dark mode button will still switch between light/dark animations, even if the site is not 'connected'.)
						</li>
						<li>
							<b>Accessible</b>: Compatible with Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.
						</li>
					</ol>
				</>
			),
		},
	],
}

const NLPWorkshopSeries: Project = {
	name: 'ACM AI NLP Workshop Series',
	pagePath: 'nlp-series',
	GitHub: new URL('https://github.com/acmucsd/acm-ai-workshops/tree/main/2022/SP22/nlp-series'),
	logo: ProjectIcons.NLPSeriesLogo,
	deployment: undefined,
	description: 'This is a workshop series on NLP topics I worked for for ACM AI at UCSD. The workshop was held Spring 2022.',
	carouselSlides: [
		{
			label: <h2>Description</h2>,
			content: (
				<>
					<p>This workshop series for ACM AI from Spring 2022 consists of 3 workshops:</p>
					<ol>
						<li>
							<b>Workshop 1: Intro to NLP</b>: For the first workshop, we introduce the basics of NLP (vectorization, lemmatization, etc) by solving a binary classification problem: labeling Tweets as Hate Speech or Not Hate Speech.
						</li>
						<li>
							<b>Workshop 2: RNNs for Multiclassification</b>: In the second workshop, we discuss a more challenging problem for NLP: multiclassification. We tackle classifying phrases into different emotions using an RNN.
						</li>
						<li>
							<b>Workshop 3: Seq2Seq RNNs for Translation</b>: For the final workshop, we build a machine translation model with an encoder/decoder architecture to translate between English and French.
						</li>
					</ol>
				</>
			),
		},
		{
			label: <h2>Topics Covered</h2>,
			content: (
				<>
					<ol>
						<li>
							<b>Workshop 1: Intro to NLP</b>:
							<ul>
								<li>Bag of Words</li>
								<li>Logistic Regression</li>
								<li>Neural Networks</li>
								<li>Accuracy, Precision, and Recall</li>
							</ul>
						</li>
						<li>
							<b>Workshop 2: RNNs for Multiclassification</b>:
							<ul>
								<li>Data Cleaning and Processing (Stop Words, Stemming, One-Hot Encoding)</li>
								<li>Recurrent Neural Netowrks (RNNs) and Sequential Data</li>
							</ul>
						</li>
						<li>
							<b>Workshop 3: Seq2Seq RNNs for Machine Translation</b>:
							<ul>
								<li>Encoder/Decoder Architecture</li>
								<li>LSTMs</li>
							</ul>
						</li>
					</ol>
				</>
			),
		},
		{
			label: <h2>Reflection</h2>,
			content: (
				<>
					<p>This was my first workshop series for ACM AI. It was very fun to communicate the NLP ideas I'd learned during high school to make Workshop 1 and Workshop 2, and I had a great time learning about LSTMs, attention, and more to prepare workshop 3.</p>
					<p>The target of this workshop was beginner-intermediate students. From speaking to audience members, it seems most people were able to learn something new. In that regard, I believe this series was successful.</p>
					<p>If I could make one change to improve the workshop, I would scale the workshop time for each successive workshop. The topics were increasingly complicated, with each set of topics requiring more time to explain. Longer workshops would allow us to dive deeper into the workshop content.</p>
				</>
			),
		},
	],
}

export interface ProjectsDataType {
	[x: string]: Project
}

const ProjectsData = {
	'Dice Roller': DiceRollerData,
	'Animation Library': AnimationLibrary,
	'NLP Workshop Series': NLPWorkshopSeries,
}

export default ProjectsData
