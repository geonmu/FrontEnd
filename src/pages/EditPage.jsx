import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import CanvasDraw from 'react-canvas-draw';
import styled from 'styled-components';
import { decodeCookie, removeCookie } from '../shared/Cookies';
import { Alert } from '../shared/Alert';

function EditPage() {   
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
            event.preventDefault();
            }
        };
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors },
    } = useForm({mode: 'onBlur'});
    
    const SERVER = process.env.REACT_APP_SERVER;
    const decode = decodeCookie("accessToken");

    const canvasRef = useRef(null);
    const [brushRadius, setBrushRadius] = useState(2);
    const [brushColor, setBrushColor] = useState('#000000');
    const [isEraser, setIsEraser] = useState(false);
    
    const handleColorChange = (event) => {
        setBrushColor(event.target.value);
        setIsEraser(false);
    };

    const handleSizeChange = (event) => {
        const value = (parseInt(event.target.value, 10));
        if (value >= 1) {
            setBrushRadius(value);
        }
        else {
            setBrushRadius('');
        }
    };

    function ClickSave() {

    }


    function ClickIntroSave(data) {
    axios
      .put(`${SERVER}/api/users/myhome/${decode.userId}`, data, { withCredentials: true })
      .then((res) => {
        Alert({
          html: `${res.data.msg}`,
        });
      })
    }

    function ClickTodayIsSave(data) {
        axios
          .put(`${SERVER}/api/users/myhome/today/${decode.userId}`, data, { withCredentials: true })
          .then((res) => {
            Alert({
              html: `${res.data.msg}`,
            });
          })
        }

    return (
      <>
      
      <EditPageLayout>

        <EditLayout className='bookPaper'>
            <span className='headText' style={{ fontSize: 24, fontWeight: 'bold', alignItems: 'center', marginBottom: '30px' }}>프로필 편집</span>


            <Wrapper style={{ gridTemplateColumns: '3fr 1fr'}}>
            <input
                placeholder="인트로"
                maxLength='30'
                {...register("intro")}
            />
                <button className='primaryButton' type='button' onClick={() => ClickIntroSave({ intro: getValues("intro") })}>인트로 저장</button>
            </Wrapper>

            <Wrapper style={{ gridTemplateColumns: '2fr 1fr'}}>
            <select
                defaultValue='행복😊'
                {...register('sixwords', {
                    required: 'Today Is... 값을 선택해주세요.'
                })}
            >
                <optgroup label='Today Is...'>
                    <option value='행복😊'>행복😊</option>
                    <option value='우울😞'>우울😞</option>
                    <option value='분노😡'>분노😡</option>
                    <option value='쏘쏘😕'>쏘쏘😕</option>
                </optgroup>
            </select>
            
                <button className='primaryButton' type='button' onClick={() => ClickTodayIsSave({ sixwords: getValues("sixwords") })}>Today Is 저장</button>
            </Wrapper>
            
            
            
            <label>캔버스</label>
            <div style={{ boxShadow: '0px 0px 10px rgb(0, 0, 0, 0.25)', marginBottom: '10px' }}>
                <CanvasDraw
                    ref={canvasRef}
                    brushColor={isEraser ? '#ffffff' : brushColor}
                    canvasWidth={500}
                    canvasHeight={250}
                    brushRadius={brushRadius}
                    lazyRadius={0}
                    hideGrid
                />
             </div>
            <Wrapper style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', columnGap: '5px' }}>
                <input type='color' value={brushColor} onChange={handleColorChange} style={{ width: '100%', height: '100%', padding: '2px 6px' }} />
                <input type='number' value={brushRadius} onChange={handleSizeChange} />
                <button type='button' onClick={() => setIsEraser(!isEraser)}>
                    {isEraser ? '그리기 ✏️' : '지우기 🧼'}
                </button>
                <button type='button' onClick={() => canvasRef.current.clear()}>초기화 🗑️</button>
            </Wrapper>

            {/*
            <label>개인정보 변경</label>
            <Wrapper style={{ gridTemplateColumns: '5fr 5fr 2fr' }}> 
                <input
                    placeholder='이름'
                    {...register('name', {
                        required: '이름을 입력해주세요.',
                        maxLength: {
                            value: 8,
                            message: '이름은 최대 8글자까지 입력 가능합니다.',
                        },
                    })}
                />

                <input
                    placeholder='생년월일 8자리'
                    {...register('birth', {
                        required: '생년월일을 입력해주세요.',
                        validate: validateBirthday,
                    })}
                />
                
                <select
                    defaultValue='남자'
                    {...register('gender', {
                        required: '성별을 선택해주세요.'
                    })}
                >
                    <optgroup label='성별'>
                        <option value='남자'>남자</option>
                        <option value='여자'>여자</option>
                    </optgroup>
                </select>
            </Wrapper>
            {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
            {errors.birth && <span className='errorMessage'>{errors.birth.message}</span>}
            {errors.gender && <span className='errorMessage'>{errors.gender.message}</span>}
            */

            /* 
            <Wrapper style={{ gridTemplateColumns: '3fr 1fr', marginTop: '10px' }}> 
            <select
                    defaultValue='소프트웨어학부'
                    {...register('department', {
                        required: '학과를 선택해주세요.'
                    })}
                >
                    <optgroup label='학과'/>
                    <optgroup label='전자정보공과대학'>
                        <option value='전자공학과'>전자공학과</option>
                        <option value='전자통신공학과'>전자통신공학과</option>
                        <option value='전자융합공학과'>전자융합공학과</option>
                        <option value='전자재료공학과'>전자재료공학과</option>
                        <option value='전기공학과'>전기공학과</option>
                        <option value='로봇학부'>로봇학부</option>
                        <option value='지능형로봇학과'>지능형로봇학과</option>
                    </optgroup>
                    <optgroup label='소프트웨어융합대학'>
                        <option value='소프트웨어학부'>소프트웨어학부</option>
                        <option value='컴퓨터정보공학부'>컴퓨터정보공학부</option>
                        <option value='정보융합학부'>정보융합학부</option>
                    </optgroup>
                    <optgroup label='공과대학'>
                        <option value='화학공학과'>화학공학과</option>
                        <option value='환경공학과'>환경공학과</option>
                        <option value='건축공학과'>건축공학과</option>
                        <option value='건축학과'>건축학과</option>
                    </optgroup>
                    <optgroup label='자연과학대학'>
                        <option value='수학과'>수학과</option>
                        <option value='화학과'>화학과</option>
                        <option value='전자바이오물리학과'>전자바이오물리학과</option>
                        <option value='스포츠융합과학과'>스포츠융합과학과</option>
                        <option value='정보컨텐츠학과'>정보컨텐츠학과</option>
                    </optgroup>
                    <optgroup label='경영대학'>
                        <option value='경영학부'>경영학부</option>
                        <option value='국제통상학부'>국제통상학부</option>
                    </optgroup>
                    <optgroup label='인문사회과학대학'>
                        <option value='국어국문학과'>국어국문학과</option>
                        <option value='영어산업학과'>영어산업학과</option>
                        <option value='미디어커뮤니케이션학부'>미디어커뮤니케이션학부</option>
                        <option value='산업심리학과'>산업심리학과</option>
                        <option value='동북아문화산업학부'>동북아문화산업학부</option>
                    </optgroup>
                    <optgroup label='정책법학대학'>
                        <option value='행정학과'>행정학과</option>
                        <option value='법학부'>법학부</option>
                        <option value='국제학부'>국제학부</option>
                        <option value='자산관리학과'>자산관리학과</option>
                    </optgroup>
                    <optgroup label='인제니움학부대학'>
                        <option value='인제니움학부대학'>인제니움학부대학</option>
                    </optgroup>
                </select>

                <select
                    defaultValue='23'
                    {...register('classof', {
                        required: '학번을 선택해주세요.'
                    })}
                >
                    <optgroup label='학번'>
                        <option value='23'>23</option>
                        <option value='22'>22</option>
                        <option value='21'>21</option>
                        <option value='20'>20</option>
                        <option value='19'>19</option>
                        <option value='18'>18</option>
                        <option value='17'>17</option>
                        <option value='16'>16</option>
                        <option value='화석'>화석</option>
                    </optgroup>
                </select>
            </Wrapper>
            {errors.department && <span className='errorMessage'>{errors.department.message}</span>}
            {errors.classof && <span className='errorMessage'>{errors.classof.message}</span>}
            
            <label>비밀번호 변경</label>
            <Wrapper style={{ gridTemplateColumns: '1fr 1fr' }}>
                <input
                    placeholder='비밀번호'
                    type="password"
                    {...register('password', {
                    required: '비밀번호를 입력해주세요.',
                    minLength: {
                        value: 8,
                        message: '비밀번호는 최소 8글자 이상 입력해주세요.',
                    },
                    maxLength: {
                        value: 20,
                        message: '비밀번호는 최대 20글자까지 입력 가능합니다.',
                    },
                    })}
                />

                <input
                    placeholder="비밀번호 확인"
                    type="password"
                    {...register('confirm', {
                        required: '비밀번호를 다시 입력해주세요.',
                        validate: (value) =>
                            value === getValues('password') || '비밀번호가 일치하지 않습니다.',
                    })}
                />
            </Wrapper>
            {errors.password && <span className='errorMessage'>{errors.password.message}</span>}
            {errors.confirm && <span className='errorMessage'>{errors.confirm.message}</span>}
             
            */}
            
            <Wrapper>
                <button className='primaryButton' type='button' onClick={() => ClickSave()}>캔버스 저장</button>
            </Wrapper>
            
        </EditLayout>
        </EditPageLayout>
        </>
    );
}

export default EditPage;

const EditPageLayout = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  display: flex;
  justify-content: center;
  align-content: center;
`;

const EditLayout = styled.form`
    width: 500px;
    padding: 20px;
    margin: auto;
    flex: none;

    & > label {
        margin-top: 20px;
        margin-bottom: 5px;
        display: block;
    }
`;

const Wrapper = styled.div`
    display: grid;
    column-gap: 5px;
    height: 40px;
    margin-top: 10px;
`;