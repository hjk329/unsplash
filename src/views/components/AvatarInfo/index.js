import React from 'react';
import styled from 'styled-components';


const AvatarInfo = ({imageUrl, name, description}) => {
    return (
        <Container>
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

  }
`;

const Info = styled.div`
  h3 {
    font-size: 15px;
    color: #fff;
    font-weight: 500;
  }

  p {
    margin-top: 3px;
    font-size: 11px;
    color: #fff;
    font-weight: 500;
  }
`;
export default AvatarInfo;