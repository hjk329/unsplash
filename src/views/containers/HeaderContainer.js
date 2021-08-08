import React, {useEffect} from 'react';
import styled from 'styled-components';

import Gnb from "../components/Header/Gnb";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/topics/redux";
import {Route} from "react-router-dom";
import TopicsLnb from "../components/lnb/TopicsLnb";

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
        <Route exact path={['/', '/topics/:slug', 'topics']}>
            <TopicsLnb topics={topics.list}/>
        </Route>
    </Container>
)
}

const Container = styled.div`

`;
export default HeaderContainer;