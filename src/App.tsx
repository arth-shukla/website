import React, { useState, useEffect, useCallback } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'

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
		window.addEventListener('resize', handleResize)
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
				/>,
			)
		}

		return projectRoutes
	}, [])

	return (
		<HashRouter>
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
				<Box sx={{ paddingBottom: '100px' }}>
					<Routes>
						<Route
							index
							element={<Home winHeight={winHeight} />}
						/>
						<Route
							path='projects'
							element={<Projects />}
						/>
						{/* <ProjectRoutes /> */}
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
				<WebsiteDrawer
					open={menu}
					setMenu={setMenu}
				/>
			</ThemeProvider>
		</HashRouter>
	)
}

export default App
