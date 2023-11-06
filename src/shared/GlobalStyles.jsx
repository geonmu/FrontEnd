import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};

    /* 스타일 관련 추후 디자인에 맞게 수정 */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
        }
    /* a 태그의 밑줄을 없애고 누르면 보라색으로 변하는걸 빼줌 */
    
    * { 
        box-sizing: border-box;
        font-size: 1rem;
    }
    /* 원하는대로 박스 크기를 고정할 수 있다. */
    
    .logopic {
     width: 500px;
    }
    
    .leftBtn {
        margin-left: 10px;
    }
    
    .miniroom {
        width: 520px;
        height: 250px;
    }
    
    .minimi {
        width: 35px;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    
    .userMinimi {
      width: 100px;
      height: 100px;
    }
    
    .idCheck {
        font-size: 0.7rem;
    }
`;

export default GlobalStyles;