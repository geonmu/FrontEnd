import axios from 'axios';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { setCookie } from '../../shared/Cookies';

function SignIn() {
    const SERVER = process.env.REACT_APP_SERVER;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({mode: 'onSubmit'});

    const ClickLogin = (data) => {
        axios
        .post(`${SERVER}/api/users/login`, data).then((res) => {
            // const userId = res.data.userId;
            const accessToken = res.data.accesstoken;
            const refreshToken = res.data.refreshtoken;
            setCookie("accessToken", accessToken);
            setCookie("refreshToken", refreshToken);
            if (res.statusText === "OK") {
                window.location.reload();
                // navigate(`/HomeP/${userId}`);
            }
        })
        .catch((error) => {
            if (error.code === "ERR_BAD_REQUEST") {
                console.log('error');
            }
        });
    }

    return (
        <SignInLayout onSubmit={handleSubmit(ClickLogin)}>
            <Wrapper>
                <input
                    placeholder='이메일'
                    {...register('email', {
                    required: '이메일을 입력해주세요.',
                    })}
                />
            </Wrapper>
            {errors.email && <span className='errorMessage'>{errors.email.message}</span>}
           
            <Wrapper>
                <input
                    placeholder='비밀번호'
                    type='password'
                    {...register('password', {
                    required: '비밀번호를 입력해주세요.',
                    })}
                />
            </Wrapper>
            {errors.password && <span className='errorMessage'>{errors.password.message}</span>}

            <Wrapper>
                <button className='primaryButton' type='submit'>로그인</button>
            </Wrapper>

            <Wrapper>
                <button type='button' onClick={() => window.open('/signup', '_blank', 'width=400px height=600px toolbar=no resizable=no status=no menubar=no')}>회원가입</button>
            </Wrapper>
        </SignInLayout>
    );
}

export default SignIn;

const SignInLayout = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 110px 20px;
`;

const Wrapper = styled.div`
    display: grid;
    margin-top: 10px;
    height: 40px;
`;