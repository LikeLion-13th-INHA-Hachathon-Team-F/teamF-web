import React from "react";
import { useNavigate } from "react-router-dom";
import "./RIPView.css";


function RIPView() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="AddRIP-Top-bar">
                    <div className='backButton' onClick={() => navigate(-1)}>←</div>
                    <div className="AddRIP-Logo"  >lastLink</div>
            </div>

            <div className="RIPView-Body">
            <div className="RIPP-Title">
                <div className="title">글 01</div>
                <div className="name">작성자 이름</div>
                
                </div>
                <div className="RIP">
            
                    <p>내용</p>
    
                </div>

            </div>


            

        </div>

        
    );
}

export default RIPView;