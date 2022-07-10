import {  Card, Footer, Header, Form, Input, Paragraph, Button } from "../component/index"
import { createGlobalStyle } from 'styled-components'
import curvaTop from '../layout/images/Group2.svg'
import patas from '../layout/images/Patas.svg'
import formaEsquerda from '../layout/images/Forma_equerda.svg'
import logo from '../layout/images/logo2.svg'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${p => p.theme.BackGroundColor3};
    background-image: url(${patas}), url(${curvaTop}), url(${formaEsquerda});
    background-repeat: no-repeat;
    background-position: top right, top left, top 72% left; 

};
  
`

const Register = (props)=> {
       return(
        <>
           <GlobalStyle/> 
            <Header/>  
                <Card margin='5.4rem'>
                    <img src={logo} alt="" />
                    <Paragraph color="blue" marginT='1.5rem' marginB='0.5rem' paragraph="Ainda não tem cadastro?"/>
                    <Paragraph color="blue" padding='0 1rem' marginT="0" paragraph="Então, antes de buscar seu melhor amigo, precisamos de alguns dados:"/>
                </Card>
                <Form>
                    <Input
                        type="email"
                        id="email"
                        label="Email"
                        mb
                        placeholder="Escolha seu melhor email"
                    />
                    <Input
                        id="Nome"
                        label="Nome"
                        mb
                        placeholder="Digite seu nome completo"
                    />
                    <Input
                        type="password"
                        id="Senha"
                        label="Senha"
                        mb
                        placeholder="Crie sua senha"
                        password
                    />
                    <Input
                        type="password"
                        id="confirmar-senha"
                        label="Confirmar sua senha"
                        placeholder="Repite a senha criada acima"
                        password
                    />
                    <Button marginTop="1.5rem">Cadastar</Button>
                </Form>
            <Footer/>
        </>
        
    )

}

export default Register;