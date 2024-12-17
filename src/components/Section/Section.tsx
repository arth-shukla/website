import React from 'react'
import useTheme from '@mui/material/styles/useTheme'

import './Section.scss'

interface SectionProps {
	children: any
	className?: string
	sx?: any
	[x: string]: any
}

function Section({ children, className = '', sx, ...rest }: SectionProps) {
	const theme = useTheme()

	return (
		<section
			className={'section ' + className}
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
