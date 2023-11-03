import AppRouter from './routes/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <AppRouter/>
      </BrowserRouter>
   </>   
  )
}

export default App
