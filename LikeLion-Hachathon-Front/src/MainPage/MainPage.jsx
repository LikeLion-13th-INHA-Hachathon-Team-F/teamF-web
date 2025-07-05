import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import QR from "../QR/QR";

function MainPage() {
    const navigate = useNavigate();
    const [isEmailMenuVisible, setEmailMenuVisible] = useState(false);

    const handleWriteWill = () => {
        navigate("/writewill"); // 유서 작성 페이지로 이동
    }

    const handlemodify = () => {
        navigate("/modify"); // 유서 수정 페이지로 이동
    }
    const toggleEmailMenu = () => {
        setEmailMenuVisible(!isEmailMenuVisible); // 토글 상태 변경
    };
    const [showQR, setShowQR] = useState(false);

    return(
        <div>
            <div className="Top-bar">
                <div className="Logo">lastLink</div>
                <div className="email" onClick={toggleEmailMenu}>hong266770@gmail.com</div>
                {isEmailMenuVisible && (
                    <div className="email-menu">
                        <ul>
                            <li onClick={()=>setShowQR(true)}>link connection</li>
                            
                            {showQR && <QR onclose={()=>setShowQR(false)} />}
                            <li>logOut</li>
                        </ul>
                    </div>
                )}
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
                        <button className="modify-btn"
                        onClick={handlemodify}>수정</button>
                    </div>

                    <div className="hanjool">
                        <div className="Will-List-Item">유서 제목02</div>
                        <button className="modify-btn"onClick={handlemodify}>수정</button>
                    </div>

                    <div className="hanjool">
                        <div className="Will-List-Item">유서 제목03</div>
                        <button className="modify-btn"onClick={handlemodify}>수정</button>
                    </div>


                   

                </div>

            </div>

            <div className="footer"></div>
        </div>
    )
}

export default MainPage;