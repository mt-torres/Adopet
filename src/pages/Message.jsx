import {  Button, Card, Footer, Form, Header, Input, Paragraph, PetCard } from "../component/index"
import { createGlobalStyle } from 'styled-components'
import curvaTop from '../layout/images/Group2.svg'

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${p => p.theme.BackGroundColor3};
        background-image: url(${curvaTop});
        background-repeat: no-repeat;
        background-position: top left;

    };
  
`

const Message = (props)=> {
       return(
        <>
           <GlobalStyle/> 
            <Header />  
                <Card>
                    <Paragraph color="blue" marginT='0' marginB='0' paragraph="Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:"/>
                </Card>
                <Form color padding="2rem 1rem" margin="1rem">
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
                    <Button marginTop='1rem'>Enviar</Button>
                </Form>
            <Footer/>
        </>
        
    )

}

export {Message};