import styled, { css } from "styled-components"
import message from '../layout/images/mensagem.svg'

const Container = styled.div`
    display:flex;
    background-color:${p => p.theme.BackGroundColor4};
    z-index:-10;
    width:100%;

    @media(min-width: 768px) {
            width: 344px;
        }
        
        @media(min-width: 1440px) {
            width: 363px;
   
        } 
    
`
const ImageContainer = styled.div`
  padding:1.5rem 1rem 1.5rem 1.5rem;

`
const DescriptionContainer = styled.div`
  padding:1rem 1rem 1rem 0;

`
const P = styled.p`
    ${p => p.cidade? css`
        color:${p => p.theme.fontColor2};
        font-weight:400;
        font-size:0.75rem;
        margin-top: 1.88rem;
        
    
    `:css`
        color:${p => p.theme.fontColor3};
        font-weight:600;
        margin-bottom: 0.5rem;
        
    `}
   

`
const Li = styled.li`
    color:${p => p.theme.fontColor2};
    font-weight:400;
    font-size:0.87rem;
`


const Span = styled.span`
    color:${p => p.theme.fontColor2};
    font-size: 0.625rem;
    margin-left: 0.5rem;


`
const Message = styled.div`
    display:flex;
    align-items: center;
    margin-top:0.44rem;
    

`


const PetCard = (props) => {

    return(
            <Container>
                <ImageContainer>
                    <img src={props.image} alt="" />
                </ImageContainer>
                <DescriptionContainer>
                    <P>{props.title}</P>
                    <ul>
                        <Li>{props.idade}</Li>
                        <Li>{props.porte}</Li>
                        <Li>{props.descricao}</Li>
                    </ul>
                    <P cidade={props.cidade}>{props.cidade}</P>
                    <Message>
                        <img src={message} alt="" />
                        <Span>Falar com responsável</Span>
                    </Message>
                </DescriptionContainer>
            </Container>
    )


}

export {PetCard}