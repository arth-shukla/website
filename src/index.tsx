import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router-dom'

import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		{/* using hashrouter while im still on gh pages, will switch to browerrouter after i'm ready for real deployment */}
		<HashRouter>
			<Routes>
				<Route
					index
					element={<App page='home' />}
				/>
			</Routes>
		</HashRouter>
	</React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
