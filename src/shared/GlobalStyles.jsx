import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};

    /* 색상 */
    :root {
        --black: #3d3d3d;
        --light-black: #595959;

        --dark-gray: #b3b3b3;
        --gray: #cecece;
        --light-gray: #eaeaea;

        --dark-red: #9e1616;
        --orange: #ee8f4f;

        --dark-sky-blue: #77aacc;
        --sky-blue: #6fafd4;
        --light-sky-blue: #cce8ee;

        --dark-blue: #3c6c7c;
        --blue: #4a93ba;
    }

    html, body, input, button {
        font-family: 'NanumSquareRoundR';
        line-height: 1;
        font-size: 1rem;
        color: var(--black);
    }
    
    input {
        border: 1px solid var(--gray);
        background-color: white;
        padding: 0px 6px;
    }

    input:focus {
        border: 2px solid var(--sky-blue);
        outline: none;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 4px;
        border: 1px solid var(--dark-gray);
        box-shadow: 2px 2px rgb(0, 0, 0, 0.2);
        cursor: pointer;
    }

    button:hover {
        filter: brightness(0.95);
    }

    button:focus {
        border: 2px solid var(--sky-blue);
        outline: none;
    }

    /* 싸이월드 폰트 적용 */
    .fontText {
        font-family: 'DungGeunMo';
    }

    .fontText * {
        font-family: inherit;
    }

    /* 제목 */
    .headText {
        display: flex;
        align-items: flex-end;
    }

    /* 두 줄 이상의 글 */
    .bodyText {
        line-height: 1.15;
        margin-top: 5px;
    }

    /* 프로필 이미지 */
    .profileImage {
        background-position: center center;
        object-fit: cover;
        aspect-ratio: 4 / 3;
        border-radius: 12px;
        border: 1px solid var(--light-gray);
    }

    /* MainPage.jsx의 Background 애니메이션 */
    @keyframes animateBackground {
        from {
            background-image: url('https://www.kw.ac.kr/KWData/webeditor/2020/2020_05_29_102245.jpg');
        }
        33% {
            background-image: url('https://i.namu.wiki/i/FXdSpx0Bc4TtzcSBV3rGMEgo5k79yYMCXlLySKewhm5B02-qixbWlcZIdtqS1JIT10mZ3vcbOBZUt3dyrqEUlA.webp');
        }

        66% {
            background-image: url('https://news.unn.net/bbs/download.php?table=bbs_22&savefilename=bbs_22_51784_1.jpg&filename=%EA%B4%91%EC%9A%B4%EB%8C%80%ED%95%99%EA%B5%90+%EC%BA%A0%ED%8D%BC%EC%8A%A4+%EC%A0%84%EA%B2%BD.jpg')
        }
        to {
            background-image: url('https://www.kw.ac.kr/KWData/webeditor/2020/2020_05_29_102245.jpg');
        }
    }
`;

export default GlobalStyles;