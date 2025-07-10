import React from 'react'
import './AddMemory.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const AddMemory = () => {
    const navigate = useNavigate();
    const { userpk } = useParams();

     const [image, setImage] = useState(null);
     const [description, setDescription] = useState(''); 
     const [author, setAuthor] = useState(''); 
     const [password, setPassword] = useState(''); 

     const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
          setImage(file); 
      }
  };
  const handleAddMemory = async () => {
    
    if (!image || !description || !author || !password) {
        alert('모든 필드를 입력해주세요.');
        return;
    }

    const passwordRegex = /^\d{4}$/; 
    if (!passwordRegex.test(password)) {
        alert('비밀번호는 숫자 4자리여야 합니다.');
        return;
    }

    const formData = new FormData();
    formData.append('member_id', userpk);
    formData.append('img_file', image); 
    formData.append('description', description); 
    formData.append('writer', author); 
    formData.append('password', password); 

    console.log("요청 바디:", {
      member_id: userpk,
      img_file: image,
      description: description,
      writer: author,
      password: password,
  });

    try {
        const response = await axios.post(
            'https://lastlink.p-e.kr/room/', 
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data', 
                },
            }
        );
        if (response.status === 201) {
            alert('기억이 성공적으로 추가되었습니다.');
            navigate(-1); // 이전 페이지로 이동
        } else {
            console.error('서버 응답:', response.data);
            alert('요청이 실패했습니다. 서버 응답을 확인하세요.');
        }
    } catch (error) {
        if (error.response) {
            console.error('서버 응답:', error.response.data);
            alert(`에러: ${error.response.data.message || '요청이 잘못되었습니다.'}`);
        } else {
            console.error('요청 실패:', error);
            alert('기억 추가에 실패했습니다. 다시 시도해주세요.');
        }
    }
};
 
  return (
    <div className='full'>
      <div className="AddMemory-Top-bar">
            <div className='backButton' onClick={() => navigate(-1)}>←</div>
            <div className="Logo">lastLink</div>
      </div>
      <div className='AddMemoryBody'>
    
        <label htmlFor="image-upload" className="Image-Box">
          {image ? (
            <img src={URL.createObjectURL(image)} alt="업로드된 이미지" className="Preview-Image" />
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
        <div className='AddMemoryPassword'>
            <p>비밀번호</p>
            <input 
                type='password'
                className='Memorytext'
                value={password} 
                placeholder='비밀번호는 숫자 4자리로 설정해주세요.'
                onChange={(e) => setPassword(e.target.value)}/>
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
