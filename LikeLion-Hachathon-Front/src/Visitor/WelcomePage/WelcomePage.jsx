import React from 'react'
import { useNavigate } from 'react-router-dom'
import './WelcomePage.css'

const WelcomePage = () => {
     const navigate = useNavigate();


    const userpk = localStorage.getItem("user_pk");  
    const username = localStorage.getItem("user_name");


   const handleEnter = () => {
    if (!userpk) {
      alert("사용자 pk를 찾을 수 없습니다. 다시 로그인해주세요.");
      return;
    }
    navigate(`/visitor/memoryroom/${userpk}`);
  };


  return (
    <div className='WelcomePage'>
      <div className="Welcome-Top-bar">
            <div className="Welcome-Logo">lastLink</div>
        </div>
      <div className='WelcomePage-Headline'>
      <span style={{ fontWeight: "bold" }}>{username || "故인물"}</span>의 추모공간에 오신 것을 환영합니다.
        </div>
      <button className="EnterButton" onClick={handleEnter} >
        입장하기
      </button>
    </div>
  )
}

export default WelcomePage
