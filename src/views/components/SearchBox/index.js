import React, {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import cn from 'classnames';
import {IconSearch} from "../../../icons";
import {Button} from "../Button/Button.Styled";


const SearchBox = ({shape}) => {
    const [query, setQuery] = useState('');

    const history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault();
        history.push(`/search/photos/${query}`)
    }

    const onChange = (event) => {
        setQuery(event.target.value);

    }

    return (
        <Container className={cn("SearchBox", shape)}>
            <Form onSubmit={onSubmit}>
                <Label>
                    <StyledButton>
                        <IconSearch/>
                    </StyledButton>
                    <Input type="search" onChange={onChange} id="foo"
                           value={query}
                           placeholder={"Search free high-resolution photos"}
                    />
                </Label>

            </Form>
        </Container>
    )
}

const Container = styled.div`
  flex: 1;

`;

const Form = styled.form`
  display: flex;
  height: 100%;
  width: 100%;


  .round & {
    background: #eee;
    border-radius: 19px;
    height: 38px;

  }

  .square & {
    background: #fff;
    border-radius: 4px;
    height: 54px;
  }
`;

const Label = styled.label`
  display: flex;
  width: 100%;
  padding-left: 10px;


`;

const Input = styled.input`
  display: block;
  width: 100%;
  background: none;
  border: none;
  outline: 0;
  padding: 0 8px;
`;

const StyledButton = styled(Button)`
  background: none;
  
  .round & {
    svg {
      width: 20px;
    }

  }

  .square & {
    svg {
      width: 24px;
    }

  }
  
`;
export default SearchBox;