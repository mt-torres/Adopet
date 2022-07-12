import styled from "styled-components";


const FormStyled = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:${p => p.color?p.theme.BackGroundColor4: null};
    padding: ${p => p.padding?p.padding: '0'};
    margin:${p => p.margin?p.margin: '0'};
    border-radius: 10px;
`


const Form = (props) => {
    return(
        <>
            <FormStyled 
                margin={props.margin}
                padding={props.padding}
                color={props.color}>
               {props.children}
            </FormStyled>
           
        </>
    )


}

export {Form};