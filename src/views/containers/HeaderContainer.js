import React, {useEffect} from 'react';
import styled from 'styled-components';

import TopicLnb from "../components/Header/lnb/TopicLnb";
import Gnb from "../components/Header/Gnb";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/topics/redux";

const HeaderContainer = () => {

    const dispatch = useDispatch();
    const topics = useSelector(state => state.topics);

    useEffect(() => {
        getTopics()
    }, [])

    const getTopics = () => {
        dispatch(Action.Creators.getTopics({
            per_page : 29
        }))
    }


return (
    <Container>
        <Gnb/>
        <TopicLnb topics={topics.list}/>
    </Container>
)
}

const Container = styled.div`

`;
export default HeaderContainer;