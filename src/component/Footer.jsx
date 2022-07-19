import styled from "styled-components";


const FooterStyled = styled.footer`
    box-sizing:border-box;
    background-color: ${p => p.theme.BackGroundColor2};
    color: ${p => p.theme.fontColor1};
    width: 100%;
    text-align: center;
    position: ${p=> p.fixed?'relative':'absolute'};
    bottom: 0;

 


`
    const P = styled.p`
    padding: 2.5rem 1rem;

    @media(max-height: 1080px) and (max-width: 810px) {
        padding: 0.5rem 1rem;

    }
    
    @media(max-height: 800px){
        padding: 0.5rem 1rem;

    }

    @media(min-width: 1440px){
        padding: 1.75rem 1rem;

    }



`

const Footer = (props) => {
    
    return(
        <FooterStyled fixed={props.fixed}>
            <P>2022 - Desenvolvido por Marcos Torres</P>
        </FooterStyled>    
    )

}

export {Footer}