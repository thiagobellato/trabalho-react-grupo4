import React from 'react'
import './style.css'

export default function Player1() {
  return (
    
    <div>
   <audio className='radio' controls>
  <source src="https://manager8.streamradio.fr:3235/stream" type="audio/mpeg" />
</audio>
    </div>

  )
}
