import React from 'react'
import { useNavigate } from 'react-router-dom'
import './WelcomePage.css'

const WelcomePage = () => {
     const navigate = useNavigate();

     const handleEnter = () => {
      const userpk = localStorage.getItem("user_pk"); // localStorage에서 userpk 가져오기
      if (!userpk) {
          alert("사용자 pk를 찾을 수 없습니다. 다시 로그인해주세요.");
          return;
      }
      navigate(`/visitor/memoryroom/${userpk}`); // userpk를 경로에 포함하여 이동
  };


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
