import styled, {css, keyframes} from 'styled-components';

import { IPreloaderItemStyle } from './interfaces';

export const PreloaderWrapper = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
`;

export const PreloaderContainer = styled.div`
    width: 64px;
    height: 64px;
    position: relative;
`;

const animation = keyframes`
    0%, 39%, 100% {
        opacity: 0;
    }
    40% {
        opacity: 1;
    }
`;

export const PreloaderItem = styled.div<IPreloaderItemStyle>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
    ${props => props.num > 1 && css`
        transform: rotate(${(360 / 12 * (props.num - 1))}deg);
    `}
    
    &::before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: #000;
        border-radius: 100%;
        animation: ${animation} 2s infinite ease-in-out both;
        
        ${props => props.num > 1 && css`
            animation-delay: ${-2 + 2 / 12 * (props.num - 1)}s;
        `}
    }
`;