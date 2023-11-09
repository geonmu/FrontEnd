import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile';
import Home from '../components/Home';
import Guestbook from '../components/Guestbook';

function MinihompyPage() {
    const [content, setContent] = useState("home");

    const handleClickButton = e => {
        const { name } = e.target;
        setContent(name);
    };

    const selectComponent = {
        home: <Home />,
        guestbook: <Guestbook />,
    };

    return (
    <Background>
        <BookCover>
            <BookDot>
                <ProfileBox>
                    <HeadText className='layoutText' style={{ justifyContent: 'center' }}>
                        <p>TODAY<span style={{ color: '#a96a6a' }}> 12</span> | TOTAL 34</p>
                    </HeadText>
                    <InnerProfileBox>
                        <Profile/>
                    </InnerProfileBox>
                </ProfileBox>
                <ContentBox>
                    <ContentHead className='layoutText'>
                        <HeadText style={{ justifyContent: 'left' }}>
                            <span style={{ color: '#4882a1', fontSize: 24 }}>광운월드</span>
                        </HeadText>
                        <HeadText style={{ justifyContent: 'right' }}>
                            <span style={{ fontSize: 14 }}>WELCOME TO KWWORLD!</span>
                        </HeadText>
                    </ContentHead>
                    <InnerContentBox>
                        <ContentArea>
                            {content && <div>{selectComponent[content]}</div>}
                        </ContentArea>
                        <MenuArea className='layoutText'>
                            <MenuButton
                                className={content === 'home' ? 'active' : ''}
                                onClick={handleClickButton} name='home'>
                                홈
                            </MenuButton>
                            <MenuButton
                                className={content === 'guestbook' ? 'active' : ''}
                                onClick={handleClickButton} name='guestbook'>
                                방명록
                            </MenuButton>
                        </MenuArea>
                    </InnerContentBox>
                </ContentBox>
            </BookDot>
        </BookCover>
    </Background>
    );
}

export default MinihompyPage;

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

    width: 1000px;
    height: 600px;
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

    padding: 5px 3px 5px 3px;

    display: grid;
    grid-template-columns: 32% 68%;
    grid-template-rows: 100%;
`;

const ProfileBox = styled.div`
    background-color: #ffffff;

    border-radius: 12px;
    border: 1px solid #374851;

    padding: 12px 9px 12px 9px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 12fr;
    row-gap: 6px;
`;

const ContentBox = styled.div`
    background-color: #eeeeee;

    border-radius: 12px;
    border: 1px solid #374851;

    padding: 12px 9px 12px 9px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 12fr;
    row-gap: 6px;
`;

const ContentHead = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;

    padding: 0px 8px 0px 8px;
`;


const HeadText = styled.div`
    display: flex;
    align-items: flex-end;

    font-size: 1rem;
`;

const InnerProfileBox = styled.div`
    background-color: #ffffff;

    border-radius: 12px;
    border: 2px solid #b3b3b3;
    box-shadow: inset 0 0 0 6px hsl(0, 0%, 90%);

    padding: 25px 30px 25px 30px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3.5fr 1fr 2.25fr 2fr 0.75fr;
    row-gap: 3%;
`;

const InnerContentBox = styled.div`
    background-color: #ffffff;

    border-radius: 12px;
    border: 2px solid #b3b3b3;
    box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.2);

    display: grid;
    grid-template-columns: 100% 10%;
    grid-template-rows: 1fr;
    row-gap: 3%;
`;

const ContentArea = styled.div`
    padding: 25px 90px 25px 90px;
`

const MenuArea = styled.div`
    padding: 50px 0px 50px 0px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 6fr;
    row-gap: 3px;
`;

const MenuButton = styled.button`
    font-size: 0.7rem;

    color: #b9d8e5;
    background-color: #238db4;
    border: 3px solid #3f6c7c;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.2);
    cursor: pointer;

    &.active {
    color: #595959;
    border-color: #b3b3b3;
    background-color: #ffffff;
    }
`;