import { createGlobalStyle } from "styled-components";
import styled from "@emotion/styled"
import { NotoB, NotoL, NotoM, NotoML, NotoR, NotoT, Racing } from "assets/fonts";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'NotoB';
    font-style: normal;
    src: url('${NotoB}') format('woff');
}
@font-face {
    font-family: 'NotoL';
    font-style: normal;
    src: url('${NotoL}') format('woff');
}
@font-face {
    font-family: 'NotoM';
    font-style: normal;
    src: url('${NotoM}') format('woff');
}
@font-face {
    font-family: 'NotoML';
    font-style: normal;
    src: url('${NotoML}') format('woff');
}

@font-face {
    font-family: 'NotoR';
    font-style: normal;
    src: url('${NotoR}') format('woff');
}
@font-face {
    font-family: 'Racing';
    font-style: normal;
    src: url('${Racing}') format('woff');
}
@font-face {
    font-family: 'NotoT';
    font-style: normal;
    src: url('${NotoT}') format('woff');
}
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;

    // ::-webkit-scrollbar {
    //     width: 8px;
    //     height: 8px;
    //     -ms-overflow-style: none;
    //     scrollbar-width: none;
    // }
    // ::-webkit-scrollbar-track {
    //     background: transparent;
    // }
    // ::-webkit-scrollbar-thumb {
    //     background: #175fe8;
    //     border-radius: 4px;
    // }
    // ::-webkit-scrollbar-thumb:hover {
    //     background: #164aad;
    // }
}

ul,
ol,
dl {
    list-style: none;
}

a {
    text-decoration: none;
    color: currentColor;
    cursor: pointer;
}

button {
    cursor: pointer;
}

iframe {
    width:100%;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table,
table tr,
table td {
    border: 0;
    border-collapse: collapse;
    border-spacing: 0;
}

.blind,
legend,
caption {
    display: block;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: -1000em;
}

.cf:after {
    clear: both;
    display: block;
    content: "";
}

input::-ms-clear,
input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
}

input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration {
    display: none;
}

html,
body {
    font-size: 14px;
    background:#fff;
    letter-spacing: -0.5px;
    *{

        font-family: 'NotoL', sans-serif;

        
    }
}
`;

// align settings
export const PerfectCenter = `
display: flex;
align-items: center;
justify-content:center;
`

export const AlignCenter = `
display: flex;
align-items: center;  
`

export const VerticalCenter = `
display:flex;
justify-content:center;
`

/////////////////////////////////////////////////

// input settings
export const InputWrap = styled.div`
    width: 600px;
    ${AlignCenter}
    margin-bottom:30px;
    label{
        color:#2C2C2C;
        width:140px;
    }
    input {
        height: 40px;
        border: 1px solid #B4C1CD;
        padding-left: 10px;
        box-sizing: border-box;
        color: #2C2C2C;
        border-radius: 2px;
        width: 400px;
        &:focus {
            box-shadow: 0px 0px 4px 1px rgba(70, 115, 210, 0.6);
        }

        &:active {
            border: 2px solid #4673D2;
            box-shadow: none;
        }

        &:disabled {
            background: #F6F6F6;
        }

        &.addError {
            border: 2px solid #F75454;
            box-shadow: none;
        }
    }
    span {
        color: #F75454;
        font-size: 12px;
        position: absolute;
        margin: 60px 0 0 140px;
    }
`

export const SubmitBtn = styled.button`
    width: 200px;
    height:50px;
    border-radius: 5px;
    font-size:17px;
    background-color: #9e55b9;
    color:white;
    text-align: center;
    margin: 50px 0;
`;

export const TitleLine = styled.h4`
    width:100%;
    height:40px;
    margin-bottom:60px;
    color:#fff;
    font-size:40px;
    ${AlignCenter}
    letter-spacing:1px;
    font-family: 'Myeongjo', sans-serif !important;
    font-weight:thin;

    &:before{
        content:"";
        width:60px;
        height:60px;
        background: url(${(porps) => porps.className || 'red'}) no-repeat;
        
        background-size:60px 60px;
        margin-right:15px;
        float:left;
    }
`


