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
				{floatStepper && (
					<>
						<IconButton
							onClick={scrollPrev}
							disabled={prevBtnEnabled}
							className={'carousel-step-button-float carousel-step-button-float-left'}
						>
							<ArrowBackIosNew />
						</IconButton>
						<IconButton
							onClick={scrollNext}
							disabled={nextBtnEnabled}
							className={'carousel-step-button-float carousel-step-button-float-right'}
						>
							<ArrowForwardIos />
						</IconButton>
					</>
				)}
			</div>
			<MobileStepper
				steps={slides.length}
				position='static'
				activeStep={activeStep}
				nextButton={
					!floatStepper && (
						<Button
							size='small'
							onClick={scrollNext}
							disabled={nextBtnEnabled}
							className='carousel-step-button'
						>
							Next
							<KeyboardArrowRight />
						</Button>
					)
				}
				backButton={
					!floatStepper && (
						<Button
							size='small'
							onClick={scrollPrev}
							disabled={prevBtnEnabled}
							className='carousel-step-button'
						>
							<KeyboardArrowLeft />
							Back
						</Button>
					)
				}
				className='carousel-stepper'
				sx={
					floatStepper
						? {
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
						  }
						: undefined
				}
			/>
		</Box>
	)
}

export default Carousel
