import React, { useRef } from 'react'

import { TextTypeDelete } from '@arth-shukla/arth-components'
import { DownButton, CircleLogo, Section, Socials, SocialsContext, SocialsContextProvider, ProjectHomeCarousel, ProjectsData, A } from 'components'

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
							className='lt-sm'
							size={300}
							logo={profilePic}
							identifier='home-profile-lt-sm'
						/>
						<CircleLogo
							className='lt-md'
							size={300}
							logo={profilePic}
							identifier='home-profile-lt-md'
						/>
					</p>
					<p>
						I'm Arth. I'm a third-year Math-Computer Science major at UCSD, and I'm researching robotics and reinforcement learning in the <A href='http://ai.ucsd.edu/~haosu/'>Hao Su Lab @ UCSD</A>, with papers on the way (stay tuned!)
					</p>
					<p>I'm passionate about AI/ML and I'm eager to learn new skills and technologies.</p>
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
					<p>My current research interests are in embodied AI and reinforcement learning, as well as some intersetcions with CV/Visual RL. I'm generally interested in how AI can learn from diverse data, experiences, and representations acquired through general learning methodologies to create agents which can adapt to novel experiences/data.</p>
					<p>On the web dev side, I've done work in full stack web dev using React, Express, Angular, Go, etc,</p>
					<p>While my research is under way, feel free to check out some of my past projects below!</p>
				</Grid>
				<Grid
					item
					className='lt-sm'
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
					className='lt-md'
					sx={{ width: '100%', ...flexBoxMiddleAlign }}
				>
					<ProjectHomeCarousel
						projects={ProjectsData}
						width={660}
						logoSize={200}
						logosPerSlide={2}
					/>
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
					className='ge-lg'
					sx={{ width: '100%', ...flexBoxMiddleAlign }}
				>
					<ProjectHomeCarousel
						projects={ProjectsData}
						width={825}
						logoSize={200}
						logosPerSlide={Math.min(3, Math.ceil(Object.keys(ProjectsData).length / Math.round(Object.keys(ProjectsData).length / 3)))}
					/>
				</Grid>
			</Grid>
		</Section>
	)
}

export default Home
