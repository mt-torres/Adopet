import styled from "styled-components";

const Container = styled.main`
    margin-top:  ${p => p.margin? p.margin: '5rem' };
    display: flex;
    flex-direction:column;
    color: ${p=> p.theme.fontColor1};
    align-items: center;


`
const Card = (props) => {

    return(
        <Container margin={props.margin}>    
            {props.children}
        </Container>
    )

}

export {Card};