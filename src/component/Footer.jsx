import styled from "styled-components";


const FooterStyled = styled.footer`
    background-color: ${p => p.theme.BackGroundColor2};
    color: ${p => p.theme.fontColor1};
    width: 100%;
    text-align: center;
    position: absolute;
    top: 100%;
    left:0;
`
const P = styled.p`
    padding: 2.5rem 1rem;
`

const Footer = (props) => {
    
    return(
        <FooterStyled>
            <P>2022 - Desenvolvido por Marcos Torres</P>
        </FooterStyled>    
    )

}

export default Footer