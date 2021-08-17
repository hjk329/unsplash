import React from 'react';
import styled, {css} from 'styled-components';
import qs from 'qs';
import _ from 'lodash';

import FilterItem from "./FilterItem";
import {Link, useLocation, useParams} from "react-router-dom";

const Filter = () => {

    const {query} = useParams()

    const location = useLocation()
    const queryParams = qs.parse(location.search, {ignoreQueryPrefix: true})

    const color = ["black_and_white", "black", "white", "yellow", "orange", "red", "purple", "magenta", "green", "teal", "blue"]

    return (
        <Container>
            <FilterItem name={'Any orientation'}
                        dropmenu={[
                            <DropMenuItem to={`/search/photos/${query}?${qs.stringify({
                                ...(_.omit(queryParams, ['orientation'])),
                            })}`}>Any orientation</DropMenuItem>,
                            <DropMenuItem to={`/search/photos/${query}?${qs.stringify({
                                ...queryParams,
                                orientation: 'landscape'
                            })}`}>Landscape</DropMenuItem>,
                            <DropMenuItem to={`/search/photos/${query}?${qs.stringify({
                                ...queryParams,
                                orientation: 'portrait'
                            })}`}>Portrait</DropMenuItem>,
                            <DropMenuItem to={`/search/photos/${query}?${qs.stringify({
                                ...queryParams,
                                orientation: 'squarish'
                            })}`}>Square</DropMenuItem>
                        ]}/>
            <FilterItem name={'Any color'}
                        dropmenu={[
                            <DropMenuItem to={`/search/photos/${query}?${qs.stringify({
                                ...(_.omit(queryParams, ['color'])),
                            })}`}>Any color</DropMenuItem>,
                            <DropMenuItem to={`/search/photos/${query}?${qs.stringify({
                                ...queryParams,
                                color: 'black_and_white'
                            })}`}>Black and White</DropMenuItem>,
                            <DropMenuItem disabled>
                                Tones
                                <ColorList>
                                    {
                                        color.map((color) => (
                                            <ColorItem color={color} to={`/search/photos/${query}?${qs.stringify({
                                                ...queryParams,
                                                color
                                            })}`}>
                                                <span/>
                                            </ColorItem>
                                        ))
                                    }
                                </ColorList>
                            </DropMenuItem>,
                        ]}/>
            <FilterItem name={'Any relevance'}
                        dropmenu={[
                            <DropMenuItem to={`/search/photos/${query}?${qs.stringify({
                                ...queryParams,
                                order_by : 'relevant'
                            })}`}>Relevance</DropMenuItem>,
                            <DropMenuItem to={`/search/photos/${query}?${qs.stringify({
                                ...queryParams,
                                order_by: 'latest'
                            })}`}>Newest</DropMenuItem>,
                        ]}/>

        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const DropMenuItem = styled(Link)`
  display: block;
  line-height: 32px;
  font-size: 14px;
  color: #767676;
  padding: 0 16px;
  transition: 0.3s;

  &:hover {
    color: #111;

    ${p => !p.disabled & css`
      background: #f5f5f5;
    `}
  }
`;

const ColorList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColorItem = styled(Link)`
  display: block;
  margin: 1px;
  border: 4px solid transparent;
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    border: 4px solid #eee;
  }

  span {
    display: block;
    background: ${props => props.color};
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }


  &:hover {
    background-color: ${p => p.color};
    border-color: #eee;
  }
`;
export default Filter;