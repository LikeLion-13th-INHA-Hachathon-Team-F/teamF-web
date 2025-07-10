import React, { useState, useEffect } from "react";
import "./QR.css";
import axios from "axios";

function QR({ onclose }) {
    const [qrData, setQrData] = useState(null); // QR 데이터 상태 관리
    const [loading, setLoading] = useState(true); // 로딩 상태 관리
    const [error, setError] = useState(null); // 에러 상태 관리

    useEffect(() => {
        const fetchQrData = async () => {
            try {
                const accessToken = localStorage.getItem("access_token");
                if (!accessToken) {
                    console.error("토큰이 없습니다. 로그인하세요.");
                    return;
                }

                const response = await axios.get("https://lastlink.p-e.kr/members/info/", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log("QR 데이터 가져오기 성공:", response.data);
                setQrData(response.data); // QR 데이터를 상태에 저장
                setLoading(false); // 로딩 완료
            } catch (error) {
                console.error("QR 데이터 가져오기 실패:", error);
                setError("QR 데이터를 가져오는 데 실패했습니다.");
                setLoading(false); // 로딩 완료
            }
        };

        fetchQrData();
    }, []);

    if (loading) {
        return <div className="QR-Loading">로딩 중...</div>;
    }

    if (error) {
        return <div className="QR-Error">{error}</div>;
    }

    return (
        <div className="QR-Container">
            <div className="QR-Title" onClick={onclose}>
                LinkUnconnection
            </div>
            <div className="QR-Image">
                <img src={qrData.qr_img} alt="QR Code" />
            </div>
            <div className="URL">
                <p className="URLcontent">{qrData.qr_img_url}</p>
            </div>
            <button
                className="URL-CopyButton"
                onClick={() => {
                    navigator.clipboard.writeText(qrData.qr_img_url);
                    alert("URL이 복사되었습니다!");
                }}
            >
                URL 복사하기
            </button>
        </div>
    );
}

export default QR;