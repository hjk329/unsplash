import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";

import CollectionList from "../components/List/CollectionList";


const RelatedCollectionsContainer = () => {

    const collections = useSelector(state => state.photos.photoById.related_collections?.results)

    return (
        <Container>
            <CollectionList data={collections}/>
        </Container>
    )
}

const Container = styled.div`

`;
export default RelatedCollectionsContainer;