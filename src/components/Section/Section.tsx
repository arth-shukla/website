import React from 'react'
import { useTheme } from '@mui/material/styles'

import './Section.scss'

interface SectionProps {
	children: any
}

// const cardColors = {
// 	light: {
// 		background: 'rgb(240, 240, 240)',
// 		border: 'rgb(200, 200, 200)',
// 		primaryText: 'black',
// 	},
// 	dark: {
// 		background: 'rgba(45, 45, 48, 0.4)',
// 		border: 'rgba(45, 45, 48, 0)',
// 		primaryText: 'rgb(255, 255, 255, .87)',
// 	},
// }

function Card({ children }: SectionProps) {
	const theme = useTheme()

	return (
		<section
			className='section'
			style={{
				color: theme.palette.text.primary,
				padding: '55px',
			}}
		>
			{children}
		</section>
	)
}

export default Card
