import React, { useState, useEffect } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/system'

import { TextTypeDelete } from '@arth-shukla/my-icons'

import WebsiteToolbar from './components/WebsiteToolbar/WebsiteToolbar'
import WebsiteDrawer from './components/WebsiteDrawer/WebsiteDrawer'

import './App.scss'

const primaryColors = {
	light: ['#066aff', '#dd285b'],
	lightDark: ['#0443a2', '#821734'],
	dark: ['#1b8ad4', '#d754a3'],
	darkLight: ['#76bcea', '#f29fd1'],
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
				},
			}),
		[darkMode, currentColorIndex],
	)
	console.log(theme.palette.text.primary)

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
	}, [darkMode])

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<WebsiteToolbar
				setMenu={setMenu}
				theme={theme}
				colors={primaryColors[theme.palette.mode]}
				currentColorIndex={currentColorIndex}
				setCurrentColorIndex={setCurrentColorIndex}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
			/>
			<Box>
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
					cursorWidth='3px'
					cursorHeight='var(--main-page-intro-cursor-height)'
					cursorColor={theme.palette.text.primary}
					style={{ marginLeft: '10%', marginRight: '10%', marginTop: '50px' }}
				/>
			</Box>
			<WebsiteDrawer
				open={menu}
				setMenu={setMenu}
			/>
		</ThemeProvider>
	)
}

export default App
