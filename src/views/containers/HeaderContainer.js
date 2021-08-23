import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Gnb from '../components/shared/Header/Gnb';
import { Action } from '../../redux/topics/redux';
import TopicsLnb from '../components/shared/lnb/TopicsLnb';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics);

  useEffect(() => {
    getTopics()
  }, [])

  const getTopics = () => {
    dispatch(Action.Creators.getTopics({
      per_page: 29,
    }))
  }

  return (
    <Container>
      <Gnb />
      <Route exact path={['/', '/topics/:slug', '/topics']}>
        <TopicsLnb topics={topics.list} />
      </Route>
    </Container>
  )
}

const Container = styled.div`

`;
export default HeaderContainer;
