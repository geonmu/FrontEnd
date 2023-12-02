import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { setCookie, decodeCookie, removeCookie } from '../shared/Cookies';
import SignIn from '../components/main/SignIn'
import Welcome from '../components/main/Welcome'
import Book from '../components/layout/Book';
import Logo from '../images/logo.png';
import Background1 from '../images/background/background1.png';
import Background2 from '../images/background/background2.png';
import Background3 from '../images/background/background3.png';





/* 배경 이미지 미리 불러오기 */
let images = [];
let backgroundImages = [Background1, Background2, Background3];


function MainPage() {
  const SERVER = process.env.REACT_APP_SERVER;

  const [user, setUser] = useState();
  const decode = decodeCookie("accessToken");
  console.log(decode);

  function userHome() {
    if (Number(decode?.userId)) {
      axios.get(`${SERVER}/users/myhome/${decode.userId}`).then((res) => {
        console.log(res);
        setUser(res.data.data);
      });
    }
  }
  
  useEffect(() => {
    userHome();
  }, []);

  

  const backgroundPreload = () => {
    for(let i  = 0; i < backgroundImages.length; i++) {
      images[i] = new Image();
      images[i].src = backgroundImages[i];
    }
  };
  
  useLayoutEffect(() => {
    backgroundPreload();
  }, []);

  return (
    <MainPageLayout>
      <Background/>
      <MainBox>
        <section className='headText'>
          <img src={Logo} alt="logo"/>
        </section>
        <Book display='grid'>
          <div className='bookPaper' style={{ display: 'grid', gridTemplateRows: '1fr 6fr'}}>
            { 
              Number(user?.userId) ? 
              <>
              <span className='headText' style={{ fontSize: 24, fontWeight: 'bold' }}>{user?.name}님 반갑습니다!</span>
              <Welcome />
              </>
              :
              <>
              <span className='headText' style={{ fontSize: 24, fontWeight: 'bold' }}>로그인</span>
              <SignIn />
              </>
            } {/* 로그인 여부에 따른 컴포넌트 */}
          </div>
        </Book>
      </MainBox>
    </MainPageLayout>
  );
}

export default MainPage;

/* 배경 애니메이션 */
const animateBackground = keyframes`
  from {
      background-image: url(${Background1});
  }

  33% {
      background-image: url(${Background2});
  }

  67% {
      background-image: url(${Background3});
  }

  to {
      background-image: url(${Background1});
  }
`;

const MainPageLayout = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  display: flex;
  justify-content: center;
  align-content: center;
`;

/* 배경 */
const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-position: center center;
  animation: ${animateBackground} 20s ease-in-out infinite;
  background-size: cover;
  filter: brightness(0.8) blur(15px);
  transform: scale(1.1);
`;

const MainBox = styled.div`
  background-color: white;
  border-radius: 20px;

  width: 550px;
  height: 500px;
  margin: auto;

  padding: 40px 30px;

  box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.5);

  position: relative;

  flex: none;

  display: grid;
  grid-template-rows: 1fr 3fr;
`;