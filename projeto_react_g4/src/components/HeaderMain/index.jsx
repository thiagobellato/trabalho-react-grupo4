import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function HeaderMain() {
  return (
    <header className='headerMain'>
        <div className="container">
          <div className="logo">
            <h1>Cadastro de Posts</h1>
          </div>
          <div className="btn-newpost">
            <Link to='/posts'><button>Adicionar novo Post</button></Link>
            {/* <Link to='/update'><button>Update</button></Link>
            <Link to='/more'><button>More</button></Link>
            <Link to='*'><button>Erro</button></Link> */}
              
          </div>
        </div>
    </header>
  )
}
