import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const Tags = ({tags=[]}) => {
    return (
        <Container>
            {
                tags.map(tag => <Tag>{tag.title}</Tag>)
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

const Tag = styled(Link)`
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 0 10px;
  background: #eee;
  border-radius: 2px;
  color: #767676;
  font-size: 14px;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.2s;

  &:hover{
    background-color: #e1e1e1;
    color: #111;
  }


`;
export default Tags;