import React from 'react'
import useTheme from '@mui/material/styles/useTheme'

import './Section.scss'

interface SectionProps {
	children: any
	sx?: any
}

function Section({ children, sx, ...rest }: SectionProps) {
	const theme = useTheme()

	return (
		<section
			className='section'
			style={{
				color: theme.palette.text.primary,
				...sx,
			}}
			{...rest}
		>
			{children}
		</section>
	)
}

export default Section
