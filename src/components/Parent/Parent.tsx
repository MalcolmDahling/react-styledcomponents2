import styled, { keyframes } from "styled-components";

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



// const Div = styled.div.attrs(props => ({
//     size: props.size || '1em'
// }))`

//     background-color: red;
//     width: 200px;
//     height: 200px;

//     margin: ${props => props.size};
//     padding: ${props => props.size};
// `;


const stretchAnim = keyframes`
    0% { width:200px; }
    50% { width:400px; }
    100% { width:200px; }
`;

const AnimatedDiv = styled.div`
    width:200px;
    height:200px;
    background-color:blue;
    margin:auto;
    margin-top:10px;

    animation-name: ${stretchAnim};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;




export function Parent(){

    let buttonColor = "blue";

    return(
        <Container>
            <Heading>Rubrik</Heading>
            <Button color={buttonColor}></Button>

            {/* <Div size="20px">asdf</Div> */}

            <AnimatedDiv></AnimatedDiv>

        </Container>
    );
}