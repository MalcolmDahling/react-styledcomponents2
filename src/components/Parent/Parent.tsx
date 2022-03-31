import styled from "styled-components";

const Container = styled.div`
    border: 1px solid grey;
    padding: 3em;
`;

const Heading = styled.h1`
    font-size: 1.75em;
    color: pink;
`;

const Button = styled.input.attrs({ type: 'button', value: 'Button' })`
    background-color: ${props => props.color};
    &:hover{ background-color:red };
`;



const Div = styled.div.attrs(props => ({
    size: props.size || '1em'
}))`

    background-color: red;
    width: 200px;
    height: 200px;

    margin: ${props => props.size};
    padding: ${props => props.size};
`;


export function Parent(){

    let buttonColor = "blue";

    return(
        <Container>
            <Heading>Rubrik</Heading>
            <Button color={buttonColor}></Button>

            <Div size="20px">asdf</Div>
        </Container>
    );
}