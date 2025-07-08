import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
    });

    // 모든 입력 필드가 채워졌는지 확인
    const isFormValid = formData.email && formData.password && formData.confirmPassword && formData.name;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const response = await fetch("https://lastlink.p-e.kr/members/signup/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    name: formData.name,
             }),
            });

        if (!response.ok) {
            const errorData = await response.json();
            // 실패 응답 처리
            const message = errorData.message || "회원가입에 실패했습니다.";
            alert(`에러: ${message}`);
            return;
        }

        const data = await response.json();

        // 성공 응답 처리
        console.log("회원가입 성공:", data);

        alert(`회원가입이 완료되었습니다. 환영합니다, ${data.user.name}님!`);
        
        // 예: 토큰 저장
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);

        // 메인 페이지 또는 로그인 페이지로 이동
        navigate("/login");

    } catch (error) {
        console.error("회원가입 중 오류 발생:", error);
        alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
};

    }

   

    return (
        <div className="signUpBox">
            <div className="teduri">
                <h1 className="signUpTitle">회원가입</h1>

                <div className="SignUp-Input-container">
                    <div className="SignUp-Input-Title">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="이메일을 입력하세요."
                        className="inputbox"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="SignUp-Input-Title">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="비밀번호를 입력하세요."
                        className="inputbox"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="SignUp-Input-Title">
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="비밀번호를 다시 입력하세요."
                        className="inputbox"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="SignUp-Input-Title">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="이름을 입력하세요."
                        className="inputbox"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </div>
                </div>

                <button
                    className="SignUp-SignUpB"
                    type="submit"
                    onClick={() => navigate(-1)}
                    disabled={!isFormValid} // 모든 입력 필드가 채워지지 않으면 버튼 비활성화
                >
                    회원가입 하기
                </button>

                <p
                    className="BackToLogin"
                    onClick={() => navigate(-1)}
                >
                    이미 계정이 있으신가요? 로그인 하러가기
                </p>
            </div>
        </div>
    );
}

export default SignUp;