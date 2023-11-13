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

    html, body, input, button, select {
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

    input[type='date']::before {
        content: attr(placeholder);
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

    .bookPaper {
        background-color: white;
        border-radius: 12px;
        border: 1px solid var(--black);
    }

    /* 프로필 이미지 */
    .profileImage {
        background-position: center center;
        object-fit: cover;
        aspect-ratio: 4 / 3;
        border-radius: 12px;
        border: 1px solid var(--light-gray);
    }
`;

export default GlobalStyles;