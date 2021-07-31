import React from 'react';
import styled from 'styled-components'

import SearchBox from "../SearchBox";


const Visual = () => {
    return (
        <Container>
            <Content>
                <h1>Unsplash</h1>
                <p>
                    The internet’s source of <a href="">freely-usable images.</a>
                </p>
                <p>
                    Powered by creators everywhere.
                </p>
                <SearchBox shape={'square'}/>
                <div className="trend">
                    <p>Trending :
                        <a href="" className={'trend'}>flower, </a>
                        <a href="" className={'trend'}>wallpapers, </a>
                        <a href="" className={'trend'}>backgrounds, </a>
                        <a href="" className={'trend'}>happy, </a>
                        <a href="" className={'trend'}>love </a>
                    </p>
                </div>

                <Bottom>
                    <div className="by">
                        <a href="">Photo of the Day</a> by
                        <a href=""> Fakurian Design</a>
                    </div>
                    <div className="logo">
                        <img className="_11pPi _2OP8p"
                             src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image"/>
                        <div className=""><a href="">Create your website today.</a></div>
                    </div>
                </Bottom>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  height: 560px;
  background:  url('https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk4fHxib29rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60') 50% /cover no-repeat;  display: flex;
  justify-content: center;
  align-items: center;
  
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
  align-items: flex-end;
  
  a{
    text-decoration: none;
    color: hsla(0,0%,100%,.8);
    transition: 0.2s;
    &:hover{
      color: #fff;
    }
  }
`;
export default Visual;