import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getCookie, decodeCookie } from "../../shared/Cookies";
import { useParams } from "react-router-dom";
import ProfileImage from '../../images/profile_image.png'
import { Alert } from "../../shared/Alert";

function Home() {
  const { register, handleSubmit, reset } = useForm();
  const SERVER = process.env.REACT_APP_SERVER;
  const param = useParams();

  //일촌평 받아오기
  const [chon, setChon] = useState();

  //쿠키설정
  //const accessToken = getCookie("accessToken");
  //const refreshToken = getCookie("refreshToken");


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
      })
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

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
      <HomeLayout>
        <section style={{ borderBottom: '3px solid var(--light-gray)' }}>
          <span className='fontText' style={{ fontSize: 24, color: 'var(--blue)' }}>Home</span>
        </section>
        <section>
          <img className='canvasImage' src={ProfileImage} alt='캔버스' style={{ width: '100%' }} />
        </section>
        
          <CommentForm onSubmit={handleSubmit(illChonWrite)}>
            <span>일촌평</span>
            <input
              placeholder="별명"
              maxLength='6'
              required
              {...register("nick")}
            />
            <input
              placeholder="일촌평을 남겨보세요~!"
              minLength='3'
              maxLength='15'
              required
              {...register("ilchonpyung")}
            />
            <button type="submit">작성</button>
          </CommentForm>
          <CommentList className='scrollBar'>
            {chon?.map((item) => {
              return (
                <Comment key={item.ilchonpyungId}>
                  <span>
                    ⦁ {item.ilchonpyung}&nbsp;
                    ({item.nick}&nbsp;
                      <text
                      style={{ fontWeight: '600', color: 'var(--blue)', cursor: 'pointer' }}
                        onClick={() => {
                          window.open(
                            `/minihompy/${item.writerId}`
                          );
                        }}>
                        {item.name}
                      </text>
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
  overflow-Y: scroll;
  width: 500px;
  height: 90px;
  margin: 0px auto;
`;


const Comment = styled.div` 
  display: grid;
  grid-template-columns: 9fr 1fr;
  margin: 0px 5px 5px;
`;