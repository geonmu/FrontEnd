import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getCookie } from "../../shared/Cookies";
import { useParams } from "react-router-dom";
import ProfileImage from '../../images/profile_image.png'

function Home() {
  const { register, handleSubmit, reset } = useForm();
  const SERVER = process.env.REACT_APP_SERVER;
  const param = useParams();

  //일촌평 받아오기
  const [chon, setChon] = useState();

  //쿠키설정
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");

  //일촌평 작성하기
  async function illChonWrite(data) {
    await axios
      .post(`${SERVER}/bests/${param.userId}`, data, {
        headers: {
          accessToken,
          refreshToken,
        },
      })
      .then((res) => {
        console.log('success');
      })
      .catch((e) => {
        console.log('fail');
      });
    illChonGet();
    reset();
  }

  //일촌평 삭제하기
  async function illChonDelete(e) {
    await axios
      .delete(`${SERVER}/bests/${e}/${param.userId}`, {
        headers: {
          accessToken,
          refreshToken,
        },
      })
      .then((res) => {
        console.log('success');
      })
      .catch((e) => {
        console.log('fail');
      });
    illChonGet();
  }

  //일촌평 조회하기
  function illChonGet() {
    axios.get(`${SERVER}/bests/${param.userId}`).then((res) => {
      setChon(res.data.data);
    });
  }

  // 유저 정보 가져오기
  useEffect(() => {
    illChonGet();
  }, []);

  return (
      <HomeLayout>
        <section>
          <span className='fontText' style={{ fontSize: 24, color: 'var(--blue)' }}>My Canvas</span>
        </section>
        <section>
          <img className='canvasImage' src={ProfileImage} alt='캔버스' style={{ width: '100%' }} />
        </section>
        
          <Illchon as="form" onSubmit={handleSubmit(illChonWrite)}>
            <p>일촌평</p>
            <input
              type="text"
              placeholder="일촌과 나누고 싶은 이야기를 나눠보세요~!"
              style={{ width: 320 }}
              maxLength="30"
              required
              {...register("ilchonpyung")}
            />
            <button type="submit">등록</button>
          </Illchon>
          <IllChonBox>
            {chon?.map((item) => {
              return (
                <IllBox key={item.ilchonpyungId}>
                  <p>
                    · {item.ilchonpyung} ({item.nick} <span>{item.name}</span>)
                  </p>
                  <BooksButton>
                    <button onClick={() => illChonDelete(item.ilchonpyungId)}>
                      삭제
                    </button>
                  </BooksButton>
                </IllBox>
              );
            })}
          </IllChonBox>
      </HomeLayout>
  );
}
export default Home;

const HomeLayout = styled.form`
  display: grid;
  grid-template-rows: 25px 264px 0px;
  row-gap: 5px;
`;


/*제목 주소*/
const Title = styled.p`
  font-weight: 700;
  margin: 5px 0px 10px 0px;
  color: #1ea7cc;
`;

/*일촌평 남기기*/
const Illchon = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin: 10px 0px 10px 0px;
  background-color: var(--light-gray);
  input {
    height: 25px;
    margin: 0px 5px 0px 5px;
    border: 1px solid #dedddd;
    &:focus {
      outline: none;
    }
  }
  p {
    font-weight: 700;
    color: #1ea7cc;
  }
  button {
    background-color: #ffffff;
    border: 1px solid #dedddd;
    :hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  }
`;

/*일촌평 담는 박스*/
const IllChonBox = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--light-gray);
  overflow: auto;
  width: 100px;
  height: 100px;
  p {
    margin-bottom: 5px;
  }
  span {
    font-weight: 600;
    color: #1ea7cc;
  }
`;

//수정 삭제 버튼
const BooksButton = styled.div`
  margin-right: 20px;
  button {
    border: none;
    font-size: 0.8rem;
    cursor: pointer;
    background-color: white;
  }
`;

const IllBox = styled.div` 
  display: flex;
  justify-content: space-between;
`;