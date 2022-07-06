import styled, { css } from "styled-components";

import logo from '../layout/images/Logos-02.png'
import house from '../layout/images/Casa.png'
import message from '../layout/images/Mensagens.png'
import user from '../layout/images/Usuario.png'

function handleImg({type}){
    if(type==='logo'){
        return css`
         width: 128px;
         height:31px;
        
        `
    }else if(type==='house'){
        return css`
        width: 19.2px;
        height: 23px;
       
       `
    }else if(type==='message'){
        return css`
        width: 23,14px;
        height: 19px;
       
     `
    }else{
        return css`
        width: 48px;
       
       `
    }

}

const Ul = styled.ul`
    margin-left: 48.5px;
    margin-top: 48.5px;
    display: flex;
    align-items: center;

`
const Img = styled.img`
    margin-right: 65px;

   ${handleImg} 

   @media(max-width: 360px) {
    ${p => p.type === 'logo'? css`
        display: none;
    `: null}
    ${p => p.type === 'user'?css`
        display: none;
    `: null}
    
  }

`

const Header = (props) => {
    return(
        <header>
            <Ul>
                <li><a href="#"><Img type="logo" src={logo} alt="" /></a></li>
                <li><a href="#"><Img type="house" src={house} alt="" /></a></li>
                <li><a href="#"><Img type="message" src={message} alt="" /></a></li>
                <li><a href="#"><Img type="user" src={user} alt="" /></a></li>
                
            </Ul>
        </header>
    )


}

export default Header