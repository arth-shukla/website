import React from 'react'

import useTheme from '@mui/system/useTheme'
import ThemeProvider from '@mui/system/ThemeProvider'

import profile from './Me_Profile.jpg'

import './ProfilePic.scss'

const strokeWidth = 4

interface ProfilePicProps {
	size: number
	className: string
}

function ProfilePic({ size = 100, className = '' }: ProfilePicProps) {
	const theme = useTheme()

	return (
		<ThemeProvider theme={theme}>
			<svg
				className={`profile-pic ${className}`}
				style={{
					maxWidth: `min(100%, ${size}px)`,
				}}
			>
				<defs>
					<pattern
						id={`image-${className}`}
						x='0%'
						y='0%'
						height='100%'
						width='100%'
						viewBox={`0 0 ${size} ${size}`}
					>
						<image
							x='0%'
							y='0%'
							width={size}
							height={size}
							href={profile}
						/>
					</pattern>
				</defs>
				<circle
					id='sd'
					cx='50%'
					cy='50%'
					r={`calc((100% / 2) - ${strokeWidth}px * 4)`} //{(size - strokeWidth * 4) / 2}
					fill={`url(#${`image-${className}`})`}
					stroke={theme.palette.mode === 'dark' ? '#121212' : '#fff'}
					stroke-width={strokeWidth}
				/>
				<circle
					id='sd'
					cx='50%'
					cy='50%'
					fill='none'
					r={`calc((100% / 2) - ${strokeWidth}px * 2)`} //{(size - strokeWidth * 4) / 2}
					stroke={theme.palette.primary.main}
					stroke-width={strokeWidth}
				/>
			</svg>
		</ThemeProvider>
	)
}

export default ProfilePic
