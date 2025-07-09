import React, { useState, useEffect }  from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import './RIPBoard.css'; // CSS 파일을 import


const RIPBoard = () => {
    const navigate = useNavigate();
    const [ripList, setRipList] = useState([]);

    const fetchRIPList = async () => {
        try {
            const response = await axios.get('https://lastlink.p-e.kr/remembrances/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            });
            setRipList(response.data); // 서버에서 가져온 데이터를 상태에 저장
        } catch (error) {
            console.error('데이터 가져오기 실패:', error);
            alert('데이터를 가져오는 데 실패했습니다. 다시 시도해주세요.');
        }
    };

    // 컴포넌트가 마운트될 때 데이터 가져오기
    useEffect(() => {
        fetchRIPList();
    }, []);


  const handleMemory = () => {
        navigate("/visitor/memoryroom"); // 로그인 성공 시 메인 페이지로 이동
    }
   const handleLastMessage = () => {
        navigate("/visitor/lastmessage"); 
    }
    const handleLogin = () => {
        navigate("/"); // 로그인 페이지로 이동
    }

    const handleAdd = () => {
        navigate("/visitor/addrip");
    }

    const handleView = (id) => {
        navigate(`/visitor/ripview/${id}`);
    }
   

  return (
    <div>
      <div className="Top-bar">
            <div className="Logo">lastLink</div>
            <div className='MakeLink' onClick={handleLogin}>나의 last link 만들기</div>
        </div>
        <div className='VisitorBody'>
            <div className='VisitorIndex'>
              <p onClick={handleMemory}>기억의 방</p>|
              <p style={{fontWeight: "bold"}}>추모 게시판</p>|
              <p onClick={handleLastMessage}>마지막 메시지</p>
            </div>


            <div className="addWrite">
              <div className='ClickAdd' onClick={handleAdd}>+글쓰러가기</div>
              </div>
              <div className="RIP-List">
                    {ripList.map((rip) => (
                        <div className="hanjool" key={rip.id}>
                            <div className="RIP-List-Item" onClick={() => handleView(rip.id)}>
                                {rip.title}
                            </div>
                            <div className="name">{rip.writer}</div>
                        </div>
                    ))}
                </div>
        </div>
      </div>
  )
}

export default RIPBoard

