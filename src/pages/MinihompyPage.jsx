import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import Profile from '../components/minihompy/Profile';
import Home from '../components/minihompy/Home';
import Diary from '../components/minihompy/Diary';
import Guestbook from '../components/minihompy/Guestbook';
import Book from '../components/layout/Book'

function MinihompyPage() {
    const SERVER = process.env.REACT_APP_SERVER;
    const [user, setUser] = useState({});
    const param = useParams();

    function userHome() {
        axios.get(`${SERVER}/api/users/myhome/${param.userId}`).then((res) => {
          setUser(res.data.data);
        })
    }

    const [content, setContent] = useState("home");

    const handleClickButton = e => {
        const { name } = e.target;
        setContent(name);
    };

    const selectComponent = {
        home: <Home />,
        diary: <Diary />,
        guestbook: <Guestbook />,
    };

    useEffect(() => {
        userHome();
    }, []);

    return (
    <MinihompyPageLayout>
        <Background> 
        <Book width='1000px' height='600px' margin='auto' display='grid' gridTemplateColumns='3fr 7fr'>
            {/* 프로필 영역 */}
            <section className='bookPaper' style={{ display: 'grid', gridTemplateRows: '1fr 12fr', gridGap: '3px', padding: '12px 9px' }}>
                <div className='fontText headText'>
                    TODAY&nbsp;<span style={{ color: 'var(--dark-red)' }}>{user?.today}</span>&nbsp;| TOTAL {user?.total}
                </div>
                <Profile user={user}/>
            </section>
            {/* 컨텐츠 영역 */}
            <section className='bookPaper' style={{ backgroundColor: 'var(--light-gray)', display: 'grid', gridTemplateRows: '1fr 12fr', gridGap: '3px', padding: '12px 9px' }}>
                <ContentsHead>
                    <span className='fontText headText' style={{ color: 'var(--dark-blue)', fontSize: 24, justifyContent: 'left' }}>{user?.name}'s Minihompy</span>
                    <span className='fontText headText' style={{ justifyContent: 'right' }}>kwangwoon.world/minihompy/{user?.userId}</span>
                </ContentsHead>
                <ContentsBox>
                    <div style={{ margin: '17px auto' }}>
                        {content && <div>{selectComponent[content]}</div>}
                    </div>
                    <Menu className='fontText'>
                        <MenuButton
                            className={content === 'home' ? 'active' : ''}
                            onClick={handleClickButton} name='home'>
                            홈
                        </MenuButton>
                        <MenuButton
                            className={content === 'diary' ? 'active' : ''}
                            onClick={handleClickButton} name='diary'>
                            다이어리
                        </MenuButton>
                        <MenuButton
                            className={content === 'guestbook' ? 'active' : ''}
                            onClick={handleClickButton} name='guestbook'>
                            방명록
                        </MenuButton>
                    </Menu>
                </ContentsBox>
            </section>
        </Book>
        <div className="cincopa_responsive_wrapper" style={{ position: "relative" }}>
          <iframe
            style={{ boxShadow: '3px 3px 3px rgb(0, 0, 0, 0.3)',  margin: '80px 40px' }}
            height='130px'
            width='220px'
            src="https://rt.cincopa.com/iframe.aspx?fid=AEFAQ6-DR_-Q"
            scrolling="no"
            allow="autoplay *"
          />
        </div>
        </Background>
    </MinihompyPageLayout>
    );
}

export default MinihompyPage;

const MinihompyPageLayout = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-content: center;

    background-size: 30px 30px;
    background-image:
      linear-gradient(to right, var(--gray) 1px, transparent 1px),
      linear-gradient(to bottom, var(--gray) 1px, transparent 1px);
    background-color: var(--dark-gray);
`;

const ContentsHead = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;

    padding: 0px 10px;
`;

const ContentsBox = styled.div`
    background-color: white;

    border-radius: 12px;
    border: 2px solid var(--dark-gray);
    box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.2);

    display: grid;
    grid-template-columns: 100% 13%;

    row-gap: 3%;
`;

const Menu = styled.div`
    padding: 50px 0px 50px 0px;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 4fr;
    row-gap: 5px;
`;

const MenuButton = styled.button`
    font-size: 1rem;

    color: var(--light-sky-blue);
    background-color: var(--blue);
    border: 3px solid var(--dark-blue);
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.2);
    cursor: pointer;

    &.active {
        border-left: none;
        color: var(--light-black);
        background-color: white;
        border-color: var(--dark-gray);
    }
`;