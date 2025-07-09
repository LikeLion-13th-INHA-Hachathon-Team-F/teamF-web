import React, {useState, useEffect} from 'react'
import './SeeLastMessage.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const SeeLastMessage = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // URL에서 유서 ID를 가져옴
    const [lastMessage, setLastMessage] = useState(null); // 유서 데이터를 저장할 상태
    
    const fetchLastMessage = async () => {
      try {
          const response = await axios.get(`https://lastlink.p-e.kr/letters/detail/${id}/`, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('access_token')}`,
              },
          });
          console.log("API 응답 데이터:", response.data); // 데이터 확인
          setLastMessage(response.data); // 서버에서 가져온 데이터를 상태에 저장
      } catch (error) {
          console.error('유서 데이터 가져오기 실패:', error);
          alert('유서를 가져오는 데 실패했습니다. 다시 시도해주세요.');
      }
    };

    // 컴포넌트가 마운트될 때 데이터 가져오기
    useEffect(() => {
        console.log("URL에서 가져온 ID:", id); // ID 확인
        fetchLastMessage();
    }, [id]);
    
  return (
    <div>
      <div className="AddMemory-Top-bar">
            <div className='backButton' onClick={() => navigate(-1)}>←</div>
            <div className="Logo">lastLink</div>
      </div>

      <div className="RIPView-Body">
                {lastMessage ? (
                    <>
                        <div className="RIPP-Title">
                            <div className="title">{lastMessage.title}</div>
                        </div>
                        <div className="RIP">
                            <p>{lastMessage.content}</p>
                        </div>
                    </>
                ) : (
                    <p>로딩 중...</p>
                )}
            </div>
    </div>
  )
}

export default SeeLastMessage
