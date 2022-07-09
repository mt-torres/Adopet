import styled from "styled-components";


const FormStyled = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
`


const Form = (props) => {
    return(
        <>
            <FormStyled>
               {props.children}
            </FormStyled>
           
        </>
    )


}

export {Form};