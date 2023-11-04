import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contato from '../pages/Contato'
import Produto from '../pages/Produto'
import Sobre from '../pages/Sobre'
import Erro from '../pages/Erro'
import Posts from '../api/Posts'
import Calculator from '../pages/Calculadora'
import More from '../pages/More'
import Update  from '../api/Update'

export default function AppRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        <Route path='/posts' element={<Posts />}></Route>
        <Route path='*' element={<Erro />}></Route>
        <Route path='/more/:id' element={<More />}></Route>
        <Route path='/produto' element={<Produto />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/calc' element={<Calculator/>}></Route>
    </Routes>

    </div>
  )
}
