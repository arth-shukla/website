import { Toolbar } from '@mui/material'
import { ColorSwitch, DarkModeSwitch, LineSheen } from '@arth-shukla/my-icons'
import { Stack } from '@mui/system'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

interface WebsiteToolbarProps {
	theme: any
	setMenu: (arg: boolean) => void
	colors: string[]
	currentColorIndex: number
	setCurrentColorIndex: (arg: number) => void
	darkMode: boolean
	setDarkMode: (arg: boolean) => void
}

function WebsiteToolbar(props: WebsiteToolbarProps) {
	return (
		<>
			<Toolbar
				id='toolbar'
				sx={{ display: 'flex' }}
			>
				<IconButton
					size='large'
					edge='start'
					color='inherit'
					aria-label='menu'
					sx={{ mr: 2 }}
					onClick={() => props.setMenu(true)}
				>
					<MenuIcon />
				</IconButton>
				<Stack
					sx={{ marginLeft: 'auto', marginRight: '10px' }}
					direction='row'
					spacing={1}
				>
					<ColorSwitch
						colors={props.colors}
						currentColorIndex={props.currentColorIndex}
						onClick={() => props.setCurrentColorIndex((props.currentColorIndex + 1) % props.colors.length)}
						size={48}
					/>
					<DarkModeSwitch
						darkMode={props.darkMode}
						onClick={() => props.setDarkMode(!props.darkMode)}
						style={{
							marginTop: 'auto',
							marginBottom: 'auto',
						}}
						size={48}
					/>
				</Stack>
			</Toolbar>
			<LineSheen
				lineHeight='3px'
				lineColor={props.theme.palette.primary.main}
				sheenColor={props.darkMode ? props.theme.palette.primary.light : props.theme.palette.primary.dark}
				animDuration={0.4 * 3}
			/>
		</>
	)
}

export default WebsiteToolbar
