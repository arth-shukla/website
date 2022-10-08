import React from 'react'
import { Box } from '@mui/system'
import { useTheme, createTheme } from '@mui/material/styles'

import './Card.scss'
import { ThemeProvider } from '@emotion/react'

interface CardProps {
	children: any
}

const cardColors = {
	light: {
		background: 'rgb(240, 240, 240)',
		border: 'rgb(200, 200, 200)',
		primaryText: 'black',
	},
	dark: {
		background: 'rgba(45, 45, 48, 0.4)',
		border: 'rgba(45, 45, 48, 0)',
		primaryText: 'rgb(255, 255, 255, .87)',
	},
}

function Card({ children }: CardProps) {
	const theme = useTheme()
	const cardTheme = createTheme({
		palette: {
			mode: theme.palette.mode ? 'dark' : 'light',
			// primary: {},
			background: {
				default: cardColors[theme.palette.mode]['background'],
				paper: cardColors[theme.palette.mode]['border'],
			},
			text: {
				primary: cardColors[theme.palette.mode]['primaryText'],
			},
		},
	})

	return (
		<ThemeProvider theme={cardTheme}>
			<Box
				className='card'
				sx={{
					margin: '1em auto',
					maxWidth: '800px',
					color: cardTheme.palette.text.primary,
					background: cardTheme.palette.background.default,
					border: `1px solid ${cardTheme.palette.background.paper}`,
					borderRadius: '8px',
					padding: '.5em 2em 2em',
				}}
			>
				{children}
			</Box>
		</ThemeProvider>
	)
}

export default Card
