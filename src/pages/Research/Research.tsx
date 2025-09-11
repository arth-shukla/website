import { useEffect, useMemo, useState, useRef } from 'react'

import { Section } from 'components'

import { List, ListItem, ListItemText, Grid, ThemeProvider, useTheme, ButtonGroup, Button } from '@mui/material'

import mshabVideo from '../../assets/mshab/mshab_renders.mp4'
import mshabVideoHighRes from '../../assets/mshab/mshab_renders_high_res.mp4'
import ms3Icon from '../../assets/ms3/ms3_teaser.jpg'
import ms3IconHighRes from '../../assets/ms3/ms3_teaser_high_res.jpg'
import rfclIcon from '../../assets/rfcl/rfcl_animation.mp4'
import rfclIconHighRes from '../../assets/rfcl/rfcl_animation_high_res.mp4'

import './Research.scss'

const MD_SIZE = 899.95

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
	highResSrc: string
	alt?: string
	isVideo?: boolean
}

function ResearchMedia({ src, highResSrc, alt = '', isVideo = false }: ResearchMediaProps) {
	const wrapperRef = useRef<HTMLDivElement>(null)
	const isHighResRef = useRef<boolean>(false)

	useEffect(() => {
		const wrapper = wrapperRef.current
		if (!wrapper) return

		const handleContextMenu = () => {
			if (isHighResRef.current) return // Skip if already using high-res

			const mediaElement = wrapper.querySelector(isVideo ? 'video source' : 'img')
			if (!mediaElement) return

			if (isVideo) {
				const video = mediaElement.parentElement as HTMLVideoElement
				const currentTime = video.currentTime
				video.load()
				video.addEventListener(
					'loadeddata',
					() => {
						video.currentTime = currentTime
					},
					{ once: true },
				)
			} else {
				mediaElement.setAttribute('src', highResSrc)
			}

			isHighResRef.current = true
		}

		wrapper.addEventListener('contextmenu', handleContextMenu)
		return () => wrapper.removeEventListener('contextmenu', handleContextMenu)
	}, [highResSrc, isVideo])

	if (isVideo) {
		return (
			<div
				className='research-media-wrapper'
				ref={wrapperRef}
			>
				<video
					poster=''
					preload='auto'
					autoPlay
					muted
					loop
					playsInline
					data-high-res={highResSrc}
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
		<div
			className='research-media-wrapper'
			ref={wrapperRef}
		>
			<img
				src={src}
				alt={alt}
				data-high-res={highResSrc}
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
	highResIcon: string
	iconAlt?: string
	title: string
	conference: string
	authors: React.ReactNode
	arXiv: string
	website: string
	code: string
}

function ResearchItem({ icon, highResIcon, iconAlt = '', title, conference, authors, arXiv, website, code }: ResearchItemProps) {
	const isVideo = useMemo(() => icon?.toString().endsWith('.mp4'), [icon])

	const [columnSpacing, setColumnSpacing] = useState<number>(window.innerWidth >= MD_SIZE ? 3 : 0)
	const [paddingLeft, setPaddingLeft] = useState<number>(window.innerWidth >= MD_SIZE ? 10 : 0)

	const handleResize = () => {
		setColumnSpacing(window.innerWidth >= MD_SIZE ? 3 : 0)
		setPaddingLeft(window.innerWidth >= MD_SIZE ? 10 : 0)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize, { passive: true })
	}, [])

	return (
		<Grid
			container
			rowSpacing={3}
			columnSpacing={columnSpacing}
			margin={0}
			paddingBottom='50px'
			maxWidth={'100%'}
		>
			<h3>{title}</h3>
			<Grid
				item
				xs={12}
				md={4}
				sx={{ ...flexBoxMiddleAlign, paddingLeft: paddingLeft + 'px !important' }}
			>
				<ResearchMedia
					src={icon}
					highResSrc={highResIcon}
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

			<ResearchItem
				icon={mshabVideo}
				highResIcon={mshabVideoHighRes}
				iconAlt='MS-HAB video'
				title='ManiSkill-HAB: A Benchmark for Low-Level Manipulation in Home Rearrangement Tasks'
				conference='International Conference on Learning Representations (ICLR) 2025'
				authors={
					<>
						<ItsAMe />, Stone Tao, Hao Su
					</>
				}
				arXiv='https://arxiv.org/abs/2412.13211'
				website='https://arth-shukla.github.io/mshab'
				code='https://github.com/arth-shukla/mshab'
			/>

			<ResearchItem
				icon={ms3Icon}
				highResIcon={ms3IconHighRes}
				iconAlt='MS3 teaser'
				title='ManiSkill3: GPU Parallelized Robotics Simulation and Rendering for Generalizable Embodied AI'
				conference='Robotics: Science and Systems (RSS) 2025'
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
				highResIcon={rfclIconHighRes}
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
