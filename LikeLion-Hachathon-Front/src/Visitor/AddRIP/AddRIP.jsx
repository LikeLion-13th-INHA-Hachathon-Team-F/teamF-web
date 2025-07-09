import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './AddRIP.css';


function AddRIP() {
    const navigate = useNavigate();

    const { memberId } = useParams(); // URL에서 memberId를 가져옴

    const [title, setTitle] = useState(""); 
    const [author, setAuthor] = useState(""); 
    const [content, setContent] = useState("");
    const [password, setPassword] = useState(""); 


        const handleSubmit = async () => {
            // 작성 완료 버튼 클릭 시 처리 로직
            if (!title.trim() || !author.trim() || !content.trim() || !password.trim()) {
                alert("모든 필드를 입력해주세요.");
                return;
            }
    
            const passwordRegex = /^\d{4}$/; // 숫자 4자리 정규식
            if (!passwordRegex.test(password)) {
                alert("비밀번호는 숫자 4자리여야 합니다.");
                return;
            }
    
            const accessToken = localStorage.getItem("access_token");
            if (!accessToken) {
                alert("로그인이 필요합니다.");
                return;
            }
    
            try {
                const response = await axios.post(
                    "https://lastlink.p-e.kr/remembrances/", // 서버 엔드포인트
                    {
                        member_id: memberId, // member_id 추가
                        title: title.trim(),
                        writer: author.trim(),
                        content: content.trim(),
                        password: password.trim(),
                    },
                    {
                        headers: {
    
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (response.status === 201) {
                    const remembranceId = response.data.id; // 서버에서 반환된 pk
                    localStorage.setItem("remembrance_pk", remembranceId); // 로컬 스토리지에 저장
                    alert("글이 성공적으로 작성되었습니다!");
                    navigate(-1); // 이전 페이지로 이동
                }
            } catch (error) {
                console.error("글 작성 실패:", error);
                if (error.response) {
                    alert(`에러: ${error.response.data.message || "요청이 잘못되었습니다."}`);
                } else {
                    alert("글 작성에 실패했습니다. 다시 시도해주세요.");
                }
            }
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
                    <div className="RIP-Password">
                    <p>비밀번호</p>
                    <input 
                        type="password" 
                        className="Input" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="숫자 4자리 비밀번호를 입력하세요" 
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