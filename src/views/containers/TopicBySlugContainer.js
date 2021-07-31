import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {useRouteMatch} from 'react-router-dom';

import {Action} from "../../redux/topics/redux";
import TopicDetail from "../components/Topics/TopicDetail";
import {ContentContainer} from "../components/Layout/Layout.Styled";
import PhotoList from "../components/List/PhotoList";

const TopicBySlugContainer = () => {
    const dispatch = useDispatch();

    const match = useRouteMatch();
    const slug = match.params.slug

    const topicBySlug = useSelector(state => state.topics.topicBySlug)
    const topicPhotos = useSelector(state => state.topics.photos)


    useEffect(() => {
        getTopicBySlug()
    }, [slug])

    const getTopicBySlug = () => {
        dispatch(Action.Creators.getTopicBySlug(slug))
    }

    return (
        <Container>
            <ContentContainer>
                <TopicDetail data={topicBySlug}/>
                <PhotoList data={topicPhotos}/>
            </ContentContainer>

        </Container>
    )
}

const Container = styled.div`

`;
export default TopicBySlugContainer;