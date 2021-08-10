import React from 'react';
import styled, {css} from 'styled-components';


const IconButton = ({icon, text, size}) => {
    return (
        <Container size={size}>
            {icon}
            {
                text &&
                <Text>{text}</Text>
            }
        </Container>
    )
}

const Container = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid #aaa;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.9);
  height: 32px;
  padding: 0 11px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border-color: #111;

    svg {
      fill: #111
    }

    span {
      color: #111;
    }

  }

  svg {
    ${(p) => css`
      width: ${p.size ?? 15} px;
      height: ${p.size ?? 15}px;
    `}

    fill: #767676;
    transition: 0.2s;
  }
`;

const Text = styled.span`
  text-transform: capitalize;
  color: #767676;
  transition: 0.2s;
  margin-left: 8px;
`;
export default IconButton;