import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getCookie, decodeCookie } from "../../shared/Cookies";
import { useParams } from "react-router-dom";
import ProfileImage from '../../images/profile_image.png'

function Home() {
  const { register, handleSubmit, reset } = useForm();
  const SERVER = process.env.REACT_APP_SERVER;
  const decode = decodeCookie("accesstoken");
  const param = useParams();

  //일촌평 받아오기
  const [chon, setChon] = useState();

  //쿠키설정
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");

  console.log(accessToken, refreshToken);

  function illChonGet() {
    axios.get(`${SERVER}/api/bests/${param.userId}`).then((res) => {
      setChon(res.data.data);
    });
  }

  //일촌평 작성하기
  async function illChonWrite(data) {
    await axios
      .post(`${SERVER}/api/bests/${param.userId}`, data, {
        withCredentials: true
      });
    console.log('성공');
    illChonGet();
    reset();
  }

  //일촌평 삭제하기
  async function illChonDelete(e) {
    await axios
      .delete(`${SERVER}/api/bests/${e}/${param.userId}`, {
        withCredentials: true
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
    axios.get(`${SERVER}/api/bests/${param.userId}`).then((res) => {
      setChon(res.data.data);
    });
  }

  // 유저 정보 가져오기
  useEffect(() => {
    illChonGet();
  }, []);

  return (
      <HomeLayout>
        <section style={{ borderBottom: '3px solid var(--light-gray)' }}>
          <span className='fontText' style={{ fontSize: 24, color: 'var(--blue)' }}>My Canvas</span>
        </section>
        <section>
          <img className='canvasImage' src={ProfileImage} alt='캔버스' style={{ width: '100%' }} />
        </section>
        
          <CommentForm onSubmit={handleSubmit(illChonWrite)}>
            <span>한줄평</span>
            <input
              placeholder="별명"
              maxLength='6'
              required
              {...register("nick")}
            />
            <input
              placeholder="한줄평을 남겨보세요~!"
              maxLength='15'
              required
              {...register("ilchonpyung")}
            />
            <button type="submit">등록</button>
          </CommentForm>
          <CommentList>
            {chon?.map((item) => {
              return (
                <Comment key={item.ilchonpyungId}>
                  <span>
                    ⦁ {item.ilchonpyung}&nbsp;
                    ({item.nick}&nbsp;
                      <span style={{ fontWeight: '600', color: 'var(--blue)' }}>
                        {item.name}
                      </span>
                    )
                  </span>
                    <button onClick={() => illChonDelete(item.ilchonpyungId)}>
                      삭제
                    </button>
                </Comment>
              );
            })}
          </CommentList>
      </HomeLayout>
  );
}
export default Home;

const HomeLayout = styled.div`
  width: 500px;
  display: grid;
  grid-template-rows: 30px 250px 45px 85px;
  row-gap: 5px;

  button {
    font-size: 0.8rem;
  }
`;

/*일촌평 남기기*/
const CommentForm = styled.form`
  display: grid;
  padding: 0px 15px;
  grid-template-columns: 2fr 3fr 10fr 2fr;
  column-gap: 5px;
  align-items: center;

  height: 35px;
  background-color: var(--light-gray);
  border-radius: 5px;

  margin: 5px 0px 0px 0px;

  input {
    height: 25px;
  }
  span {
    font-weight: 700;
    color: var(--blue);
  }

  button {
    height: 20px;
  }
`;

/*일촌평 담는 박스*/
const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--light-black);
  font-size: 0.9rem;
  overflow: auto;
  width: 480px;
  height: 90px;
  margin: 0px auto;
`;


const Comment = styled.div` 
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  button {
    margin-right: 3px;
  }
`;