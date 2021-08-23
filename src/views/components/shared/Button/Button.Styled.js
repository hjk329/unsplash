import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  outline: 0;
  user-select: none;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0;
  margin: 0;

`;

export const DefaultButton = styled(Button)`
 
  padding: 0 11px;
  font-size: 14px;
  font-weight: 500;
  color: #767676;
 
  
  height: 32px;
  transition: 0.2s;
  border-radius: 3px;

  &:hover {
    color: #111;
  }
  
  ${(props) => props.outline && css`
    border-color: #d1d1d1;
    &:hover{
      border-color: #111;
    }
  `}
  
  ${(props) => props.sort === 'event' && css`
    background: #3cb46e;
    color: #fff;
    &:hover{
      background: #37a866;
      color: #fff;
    }
  `}

`;
