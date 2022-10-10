import React from 'react'
import { useTheme } from '@mui/material/styles'

import './Section.scss'

interface SectionProps {
	children: any
	sx?: any
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

function Section({ children, sx, ...rest }: SectionProps) {
	const theme = useTheme()

	return (
		<section
			className='section'
			style={{
				color: theme.palette.text.primary,
				padding: '55px',
				...sx,
			}}
			{...rest}
		>
			{children}
		</section>
	)
}

export default Section
