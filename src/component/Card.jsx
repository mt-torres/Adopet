import { Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import Logo from "../layout/images/Logo.svg"
import { Button } from "./Button";

const Container = styled.main`
    margin-top:6.1rem;
    display: flex;
    flex-direction:column;
    color: ${p=> p.theme.fontColor1};
    align-items: center;


`
const Title = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    font-weight: 500;
    font-size: 1.625rem;
`
const Paragraf = styled.p`
    padding: 0 3.5rem;
    text-align: center;
    margin-bottom: 1.5rem;

`

const Card = (props) => {
    const {pathname} = useLocation();
    return(
        <Container>
            <img src={Logo} alt="" />
            <Title>{props.title}</Title>
            <Paragraf>{props.paragraf}</Paragraf>
            <Link to="/register" active={pathname === ''}><Button margin='1rem'>Já tenho Conta</Button></Link> 
            <Link to="/register" active={pathname === '/register'}><Button>Quero me cadastrar</Button></Link>
        </Container>
    )

}

export {Card};