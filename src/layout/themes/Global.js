import { createGlobalStyle } from "styled-components";
import curvaTop from '../images/Group2.svg'
import curvaDireita from '../images/Forma2.svg'

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
        background-color: ${p => p.theme.BackGroundColor1};
        background-image: url(${curvaTop}), url(${curvaDireita});
        background-repeat: no-repeat;
        background-position: top left, center right ;   
        height:100vh;    
    
    }

    


`;
