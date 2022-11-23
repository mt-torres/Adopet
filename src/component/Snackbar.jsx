import styled, { css } from "styled-components";
import success from "../layout/images/success.svg";
import errorIcon from "../layout/images/error.svg";


const Container = styled.div`
    background-color:${p =>p.error?'rgba(207, 83, 61, 0.8)':'rgba(76, 175, 80, 0.8)'};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    padding:.8rem;
    border-radius:10px ;
    text-align: center;
    font-weight:200;
    color:white;
    position: fixed;
    z-index:2;

    transition:all .6s linear;

    ${p=> p.showMessage?css`
        right:10px;
        top:10px;
        opacity:1;
    `:css`
        right:-700px;
        top:10px;
        opacity:0;

    `   
    };


`
const P = styled.p`
    display:flex;
    align-items:center;
    ::before{
        //24px
        content:'';
        background: ${p =>p.error?`url(${errorIcon})`:`url(${success})`};
        width:24px;
        height:24px;
        margin-right:.2rem;
           
    }

`

const Snackbar = (props) => {
    return(
        <Container error={props.error} showMessage={props.showMessage}>
            <P error={props.error}>{props.message}</P>
        </Container>


    )


}

export {Snackbar}