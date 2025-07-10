import React , { useState, useEffect }from "react";
import { useNavigate , useParams } from "react-router-dom";
import axios from "axios";
import "./RIPView.css";


function RIPView() {
    const navigate = useNavigate();
    const { id } = useParams(); 
    const [ripData, setRipData] = useState(null);
    const [loading, setLoading] = useState(true); // 로딩 상태 관리
    const [error, setError] = useState(null); // 에러 상태 관리

    const fetchRIPData = async () => {
        try {
            const response = await axios.get(`https://lastlink.p-e.kr/remembrances/detail/${id}/`, {
               
            });
            console.log("API 응답 데이터:", response.data); // 데이터 확인
            setRipData(response.data); // 서버에서 가져온 데이터를 상태에 저장
            setLoading(false); // 로딩 완료

        } catch (error) {
            console.error("데이터 가져오기 실패:", error);
            alert("데이터를 가져오는 데 실패했습니다. 다시 시도해주세요.");
            setLoading(false); // 로딩 완료

        }
    };  
    
    useEffect(() => {
        console.log("URL에서 가져온 ID:", id); // ID 확인
        fetchRIPData();
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("정말로 이 추모 데이터를 삭제하시겠습니까?");
        if (!confirmDelete) return;

        const password = prompt("삭제하려면 비밀번호를 입력하세요:");
        if (!password) {
            alert("비밀번호를 입력해야 합니다.");
            return;
        }

        try {
            await axios.delete(`https://lastlink.p-e.kr/remembrances/${id}/`, {
                data: { password },
            });
            alert("추모 데이터가 성공적으로 삭제되었습니다.");
            navigate(-1); // 이전 페이지로 이동
        } catch (error) {
            console.error("추모 데이터 삭제 실패:", error);
            if (error.response && error.response.status === 403) {
                alert("비밀번호가 일치하지 않습니다.");
            } else {
                alert("추모 데이터 삭제에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

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
                                <div className="writer">{ripData.writer}</div>
                            </div>
                            <div className="RIP">
                                <p>{ripData.content}</p>
    
                            </div>
                            <button className="delete-button" onClick={handleDelete}>
                            삭제
                        </button>
                        </>
                    ) : (
                        <p>로딩 중...</p>
                    )}
                </div>

            </div>
        
    );
}

export default RIPView;