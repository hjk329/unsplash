import React from 'react';
import styled from 'styled-components'

import SearchBox from "../shared/SearchBox";


const Visual = () => {
    return (
        <Container>
            <Content>
                <h1>Unsplash</h1>
                <p>
                    The internet’s source of <a href="#!">freely-usable images.</a>
                </p>
                <p>
                    Powered by creators everywhere.
                </p>
                <SearchBox shape={'square'}/>
                <div className="trend">
                    <p>Trending :
                        <a href="#!" className={'trend'}>flower, </a>
                        <a href="#!" className={'trend'}>wallpapers, </a>
                        <a href="#!" className={'trend'}>backgrounds, </a>
                        <a href="#!" className={'trend'}>happy, </a>
                        <a href="#!" className={'trend'}>love </a>
                    </p>
                </div>
            </Content>
            <Bottom>
                <div className="by">
                    <p>
                        <a href="#!">Photo of the Day</a> by
                        <a href="#!"> Fakurian Design</a>
                    </p>
                </div>
                <div className="logo">
                    <img className="_11pPi _2OP8p"
                         src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image" alt=""/>
                    <a href="#!">Create your website today.</a>
                </div>
            </Bottom>
        </Container>
    )
}

const Container = styled.div`
  height: 560px;
  background: url("https://images.unsplash.com/photo-1626203662544-69e778ddc0ee?ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1000&amp;h=1000") 50% /cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
  position: relative;

`;

const Content = styled.div`
  max-width: 864px;
  width: 100%;


  h1 {
    font-size: 46px;
    font-weight: 700;
    line-height: 55.2px;
    color: #fff;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    line-height: 28.8px;

    &:nth-child(3n) {
      margin-bottom: 24px;
    }
  }

  > .trend {
    margin-top: 20px;
  }

  a {
    text-decoration: underline;
    color: hsla(0, 0%, 100%, .8);
    transition: 0.2s;

    &:hover {
      color: #fff;
    }

    &.trend {
      text-decoration: none;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 20px 20px;

  > .logo, .by {
    color: hsla(0, 0%, 100%, .55);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      a {
        color: #fff;
      }

      img {
        color: #fff;
      }
    }

    a {
      text-decoration: none;
      color: hsla(0, 0%, 100%, .8);
    }

  }

`;
export default Visual;