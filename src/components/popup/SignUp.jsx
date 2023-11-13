import styled from 'styled-components';
import { useForm } from "react-hook-form";
import Book from '../layout/Book';

function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

    return (
<>

        <div style={{ width: '500px', height: '750px', display: 'grid' }}>
            <Book style={{ display: 'grid' }}>
                <div className='bookPaper'>
                <span className='fontText headText' style={{ fontSize: 24, justifyContent: 'center' }}>회원가입</span>
                <Form method='post' action=''>
                    <div style={{ display: 'grid', gridTemplateColumns: '7fr 3fr 2fr', columnGap: '5px'}}>
                        <input placeholder='이메일'></input>
                        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>@kw.ac.kr</span>
                        <button>인증</button>
                    </div>
                    <input placeholder='인증번호'></input>
                    <input placeholder='비밀번호'></input>
                    <input placeholder='비밀번호 확인'></input>
                    <input placeholder='이름'></input>
                    

                </Form>
                </div>
            </Book>
        </div>
        </>
    );
}

export default SignUp;

const Form = styled.form`
    margin: 15px auto;
    display: grid;
    grid-template-columns: 350px;
    grid-template-rows: repeat(6, 40px);
    row-gap: 10px;
`;

const Grid = styled.div`
    width: 450px;
    height: 750px;

    display: grid;
`;