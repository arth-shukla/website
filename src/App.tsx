import React, { useState, useEffect } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'

import { WebsiteDrawer, WebsiteToolbar } from './components'
import { Home } from './pages'

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

interface AppProps {
	page: 'home'
}

function App({ page }: AppProps) {
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
			{page === 'home' && <Home />}
			<WebsiteDrawer
				open={menu}
				setMenu={setMenu}
			/>
		</ThemeProvider>
	)
}

export default App
