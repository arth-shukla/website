import { Typography, useTheme } from '@mui/material'
import React from 'react'

const CVIcon = ({ fontSize = '1rem' }: { fontSize?: string }) => {
	const theme = useTheme()
	return (
		<Typography
			component='span'
			fontSize={fontSize}
			className='cv-icon'
			sx={{
				fontWeight: 'bold',
				display: 'flex',
				alignItems: 'center',
				height: '100%',
			}}
		>
			C<span style={{ color: theme.palette.primary.main }}>V</span>
		</Typography>
	)
}

export default CVIcon
