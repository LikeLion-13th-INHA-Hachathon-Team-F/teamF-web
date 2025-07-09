import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './MemoryRoom.css';
import HTMLFlipBook from 'react-pageflip';

const MemoryRoom = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const photosPerPage = 8;

  const photoData = [
    // 총 16장 예시
    { description: "1번 사진", name: "사람1", imageUrl: '/KakaoTalk_20250630_124044283.jpg' },
    { description: "2번 사진", name: "사람2", imageUrl: '/KakaoTalk_20250630_124044283.jpg' },
    { description: "1번 사진", name: "사람1", imageUrl: '/KakaoTalk_20250630_124044283.jpg' },
    { description: "1번 사진", name: "사람1", imageUrl: '/KakaoTalk_20250630_124044283.jpg' },
    { description: "1번 사진", name: "사람1", imageUrl: '/KakaoTalk_20250630_124044283.jpg' },
    { description: "1번 사진", name: "사람1", imageUrl: '/KakaoTalk_20250630_124044283.jpg' },
    { description: "1번 사진", name: "사람1", imageUrl: '/KakaoTalk_20250630_124044283.jpg' },
    { description: "1번 사진", name: "사람1", imageUrl: '/KakaoTalk_20250630_124044283.jpg' },
    { description: "1번 사진", name: "사람1", imageUrl: '/KakaoTalk_20250630_124044283.jpg' },
    { description: "1번 사진", name: "사람1", imageUrl: '/KakaoTalk_20250630_124044283.jpg' },
    { description: "1번 사진", name: "사람1", imageUrl: '/KakaoTalk_20250630_124044283.jpg' }
    // ... 14장 더 추가
  ];

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
          {currentPhotos.map((itemData, index) => (
            <motion.div
              key={itemData.imageUrl + index}
              className="photo-card"
              variants={item}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -20 }}
            >
              <img src={itemData.imageUrl} alt={itemData.description} className="photo-image" />
              <div className="photo-description"><b>{itemData.description}</b></div>
              <div className="photo-name">{itemData.name}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MemoryRoom;
