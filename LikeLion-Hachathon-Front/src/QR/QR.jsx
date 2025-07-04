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
            
            <div className="URL">
                Url 주소나오게
            </div>
            <button className="URL-CopyButton">
                URL 복사하기
            </button>

        </div>
    )
}

export default QR;