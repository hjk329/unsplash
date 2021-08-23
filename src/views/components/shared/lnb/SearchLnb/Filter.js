import React from 'react';
import styled, { css } from 'styled-components';
import qs from 'qs';
import { Link, useLocation, useParams } from 'react-router-dom';

import OrientationItem from './OrientationItem';
import ColorsItem from './ColorsItem';
import OrderByItem from './OrderByItem';

const Filter = () => {
  const { query } = useParams()

  const location = useLocation()
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true })

  return (
    <Container>

      {
        Object.keys(queryParams).length > 0
                && <Clear to={`/search/photos/${query}`}>Clear</Clear>
      }

      <OrientationItem query={query} queryParams={queryParams} />
      <ColorsItem query={query} queryParams={queryParams} />
      <OrderByItem query={query} queryParams={queryParams} />

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Clear = styled(Link)`
  display: block;
  line-height: 32px;
  padding: 0 16px;
  color: #767676;
  font-size: 14px;

  &:hover {
    color: #111;
  }
`;
export default Filter;
