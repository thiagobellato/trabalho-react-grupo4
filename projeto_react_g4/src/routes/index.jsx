import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contato from '../pages/Contato'
import Produto from '../pages/Produto'
import Sobre from '../pages/Sobre'
import Erro from '../pages/Erro'

export default function AppRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        <Route path='*' element={<Erro />}></Route>
        <Route path='/produto/:id' element={<Produto />}></Route>
    </Routes>

    </div>
  )
}
