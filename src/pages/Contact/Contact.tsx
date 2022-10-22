import React, { useState } from 'react'
import { Section, Socials, SocialsContextProvider } from '../../components'
import { Alert, AlertTitle, Button, FormControl, Grid, Snackbar, TextField, useTheme } from '@mui/material'
import Box from '@mui/system/Box'
import emailjs from 'emailjs-com'

import './Contact.scss'

function Contact() {
	const theme = useTheme()

	return (
		<Section className='contact'>
			<h1>Contact Me</h1>
			<SocialsContextProvider
				value={{
					Email: {
						include: true,
						text: false,
					},
					GitHub: {
						include: false,
						text: false,
					},
					LinkedIn: {
						include: true,
						text: false,
					},
					'Phone Number': {
						include: false,
						text: false,
					},
				}}
			>
				<Socials
					justifyContent='left'
					sx={{ paddingBottom: '1em' }}
				/>
			</SocialsContextProvider>
			<p style={{ paddingBottom: '1em' }}>
				If you'd like to contact me, please feel free to email me at{' '}
				<a
					href='mailto:arthshukla03@gmail.com'
					id='contact-email-mailto'
					style={{
						color: theme.palette.primary.main,
					}}
				>
					arthshukla03@gmail.com
				</a>{' '}
				(or fill out the form below) or reach out on LinkedIn!
			</p>
			<Box
				display='flex'
				justifyContent='center'
			>
				<ContactForm />
			</Box>
		</Section>
	)
}

function ContactForm() {
	const theme = useTheme()
	const [success, setSuccess] = useState<boolean>()
	const [openSnackbar, setOpenSnackbar] = useState<boolean>()

	function sendEmail(e: any) {
		e.preventDefault()

		emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID!, process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, e.target, process.env.REACT_APP_EMAILJS_PUBLIC_KEY!).then(
			result => {
				setSuccess(true)
				e.target.reset()
			},
			error => {
				setSuccess(false)
			},
		)

		setOpenSnackbar(true)
	}

	return (
		<Box
			justifyContent='center'
			alignItems='center'
			sx={{ border: `2px solid ${theme.palette.primary.main}`, borderRadius: 2, padding: '1em .5em' }}
			maxWidth='min(800px, 100%)'
			id='contact-form'
		>
			<form onSubmit={sendEmail}>
				<Grid
					container
					spacing={3}
				>
					<Grid
						xs={12}
						sm={6}
						item
					>
						<FormControl fullWidth>
							<TextField
								id='outlined-basic'
								label="Sender's Name"
								variant='outlined'
								required
								type='text'
								name='user_name'
							/>
						</FormControl>
					</Grid>
					<Grid
						xs={12}
						sm={6}
						item
					>
						<FormControl fullWidth>
							<TextField
								id='outlined-basic'
								label="Sender's Email"
								variant='outlined'
								required
								type='email'
								name='user_email'
							/>
						</FormControl>
					</Grid>
					<Grid
						xs={12}
						item
					>
						<FormControl fullWidth>
							<TextField
								id='outlined-basic'
								label='Subject'
								variant='outlined'
								required
								type='text'
								name='subject'
							/>
						</FormControl>
					</Grid>
					<Grid
						xs={12}
						item
					>
						<FormControl fullWidth>
							<TextField
								id='outlined-basic'
								label='Message'
								variant='outlined'
								required
								type='text'
								multiline
								rows={8}
								name='message'
							/>
						</FormControl>
					</Grid>
					<Grid
						item
						xs={12}
						display='flex'
						justifyContent='right'
					>
						<Button
							variant='contained'
							type='submit'
						>
							Send
						</Button>
					</Grid>
				</Grid>
			</form>

			<Snackbar
				open={success && openSnackbar}
				autoHideDuration={15000}
				onClose={() => setOpenSnackbar(false)}
			>
				<Alert severity='success'>
					<AlertTitle>Success</AlertTitle>
					Success! Please check your inbox for confirmation that the email was received.
				</Alert>
			</Snackbar>
			<Snackbar open={success === false && openSnackbar}>
				<Alert severity='error'>
					<AlertTitle>Error</AlertTitle>
					Something went wrong. Please refresh and try again. If the error persists, please try emailing me directly. Sorry for the inconvenience.
				</Alert>
			</Snackbar>
		</Box>
	)
}

export default Contact
