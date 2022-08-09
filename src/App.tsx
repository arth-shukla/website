import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'
import { useEffect } from 'react'

import WebsiteToolbar from './components/WebsiteToolbar/WebsiteToolbar'

import './App.scss'

function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
	const [darkMode, setDarkMode] = useState<boolean>(prefersDarkMode || false)

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: darkMode ? 'dark' : 'light',
				},
			}),
		[darkMode],
	)

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
	}, [darkMode])

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<WebsiteToolbar
					darkMode={darkMode}
					setDarkMode={setDarkMode}
				/>
			</ThemeProvider>
		</>
	)
}

export default App
