import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { SocialsContext, SocialsContextConsumer } from './SocialsContexts'
import CVIcon from 'components/CVIcon'

import Stack from '@mui/system/Stack'
import { Link, useTheme } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

import './Socials.scss'

const socials: any = {
	CV: {
		text: 'CV',
		href: '/cv',
		icon: <CVIcon fontSize='1.7rem' />,
		newTab: false,
		isRouter: true,
	},
	LinkedIn: {
		text: 'arth-shukla',
		href: 'https://www.linkedin.com/in/arth-shukla/',
		icon: <LinkedInIcon fontSize='large' />,
		newTab: true,
	},
	GitHub: {
		text: 'arth-shukla',
		href: 'https://github.com/arth-shukla',
		icon: <GitHubIcon fontSize='large' />,
		newTab: true,
	},
	Email: {
		text: 'arthshukla03@gmail.com',
		href: 'mailto:arthshukla03@gmail.com',
		icon: <EmailIcon fontSize='large' />,
		newTab: false,
	},
}

function renderSocials(theme: any, socialsContext: SocialsContext) {
	let renderedSocials = []
	for (const social in socials) {
		if (socialsContext[social as keyof SocialsContext].include)
			renderedSocials.push(
				<div key={social}>
					<IconButton
						component={socials[social].isRouter ? RouterLink : Link}
						href={!socials[social].isRouter ? socials[social]['href'] : undefined}
						to={socials[social].isRouter ? socials[social]['href'] : undefined}
						target={socials[social]['newTab'] ? '_blank' : undefined}
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
