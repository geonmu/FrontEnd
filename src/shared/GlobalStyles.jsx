import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};

    /* 색상 */
    :root {
        --black: #3d3d3d;
        --light-black: #666666;

        --dark-gray: #afafaf;
        --gray: #cecece;
        --light-gray: #eaeaea;

        --dark-red: #b51919;
        --orange: #ff9c55;
        --light-orange: #ffbc90;

        --dark-sky-blue: #77aacc;
        --sky-blue: #6fafd4;
        --light-sky-blue: #cce8ee;

        --dark-blue: #3c6c7c;
        --blue: #4a93ba;

        --pink: #ff69b4;
    }

    html, body, input, button, select, option, textarea {
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

    .scrollBar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        overflow-y: scroll;
    }
    .scrollBar::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
        overflow-y: scroll;
    }

    input, button, select, textarea {
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
            filter: brightness(0.9);
            cursor: default;
        }
    }

    input, select, textarea {
        padding: 2px 5px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 1px rgb(0, 0, 0, 0.2);

        &:hover {
            filter: brightness(0.95);
        }

        &.primaryButton {
            color: white;
            border-color: var(--dark-blue);
            background-color: var(--blue);
        }
    }

    textarea {
        resize: none;
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
        overflow: hidden;
        line-height: 1.15;
    }

    .bookPaper {
        background-color: white;
        border-radius: 12px;
        border: 1px solid var(--black);
    }

    .errorMessage {
        color: var(--dark-red);
        font-size: 0.8rem;
        margin: 3px;
    }

    /* 프로필 이미지 */
    .profileImage {
        aspect-ratio: 4 / 3;
        background-position: center center;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: 3px 3px rgb(0, 0, 0, 0.05);
    }

    .canvasImage {
        aspect-ratio: 2 / 1;
        background-position: center center;
        object-fit: cover;
        border-radius: 6px;
        box-shadow: 4px 4px rgb(0, 0, 0, 0.05);
    }
`;

export default GlobalStyles;