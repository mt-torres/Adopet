import { Link } from "react-router-dom";
import { Button, Card, Footer, Header, Title, Paragraph } from "../component/index"
import Logo from "../layout/images/Logo.svg"

const Initial = (props)=> {
     return(
        <>
            <Header user='false'/>  
            <Card>
                <img src={Logo} alt="" />
                <Title title="Boas-vindas!"/> 
                <Paragraph paragraph="Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!"/>
                <Link to="/login"><Button margin='1rem'>Já tenho Conta</Button></Link> 
                <Link to="/register"><Button>Quero me cadastrar</Button></Link>    
            </Card>
            <Footer/>
        </>
        
    )

}

export {Initial};