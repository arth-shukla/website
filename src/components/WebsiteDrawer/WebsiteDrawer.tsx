import { Link } from 'react-router-dom'

import CVIcon from 'components/CVIcon'

import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeRounded from '@mui/icons-material/HomeRounded'
import Mail from '@mui/icons-material/Mail'
import Bookmark from '@mui/icons-material/Bookmark'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'

interface WebsiteDrawerProps {
	open: boolean
	setMenu: (arg: boolean) => void
}

function WebsiteToolbar(props: WebsiteDrawerProps) {
	return (
		<Drawer
			open={props.open}
			onClose={() => props.setMenu(false)}
		>
			<WebsiteToolbarContents setMenu={props.setMenu} />
		</Drawer>
	)
}

const toolbarRoutes: any = {
	'/': {
		name: 'Home',
		icon: <HomeRounded />,
	},
	research: {
		name: 'Research',
		icon: <PrecisionManufacturingIcon />,
	},
	projects: {
		name: 'My Projects',
		icon: <Bookmark />,
	},
	cv: {
		name: 'CV',
		icon: <CVIcon fontSize='1.2rem' />,
	},
	contact: {
		name: 'Contact Me',
		icon: <Mail />,
	},
}

function renderToolbarRoutes(setMenu: any) {
	let renderedRoutes = []
	for (const route in toolbarRoutes) {
		renderedRoutes.push(
			<ListItem
				disablePadding
				key={route}
			>
				<ListItemButton
					component={Link}
					to={route}
					onClick={() => {
						setMenu(false)
					}}
				>
					<ListItemIcon>{toolbarRoutes[route]['icon']}</ListItemIcon>
					<ListItemText>{toolbarRoutes[route]['name']}</ListItemText>
				</ListItemButton>
			</ListItem>,
		)
	}

	return renderedRoutes
}

function WebsiteToolbarContents({ setMenu }: any) {
	return (
		<Box
			sx={{
				width: '250px',
			}}
		>
			<List>{renderToolbarRoutes(setMenu)}</List>
		</Box>
	)
}

export default WebsiteToolbar
