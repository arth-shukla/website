import { Toolbar, useTheme } from '@mui/material'
import { ColorSwitch, DarkModeSwitch, LineSheen } from '@arth-shukla/my-icons'
import { Stack } from '@mui/system'
import IconButton from '@mui/material/IconButton'
import MenuRounded from '@mui/icons-material/MenuRounded'

interface WebsiteToolbarProps {
	setMenu: (arg: boolean) => void
	colors: string[]
	currentColorIndex: number
	setCurrentColorIndex: (arg: number) => void
	darkMode: boolean
	setDarkMode: (arg: boolean) => void
}

function DrawerIcon() {
	const theme = useTheme()

	return (
		<svg
			id='menu-bar'
			focusable='false'
			aria-hidden='true'
			viewBox='0 0 30 24'
			style={{
				width: '30px',
				height: '30px',
			}}
		>
			<rect
				y='5'
				width='30'
				height='3.5'
				rx='1'
				ry='1'
				fill={theme.palette.text.primary}
			></rect>
			<rect
				y='15'
				width='20'
				height='3.5'
				rx='1'
				ry='1'
				fill={theme.palette.text.primary}
			></rect>
		</svg>
	)
}

function WebsiteToolbar(props: WebsiteToolbarProps) {
	const theme = useTheme()

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
					<DrawerIcon />
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
						style={{ cursor: 'pointer' }}
					/>
					<DarkModeSwitch
						darkMode={props.darkMode}
						onClick={() => props.setDarkMode(!props.darkMode)}
						style={{
							marginTop: 'auto',
							marginBottom: 'auto',
							cursor: 'pointer',
						}}
						size={48}
					/>
				</Stack>
			</Toolbar>
			<LineSheen
				lineHeight='3px'
				lineColor={theme.palette.primary.main}
				sheenColor={props.darkMode ? theme.palette.primary.light : theme.palette.primary.dark}
				animDuration={0.4 * 3}
			/>
		</>
	)
}

export default WebsiteToolbar
