import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import QR from "../QR/QR";
import axios from "axios";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import WriteWill from "../WriteWill/WriteWill";

function MainPage() {
    const navigate = useNavigate();
    const [isEmailMenuVisible, setEmailMenuVisible] = useState(false);
    const gowill = () => {
      navigate("/gowill");
    }


    const handleWriteWill = () => {
        navigate("/writewill"); // 유서 작성 페이지로 이동
    }

    const handlemodify = (letterId) => {
    navigate(`/modi/${letterId}`); // 유서 ID를 URL에 포함하여 수정 페이지로 이동
    };



    const toggleEmailMenu = () => {
        setEmailMenuVisible(!isEmailMenuVisible); // 토글 상태 변경
    };
    const [showQR, setShowQR] = useState(false);

    const handleLogout = () => {
        navigate("/"); // 로그아웃 시 로그인 페이지로 이동
    }


    const handlegologin = () => {
      navigate("/login"); // 로그인 페이지로 이동
  }

  const handlegosign = () => {
      navigate("/signup"); // 회원가입 페이지로 이동
  } 

    const [userData, setUserData] = useState(null);
    const [letterData, setLetterData] = useState(null);
    

    useEffect(() => {
    const handleScroll = () => {
      const topBar = document.querySelector(".Top-bar");
       if (!topBar) return;
      
      if (window.scrollY > 50) {
        topBar.classList.add("scrolled");
      } else {
        topBar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



    return(
        <div className="foolpage">
            <div className="Top-bar">
                <div className="Logo">lastLink</div>

                  {/* 메뉴 전체 감싸는 div에 onMouseLeave */}
                  {/*유서 작성과 작성한 글들 보임 */}
                  <div className="wrapandwill">
                  <div className="gologin" onClick={handlegologin}>로그인  </div>
                  <div className="gosign" onClick={handlegosign}>회원가입</div>
                  </div>
                </div>

    <motion.div 
    initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
            }}
    className="Body">

    <div className="mainheadline">
       <div className="mainheadlinecontent">lastLink,<br/> 잊히지 않는 마지막 연결</div>
       <div className="mainheadlinecontent1">유서를 남기고, 추억을 나누며, 마지막 인사를 함께할 수 있는 공간.<br />
      고인의 마음과 우리들의 기억이 하나로 연결되는 따뜻한 디지털 공간을 제공합니다.</div>
       <img src="/hihi.png" alt="기억을 잇는 이미지" className="mainheadline-image" />
    </div>


    <div className="secondheadline">
  <div className="secondheadlinecontent">
    <div className="writingbox1">
      <div className="box1headlink">"단절된 기억을 기술로 잇습니다."</div>
      <div className="box1content">
      유서를 남기고, 추억을 나누며, 마지막 인사를 함께할 수 있는 공간.<br />
      고인의 마음과 우리들의 기억이 하나로 연결되는 따뜻한 디지털 공간을 제공합니다.
      </div>
    </div>
    <img src="/GettyImages-jv11568067.jpg" alt="기억을 잇는 이미지" className="secondheadline-image" />
  </div>
  <div className="secondheadlinecontent2">
    <img src="/img.jpg" alt="기억을 잇는 이미지" className="secondheadline-image2" />
    <div className="writingbox2">
      <div className="box2headlink">"끝이 아닌 기억의 시작, 이곳에 머무릅니다."</div>
      <div className="box2content">
      마지막 인사와 추억, 그리고 사랑을 담는 디지털 공간.<br />
      고인의 유서와 함께, 기억은 오늘도 살아 있습니다.
  
      </div>
    </div>
  </div>
   </div>


   
    
</motion.div>


            <div className="footer">
                <div className="footer-content">
                    © 2025 LastLink. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default MainPage;