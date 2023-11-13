import styled from 'styled-components';

function SignIn() {
    return (
        <>
            <span className='fontText headText' style={{ fontSize: 24, justifyContent: 'center' }}>로그인</span>
            <Form method='post' action=''>
                <input placeholder='이메일' required ></input>
                <input placeholder='비밀번호' required ></input>
                <button type='submit' style={{ color: 'white', borderColor: 'var(--dark-blue)', backgroundColor: 'var(--blue)' }}>로그인</button>
                <button type='button' onClick={() => window.open('/signup', '_blank', 'toolbar=no resizable=no status=no menubar=no')}>회원가입</button>
            </Form>
            
        </>
    );
}

export default SignIn;

const Form = styled.form`
    margin: 15px auto;
    display: grid;
    grid-template-columns: 250px;
    grid-template-rows: repeat(4, 40px);
    column-gap: 15px;
    row-gap: 10px
`;