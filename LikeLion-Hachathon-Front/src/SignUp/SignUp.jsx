import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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