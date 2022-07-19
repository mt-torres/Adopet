import { createGlobalStyle } from "styled-components";
import curvaTop from '../images/Group2.svg';
import curvaDireita from '../images/Forma2.svg';
import Ilustracao from '../images/Ilustracao.svg';
import IlustracaoTablet from '../images/IlustracaoTablet.svg';
import IlustracaoDesktop from '../images/IlustracaoDesktop.svg';
import Forma1TD from '../images/Forma1TD.svg';
import Forma2TD from '../images/Forma2TD.svg';


export const GlobalStyle = createGlobalStyle`

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    ul {
        list-style: none;  
    }
    body {
        font-family: 'Poppins', sans-serif;  
        box-sizing:border-box;
        background-color: ${p => p.theme.BackGroundColor1};
        background-image: url(${curvaTop}), url(${curvaDireita}), url(${Ilustracao});
        background-repeat: no-repeat;
        background-position: top left, top 40% right, left 40% bottom 14%;  
        min-height: 100vh;

        
        
        @media(min-width: 768px) {
            background-image: url(${Forma1TD}), url(${Forma2TD}), url(${IlustracaoTablet});
            background-repeat: no-repeat;
            background-position: top left, top 40% right, left 40% bottom 10%;  

            
        }
        
        @media(max-height: 844px) and (min-width: 768px){
        background-image: url(${Forma1TD}), url(${Forma2TD}), url(${IlustracaoDesktop});
        background-repeat: no-repeat;
        background-position: top left, top 40% right, center bottom ;
        background-size: 35%, 8%, 15% ;

    }
          
        @media(min-width: 1440px) {
            background-image: url(${Forma1TD}), url(${Forma2TD}), url(${IlustracaoDesktop});
            background-repeat: no-repeat;
            background-position: top left, top 40% right, center bottom 10%;

        } 

        @media(max-height: 1080px) and (max-width: 810px) {
           background-position: top left, top 40% right, center bottom 2%;

        }

 


    }

    #root{
        position: relative;
        min-height: 100vh;      
        
    }

    


`;
