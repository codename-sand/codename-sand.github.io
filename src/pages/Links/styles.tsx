import styled from '@emotion/styled';
import { PerfectCenter,VerticalCenter,AlignCenter } from 'styles';
import { css, keyframes } from '@emotion/react';
import { Scroll } from 'assets/images';

const fadeInUp = keyframes`
    from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
`;

const pulse = keyframes`
    from {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
    
    50% {
        -webkit-transform: scale3d(1.2, 1.2, 1.2);
        transform: scale3d(1.2, 1.2, 1.2);
    }
    
    to {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
`;

export const Transparent = styled.div`
    width:100%;
    height:${(porps) => porps.results || '0'}px;
    margin-top:-${(porps) => porps.results || '0'}px;
    ${PerfectCenter}
    flex-direction:column;

    .textWrap {
        width:100%;
        height:calc(100% - 100px);
        ${PerfectCenter}
        
        p {
            width:300px;
            height:300px;
            padding:10px;
            border:2px solid white;
            border-radius:100%;
            margin:0 20px;
            ${PerfectCenter}
            color:white;
            font-family:'NotoM';
            font-size:1.5em;
        }
    }

    img{
        overflow:hidden;
        width:100%;
        height:auto;
    }

    .tt{
        color:white;
        font-size:3em;
    }

`;

export const Arrow = styled.div`
    width:50px;
    height:50px;
    background:url(${Scroll}) no-repeat center center;
    background-size:cover;
    animation: ${pulse} 1.5s ease-in-out infinite;
    position:absolute;
    bottom:40px;
    left:calc(50% - 25px);
`;

export const FixedBg = styled.div`
    width:100%;
    height:auto;
    background:no-repeat center fixed url(${(porps) => porps.className || 'blue'});
    background-size: cover;
`;

export const SlideWrap = styled.div`
    width:100%;
    height:100%;
    background:#fff no-repeat top center url(${(porps) => porps.className || 'white'});
    background-size:contain;
    padding:50px 0;
    ${PerfectCenter}
    flex-wrap:wrap;
    h1{
      font-size:3em;
    }
    img{
      width:${(porps) => porps.results || '100'}%;
      height:auto;
    }
`;


export const LongText = styled.h3`
    width:100%;
    font-family: 'Racing';
    color:rgba(0,0,0,0.1);
    font-size:10em;
    ${PerfectCenter}
`

export const Description = styled.div`
    // background:rgba(255,255,255,0.9);
    background:rgba(255,255,255,1) no-repeat right center url(${(porps) => porps.className || 'white'}) ;
    background-size:contain;
    width:100%;
    height:auto;
    padding:100px 60px;
    color:#2C2C2C;
    border-bottom:1px solid rgba(0,0,0,0.2);

    h3{
        font-size:3em;
        font-family: 'NotoB';
    }
    h2{
        font-size:3em;
        font-family: 'Racing';
        color:rgba(0,0,0,0.1);
        margin-top:-40px;
    }

    div{
        font-size:1.3em;
        margin-top:20px;
        display:flex;
        justify-content:start;
        .sub_title{
            font-family: 'NotoB';
            margin-right:20px;
        }
        p{
            line-height:30px;
            span{
                font-family:'NotoM';
                color:#a1a1a1;
                line-height:40px;
            }
        }
        
    }
    p{
        font-family: 'NotoML';
        width:calc(100% - 520px)
       
    }


`;