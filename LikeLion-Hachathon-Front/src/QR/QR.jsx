import React from "react";
import "./QR.css";

function QR({onclose}) {
    return(
        <div className="QR-Container">
            <div className="QR-Title" onClick={onclose}>
                LinkUnconnection
            </div>
            <div className="QR-Image">
                <img src="LikeLion-Hachathon-Front/src/assets/QRTEST.png" alt="QR Code" />
            </div>
            
            <div className="URL">
                <p className="URLcontent">Url 주소나오게</p>
            </div>
            <button className="URL-CopyButton">
                URL 복사하기
            </button>

        </div>
    )
}

export default QR;