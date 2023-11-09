import { useState } from "react";
import styled from "styled-components";

function LoginPage({ children }) {

  return (
    <Backbase>
      {children}
      <SetBox>
        <img src="/images/logo.png" alt="로그인로고" className="logoimg" />
        <SignBox>
        </SignBox>
      </SetBox>
    </Backbase>
  );
}

export default LoginPage;

//백그라운드
const Backbase = styled.div`
  background-color: #f7f7f7;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

//로그인 회원가입 박스
const SignBox = styled.div`
  background-color: white;
  border-radius: 7px;
  border: 1px solid #6d6d6d;
  padding: 15px;
  width: 370px;
  min-width: 370px;
  height: 600px;
`;

//로그이미지와 로그인 박스 정렬
const SetBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 100px;
  margin: 80px 80px;
`;