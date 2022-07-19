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
         margin-right:65px;
        `
    }else if(type==='house'){
        return css`
        width: 19.2px;
        height: 23px;
        margin-right:65px;
       
       `
    }else if(type==='message'){
        return css`
        width: 23,14px;
        height: 19px;
        margin-right:65px;
       
     `
    }else{
        return css`
        position:absolute;
        width: 48px;
        top:0;
        right:0;
       
       `
    }

}
const Container = styled.header`
    box-sizing:border-box;  
    margin:0 49.5px;
    padding-top: 40px;
  
    
`

const Ul = styled.ul`
    display: flex;
    align-items: center;
    height:50px;
    position:relative;

`
const Img = styled.img`
   
   ${handleImg} 

   @media(max-width: 1440px) {
    ${p => p.type === 'logo'? css`
        display: none;
    `: null}

    ${p => p.type === 'user' && p.user?css`
        display: none;
    `:null }
    
  }

  @media(min-width: 1440px) {
    ${p => p.type === 'logo'? css`
        display: none;
    `: null}

    ${p => p.type === 'user' && p.user?css`
        display: none;
    `:null }
    
  }

  @media(min-width: 768px) {

    ${p => p.type === 'logo'? css`
        display: block;
    `: null}
  }

   
 `   
    

const Header = (props) => {
    return(
        <Container>
            <Ul>
                <li><Img type="logo"  src={logo} alt="" /></li>
                <li><Img type="house" src={house} alt="" /></li>
                <li><Img type="message" src={message} alt="" /></li>
                <li><Img type="user" user={props.user} src={user} alt="" /></li>
                
            </Ul>
        </Container>
    )


}

export {Header}