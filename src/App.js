import { ThemeProvider } from "styled-components";
import { theme } from "./layout/themes/theme";
import { GlobalStyle } from "./layout/themes/Global";
import Initial from "./pages/Initial";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Routes>
            <Route path="/" element={<Initial/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
          </Routes>
        </ThemeProvider> 
      </BrowserRouter>
    </>
  );
}

export default App;
