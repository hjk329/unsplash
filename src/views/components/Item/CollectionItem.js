import React from 'react';
import styled from 'styled-components';

const CollectionItem = ({item}) => {

    return (
        <Container>
            <Grid>
                <div className={"first"}>
                    <img src={item.preview_photos?.[0]?.urls.regular} alt=""/>
                </div>
                <div className="second">
                    <img src={item.preview_photos?.[1]?.urls.regular} alt=""/>
                </div>
                <div className="third">
                    <img src={item.preview_photos?.[2]?.urls.regular} alt=""/>
                </div>
            </Grid>


            <Desc>
                <p className={"title"}>{item.title}</p>
                <p className="editor">
                    {item.total_photos} photos Curated by {item.user.name}
                </p>
                <div className="tag">
                    <div className="tag-item">{item.tags?.[0]?.title}</div>
                    <div className="tag-item">{item.tags?.[1]?.title}</div>
                    <div className="tag-item">{item.tags?.[2]?.title}</div>
                </div>
            </Desc>

        </Container>
    )
}

const Container = styled.div`

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5px;
  
  
  & > .first {
    grid-column: span 2;
    grid-row: span 2;
  }
  
  
`;

const Desc = styled.div`
  text-transform: capitalize;
  margin-bottom: 10px;
  
  > .title {
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0;
    
  }
  
  > .editor {
    color: #767676;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 13px;
  }
  
  > .tag{
    display: flex;
    
    > .tag-item {
      cursor: pointer;
      color: #767676;
      border-radius: 2px;
      background: #eee;
      margin: 5px;
      padding: 8px;
      
      &:hover{
        background: #e1e1e1;
        color: #111;
      }
      
    }
  }
`;
export default CollectionItem;