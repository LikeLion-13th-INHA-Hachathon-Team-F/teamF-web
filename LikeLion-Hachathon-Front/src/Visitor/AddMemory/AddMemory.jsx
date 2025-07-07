import React from 'react'
import './AddMemory.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const AddMemory = () => {
    const navigate = useNavigate();
     const [image, setImage] = useState(null);

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
            <input type='text'className='Memorytext'/>
        </div>
        <div className='AddMemoryAuthor'>
            <p>작성자 이름</p>
            <input type='text'className='Memorytext'/>
        </div>
       </div>
      </div>
      <button className='AddMemoryButton'>
        기억 추가하기
      </button>
    </div>
  )
}

export default AddMemory
