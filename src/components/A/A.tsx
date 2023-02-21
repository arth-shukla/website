import React from 'react'
import useTheme from '@mui/material/styles/useTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

function A({ style, href, children, target = '_blank', rel = 'noreferrer', ...rest }: any) {
	const theme = useTheme()

	return (
		<ThemeProvider theme={theme}>
			<a
				href={href ?? children}
				style={{ color: theme.palette.primary.main, ...style }}
				target={target}
				className='text-link'
				rel={rel}
				{...rest}
			>
				{children}
			</a>
		</ThemeProvider>
	)
}

export default A
