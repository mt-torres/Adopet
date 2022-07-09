import styled from "styled-components";

const ParagrafStyled = styled.p`
    padding: ${p => p.padding? p.padding: '0 3.5rem' };
    text-align: center;
    margin-bottom: ${p => p.marginB? p.marginB: '1.5rem' };
    margin-top: ${p => p.marginT};
    color: ${p => p.color === "blue"? p.theme.fontColor3: p.theme.fontColor1 };
    ${p => p.marginB? console.log(p.marginB):null };
`

const Paragraph = (props) => {
    return(
      
        <ParagrafStyled 
            color={props.color}
            marginB={props.marginB}  
            marginT={props.marginT}  
            padding={props.padding}  
        >{props.paragraph}</ParagrafStyled>
       
    )


}

export {Paragraph};