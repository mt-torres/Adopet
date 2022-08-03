import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    position:absolute;
    text-align:center;
    top:40px;
    right:-35px;
    padding-top:1rem;
    visibility:hidden;
    visibility:${p => p.transition && 'visible'};
    transition: all .3s linear; 

`

const Ul = styled.ul`
   padding:1rem;
   border-radius:10px;
   transition: all .3s linear; 
   background-color:rgba(54,214,173, 0);
   background-color:${p => p.transition && 'rgba(54,214,173,0.8)'};
   ${p => console.log(p.transition)};
   height:0;
   height:${p => p.transition && '70px'};


`
const Li = styled.li`
    cursor: pointer; 
    margin-bottom:.5rem;  
    font-size: .8rem;
    color:${p => p.theme.fontColor1};
    font-weight:800;

`

const DropdownMenu = (props)=>{
    console.log(props.transition)
    return(
        <>  
        <Container transition={props.transition} onMouseLeave={props.onMouseLeave}  onMouseEnter={props.onMouseEnter}>
            <Ul transition={props.transition}>
            <Link to="/message"><Li>Mensagem</Li></Link>
            <Link to="/profile"><Li>Perfil</Li></Link>
                <Li onClick={props.onClick}>Sair</Li>
            </Ul>

        </Container>
                
            
        </>
    )  

}

export {DropdownMenu}