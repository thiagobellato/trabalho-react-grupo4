import React from 'react'
import './style.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGit, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <div id='footer'>
      <footer>
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
        <p>Costs &copy; 2023</p>
      </footer>
    </div>
  )
}
