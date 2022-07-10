import styled from "styled-components";
import eyes from "../layout/images/eyes.svg"

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-bottom: ${p => p.mb?'1.25rem':0};

`
const InputStyled = styled.input`
    background-color: ${p => p.theme.inputBgColor};
    outline:none;
    border:none;
    border-radius: 6px;
    border-top-right-radius:${p => p.password?'0':'6px'}; 
    border-bottom-right-radius: ${p => p.password?'0':'6px'};
    box-shadow: ${p => p.password?'3px 2px 2px rgba(0, 0, 0, 0.15)':'2px 2px 2px rgba(0, 0, 0, 0.15)'};
    width: ${p => p.password?'250px':'312px'};
    height:40px;
    box-sizing: border-box;
    padding: 0.75rem;
    text-align:center;
    font-size:12px;
    color:${p => p.theme.inputFontColor};

`
const LabelStyled = styled.label`
    margin-bottom:0.25rem;
    color: ${p => p.theme.fontColor2};
    font-weight:400;
`
const ContainerPassword = styled.div`
    display:flex;

`

const CheckPassword = styled.span`
    display:${p => p.password?'block':'none'};
    background:url(${eyes}) no-repeat center;
    width:62px;
    background-color: ${p => p.theme.inputBgColor};
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    cursor: pointer;
`


const Input = (props) => {

    return(
        <Container mb={props.mb} >
            <LabelStyled id={props.id}>{props.label}</LabelStyled>
            <ContainerPassword>
                <InputStyled placeholder={props.placeholder} type={props.type?props.type:"text"} password={props.password} id={props.id}></InputStyled>
                <CheckPassword password={props.password}></CheckPassword>
            </ContainerPassword>
        </Container>
    )


}

export {Input};