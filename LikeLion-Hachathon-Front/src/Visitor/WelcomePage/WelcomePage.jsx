import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './WelcomePage.css'

const WelcomePage = () => {
    const navigate = useNavigate();
    const { userpk } = useParams(); // URL에서 userpk를 가져옴
    const [username, setUsername] = useState(""); // 서버에서 가져온 회원 이름 상태


    const fetchUserName = async () => {
      try {
          if (!userpk) {
              console.error("사용자 pk가 없습니다.");
              return;
          }
          const response = await axios.get(`https://lastlink.p-e.kr/members/summary/${userpk}/`);
          console.log("API 응답 데이터:", response.data);
          setUsername(response.data.name); // 응답 데이터에서 이름 가져오기
      } catch (error) {
          console.error("회원 이름 가져오기 실패:", error);
          alert("회원 이름을 가져오는 데 실패했습니다. 다시 시도해주세요.");
      }
    };

      useEffect(() => {
        fetchUserName(); // 컴포넌트가 마운트될 때 API 호출
    }, []);

   const handleEnter = () => {
    if (!userpk) {
      alert("사용자 pk를 찾을 수 없습니다. 다시 로그인해주세요.");
      return;
    }
    navigate(`/visitor/memoryroom/${userpk}`);
  };



  return (
    <div className='WelcomePage'>
      <div className="Welcome-Top-bar">
            <div className="Welcome-Logo">lastLink</div>
        </div>
      <div className='WelcomePage-Headline'>
      <span style={{ fontWeight: "bold" , color: "#ddd" }}>故    { username || "故인물"}</span> 님의 삶과 추억을 기리는 공간에 함께해 주세요.
        </div>
      <button className="EnterButton" onClick={handleEnter} >
        입장하기
      </button>
    </div>
  )
}

export default WelcomePage
