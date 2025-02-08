import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { store } from './store/store.jsx'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
) 
