import React from 'react'
import './AddMemory.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from "axios";

const AddMemory = () => {
    const navigate = useNavigate();
     const [image, setImage] = useState(null);
     const [description, setDescription] = useState(''); 
     const [author, setAuthor] = useState(''); 


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64 형태로 미리보기
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddMemory = async () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
    }

    try {
        const response = await axios.post(
            'https://lastlink.p-e.kr/room/', 
            {
                imageUrl: image, 
                description: description, 
                name: author, 
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`, // 인증 토큰
                },
            }
        );
        if (response.status === 201) {
            alert('기억이 성공적으로 추가되었습니다.');
            navigate(-1); // 이전 페이지로 이동
        }
    } catch (error) {
        console.error('기억 추가 실패:', error);
        alert('기억 추가에 실패했습니다. 다시 시도해주세요.');
    }
};

  return (
    <div>
      <div className="AddMemory-Top-bar">
            <div className='backButton' onClick={() => navigate(-1)}>←</div>
            <div className="Logo">lastLink</div>
      </div>
      <div className='AddMemoryBody'>
    
        <label htmlFor="image-upload" className="Image-Box">
          {image ? (
            <img src={image} alt="업로드된 이미지" className="Preview-Image" />
          ) : (
            <span className='imageHover'>사진 추가하기</span>
          )}
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      
       <div className='AddMemoryContent'>
        <div className='AddMemoryTitle'>
            <p>사진설명</p>
            <input 
                type='text'
                className='Memorytext'
                value={description} 
                onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className='AddMemoryAuthor'>
            <p>작성자 이름</p>
            <input 
                type='text'
                className='Memorytext'
                value={author} 
                onChange={(e) => setAuthor(e.target.value)}/>
        </div>
       </div>
      </div>
      <button className='AddMemoryButton' onClick={handleAddMemory}>
        기억 추가하기
      </button>
      
    </div>
  )
}

export default AddMemory
