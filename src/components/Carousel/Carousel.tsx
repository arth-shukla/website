import React, { useCallback, useEffect, useState } from 'react'
import useTheme from '@mui/material/styles/useTheme'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import useEmblaCarousel from 'embla-carousel-react'

import './Carousel.scss'

interface CarouselProps {
	slides: Array<any>
	maxHeight?: number
	width?: number
}

function Carousel({ slides, maxHeight, width }: CarouselProps) {
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
			className='carousel'
			sx={{ flexGrow: 1 }}
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
				style={{ maxHeight: maxHeight }}
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
								style={{ padding: '0 1em', fontSize: '16px' }}
							>
								{v.content}
							</div>
						))}
					</div>
				</div>
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