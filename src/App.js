import { ThemeProvider } from "styled-components";
import { theme } from "./layout/themes/theme";
import Header from "./component/Header";
import { GlobalStyle } from "./layout/themes/Global";
import Footer from "./component/Footer";
import Button from "./component/Button";




function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>  
        <Button>Já tenho conta</Button>
        <Footer/>
      </ThemeProvider> 
    </>
  );
}

export default App;
