import { ThemeProvider } from "styled-components";
import { theme } from "./layout/themes/theme";
import { GlobalStyle } from "./layout/themes/Global";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Register, Initial, Login, Home, Message, Profile } from "./pages/";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
	const { authIsReady, user }  = useAuthContext()
	
    return (
		<>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					{authIsReady && (
			
					<Routes>					
						<Route path="/" element={user? <Navigate  to="/home"/> :<Initial /> } />
						<Route path="/register" element={user? <Navigate  to="/home"/> :<Register />} />
						<Route path="/login" element={user? <Navigate  to="/home"/> :<Login />} />
						<Route path="/home" element={user? <Home /> : <Navigate  to="/"/> } />
						<Route path="/message" element={user? <Message />:<Navigate  to="/"/> } />
						<Route path="/profile" element={user? <Profile />:<Navigate  to="/"/> } />
					</Routes>

					)}
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
