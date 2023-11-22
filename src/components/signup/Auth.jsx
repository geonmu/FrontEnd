import { useForm } from "react-hook-form";
import styled from "styled-components";

function Auth() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({mode: 'onSubmit'});

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <AuthLayout className='bookPaper' onSubmit={handleSubmit(onSubmit)}>
            <span className='headText' style={{ fontSize: 24, fontWeight: 'bold', alignItems: 'center', marginBottom: '30px' }}>회원가입</span>
            <Wrapper style={{ alignItems: 'center', justifyContent: 'center' }}>
                <span className='bodyText'>입력하신 이메일로 인증번호를 보냈습니다.</span>
            </Wrapper>

            <Wrapper style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', columnGap: '5px' }}>
                <input
                    placeholder='인증번호'
                    {...register('authNumber', {
                    required: '인증번호를 입력해주세요.',
                    })}
                />
                <button>인증</button>
            </Wrapper>
            {errors.authNumber && <span className='errorMessage'>{errors.authNumber.message}</span>}
            
            <Wrapper style={{ marginTop: '25px' }}>
                <button className='primaryButton' type='submit'>회원가입</button>
            </Wrapper>
        </AuthLayout>
    );
}

export default Auth;

const AuthLayout = styled.form`
    width: 300px;
    padding: 20px;
    margin: auto;
    flex: none;
`;

const Wrapper = styled.div`
    display: grid;
    margin-top: 10px;
    height: 40px;
`;