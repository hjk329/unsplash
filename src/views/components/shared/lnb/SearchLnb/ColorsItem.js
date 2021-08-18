import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import qs from "qs";
import _ from "lodash";
import cn from "classnames";
import {Link} from "react-router-dom";

import Contain from "../../Contain";
import DropBox from "../../DropBox";

const ColorsItem = ({query, queryParams}) => {

    const [open, setOpen] = useState(false);

    const color = ["black_and_white", "black", "white", "yellow", "orange", "red", "purple", "magenta", "green", "teal", "blue"]

    return (
        <Container>
            <Name onClick={() => setOpen(v=>!v)}>
                Any color
                <CaretDown/>
            </Name>
            {
                open &&
                <Contain checkContain={() => setOpen(false)}>
                    <DropBox menu={[
                        <DropMenuItem to={`/search/photos/${query}?${qs.stringify({
                            ...(_.omit(queryParams, ['color'])),
                        })}`}
                                      className={cn({isActive: !queryParams?.color})}

                        >Any color</DropMenuItem>,
                        <DropMenuItem to={`/search/photos/${query}?${qs.stringify({
                            ...queryParams,
                            color: 'black_and_white'
                        })}`}
                                      className={cn({isActive: queryParams?.color === 'black_and_white'})}
                        >Black and White</DropMenuItem>,
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
export default ColorsItem;