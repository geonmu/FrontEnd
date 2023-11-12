import styled from 'styled-components';
import MainPage from '../../pages/MainPage';

function SignIn() {
    return (
        <>
            <span className='fontText headText' style={{ fontSize: 24, justifyContent: 'center' }}>로그인</span>
            <Form method='post' action=''>
                <input placeholder='이메일' style={{ gridColumnStart: 1, gridColumnEnd: 3 }}></input>
                <input placeholder='비밀번호' style={{ gridColumnStart: 1, gridColumnEnd: 3 }}></input>
                <button style={{ color: 'white', borderColor: 'var(--dark-blue)', backgroundColor: 'var(--blue)', gridColumnStart: 1, gridColumnEnd: 3 }}>로그인</button>
                <button>회원가입</button>
                <button>파도타기</button>
            </Form>
        </>
    );
}

export default SignIn;

const Form = styled.form`
    margin: 15px auto;
    display: grid;
    grid-template-columns: repeat(2, 120px);
    grid-template-rows: repeat(4, 40px);
    column-gap: 15px;
    row-gap: 10px
`;