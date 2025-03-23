import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import App from './App.tsx'
import './index.css'
import store from './store'

const enableMocking = async () => {
  if (import.meta.env.VITE_MOCK === 'true') {
    const { worker } = await import('./mocks/browser')
    await worker.start()
  }
}

enableMocking().then(() =>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </StrictMode>,
  ),
)
