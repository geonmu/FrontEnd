import { useState } from "react";
import styled from "styled-components";
import SignIn from '../components/main/SignIn'
import Welcome from '../components/main/Welcome'
import Book from '../components/layout/Book';
import BookPaper from '../components/layout/BookPaper';
import Logo from '../images/logo.png'

function MainPage(props) {
  const [content, setContent] = useState("SignIn"); // isLogin

  const handleClickButton = e => {
      const { name } = e.target;
      setContent(name);
  };

  const selectComponent = {
    signIn: <SignIn/>,
    welcome: <Welcome/>,
  };

  return (
    <>
      <Background/>
      <Grid>
        <div className='headText' style={{ justifyContent: 'center' }}><img src={Logo} alt="logo"/></div>
        <Book>
          <BookPaper backgroundColor='white' position='absolute' top='4px' right='2px' bottom='4px' left='2px' display='grid' gridTemplateRows='1fr 12fr'>
            <>{(false) ? <SignIn /> : <Welcome />}</> {/* 로그인 여부에 따른 컴포넌트 */}
          </BookPaper>
        </Book>
      </Grid>
    </>
  );
}

export default MainPage;

const Background = styled.div`
  
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-position: center center;
  animation: animateBackground 20s ease-in-out infinite;
  background-size: cover;
  filter: brightness(0.8) blur(15px);
  transform: scale(1.1);
`;


const Grid = styled.div`
  background-color: white;
  border-radius: 10px;

  width: 550px;
  height: 450px;
  margin: 150px auto;

  padding: 40px 30px;

  box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.5);

  position: relative;

  display: grid;
  grid-template-rows: 1fr 3fr;
`;