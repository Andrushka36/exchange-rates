import styled, { css } from 'styled-components';

import { IPaginationItemStyle, IPaginationWrapperStyle, ITdStyle } from './interfaces';

export const Wrapper = styled.section`
    max-width: 600px;
    margin: 40px auto 20px;
`;

export const Container = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const TableWrapper = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    margin-bottom: 20px;
`;

export const Tr = styled.tr`
    &:not(:first-child) {
        border-top: 1px solid #e5e5e5;
    }
`;

export const Th = styled.th`
    padding: 16px 12px;
    text-align: left;
    font-size: 12px;
    font-weight: normal;
    color: #999;
    text-transform: uppercase;
`;

export const Td = styled.td<ITdStyle>`
    padding: 16px 12px;
    
    ${props => props.dynamics === 'up' && css`
        color: #0f940f;
    `}
    
    ${props => props.dynamics === 'down' && css`
        color: #f44336;
    `}
`;

export const PaginationWrapper = styled.div<IPaginationWrapperStyle>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    
    ${props => props.countItems && css`
        width: ${props.countItems * 40}px;
    `}
`;

export const PaginationItem = styled.div<IPaginationItemStyle>`  
    [stroke*='#'] {
        stroke: currentColor;
    }
    
    &:first-child, &:last-child {
        font-size: 12px;
    }
    
    ${props => props.active && css`
        color: #666;
    `}
    
    ${props => !props.active && css`
        color: #999;
        transition: 0.1s;
        cursor: pointer;
        
        &:hover {
            color: #666;
        }
    `}
`;

export const NavWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
    
    a {
        display: block;
        text-align: center;
        padding: 9px 20px;
        color: #999;
        border-bottom: 2px solid transparent;
        font-size: 12px;
        text-transform: uppercase;
        transition: color .1s ease-in-out;
        line-height: 20px;
        
        &:hover, &:focus, &:active {
            color: #666;
        }
        
        &.active {
            color: #222;
            border-color: #1e87f0;
        }
    }
`;