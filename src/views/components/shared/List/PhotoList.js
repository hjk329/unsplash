import React from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";

import PhotoItem from "../Item/PhotoItem";
import {makePhotosGroup} from "../../../../lib/common";
import {Action} from "../../../../redux/popup/redux";


const PhotoList = ({data = []}) => {


    const photoGroup = makePhotosGroup(data);

    const dispatch = useDispatch();

    const onClickItem = (id) => {
        dispatch(Action.Creators.showPopup(id))
    }

    return (
        <Container className={"PhotoListContainer"}>
            <Row className={"Row"}>
                {
                    photoGroup.map((photosGroup, groupIndex) => (
                        <Col>
                            {
                                photosGroup.map((item) => (
                                    <ItemWrapper>
                                        <PhotoItem data={item}
                                                    onClickItem={onClickItem}
                                        />
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
  padding: 0 10px;
`;

const ItemWrapper = styled.div`
    margin-bottom: 20px;
`;

export default PhotoList;