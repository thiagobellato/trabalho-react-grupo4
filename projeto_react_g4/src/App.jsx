import AppRouter from './routes/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'

import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'


function App() {
  

  return (

    <BrowserRouter>
    <div className='container'>
      <div className='page'>
      <Header/>
      <AppRouter/>
      </div>
      <Footer/>
   </div>   
      </BrowserRouter>
  )
}

export default App
