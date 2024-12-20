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
				className={`circle-logo ${className} MuiSvgIcon-root`}
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
							<>
								<image
									x='0%'
									y='0%'
									width={size}
									height={size}
									href={logo}
								/>
								<rect
									id={`circle-logo-tint-${identifier}`}
									x='0%'
									y='0%'
									width='100%'
									height='100%'
									fill={theme.palette.primary.main}
									opacity={theme.palette.mode === 'dark' ? 0.05 : 0.025}
								/>
							</>
						)}
					</pattern>
				</defs>
				{typeof logo !== 'string' && logo}
				<circle
					id='inner'
					cx='50%'
					cy='50%'
					r={`${size / 2 - strokeWidth * 2}px`}
					fill={typeof logo === 'string' ? `url(#${`image-${identifier}`})` : 'none'}
					stroke={theme.palette.mode === 'dark' ? '#121212' : '#fff'}
					strokeWidth={strokeWidth}
				/>
				<circle
					id='sd'
					cx='50%'
					cy='50%'
					fill='none'
					r={`${size / 2 - strokeWidth}px`}
					stroke={theme.palette.primary.main}
					strokeWidth={strokeWidth}
				/>
			</svg>
		</ThemeProvider>
	)
}

export default CircleLogo
