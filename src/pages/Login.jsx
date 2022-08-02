import {  Card, Footer, Header, Form, Input, Paragraph, Button } from "../component/index"
import styled, { createGlobalStyle } from 'styled-components'
import curvaTop from '../layout/images/Group2.svg'
import patas from '../layout/images/Patas.svg'
import formaEsquerda from '../layout/images/Forma_equerda.svg'
import logo from '../layout/images/logo2.svg'
import Forma1TD from '../layout/images/Forma1TD.svg'
import Forma2TD from '../layout/images/Forma2TD.svg'
import PatasTablet from '../layout/images/PatasTablet.svg'
import PatasDesktop from '../layout/images/PatasDesktop.svg'
import { Link, useNavigate } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"
import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";


const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${p => p.theme.BackGroundColor3};
        background-image: url(${patas}), url(${curvaTop}), url(${formaEsquerda});
        background-repeat: no-repeat;
        background-position: top right, top left, top 72% left; 

        @media(min-width: 768px) {
            background-image: url(${PatasTablet}), url(${Forma1TD}), url(${Forma2TD});
            background-repeat: no-repeat;
            background-position: top right, top left, top 50% right; 
        }
        
        @media(min-width: 1440px) {
            background-image: url(${PatasDesktop}), url(${Forma1TD}), url(${Forma2TD});
            background-repeat: no-repeat;
            background-position: top right, top left, top 50% right; 
           
   
        } 

        @media(max-height: 844px) and (min-width: 768px) {
            background-image: url(${PatasTablet}), url(${Forma1TD}), url(${Forma2TD});
            background-repeat: no-repeat;
            background-position: top right, top left, top 50% right; 
            background-size: 10%, 35%, 6% ;

        }

        
       /*  @media(max-height: 844px) and (min-width: 1440px){
            background-image: url(${PatasDesktop}), url(${Forma1TD}), url(${Forma2TD});
            background-repeat: no-repeat;
            background-position: top right, top left, top 50% right; 
            background-size: 20%, 65%, 15% ;

        } */
    };
  
`

const Span = styled.span`
    color: ${p => p.theme.buttonColor};
    text-decoration:underline;
    font-size: 0.75rem;
    margin-top: 1rem;

`

const Login = (props)=> {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const {login, error, isPending} = useLogin();
    const user  = useAuthContext()



    console.log(user)    
    let navigate = useNavigate();

    const handleSubimt = (e) =>{
        e.preventDefault()
        login(loginEmail, loginPassword)
        
       //if (user) {navigate('/home',{replace: true} )}

    }

       return(
        <>
           <GlobalStyle/> 
            <Header user='false'/>  
                <Card margin='5.4rem'>
                    <img src={logo} alt="" />
                    <Paragraph color="blue" margin={{all:'3.54rem 0 2rem 0'}}  paragraph="Já tem conta? Faça seu login:"/>
                </Card>
                <Form onSubmit={handleSubimt}>
                    <Input
                        width='312px'  
                        type="email"
                        id="email"
                        label="Email"
                        mb='1.25rem'
                        placeholder="Insira seu email"
                        value = {loginEmail}
                        onChange = {e => setLoginEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        id="Senha"
                        label="Senha"
                        placeholder="Insira sua senha"
                        password
                        value = {loginPassword}
                        onChange = {e => setLoginPassword(e.target.value)}
                    />
                    <Link to="/register"><Span>Esqueci minha senha.</Span></Link> 

                    {!isPending && <Button marginTop="1.5rem" >Entrar</Button>}
                    
                    {isPending && <Button marginTop="1.5rem" disabled>Entrando</Button>}
                    {error && <p>{error}</p>}
                </Form>
            <Footer/>
        </>
        
    )

}

export {Login};