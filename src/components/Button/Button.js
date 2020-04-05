import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    width: 100px;
    height: 35px;
    background-color: #303f9f;
    border: none;
    color: white;
    letter-spacing: 2px;
    font-size: 1.2rem;
    cursor: pointer;
`;

const Button = ({children}) => (
    <Wrapper type="submit">
        {children}
    </Wrapper>
)

export default Button;