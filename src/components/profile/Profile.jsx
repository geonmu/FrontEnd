import { useForm } from "react-hook-form";
import styled from 'styled-components';

function SignUp() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({mode: 'onSubmit'});


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
        <EditProfileLayout className='bookPaper' onSubmit={handleSubmit(onSubmit)}>
            <span className='headText' style={{ fontSize: 24, fontWeight: 'bold', alignItems: 'center', marginBottom: '30px' }}>프로필 편집</span>

            <label>이메일</label>
            <Wrapper>
                <input value='asdf@kw.ac.kr' disabled></input>
            </Wrapper>

            <Wrapper>
                <input value='asdf@kw.ac.kr' disabled></input>
            </Wrapper>

            <Wrapper style={{ marginTop: '25px' }}>
                <button className='primaryButton'>변경사항 저장</button>
            </Wrapper>
        </EditProfileLayout>
    );
}

export default SignUp;

const EditProfileLayout = styled.form`
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