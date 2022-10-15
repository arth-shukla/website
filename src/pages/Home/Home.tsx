import React, { useRef } from 'react'

import { TextTypeDelete } from '@arth-shukla/my-icons'
import { DownButton, ProfilePic, Section, Socials, SocialsContext, SocialsContextProvider } from '../../components'

import useTheme from '@mui/system/useTheme'
import Box from '@mui/system/Box'
import Grid from '@mui/material/Grid'

import './Home.scss'

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
	PhoneNumber: {
		include: false,
		text: false,
	},
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
				<Section>
					<h1>You are smelly</h1>
					<p>Go take a shower</p>
				</Section>
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
				>
					<h1>Hi there!</h1>
					<p
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<ProfilePic
							className='lt-md'
							size={300}
						/>
					</p>
					<p>I'm Arth. I'm a second-year Math-Computer Science major at UCSD, and I'm looking for new opportunities to gain experience.</p>
					<p>I'm eager to learn new skills and technologies, and I'm especially interested web development and AI/ML.</p>
				</Grid>
				<Grid
					item
					sm={0}
					md={4}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<ProfilePic
						className='ge-md'
						size={250}
					/>
				</Grid>
			</Grid>
		</Section>
	)
}

export default Home
