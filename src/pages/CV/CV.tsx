import React from 'react'
import Box from '@mui/system/Box'
import { Section, Socials, SocialsContext, SocialsContextProvider, A } from 'components'

import useTheme from '@mui/material/styles/useTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import Divider from '@mui/material/Divider'

import './CV.scss'

const CVSocials: SocialsContext = {
	Email: {
		include: true,
		text: true,
	},
	GitHub: {
		include: true,
		text: true,
	},
	LinkedIn: {
		include: true,
		text: true,
	},
	'Phone Number': {
		include: true,
		text: true,
	},
}

const CVSocialsEmailGitHub: SocialsContext = {
	Email: {
		include: true,
		text: true,
	},
	GitHub: {
		include: true,
		text: true,
	},
	LinkedIn: {
		include: false,
		text: false,
	},
	'Phone Number': {
		include: false,
		text: false,
	},
}

const CVSocialsLinkedInPhone: SocialsContext = {
	Email: {
		include: false,
		text: false,
	},
	GitHub: {
		include: false,
		text: false,
	},
	LinkedIn: {
		include: true,
		text: true,
	},
	'Phone Number': {
		include: true,
		text: true,
	},
}

function CVSocialsLinks() {
	return (
		<>
			<SocialsContextProvider value={CVSocials}>
				<Socials
					className='cv-socials-1'
					mt={0}
				/>
			</SocialsContextProvider>
			<SocialsContextProvider value={CVSocialsEmailGitHub}>
				<Socials
					className='cv-socials-21'
					mt={0}
				/>
			</SocialsContextProvider>
			<SocialsContextProvider value={CVSocialsLinkedInPhone}>
				<Socials
					className='cv-socials-22'
					mt={0}
				/>
			</SocialsContextProvider>
			<SocialsContextProvider value={CVSocials}>
				<Socials
					className='cv-socials-3'
					mt={0}
					direction='column'
				/>
			</SocialsContextProvider>
		</>
	)
}

function CVSection({ style, ...rest }: any) {
	return (
		<Box
			className='cv-section'
			sx={{ padding: '0 2em', ...style }}
			{...rest}
		/>
	)
}

function RFloat(props: any) {
	return (
		<>
			<span
				style={{ float: 'right' }}
				{...props}
			/>
			<ClrDiv />
		</>
	)
}

function ClrDiv(props: any) {
	return (
		<div
			style={{ clear: 'both' }}
			{...props}
		/>
	)
}

function PSlim(props: any) {
	return (
		<div
			className='pslim'
			{...props}
		/>
	)
}

function ULSlim(props: any) {
	return (
		<ul
			style={{ margin: '0' }}
			{...props}
		/>
	)
}

function DivBP({ style, ...rest }: any) {
	return (
		<div
			style={{ paddingBottom: '1em', ...style }}
			{...rest}
		/>
	)
}

function CV() {
	const theme = useTheme()
	return (
		<ThemeProvider theme={theme}>
			<Section className='cv-intro-section'>
				<h1>My CV</h1>
				<DivBP>
					My CV is available for{' '}
					<A
						href={process.env.PUBLIC_URL + '/documents/Arth_Shukla_CV.pdf'}
						target='_blank'
					>
						download as pdf
					</A>
					.
				</DivBP>
			</Section>
			<Box
				className='cv'
				sx={{
					border: `${theme.palette.primary.main} solid 2px`,
					boxShadow: `8px 8px ${theme.palette.primary.main}`,
					display: 'none',
				}}
			>
				<Box className='cv-sub'>
					<h2 style={{ textAlign: 'center' }}>
						Arth{' '}
						<span
							id='title-span'
							style={{ color: theme.palette.primary.main }}
						>
							Shukla
						</span>
					</h2>
					<DivBP>
						<CVSocialsLinks />
					</DivBP>
					<Divider textAlign='left'>
						<h3>Education</h3>
					</Divider>
					<CVSection>
						<DivBP>
							<PSlim>
								<b>University of California, San Diego</b>
								<RFloat>September 2021 - June 2025</RFloat>
							</PSlim>

							<PSlim>
								<i>Bachelor of Science in Mathematics-Computer Science</i>
								<RFloat>GPA - 4.0</RFloat>
							</PSlim>
						</DivBP>
						<DivBP>
							<PSlim>
								<b>Sequoia High School</b>
								<RFloat>August 2017 - June 2021</RFloat>
							</PSlim>

							<PSlim>
								<i>IB Diploma Recipient, Honor Roll, Track &amp; Field, Cross Country, Model UN, Debate Team</i>
								<RFloat>GPA - 4.6</RFloat>
							</PSlim>
						</DivBP>

						<DivBP>
							<PSlim>
								<b>Relevant Coursework</b>
							</PSlim>
							<PSlim>
								<i>Completed</i>: Design and Analysis of Algorithms, Advanced Data Structures, Optimizations for Data Science I and II, Computer Organization and Systems Programming, Data Structures and Object-Oriented Design, Computer Science and Object-Oriented Programming - Java, Networks and Digital Communications, Data Warehousing to Big Data, Statistical Methods and Probability, Enumerative Combinatorics, Abstract Algebra I and II, Linear Algebra, Multivariable Calculus, Vector Calculus, Differential Equations
								<br />
							</PSlim>
							<PSlim>
								<i>Ongoing in Spring 2023</i>: Supervised Machine Learning, Theory of Computation, Intro to Computational Statistics, Synthesis 100
							</PSlim>
						</DivBP>
					</CVSection>
					<Divider textAlign='left'>
						<h3>Experience</h3>
					</Divider>
					<CVSection>
						<DivBP>
							<PSlim>
								<b>Bittner Development Co.</b>
							</PSlim>
							<PSlim>Bittner Development Group is an education technology company which creates interactives and products for clients like Norton, Barnes and Noble, SparkNotes, Thames and Hudson, and more.</PSlim>
							<PSlim>
								<b>Technologies Used</b>: <u>Web Development</u>: React, SCSS, Node.js; <u>DevOps</u>: GitLab, Git, WSL; <u>Scripting and Automation</u>: TypeScript, JavaScript, Java; <u>Development Standards</u>: Web Content Accessibility Guidelines (WCAG) 2.1 AAA, Aria Authoring Practices Guide (APG), Norton Design System; <u>Processes</u>: Agile Methodology
							</PSlim>
							<PSlim>
								<b>
									<i>Software Developer</i>
								</b>
								<RFloat>August 2022 - Present</RFloat>

								<ULSlim>
									<li>Develop component library and enterprise web application using React and SCSS</li>
									<li>Manage DevOps and CI/CD pipeline using GitLab</li>
									<li>Continue roles from Software Engineering Intern position</li>
								</ULSlim>
							</PSlim>
							<PSlim>
								<b>
									<i>Software Engineering Intern</i>
								</b>
								<RFloat>January 2021 - August 2022</RFloat>

								<ULSlim>
									<li>Web development, QA, and devops of over 10 education interactive projects in React</li>
									<li>Manage and train two interns to complete projects using React and SCSS, GitLab, Git, and WSL</li>
									<li>Code projects in compliance of web content accessibility with WCAG</li>
									<li>Propose, lead, and develop internal and for-client automation projects using Node and native JavaScript</li>
								</ULSlim>
							</PSlim>
							<PSlim>
								<b>
									<i>Media Group Intern</i>
								</b>
								<RFloat>November 2019 - January 2021</RFloat>

								<ULSlim>
									<li>Code questions into over 15 textbooks on Norton's online textbook platform, PCAT, using HTML</li>
									<li>Independent project involving automation of over 10 spreadsheet and data entry tasks using Java improving efficiency by over 90%</li>
								</ULSlim>
							</PSlim>
						</DivBP>
						<DivBP>
							<PSlim>
								<b>ACM AI's Element.AI Competition</b>
							</PSlim>
							<PSlim>I led development and organization of Element.AI, an $8000 competition at UCSD with 200 participants.</PSlim>
							<PSlim>
								<b>Technologies Used</b>: <u>Element.AI</u>: Python, Conda, Java, Maven, OpenAI Gym, PettingZoo, PyGame, Jackson, Squid, Bash
							</PSlim>
							<PSlim>
								<b>
									<i>Lead Developer</i>
								</b>
								<RFloat>July 2022 - Feb 2023</RFloat>

								<ULSlim>
									<li>
										GitHub (open to public): <A>https://github.com/acmucsd/Element.AI</A>
									</li>
									<li>Use Python with Conda and PettngZoo ParrallelEnv to create multi-agent gym environment as the core game the participants' bots solved</li>
									<li>Use Java with Maven and Jackson to create Java sdk for 45 participants (~22.5% of all participants)</li>
									<li>In coordination with IT, use Squid proxy, IPTables and bash scripts to create instructor tools, allowing us to enable/revoke access to wifi, whitelist sites, enable/revoke access to files, and in general control the competition accounts with granularity, both targeted and en masse</li>
									<li>Write proposals and attend meetings to obtain $8000 in sponsorships, attracting 200 participants (limited primarily by the number of UCSD linux lab machines) with hundreds of submissions</li>
								</ULSlim>
							</PSlim>
						</DivBP>
						<DivBP>
							<PSlim>
								<b>Personal Web Development Projects</b>
							</PSlim>
							<PSlim>
								<b>Technologies Used</b>: <u>Web Development</u>: TypeScript, React, Storybook, SCSS; <u>DevOps</u>: Netlify, Git, GitHub Pages, GitHub Packages; <u>Development Standards</u>: Web Content Accessibility Guidelines (WCAG) 2.1 AAA, Aria Authoring Practices Guide (APG)
							</PSlim>
							<PSlim>
								<b>
									<i>Independent Developer</i>
								</b>
								<RFloat>January 2022 - Present</RFloat>

								<ULSlim>
									<li>
										GitHub: <A>https://github.com/arth-shukla</A>
									</li>
									<li>
										Create personal website using React Typescript, SCSS, and Material UI, accessible by WCAG 2.1 AA standard, and publish to custom domain using Netlify: <A>https://arth.website</A>
									</li>
									<li>
										Code mobile-compatible Dice Roller web app with React and SCSS, accessible by WCAG 2.1 AA standards and publish to GitHub Pages: <A>https://arth-shukla.github.io/dice-roller</A>
									</li>
									<li>
										Create Icon Library with React TypeScript and SCSS, publish to GitHub packages: <A>https://github.com/arth-shukla/arth-components</A>; code demos and documentation published on GitHub Pages: <A>https://arth-shukla.github.io/my-icons-documentation</A>
									</li>
								</ULSlim>
							</PSlim>
						</DivBP>
						<DivBP>
							<PSlim>
								<b>ACM AI UCSD</b>
							</PSlim>
							<PSlim>ACM AI is UCSD’s largest AI student org which fosters a community for those interested in AI and research.</PSlim>
							<PSlim>
								<b>Technologies Used</b>: <u>Element.AI</u>: Python, Conda, Java, Maven, OpenAI Gym, PettingZoo, PyGame, Jackson, Squid, Bash; <u>AI/ML Workshops and Projects</u>: Python, PyTorch, TensorFlow, Google Colab; <u>Web Development</u>: TypeScript, React, LESS
							</PSlim>
							<PSlim>
								<b>
									<i>Board – Director of Operations</i>
								</b>
								<RFloat>May 2022 - Present</RFloat>

								<ULSlim>
									<li>Lead team of 7 event leads in creation of competitions, workshops, and socials related to ML/AI</li>
									<li>Coordinate with marketing and development teams to market events and create competitions</li>
								</ULSlim>
							</PSlim>
							<PSlim>
								<b>
									<i>Board – Developer</i>
								</b>
								<RFloat>April 2022 - Present</RFloat>

								<ULSlim>
									<li>Front-end website and AI competition development using React and TypeScript and LESS for ACM AI</li>
									<li>Develop component library, create and alter pages, and manage issues/pull requests on GitHub</li>
								</ULSlim>
							</PSlim>
							<PSlim>
								<b>
									<i>Board – Event Lead </i>
								</b>
								<RFloat>January 2022 - May 2022</RFloat>

								<ULSlim>
									<li>Ideate, create, and host workshops on NLP, deep learning, and ML topics</li>
									<li>Develop and organize competitions run by ACM AI (100-200 submissions on average)</li>
									<li>Coordinate with different parts of ACM AI Board (marketing, social, and other event leads) to host workshops and social events</li>
									<li>Mentor intermediate and beginner ACM Projects teams in developing AI/ML projects</li>
									<li>Promote Diversity, Equity, and Inclusion by planning URM-focuses events, implementing inclusive Discord server management, and working to make AI more accessible</li>
								</ULSlim>
							</PSlim>
							<PSlim>
								<b>
									<i>Machine Learning Engineer</i>
								</b>
								<RFloat>September 2021 - January 2022</RFloat>

								<ULSlim>
									<li>Create model to convert human faces to Cat-Human hybrid using DCGAN, PatchGAN, CycleGAN, and StyleGAN</li>
									<li>Coordinate with team of 3 front- and back-end devs to implement model into user-friendly tool</li>
								</ULSlim>
							</PSlim>
						</DivBP>
					</CVSection>
					<Divider textAlign='left'>
						<h3>Skills</h3>
					</Divider>
					<CVSection>
						<DivBP>
							<ULSlim>
								<li>
									<b>Programming Languages</b> - TypeScript, JavaScript, Node, React, Java, Python, Ruby, Bash, SCSS, LESS, HTML5 and CSS3, C, R
								</li>
								<li>
									<b>Programs and Software</b> - Git, GitHub, GitLab, Visual Studio, WSL, Storybook, Android Studio, Matlab, Microsoft Office, Microsoft Excel, Microsoft Powerpoint
								</li>
								<li>
									<b>Languages</b> - Fluent in English and French, Spoken Hindi
								</li>
							</ULSlim>
						</DivBP>
					</CVSection>
					<Divider textAlign='left'>
						<h3>Activities &amp; Leadership</h3>
					</Divider>
					<CVSection>
						<DivBP>
							<PSlim>
								<b>Inspirit AI and Summer Stem Institute 2020</b>
							</PSlim>
							<PSlim>
								<i>Program Participant and Inspirit AI End-of-Program Project Lead</i> - Learn AI Fundamentals (neural nets and backprop, computer vision,etc) and develop model to identify pro- and anti-refugee tweets using sentiment analysis
							</PSlim>
						</DivBP>
					</CVSection>
				</Box>
			</Box>
		</ThemeProvider>
	)
}

export default CV
