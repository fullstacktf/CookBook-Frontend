import React, { FC } from 'react';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

type ButtonType = 'NORMAL' | 'WARNING';
type ButtonSize = 'LARGE' | 'SMALL';


const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const ButtonStyle = styled.button<any>`
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  border: ${props => props.theme.border};
  width: ${props => props.theme.width}; 
`;


interface ButtonProps {
    text: string;
    type?: ButtonType;
    size?: ButtonSize;
}

function getSizeTheme(type: ButtonSize = 'SMALL') {
    if (type === 'SMALL') {
        return {
            width: '150px'
        }
    }
    return {
        width: '300px'
    }
}

function getColorTheme(type: ButtonType = 'NORMAL') {
    switch (type) {
        case "NORMAL":
            return {
                backgroundColor: 'blue',
                color: 'white',
                border: '2px solid #666'
            };
        default:
            return {
                backgroundColor: 'red',
                color: '#ff9900',
                border: '4px solid #00FF00'
            };
    }
}


function getTheme(type, size) {
    return { ...getColorTheme(type), ...getSizeTheme(size) }
}

export const Button: FC<ButtonProps> = ({ text, type, size }) => {
    const theme = getTheme(type, size);
    return <div>
        <ButtonStyle theme={theme}>{text}</ButtonStyle>
    </div>
};
