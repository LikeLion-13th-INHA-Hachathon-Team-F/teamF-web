import React from 'react'
import { useNavigate } from 'react-router-dom'
import './WelcomePage.css'

const WelcomePage = () => {
     const navigate = useNavigate();
     const handleEnter = () => {
        navigate("/visitor/memoryroom"); // 로그인 성공 시 메인 페이지로 이동
    }
  return (
    <div className='WelcomePage'>
      <div className="Welcome-Top-bar">
            <div className="Welcome-Logo">lastLink</div>
        </div>
      <div className='WelcomePage-Headline'>
        ooo의 추모공간에 오신 것을 환영합니다.
        </div>
      <button className="EnterButton" onClick={handleEnter} >
        입장하기
      </button>
    </div>
  )
}

export default WelcomePage
