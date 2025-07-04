import React from "react";
import "./QR.css";

function QR() {
    return(
        <div className="QR-Container">
            <div className="QR-Title">
                LinkUnconnection
            </div>
            <div className="QR-Image">
                <img src="LikeLion-Hachathon-Front/src/assets/QRTEST.png" alt="QR Code" />
            </div>
            
            <div className="QR-Description">
                QR 코드를 스캔하여 회원가입을 완료하세요.
            </div>

        </div>
    )
}

export default QR;