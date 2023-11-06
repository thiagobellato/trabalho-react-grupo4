import AppRouter from './routes/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'

import Header from './components/Header/index.jsx'


function App() {
  

  return (

    <div>

      <BrowserRouter>
      <AppRouter/>
      </BrowserRouter>
   </div>   
  )
}

export default App
