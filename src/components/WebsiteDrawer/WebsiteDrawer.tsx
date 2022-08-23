import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
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

function WebsiteToolbarContents() {
	return (
		<Box>
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Bookmark />
						</ListItemIcon>
						<ListItemText>My Projects</ListItemText>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Mail />
						</ListItemIcon>
						<ListItemText>Contact Me</ListItemText>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	)
}

export default WebsiteToolbar
