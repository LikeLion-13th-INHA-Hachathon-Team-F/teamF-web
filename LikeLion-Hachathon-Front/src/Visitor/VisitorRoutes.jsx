import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WelcomePage from './WelcomePage/WelcomePage.jsx'
import MemoryRoom from './MemoryRoom/MemoryRoom.jsx'
import RIPBoard from './RIPBoard/RIPBoard.jsx'
import LastMessage from './LastMessage/LastMessage.jsx'

const VisitorRoutes = () => {
  return ( 
    
      <Routes>
        <Route path="/" element= {<WelcomePage />}/>
        <Route path="/memoryroom" element= {<MemoryRoom />}/>
        <Route path="/ripboard" element={<RIPBoard />}/>
        <Route path="/lastmessage" element={<LastMessage />}/>
      </Routes>
   
    
  )
}

export default VisitorRoutes
