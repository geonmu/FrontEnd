import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

function SignUp() {

    /* 초기에 랜덤 성별 선택 */
    const {
        register,
        handleSubmit,
        trigger,
        setValue,
        getValues,
        formState: { errors, isValid },
    } = useForm({mode: 'onBlur'});

    const setInitialGender = () => {
        const genderOptions = ['man', 'woman'];
        const randomOption = genderOptions[Math.floor(Math.random() * genderOptions.length)];
        setValue('gender', randomOption); // 초기에 랜덤 성별을 설정
    };

    useEffect(() => {
        setInitialGender();
    }, []);

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


    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Container>
        <Form className='bookPaper' onSubmit={handleSubmit(onSubmit)}>
            <span className='fontText headText' style={{ fontSize: 24, alignItems: 'center' }}>회원가입</span>
            <Wrapper style={{ gridTemplateColumns: '5fr 3fr 2fr', columnGap: '5px' }}>
                <input
                    placeholder='이메일'
                    {...register('email', {
                    required: '이메일을 입력해주세요.',
                    minLength: {
                        value: 3,
                        message: '이메일은 최소 3글자 이상 입력해주세요.',
                    },
                    maxLength: {
                        value: 30,
                        message: '이메일은 최대 30글자까지 입력 가능합니다.',
                    },
                    pattern: {
                        value: /^[a-z0-9_.]+$/,
                        message: '영어 소문자, 숫자, _, . 으로만 구성된 이메일을 입력해주세요.',
                    },
                    })}
                />
                    <span style={{ display: 'flex', alignItems: 'center' }}>@kw.ac.kr</span>
                    <button>인증</button>
            </Wrapper>
            {errors.email && <span className='errorMessage'>{errors.email.message}</span>}

            <Wrapper>
                <input placeholder='인증번호' disabled></input>
            </Wrapper>
                
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
                    {...register('confirmPassword', {
                        required: '비밀번호를 다시 입력해주세요.',
                        validate: (value) =>
                            value === getValues('password') || '비밀번호가 일치하지 않습니다.',
                    })}
                />
            </Wrapper>
            {errors.confirmPassword && <span className='errorMessage'>{errors.confirmPassword.message}</span>}

            <Wrapper>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', columnGap: '5px' }}>
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
                        onChange={(e) => {
                            setValue('gender', e.target.value); // 성별 선택이 변경될 때마다 값을 업데이트
                        }}
                        {...register('gender', {
                            required: '성별을 선택해주세요.'
                        })}
                    >
                        <option value='man'>남자</option>
                        <option value='woman'>여자</option>
                        <option value='private'>비공개</option>
                    </select>
                </div>
            </Wrapper>
            {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
            {errors.gender && <span className='errorMessage'>{errors.gender.message}</span>}

            <Wrapper>
                <input
                    placeholder='생년월일 8자리'
                    {...register('birthday', {
                        required: '생년월일을 입력해주세요.',
                        validate: validateBirthday,
                    })}
                />
            </Wrapper>
            {errors.birthday && <span className='errorMessage'>{errors.birthday.message}</span>}

            <Wrapper style={{ marginTop: '25px' }}>
                <button className='primaryButton' type='submit' disabled={ !isValid }>회원가입</button>
            </Wrapper>
        </Form>
        </Container>
    );
}

export default SignUp;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Form = styled.form`
    width: 300px;
    margin: auto;
    padding: 20px;
`;

const Wrapper = styled.div`
    display: grid;
    margin-top: 10px;
    height: 40px;
`;