import React, { useState, useEffect, useCallback } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'

import { ProjectsData, ProjectsDataType, WebsiteDrawer, WebsiteToolbar } from './components'
import { Contact, Error404, Home, ProjectInfo, Projects, Resume } from './pages'

import './App.scss'

const colorNames = ['blue', 'pink']

const primaryColors = {
	light: ['#066aff', '#dd285b'],
	lightDark: ['#0443a2', '#821734'],
	dark: ['#1b8ad4', '#d754a3'],
	darkLight: ['#76bcea', '#f29fd1'],
}

const themeColors = {
	light: {
		primaryText: 'rgba(0, 0, 0, .8)',
		secondaryText: 'rgb(0, 0, 0)',
	},
	dark: {
		primaryText: 'rgb(255, 255, 255, .87)',
		secondaryText: 'rgb(255, 255, 255)',
	},
}

function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
	const [darkMode, setDarkMode] = useState<boolean>(prefersDarkMode || false)
	const [currentColorIndex, setCurrentColorIndex] = useState<number>(0)
	const [menu, setMenu] = useState<boolean>(false)

	const [winHeight, setWinHeight] = useState<number>(window.innerHeight)
	// const [winWidth, setWinWidth] = useState<number>(window.innerWidth)

	const handleResize = () => {
		setWinHeight(window.innerHeight)
		// setWinWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize, { passive: true })
	}, [])

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
						// secondary: themeColors[darkMode ? 'dark' : 'light']['secondaryText'],
					},
				},
				typography: {
					fontFamily: "-apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
					h1: {
						fontFamily: "'Courier New', Courier, monospace",
					},
					h2: {
						fontFamily: "'Courier New', Courier, monospace",
					},
				},
			}),
		[darkMode, currentColorIndex],
	)

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
	}, [darkMode])

	const generateProjectRoutes = useCallback(() => {
		const projectsData: ProjectsDataType = ProjectsData

		let projectRoutes = []

		for (const project in projectsData) {
			projectRoutes.push(
				<Route
					path={`projects/${projectsData[project].pagePath}`}
					element={<ProjectInfo project={projectsData[project]} />}
					key={`route-to-projects/${projectsData[project].pagePath}`}
				/>,
			)
		}

		return projectRoutes
	}, [])

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<WebsiteToolbar
					setMenu={setMenu}
					colors={primaryColors[theme.palette.mode]}
					colorNames={colorNames}
					currentColorIndex={currentColorIndex}
					setCurrentColorIndex={setCurrentColorIndex}
					darkMode={darkMode}
					setDarkMode={setDarkMode}
				/>
				<Box
					minHeight={window.innerHeight - 67}
					paddingBottom='50px'
					display='flex'
					justifyContent='center'
				>
					<Box
						width='100%'
						maxWidth={2000}
					>
						<Routes>
							<Route
								index
								element={<Home winHeight={winHeight} />}
							/>
							<Route
								path='projects'
								element={<Projects />}
							/>
							{generateProjectRoutes()}
							<Route
								path='resume'
								element={<Resume />}
							/>
							<Route
								path='contact'
								element={<Contact />}
							/>
							<Route
								path='*'
								element={<Error404 />}
							/>
						</Routes>
					</Box>
				</Box>
				<WebsiteDrawer
					open={menu}
					setMenu={setMenu}
				/>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
