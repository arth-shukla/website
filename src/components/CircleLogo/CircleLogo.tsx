import React from 'react'

import useTheme from '@mui/system/useTheme'
import ThemeProvider from '@mui/system/ThemeProvider'

import './CircleLogo.scss'

const strokeWidth = 4

interface CircleLogoProps {
	logo: string | React.ReactElement
	size: number
	className?: string
	identifier: string
	[x: string]: any
}

function CircleLogo({ logo, size = 100, className = '', identifier = '', ...rest }: CircleLogoProps) {
	const theme = useTheme()

	return (
		<ThemeProvider theme={theme}>
			<svg
				className={`profile-pic ${className}`}
				style={{
					maxWidth: `min(100%, ${size}px)`,
				}}
				width={size}
				key={identifier}
				{...rest}
			>
				<defs>
					<pattern
						id={`image-${identifier}`}
						x='0%'
						y='0%'
						height='100%'
						width='100%'
						viewBox={`0 0 ${size} ${size}`}
					>
						{typeof logo === 'string' && (
							<image
								x='0%'
								y='0%'
								width={size}
								height={size}
								href={logo}
							/>
						)}
						{typeof logo !== 'string' && logo}
					</pattern>
				</defs>
				<circle
					id='sd'
					cx='50%'
					cy='50%'
					r={`calc((100% / 2) - ${strokeWidth}px * 2)`}
					fill={`url(#${`image-${identifier}`})`}
					stroke={theme.palette.mode === 'dark' ? '#121212' : '#fff'}
					strokeWidth={strokeWidth}
				/>
				<circle
					id='sd'
					cx='50%'
					cy='50%'
					fill='none'
					r={`calc((100% / 2) - ${strokeWidth}px)`}
					stroke={theme.palette.primary.main}
					strokeWidth={strokeWidth}
				/>
			</svg>
		</ThemeProvider>
	)
}

export default CircleLogo
