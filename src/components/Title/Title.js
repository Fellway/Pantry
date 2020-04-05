import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
    font-size: 2rem;
    margin: 40px 0;
    letter-spacing: 4px;
`;

const Title = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default Title;