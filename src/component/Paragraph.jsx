import styled, { css } from "styled-components";

function handleDisplayMobile({desktop}){
    if(desktop){
    return    css`
        display:none;
    `
    }else{
        return css`
        display:block; 
    
    `
    }

}

function handleDisplayDesktop({desktop, mobile}){
    if(desktop){
        return css`
        display:block;
    
    `}else if(mobile){
          return css`
          display:none;
        ` 
    }
}



const ParagrafStyled = styled.p`
    padding: ${p => p.padding? p.padding: '0 3.5rem' };
    text-align: center;
    margin: ${p => p.margin.all};
    color: ${p => p.color === "blue"? p.theme.fontColor3: p.theme.fontColor1 };
    ${handleDisplayMobile};

    @media(min-width: 768px) {
       padding: 0 14.2rem;
       ${handleDisplayDesktop};
       margin:${p => p.margin? p.margin.T: p.margin.all };
    }

          
    @media(min-width: 1440px) {
        padding: 0 32.25rem;
        ${handleDisplayDesktop};
        margin: ${p => p.margin.D? p.margin.D: p.margin.all};

    } 

    @media(max-height: 800px){
        margin: ${p => p.margin? p.margin.all: '1.5rem' };

     }
`

const Paragraph = (props) => {

    return(
      
        <ParagrafStyled 
            mobile={props.mobile}
            desktop={props.desktop}
            color={props.color}
            margin={props.margin}  
            padding={props.padding}  
        >{props.paragraph}</ParagrafStyled>
       
    )


}

export {Paragraph};