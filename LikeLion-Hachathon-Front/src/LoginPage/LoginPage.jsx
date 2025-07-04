import React from "react";
import "./LoginPage.css";
function LoginPage() { 
    return(
        <div className="LoginPage-Page">
            <div className="LoginPage-Headline">
                lastLink
            </div>
            <div className="LoginPage-IdInsert">
                <input
                type="text"
                placeholder="아이디를 입력하세요."
                />
            </div>
            <div className="LoginPage-PasswordInsert">
                <input
                type="text"
                placeholder="비밀번호를 입력하세요."
                />
            </div>
            <div className="LoginPage-LoginButton">
                <button>
                    로그인 하기 
                </button>

            </div>
            <div className="LoginPage-SignupButton">
                <button>
                    회원가입 하러가기
                </button>
            </div>
        </div>
    ) 
}

export default LoginPage;