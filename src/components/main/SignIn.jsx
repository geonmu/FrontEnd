import { useForm } from "react-hook-form";
import styled from 'styled-components';

function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({mode: 'onSubmit'});

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <SignInLayout onSubmit={handleSubmit(onSubmit)}>
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