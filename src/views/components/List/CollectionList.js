import React from 'react';
import styled from 'styled-components';

import CollectionItem from "../Item/CollectionItem";


const CollectionList = ({data}) => {
    return (
        <Container>
            {
                data?.map?.((item) => <CollectionItem item={item}/>)

            }
        </Container>
    )
}

const Container = styled.div`

`;
export default CollectionList;