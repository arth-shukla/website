import React, { useCallback, useEffect, useState } from 'react'
import useTheme from '@mui/material/styles/useTheme'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
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
	const [scrollSnaps, setScrollSnaps] = useState<any>([])

	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

	const onSelect = useCallback(() => {
		if (!emblaApi) return
		setActiveStep(emblaApi.selectedScrollSnap())
		setPrevBtnEnabled(!emblaApi.canScrollPrev() && scrollSnaps)
		setNextBtnEnabled(!emblaApi.canScrollNext())
	}, [emblaApi, setActiveStep, scrollSnaps])

	useEffect(() => {
		if (!emblaApi) return
		onSelect()
		setScrollSnaps(emblaApi.scrollSnapList())
		emblaApi.on('select', onSelect)
	}, [emblaApi, setScrollSnaps, onSelect])

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
				}}
			>
				<Typography>{slides[activeStep].label}</Typography>
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
								style={{ padding: '0 1em' }}
							>
								<Typography>{v.content}</Typography>
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
					>
						<KeyboardArrowLeft />
						Back
					</Button>
				}
			/>
		</Box>
	)
}

export default Carousel
