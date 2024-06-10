import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
   
    return (
        <AuthContext.Provider value={{token: token, login: login, logout: logout}}>
             {children}
        </AuthContext.Provider>
    )
};
export const useAuth = () => useContext(AuthContext);