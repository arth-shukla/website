import React from 'react'

import { SocialsContext, SocialsContextConsumer } from './SocialsContexts'

import Stack from '@mui/system/Stack'
import { Link, useTheme } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import Call from '@mui/icons-material/Call'

import './Socials.scss'

const socials: any = {
	LinkedIn: {
		text: 'arth-shukla',
		href: 'https://www.linkedin.com/in/arth-shukla/',
		icon: <LinkedInIcon fontSize='large' />,
	},
	GitHub: {
		text: 'arth-shukla',
		href: 'https://github.com/arth-shukla',
		icon: <GitHubIcon fontSize='large' />,
	},
	Email: {
		text: 'arthshukla03@gmail.com',
		href: 'mailto:arthshukla03@gmail.com',
		icon: <EmailIcon fontSize='large' />,
	},
	PhoneNumber: {
		text: '(650) 850-9097',
		href: 'tel:+1-650-850-9097',
		icon: <Call fontSize='large' />,
	},
}

function renderSocials(theme: any, socialsContext: SocialsContext) {
	let renderedSocials = []
	for (const social in socials) {
		if (socialsContext[social as keyof SocialsContext].include)
			renderedSocials.push(
				<Link
					color={theme.palette.text.primary}
					href={socials[social]['href']}
					target='_blank'
				>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label={social}
					>
						{socials[social]['icon']}
					</IconButton>
					{socialsContext[social as keyof SocialsContext].text && socials[social]['text']}
				</Link>,
			)
	}

	return renderedSocials
}

function Socials({ ...rest }: any) {
	const theme = useTheme()

	return (
		<SocialsContextConsumer>
			{socialsContext => (
				<Stack
					className='socials-box'
					spacing={2}
					alignItems='center'
					justifyContent='center'
					{...rest}
					direction={rest.direction || 'row'}
				>
					{renderSocials(theme, socialsContext!)}
				</Stack>
			)}
		</SocialsContextConsumer>
	)
}

export default Socials
