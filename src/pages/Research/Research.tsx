import { useMemo } from 'react'

import { Section, A } from 'components'

import { List, ListItem, ListItemText, Grid, ThemeProvider, useTheme, ButtonGroup, Button } from '@mui/material'

import mshabVideo from '../../assets/mshab/mshab_renders.mp4'
import ms3Icon from '../../assets/ms3/icon.png'
import rfclIcon from '../../assets/rfcl/icon.gif'
import './Research.scss'

const flexBoxMiddleAlign = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

function ItsAMe() {
	const theme = useTheme()

	return (
		<ThemeProvider theme={theme}>
			<b
				style={{ color: theme.palette.primary.main }}
				className='its-a-me'
			>
				Arth Shukla
			</b>
		</ThemeProvider>
	)
}

interface ResearchMediaProps {
	src: string
	alt?: string
	isVideo?: boolean
}

function ResearchMedia({ src, alt = '', isVideo = false }: ResearchMediaProps) {
	if (isVideo) {
		return (
			<div className='research-media-wrapper'>
				<video
					poster=''
					preload='auto'
					autoPlay
					muted
					loop
					playsInline
				>
					<source
						src={src}
						type='video/mp4'
					/>
					Unable to load video.
				</video>
			</div>
		)
	}

	return (
		<div className='research-media-wrapper'>
			<img
				src={src}
				alt={alt}
			/>
		</div>
	)
}

interface ResearchItemProps {
	icon: string
	iconAlt?: string
	title: string
	conference: string
	authors: React.ReactNode
	arXiv: string
	website: string
	code: string
}

function ResearchItem({ icon, iconAlt = '', title, conference, authors, arXiv, website, code }: ResearchItemProps) {
	const isVideo = useMemo(() => icon?.toString().endsWith('.mp4'), [icon])

	return (
		<Grid
			container
			spacing={5}
			margin={0}
			marginBottom='26px'
			maxWidth={'100%'}
		>
			<h3>{title}</h3>
			<Grid
				item
				xs={12}
				md={4}
				sx={flexBoxMiddleAlign}
			>
				<ResearchMedia
					src={icon}
					alt={iconAlt}
					isVideo={isVideo}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				md={8}
			>
				<List sx={{ marginLeft: '-24px' }}>
					<ListItem>
						<ListItemText>{conference}</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>{authors}</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>
							<ButtonGroup
								variant='text'
								aria-label='research links'
							>
								<Button href={arXiv}>arXiv</Button>
								<Button href={website}>Website</Button>
								<Button href={code}>Code</Button>
							</ButtonGroup>
						</ListItemText>
					</ListItem>
				</List>
			</Grid>
		</Grid>
	)
}

function Research() {
	return (
		<Section className='research-section'>
			<h1>Research</h1>
			<p>My current research interests are in embodied AI and robot learning, with some intersections with CV, RL, etc. I'm generally interested in how AI can learn from diverse data, experiences, and representations acquired through general learning methodologies to create agents which can adapt to novel experiences/data.</p>

			<ResearchItem
				icon={mshabVideo}
				iconAlt='MSHAB video'
				title='ManiSkill3: GPU Parallelized Robotics Simulation and Rendering for Generalizable Embodied AI'
				conference='Preprint (arXiv 2024)'
				authors={
					<>
						<ItsAMe />, Stone Tao, Hao Su
					</>
				}
				arXiv='https://arxiv.org/abs/2410.00425'
				website='https://maniskill.ai'
				code='https://github.com/haosulab/ManiSkill'
			/>

			<ResearchItem
				icon={ms3Icon}
				iconAlt='MS3 teaser'
				title='ManiSkill3: GPU Parallelized Robotics Simulation and Rendering for Generalizable Embodied AI'
				conference='Preprint (arXiv 2024)'
				authors={
					<>
						Stone Tao, Fanbo Xiang, <ItsAMe />, Yuzhe Qin, Xander Hinrichsen, Xiaodi Yuan, Chen Bao, Xinsong Lin, Yulin Liu, Tse-kai Chan, Yuan Gao, Xuanlin Li, Tongzhou Mu, Nan Xiao, Arnav Gurha, Zhiao Huang, Roberto Calandra, Rui Chen, Shan Luo, Hao Su
					</>
				}
				arXiv='https://arxiv.org/abs/2410.00425'
				website='https://maniskill.ai'
				code='https://github.com/haosulab/ManiSkill'
			/>

			<ResearchItem
				icon={rfclIcon}
				iconAlt='RFCL method'
				title='RFCL: Reverse Forward Curriculum Learning for Extreme Sample and Demonstration Efficiency in RL'
				conference='International Conference on Learning Representations (ICLR) 2024'
				authors={
					<>
						Stone Tao, <ItsAMe />, Tse-kai Chan, Hao Su
					</>
				}
				arXiv='https://arxiv.org/abs/2405.03379'
				website='https://reverseforward-cl.github.io'
				code='https://github.com/stonet2000/rfcl'
			/>
		</Section>
	)
}

export default Research
