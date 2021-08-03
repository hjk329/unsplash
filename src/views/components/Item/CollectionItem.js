import React from 'react';
import styled from 'styled-components';

import Tags from "../Tags";

const CollectionItem = ({item}) => {

    const {
        title,
        total_photos,
        user,
        preview_photos,
        tags
    } = item;

    return (
        <Container>
            <Thumb>
                <ThumbContent>
                    <ThumbLeft>
                        <Photo>
                            <img src={preview_photos?.[0]?.urls.regular} alt=""/>
                        </Photo>
                    </ThumbLeft>
                    <ThumbRight>
                        <PhotoTop>
                            <Photo>
                                <img src={preview_photos?.[1]?.urls.regular} alt=""/>
                            </Photo>
                        </PhotoTop>
                        <PhotoBottom>
                            <Photo>
                                <img src={preview_photos?.[2]?.urls.regular} alt=""/>
                            </Photo>
                        </PhotoBottom>
                    </ThumbRight>
                </ThumbContent>
            </Thumb>
            <Desc>
                <h3>{title}</h3>
                <p>{total_photos} photos · Curated by {user.name}</p>
            </Desc>
            <Tags tags={tags}/>
        </Container>
    )
}

const Container = styled.div`

`;

const Thumb = styled.div`
  position: relative;
  padding-top: 70%;
  border-radius: 6px;
  overflow: hidden;

  &:hover {
    &::after {
      opacity: 1;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.25);
    opacity: 0;
    transition: 0.2s;
    pointer-events: none;
  }

`;

const ThumbContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;

`;

const ThumbLeft = styled.div`
  width: 70%;
  height: 100%;
  flex-shrink: 0;
  padding-right: 2px;
`;

const ThumbRight = styled.div`
  flex: 1;
`;

const PhotoTop = styled.div`
  height: 50%;
  padding-bottom: 1px;
`;

const PhotoBottom = styled.div`
  height: 50%;
  padding-top: 1px;
`;

const Photo = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  background: #eee;

`;

const Desc = styled.div`
  padding: 15px 10px;
  text-transform: capitalize;
  h3 {
    font-size: 18px;
    color: #111;
    font-weight: bold;
    background: 3px;
  }
  p{
    font-size: 14px;
    color: #767676;
    line-height: 1.5;
  }
  
  
`;


export default CollectionItem;