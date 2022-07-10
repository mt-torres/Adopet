import {  Card, Footer, Header, Paragraph } from "../component/index"
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

const Home = (props)=> {
       return(
        <>
           <GlobalStyle/> 
            <Header />  
                <Card margin='5rem'>
                    <Paragraph color="blue" marginT='0' marginB='2.62rem' paragraph="Olá! Veja os amigos disponíveis para adoção!"/>
                </Card>
              
            <Footer/>
        </>
        
    )

}

export {Home};