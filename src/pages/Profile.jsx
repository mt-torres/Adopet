import {  Button, Card, CardPerfil, Footer, Form, Header, Input, Paragraph } from "../component/index"
import styled, { createGlobalStyle } from 'styled-components'
import curvaTop from '../layout/images/Group2.svg'
import Foto from "../layout/images/cracha.png"
import Forma1TD from '../layout/images/Forma1TD.svg'
import Forma2TD from '../layout/images/Forma2TD.svg'


const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${p => p.theme.BackGroundColor3};
        background-image: url(${curvaTop});
        background-repeat: no-repeat;
        background-position: top left;

        @media(min-width: 768px) {
            background-image: url(${Forma1TD}), url(${Forma2TD});
            background-repeat: no-repeat;
            background-position: top left, top 50% right; 
        }
        
        @media(min-width: 1440px) {
            background-image: url(${Forma1TD}), url(${Forma2TD});
            background-repeat: no-repeat;
            background-position: top left, top 50% right; 
           
   
        } 

        @media(max-height: 844px) and (min-width: 768px) {
            background-image:  url(${Forma1TD}), url(${Forma2TD});
            background-repeat: no-repeat;
            background-position:  top left, top 50% right; 
            background-size: 35%, 6% ;

        }


    };
  
`

const H1 = styled.h1`
    font-size: 1.4rem;
    font-weight: 600;
    color:${p => p.theme.fontColor2};

    

`

const Profile = (props)=> {
       return(
        <>
           <GlobalStyle/> 
            <Header />  
                <Card>
                    <Paragraph color="blue" margin={{all:'0'}} paragraph="Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem."/>
                </Card>
                <Form color padding={{All:"2rem 1rem"}} margin={{T:"1rem", D:"1.1rem"}} >
                    <H1>Perfil</H1>
                    <CardPerfil photo={Foto}/>
                    <Input
                        optional
                        width='280px'
                        mb='.9rem'
                        id='nome'
                        label="Nome"
                        
                    />
                    <Input
                        optional
                        width='280px'
                        mb='1rem'
                        id='telefone'
                        label="Telefone"
                        
                    />
                    <Input
                        optional
                        width='280px'
                        mb='1rem'
                        id='cidade'
                        label="Cidade"
                        
                    />
                    <Input
                        message
                        optional
                        width='280px'
                        mb='1rem'
                        id='sobre'
                        label="Sobre"
                        placeholder="Por qual animal você se interessou?"
                    />
                    <Button margin='1rem' marginTop='2rem'>Salvar</Button>
                </Form >
            <Footer fixed/>
        </>
        
    )

}

export {Profile};