import { ReactNode, createContext, useContext, useState } from "react";

type authContextType = {
    isAuth: boolean;
    onChangeAuth: (isAuth: boolean) => void;
    name: string | undefined;
    onChangeName: (name: string | undefined) => void;
};


const authContextDefaultValues: authContextType = {
    isAuth: false,
    onChangeAuth: (isAuth: boolean): void => { },
    name: undefined,
    onChangeName: (name: string | undefined): void => { }
};


const AuthContext = createContext<authContextType>(authContextDefaultValues);


export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};


export function AuthProvider({ children }: Props) {
    const [isAuth, setAuth] = useState<boolean>(false);
    const [name, setName] = useState<string | undefined>(undefined);

    const onChangeAuth = (isAuth: boolean): void => {
        setAuth(isAuth);
    };

    const onChangeName = (name: string | undefined): void => {
        setName(name)
    }

    const value = {
        name,
        onChangeName,
        isAuth,
        onChangeAuth
    }

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

