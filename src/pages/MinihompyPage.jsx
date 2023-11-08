import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile'

function MinihompyPage() {
    const [content, setContent] = useState();

    const handleClickButton = e => {
        const { name } = e.target;
        setContent(name);
    };

    /*
    const selectComponent = {
        main: <Main />,
        diary: <Diary />,
        guestbook: <Guestbook />,
    };
    */


    return (
    <Background>
        <BookCover>
            <BookDot>
                <ProfileBox>
                    <HeadText style={{ justifyContent: 'center' }}>
                        <p>TODAY<span style={{ color: '#a96a6a' }}> 12</span> | TOTAL 34</p>
                    </HeadText>
                    <InnerProfileBox>
                        <Profile/>
                    </InnerProfileBox>
                </ProfileBox>
                <ContentBox>
                    <ContentHead>
                        <HeadText style={{ justifyContent: 'left' }}>
                            <p>TODAY<span style={{ color: '#a96a6a' }}> 12</span> | TOTAL 34</p>
                        </HeadText>
                        <HeadText style={{ justifyContent: 'right' }}>
                            <p>TODAY<span style={{ color: '#a96a6a' }}> 12</span> | TOTAL 34</p>
                        </HeadText>
                    </ContentHead>

                    
                    <InnerContentBox>
                        asdf
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
    background-color: #6faed4;

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
    grid-template-rows: 1fr 19fr;
    row-gap: 6px;
`;

const ContentBox = styled.div`
    background-color: #eeeeee;

    border-radius: 12px;
    border: 1px solid #374851;

    padding: 12px 9px 12px 9px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 19fr;
    row-gap: 6px;
`;

const ContentHead = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
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

    padding: 25px 90px 25px 90px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3.5fr 1fr 2.25fr 2fr 0.75fr;
    row-gap: 3%;
`;

const Menu = styled.div`
background-color: #ffffff;

border-radius: 12px;
border: 1px solid #374851;

padding: 15px 12px 15px 12px;

display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 19fr;
row-gap: 6px;
`;