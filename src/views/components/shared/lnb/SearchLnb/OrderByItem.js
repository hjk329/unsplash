import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import qs from "qs";
import cn from "classnames";
import {Link} from "react-router-dom";

import Contain from "../../Contain";
import DropBox from "../../DropBox";

const OrderByItem = ({query, queryParams}) => {

    const [open, setOpen] = useState(false);


    return (
        <Container>
            <Name onClick={() => setOpen(v=>!v)}>
                Sort by Relevance
                <CaretDown/>
            </Name>
            {
                open &&
                <Contain checkContain={() => setOpen(false)}>
                    <DropBox menu={[
                        <DropMenuItem to={`/search/photos/${query}?${qs.stringify({
                            ...queryParams,
                            order_by: 'relevant'
                        })}`}
                                      className={cn({isActive: queryParams?.order_by === 'relevant'})}
                        >Relevance</DropMenuItem>,
                        <DropMenuItem to={`/search/photos/${query}?${qs.stringify({
                            ...queryParams,
                            order_by: 'latest'
                        })}`}
                                      className={cn({isActive: queryParams?.order_by === 'latest'})}
                        >Newest</DropMenuItem>,
                    ]}
                    />
                </Contain>


            }
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  font-size: 14px;
  color: #767676;
  margin-left: 24px;
  cursor: pointer;
  transition:  0.2s;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  &:hover {
    color: #111;
  }
`;

const CaretDown = styled.div`
  width: 10px;
  height: 10px;
  border: 4px solid transparent;
  border-top-color: #d1d1d1;
  transform: translateY(2px);
  margin-left: 8px;

`;
const DropMenuItem = styled(Link)`
  display: block;
  line-height: 32px;
  font-size: 14px;
  color: #767676;
  padding: 0 16px;
  transition: 0.3s;

  &:hover,
  &.isActive {
    color: #111;

    ${p => !p.disabled & css`
      background: #f5f5f5;
    `}
  }
`;
export default OrderByItem;