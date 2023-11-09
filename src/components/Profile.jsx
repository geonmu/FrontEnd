import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function surfingClick() {
    alert('pado');
}

function Profile() {
    return(
        <>
            <div>
                <ProfileImage src='http://res.heraldm.com/content/image/2021/07/16/20210716000671_0.jpg'/>
            </div>
            <div>
                <DottedLine />
                <TodayIs>
                    <span className='layoutText' style={{ color: '#387291' }}>TODAY IS...</span>&nbsp;&nbsp;졸림
                </TodayIs>
            </div>
            <div>
                <BodyText>인트로 최대 4줄<br/>ㅎㅇ<br/>테스트g<br/>test</BodyText>
            </div>
            <div>
                <History className='layoutText'>
                        <span style={{ color: '#468baf' }}>▶</span>History
                </History>
                <BodyText>
                    <span style={{ color: '#595959' }}>이건무</span>
                    <span style={{ color: '#aaaaaa', fontSize: 14 }}> 2004.03.09</span><br/>
                    <span style={{ color: "#ee8f4f" }}> 2leegm@naver.com</span>
                </BodyText>
            </div>
            <div>
                <Surfing onClick={surfingClick}>파도타기</Surfing>
            </div>
        </>
    );
}

export default Profile;

const TodayIs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px 0px 0px 0px;

    height: 75%;
    font-size: 1rem;
    background-color: #ffffff;
    border-radius: 8px;
    border: 2px solid #d0d0ce;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
`;

const BodyText = styled.div`
    margin: 10px 0px 0px 0px;
    line-height: 1.15;
`;

const History = styled.div`
    height: 20%;
    border-bottom: 2px solid #dddddd;
    font-size: 0.8rem;
    font-weight: 600;
    color: #1ea7cc;
`;

const Surfing = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1rem;
    background-color: #ffffff;
    border-radius: 4px;
    border: 1px solid #d0d0ce;
    box-shadow: 2px 2px rgb(0, 0, 0, 0.3);
    cursor: pointer;
`;

const DottedLine = styled.div`
    border: none;
    border-top: 2px dotted #afafaf;
    height: 1px;
`;