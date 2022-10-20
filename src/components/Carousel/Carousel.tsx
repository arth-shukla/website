import React, { useCallback, useEffect, useState } from 'react'
import useTheme from '@mui/material/styles/useTheme'
import { Paper, Button, MobileStepper, Box, IconButton } from '@mui/material'
import useEmblaCarousel from 'embla-carousel-react'
import { KeyboardArrowLeft, KeyboardArrowRight, ArrowForwardIos, ArrowBackIosNew } from '@mui/icons-material'

import './Carousel.scss'

interface CarouselProps {
	showFloatOnHover?: boolean
	showOnHover?: boolean
	slides: Array<any>
	maxHeight?: number
	width?: number | string
	[x: string]: any
}

function Carousel({ showFloatOnHover = false, floatStepper = false, slides, maxHeight, width, ...rest }: CarouselProps) {
	const theme = useTheme()

	const [emblaRef, emblaApi] = useEmblaCarousel({ direction: theme.direction })
	const [activeStep, setActiveStep] = useState<number>(0)
	const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(true)
	const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(true)

	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

	const onSelect = useCallback(() => {
		if (!emblaApi) return
		setActiveStep(emblaApi.selectedScrollSnap())
		setPrevBtnEnabled(!emblaApi.canScrollPrev())
		setNextBtnEnabled(!emblaApi.canScrollNext())
	}, [emblaApi, setActiveStep])

	useEffect(() => {
		if (!emblaApi) return
		onSelect()
		emblaApi.on('select', onSelect)
	}, [emblaApi, onSelect])

	console.log('1', { flexGrow: 1, width: width, ...rest.sx })
	console.log('2', { flexGrow: 1, width: width })

	return (
		<Box
			className={'carousel ' + (floatStepper && showFloatOnHover ? 'carousel-show-float-on-hover' : '')}
			{...rest}
			sx={{ width: width, ...rest.sx }}
		>
			<Paper
				square
				elevation={0}
				sx={{
					display: 'flex',
					alignItems: 'center',
					pl: 2,
					bgcolor: 'background.default',
					fontSize: '18px',
				}}
				className='carousel-label'
			>
				{slides[activeStep].label}
			</Paper>
			<div
				className='embla'
				style={{
					position: 'relative',
					maxHeight: maxHeight,
				}}
			>
				<div
					className='embla__viewport'
					ref={emblaRef}
				>
					<div className='embla__container'>
						{slides.map((v, k) => (
							<div
								className='embla__slide'
								key={k}
								style={{ padding: floatStepper ? '0 calc(1em + 40px)' : '0 1em', fontSize: '16px' }}
							>
								{v.content}
							</div>
						))}
					</div>
				</div>
				<IconButton
					onClick={scrollPrev}
					disabled={prevBtnEnabled}
					className={'carousel-step-button-float carousel-step-button-float-left'}
					sx={{
						visibility: floatStepper ? undefined : 'hidden',
					}}
				>
					<ArrowBackIosNew />
				</IconButton>
				<IconButton
					onClick={scrollNext}
					disabled={nextBtnEnabled}
					className={'carousel-step-button-float carousel-step-button-float-right'}
					sx={{
						visibility: floatStepper ? undefined : 'hidden',
					}}
				>
					<ArrowForwardIos />
				</IconButton>
			</div>
			<MobileStepper
				steps={slides.length}
				position='static'
				activeStep={activeStep}
				nextButton={
					<Button
						size='small'
						onClick={scrollNext}
						disabled={nextBtnEnabled}
						className='carousel-step-button'
						sx={{
							visibility: floatStepper ? 'hidden' : undefined,
						}}
					>
						Next
						<KeyboardArrowRight />
					</Button>
				}
				backButton={
					<Button
						size='small'
						onClick={scrollPrev}
						disabled={prevBtnEnabled}
						className='carousel-step-button'
						sx={{
							visibility: floatStepper ? 'hidden' : undefined,
						}}
					>
						<KeyboardArrowLeft />
						Back
					</Button>
				}
				className='carousel-stepper'
			/>
		</Box>
	)
}

export default Carousel
