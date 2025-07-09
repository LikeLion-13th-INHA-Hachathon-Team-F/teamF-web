import React, {useState, useEffect} from 'react'
import {useNavigate , useParams} from 'react-router-dom'
import axios from 'axios'
import './LastMessage.css'

import SeeLastMessage from '../SeeLastMessage/SeeLastMessage'


const LastMessage = () => {
   const navigate = useNavigate();
    const userpk = localStorage.getItem("user_pk"); 
   const [lastMessages, setLastMessages] = useState([]); // 유서 리스트 상태 관리

   
   const fetchLastMessages = async () => {
    try {
        const response = await axios.get('https://lastlink.p-e.kr/letters/', { // 엔드포인트 수정 필요
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        });
        setLastMessages(response.data); // 서버에서 가져온 데이터를 상태에 저장
    } catch (error) {
        console.error('유서 데이터 가져오기 실패:', error);
        alert('유서를 가져오는 데 실패했습니다. 다시 시도해주세요.');
    }
    };
    useEffect(() => {
        fetchLastMessages();
    }, []);

    const handleMemory = () => {
          navigate(`/visitor/memoryroom/${userpk}`); 
      }
    const handleRIP = () => {
          navigate(`/visitor/ripboard/${userpk}`); 
      }
    const handleLogin = () => {
        navigate("/"); // 로그인 페이지로 이동
    }
    const handleSeeLastMessage = () => {
        navigate("/visitor/seelastmessage"); // 마지막 메시지 보기 페이지로 이동
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


        <div className="Will-List-Title">메시지 리스트</div>
        <div className="Will-List">
                {lastMessages.length > 0 ? (
                    lastMessages.map((message) => (
                        <div className="hanjool" key={message.id}>
                            <div className="Will-List-Item">{message.title}</div>
                            <button
                                className="modify-btn"
                                onClick={() => handleSeeLastMessage(message.id)}
                            >
                                보기
                            </button>
                        </div>
                    ))
                ) : (
                    <p>유서가 없습니다.</p>
                )}
            </div>
      </div>
    )
}

export default LastMessage
