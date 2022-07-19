import styled from "styled-components";

const Container = styled.main`
    margin-top:  ${p => p.margin? p.margin: '4.5rem' };
    margin-bottom:  ${p => p.marginB };
    display: flex;
    flex-direction:column;
    color: ${p=> p.theme.fontColor1};
    align-items: center;
    

    @media(min-width: 768px) {
        margin-top: 11.2rem;
        @media(max-height: 800px){
        margin-top: 0;


        }
    }

          
    @media(min-width: 1440px) {
        margin-top: 2.25rem;

    } 

   

`
const Card = (props) => {

    return(
        <Container margin={props.margin} marginB={props.marginB}>    
            {props.children}
        </Container>
    )

}

export {Card};