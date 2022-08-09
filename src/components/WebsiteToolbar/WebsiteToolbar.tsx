import { AppBar, SvgIcon, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import { DarkModeSwitch } from '@arth-shukla/my-icons'

interface WebsiteToolbarProps {
	darkMode: boolean
	setDarkMode: (arg: boolean) => void
}

function WebsiteToolbar(props: WebsiteToolbarProps) {
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar variant='dense'>
					<HomeIcon />
					<DarkModeSwitch
						darkMode={props.darkMode}
						onClick={() => props.setDarkMode(!props.darkMode)}
					/>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default WebsiteToolbar

function HomeIcon(props: any) {
	return (
		<SvgIcon {...props}>
			<path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
		</SvgIcon>
	)
}
