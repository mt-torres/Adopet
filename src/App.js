import { ThemeProvider } from "styled-components";
import { theme } from "./layout/themes/theme";
import { GlobalStyle } from "./layout/themes/Global";
import Initial from "./pages/Initial";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";

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
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
