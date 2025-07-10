import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './MemoryRoom.css';
import HTMLFlipBook from 'react-pageflip';

const MemoryRoom = () => {
  const navigate = useNavigate();
  const { userpk } = useParams(); // URL에서 userPk를 가져옴
  const [photoData, setPhotoData] = useState([]); // 서버에서 가져온 사진 데이터를 저장할 상태

  const fetchPhotoData = async () => {
    try {
      console.log("사용자 pk:", userpk);
      console.log("사용한 인증 토큰:", localStorage.getItem('access_token'));

      const response = await axios.get(`https://lastlink.p-e.kr/room/list/${userpk}/`);
      console.log("API 응답 데이터:", response.data); // 데이터 확인
      setPhotoData(response.data); // 서버에서 가져온 데이터를 상태에 저장
    } catch (error) {
      console.error('사진 데이터 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchPhotoData(); // 고인 userpk만 필요함
  }, [userpk]);

  const handleDelete = async (itemId) => {
    const password = prompt("사진을 삭제하려면 비밀번호를 입력하세요:");
    if (!password) {
      alert("비밀번호를 입력해야 합니다.");
      return;
    }

    try {
      const response = await axios.delete(`https://lastlink.p-e.kr/room/${itemId}/`, {
        data: {
          password: password, // 입력된 비밀번호를 서버로 전송
        },
      });
      console.log("삭제 성공:", response.data);
      alert("사진이 성공적으로 삭제되었습니다.");
      fetchPhotoData(); // 삭제 후 데이터 다시 가져오기
    } catch (error) {
      console.error("사진 삭제 실패:", error);
      if (error.response && error.response.status === 403) {
        alert("비밀번호가 일치하지 않습니다.");
      } else {
        alert("사진 삭제에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div>
      {/* 상단 네비게이션 */}
      <div className="Top-bar">
        <div className="Logo">lastLink</div>
        <div className="MakeLink" onClick={() => navigate("/")}>나의 last link 만들기</div>
      </div>

      {/* 메뉴 */}
      <div className='VisitorBody'>
        <div className='VisitorIndex'>
          <p style={{ fontWeight: "bold" }}> 기억의 방</p>|
          <p onClick={() => navigate(`/visitor/ripboard/${userpk}`)}>추모 게시판</p>|
          <p onClick={() => navigate(`/visitor/lastmessage/${userpk}`)}>마지막 메시지</p>
        </div>
     


      {photoData.length > 0 ? (
        <HTMLFlipBook  
        width={600} 
        height={700}
        style={{ margin: '0 auto', backgroundColor: '#efedcf' }}
        
        >
          {photoData.map((itemData, index) => (
            <div key={index} className="demoPsage">
              <img src={itemData.img_url} alt={itemData.description} className="photo-image" />
              <div className="photo-description"><b>{itemData.description}</b></div>
              <div className="photo-name">작성자 : {itemData.writer}</div>
              <button className="delete-button" onClick={() => handleDelete(itemData.id)}>
                삭제
              </button>
            </div>
          ))}
        </HTMLFlipBook>
      ) : (
        <p className="no-memory-message">아직 생성된 기억이 없습니다.</p>
      )}


      <div className='bottom'>
        <button className='VisitorButton' onClick={() => navigate(`/visitor/addmemory/${userpk}`)}>
          기억 추가하기
        </button>
      </div>
    </div>
    </div>
  );
};

export default MemoryRoom;