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
            <div className="LoginPage-Headline">
                lastLink
            </div>
            <div className="email">hong266770@gmail.com</div>
            </div>

            <div className="Body">
                <button 
                className="Write-will"
                onClick={handleWriteWill} 
                >유서작성하기
                </button>

            </div>

            <div className="footer"></div>
        </div>
    )
}

export default MainPage;