import styled from "styled-components";


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
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    width:312px;
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

const Input = (props) => {
    return(
        <Container mb={props.mb}>
            <LabelStyled id={props.id}>{props.label}</LabelStyled>
            <InputStyled placeholder={props.placeholder} type={props.type?props.type:"text"} id={props.id}></InputStyled>
        </Container>
    )


}

export {Input};