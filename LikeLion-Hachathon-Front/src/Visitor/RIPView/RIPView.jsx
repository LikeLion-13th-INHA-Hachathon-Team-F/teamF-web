import React , { useState, useEffect }from "react";
import { useNavigate , useParams } from "react-router-dom";
import axios from "axios";
import "./RIPView.css";


function RIPView() {
    const navigate = useNavigate();
    const { id } = useParams(); 
    const [ripData, setRipData] = useState(null);

    const fetchRIPData = async () => {
        try {
            const response = await axios.get(`https://lastlink.p-e.kr/remembrances/detail/${id}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
            console.log("API 응답 데이터:", response.data); // 데이터 확인
            setRipData(response.data); // 서버에서 가져온 데이터를 상태에 저장
        } catch (error) {
            console.error("데이터 가져오기 실패:", error);
            alert("데이터를 가져오는 데 실패했습니다. 다시 시도해주세요.");
        }
    };  
    
    useEffect(() => {
        console.log("URL에서 가져온 ID:", id); // ID 확인
        fetchRIPData();
    }, [id]);

    return (
        <div>
            <div className="AddRIP-Top-bar">
                    <div className='backButton' onClick={() => navigate(-1)}>←</div>
                    <div className="AddRIP-Logo"  >lastLink</div>
            </div>

            <div className="RIPView-Body">
                {ripData ? (
                        <>
                            <div className="RIPP-Title">
                                <div className="title">{ripData.title}</div>
                                <div className="name">{ripData.name}</div>
                            </div>
                            <div className="RIP">
                                <p>{ripData.content}</p>
                            </div>
                        </>
                    ) : (
                        <p>로딩 중...</p>
                    )}
                </div>

            </div>
        
    );
}

export default RIPView;