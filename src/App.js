import { ThemeProvider } from "styled-components";
import { theme } from "./layout/themes/theme";
import Header from "./component/Header";
import { GlobalStyle } from "./layout/themes/Global";
import Footer from "./component/Footer";
import Card from "./component/Card";




function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>  
        <Card title="Boas-vindas!"
          paragraf="Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!"
        />
        <Footer/>
      </ThemeProvider> 
    </>
  );
}

export default App;
