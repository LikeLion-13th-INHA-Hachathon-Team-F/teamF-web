import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import './MemoryRoom.css';
import HTMLFlipBook from 'react-pageflip';

const MemoryRoom = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const { userpk } = useParams(); // URL에서 userPk를 가져옴
  const photosPerPage = 8;
  const [photoData, setPhotoData] = useState([]); // 서버에서 가져온 사진 데이터를 저장할 상태


  const fetchPhotoData = async () => {
    try {
      console.log("사용자 pk:", userpk);
      console.log("사용한 인증 토큰:", localStorage.getItem('access_token'));
      const response = await axios.get(`https://lastlink.p-e.kr/room/${userpk}/`, { // 엔드포인트 수정 필요
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      console.log("API 응답 데이터:", response.data); // 데이터 확인
      setPhotoData(response.data); // 서버에서 가져온 데이터를 상태에 저장
    } catch (error) {
      console.error('사진 데이터 가져오기 실패:', error);
      alert('사진 데이터를 가져오는 데 실패했습니다. 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    if (!userPk) {
      alert('로그인이 필요합니다.');
      navigate('/'); // 로그인 페이지로 이동
    } else {
      fetchPhotoData(); // 컴포넌트가 마운트될 때 데이터 가져오기
    }
  }, []);

  const totalPages = Math.ceil(photoData.length / photosPerPage);
  const startIndex = currentPage * photosPerPage;
  const currentPhotos = photoData.slice(startIndex, startIndex + photosPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(prev => prev - 1);
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
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
          <p onClick={() => navigate("/visitor/ripboard")}>추모 게시판</p>|
          <p onClick={() => navigate("/visitor/lastmessage")}>마지막 메시지</p>
        </div>
      </div>

      <button className='VisitorButton' onClick={() => navigate("/visitor/addmemory")}>
        기억 추가하기
      </button>

      {/* 사진첩 - 페이징 */}
      <div className="gallery-controls">
        <button onClick={handlePrev} disabled={currentPage === 0}>{'<'}</button>
        <span>{currentPage + 1} / {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages - 1}>{'>'}</button>
      </div>

      {/* 사진 리스트 */}
      <motion.div
        className="gallery"
        variants={container}
        initial="hidden"
        animate="show"
        key={currentPage} // 페이지 바뀌면 key 바뀌어서 AnimatePresence 작동
      >
        <AnimatePresence mode="wait">
        {currentPhotos.map((itemData, index) => {
            console.log("사진 데이터:", itemData); // 데이터 확인
            return (
                <motion.div
                    key={itemData.img_url + index}
                    className="photo-card"
                    variants={item}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, y: -20 }}
                >
                    <img src={itemData.img_url} alt={itemData.description} className="photo-image" />
                    <div className="photo-description"><b>{itemData.description}</b></div>
                    <div className="photo-name">{itemData.writer}</div> {/* 오타 수정 */}
                </motion.div>
            );
        })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MemoryRoom;
