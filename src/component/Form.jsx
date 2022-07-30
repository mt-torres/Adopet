import styled from "styled-components";


const FormStyled = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:${p => p.color?p.theme.BackGroundColor4: null};
    padding: ${p => p.padding?p.padding.All: '0'};
    margin:${p => p.margin?p.margin.All: '0'};
    border-radius: 10px;
    width: 312px;
    margin-left:auto;
    margin-right:auto;

    @media(min-width: 768px) {
        width: 524px;
        padding: ${p => p.padding?p.padding.T: '0'};
        margin:${p => p.margin?p.margin.T: '0'};  
        margin-left:auto;
        margin-right:auto;
    }

    @media(min-width: 1440px) {
        width: 552px;
        padding: ${p => p.padding?p.padding.D: '0'};
        margin:${p => p.margin?p.margin.D: '0'};  
        margin-left:auto;
        margin-right:auto;
    } 


`


const Form = (props) => {
    return(
        <>
            <FormStyled  onSubmit={props.onSubmit}
                margin={props.margin}
                padding={props.padding}
                color={props.color}>
               {props.children}
            </FormStyled>
           
        </>
    )


}

export {Form};