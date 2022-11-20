import styled from "styled-components";

const Span = styled.label`
    font-weight:600 ;
    color:${p => p.theme.fontColor3};
    margin-right:auto;
    padding-left:16px;
    margin-bottom:0.5rem;

`
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:0.5rem;

`
const Img = styled.img`
    border-radius:50%;
    width:80px;


`

const SelectPhoto = styled.input`
    color: ${p => p.theme.buttonColor};
    text-decoration:underline;
    font-size: 0.75rem;
    margin-top: 0.1rem;

`



const CardPerfil = (props)=>{

    return(
        <>
            <Span>Foto</Span>
            <Container>
                <Img src={props.photo} alt="" />
                <label for="avatar">Clique para editar</label>
                <SelectPhoto type='file'id="avatar" name="avatar"></SelectPhoto>
            </Container>
        </>
    )  

}

export {CardPerfil}