import {  Card, Footer, Header, Form, Input, Paragraph, Button } from "../component/index"
import styled, { createGlobalStyle } from 'styled-components'
import curvaTop from '../layout/images/Group2.svg'
import patas from '../layout/images/Patas.svg'
import formaEsquerda from '../layout/images/Forma_equerda.svg'
import logo from '../layout/images/logo2.svg'
import { Link } from "react-router-dom"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${p => p.theme.BackGroundColor3};
    background-image: url(${patas}), url(${curvaTop}), url(${formaEsquerda});
    background-repeat: no-repeat;
    background-position: top right, top left, top 72% left; 

};
  
`

const Span = styled.span`
    color: ${p => p.theme.buttonColor};
    text-decoration:underline;
    font-size: 0.75rem;
    margin-top: 1rem;

`

const Login = (props)=> {
       return(
        <>
           <GlobalStyle/> 
            <Header/>  
                <Card margin='5.4rem'>
                    <img src={logo} alt="" />
                    <Paragraph color="blue" marginT='3.54rem' marginB='2.62rem' paragraph="Já tem conta? Faça seu login:"/>
                </Card>
                <Form>
                    <Input
                        type="email"
                        id="email"
                        label="Email"
                        mb
                        placeholder="Insira seu email"
                    />

                    <Input
                        type="password"
                        id="Senha"
                        label="Senha"
                        placeholder="Insira sua senha"
                    />
                    <Link to="/register"><Span>Esqueci minha senha.</Span></Link> 
                  
                    <Button marginTop="1.5rem">Cadastar</Button>
                </Form>
            <Footer/>
        </>
        
    )

}

export default Login;