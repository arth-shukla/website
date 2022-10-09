import React, { useState, useEffect, useRef } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/system'
import { TextTypeDelete } from '@arth-shukla/my-icons'

import { DownButton, Section, Socials, WebsiteDrawer, WebsiteToolbar } from './components'

import './App.scss'

const primaryColors = {
	light: ['#066aff', '#dd285b'],
	lightDark: ['#0443a2', '#821734'],
	dark: ['#1b8ad4', '#d754a3'],
	darkLight: ['#76bcea', '#f29fd1'],
}

const themeColors = {
	light: {
		primaryText: 'rgba(0, 0, 0, .8)',
	},
	dark: {
		primaryText: 'rgb(255, 255, 255, .87)',
	},
}

function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
	const [darkMode, setDarkMode] = useState<boolean>(prefersDarkMode || false)
	const [currentColorIndex, setCurrentColorIndex] = useState<number>(0)
	const [menu, setMenu] = useState<boolean>(false)

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: darkMode ? 'dark' : 'light',
					primary: {
						main: primaryColors[darkMode ? 'dark' : 'light'][currentColorIndex],
						light: darkMode ? primaryColors['darkLight'][currentColorIndex] : undefined,
						dark: darkMode ? undefined : primaryColors['lightDark'][currentColorIndex],
					},
					text: {
						primary: themeColors[darkMode ? 'dark' : 'light']['primaryText'],
					},
				},
			}),
		[darkMode, currentColorIndex],
	)

	const textRef = useRef()

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
	}, [darkMode])

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<WebsiteToolbar
				setMenu={setMenu}
				colors={primaryColors[theme.palette.mode]}
				currentColorIndex={currentColorIndex}
				setCurrentColorIndex={setCurrentColorIndex}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
			/>
			<Box>
				<Box
					className='top-section'
					sx={{
						position: 'relative',
						padding: '10%',
						paddingBottom: '1em',
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
				<WebsiteDrawer
					open={menu}
					setMenu={setMenu}
				/>
			</Box>
		</ThemeProvider>
	)
}

export default App
