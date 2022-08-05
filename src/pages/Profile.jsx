import {  Button, Card, CardPerfil, Footer, Form, Header, Input, Paragraph } from "../component/index"
import styled, { createGlobalStyle } from 'styled-components'
import curvaTop from '../layout/images/Group2.svg'
import Foto from "../layout/images/cracha.png"
import Forma1TD from '../layout/images/Forma1TD.svg'
import Forma2TD from '../layout/images/Forma2TD.svg'
import { useState } from "react"
import { useFirestore } from "../hooks/useFirestore"
import { useAuthContext } from "../hooks/useAuthContext"


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
    const { user } = useAuthContext()

    const [name, setName] = useState('');
    const [ phone, setPhone] = useState('');
    const [ city, setCity] = useState('');
    const [ about, setAbout]  = useState('');
    const { addDocument, response } = useFirestore('userProfile')



    const data ={
        uid: user.uid,
        name,
        phone,
        city,
        about,

    }


    const handleSubimt = (e) =>{
        e.preventDefault()
        addDocument(data)
         console.log(data)
        

    }

       return(
        <>
           <GlobalStyle/> 
            <Header />  
                <Card>
                    <Paragraph color="blue" margin={{all:'0'}} paragraph="Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem."/>
                </Card>
                <Form onSubmit={handleSubimt} color padding={{All:"2rem 1rem"}} margin={{T:"1rem", D:"1.1rem"}} >
                    <H1>Perfil</H1>
                    <CardPerfil photo={Foto}/>
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        optional
                        width='280px'
                        mb='.9rem'
                        id='nome'
                        label="Nome"
                        
                    />
                    <Input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        optional
                        width='280px'
                        mb='1rem'
                        id='telefone'
                        label="Telefone"
                        
                    />
                    <Input
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        optional
                        width='280px'
                        mb='1rem'
                        id='cidade'
                        label="Cidade"
                        
                    />
                    <Input
                        value={about}
                        onChange={e => setAbout(e.target.value)}
                        message
                        optional
                        width='280px'
                        mb='1rem'
                        id='sobre'
                        label="Sobre"
                     />
                    <Button margin='1rem' marginTop='2rem'>Salvar</Button>
                </Form >
            <Footer fixed/>
        </>
        
    )

}

export {Profile};