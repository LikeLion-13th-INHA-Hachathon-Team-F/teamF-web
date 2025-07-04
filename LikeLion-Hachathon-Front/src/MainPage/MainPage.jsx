import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";


function MainPage() {
    const navigate = useNavigate();

    const handleWriteWill = () => {
        navigate("/writewill"); // 유서 작성 페이지로 이동
    }

    return(
        <div>
            <div className="Top-bar">
                <div className="Logo">lastLink</div>
                <div className="email">hong266770@gmail.com</div>
            </div>

            <div className="Body">
                <button 
                    className="Write-will-button"
                    onClick={handleWriteWill} 
                    >유서작성하기
                </button>

                <div className="Will-List-Title">작성된 유서 목록</div>
                <div className="Will-List">
                 
        
                    <div className="hanjool">
                        <div className="Will-List-Item">유서 제목01</div>
                        <button className="modify-btn">수정</button>
                    </div>

                    <div className="hanjool">
                        <div className="Will-List-Item">유서 제목02</div>
                        <button className="modify-btn">수정</button>
                    </div>

                    <div className="hanjool">
                        <div className="Will-List-Item">유서 제목03</div>
                        <button className="modify-btn">수정</button>
                    </div>


                   

                </div>

            </div>

            <div className="footer"></div>
        </div>
    )
}

export default MainPage;