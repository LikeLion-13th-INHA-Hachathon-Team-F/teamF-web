import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import QR from "../QR/QR";
import axios from "axios";
import { useEffect } from "react";

function MainPage() {
    const navigate = useNavigate();
    const [isEmailMenuVisible, setEmailMenuVisible] = useState(false);

    const handleWriteWill = () => {
        navigate("/writewill"); // 유서 작성 페이지로 이동
    }

    const handlemodify = (letterId) => {
    navigate(`/modify/${letterId}`); // 유서 ID를 URL에 포함하여 수정 페이지로 이동
    };

    const toggleEmailMenu = () => {
        setEmailMenuVisible(!isEmailMenuVisible); // 토글 상태 변경
    };
    const [showQR, setShowQR] = useState(false);

    const handleLogout = () => {
        navigate("/"); // 로그아웃 시 로그인 페이지로 이동
    }
    const [userData, setUserData] = useState(null);
    const [letterData, setLetterData] = useState(null);
    


    useEffect(() => {
    const fetchData = async () => {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
            console.error("토큰이 없습니다. 로그인하세요.");
            return;
        }
        try {
            const response = await axios.get("https://lastlink.p-e.kr/members/info/", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log("데이터 가져오기 성공:", response.data);
            setUserData(response.data); // 사용자 데이터를 상태에 저장
                      
        } catch (error) {
            console.error("데이터 가져오기 실패:", error);

        }
    }
    fetchData();
    },[]);

    useEffect(() => {
    const fetchletterData = async () => {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
            console.error("토큰이 없습니다. 로그인하세요.");
            return;
        }
        try {
            const response = await axios.get("https://lastlink.p-e.kr/letters/", {
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

    if (!userData) {
        return <div className="loading">Loading...</div>; // 데이터가 로드될 때까지 로딩
    }

    return(
        <div>
            <div className="Top-bar">
                <div className="Logo">lastLink</div>
                <div className="email" onClick={toggleEmailMenu}>{userData.login_id}</div>
                {isEmailMenuVisible && (
                    <div className="email-menu">
                        <ul>
                            <li onClick={()=>setShowQR(true)}>link connection</li>
                            
                            {showQR && <QR onclose={()=>setShowQR(false)} />}
                            <li onClick={handleLogout}>logOut</li>
                        </ul>
                    </div>
                )}
            </div>

            <div className="Body">
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


            <div className="footer">
                <div className="footer-content">
                    © 2025 LastLink. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default MainPage;