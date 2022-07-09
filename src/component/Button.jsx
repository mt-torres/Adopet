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
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.5s linear;
    :hover{
        background-color:${p => p.theme.buttonColorHover}
    };
    margin-bottom: ${p => p.margin};
    margin-top: ${p => p.marginTop};
`

const Button = (props) => {
    return(
        <Btn marginTop={props.marginTop} margin={props.margin}>{props.children}</Btn>
    )


}

export {Button};