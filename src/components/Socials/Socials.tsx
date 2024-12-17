import React from 'react'

import { SocialsContext, SocialsContextConsumer } from './SocialsContexts'

import Stack from '@mui/system/Stack'
import { Link, useTheme } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

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
}

function renderSocials(theme: any, socialsContext: SocialsContext) {
	let renderedSocials = []
	for (const social in socials) {
		if (socialsContext[social as keyof SocialsContext].include)
			renderedSocials.push(
				// <Link
				// 	color={theme.palette.text.primary}
				// 	href={socials[social]['href']}
				// 	target='_blank'
				// ></Link>,
				<div key={social}>
					<IconButton
						component={Link}
						href={socials[social]['href']}
						target='_blank'
						color='inherit'
						size='large'
						edge='start'
						aria-label={social}
						title={social}
					>
						{socials[social]['icon']}
					</IconButton>
					{socialsContext[social as keyof SocialsContext].text && (socialsContext[social as keyof SocialsContext].textOverride ?? socials[social]['text'])}
				</div>,
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
					{...rest}
					alignItems='center'
					justifyContent={rest.justifyContent ?? 'center'}
					direction={rest.direction || 'row'}
				>
					{renderSocials(theme, socialsContext!)}
				</Stack>
			)}
		</SocialsContextConsumer>
	)
}

export default Socials
