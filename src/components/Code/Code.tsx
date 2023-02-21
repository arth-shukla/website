import React from 'react'
import useTheme from '@mui/material/styles/useTheme'

import './Code.scss'

function Code({ className, style, children, noBorder, rest }: { className?: string | undefined; style?: any; children?: any; noBorder?: boolean; rest?: any }) {
	const theme = useTheme()

	return (
		<code
			className={'website-code-field ' + className}
			style={{
				color: theme.palette.primary.main,
				border: !noBorder && `1px solid ${theme.palette.primary.main}`,
				backgroundColor: !noBorder && theme.palette.primary.main + (20).toString(16),
				...style,
			}}
			{...rest}
		>
			<span style={{ whiteSpace: 'nowrap', fontSize: '.9em' }}>{children}</span>
		</code>
	)
}

export default Code
