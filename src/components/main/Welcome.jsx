import axios from 'axios';
import styled from 'styled-components';
import { decodeCookie, removeCookie } from '../../shared/Cookies';
import ProfileImage from '../../images/profile_image.png'
import { Alert } from "../../shared/Alert";

function Welcome() {
    const SERVER = process.env.REACT_APP_SERVER;

    const decode = decodeCookie("accessToken");
    console.log(decode);

    function ClickMyMinihompy() {
        window.open(`/minihompy/${decode.userId}`, '_blank', 'width=1200px height=800px toolbar=no resizable=no status=no menubar=no');
    }

    function ClickEdit() {
        window.open('/edit', '_blank', 'width=600px height=800px toolbar=no resizable=no status=no menubar=no');
    }

    function ClickDotori() {
        Alert('준비중입니다.');
    }

    function ClickSurfing() {
        axios.get(`${SERVER}/api/users/surfing`).then((res) => {
            const random = res.data.data;
            window.open(`/minihompy/${random.userId}`, '_blank', 'width=1200px height=800px toolbar=no resizable=no status=no menubar=no');
        });
    }

    function ClickLogout() {
        removeCookie('accesstoken');
        removeCookie('refreshtoken');
        removeCookie('accessToken');
        removeCookie('refreshToken');

       axios
      .post(`${SERVER}/api/users/logout`)
      .then((res) => {
        Alert({
          html: `${res.data.msg}`,
        })
      })
      .catch((e) => {
        if(e.response.data.errorMessage !== undefined) {
          Alert({
            html: `${e.response.data.errorMessage}`,
          })
        }
        else {
          Alert({
            html: `${e.response.data.msg}`,
          })
        }
      });
        window.location.reload();
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