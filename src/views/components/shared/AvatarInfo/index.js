import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const AvatarInfo = ({
  imageUrl, name, description, size,
}) => (
  <Container className={cn(size)}>
    <Avatar>
      <img src={imageUrl} alt="" />
    </Avatar>
    <Info>
      <h3>{name}</h3>
      {
        description && <p>{description}</p>
      }
    </Info>
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  margin-right: 8px;

  .large & {
    margin-right: 18px;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    .large & {
      width: 64px;
      height: 64px;
    }
  }
`;

const Info = styled.div`
  h3 {
    font-size: 15px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 2px;
    
    .large & {
      font-size: 18px;
      color: #111;
      margin-bottom: 8px;
    }
  }

  p {
    margin-top: 3px;
    font-size: 11px;
    color: #fff;
    font-weight: 500;

    .large & {
      font-size: 15px;
      color: #111;
    }
  }
`;
export default AvatarInfo;
