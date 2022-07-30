import { ThemeProvider } from "styled-components";
import { theme } from "./layout/themes/theme";
import { GlobalStyle } from "./layout/themes/Global";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Register, Initial, Login, Home, Message, Profile } from "./pages/";

function App() {
    return (
		<>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Routes>					
						<Route path="/" element={<Initial />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/home" element={<Home />} />
						<Route path="/message" element={<Message />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
