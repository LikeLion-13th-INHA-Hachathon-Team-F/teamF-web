import React from "react";

function SignUp() {
    return(
        <div className="SignUpContainer">
            <div className="signUpBox">
                <h1 className="signUpTitle">회원가입</h1>

                <input type="email" id="email" name="email" placeholder="이메일을 입력하세요." className="Email" required />
                <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요." className="Password" required />
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="비밀번호를 다시 입력하세요." className="PasswordRE" required />
                <input type="text" id="name" name="name" placeholder="이름을 입력하세요." className="Name" required />
            

            </div>
        </div>
    )
}

export default SignUp;