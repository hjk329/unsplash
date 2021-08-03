import React from 'react';
import styled from 'styled-components';


const UserProfile = ({user}) => {

    if (!user) return 'loading...';

    return (
        <Container>
            <Avatar>
                <img src={user.profile_image.medium} alt=""/>
            </Avatar>
            <Info>
                <h3>{user?.name}</h3>
                <p>{user.username}</p>
            </Info>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
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
export default UserProfile;