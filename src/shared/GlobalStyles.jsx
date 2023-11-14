import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};

    /* 색상 */
    :root {
        --black: #3d3d3d;
        --light-black: #666666;

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

    html, body, input, button, select, option {
        font-family: 'NanumSquareRoundR';
        line-height: 1;
        font-size: 1rem;
        color: var(--black);
        min-width: 10px;
        min-height: 10px;

        &::placeholder {
            color: var(--light-black);
        }
    }

    input, button, select {
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid var(--gray);
        background-color: white;

        &:focus {
            border: 2px solid var(--sky-blue);
            outline: none;
        }

        &:disabled {
            pointer-events: none;
            filter: brightness(0.85);
            cursor: default;
        }
    }

    input, select {
        padding-left: 10px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 2px rgb(0, 0, 0, 0.2);

        &:hover {
            filter: brightness(0.95);
        }

        &.primaryButton {
            color: white;
            border-color: var(--dark-blue);
            background-color: var(--blue);
        }
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
        justify-content: center;
    }

    /* 두 줄 이상의 글 */
    .bodyText {
        word-break: break-all;
        line-height: 1.15;
    }

    .bookPaper {
        background-color: white;
        border-radius: 12px;
        border: 1px solid var(--black);
    }

    .errorMessage {
        color: red;
        font-size: 0.8rem;
        margin: 3px;
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