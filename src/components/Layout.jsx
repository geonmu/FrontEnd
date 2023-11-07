/* 미니홈피의 배경 격자, 책자 디자인 구성 */

import styled from 'styled-components';
import Profile from './Profile';

function Layout({children}) {
    return (
        <Background>
            <BookCover>
                <BookDot>
                    <Profile />
                    {children}
                </BookDot>
            </BookCover>
        </Background>
    );
}

export default Layout;

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
    background-color: #6fafd4;

    border-radius: 12px;
    border: 2px solid #374851;

    width: 1000px;
    height: 600px;
    margin: 100px auto;

    position: relative;
`;

const BookDot = styled.div`
    border: 2px dashed #b9d8e5;
    border-radius: 12px;

    top: 25px;
    bottom: 25px;
    left: 25px;
    right: 25px;
    
    position: absolute;
`;