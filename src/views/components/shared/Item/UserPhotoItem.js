import React from 'react';
import styled from 'styled-components';
import RatioBox from "../RatioBox";


const UserPhotoItem = ({item}) => {
    return (
        <Container>
            <RatioBox width={122}
                      height={91}>
                <img src={item?.urls?.regular} alt=""/>
            </RatioBox>
        </Container>
    )
}

const Container = styled.div`

`;
export default UserPhotoItem;