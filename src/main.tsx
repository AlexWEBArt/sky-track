import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import App from 'app/App'

import './main.css'
import './resetDefaultStyles.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
