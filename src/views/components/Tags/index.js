import React from 'react';
import styled from 'styled-components';


const Tags = ({tags}) => {
    return (
        <Container>
            {
                tags.map(tag => <Tag>{tag.title}</Tag>)
            }
        </Container>
    )
}

const Container = styled.div`

`;

const Tag = styled.div`
    
`;
export default Tags;