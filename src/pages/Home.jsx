import {  Card, Footer, Header, Paragraph, PetCard } from "../component/index"
import { createGlobalStyle } from 'styled-components'
import curvaTop from '../layout/images/Group2.svg'
import dunga from "../layout/images/Dunga.svg"

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
                <Card>
                    <Paragraph color="blue" marginT='0' marginB='2rem' paragraph="Olá! Veja os amigos disponíveis para adoção!"/>
                </Card>
                <PetCard 
                    image={dunga}
                    title="Dunga"
                    idade="2 anos"
                    porte="Porte pequeno"
                    descricao="Calmo e educado"
                    cidade="Sorocaba (SP)"
                
                />
            <Footer/>
        </>
        
    )

}

export {Home};