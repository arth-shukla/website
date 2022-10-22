import React from 'react'
import useTheme from '@mui/material/styles/useTheme'

import './Code.scss'

function Code({ className, style, children, rest }: { className?: string | undefined; style?: any; children?: any; rest?: any }) {
	const theme = useTheme()

	return (
		<code
			className={'website-code-field ' + className}
			style={{
				color: theme.palette.primary.main,
				border: `1px solid ${theme.palette.primary.main}`,
				backgroundColor: theme.palette.primary.main + (20).toString(16),
				...style,
			}}
			{...rest}
		>
			<span style={{ whiteSpace: 'nowrap', fontSize: '.9em' }}>{children}</span>
		</code>
	)
}

export default Code
