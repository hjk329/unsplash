import React from 'react';
import styled from 'styled-components'

const GridList = ({data = [], children, gutter}) => {
    return (
        <Container>
            <Row guter={gutter}>
                {
                    data.map((item, index) => (
                        <Col key={index}
                            gutter={gutter}>
                            {children(item, index)}
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
  margin: 0 ${(p) => (-1 * Number(p.gutter)) || -10}px;
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 0 ${(p) => p.gutter || 10}px;    
  margin-bottom: 20px;
`;

export default GridList;