import React from 'react';
import styled from 'styled-components'


const PhotoItem = ({data=[], onClickItem}) => {
    return (
        <Container onClick={() => onClickItem(data.id)}>
            <Thumb>
                <img src={data.urls.regular} alt=""/>
            </Thumb>
            <Desc>
                <img src={data.user.profile_image.medium} alt=""/>
                <p>
                    {data.user.name}
                </p>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
`;

const Thumb = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: 0.3s;
  background: rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 1;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }

  p {
    color: #fff;
    font-size: 13px;
  }
`;
export default PhotoItem;