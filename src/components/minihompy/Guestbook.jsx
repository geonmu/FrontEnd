import styled from "styled-components";
import BookWrite from "./BookWrite";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from '../../shared/Alert';
import ProfileImage from '../../images/profile_image.png'

function GuestBook() {
  const SERVER = process.env.REACT_APP_SERVER;
  const param = useParams();
  const [myeng, setMyeng] = useState();

  //방명록 가져오기
  function getBook() {
    axios
      .get(`${SERVER}/api/guestbooks/${param.userId}`)
      .then((res) => {
        setMyeng(res.data.data);
      })
      .catch((e) => {
        Alert({
          html: `${e.response.data.errorMessage}`,
        });
      });
  }

  //방명록 삭제하기
  async function deleteBook(id) {
    await axios
      .delete(`${SERVER}/api/guestbooks/${id}/${param.userId}`, { withCredentials: true })
      .then((res) => {
        Alert({
          html: `${res.data.msg}`,
        })
      })
      .catch((e) => {
        if(e.response.data.errorMessage !== undefined) {
          Alert({
            html: `${e.response.data.errorMessage}`,
          })
        }
        else {
          Alert({
            html: `${e.response.data.msg}`,
          })
        }
      });
    getBook();
  }

  useEffect(() => {
    getBook();
  }, []);

  return (
    <GuestBookLayout>
        <section style={{ borderBottom: '3px solid var(--light-gray)', display: 'grid', gridTemplateColumns: '7fr 1fr'  }}>
          <span className='fontText' style={{ fontSize: 24, color: 'var(--blue)' }}>Guestbook</span>
        </section>
      <section className='scrollBar'>
        <BookWrite getBook={getBook} />
        {myeng?.map((item) => {
          return (
            <BookBox key={item.guestBookId}>
              <BookTitle className="fontText">
                  <span>
                    NO. {item.guestBookNum}
                  </span>
                    <text
                    style={{ color: 'var(--blue)', cursor: 'pointer' }}
                      onClick={() => {
                        window.location.replace(
                          `/minihompy/${item.writerId}`
                        );
                      }}>
                        {item.name}
                      </text>
                  <span style={{ color: 'var(--light-black)' }}>({item.createdAt})</span>
                  <button
                    onClick={() => {
                      deleteBook(item.guestBookId);
                    }}
                  >
                    🗑️
                  </button>
              </BookTitle>
              <UserBook>
                <img className='profileImage' src={item.bookImage} alt='방명록 사진' style={{ width: '120px' }}/>
                <Context className='bodyText'>
                    <span>
                    {item.guestBook}
                    </span>
                </Context>
              </UserBook>
            </BookBox>
          );
        })}
      </section>
    </GuestBookLayout>
  );
}

export default GuestBook;

//흰색박스
const GuestBookLayout = styled.div`
  width: 500px;
  display: grid;
  grid-template-rows: 30px 390px;
  row-gap: 5px;
  
  font-size: 0.9rem;

  button {
    font-size: 0.8rem;
  }

`;

//컨텐츠 들어갈 박스

//방명록 담는 박스
const BookBox = styled.div`
  width: 500px;
  height: 160px;
  /* background-color: aqua; */
`;

//방명록 타이틀
const BookTitle = styled.div`
  background-color: var(--light-gray);
  border-top: 1px solid var(--dark-gray);
  height: 30px;
  justify-content: space-between;

  display: grid;
  grid-template-columns: 1fr 2fr 4fr 1fr;
  column-gap: 10px;

  align-items: center;
  place-items: center;

  button {
    width: max-content;
  }
`;

//유저 박스
const UserBook = styled.div`
  margin: 15px 0px 0px 10px;
  display: flex;
`;


//유저 방명록칸
const Context = styled.div`
  width: 340px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;