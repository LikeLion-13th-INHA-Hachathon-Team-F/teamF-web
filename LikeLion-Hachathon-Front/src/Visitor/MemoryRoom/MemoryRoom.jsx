import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MemoryRoom.css'

const MemoryRoom = () => {
  const navigate = useNavigate();
  const handleRIP = () => {
        navigate("/visitor/ripboard"); 
    }
  const handleLastMessage = () => {
        navigate("/visitor/lastmessage"); 
    }
  const handleLogin = () => {
        navigate("/"); // 로그인 페이지로 이동
    }
  const handleAddMemory = () => {
        navigate("/visitor/addmemory"); // 기억 추가 페이지로 이동
    }
  return (
    <div>
      <div className="Top-bar">
            <div className="Logo">lastLink</div>
            <div className='MakeLink' onClick={handleLogin}>나의 last link 만들기</div>
        </div>
        <div className='VisitorBody'>
            <div className='VisitorIndex'>
              <p style={{fontWeight: "bold"}}> 기억의 방</p>|
              <p onClick={handleRIP}>추모 게시판</p>|
              <p onClick={handleLastMessage}>마지막 메시지</p>
            </div>
        </div>
        <button className='VisitorButton' onClick={ handleAddMemory}>
          기억 추가하기
        </button>

    </div>
  )
}

export default MemoryRoom

