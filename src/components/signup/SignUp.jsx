import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';
import styled from 'styled-components';

function SignUp() {
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

    //아이디 중복 체크여부
    const [isCheck, setIsCheck] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    const SERVER = process.env.REACT_APP_SERVER;

    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors },
    } = useForm({mode: 'onBlur'});

    const validateBirthday = (value) => {
        const validDate = /^\d{8}$/;
        if (!validDate.test(value)) {
          return '생년월일은 8자리 숫자 형식으로 입력해주세요.';
        }
    
        const year = parseInt(value.substring(0, 4));
        const month = parseInt(value.substring(4, 6));
        const day = parseInt(value.substring(6, 8));
    
        const date = new Date(year, month - 1, day);
        const valid = date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
    
        if (!valid) {
          return '생년월일 형식이 올바르지 않습니다.';
        }
    
        return true;
    };

    //이메일 중복검사
    const ClickCheck = () => {
        const email = watch('email') + '@kw.ac.kr';
        if (email === '') {
            Swal.fire({
                html: '이메일을 입력해주세요.',
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
                width: 350
            });
        }
        else {
            axios
            .post(`${SERVER}/api/users/emailcheck`, { email: email })
            .then((res) => {
                if (res.status === 200) {
                    Swal.fire({
                        html: '사용 가능한 이메일입니다.<br>인증번호를 전송합니다.',
                        timer: 3000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        width: 350
                    });
                    setIsCheck(true);
                }
            })
            .catch((error) => {
                if (error.code === "ERR_BAD_REQUEST") {
                    Swal.fire({
                        html: '이미 사용 중인 이메일입니다.<br>다른 이메일로 시도해주세요.',
                        timer: 2000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        width: 350
                    });
                }
                else {
                    Swal.fire({
                        html: '오류가 발생했습니다.<br>잠시 후 다시 시도해주세요.',
                        timer: 2000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        width: 350
                    });
                }
                setIsCheck(false);
            });
        }
    };


    const ClickAuth = () => {
        const email = watch('email');
        const certificationNum = watch('certificationNum');
        console.log(email, certificationNum)

        if (isCheck === false) {
            Swal.fire({
                html: '이메일 중복 확인을 해주세요.',
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
                width: 350
            });
        }
        else {
            if (certificationNum === '') {
                Swal.fire({
                    html: '인증번호를 입력해주세요.',
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    width: 350
                });
            }
            else {
                axios
                .post(`${SERVER}/api/users/emailcheck/auth`, { email: email + '@kw.ac.kr', certificationNum: Number(certificationNum) })
                .then((res) => {
                    if (res.status === 200) {
                        Swal.fire({
                            html: '인증 되었습니다.',
                            timer: 3000,
                            showConfirmButton: false,
                            timerProgressBar: true,
                            width: 350
                        });
                        setIsAuth(true);
                    }
                })
                .catch((error) => {
                    if (error.code === "ERR_BAD_REQUEST") {
                        Swal.fire({
                            html: '인증번호가 올바르지 않습니다.',
                            timer: 2000,
                            showConfirmButton: false,
                            timerProgressBar: true,
                            width: 350
                        });
                    }
                    else {
                        Swal.fire({
                            html: '오류가 발생했습니다.<br>잠시 후 다시 시도해주세요.',
                            timer: 2000,
                            showConfirmButton: false,
                            timerProgressBar: true,
                            width: 350
                        });
                    }
                    setIsAuth(false);
                });
            }
        }
    };


    //회원가입 데이터 전송
    const ClickSignUp = (data) => {
        if (isCheck === false || isAuth === false) {
            Swal.fire({
                html: '이메일 인증을 해주세요.',
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
                width: 350
            });
        }
        else {
        const { email, certificationNum, ...submitData } = data;
        axios
        .post(`${SERVER}/api/users/signup`, { ...submitData, email: email + '@kw.ac.kr' })
        .then((res) => {
            if (res.status === 201) {
                Swal.fire({
                    html: '회원가입 완료!<br>잠시 후 창이 자동으로 닫힙니다.',
                    timer: 3000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    width: 350
                }).then(() => {
                    window.close();
                });
            }
        })
        .catch((error) => {
            if (error.code === "ERR_BAD_REQUEST") {
                Swal.fire({
                    html: '오류가 발생했습니다.<br>잠시 후 다시 시도해주세요.',
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    width: 350
                });
            }
        });
    }
    };

    return (
        <SignUpLayout className='bookPaper' onSubmit={handleSubmit(ClickSignUp)}>
            <span className='headText' style={{ fontSize: 24, fontWeight: 'bold', alignItems: 'center', marginBottom: '30px' }}>회원가입</span>
            <Wrapper style={{ display: 'grid', gridTemplateColumns: '4fr 3fr 3fr', columnGap: '5px' }}>
                <input
                    placeholder='이메일'
                    {...register('email', {
                    required: '이메일을 입력해주세요.',
                    onChange: () => {setIsCheck(false); setIsAuth(false);},
                    })}
                />
                <span style={{margin: '12px 2px 0px'}}>@kw.ac.kr</span>
                <button type='button' onClick={ClickCheck}>중복 확인</button>
            </Wrapper>
            {errors.email && <span className='errorMessage'>{errors.email.message}</span>}

            <Wrapper style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', columnGap: '5px' }}>
                <input
                    placeholder='인증번호'
                    {...register('certificationNum', {
                    required: '인증번호를 입력해주세요.',
                    })}
                />
                <button type='button' onClick={ClickAuth}>인증</button>
            </Wrapper>
            {errors.certificationNum && <span className='errorMessage'>{errors.certificationNum.message}</span>}

            <Wrapper>
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
            </Wrapper>
            {errors.password && <span className='errorMessage'>{errors.password.message}</span>}
            
            <Wrapper>
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
            {errors.confirm && <span className='errorMessage'>{errors.confirm.message}</span>}

            <Wrapper style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', columnGap: '5px' }}> 
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
            {errors.gender && <span className='errorMessage'>{errors.gender.message}</span>}

            <Wrapper>
                <input
                    placeholder='생년월일 8자리'
                    {...register('birth', {
                        required: '생년월일을 입력해주세요.',
                        validate: validateBirthday,
                    })}
                />
            </Wrapper>
            {errors.birth && <span className='errorMessage'>{errors.birth.message}</span>}

            {/*
            <Wrapper style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', columnGap: '5px' }}>
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

            */}
            <Wrapper style={{ marginTop: '25px' }}>
                <button className='primaryButton' type='submit'>회원가입</button>
            </Wrapper>
        </SignUpLayout>
    );
}

export default SignUp;

const SignUpLayout = styled.form`
    margin: auto;
    flex: none;
    width: 300px;
    padding: 20px;
`;

const Wrapper = styled.div`
    display: grid;
    margin-top: 10px;
    height: 40px;
`;