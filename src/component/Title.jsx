import styled from "styled-components";

const TitleStyled = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    font-weight: 500;
    font-size: 1.625rem;
    
    
    @media(min-width: 768px) {
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
    }

    @media(max-height: 800px){
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
         

`

const Title = (props) => {
    return(
      
        <TitleStyled>{props.title}</TitleStyled>
       
    )


}

export {Title};