import React from "react";
import "./LoginPage.css";

import { useNavigate } from "react-router-dom";

function LoginPage() { 
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/mainpage"); // 로그인 성공 시 메인 페이지로 이동
    }

    return(
        <div className="LoginPage-Page">
            <div className="LoginPage-Headline">
                lastLink
            </div>
            <div className="LoginPage-IdInsert">
                <input className="IdInsert"
                type="text"
                placeholder="아이디를 입력하세요."
                />
            </div>
            <div className="LoginPage-PasswordInsert">
                <input className="PasswordInsert"
                type="text"
                placeholder="비밀번호를 입력하세요."
                />
            </div>
            <div className="LoginPage-LoginButton">
                <button 
                className= "LoginButton"
                onClick={handleLogin} // 로그인 성공 시 메인 페이지로 이동
                >

                    로그인 하기 
                </button>

            </div>
            <div className="LoginPage-SignupButton">
                <button
                    type="button"
                    className="SignUpButton"
                    onClick={()=> navigate("/signup")}
                >
                    회원가입 하러가기
                </button>
            </div>
        </div>
    ) 
}

export default LoginPage;