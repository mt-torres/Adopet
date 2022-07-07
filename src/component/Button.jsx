import styled from "styled-components";

const Btn = styled.button`
    background-color: ${p => p.theme.buttonColor};
    color:${p => p.theme.fontColor1};
    width:180px;
    padding:0.75rem 0;
    border-radius: 6px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s linear;
    :hover{
        background-color:${p => p.theme.buttonColorHover}
    };
    margin-bottom: ${p => p.margin};
`

const Button = (props) => {
    return(
        <Btn margin={props.margin}>{props.children}</Btn>
    )


}

export default Button;