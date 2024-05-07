import React, {createContext, useContext, useState,FC,ReactNode } from 'react';

type AuthState = {
  token: string | null;
  isLoggedIn: boolean;
};

// Define a type for the context value
type AuthContextType = {
  auth: AuthState;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
     const [auth, setAuth] = useState<AuthState>({
      token: localStorage.getItem('token'),
      isLoggedIn: !!localStorage.getItem('token')
    });

    const login = (token: string) => {
        setAuth({ token, isLoggedIn: true });
        localStorage.setItem('token', token);  // Optionally storing the token in local storage
    };

    const logout = () => {
        setAuth({ token: null, isLoggedIn: false });
        localStorage.removeItem('token');  // Removing the token from local storage
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};