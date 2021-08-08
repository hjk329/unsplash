import React from 'react';
import styled from 'styled-components';
import cn from 'classnames'


const AvatarInfo = ({imageUrl, name, description, size}) => {
    return (
        <Container className={cn(size)}>
            <Avatar>
                <img src={imageUrl} alt=""/>
            </Avatar>
            <Info>
                <h3>{name}</h3>
                {
                    description && <p>{description}</p>
                }
            </Info>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  margin-right: 2px;

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
    
    .large & {
      font-size: 18px;
    }
  }

  p {
    margin-top: 3px;
    font-size: 11px;
    color: #fff;
    font-weight: 500;

    .large & {
      font-size: 15px;
    }
  }
`;
export default AvatarInfo;