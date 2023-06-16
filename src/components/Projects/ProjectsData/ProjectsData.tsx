import React from 'react'
import { A, Code } from 'components'

import mario14 from 'assets/mario-ppo/mario1-4.mp4'
import mario11 from 'assets/mario-ppo/mario1-1.mp4'
import marioStdRun from 'assets/mario-ppo/1-1_std_run.png'
import marioAdvNorm from 'assets/mario-ppo/1-1_adv_norm.png'
import marioEarlyStop from 'assets/mario-ppo/1-1_early_stop.png'
import marioAllTests from 'assets/mario-ppo/1-1_all_tests.png'
import marioHardLR from 'assets/mario-ppo/1-4_hard_lr_shift.png'
import marioPPOLogo from './MarioPPOLogo'

import squadTrainLoss from 'assets/qa-squad2/train_loss.png'
import squadEvalLoss from 'assets/qa-squad2/eval_loss.png'

const CodeNB = ({ children }: any) => {
	return <Code noBorder>{children}</Code>
}

const ProjectIcons = {
	MarioPPOLogo: (size: number, theme: string, primary: string, dark: boolean) => {
		return marioPPOLogo(size, theme, primary, dark)
	},
	SQuAD2Logo: (size: number, theme: string, primary: string, dark: boolean) => {
		const svgProps = {
			fill: 'none',
			strokeWidth: 6,
			strokeLinecap: 'round' as 'round',
		}

		const textBoxProps = {
			...svgProps,
			stroke: theme,
		}

		const cpuOuterProps = {
			...svgProps,
			stroke: primary,
		}
		const cpuOuterLinesLength = 10

		const cpuInnerProps = {
			...svgProps,
			strokeWidth: 0,
			fill: theme,
		}

		return (
			<svg
				width='100%'
				// height={size}
				viewBox='0 0 280 280'
				y='4%'
				className='circle-logo'
				style={{ maxWidth: '100%' }}
				aria-hidden={true}
			>
				<path
					d='M125,55 h100 a10,10 0 0 1 10,10 v75 a10,10 0 0 1 -10,10 h-10 v15 l-20,-15 h-15 m-65,-65 v-20 a10,10 0 0 1 10,-10'
					{...textBoxProps}
					points='30,50 60,50 45,25'
				/>
				<path
					d='M55,100 h45 m65,65 v20 a10,10 0 0 1 -10,10 h-70 l-20,15 v-15 h-10 a10,10 0 0 1 -10,-10 v-75 a10,10 0 0 1 10,-10'
					{...textBoxProps}
					points='30,50 60,50 45,25'
				/>
				<rect
					x='113'
					y='98'
					width='54'
					height='54'
					rx='10'
					{...cpuOuterProps}
				/>

				<path
					d={`M${(1 * 54) / 4 + 113},${98 - 2} v-${cpuOuterLinesLength}`}
					{...cpuOuterProps}
				/>
				<path
					d={`M${(1 * 54) / 4 + 113},${98 + 2 + cpuOuterLinesLength + 54} v-${cpuOuterLinesLength}`}
					{...cpuOuterProps}
				/>
				<path
					d={`M${113 - 2},${(1 * 54) / 4 + 98} h-${cpuOuterLinesLength}`}
					{...cpuOuterProps}
				/>
				<path
					d={`M${113 + 2 + cpuOuterLinesLength + 54},${(1 * 54) / 4 + 98} h-${cpuOuterLinesLength}`}
					{...cpuOuterProps}
				/>
				<path
					d={`M${(2 * 54) / 4 + 113},${98 - 2} v-${cpuOuterLinesLength}`}
					{...cpuOuterProps}
				/>
				<path
					d={`M${(2 * 54) / 4 + 113},${98 + 2 + cpuOuterLinesLength + 54} v-${cpuOuterLinesLength}`}
					{...cpuOuterProps}
				/>
				<path
					d={`M${113 - 2},${(2 * 54) / 4 + 98} h-${cpuOuterLinesLength}`}
					{...cpuOuterProps}
				/>
				<path
					d={`M${113 + 2 + cpuOuterLinesLength + 54},${(2 * 54) / 4 + 98} h-${cpuOuterLinesLength}`}
					{...cpuOuterProps}
				/>
				<path
					d={`M${(3 * 54) / 4 + 113},${98 - 2} v-${cpuOuterLinesLength}`}
					{...cpuOuterProps}
				/>
				<path
					d={`M${(3 * 54) / 4 + 113},${98 + 2 + cpuOuterLinesLength + 54} v-${cpuOuterLinesLength}`}
					{...cpuOuterProps}
				/>
				<path
					d={`M${113 - 2},${(3 * 54) / 4 + 98} h-${cpuOuterLinesLength}`}
					{...cpuOuterProps}
				/>
				<path
					d={`M${113 + 2 + cpuOuterLinesLength + 54},${(3 * 54) / 4 + 98} h-${cpuOuterLinesLength}`}
					{...cpuOuterProps}
				/>
				<rect
					x='128'
					y='113'
					width='24'
					height='24'
					rx='2'
					{...cpuInnerProps}
				/>
			</svg>
		)
	},
	ElementAILogo: (size: number, theme: string, primary: string, dark: boolean) => {
		// const r = ((size / 2) * Math.sqrt(2)) / 2

		return (
			<svg
				viewBox={`0 0 35 35`}
				style={{ padding: 10 }}
				x='15.5%'
				y='16%'
				className='circle-logo'
				aria-hidden={true}
			>
				<path
					fill={theme}
					d='M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z'
				></path>
			</svg>
		)
	},
	DiceRollerLogo: (size: number, theme: string) => {
		const r = ((size / 2) * Math.sqrt(2)) / 2

		return (
			<svg
				width={r * 2}
				height={r * 2}
				x={size / 2 - r}
				y={size / 2 - r}
				viewBox={`0 0 512.021 512.021`}
				className='circle-logo'
				aria-hidden={true}
			>
				<path
					fill={theme}
					d='M490.421,137.707c-0.085-1.003-0.149-2.005-0.555-2.987c-0.107-0.256-0.32-0.427-0.448-0.683 c-0.277-0.533-0.597-0.981-0.96-1.472c-0.725-1.003-1.536-1.835-2.517-2.517c-0.256-0.171-0.363-0.491-0.64-0.64l-224-128 c-3.285-1.877-7.296-1.877-10.581,0l-224,128c-0.256,0.171-0.363,0.469-0.619,0.64c-1.024,0.704-1.899,1.557-2.645,2.624 c-0.299,0.427-0.597,0.811-0.832,1.28c-0.149,0.277-0.384,0.469-0.512,0.768c-0.469,1.173-0.619,2.389-0.661,3.584 c0,0.128-0.107,0.256-0.107,0.384v0.171c0,0.021,0,0.021,0,0.043v234.304c0,0.021,0,0.064,0,0.085v0.064 c0,0.213,0.149,0.405,0.171,0.619c0.085,1.493,0.32,2.987,1.045,4.352c0.043,0.085,0.128,0.107,0.171,0.192 c0.277,0.491,0.768,0.811,1.131,1.259c0.789,0.981,1.557,1.941,2.603,2.603c0.107,0.064,0.149,0.192,0.235,0.235l224,128 c1.664,0.939,3.477,1.408,5.312,1.408s3.648-0.469,5.291-1.408l224-128c0.107-0.064,0.149-0.192,0.256-0.256 c0.981-0.597,1.664-1.493,2.411-2.389c0.427-0.512,1.003-0.896,1.323-1.472c0.043-0.064,0.107-0.107,0.149-0.171 c0.576-1.109,0.683-2.325,0.853-3.52c0.064-0.491,0.384-0.939,0.384-1.451V138.688 C490.677,138.347,490.443,138.048,490.421,137.707z M455.52,136.981l-78.251,31.296L291.211,43.093L455.52,136.981z M256.011,29.504l97.067,141.184H158.944L256.011,29.504z M220.747,43.115l-86.037,125.163L56.48,136.981L220.747,43.115z M42.677,154.432l80.768,32.32L42.677,332.16V154.432z M138.635,203.392l98.325,178.773L49.248,364.288L138.635,203.392z M245.344,482.965l-165.12-94.336l165.12,15.573V482.965z M256.011,372.544l-99.285-180.523h198.571L256.011,372.544z M266.677,482.965v-78.571l165.035-15.723L266.677,482.965z M274.997,382.357l98.411-178.901l89.365,160.853L274.997,382.357z M469.344,332.203l-80.811-145.451l80.811-32.32V332.203z'
				/>
			</svg>
		)
	},
	AnimLibraryIcon: (size: number, theme: string, primary: string, dark: boolean) => {
		return (
			<svg
				width='100%'
				// height={size}
				viewBox='0 0 200 200'
				y='4%'
				className='circle-logo'
				style={{ maxWidth: '100%' }}
				aria-hidden={true}
			>
				<rect
					x='43'
					y='70'
					width='100'
					height='65'
					rx='10'
					ry='10'
					fill={primary}
					fillOpacity='60%'
				/>
				<circle
					cx='103'
					cy='55'
					r='20'
					strokeWidth={18}
					stroke={primary}
					fill='none'
				/>
				<path
					d='M115,145 h40 a10,10 0 0 0 8,-14 l -25,-40 a6,6 0 0 0 -10,0 l-23,40 a10,10 0 0 0 8, 14 Z'
					fill={primary}
					points='30,50 60,50 45,25'
				/>
			</svg>
		)
	},
	NLPSeriesLogo: (size: number, theme: string, primary: string, dark: boolean) => {
		return (
			<svg
				// style='width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;'
				viewBox='0 0 1200 1200'
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g transform='translate(88, 88)'>
					<path
						d='M695.466667 409.6c-14.933333 0-29.866667 12.8-29.866667 29.866667v38.4c-2.133333 17.066667-14.933333 29.866667-32 29.866666s-34.133333-12.8-34.133333-32v-115.2c0-14.933333-12.8-29.866667-29.866667-29.866666-14.933333 0-29.866667 12.8-29.866667 29.866666v72.533334c0 17.066667-14.933333 34.133333-34.133333 34.133333-17.066667 0-32-12.8-34.133333-32V341.333333c0-14.933333-12.8-29.866667-29.866667-29.866666-14.933333 0-29.866667 12.8-29.866667 29.866666v132.266667c0 17.066667-14.933333 34.133333-34.133333 34.133333-17.066667 0-32-12.8-32-34.133333v-34.133333c0-14.933333-12.8-29.866667-29.866667-29.866667s-29.866667 12.8-29.866666 29.866667v147.2c0 14.933333 12.8 29.866667 29.866666 29.866666s29.866667-12.8 29.866667-29.866666v-14.933334c0-17.066667 14.933333-34.133333 34.133333-34.133333 17.066667 0 34.133333 14.933333 34.133334 34.133333v55.466667c0 14.933333 12.8 29.866667 29.866666 29.866667s29.866667-12.8 29.866667-29.866667v-96c0-17.066667 14.933333-32 34.133333-32 17.066667 0 34.133333 14.933333 34.133334 34.133333v115.2c0 14.933333 12.8 29.866667 29.866666 29.866667 14.933333 0 29.866667-12.8 29.866667-29.866667v-74.666666c0-17.066667 12.8-32 34.133333-32 17.066667 0 32 12.8 32 29.866666v14.933334c0 14.933333 12.8 29.866667 29.866667 29.866666 14.933333 0 29.866667-12.8 29.866667-29.866666v-147.2c-4.266667-17.066667-17.066667-29.866667-32-29.866667zM253.866667 469.333333c-14.933333 0-29.866667 12.8-29.866667 29.866667v29.866667c0 14.933333 12.8 29.866667 29.866667 29.866666 14.933333 0 29.866667-12.8 29.866666-29.866666v-29.866667c-4.266667-17.066667-17.066667-29.866667-29.866666-29.866667zM770.133333 469.333333c-14.933333 0-29.866667 12.8-29.866666 29.866667v29.866667c0 14.933333 12.8 29.866667 29.866666 29.866666s29.866667-12.8 29.866667-29.866666v-29.866667c0-17.066667-12.8-29.866667-29.866667-29.866667z'
						fill={primary}
					/>
					<path
						d='M891.733333 637.866667V377.6c27.733333-12.8 44.8-40.533333 44.8-70.4 0-42.666667-34.133333-76.8-76.8-76.8-14.933333 0-32 4.266667-44.8 14.933333l-226.133333-128v-2.133333c0-42.666667-34.133333-76.8-76.8-76.8s-76.8 34.133333-76.8 76.8v2.133333L209.066667 249.6c-14.933333-10.666667-29.866667-14.933333-46.933334-14.933333-42.666667-2.133333-76.8 32-76.8 74.666666 0 32 19.2 59.733333 49.066667 72.533334V640c-29.866667 8.533333-49.066667 36.266667-49.066667 66.133333 0 42.666667 34.133333 76.8 76.8 76.8 14.933333 0 32-4.266667 44.8-12.8l230.4 132.266667c0 42.666667 34.133333 76.8 76.8 76.8s76.8-34.133333 76.8-76.8l228.266667-132.266667c12.8 8.533333 27.733333 12.8 42.666667 12.8 42.666667 0 76.8-34.133333 76.8-76.8-2.133333-27.733333-19.2-55.466667-46.933334-68.266666z m-49.066666-4.266667c-8.533333 2.133333-17.066667 6.4-25.6 10.666667l-57.6-32c-2.133333 0-6.4-2.133333-8.533334-2.133334-12.8 0-25.6 10.666667-25.6 25.6 0 8.533333 4.266667 14.933333 10.666667 19.2l51.2 29.866667c-2.133333 8.533333-4.266667 14.933333-4.266667 25.6s2.133333 14.933333 4.266667 25.6l-215.466667 123.733333c-8.533333-10.666667-19.2-19.2-36.266666-27.733333v-64c-2.133333-12.8-10.666667-23.466667-25.6-23.466667s-23.466667 8.533333-25.6 23.466667v61.866667c-14.933333 4.266667-29.866667 12.8-38.4 27.733333l-217.6-125.866667c2.133333-8.533333 4.266667-14.933333 4.266666-23.466666 0-6.4 0-10.666667-2.133333-14.933334l51.2-32 2.133333-2.133333c6.4-4.266667 10.666667-10.666667 10.666667-19.2 0-12.8-10.666667-25.6-25.6-25.6-4.266667 0-8.533333 2.133333-12.8 4.266667l-51.2 32c-8.533333-6.4-17.066667-10.666667-29.866667-14.933334V381.866667c10.666667-4.266667 19.2-8.533333 27.733334-14.933334l53.333333 29.866667c2.133333 2.133333 6.4 2.133333 8.533333 2.133333 12.8 0 25.6-10.666667 25.6-25.6 0-6.4-4.266667-12.8-8.533333-19.2L234.666667 324.266667c2.133333-4.266667 2.133333-10.666667 2.133333-14.933334 0-6.4 0-12.8-2.133333-19.2l217.6-125.866666c8.533333 10.666667 23.466667 19.2 36.266666 25.6v64c0 12.8 10.666667 25.6 25.6 25.6s25.6-10.666667 25.6-25.6v-64c12.8-4.266667 25.6-12.8 34.133334-25.6L789.333333 288c-2.133333 8.533333-2.133333 14.933333-2.133333 19.2v10.666667l-51.2 32c-6.4 4.266667-10.666667 10.666667-10.666667 19.2 0 12.8 10.666667 25.6 25.6 25.6 4.266667 0 6.4 0 10.666667-2.133334L810.666667 362.666667c8.533333 8.533333 23.466667 14.933333 36.266666 19.2v251.733333z'
						fill={theme}
					/>
				</g>
			</svg>
		)
	},
}

export interface Project {
	name: string
	pagePath: string
	GitHub?: URL
	logo: any
	deployment: URL | undefined
	description: React.ReactElement | string
	carouselSlides: Array<{
		label: React.ReactElement | string
		content: React.ReactElement | string
	}>
}

const RunVid = ({ src, width = 100, height = 100, scale = 1, style, ...rest }: { src: string; width?: number; height?: number; scale?: number; style?: any; [x: string]: any }) => {
	return (
		<video
			width={width * scale}
			height={height * scale}
			autoPlay
			loop
			muted
			playsInline
			style={{
				paddingBottom: '1em',
				flex: '0 1 auto',
				...style,
			}}
			{...rest}
		>
			<source
				src={src}
				type='video/mp4'
			/>
		</video>
	)
}

const MarioPPO: Project = {
	name: 'Mario PPO',
	pagePath: 'mario-ppo',
	GitHub: new URL('https://github.com/arth-shukla/ppo-mario'),
	logo: ProjectIcons.MarioPPOLogo,
	deployment: new URL('https://wandb.ai/arth-shukla/Mario-PPO'),
	description: 'I used Pytorch to make a PPO Agent (w/ entropy regularization, advantage normalization, early stop w/ approx. KL Div, GAE, etc) and Gymnasium to consistently beat Mario level 1-1 and 1-4 in under 1600-2000 episodes of training.',
	carouselSlides: [
		{
			label: <h2>Summary</h2>,
			content: (
				<>
					<p>I used PyTorch and Gymnasium to train a PPO agent which could beat different Mario NES levels.</p>
					<div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '100%' }}>
						<RunVid
							src={mario11}
							width={256}
							height={240}
							scale={1}
						/>
						<RunVid
							src={mario14}
							width={256}
							height={240}
							scale={1}
						/>
					</div>
					<p>
						I based the image processing based on the original <A href='https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf'>DeepMind Atari Game DQN paper</A> (I've previously implemented the <A href='https://arth.website/mario-ddqn'>full DDQN as well</A>). I also expanded on the PPO code I wrote for my <A href='https://arth.website/cartpole-ppo'>CartPole project</A> to include:
						<ul>
							<li>early stop based on approx kl</li>
							<li>advantage normalization</li>
							<li>entropy regularization</li>
							<li>Generalized Advantage Estimation (GAE)</li>
							<li>normal DL techniques like grad normalization and lr scheduling</li>
						</ul>
					</p>
					<p>The result is a bot which is able to consistently beat Mario levels after only about 1500 episodes of training.</p>
				</>
			),
		},
		{
			label: <h2>Testing PPO Convergence Tricks on Level 1-1</h2>,
			content: (
				<>
					<p>
						First, I wanted to see which tricks were most/least helpful for world 1-1, a very simple level. The best results came from the following three:
						<ol>
							<li>Simple, standard PPO run</li>
							<li>PPO with early stopping using approx KL divergence</li>
							<li>PPO with advantage norming</li>
						</ol>
					</p>
					<p>
						Different combinations of different techniques might help (or harm) training performance as well. Image charts can be seen below for the three runs mentioned below, as well as all the other tests I ran. Interactive charts are available on <A href='https://wandb.ai/arth-shukla/Mario-PPO'>WandB</A>. Each run was capped at 2000 episodes, which is 6.5x fewer iterations than my <A href='https://arth.website/mario-ddqn'>DDQN required</A> to acheive similar results!
					</p>
					<p style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', paddingRight: '1em' }}>
						{[marioStdRun, marioAdvNorm, marioEarlyStop, marioAllTests].map(src => (
							<A
								href='https://wandb.ai/arth-shukla/Mario-PPO'
								style={{ display: 'inline-block', width: 'calc(50% - 5px)', padding: '2.5px 0' }}
							>
								<img
									src={src}
									alt=''
									width='100%'
								/>
							</A>
						))}
					</p>
					<p>
						Note that <CodeNB>run_name_1.0</CodeNB> indicates a run with <CodeNB>policy_clip=1.0</CodeNB>; likewise for <CodeNB>run_name_2.0</CodeNB>.
					</p>
				</>
			),
		},
		{
			label: <h2>Improving Training on Level 1-4 With Hard LR Shift</h2>,
			content: (
				<>
					<p>Level 1-4 is much more difficult than 1-1 since it is a boss castle. While the standard run resulted in a more stable policy, using different tricks led to reaching a peak in average reward much faster.</p>
					<p>
						However, after reaching a peak in average reward, the policies would often catastrophically forget whatever they had previously learned. To try mitigating this, I added params <CodeNB>shift_lr_when_avg_rew_is</CodeNB> and <CodeNB>shifted_lr</CodeNB>. The idea here is to chop the learning rate down after the policy reaches some desired average reward so updates to model paramteres are less extreme, lessening the chances of updating into a much worse policy space.
					</p>
					<p>
						Thus, this test on Level 1-4 was run with
						<ul>
							<li>entropy regularization</li>
							<li>gradient and advantage normalization</li>
							<li>hard LR shift after high reward (heurisitc)</li>
						</ul>
					</p>
					<p style={{ display: 'flex', justifyContent: 'center' }}>
						<A href='https://wandb.ai/arth-shukla/Mario-PPO'>
							<img
								src={marioHardLR}
								width='100%'
								alt=''
							/>
						</A>
					</p>
					<p>The policy remained stable and was able to "focus on" winning the level more frequently, and it only took one run with a little over 1600 episodes to reach an optimal policy.</p>
					<p>Note that the max reward for level 1-4 is about 2000, while the max reward for 1-1 is about 2500. Additionally, this agent is very likely highly overfit on this level! It will certainly not generalize well.</p>
				</>
			),
		},
		{
			label: <h2>Future Experiments</h2>,
			content: (
				<>
					<p>I want to test with more complicated control tasks like those in DM Control using unsupervised representation learning methods like TOLD. I also wonder if I could make a PPO Agent which can play any particular Mario level well by training for longer on random levels. It would also be funny to try training a "Drunk Mario" (adversarial learning) whose goal is to navigate an obstacle course while dealing with 'drunk swirls' and corrupted action inputs.</p>
				</>
			),
		},
	],
}

const SQuAD2: Project = {
	name: 'Question-Answer on SQuAD 2.0',
	pagePath: 'qa-squad2',
	GitHub: new URL('https://github.com/arth-shukla/squad2.0-bert-question-answer'),
	logo: ProjectIcons.SQuAD2Logo,
	deployment: new URL('https://wandb.ai/arth-shukla/SQuAD2.0%20with%20Fine-Tuned%20DistilBERT'),
	description: 'I used the HuggingFace Transformers library to fine-tune a DistilBERT model (transfer learning) trained on the Stanford Question-Answer 2.0 (SQuAD 2.0) dataset to answer a question given some context (article, paragraph, etc).',
	carouselSlides: [
		{
			label: <h2>Summary</h2>,
			content: (
				<>
					<p>
						SQuAD 2.0 is a <A href='https://rajpurkar.github.io/SQuAD-explorer/'>famous supervised learning dataset from Stanford</A> which includes some context (paragraph, article, etc), a question, and an answer to the question based on the context. The goal is to train a model which can answer natural language questions if given the appropriate context. Squad2.0 in particular has some questions which are unanswerable.
					</p>
					<p>To accomplish this, I used PyTorch and the HuggingFace Transformers library to fine-tune a DistilBERT transformer model. DistilBERT is a transformer model trained through knowledge distillation, with BERT as the original parent model. It performs almost as well as BERT while only having about 200 million params (about 60% of BERT's 300 million) thereby being much faster to train.</p>
					<p>
						Below are some select output examples, more of which can be seen <A href='https://wandb.ai/arth-shukla/SQuAD2.0%20with%20Fine-Tuned%20DistilBERT'>on my WandB page</A>:
					</p>
					<table>
						<thead>
							<tr>
								<th>Context</th>
								<th>Question</th>
								<th>Model Answer</th>
							</tr>
						</thead>
						<tbody style={{ verticalAlign: 'top' }}>
							<tr>
								<td>With a worldwide box-office gross of over $2.9 billion, Avatar is proclaimed to be the "highest-grossing" film, but such claims usually refer to theatrical revenues only and do not take into account home video and television income, which can form a significant portion of a film's earnings.</td>
								<td>How much did Avatar gross worldwide?</td>
								<td>over $2.9 billion</td>
							</tr>
							<tr>
								<td>Hozier has announced a new album called Unreal Unearth. The third full-length effort from the “Take Me to Church” artist — and his first since 2019's Wasteland, Baby! — arrives August 18.</td>
								<td>What is Hozier's new album?</td>
								<td>Unreal Unearth</td>
							</tr>
							<tr>
								<td>As one of the busiest women in music, it'll come as no surprise that Taylor has won pretty much every award there is to win in the biz - being the proud owner of no less than 12 GRAMMY Awards.</td>
								<td>How many Grammys has Taylor Swift won?</td>
								<td>no less than 12 GRAMMY Awards</td>
							</tr>
						</tbody>
					</table>
				</>
			),
		},
		{
			label: <h2>Training and Future Work</h2>,
			content: (
				<>
					<p>Training an LLM requires massive computational resources, even with efficient code and effective parralelization. However, despite the massive size of LLMs, fine-tuning is often very fast. As seen below, the DistilBERT models started increasing in loss immediately after its first epoch!</p>
					<p style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', paddingRight: '1em' }}>
						<A
							href='https://wandb.ai/arth-shukla/SQuAD2.0%20with%20Fine-Tuned%20DistilBERT'
							style={{ display: 'inline-block', width: 'calc(50% - 5px)', padding: '2.5px 0' }}
						>
							<img
								src={squadTrainLoss}
								alt='A chart plotting train loss aginst number of epochs. The train loss decreases over the course of three epochs.'
								width='100%'
							/>
						</A>
						<A
							href='https://wandb.ai/arth-shukla/SQuAD2.0%20with%20Fine-Tuned%20DistilBERT'
							style={{ display: 'inline-block', width: 'calc(50% - 5px)', padding: '2.5px 0' }}
						>
							<img
								src={squadEvalLoss}
								alt='A chart plotting eval loss against number of epochs. The eval loss is lowest during the first epoch, and it increases after it each succcessive epoch.'
								width='100%'
							/>
						</A>
					</p>
					<p>In the future, I could try a more aggressive LR scheduler could result in improvment over multiple epochs by decreasing the LR enough to avoid too-large changes in the parameter space. I'm also interested in how cutting-edge embodied AI techniques could help improve model performance.</p>
				</>
			),
		},
	],
}

const ElementAI: Project = {
	name: 'Element.AI Competition',
	pagePath: 'element-ai',
	GitHub: new URL('https://github.com/acmucsd/ai-competition-winter-23'),
	logo: ProjectIcons.ElementAILogo,
	deployment: undefined, //new URL('https://ai.acmucsd.com/competitions/Element.AI'),
	description: "I led environment development, on-premise systems management, and planning/logistics for ACM AI's Element.AI competition. We amassed $8000 in funding and 200 participants!",
	carouselSlides: [
		{
			label: <h2>Summary</h2>,
			content: (
				<>
					<p>Element.AI was ACM AI's winter 2023 AI competition, with $8000 in funding, 200 participants (limited only by the number of UCSD lab linux machines), and hundreds of creative submissions.</p>
					<p>As Director of Events, I headed environment development, led on-premise systems setup in coordination with UCSD ITS, and planning and logistics.</p>
					<p>The environment is made primarily with Python in Conda, while also offering a Java kit through Maven. The environment uses popular packages like OpenAI Gym, PettingZoo, OpenCV, and PyGame, and the Java kit uses Jackson.</p>
					<p>As for the on-premise setup, participants were given an account to access the UCSD CSE lab computers with all code and dependencies already set up. We created several tools to manage and fix the accounts as needed day-of.</p>
				</>
			),
		},
		{
			label: <h2>Environment Development</h2>,
			content: (
				<>
					<p>The environment was built using Python in Conda, supporting Python and Java kits (the latter set up with Maven). It handles 1-4 agents whose goal is to enclose territory to gain points.</p>
					<p>
						All game rules are explained in the <A href='https://github.com/acmucsd/Element.AI/blob/main/documentation/Element.AI%20Documentation.pdf'>graphic documentation</A>, and the environment was inspired by PaperIO (though the rules and setup were altered significantly to fit a 6-hour timeframe).
					</p>
					<p>
						The environment has four major components:{' '}
						<ol>
							<li>
								<b>Environment</b>: The environment is a PettingZoo Parallel Environment. For each environment step, all agents return their actions, and all actions are processed at the same time.
							</li>
							<li>
								<b>Kits</b>: The Python and Java kits both communicate with the runner using stdout to support multiple languages and avoid the need for code jailing.
							</li>
							<li>
								<b>Replay Video Generator</b>: The environment saves json files containing observations at each timestep. The replay video generators (simple and fancy) both process this json data and create an output video.
							</li>
							<li>
								<b>LuxAI Runner</b>: We use the <A href='https://github.com/Lux-AI-Challenge/Lux-Design-S2'>Lux AI 2022 runner</A> to facilitate communication between the environment and the kits, while also offering features like environment configuration adjustment, verbosity, and replay generation. <CodeNB>Bot</CodeNB> communicates with the player kits. <CodeNB>Episode</CodeNB> gets observations from <CodeNB>PaperIO</CodeNB> (the environment) and sends them to the <CodeNB>Bot</CodeNB> instances through stdout. It then sends the resultant actions from the <CodeNB>Bot</CodeNB> instances to <CodeNB>PaperIO</CodeNB>. This loops until terminal state.
							</li>
						</ol>
					</p>
				</>
			),
		},
		{
			label: <h2>On-Premise System Requirements</h2>,
			content: (
				<>
					<p>At sponsor request, the competition was run in-person in the UCSD CSE Basement Labs. We had 198 linux machines, and 200 RSVPs. Students could enter alone or in pairs.</p>
					<p>
						We had a few requirements for these systems:
						<ol>
							<li>
								<b>Feature</b>: Egress needed to be blocked for all domains except our api <CodeNB>api.ai.acmucsd.com</CodeNB> and our locally-run image of our website (some IP address of a basement lab machine).
								<br />
								<b>Reason</b>: Our sponsor wanted the competition to be wifi-free, but we needed our api available so students could upload submissions during the competition.
							</li>
							<li>
								<b>Feature</b>: Participant accounts to access the machines which came preloaded with Conda, Maven, and several VSCode extensions.
								<br />
								<b>Reason</b>: Conda and Maven were necessary for the environment and kits, and VSCode extensions allowed for autocomplete, code lookup, linting, and other features which would be helpful for participants.
							</li>
							<li>
								<b>Feature</b>: An instructor account which had easy access to all participant accounts, and could achieve the following:
								<ol type='a'>
									<li>Copy any file/directory to any participant account.</li>
									<li>Give/remove access to any file/directory to any participant account.</li>
									<li>Give/remove access to wifi to specific lab machines.</li>
								</ol>
								<b>Reason</b>: To make the competition run smoothly and easily deal with any issues that came up, we needed some way to control any aspect of our on-premise setup.
							</li>
						</ol>
					</p>
				</>
			),
		},
		{
			label: <h2>On-Premise System Solutions</h2>,
			content: (
				<>
					<p>
						IT set up a squid proxy along with some iptables rules to block all domains except <CodeNB>api.ai.acmucsd.com</CodeNB>. Our regular website didn’t work since our CDN changed DNS very quickly, causing https requests to hang frequently. However, direct IP connections went through the proxy just fine, so we kept our website running locally. However, we also needed to block all IPs for popular websites like Google or YouTube since websites like Firefox sometimes directly connect to their IPs rather than through DNS. Finally, we kept logs of all egress to make sure participants didn’t bypass the proxy (e.g. some other IP, ssh traffic, etc).
					</p>
					<p>We created a public directory which was read/execute-accessible by all users. Here, we kept our Conda environment and Maven installation, so all users could read the same installation without duplicating files unnecessarily. Finally, we gave each participant 10GB so that they had more than enough space for swap files, saving game replays, and any other files they may need.</p>
					<p>
						Here, we made bash scripts for each function. These scripts could be accessed by SSHing into UCSD’s ieng6 system with an external device using instructor credentials. The scripts are as follows:
						<ol>
							<li>Simple recursive copy script.</li>
							<li>Two simple recursive chmod scripts. While we could not alter files created by participants (since they had ownership and our instructor account had restricted access to sudo), we could remove access to at least the competition directory and any installations necessary to run the environment.</li>
							<li>
								First, we made an RSA key collector using <CodeNB>ssh-keyscan</CodeNB>. Then, after saving these RSA keys, we could ssh into each machine through the instructor account and turn on the iptables rules.
							</li>
						</ol>
					</p>
				</>
			),
		},
	],
}

const ComponentLibrary: Project = {
	name: 'Component Library',
	pagePath: 'component-library',
	GitHub: new URL('https://github.com/arth-shukla/arth-components'),
	logo: ProjectIcons.AnimLibraryIcon,
	deployment: new URL('https://arth-shukla.github.io/my-icons-documentation/'),
	description: 'This is a React component library with compoennts which I use frequently. Many of those components are used in this website!',
	carouselSlides: [
		{
			label: <h2>Description and Purpose</h2>,
			content: (
				<>
					<p>I often want similar functionality across different projects. So, I made a React component library with components which I use frequently. Many of those components are used in this website!</p>
					<p>
						The library can be installed by running <Code>npm i @arth-shukla/arth-components</Code>.
					</p>
				</>
			),
		},
		{
			label: <h2>Motivation</h2>,
			content: (
				<>
					<p>I often use certain components frequently to fulfill the same purposes, like</p>
					<ul>
						<li>changing page between light and dark mode,</li>
						<li>changing the color of some element, or</li>
						<li>animations to add extra flare.</li>
					</ul>
					<p>I didn't want to keep re-making these components, and I wanted flexibility with how I could use these components.</p>
					<p>Furthermore, I should be able to change the state of component using an external state variable (e.g. change light/dark mode button along with page), but I shouldn't have access to essential functions of a component (e.g. the animation of a light/dark mode button when selected).</p>
				</>
			),
		},
		{
			label: <h2>Features</h2>,
			content: (
				<>
					<p>To meet development needs, I made each component in this library so that they are:</p>
					<ol>
						<li>
							<b>Adaptable</b>: The component can interact with external state variables via the <Code>onClick</Code> prop (e.g. once a light/dark mode button is clicked, change the state of the page).
						</li>
						<li>
							<b>Self-Reliant</b>: Should maintain internal state (e.g. when left on its own, a light/dark mode button will still switch between light/dark animations when clicked, even if the site is not 'connected'.)
						</li>
						<li>
							<b>Accessible</b>: Compatible with Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.
						</li>
					</ol>
				</>
			),
		},
	],
}

const DiceRollerData: Project = {
	name: 'TTRPG Dice Roller',
	pagePath: 'dice-roller',
	GitHub: new URL('https://github.com/arth-shukla/dice-roller'),
	logo: ProjectIcons.DiceRollerLogo,
	deployment: new URL('https://arth-shukla.github.io/dice-roller/'),
	description: "This is a dice roller made for quick rolling and an aesthetically pleasing, accessible design. It's great for TTRPGS like D&D, Cyberpunk Red, and more.",
	carouselSlides: [
		{
			label: <h2>Description and Purpose</h2>,
			content: (
				<>
					<p>In TTRPGs like D&amp;D, rolling dice is essential to the game. I have sets of physical dice, but sometimes I forget them, and sometimes I can't bring the dice with me.</p>
					<p>However, most online rollers are a nightmare to use on phones; even the nicer options still have flaws.</p>
					<p>For example, the Google roller is simple and looks nice, but is slow when rolling many different dice. The D&amp;D Beyond roller allows you to roll the exact dice you need for an action, but it only works on chracters made in D&amp;D Beyond&mdash;sometimes I want to play other TTRPGs.</p>
					<p>So, I made a dice roller for myself and my friends which is aesthetically pleasing and has an accessible design. It's great for TTRPGS like D&amp;D, Cyberpunk Red, and more.</p>
				</>
			),
		},
		{
			label: <h2>Motivation</h2>,
			content: (
				<>
					Most Dice Rollers suffer from the same three problems:
					<ol>
						<li>
							<b>Efficiency</b>: Most dice rollers have clunky UIs or unnecessary forms; as a result, it takes several button presses to roll a single dice.
						</li>
						<li>
							<b>Aesthetically Pleasing</b>: Many dice roller UIs are unattractive, poorly layed out, or don't support mobile/tablet screens very well. However, the most likely use case for a dice roller would be one's phone/tablet!
						</li>
						<li>
							<b>Accessibility</b>: D&amp;D and TTRPGs shoud be inclusive to everyone, but some websites aren't made with certain accessiblity needs in mind.
						</li>
					</ol>
				</>
			),
		},
		{
			label: <h2>Features</h2>,
			content: (
				<>
					To solve these issues, I implemented the following features:
					<ol>
						<li>
							<b>Efficiency</b>: Buttons are available to quickly roll 1-8 of a standard D&amp;D dice set (d4, d6, d8, d10, d12, d20) with a single button press. While this should cover most use cases, the user can also enter a custom number of dice as well.
						</li>
						<li>
							<b>Aesthetically Pleasing</b>: Create interface which is
							<ul>
								<li>simple,</li>
								<li>supports dark/light mode and different color themes, and</li>
								<li>supports mobile, tablet, and computer browsers and screen sizes.</li>
							</ul>
						</li>
						<li>
							<b>Accessibility</b>: This dice roller is compatible with the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards and uses the ARIA Authoring Practices Guide (APG) as a foundation for more complicated components.
						</li>
					</ol>
				</>
			),
		},
	],
}

const NLPWorkshopSeries: Project = {
	name: 'ACM AI NLP Workshop Series',
	pagePath: 'nlp-series',
	GitHub: new URL('https://github.com/acmucsd/acm-ai-workshops/tree/main/2022/SP22/nlp-series'),
	logo: ProjectIcons.NLPSeriesLogo,
	deployment: undefined,
	description: 'This is a workshop series on NLP topics I worked for for ACM AI at UCSD. The workshop was held Spring 2022.',
	carouselSlides: [
		{
			label: <h2>Description</h2>,
			content: (
				<>
					<p>This workshop series for ACM AI from Spring 2022 consists of 3 workshops:</p>
					<ol>
						<li>
							<b>Workshop 1: Intro to NLP</b>: For the first workshop, we introduce the basics of NLP (bag of words, logistic regression, etc) by solving a binary classification problem: labeling Tweets as Hate Speech or Not Hate Speech.
						</li>
						<li>
							<b>Workshop 2: RNNs for Multiclassification</b>: In the second workshop, we discuss a more challenging problem for NLP: multiclassification. We tackle classifying phrases into different emotions using an RNN.
						</li>
						<li>
							<b>Workshop 3: Seq2Seq RNNs for Translation</b>: For the final workshop, we build a machine translation model with an encoder/decoder architecture to translate between English and French.
						</li>
					</ol>
				</>
			),
		},
		{
			label: <h2>Topics Covered</h2>,
			content: (
				<>
					<ol>
						<li>
							<b>Workshop 1: Intro to NLP</b>:
							<ul>
								<li>Bag of Words</li>
								<li>Logistic Regression</li>
								<li>Neural Networks</li>
								<li>Accuracy, Precision, and Recall</li>
							</ul>
						</li>
						<li>
							<b>Workshop 2: RNNs for Multiclassification</b>:
							<ul>
								<li>Data Cleaning and Processing (Stop Words, Stemming, One-Hot Encoding)</li>
								<li>Recurrent Neural Netowrks (RNNs) and Sequential Data</li>
							</ul>
						</li>
						<li>
							<b>Workshop 3: Seq2Seq RNNs for Machine Translation</b>:
							<ul>
								<li>Encoder/Decoder Architecture</li>
								<li>LSTMs</li>
							</ul>
						</li>
					</ol>
				</>
			),
		},
		{
			label: <h2>Reflection</h2>,
			content: (
				<>
					<p>This was my first workshop series for ACM AI. It was very fun to communicate the NLP ideas I'd learned during high school to make Workshop 1 and Workshop 2, and I had a great time learning about LSTMs, attention, and more to prepare workshop 3.</p>
					<p>The target of this workshop was beginner-intermediate students. From speaking to audience members, it seems most people were able to learn something new. In that regard, I believe this series was successful.</p>
					<p>If I could make one change to improve the workshop, I would scale the workshop time for each successive workshop. The topics were increasingly complicated, with each set of topics requiring more time to explain. Longer workshops would allow us to dive deeper into the workshop content.</p>
				</>
			),
		},
	],
}

export interface ProjectsDataType {
	[x: string]: Project
}

const ProjectsData = {
	'Mario PPO': MarioPPO,
	'SQuAD 2.0 Question-Answer w/ DistilBERT': SQuAD2,
	'Element AI': ElementAI,
	'Component Library': ComponentLibrary,
	'Dice Roller': DiceRollerData,
	'NLP Workshop Series': NLPWorkshopSeries,
}

export default ProjectsData
