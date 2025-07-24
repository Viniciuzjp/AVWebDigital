import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import './index.css'
import App from './Button.tsx'
import SpinnerDocumentation from './spinner.tsx'
import Dropdown from './Dropdown.tsx'
import GettingStarted from './GetStart.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<GettingStarted />} />
      <Route path='/Dropdown' element={<Dropdown />} />
      <Route path='/Button' element={<App />} />
      <Route path='/Spinner' element={<SpinnerDocumentation />}/>
    </Routes>
  </BrowserRouter>
)
