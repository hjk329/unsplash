import React, {useEffect} from 'react';
import styled from 'styled-components'

import {ContentContainer} from "../components/Layout/Layout.Styled";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/search/redux";
import {CLIENT_ID} from "../../constants/common";
import PhotoList from "../components/List/PhotoList";
import SearchLnb from "../components/lnb/SearchLnb";
import {Route, Switch, useParams} from "react-router-dom";
import GridList from "../components/List/GridList";
import CollectionItem from "../components/Item/CollectionItem";
import UserItem from "../components/Item/UserItem";


const SearchContainer = ({match}) => {

    const dispatch = useDispatch();
    const {photos, collections, users, related_searches} = useSelector(state => state.search)
    // const query = match.params.query;

    const {query} = useParams()

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
            <SearchLnb/>
            <br/>
            <br/>
            <br/>
            <ContentContainer>
                <Switch>
                    <Route exact path={'/search/photos/:query'}>
                        <PhotoList data={photos.results}/>
                    </Route>
                    <Route exact path={'/search/collections/:query'}>
                        <GridList data={collections.results}>
                            {(item) => <CollectionItem item={item}/>}
                        </GridList>
                    </Route>
                    <Route exact path={'/search/users/:query'}>
                        <GridList data={users.results}>
                            {(item) => <UserItem item={item}/>}
                        </GridList>
                    </Route>
                </Switch>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;
export default SearchContainer;