import React, { useRef } from 'react'

import { TextTypeDelete } from '@arth-shukla/my-icons'
import { DownButton, CircleLogo, Section, Socials, SocialsContext, SocialsContextProvider, ProjectHomeCarousel, ProjectsData } from 'components'

import useTheme from '@mui/system/useTheme'
import Box from '@mui/system/Box'
import Grid from '@mui/material/Grid'

import './Home.scss'

import profilePic from '../../assets/Me_Profile.jpg'

interface HomeProps {
	winHeight: number
}

const HomeSocials: SocialsContext = {
	Email: {
		include: true,
		text: false,
	},
	GitHub: {
		include: true,
		text: false,
	},
	LinkedIn: {
		include: true,
		text: false,
	},
	'Phone Number': {
		include: false,
		text: false,
	},
}

const flexBoxMiddleAlign = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

function Home({ winHeight }: HomeProps) {
	const textRef = useRef()
	const theme = useTheme()

	return (
		<Box>
			<Box
				className='top-section'
				sx={{
					position: 'relative',
					padding: `${winHeight / 5}px 10%`,
					paddingBottom: '1em',
					minHeight: `calc(${winHeight}px - 64px - 3px)`,
				}}
			>
				<TextTypeDelete
					className='main-page-intro'
					constText={
						<>
							Hi!
							<br />
							I'm
						</>
					}
					textAlign='left'
					constTextColor={theme.palette.text.primary}
					typeText={[' a developer.', ' a student.', ' Arth.']}
					typeTextColor={theme.palette.primary.main}
					fontSize='var(--main-page-intro-font-size)'
					fontFamily='Courier, sans-serif'
					cursorWidth='3px'
					cursorHeight='var(--main-page-intro-cursor-height)'
					cursorColor={theme.palette.text.primary}
				/>
				<SocialsContextProvider value={HomeSocials}>
					<Socials justifyContent='left' />
				</SocialsContextProvider>
				<DownButton scrollTargRef={textRef} />
			</Box>
			<Box
				ref={textRef}
				className='text-section'
			>
				<SelfIntroSection />
				<ProjectsInfoSection />
			</Box>
		</Box>
	)
}

function SelfIntroSection() {
	return (
		<Section>
			<Grid
				container
				spacing={3}
			>
				<Grid
					item
					sm={12}
					md={8}
					// lg={12}
				>
					<h1>Hi there!</h1>
					<p style={flexBoxMiddleAlign}>
						<CircleLogo
							className='lt-md'
							size={300}
							logo={profilePic}
							identifier='home-profile-lt-md'
						/>
					</p>
					<p>I'm Arth. I'm a second-year Math-Computer Science major at UCSD, and I'm looking for new opportunities to gain experience.</p>
					<p>I'm eager to learn new skills and technologies, and I'm especially interested in web development and AI/ML.</p>
				</Grid>
				<Grid
					item
					sm={0}
					md={4}
					// lg={0}
					sx={flexBoxMiddleAlign}
				>
					<CircleLogo
						className='lt-lg'
						size={250}
						logo={profilePic}
						identifier='home-profile-lt-lg'
					/>
					<CircleLogo
						className='ge-lg'
						size={300}
						logo={profilePic}
						identifier='home-profile-ge-lg'
					/>
				</Grid>
			</Grid>
		</Section>
	)
}

function ProjectsInfoSection() {
	return (
		<Section>
			<Grid
				container
				spacing={3}
			>
				<Grid
					item
					sm={12}
					md={8}
					lg={12}
				>
					<h1>I like making stuff</h1>
					<p>Most of my experience with web dev is in front-end, and on the AI side I've been learning NLP and the math behind optimization.</p>
					<p>I've had fun building some different projects&mdash;feel free to check them out!</p>
				</Grid>
				<Grid
					item
					sm={0}
					md={4}
					lg={0}
					sx={flexBoxMiddleAlign}
					className='lt-lg'
				>
					<ProjectHomeCarousel
						projects={ProjectsData}
						width={330}
						logoSize={200}
						logosPerSlide={1}
					/>
				</Grid>
				<Grid
					item
					className='lt-md'
					sx={{ width: '100%', ...flexBoxMiddleAlign }}
				>
					<ProjectHomeCarousel
						projects={ProjectsData}
						width={330}
						logoSize={200}
						logosPerSlide={1}
					/>
				</Grid>
				<Grid
					item
					className='ge-lg'
					sx={{ width: '100%', ...flexBoxMiddleAlign }}
				>
					<ProjectHomeCarousel
						projects={ProjectsData}
						width={825}
						logoSize={200}
						logosPerSlide={Math.min(3, Math.floor(Object.keys(ProjectsData).length / Math.ceil(Object.keys(ProjectsData).length / 3)))}
					/>
				</Grid>
			</Grid>
		</Section>
	)
}

export default Home
