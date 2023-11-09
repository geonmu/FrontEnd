import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};

    body {
        font-family: 'BBTreeGothic';
        line-height: 1;
        font-size: 1rem;
        color : #444444;
    }

    /* 진한 회색(본문) */
    .layoutText {
        font-family: 'DungGeunMo';
    }

    .layoutText * {
        font-family: inherit;
    }
`;

export default GlobalStyles;