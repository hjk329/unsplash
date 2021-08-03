import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";

import GridList from "../components/List/GridList";
import CollectionItem from "../components/Item/CollectionItem";


const RelatedCollectionsContainer = () => {

    const collections = useSelector(state => state.photos.photoById.related_collections?.results)

    const renderItem = (item) => <CollectionItem item={item}/>

    return (
        <Container>
            <GridList data={collections} renderItem={renderItem}/>
        </Container>
    )
}

const Container = styled.div`

`;
export default RelatedCollectionsContainer;