import styled from "styled-components";

const Alert = styled.span`
    color: red;
    

`


const ErrorMessage = (props)=>{
   
    return(
        <>  
            <Alert>{props.message}</Alert>                   
        </>
    )  

}

export {ErrorMessage}