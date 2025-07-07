import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WelcomePage from './WelcomePage/WelcomePage.jsx'
import MemoryRoom from './MemoryRoom/MemoryRoom.jsx'
import RIPBoard from './RIPBoard/RIPBoard.jsx'
import LastMessage from './LastMessage/LastMessage.jsx'
import AddMemory from './AddMemory/AddMemory.jsx'
<<<<<<< HEAD
import AddRIP from './AddRIP/AddRIP.jsx'
=======
import SeeLastMessage from './SeeLastMessage/SeeLastMessage.jsx'

>>>>>>> refs/remotes/origin/main

const VisitorRoutes = () => {
  return ( 
    
      <Routes>
        <Route path="/" element= {<WelcomePage />}/>
        <Route path="/memoryroom" element= {<MemoryRoom />}/>
        <Route path="/ripboard" element={<RIPBoard />}/>
        <Route path="/lastmessage" element={<LastMessage />}/>
        <Route path="/addmemory" element={< AddMemory/>}/>
<<<<<<< HEAD
        
        <Route path='/addrip' element={<AddRIP/>}/>
        
      </Routes>
=======
        <Route path="/seelastmessage" element={<SeeLastMessage />} />
      </Routes> 
>>>>>>> refs/remotes/origin/main
   
    
  )
}

export default VisitorRoutes
