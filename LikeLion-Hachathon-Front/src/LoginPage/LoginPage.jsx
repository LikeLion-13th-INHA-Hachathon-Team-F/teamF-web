import React from "react";
import "./LoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function LoginPage() { 
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://lastlink.p-e.kr/members/login/", {
                login_id: id,
                password: password,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            // 성공 응답 처리
            const data = response.data;
            console.log("로그인 성공:", data);

            // 토큰 저장
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token);


            // const summaryRes = await axios.get("https://lastlink.p-e.kr/members/summary/", {
            //     headers: {
            //         Authorization: `Bearer ${data.access_token}`,
            //     }
            // });
         

            // const userpk = summaryRes.data.id;
            // // 페이지 이동
            //console.log("유저 pk:", userpk);

            navigate(`/usermainpage/${data.user.id}`); // 로그인 성공 시 유저 메인 페이지로 이동


        } catch (error) {
            console.error("로그인 중 오류 발생:", error);
            alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
        }


    }

    return(
        <div className="LoginFullPage">
        <div className="LoginPage-Page">
            <div className="LoginPage-Headline">
                lastLink
            </div>
            <div className="LoginPage-IdInsert">
                <input className="IdInsert"
                value={id} 
                type="text"
                placeholder="아이디를 입력하세요."
                onChange={(e) => setId(e.target.value)} // 아이디 입력 시 상태 업데이트
                />
            </div>
            <div className="LoginPage-PasswordInsert">
                <input className="PasswordInsert"
                value={password}
                type="password"
                placeholder="비밀번호를 입력하세요."
                onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 시 상태 업데이트
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
        </div>
    ) 
}

export default LoginPage;