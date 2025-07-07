import React from 'react'
import './SeeLastMessage.css'
import { useNavigate } from 'react-router-dom'

const SeeLastMessage = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="AddMemory-Top-bar">
            <div className='backButton' onClick={() => navigate(-1)}>←</div>
            <div className="Logo">lastLink</div>
      </div>

      <div className="RIPView-Body">
            <div className="RIPP-Title">
                <div className="title">유서 제목 01</div>
             
                
                </div>
                <div className="RIP">
            
                    <p>내용</p>
    
                </div>

            </div>
    </div>
  )
}

export default SeeLastMessage
