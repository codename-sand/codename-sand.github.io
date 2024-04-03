import styled from '@emotion/styled';
import { AlignCenter, PerfectCenter, VerticalCenter } from 'styles';
import { PortfolioBg } from 'assets/images';

export const ItemContainer = styled.div`
    width:100%;
    flex-wrap:wrap;
    ${PerfectCenter}
    background:no-repeat center center fixed url(${PortfolioBg});
    background-size:calc(100% - 42px);
    
    a{
        height:auto;
        &:hover{
            #hoverItem {
                display: flex;
            #thumbItem {
                display: none;
                }
            }
        }
        &:last-of-type{
            margin-right:400px;
        }
    }
`;

export const Item = styled.div`
    min-height:400px;
    min-width:400px;
    background:no-repeat center center url(${(porps) => porps.className || 'blue'});
    background-size:100%;

    // @media only screen and (max-width: 800px){
    //     width:50%;
    // }

    // @media only screen and (min-width: 1000px) {
    //     width:100%;
    //     height:100%;

    // }

`;

export const HoverItem = styled.div`
    min-height:400px;
    min-width:400px;
    background:rgba(41,41,41,0.97);
    padding:30px;
    justify-content:space-between;
    display:none;
    flex-direction:column;
    margin-top:-400px;

    // @media only screen and (max-width: 800px){
    //     width:50%;
    // }

    // @media only screen and (min-width: 1000px) {
    //     width:100%;
    //     height:100%;

    // }



    h3{
        color:#175fe8;
        display:inline;
        width:auto;
        font-size:40px;
        font-family:'Racing';
        letter-spacing:1px;
        border-bottom:2px solid #175fe8;
    }

    .title{
        color:#fff;
        font-size:20px;
        margin:20px 0 10px;
        font-family:'NotoM';
    }
    .desc{
        color:#989898;
        font-size:16px;
    }

    .tag{
        font-size:18px;
        font-family:'Racing';
        color:#fff;
        letter-spacing:1px;
    }

`;