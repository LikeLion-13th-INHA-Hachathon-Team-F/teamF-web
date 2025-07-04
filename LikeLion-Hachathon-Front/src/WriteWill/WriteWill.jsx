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
                <p className='WriteWill-p'>제목</p>
                <input type='text' className='WriteWill-Write-Contents' />
                <p className='WriteWill-p'>내용</p>
                <textarea className='WriteWill-Write-Textarea'>

                </textarea>
                <br/>
                <button className='WriteButton'>
                    작성하기
                </button>
               
            </div>

        </div>
        <div className='WriteWill-WritingTips'>
            <p>작성 도움말</p>

        </div>

      </div>

    </div>
  )
}

export default WriteWill
