import { useEffect, useMemo, useState } from 'react'

import { Section } from 'components'

import { List, ListItem, ListItemText, Grid, ThemeProvider, useTheme, ButtonGroup, Button } from '@mui/material'

import mshabVideo from '../../assets/mshab/mshab_renders.mp4'
import ms3Icon from '../../assets/ms3/ms3_teaser.jpg'
import rfclIcon from '../../assets/rfcl/rfcl_animation.mp4'
import './Research.scss'

const MD_SIZE = 89.95

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

interface ResearchLinksProps {
	arXiv: string
	website: string
	code: string
	buttonVariant: 'text' | 'outlined'
}

function ResearchLinks({ arXiv, website, code, buttonVariant }: ResearchLinksProps) {
	return (
		<ButtonGroup
			variant={buttonVariant}
			aria-label='research links'
		>
			<Button
				href={arXiv}
				target='_blank'
				rel='noopener noreferrer'
			>
				arXiv
			</Button>
			<Button
				href={website}
				target='_blank'
				rel='noopener noreferrer'
			>
				Website
			</Button>
			<Button
				href={code}
				target='_blank'
				rel='noopener noreferrer'
			>
				Code
			</Button>
		</ButtonGroup>
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

	const [winWidth, setWinWidth] = useState<number>(window.innerWidth >= MD_SIZE ? 5 : 0)

	const handleResize = () => {
		setWinWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize, { passive: true })
	}, [])

	return (
		<Grid
			container
			rowSpacing={3}
			columnSpacing={winWidth >= MD_SIZE ? 5 : 0}
			margin={0}
			paddingBottom='50px'
			maxWidth={'100%'}
		>
			<h3>{title}</h3>
			<Grid
				item
				xs={12}
				md={4}
				sx={{ ...flexBoxMiddleAlign, paddingLeft: (winWidth >= MD_SIZE ? 10 : 0) + 'px !important' }}
			>
				<ResearchMedia
					src={icon}
					alt={iconAlt}
					isVideo={isVideo}
				/>
			</Grid>
			<Grid
				className='research-links-mobile'
				item
				xs={12}
				sx={{
					'& .MuiButtonGroup-root': {
						display: 'flex',
						justifyContent: {
							xs: 'center',
						},
					},
				}}
			>
				<ResearchLinks
					arXiv={arXiv}
					website={website}
					code={code}
					buttonVariant='outlined'
				/>
			</Grid>
			<Grid
				item
				xs={12}
				md={8}
			>
				<List>
					<ListItem>
						<ListItemText>{conference}</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>{authors}</ListItemText>
					</ListItem>
					<ListItem className='research-links-desktop'>
						<ListItemText
							sx={{
								'& .MuiButtonGroup-root': {
									display: 'flex',
									justifyContent: {
										md: 'flex-start',
									},
								},
							}}
						>
							<ResearchLinks
								arXiv={arXiv}
								website={website}
								code={code}
								buttonVariant='text'
							/>
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
				iconAlt='MS-HAB video'
				title='ManiSkill-HAB: A Benchmark for Low-Level Manipulation in Home Rearrangement Tasks'
				conference='Preprint (arXiv 2024)'
				authors={
					<>
						<ItsAMe />, Stone Tao, Hao Su
					</>
				}
				arXiv='TODO'
				website='https://arth-shukla.github.io/mshab/'
				code='https://github.com/arth-shukla/mshab'
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
