import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};

    body {
        font-family: 'BBTreeGothic';
        line-height: 1;
        font-size: 1rem;
    }

    /* 진한 회색(본문) */
    p {
        font-family: 'DungGeunMo';
        color : #595959;
    }

    .text {
        line-height: 1.15;
    }
`;

export default GlobalStyles;