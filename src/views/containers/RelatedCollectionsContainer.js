import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";

import GridList from "../components/shared/List/GridList";
import CollectionItem from "../components/shared/Item/CollectionItem";


const RelatedCollectionsContainer = () => {

    const collections = useSelector(state => state.photos.photoById.related_collections?.results)

    return (
        <Container>
            <GridList data={collections}>
                {(item) => <CollectionItem item={item}/>}
            </GridList>
        </Container>
    )
}

const Container = styled.div`

`;
export default RelatedCollectionsContainer;