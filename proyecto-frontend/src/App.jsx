import { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/auth/LoginPage";
import { RegistrationPage } from "./components/auth/RegistrationPage";
import { SheetsList } from "./components/sheets/SheetsList";
import { CharacterSheet } from "./components/character/CharacterSheetComponent";
import { EditCharacterSheet } from "./components/character/EditCharacterSheet";
import { WelcomeComponent } from "./components/welcome/WelcomeComponent";
import { ProfileComponent } from "./components/player/ProfileComponent";

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
          {token != null ? [<Route key={"welcome"} exact path="/welcome" element={<WelcomeComponent />} />] : []}
          {token != null ? [<Route key={"profile"} exact path="/profile" element={<ProfileComponent />} />] : []}
          {token != null ? [<Route key={"sheets"} exact path="/sheets" element={<SheetsList />} />] : []}
          {token != null ? [<Route key={"CharacterSheet"} exact path="/CharacterSheet" element={<CharacterSheet />} />] : []}
          {token != null ? [<Route key={"NewSheet"} exact path="/newSheet" element={<EditCharacterSheet />} />] : []}
          <Route path='*' exact={true} element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;
