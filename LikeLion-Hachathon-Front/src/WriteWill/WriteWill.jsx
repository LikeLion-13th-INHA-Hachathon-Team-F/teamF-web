import React from 'react'
import './WriteWill.css'
import { useNavigate } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'
import { useState } from 'react';
import axios from 'axios'; 

const WriteWill = () => {
  const navigate = useNavigate();
  const [activeTip, setActiveTip] = useState(null); 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
   const handleMainPage = () => {
        navigate("/mainpage"); 
    }

   const toggleTip = (tipId) => {
      setActiveTip(activeTip === tipId ? null : tipId);
    };
  
   const handleWrite = async() => {
    try{
      const response = await axios.post('https://lastlink.p-e.kr/letters/', {title, content});
      if(response.status === 201) {
        alert('유서가 성공적으로 작성되었습니다.');
        console.log('유서 작성 성공',response.data);
        setTitle('');
        setContent('');
        navigate('/mainpage');
      }
    } catch(error) {
      console.error('유서 작성 실패', error);
      alert('유서 작성에 실패했습니다. 다시 시도해주세요.');
   }
  };

  return (
    <div>
      <div className="WriteWill-Top-bar">
        <div className="WriteWill-Logo"  onClick={handleMainPage}>lastLink</div>
      </div>
      <div className="WriteWill-Body">
        <div className="WriteWill-Write">
                <p className='WriteWill-p'>제목</p>
                <input 
                 type='text' 
                 className='WriteWill-Write-Contents'
                 value={title}
                 onChange={(e) => setTitle(e.target.value)} 
                 />
                <p className='WriteWill-p'>내용</p>
                <textarea 
                 className='WriteWill-Write-Textarea'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <br/>
                <div className="Buttons-Wrapper">
                <button className='WriteButton' onClick={handleWrite}>
                    작성하기
                </button>
                </div>
        </div>
        <div className='WriteWill-WritingTips'>
            <p className='WritingTipHead'>작성 도움말</p>
            <div className='WritingTip' onClick={() => toggleTip(1)}>
            <p className='TextTitle'>전산으로 확인하기 어려운 자산</p>
            {activeTip === 1 && (
              <div className='WritingTipDetail'>
                <p>부동산, 현금, 귀중품, 암호화폐 등 전자적으로 기록되지 않은 자산에 대해 언급해보세요.
                주의: 비 밀번호를 직접 적지 않도록 주의해주세요.</p>
                <div className='whiteBox'>
                <p className='ex'>예시</p>
                <p>”할아버지께서 물려주신 금시계가 서재 책상 뒤 작은 금고에 있어. 비밀번호는 우리 결혼기념일이야.”</p>
                </div>
              </div>
            )}
          </div>
           
            <div className='WritingTip' onClick={()=>toggleTip(2)}>
              <p className='TextTitle'>추억에 대한 이야기</p>
              {activeTip === 2 && (
                <div className='WritingTipDetail'>
                  <p>함께 보낸 특별한 순간들, 여행, 경험 등을 회상해보세요.</p>
                  <div className='whiteBox'>
                  <p className='ex'>예시</p>
                  <p>”네가 처음 걸음마를 뗐을 때, 온 가족이 얼마나 기뻐했는지 모를 거야. 그날밤
                    너를 안고 울면서 얼마나 행복해했는지...”</p>
                    </div>
                </div>
              )}

            </div>
            <div className='WritingTip' onClick={()=>toggleTip(3)}>
              <p className='TextTitle'>못했던 말들</p>
              {activeTip === 3 && (
                <div className='WritingTipDetail'>
                  <p>평소에 표현하지 못했던 감사, 사랑, 용서의 말을 전해보세요.</p>
                  <div className='whiteBox'>
                  <p className='ex'>예시</p>
                  <p>”항상 표현하지 못했지만, 네가 내 인생의 가장 큰 자랑이자 기쁨이란다. 넌 정말 훌륭한 딸이야.”</p>
                  </div>
                </div>

              )}

            </div>
            <div className='WritingTip' onClick={()=>toggleTip(4)}>
              <p className='TextTitle'>그 사람에 대한 생각</p>
              {activeTip === 4 && (
                <div className='WritingTipDetail'>
                  <p>상대방의 장점, 영향력, 당신의 삶에 미친 의미 등을 표현해보세요.</p>
                  <div className='whiteBox'>
                    <p className='ex'>예시</p>
                    <p>”네가 가진 긍정적인 에너지는 언제나 우리 가족을 밝게 만들어. 네 덕분에 우리 집에 웃음이 끊이지 않았어.”</p>
                  </div>
                </div>
              )}
              </div>
            <div className='WritingTip' onClick={()=>toggleTip(5)}>
              <p className='TextTitle'>미래에 대한 희망</p>
              {activeTip === 5 && (
                <div className='WritingTipDetail'>
                  <p>상대방의 미래에 대한 당신의 바람과 응원을 전해보세요.</p>
                  <div className='whiteBox'>
                  <p className='ex'>예시</p>
                  <p>”넌 항상 음악을 사랑했지. 네 재능을 믿어. 두려워하지 말고 네 꿈을 향해 달려가렴. 언제나 네 편이 되어줄게.”</p>
                  </div>
                </div>
              )}

            </div>
            <div className='WritingTip' onClick={()=>toggleTip(6)}>
              <p className='TextTitle'>가족 역사나 전통</p>
              {activeTip === 6 && (
                <div className='WritingTipDetail'>
                  <p>가족의 역사, 전통, 가치관 등을 공유해보세요.</p>
                  <div className='whiteBox'>
                  <p>예시</p>
                  <p>”우리 가족은 항상 서로를 지지하고 사랑하는 것이 가장 중요하다고 믿었어. 이 전통을 계속 이어가길 바란다.”</p>
                  </div>
                </div>
              )}

            </div>
            <div className='WritingTip' onClick={()=>toggleTip(7)}>
              <p className='TextTitle'>인생의 교훈</p>
              {activeTip === 7 && (
                <div className='WritingTipDetail'>
                  <p>당신이 배운 중요한 삶의 교훈이나 조언을 나눠보세요.</p>
                  <div className='whiteBox'>
                    <p className='ex'>예시</p>
                    <p>”돈이나 명예보다 중요한 건 사람이야. 진실된 관계를 쌓는 데 시간을 투자하렴. 그게 진정한 부자가 되는 길이야.”</p>
                  </div>
               </div>
              )}

            </div>
            <div className='WritingTip' onClick={()=>toggleTip(8)}>
              <p className='TextTitle'>마지막 부탁이나 당부</p>
              {activeTip === 8 && (
                <div className='WritingTipDetail'>
                  <p>상대방에게 남기고 싶은 마지막 부탁이나 당부의 말을 전해보세요.</p>
                  <div className='whiteBox'>
                  <p className='ex'>예시</p>
                  <p>”네가 힘들 때마다 이 편지를 읽어주길 바래. 그리고 네 옆에 항상 내가 있다는걸 기억해. 사랑한다, 내 아들아.”</p>
                  </div>
                </div>
              )}
              </div>
        </div>

      </div>

    </div>
  );
}

export default WriteWill;
