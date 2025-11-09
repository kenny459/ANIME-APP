import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/_index.jsx' 
import Movies from './routes/movies.jsx'
import Series from './routes/series.jsx'
import { BrowserRouter,Routes, Route  } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
