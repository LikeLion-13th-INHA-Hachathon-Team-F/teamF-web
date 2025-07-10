import React from 'react'
import axios from "axios";
import { useNavigate , useParams} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const GoWill = () => {
    const [letterData, setLetterData] = useState(null);
    const {userpk} = useParams(); // URL에서 userpk를 추출
    const navigate = useNavigate()
    const handleWriteWill = () => {
        navigate(`/writewill/${userpk}`); // 유서 작성 페이지로 이동
    }

    const handlemodify = (letterId) => {
    navigate(`/modi/${letterId}`); // 유서 ID를 URL에 포함하여 수정 페이지로 이동
    };

    useEffect(() => {
        const fetchletterData = async () => {
            const accessToken = localStorage.getItem("access_token");
            if (!accessToken) {
                console.error("토큰이 없습니다. 로그인하세요.");
                return;
            }
    
            // const userPk = localStorage.getItem("user_pk"); // 사용자 pk를 localStorage에서 가져옴

            // if (!userPk) {
            //     console.error("사용자 pk가 없습니다.");
            //     return;
            // }
    
    
            try {
                const response = await axios.get(`https://lastlink.p-e.kr/letters/${userpk}/`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log("유서 데이터 가져오기 성공:", response.data);
                setLetterData(response.data); // 유서 데이터를 반환
            } catch (error) {
                console.error("유서 데이터 가져오기 실패:", error);
            }
        }
        fetchletterData();
        }, []);


  return (
    <div>
    <div className="Top-bar">
      <div className="Logo">lastLink</div>
    </div>
      <button 
    className="Write-will-button"
    onClick={handleWriteWill} 
    >
    유서작성하기
  </button>

  <div className="Will-List-Title">작성된 유서 목록</div>

  <div className="Will-List">
    {letterData && letterData.length > 0 ? (
      letterData.map((letter) => (
        <div className="hanjool" key={letter.id}>
          <div className="Will-List-Item">{letter.title}</div>
          <button 
            className="modify-btn"
            onClick={() => handlemodify(letter.id)}  // 유서 ID를 넘길 수 있도록 변경
          >
            수정
          </button>
        </div>
      ))
    ) : (
      <p>작성된 유서가 없습니다.</p>
    )}
  </div>
    </div>
  )
}

export default GoWill
