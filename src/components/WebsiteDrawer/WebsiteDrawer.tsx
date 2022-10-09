import { Link } from 'react-router-dom'

import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeRounded from '@mui/icons-material/HomeRounded'
import Mail from '@mui/icons-material/Mail'
import Bookmark from '@mui/icons-material/Bookmark'

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
			<WebsiteToolbarContents />
		</Drawer>
	)
}

const toolbarRoutes: any = {
	'/': {
		name: 'Home',
		icon: <HomeRounded />,
	},
	projects: {
		name: 'My Projects',
		icon: <Bookmark />,
	},
	contact: {
		name: 'Contact Me',
		icon: <Mail />,
	},
}

function renderToolbarRoutes() {
	let renderedRoutes = []
	for (const route in toolbarRoutes) {
		renderedRoutes.push(
			<ListItem disablePadding>
				<ListItemButton
					component={Link}
					to={route}
				>
					<ListItemIcon>{toolbarRoutes[route]['icon']}</ListItemIcon>
					<ListItemText>{toolbarRoutes[route]['name']}</ListItemText>
				</ListItemButton>
			</ListItem>,
		)
	}

	return renderedRoutes
}

function WebsiteToolbarContents() {
	return (
		<Box
			sx={{
				width: '250px',
			}}
		>
			<List>{renderToolbarRoutes()}</List>
		</Box>
	)
}

export default WebsiteToolbar
