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
                <Paragraph  margin={{all:"0 0 2rem 0"}} mobile paragraph="Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!"/>
                <Paragraph margin={{T:"0 0 2rem 0", D:"0 0 2rem 0"   }} desktop paragraph="Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje?
Vem com a gente!"/>
                <Link to="/login"><Button margin='1rem'>Já tenho Conta</Button></Link> 
                <Link to="/register"><Button>Quero me cadastrar</Button></Link>    
            </Card>
            <Footer/>
        </>
        
    )

}

export {Initial};