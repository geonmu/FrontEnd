import axios from 'axios';
import styled from 'styled-components';
import { decodeCookie, removeCookie } from '../../shared/Cookies';
import ProfileImage from '../../images/profile_image.png'
import { Alert } from "../../shared/Alert";

function Welcome() {
    const SERVER = process.env.REACT_APP_SERVER;
    const decode = decodeCookie("accessToken");

    function ClickMyMinihompy() {
        window.open(`/minihompy/${decode.userId}`, '_blank', 'width=1400px height=700px toolbar=no resizable=no status=no menubar=no');
    }

    function ClickEdit() {
        window.open('/edit', '_blank', 'width=600px height=800px toolbar=no resizable=no status=no menubar=no');
    }

    function ClickDotori() {
        Alert({
            html: '준비중입니다.',
        });
    }

    function ClickSurfing() {
        axios.get(`${SERVER}/api/users/surfing`).then((res) => {
            const random = res.data.data;
            window.open(`/minihompy/${random.userId}`, '_blank', 'width=1400px height=700px toolbar=no resizable=no status=no menubar=no');
        });
    }

    function ClickLogout() {
        axios.post(`${SERVER}/api/users/logout`, null, { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            Alert({
              html: '로그아웃 되었습니다.',
              timer: 3000,
            }).then(() => {
                window.location.reload();
              })
          }
        })
        .catch(() => {
          Alert({
            html: '로그아웃 중 오류가 발생했습니다.',
          }).then(() => {
            window.location.reload();
          })
        });

        removeCookie('accessToken');
        removeCookie('refreshToken');
    }

    return (
            <WelcomeLayout>
                <div style={{ textAlign: 'center', gridRowStart: 1, gridRowEnd: 4 }} >
                    <img className='profileImage' src={ProfileImage} alt='프로필사진' style={{ width: '100%' }}/>
                </div>
                <button onClick={ClickEdit}>프로필 편집 ⚙️</button>
                <button onClick={ClickDotori}>도토리 충전 🌰</button>
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