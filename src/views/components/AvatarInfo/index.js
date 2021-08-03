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

`;

const Avatar = styled.div`
  margin-right: 8px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;

  }
`;

const Info = styled.div`
  h1 {
    font-size: 15px;
    color: #111;
    font-weight: 500;
  }

  p {
    font-size: 11px;
    color: #767676;
    font-weight: 500;
  }
`;
export default AvatarInfo;