import React, { useRef } from 'react'

import { TextTypeDelete } from '@arth-shukla/arth-components'
import { DownButton, CircleLogo, Section, Socials, SocialsContext, SocialsContextProvider, ProjectHomeCarousel, ProjectsData, A } from 'components'

import useTheme from '@mui/system/useTheme'
import Box from '@mui/system/Box'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

import './Home.scss'

import profilePic from '../../assets/Me_Profile.jpg'
import rfclIcon from '../../assets/rfcl/icon.gif'
import ms3Icon from "../../assets/ms3/icon.png"
import { ListItemText } from '@mui/material'

interface HomeProps {
	winHeight: number
}

const HomeSocials: SocialsContext = {
	Email: {
		include: true,
		text: false,
	},
	GitHub: {
		include: true,
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
}

const flexBoxMiddleAlign = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

function Home({ winHeight }: HomeProps) {
	const textRef = useRef()
	const theme = useTheme()

	return (
		<Box>
			<Box
				className='top-section'
				sx={{
					position: 'relative',
					padding: `${winHeight / 5}px 10%`,
					paddingBottom: '1em',
					minHeight: `calc(${winHeight}px - 64px - 3px)`,
				}}
			>
				<TextTypeDelete
					className='main-page-intro'
					constText={
						<>
							Hi!
							<br />
							I'm
						</>
					}
					textAlign='left'
					constTextColor={theme.palette.text.primary}
					typeText={[' a researcher.', ' a developer.', ' a student.', ' Arth.']}
					typeTextColor={theme.palette.primary.main}
					fontSize='var(--main-page-intro-font-size)'
					fontFamily='Courier, sans-serif'
					cursorWidth='3px'
					cursorHeight='var(--main-page-intro-cursor-height)'
					cursorColor={theme.palette.text.primary}
				/>
				<SocialsContextProvider value={HomeSocials}>
					<Socials justifyContent='left' />
				</SocialsContextProvider>
				<DownButton scrollTargRef={textRef} />
			</Box>
			<Box
				ref={textRef}
				className='text-section'
			>
				<SelfIntroSection />
				<ResarchSection />
				<ProjectsInfoSection />
			</Box>
		</Box>
	)
}

function SelfIntroSection() {
	return (
		<Section>
			<Grid
				container
				spacing={3}
			>
				<Grid
					item
					sm={12}
					md={8}
					// lg={12}
				>
					<h1>Hi there!</h1>
					<p style={flexBoxMiddleAlign}>
						<CircleLogo
							className='lt-sm'
							size={300}
							logo={profilePic}
							identifier='home-profile-lt-sm'
						/>
						<CircleLogo
							className='lt-md'
							size={300}
							logo={profilePic}
							identifier='home-profile-lt-md'
						/>
					</p>
					<p>
						I'm Arth, a research assistant at the <A href='https://cseweb.ucsd.edu/~haosu/index.html'>Hao Su Lab @ UCSD</A> and a research intern at <A href='https://www.hillbot.ai'>Hillbot Inc</A>.
					</p>
					<p>I'm passionate about embodied AI and bringing intelligence to robots!</p>
				</Grid>
				<Grid
					item
					sm={0}
					md={4}
					// lg={0}
					sx={flexBoxMiddleAlign}
				>
					<CircleLogo
						className='lt-lg'
						size={250}
						logo={profilePic}
						identifier='home-profile-lt-lg'
					/>
					<CircleLogo
						className='ge-lg'
						size={300}
						logo={profilePic}
						identifier='home-profile-ge-lg'
					/>
				</Grid>
			</Grid>
		</Section>
	)
}

function ResarchSection() {
	return (
		<Section>
			<h1>Research</h1>
			<p>My current research interests are in embodied AI and robot learning, with some intersections with CV, RL, etc. I'm generally interested in how AI can learn from diverse data, experiences, and representations acquired through general learning methodologies to create agents which can adapt to novel experiences/data.</p>
			
			<Grid
				container
				spacing={3}
				margin={0}
				marginBottom='26px'
				maxWidth={'100%'}
			>
				<h3>ManiSkill3: GPU Parallelized Robotics Simulation and Rendering for Generalizable Embodied AI</h3>
				<Grid
					item
					xs={12}
					md={4}
					sx={flexBoxMiddleAlign}
				>
					<img
						src={ms3Icon}
						alt='MS3 teaser.'
						width='100%'
						style={{ maxWidth: 400, marginLeft: -24 }}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={8}
				>
					<List sx={{ marginLeft: '-24px' }}>
						<ListItem>
							<ListItemText>Preprint (arXiv 2024)</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemText>
								Stone Tao, Fanbo Xiang, <b>Arth Shukla</b>, Yuzhe Qin, Xander Hinrichsen, Xiaodi Yuan, Chen Bao, Xinsong Lin, Yulin Liu, Tse-kai Chan, Yuan Gao, Xuanlin Li, Tongzhou Mu, Nan Xiao, Arnav Gurha, Zhiao Huang, Roberto Calandra, Rui Chen, Shan Luo, Hao Su
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemText>
								<A href="https://arxiv.org/abs/2410.00425">arXiv</A> &#124;&nbsp;<A href='https://maniskill.ai'>Project Page</A> &#124;&nbsp;<A href='https://github.com/haosulab/ManiSkill'>Code</A>
							</ListItemText>
						</ListItem>
					</List>
				</Grid>
			</Grid>
			
			<Grid
				container
				spacing={3}
				margin={0}
				marginBottom='26px'
				maxWidth={'100%'}
			>
				<h3>RFCL: Reverse Forward Curriculum Learning for Extreme Sample and Demonstration Efficiency in RL</h3>
				<Grid
					item
					xs={12}
					md={4}
					sx={flexBoxMiddleAlign}
				>
					<img
						src={rfclIcon}
						alt='RFCL method.'
						width='100%'
						style={{ maxWidth: 400, marginLeft: -24 }}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={8}
				>
					<List sx={{ marginLeft: '-24px' }}>
						<ListItem>
							<ListItemText>International Conference on Learning Representations (ICLR) 2024</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemText>
								Stone Tao, <b>Arth Shukla</b>, Tse-kai Chan, Hao Su
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemText>
								<A href="https://arxiv.org/abs/2405.03379">arXiv</A> &#124;&nbsp;<A href='https://reverseforward-cl.github.io'>Project Page</A> &#124;&nbsp;<A href='https://github.com/stonet2000/rfcl'>Code</A>
							</ListItemText>
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</Section>
	)
}

function ProjectsInfoSection() {
	return (
		<Section>
			<Grid
				container
				spacing={3}
			>
				<Grid
					item
					sm={12}
					md={8}
					lg={12}
				>
					<h1>I like making stuff</h1>
					<p>
						Aside from research, here's some past projects I had fun with. Feel free to check them out by clicking on the icons or on the{' '}
						<A
							href='/projects'
							target=''
						>
							projects page
						</A>
						. Even more projects are listed in my <A href='/documents/Arth_Shukla_Resume.pdf'>resume</A>.
					</p>
					<p>I've also done work in full stack web dev using React, Express, Angular, Go, etc.</p>
				</Grid>
				<Grid
					item
					className='lt-sm'
					sx={{ width: '100%', ...flexBoxMiddleAlign }}
				>
					<ProjectHomeCarousel
						projects={ProjectsData}
						width={330}
						logoSize={200}
						logosPerSlide={1}
					/>
				</Grid>
				<Grid
					item
					className='lt-md'
					sx={{ width: '100%', ...flexBoxMiddleAlign }}
				>
					<ProjectHomeCarousel
						projects={ProjectsData}
						width={660}
						logoSize={200}
						logosPerSlide={2}
					/>
				</Grid>
				<Grid
					item
					sm={0}
					md={4}
					lg={0}
					sx={flexBoxMiddleAlign}
					className='lt-lg'
				>
					<ProjectHomeCarousel
						projects={ProjectsData}
						width={330}
						logoSize={200}
						logosPerSlide={1}
					/>
				</Grid>
				<Grid
					item
					className='ge-lg'
					sx={{ width: '100%', ...flexBoxMiddleAlign }}
				>
					<ProjectHomeCarousel
						projects={ProjectsData}
						width={825}
						logoSize={200}
						logosPerSlide={Math.min(3, Math.ceil(Object.keys(ProjectsData).length / Math.round(Object.keys(ProjectsData).length / 3)))}
					/>
				</Grid>
			</Grid>
		</Section>
	)
}

export default Home
