import styled from '@emotion/styled';
import { PerfectCenter } from 'styles';
import { keyframes } from '@emotion/react';

const fadeOut = keyframes`
    0% {
        transform: scaleX(1) skewX(30deg);
        transform-origin: left;
    }

    100% {
        transform: scaleX(0) skewX(30deg);
        transform-origin: left;
    }
`;

const loadMove = keyframes`
    from {
        left: 6rem;
    }

    to {
        left: 200%;
    }
`;

const loadOpacity = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0.97;
    }
`;

const loadScale = keyframes`
    from {
        transform: scale(0.1);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
`;


export const Loading = styled.div`
    z-index: 10001;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
   ${PerfectCenter}
    background: #164aad;
`;

export const Containers = styled.div`
    ${PerfectCenter}
    position: relative;
    overflow: hidden;

    p{
        color:#fff;
        font-family: 'Racing';
        font-size: 3rem;
        letter-spacing: 2px;
    }
`;

export const BlurWrap = styled.div`
    width: 200%;
    height: 6rem;
    display: flex;
    position: absolute;
    border:1px solid red;
    left: 6rem;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: ${loadMove} 1.8s forwards cubic-bezier(0.96, 0.39, 0.64, 0.93);
    animation-delay: 1s;
`;

export const Blur = styled.div`
    width: calc(50% - 6rem);
    background: #164aad;
    opacity: 1;
    animation: ${loadOpacity} 0.4s forwards ease-in-out;
    animation-delay: 0.8s;
`;

export const Tran = styled.div`
    width: 10rem;
    animation: ${loadScale} 0.4s forwards ease-in-out;
    animation-delay: 0.6s;

    &:after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background: orange;
        width: 4px;
        height: 100%;
    }
`;
