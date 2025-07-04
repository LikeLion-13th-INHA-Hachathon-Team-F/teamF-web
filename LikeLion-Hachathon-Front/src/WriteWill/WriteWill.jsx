import React from 'react'
import './WriteWill.css'
import { useNavigate } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'
const WriteWill = () => {
  return (
    <div>
      <div className="WriteWill-Top-bar">
        <div className="WriteWill-Logo">lastLink</div>
      </div>
      <div className="WriteWill-Body">
        <div className="WriteWill-Write">
            <div className='WriteWill-Write-Title'>
                <p>제목</p>
                <input type='text' />
               
            </div>

        </div>
        <div className='WriteWill-WritingTips'>

        </div>

      </div>

    </div>
  )
}

export default WriteWill
