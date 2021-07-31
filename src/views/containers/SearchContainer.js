import React, {useEffect} from 'react';
import styled from 'styled-components'

import {ContentContainer} from "../components/Layout/Layout.Styled";
import SearchBox from "../components/SearchBox";
import ScrollMenu from "../components/ScrollMenu";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/search/redux";
import {CLIENT_ID} from "../../constants/common";
import PhotoList from "../components/List/PhotoList";


const SearchContainer = ({match}) => {

    const dispatch = useDispatch();
    const photos = useSelector(state => state.search.photos)
    const query = match.params.query;

    useEffect(() => {
        searchPhotos();
    }, [query])

    const searchPhotos = () => {
        dispatch(Action.Creators.searchPhotos({
            client_id : CLIENT_ID,
            query
        }))

    }


    return (
        <Container>
            <SearchBox/>
            <ScrollMenu/>
            <ContentContainer>
                <PhotoList data={photos.results}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;
export default SearchContainer;