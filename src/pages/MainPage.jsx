import { useState } from "react";
import styled from "styled-components";

function LoginPage() {

  return (
  <Background>
      <BookCover>
        <BookDot>
          <ContentBox>
            <LogoBox>
              <img src="/images/logo.png" alt="logo"/>
            </LogoBox>
            <LoginBox>
              asdf
            </LoginBox>
          </ContentBox>
        </BookDot>
      </BookCover>
    </Background>
  );
}

export default LoginPage;

const Background = styled.div`
    background-size: 30px 30px;
    background-image:
      linear-gradient(to right, #919191 1px, transparent 1px),
      linear-gradient(to bottom, #919191 1px, transparent 1px);
    background-color: #767676;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const BookCover = styled.div`
    background-color: #69a6c9;

    border-radius: 12px;
    border: 2px solid #374851;
    box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.3);

    width: 650px;
    height: 500px;
    margin: 100px auto;

    position: relative;
`;

const BookDot = styled.div`
    border: 3px dashed #b9d8e5;
    border-radius: 12px;

    top: 25px;
    bottom: 25px;
    left: 25px;
    right: 25px;
    
    position: absolute;
`;

const ContentBox = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid #6d6d6d;

  top: 5px;
  right: 3px;
  bottom: 3px;
  left: 3px;

  padding: 12px 9px 12px 9px;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 25% 75%;

  position: absolute;
  
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

`;

const LoginBox = styled.div`
  background-color: #ffffff;

  border-radius: 12px;
  border: 2px solid #b3b3b3;
  box-shadow: inset 0 0 0 6px hsl(0, 0%, 90%);

  padding: 25px 60px 25px 60px;
`;