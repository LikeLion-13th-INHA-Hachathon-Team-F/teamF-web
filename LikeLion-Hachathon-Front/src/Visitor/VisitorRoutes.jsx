import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WelcomePage from './WelcomePage/WelcomePage.jsx'
import MemoryRoom from './MemoryRoom/MemoryRoom.jsx'
import RIPBoard from './RIPBoard/RIPBoard.jsx'
import LastMessage from './LastMessage/LastMessage.jsx'
import AddMemory from './AddMemory/AddMemory.jsx'
import AddRIP from './AddRIP/AddRIP.jsx'
import SeeLastMessage from './SeeLastMessage/SeeLastMessage.jsx'
import RIPView from './RIPView/RIPView.jsx'


const VisitorRoutes = () => {
  return ( 
      <Routes>
        <Route path="/:userpk" element= {<WelcomePage />}/>
        <Route path="/memoryroom/:userpk" element= {<MemoryRoom />}/>
        <Route path="/ripboard/:userpk" element={<RIPBoard />}/>
        <Route path="/lastmessage/:userpk" element={<LastMessage />}/>
        <Route path="/addmemory/:userpk" element={< AddMemory/>}/>
        <Route path='/addrip/:userpk' element={<AddRIP/>}/>
        <Route path="/seelastmessage/:id" element={<SeeLastMessage />} />
        <Route path="/ripview" element={<RIPView />} />
      </Routes> 
   
    
  )
}

export default VisitorRoutes
