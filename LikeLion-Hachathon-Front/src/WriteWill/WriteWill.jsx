import React from 'react'
import './WriteWill.css'
import { useNavigate } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'
const WriteWill = () => {
  const navigate = useNavigate();

   const handleMainPage = () => {
        navigate("/mainpage"); // 유서 작성 페이지로 이동
    }
  return (
    <div>
      <div className="WriteWill-Top-bar">
        <div className="WriteWill-Logo"  onClick={handleMainPage}>lastLink</div>
      </div>
      <div className="WriteWill-Body">
        <div className="WriteWill-Write">
            <div className='WriteWill-Write-Title'>
                <p className='WriteWill-p'>제목</p>
                <input type='text' className='WriteWill-Write-Contents' />
                <p className='WriteWill-p'>내용</p>
                <textarea className='WriteWill-Write-Textarea'>

                </textarea>
                <br/>
                <div className="Buttons-Wrapper">
                <button className='WriteButton'>
                    작성하기
                </button>
                </div>
               
            </div>

        </div>
        <div className='WriteWill-WritingTips'>
            <p className='WritingTipHead'>작성 도움말</p>
            <p className='WritingTip'>전산으로 확인하기 어려운 자산</p>
            <div className='WritingTip'>
             <p>부동산, 현금, 귀중품, 암호화폐 등 전자적으로 기록되지 않은 자산에 대해 언급해보세요. <br/>주의: 비밀번호를 직접 적지 않도록 주의해주세요.</p>
             <p className='WritingTipDetail'>ex) ”할아버지께서 물려주신 금시계가 서재 책상 뒤 작은 금고에 있어. 비밀번호는 우리 결혼기념일이야.”</p>
            </div>
           
            <p className='WritingTip'>추억에 대한 이야기</p>
            <p className='WritingTip'>못했던 말들</p>
            <p className='WritingTip'>그 사람에 대한 생각</p>
            <p className='WritingTip'>미래에 대한 희망</p>
            <p className='WritingTip'>가족 역사나 전통</p>
            <p className='WritingTip'>인생의 교훈</p>
            <p className='WritingTip'>마지막 부탁이나 당부</p>
        </div>

      </div>

    </div>
  )
}

export default WriteWill
