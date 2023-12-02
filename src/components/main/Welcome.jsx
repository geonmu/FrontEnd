import axios from 'axios';
import styled from 'styled-components';
import { removeCookie } from '../../shared/Cookies';
import ProfileImage from '../../images/profile_image.png'

function Welcome() {
    const SERVER = process.env.REACT_APP_SERVER;

    function ClickMyMinihompy() {
        window.open('/minihompy/${user.userId}', '_blank', 'width=400px height=600px toolbar=no resizable=no status=no menubar=no')
    }

    function ClickSurfing() {
        axios.get(`${SERVER}/api/users/surfing`).then((res) => {
            const random = res.data.data;
            window.open('/minihompy/${random}', '_blank', 'width=400px height=600px toolbar=no resizable=no status=no menubar=no')
        });
    }

    function ClickLogout() {
        removeCookie('accessToken');
        removeCookie('refreshToken');
        window.location.reload();
    }

    return (
            <WelcomeLayout>
                <div style={{ textAlign: 'center', gridRowStart: 1, gridRowEnd: 4 }} >
                    <img className='profileImage' src={ProfileImage} alt='프로필사진' style={{ width: '100%' }}/>
                </div>
                <button>프로필 편집 ⚙️</button>
                <button>도토리 충전 🌰</button>
                <button onClick={ClickSurfing}>파도타기 🌊</button>
                <button className='primaryButton' onClick={ClickMyMinihompy}>내 미니홈피 바로가기</button>
                <button onClick={ClickLogout}>로그아웃 🚪</button>
            </WelcomeLayout>
    );
}

export default Welcome;

const WelcomeLayout = styled.div`
    margin: 25px auto;
    display: grid;
    grid-template-columns: 200px 135px;
    grid-template-rows: repeat(4, 40px);
    column-gap: 30px;
    row-gap: 15px
`;