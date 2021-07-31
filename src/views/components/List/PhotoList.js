import React from 'react';
import styled from 'styled-components'
import _ from 'lodash';

import PhotoItem from "../Item/PhotoItem";
import {makePhotosGroup} from "../../../lib/common";


const PhotoList = ({data = []}) => {


    const photoGroup = makePhotosGroup(data);

    return (
        <Container className={"PhotoListContainer"}>
            <Row className={"Row"}>
                {
                    photoGroup.map((photosGroup, groupIndex) => (
                        <Col>
                            {
                                photosGroup.map((item) => (
                                    <ItemWrapper>
                                        <PhotoItem data={item}/>
                                    </ItemWrapper>
                                ))
                            }
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`
  
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 10px;
`;

const ItemWrapper = styled.div`
    padding: 10px 0;
`;

export default PhotoList;