import React from 'react'
import {useNavigate} from 'react-router-dom'
import './LastMessage.css'
const LastMessage = () => {
   const navigate = useNavigate();
    const handleMemory = () => {
          navigate("/visitor/memoryroom"); 
      }
    const handleRIP = () => {
          navigate("/visitor/ripboard"); 
      }
    const handleLogin = () => {
        navigate("/"); // 로그인 페이지로 이동
    }

    return (
      <div>
        <div className="Top-bar">
            <div className="Logo">lastLink</div>
            <div className='MakeLink' onClick={handleLogin}>나의 last link 만들기</div>
        </div>
        <div className='VisitorBody'>
            <div className='VisitorIndex'>
                <p onClick={handleMemory}>기억의 방</p>|
                <p onClick={handleRIP}>추모 게시판</p>|
                <p style={{fontWeight: "bold"}}>마지막 메시지</p>
            </div>
        </div>
      </div>
    )
}

export default LastMessage
