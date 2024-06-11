import { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/auth/LoginPage";
import { RegistrationPage } from "./components/auth/RegistrationPage";
import { Sheets } from "./components/sheets/Sheets";

export const AuthContext = createContext(null);

function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const login = (newToken) => {
    localStorage.setItem('token', newToken); // o userData.token si la respuesta envia mas cosas
    setToken(newToken);
  }
  const logout = () => {
    localStorage.removeItem('token') // o userData.token si la respuesta envia mas cosas
    setToken(null);
  }

  return (

    <AuthContext.Provider value={{ token: token, login: login, logout: logout }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/register" element={<RegistrationPage />} />
          {token != null ? [<Route key={"sheets"} exact path="/sheets" element={<Sheets />} />] : []}
          <Route path='*' exact={true} element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

/*
<AuthContext.Provider value={{token: token, login: login, logout: logout}}>
      <BrowserRouter>
        <HeaderComponent />
        <main>
          <LateralComponent />
          <div>
              <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route exact path="/register" element={<RegistrationPage />} />
                {
                  token != null ? [<Route key={"sheets"} exact path="/sheets" element={<RegistrationPage />} />] : []
                }
                <Route path='*' exact={true} element={<div>Not found</div>} />
              </Routes>
          </div>
        </main>
      </BrowserRouter>
      </AuthContext.Provider>
*/
export default App;
