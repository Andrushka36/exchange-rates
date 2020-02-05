import styled from 'styled-components';

export const FormWrapper = styled.section`
    max-width: 600px;
    margin: 10px auto;
    position: relative;
    padding-right: 10px;
    padding-left: 10px;
`;

export const RowWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

export const Label = styled.div`
    width: 250px;
    color: #222;
    font-size: 14px;
`;

export const SelectList = styled.select`
    flex: 1;
    padding-right: 20px;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A")
    background-repeat: no-repeat;
    background-position: 100% 50%;
    height: 40px;
    padding: 0 10px;
    background: #fff;
    border: 1px solid #e5e5e5;
    transition: 0.2s;
    
    &:focus {
        border-color: #1e87f0;
    }
`;

export const SelectItem = styled.option`
    color: #444;
    
    &[disabled] {
        color: #999;
    }
`;