import React, { useLayoutEffect } from 'react';
import styled, { keyframes } from 'styled-components';
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
    <Container>
      <Background/>
      <MainBox>
        <div className='headText'><img src={Logo} alt="logo"/></div>
        <Book display='grid'>
          <div className='bookPaper' style={{ display: 'grid', gridTemplateRows: '1fr 6fr'}}>
            { (false) ? <Welcome /> : <SignIn /> } {/* 로그인 여부에 따른 컴포넌트 */}
          </div>
        </Book>
      </MainBox>
    </Container>
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

const Container = styled.div`
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

/* 구역 정의 */
const MainBox = styled.div`
  background-color: white;
  border-radius: 20px;

  width: 550px;
  height: 500px;
  margin: auto;

  padding: 40px 30px;

  box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.5);

  position: relative;

  display: grid;
  grid-template-rows: 1fr 3fr;
`;