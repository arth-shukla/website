import React from 'react'
import Box from '@mui/system/Box'
import { Section, Socials, SocialsContext, SocialsContextProvider } from '../../components'

import useTheme from '@mui/material/styles/useTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import Divider from '@mui/material/Divider'

import './Resume.scss'

const ResumeSocials: SocialsContext = {
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

const ResumeSocialsEmailGitHub: SocialsContext = {
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

const ResumeSocialsLinkedInPhone: SocialsContext = {
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

function ResumeSocialsLinks() {
	return (
		<>
			<SocialsContextProvider value={ResumeSocials}>
				<Socials
					className='resume-socials-1'
					mt={0}
				/>
			</SocialsContextProvider>
			<SocialsContextProvider value={ResumeSocialsEmailGitHub}>
				<Socials
					className='resume-socials-21'
					mt={0}
				/>
			</SocialsContextProvider>
			<SocialsContextProvider value={ResumeSocialsLinkedInPhone}>
				<Socials
					className='resume-socials-22'
					mt={0}
				/>
			</SocialsContextProvider>
			<SocialsContextProvider value={ResumeSocials}>
				<Socials
					className='resume-socials-3'
					mt={0}
					direction='column'
				/>
			</SocialsContextProvider>
		</>
	)
}

function ResumeSection({ style, ...rest }: any) {
	return (
		<Box
			className='resume-section'
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

function A({ style, href, children, target = '_blank', ...rest }: any) {
	const theme = useTheme()

	return (
		<ThemeProvider theme={theme}>
			<a
				href={href ?? children}
				style={{ color: theme.palette.primary.main, ...style }}
				target={target}
				className='resume-text-link'
				{...rest}
			>
				{children}
			</a>
		</ThemeProvider>
	)
}

function Resume() {
	const theme = useTheme()
	return (
		<ThemeProvider theme={theme}>
			<Section className='resume-intro-section'>
				<h1>My Resume</h1>
				<DivBP>
					Below is my resume. It is also available for{' '}
					<A
						href={process.env.PUBLIC_URL + '/documents/Arth_Shukla_Resume.pdf'}
						target='_blank'
					>
						download as pdf
					</A>
					.
				</DivBP>
			</Section>
			<Box
				className='resume'
				sx={{
					border: `${theme.palette.primary.main} solid 2px`,
					boxShadow: `8px 8px ${theme.palette.primary.main}`,
				}}
			>
				<Box className='resume-sub'>
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
						<ResumeSocialsLinks />
					</DivBP>
					<Divider textAlign='left'>
						<h3>Education</h3>
					</Divider>
					<ResumeSection>
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
								<i>Completed</i>: Computer Organization and Systems Programming, Enumerative Combinatorics, Data Structures and Object-Oriented Design, Computer Science and Object-Oriented Programming - Java, Multivariable Calculus, Vector Calculus, Statistical Methods and Probability, Linear Algebra, Differential Equations, Networks and Digital Communications, Data Warehousing to Big Data
								<br />
							</PSlim>
							<PSlim>
								<i>Planned for Fall 2022</i>: Optimizations for Data Science I, Advanced Data Structures, Abstract Algebra I, and Physics/Mechanics I
							</PSlim>
						</DivBP>
					</ResumeSection>
					<Divider textAlign='left'>
						<h3>Experience</h3>
					</Divider>
					<ResumeSection>
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
								<b>Personal Web Development Projects</b>
							</PSlim>
							<PSlim>
								<b>Technologies Used</b>: <u>Web Development</u>: TypeScript, React, Storybook, SCSS; <u>DevOps</u>: Git, GitHub Pages, GitHub Packages; <u>Development Standards</u>: Web Content Accessibility Guidelines (WCAG) 2.1 AAA, Aria Authoring Practices Guide (APG)
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
										Code mobile-compatible Dice Roller web app with React and SCSS, accessible by WCAG 2.1 AA standards and publish to GitHub Pages: <A>https://arth-shukla.github.io/dice-roller</A>
									</li>
									<li>
										Create Icon Library with React TypeScript and SCSS, publish to GitHub packages: <A>https://github.com/arth-shukla/my-icons</A>; code demos and documentation published on GitHub Pages: <A>https://arth-shukla.github.io/my-icons-documentation</A>
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
								<b>Technologies Used</b>: <u>AI/ML Workshops and Projects</u>: Python, PyTorch, TensorFlow, Google Colab; <u>Web Development</u>: TypeScript, React, LESS
							</PSlim>
							<PSlim>
								<b>
									<i>Board – Director of Events</i>
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
					</ResumeSection>
					<Divider textAlign='left'>
						<h3>Skills</h3>
					</Divider>
					<ResumeSection>
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
					</ResumeSection>
					<Divider textAlign='left'>
						<h3>Activities &amp; Leadership</h3>
					</Divider>
					<ResumeSection>
						<DivBP>
							<PSlim>
								<b>Inspirit AI and Summer Stem Institute 2020</b>
							</PSlim>
							<PSlim>
								<i>Program Participant and Inspirit AI End-of-Program Project Lead</i> - Learn AI Fundamentals (neural nets and backprop, computer vision,etc) and develop model to identify pro- and anti-refugee tweets using sentiment analysis
							</PSlim>
						</DivBP>
						<DivBP>
							<PSlim>
								<b>Sequoia Robotics</b>
							</PSlim>
							<PSlim>
								<i>Club President (August 2020 - June 2021); Team Head and Lead Software Engineer</i> - Organize club participation in tournaments and lead Sequoia’s Purple Pi team
							</PSlim>
						</DivBP>
						<DivBP>
							<PSlim>
								<b>Cañada College Mathematics Instructional Assistant</b>
							</PSlim>
							<PSlim>
								<i>Calculus I Instructional Assistant</i> - Design and grade 5 bi-weekly tests and final exam and weekly homework assignments, Tutor 26 students via Zoom and email for 3 hrs/week
							</PSlim>
						</DivBP>
						<DivBP>
							<PSlim>
								<b>STEM Tutoring</b>
							</PSlim>
							<PSlim>
								<b>
									<i>Advance Math Tutorials</i>
								</b>{' '}
								- Lecture and tutor groups of upwards of 20 AP Calculus and IB Math students
							</PSlim>
							<PSlim>
								<b>
									<i>AVID Program Tutoring</i>
								</b>{' '}
								- Lecture and tutor groups of 7 first-gen students at varying levels of Math, Physics, and Chemistry
							</PSlim>
							<PSlim>
								<b>
									<i>Redwood City Library Tutoring</i>
								</b>{' '}
								- Tutor groups of 5 elementary and middle school students in Math and Science
							</PSlim>
						</DivBP>
					</ResumeSection>
				</Box>
			</Box>
		</ThemeProvider>
	)
}

export default Resume
