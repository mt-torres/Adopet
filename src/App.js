import { ThemeProvider } from "styled-components";
import { theme } from "./layout/themes/theme";
import { GlobalStyle } from "./layout/themes/Global";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Register, Initial, Login, Home } from "./pages/";

function App() {
    
    return (
		<>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Routes>
						<Route path="/" element={<Initial />} />
						<Route path="/register" element={<Register />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/Home" element={<Home />} />
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
