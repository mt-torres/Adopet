import {  Button, Card, Footer, Form, Header, Input, Paragraph } from "../component/index"
import { createGlobalStyle } from 'styled-components'
import curvaTop from '../layout/images/Group2.svg'
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

const Message = (props)=> {
       return(
        <>
           <GlobalStyle/> 
            <Header />  
                <Card>
                    <Paragraph color="blue" margin={{all:'0'}} paragraph="Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:"/>
                </Card>
                <Form color padding={{All:"2rem 1rem"}} margin={{all: '1rem', T:'2rem 0', D:'2rem 0'}}>
                    <Input
                        optional
                        width='280px'
                        mb='.9rem'
                        id='nome'
                        label="Nome"
                        placeholder="Insira seu nome completo"
                    />
                    <Input
                        optional
                        width='280px'
                        mb='1rem'
                        id='telefone'
                        label="Telefone"
                        placeholder="Insira seu telefone e/ou whatsapp"
                    />
                    <Input
                        optional
                        width='280px'
                        mb='1rem'
                        id='nome-animal'
                        label="Nome do animal"
                        placeholder="Por qual animal você se interessou?"
                    />
                    <Input
                        message
                        optional
                        width='280px'
                        mb='1rem'
                        id='message'
                        label="Mensagem"
                        placeholder="Por qual animal você se interessou?"
                    />
                    <Button margin='1rem' marginTop='2rem'>Enviar</Button>
                </Form >
            <Footer fixed/>
        </>
        
    )

}

export {Message};