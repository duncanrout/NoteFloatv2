import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const Back = styled.div`
  background - image: "/img/boat.jpg"
`;

export const HomePage = (props) => (
    
        <Back>
            <Image src="/img/boat.jpg" fluid />
        </Back>
)