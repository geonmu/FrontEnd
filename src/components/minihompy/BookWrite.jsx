import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Alert } from '../../shared/Alert';
import axios from "axios";
import { useEffect, useState } from "react";
import ProfileImage from '../../images/profile_image.png'

function BookWrite({ getBook }) {
  const { register, handleSubmit, watch, reset } = useForm();
  const SERVER = process.env.REACT_APP_SERVER;
  const param = useParams();
  const num = Math.ceil(Math.random() * 5) + "";
  const [bookImage, setBookImage] = useState();

  async function bookGo() {
    const guestbook = watch("guestbook");
    const data = { guestbook, bookImage };
    await axios
      .post(`${SERVER}/api/guestbooks/${param.userId}`, data, { withCredentials: true })
      .then((res) => {
        Alert({
          html: `${res.data.msg}`,
        });
      })
      .catch((e) => {
        console.log(e);
        Alert({
          html: `${e.response.data.errorMessage}`,
        });
      });
    getBook();
    reset();
  }

  //사진 랜덤
  const random = () => {
    setBookImage(
        `https://hyunjin9603-bucket.s3.ap-northeast-2.amazonaws.com/${num}.png`
    );
  };
  useEffect(() => {
    random();
  }, []);

  return (
    <BookWriteLayout onSubmit={handleSubmit(bookGo)}>
      <BooksBase>
        <UserBook>
        <img className='profileImage' src={bookImage} alt='방명록 사진' style={{ width: '120px',  backgroundColor: 'white' }}/>
          <UserWrite
            maxLength="80"
            required
            {...register("guestbook")}
          />
        </UserBook>
      </BooksBase>
      <ButtonBox>
        <button>작성</button>
      </ButtonBox>
    </BookWriteLayout>
  );
}

export default BookWrite;

//방명록 작성 박스
const BookWriteLayout = styled.form`
  width: 500px;
  height: 160px;
`;

//방명록 작성 백그라운드
const BooksBase = styled.div`
  background-color: var(--light-gray);
  border-top: 1px solid var(--dark-gray);
  height: 115px;
  display: flex;
  align-items: flex-end;
`;

//유저 박스
const UserBook = styled.div`
    margin: 0px auto;
    display: flex;
`;

//유저 방명록칸
const UserWrite = styled.textarea`
  width: 300px;
  margin-left: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: var(--light-gray);
  border-bottom: 1px solid var(--dark-gray);
  button {
    margin: 3px 10px 0px 0px;
    height: 20px;
  }
  height: 30px;
`;