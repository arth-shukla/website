import React from 'react'
import IconButton from '@mui/material/IconButton'
import { Stack } from '@mui/system'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { Link, useTheme } from '@mui/material'

import './Socials.scss'

function Socials() {
	const theme = useTheme()

	return (
		<Stack
			className='socials-box'
			direction='row'
			spacing={2}
		>
			<Link
				color={theme.palette.text.primary}
				href='mailto:arthshukla03@gmail.com'
				target='_blank'
			>
				<IconButton
					size='large'
					edge='start'
					color='inherit'
					aria-label='GitHub'
				>
					<EmailIcon fontSize='large' />
				</IconButton>
			</Link>
			<Link
				color={theme.palette.text.primary}
				href='https://github.com/arth-shukla'
				target='_blank'
			>
				<IconButton
					size='large'
					edge='start'
					color='inherit'
					aria-label='GitHub'
				>
					<GitHubIcon fontSize='large' />
				</IconButton>
			</Link>
			<Link
				color={theme.palette.text.primary}
				href='https://www.linkedin.com/in/arth-shukla/'
				target='_blank'
			>
				<IconButton
					size='large'
					edge='start'
					color='inherit'
					aria-label='LinkedIn'
				>
					<LinkedInIcon fontSize='large' />
				</IconButton>
			</Link>
		</Stack>
	)
}

export default Socials
