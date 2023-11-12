import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileImage from '../../images/profile_image.png'

function surfingClick() {
    alert('pado');
}

function Profile() {
    return(
        <ProfileBox>
            <div>
                <img className='profileImage' src={ProfileImage} style={{ width: '100%' }}/>
            </div>
            <div>
                <DottedLine />
                <TodayIs>
                    <span className='fontText' style={{ color: 'var(--dark-blue)' }}>TODAY IS...</span>&nbsp;&nbsp;최대여섯글자
                </TodayIs>
            </div>
            <div className='bodyText'>
                <span>인트로 최대 4줄ㅎㅇ<br/><br/>테스트g<br/>test</span>
            </div>
            <div>
                <History className='fontText'>
                    <span style={{ color: 'var(--dark-blue)' }}>▶</span>History
                </History>
                <div className='bodyText'>
                    <span>이건무</span>
                    <span style={{ color: 'var(--dark-gray)', fontSize: 14 }}> 2004.03.09</span><br/>
                    <span style={{ color: 'var(--orange)' }}> 소프트웨어학부 23학번</span>
                </div>
            </div>
            <div>
                <button style={{ width: '100%', height: '100%' }}>파도타기 🌊</button>
            </div>
        </ProfileBox>
    );
}

export default Profile;

const ProfileBox = styled.div`
    background-color: white;

    border-radius: 12px;
    border: 2px solid var(--dark-gray);
    box-shadow: inset 0 0 0 6px hsl(0, 0%, 90%);

    padding: 25px 30px 25px 30px;

    display: grid;
    grid-template-rows: 155px 50px 85px 65px 40px;
    row-gap: 4px;
`;

const TodayIs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 8px 0px;

    height: 65%;
    font-size: 1rem;
    background-color: white;
    border-radius: 6px;
    border: 2px solid var(--gray);
`;

const History = styled.div`
    height: 25%;
    border-bottom: 2px dotted var(--dark-gray);
    font-size: 0.8rem;
    font-weight: 600;
`;

const DottedLine = styled.div`
    border: none;
    border-top: 2px dotted var(--dark-gray);
    height: 1px;
`;