import PaginaInicial from './components/PaginaInicial.jsx'
import Header from './components/Header/index.jsx'
import AppRouter from './routes/index.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <AppRouter/>
      </BrowserRouter>
   </>   
  )
}

export default App
