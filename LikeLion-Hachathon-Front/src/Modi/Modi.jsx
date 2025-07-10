import './Modi.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Modi() {
    const { id } = useParams(); // URL에서 유서 ID를 가져옴
    const navigate = useNavigate();
    const [letterData, setLetterData] = useState({ title: '', content: '' });
    const [memberId, setMemberId] = useState(null); // member_id 상태 관리

    const handleMainPage = () => {
        if (memberId) {
            navigate(`/usermainpage/${memberId}`); // 멤버 ID를 포함하여 메인 페이지로 이동
        } else {
            console.error("멤버 ID를 가져올 수 없습니다.");
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setLetterData((prev) => ({ ...prev, [name]: value }));
    };

    const handlesave = async () => {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
            alert("로그인이 필요합니다. 로그인 후 다시 시도해주세요.");
            return;
        }
        try {
            const response = await axios.patch(`https://lastlink.p-e.kr/letters/${id}/`, {
                title: letterData.title,
                content: letterData.content
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.status === 200) {
                alert('유서가 성공적으로 수정되었습니다.');
                console.log('유서 수정 성공', response.data);
                navigate(`/gowill/${memberId}`); // 수정 후 유서 페이지로 이동
            }
        } catch (error) {
            console.error('유서 수정 실패', error);
            alert('유서 수정에 실패했습니다. 다시 시도해주세요.');
        }
    };

    const handleDelete = async () => {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
            alert("로그인이 필요합니다. 로그인 후 다시 시도해주세요.");
            return;
        }
        try {
            const response = await axios.delete(`https://lastlink.p-e.kr/letters/${id}/`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if (response.status === 200) {
                alert('유서가 성공적으로 삭제되었습니다.');
                console.log('유서 삭제 성공', response.data);
                navigate(`/gowill/${memberId}`); // 유서 삭제 후 메인 페이지로 이동
            }
        } catch (error) {
            console.error('유서 삭제 실패', error);
            alert('유서 삭제에 실패했습니다. 다시 시도해주세요.');
        }
    };

    useEffect(() => {
        const fetchLetterData = async () => {
            const accessToken = localStorage.getItem("access_token");
            if (!accessToken) {
                console.error("토큰이 없습니다. 로그인하세요.");
                return;
            }
            try {
                const response = await axios.get(`https://lastlink.p-e.kr/letters/detail/${id}/`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log("유서 데이터 가져오기 성공:", response.data);
                setLetterData({ title: response.data.title, content: response.data.content });
                setMemberId(response.data.member_id); // member_id를 상태에 저장
            } catch (error) {
                console.error("유서 데이터 가져오기 실패:", error);
            }
        };

        fetchLetterData();
    }, [id]);

    return (
        <div>
            <div className="WriteWill-Top-bar">
                <div className="WriteWill-Logo" onClick={handleMainPage}>lastLink</div>
            </div>
            <div className="WriteWill-Body">
                <div className="WriteWill-Write">
                    <div className='WriteWill-Write-Title'>
                        <p className='WriteWill-p'>제목</p>
                        <input
                            type='text'
                            className='WriteWill-Write-Contents'
                            value={letterData.title}
                            onChange={handleChange}
                            name="title"
                        />
                        <p className='WriteWill-p'>내용</p>
                        <textarea
                            className='WriteWill-Write-Textarea'
                            value={letterData.content}
                            onChange={handleChange}
                            name="content"
                        />
                        <br />
                        <div className="Buttons-Wrapper">
                            <button className='DeleteButton' onClick={handleDelete}>
                                유서 삭제하기
                            </button>
                            <button className='WriteButton' onClick={handlesave}>
                                수정하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modi;