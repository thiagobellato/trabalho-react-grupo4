import React from 'react'
import './style.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGit, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    
      <footer id='footer'>
        <ul className='list'>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaGit />
          </li>
          <li>
            <FaGithub />
          </li>
        </ul>
        <p>Brasilianas' &copy; copyright 2023. Todos os direitos reservados.</p>
      </footer>
  )
}
