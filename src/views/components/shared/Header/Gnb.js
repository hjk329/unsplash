import React from 'react';
import styled from 'styled-components';

import SearchBox from "../SearchBox";
import Nav from "./Nav";
import {IconLogo} from "../../../../icons";
import {DefaultButton} from "../Button/Button.Styled";
import {Link} from "react-router-dom";


const Gnb = () => {
    return (
        <Container>
            <Logo to={'/'}>
                <IconLogo/>
                <LogoText>
                    <h2>Unsplash</h2>
                    <p>Photos for everyone</p>
                </LogoText>
            </Logo>
            <SearchBox shape={'round'}/>
            <Nav/>
            <Buttons>
                <DefaultButton outline>Submit a photo</DefaultButton>
                <DefaultButton>Login</DefaultButton>
                <DefaultButton sort={'event'}>Join free</DefaultButton>

            </Buttons>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 18px;

`;

const LogoText = styled.div`
margin-left: 12px;
  h2{
    font-size: 15px;
    color: #111;
    font-weight: 500;
  }
  p{
    font-size: 13px;
    color: #111;
    font-weight: 500;
    margin-top: 3px;
  }
`;

const Buttons = styled.div`
  display: flex;
`;
export default Gnb;