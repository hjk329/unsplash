import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'

import {ContentContainer} from "../components/shared/Layout/Layout.Styled";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photos/redux";
import PhotoList from "../components/shared/List/PhotoList";
import IosLoader from "../components/shared/Loader/IosLoader";


const PhotoListContainer = () => {

    const dispatch = useDispatch();

    const photos = useSelector(state => state.photos)

    const [page, setPage] = useState(1)

    const [inView, setInView] = useState(false)

    const sentinelRef = useRef(null);


    useEffect(() => {
        getPhotos();
    }, [page])

    useEffect(() => {

        let callback = (entries, observer) => {
            entries.forEach(entry => {
                if (sentinelRef.current) {
                    setInView(entry.isIntersecting)
                }
            });
        };

        let observer = new IntersectionObserver(callback, {});
        observer.observe(sentinelRef.current);
        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        }

    }, [])


    useEffect(() => {
        if (inView && photos.list.length > 0) {
            setPage(page + 1)
        }
    }, [inView])

    const getPhotos = () => {
        dispatch(Action.Creators.getPhotos({
            per_page: 12,
            page
        }))
    }

    return (
        <Container>
            <ContentContainer>
                <PhotoList data={photos.list}/>
                <Sentinel ref={sentinelRef}/>
                {
                    inView && <IosLoader/>
                }
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

const Sentinel = styled.div`
  height: 1px;
  pointer-events: none;
`;
export default PhotoListContainer;