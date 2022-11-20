import { useState } from "react";
import styled, { css } from "styled-components";
import hide from "../layout/images/hide.svg"
import show from "../layout/images/show.svg"

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items:${p => p.optional? 'flex-start':'center'};
    margin-bottom: ${p => p.mb? p.mb:0};

`
const InputStyled = styled.input`
    font-family: 'Poppins', sans-serif;
    background-color: ${p => p.optional? p.theme.inputBgColor2: p.theme.inputBgColor};
    outline:none;
    border:none;
    border-radius: 6px;
    border-top-right-radius:${p => p.password?'0':'6px'}; 
    border-bottom-right-radius: ${p => p.password?'0':'6px'};
    box-shadow: ${p => p.password?'2px 2px 2px rgba(0, 0, 0, 0.15)':'2px 2px 2px rgba(0, 0, 0, 0.15)'};
    width: ${p => p.password?'250px': p.width};
    height:40px;
    box-sizing: border-box;
    padding: ${p => p.password?'0.75rem 0.75rem 0.75rem 4.5rem':'0.75rem'};
    text-align: ${p => p.optional? 'left':'center'};
    font-size:14px;
    color:${p => p.theme.inputFontColor};

    @media(min-width: 768px) {
        width: ${p => p.password?'430px': '492px'};
    }

    @media(min-width: 1440px) {
      
    } 



`
const LabelStyled = styled.label`
    margin-bottom:0.25rem;
    color: ${p => p.optional? p.theme.fontColor3: p.theme.fontColor2};
    font-weight:${p => p.optional? '600':'400'};
    
`
const ContainerPassword = styled.div`
    display:flex;

`

const CheckPassword = styled.span`
    display:${p => p.password?'block':'none'};
    background: ${p=> p.showPassword?`url(${hide}) no-repeat center`:`url(${show}) no-repeat center`};
    background-color:${p => p.theme.inputBgColor};
    width:62px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    cursor: pointer;
`
const Textarea = styled.textarea`
    resize: none;
    font-family: 'Poppins', sans-serif;
    background-color: ${p => p.optional? p.theme.inputBgColor2: p.theme.inputBgColor};
    outline:none;
    border:none;
    border-radius: 6px;
    border-top-right-radius:${p => p.password?'0':'6px'}; 
    border-bottom-right-radius: ${p => p.password?'0':'6px'};
    box-shadow: ${p => p.password?'2px 2px 2px rgba(0, 0, 0, 0.15)':'2px 2px 2px rgba(0, 0, 0, 0.15)'};
    width: ${p => p.password?'250px': p.width};
    height:124px;
    box-sizing: border-box;
    padding: 0.75rem;
    text-align: ${p => p.optional? 'left':'center'};
    font-size:14px;
    color:${p => p.theme.inputFontColor};
    @media(min-width: 768px) {
        width:492px;
    }

    @media(min-width: 1440px) {
      
    } 
`


const Input = (props) => {
    const [ showPassword, setShowPassword] = useState(false)

    return (
		<Container optional={props.optional} mb={props.mb}>
			<LabelStyled optional={props.optional} id={props.id}>
				{props.label}
			</LabelStyled>
			<ContainerPassword>
                {props.message?
                 <Textarea
                    value={props.value}
                    onChange={props.onChange}
                    optional={props.optional}
                    width={props.width}
                 ></Textarea>
                 
                :   <InputStyled
                        value={props.value}
                        onChange={props.onChange}
                        optional={props.optional}
                        width={props.width}
                        placeholder={props.placeholder}
                        type={showPassword&&props.type==='password'? "text" : props.type}
                        password={props.password}
                        id={props.id}
                    ></InputStyled>
                }
				<CheckPassword showPassword={showPassword} onClick={()=>setShowPassword(state=>!state )} password={props.password}></CheckPassword>
			</ContainerPassword>
		</Container>
	);


}

export {Input};