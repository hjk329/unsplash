import React from 'react';
import styled from 'styled-components'
import SearchBox from "../SearchBox";


const Visual = () => {
    return (
        <Container>
            <SearchBox shape={'square'}/>
        </Container>
    )
}

const Container = styled.div`
  height: 560px;
  background:  url('https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk4fHxib29rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60') 50% /cover no-repeat;
`;
export default Visual;