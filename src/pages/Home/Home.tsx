import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/system/Box'
import { TextTypeDelete } from '@arth-shukla/my-icons'

import { DownButton, Section, Socials } from '../../components'
import { useTheme } from '@mui/system'

import './Home.scss'

function HomePage() {
	const textRef = useRef()
	const theme = useTheme()

	const [winHeight, setWinHeight] = useState<number>(window.innerHeight)

	const handleResize = () => {
		setWinHeight(window.innerHeight)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
	}, [])

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
				<Socials />
				<DownButton scrollTargRef={textRef} />
			</Box>
			<Box
				ref={textRef}
				className='text-section'
			>
				<Section>
					<h1>Hello!</h1>
					<p>Nice to meet you!</p>
				</Section>
				<Section>
					<h1>You are smelly</h1>
					<p>Go take a shower</p>
				</Section>
			</Box>
		</Box>
	)
}

export default HomePage
