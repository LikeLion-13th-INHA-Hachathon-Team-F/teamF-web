import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddRIP.css';


function AddRIP() {
    const navigate = useNavigate();

    const [title, setTitle] = useState(""); // 제목 상태 관리
    const [author, setAuthor] = useState(""); // 작성자 이름 상태 관리
    const [content, setContent] = useState(""); // 내용 상태 관리

    const handleSubmit = () => {
        // 작성 완료 버튼 클릭 시 처리 로직
        console.log("제목:", title);
        console.log("작성자 이름:", author);
        console.log("내용:", content);
        alert("글이 작성되었습니다!");
    };
   

    return(
        <div>
                 <div className="AddRIP-Top-bar">
                    <div className='backButton' onClick={() => navigate(-1)}>←</div>

                    <div className="AddRIP-Logo"  >lastLink</div>
                 </div>
                 <div className="AddRIP-Body">
                    <div className="RIP-Title">
                        <p>제목</p>
                        <input 
                        type="text" 
                        className="Input" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="제목을 입력하세요" 
                    />

                    </div>
                    <div className="RIP-Name">
                        <p>작성자 이름</p>
                        <input 
                        type="text" 
                        className="Input" 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)} 
                        placeholder="이름을 입력하세요" 
                    />
                    </div>
                    <div className="RIP-content">
                        <p>내용</p>
                        <textarea
                        className="TextInput" 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        placeholder="내용을 입력하세요" 
                    />
                    </div>

                    <div className="RIP-Submit">
                    <button className="Submit-Button" onClick={handleSubmit}>
                        작성 완료
                    </button>
                </div>
                </div>
        </div>
    )
}

export default AddRIP;