import React from 'react'
import { Section, A } from 'components'

import useTheme from '@mui/material/styles/useTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

import './CV.scss'

function CV() {
	const theme = useTheme()
	return (
		<ThemeProvider theme={theme}>
			<Section className='cv-intro-section'>
				<h1>My CV</h1>
				<div>
					My CV is available for{' '}
					<A
						href={process.env.PUBLIC_URL + '/documents/Arth_Shukla_CV.pdf'}
						target='_blank'
					>
						download as pdf
					</A>
					.
				</div>
			</Section>
		</ThemeProvider>
	)
}

export default CV