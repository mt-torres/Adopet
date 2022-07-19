import {  Card, Footer, Header, Form, Input, Paragraph, Button } from "../component/index"
import { createGlobalStyle } from 'styled-components'
import curvaTop from '../layout/images/Group2.svg'
import patas from '../layout/images/Patas.svg'
import formaEsquerda from '../layout/images/Forma_equerda.svg'
import logo from '../layout/images/logo2.svg'
import Forma1TD from '../layout/images/Forma1TD.svg'
import Forma2TD from '../layout/images/Forma2TD.svg'
import PatasTablet from '../layout/images/PatasTablet.svg'
import PatasDesktop from '../layout/images/PatasDesktop.svg';

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
    };
  
`

const Register = (props)=> {
       return(
        <>
           <GlobalStyle/> 
            <Header user='false'/>  
                <Card margin='5.4rem'>
                    <img src={logo} alt="" />
                    <Paragraph color="blue" margin={{all:'1.5rem 0 0.5rem'}} paragraph="Ainda não tem cadastro?"/>
                    <Paragraph color="blue"padding='0 1rem' margin={{all:'0 0 1rem 0'}} paragraph="Então, antes de buscar seu melhor amigo, precisamos de alguns dados:"/>
                </Card>
                <Form padding={{All: '0 0 4rem 0'}}>
                    <Input
                        width='312px'
                        type="email"
                        id="email"
                        label="Email"
                        mb='1.25rem'
                        placeholder="Escolha seu melhor email"
                    />
                    <Input
                        width='312px'  
                        id="Nome"
                        label="Nome"
                        mb='1.25rem'
                        placeholder="Digite seu nome completo"
                    />
                    <Input
                        type="password"
                        id="Senha"
                        label="Senha"
                        mb='1.25rem'
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

export {Register};