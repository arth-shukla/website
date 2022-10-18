import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import './DownButton.scss'

interface DownButtonProps {
	scrollTargRef: any
}

function DownButton({ scrollTargRef }: DownButtonProps) {
	const [hidden, setHidden] = useState<boolean>(false)

	const scrollToTarg: () => void = () => {
		scrollTargRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	const hideOnScroll = () => {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop

		if (winScroll < 50) setHidden(false)
		else setHidden(true)
	}

	useEffect(() => {
		window.addEventListener('scroll', hideOnScroll)
	}, [])

	return (
		<Button
			className={'scroll-down-button' + (hidden ? ' scroll-down-button-hidden' : '')}
			sx={{
				position: 'absolute',
				bottom: '5%',
				left: 'calc(50% - 32px)',
			}}
			onClick={() => {
				scrollToTarg()
			}}
			aria-hidden='true'
			title='Scroll to content'
		>
			<KeyboardArrowDownIcon fontSize='large' />
		</Button>
	)
}

export default DownButton
