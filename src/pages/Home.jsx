import {  Card, Footer, Header, Paragraph, PetCard } from "../component/index"
import styled, { createGlobalStyle } from 'styled-components'
import curvaTop from '../layout/images/Group2.svg'
import dunga from "../layout/images/Dunga.svg"
import Forma1TD from '../layout/images/Forma1TD.svg'
import Forma2TD from '../layout/images/Forma2TD.svg'
import { Snackbar } from "../component/Snackbar"

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${p => p.theme.BackGroundColor3};
        background-image: url(${curvaTop});
        background-repeat: no-repeat;
        background-position: top left;

        @media(min-width: 768px) {
            background-image: url(${Forma1TD});
            background-repeat: no-repeat;
            background-position: top left; 
        }

        @media(min-width: 1440px) {
            background-image:  url(${Forma1TD}), url(${Forma2TD});
            background-repeat: no-repeat;
            background-position: top left, top 50% right; 
   
        } 

    };
   

`
const ContainerPet = styled.div`
    width:704px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display:grid;
    grid-gap: 16px;
    margin-bottom:1rem;
    
   
  

    @media(min-width: 768px) {
        grid-template-columns: 344px 344px;
        grid-gap: 16px;
     
    }
    @media(min-width: 1440px) {
        grid-template-columns: 363px 363px 363px;
        grid-gap: 16px;
        width:1105px;

    }
`


const Home = (props) => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Card>
				<Paragraph
					color="blue"
                    margin={{all:'6.375rem 0 2rem 0'}}
					paragraph="Olá! Veja os amigos disponíveis para adoção!"
				/>
			</Card>
            <ContainerPet>
                <PetCard
                    image={dunga}
                    title="Dunga"
                    idade="2 anos"
                    porte="Porte pequeno"
                    descricao="Calmo e educado"
                    cidade="Sorocaba (SP)"
                />
                  <PetCard
                    image={dunga}
                    title="Dunga"
                    idade="2 anos"
                    porte="Porte pequeno"
                    descricao="Calmo e educado"
                    cidade="Sorocaba (SP)"
                />
                  <PetCard
                    image={dunga}
                    title="Dunga"
                    idade="2 anos"
                    porte="Porte pequeno"
                    descricao="Calmo e educado"
                    cidade="Sorocaba (SP)"
                />
                  <PetCard
                    image={dunga}
                    title="Dunga"
                    idade="2 anos"
                    porte="Porte pequeno"
                    descricao="Calmo e educado"
                    cidade="Sorocaba (SP)"
                />
                  <PetCard
                    image={dunga}
                    title="Dunga"
                    idade="2 anos"
                    porte="Porte pequeno"
                    descricao="Calmo e educado"
                    cidade="Sorocaba (SP)"
                />
            </ContainerPet>
            <Snackbar/>
			<Footer fixed />
		</>
	);
};

export {Home};