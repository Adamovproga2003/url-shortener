import { ReactNode, createContext, useContext, useState } from "react";

type aliasContextType = {
    alias: string;
    onChangeAlias: (alias: string) => void
};


const aliasContextDefaultValues: aliasContextType = {
    alias: "",
    onChangeAlias: (alias: string): void => {}
};


const AliasContext = createContext<aliasContextType>(aliasContextDefaultValues);


export function useAlias() {
    return useContext(AliasContext);
}

type Props = {
    children: ReactNode;
};


export function AliasProvider({ children }: Props) {
    const [alias, setAlias] = useState<string>("");

    const onChangeAlias = (alias: string): void => {
        setAlias(alias);
    };

    const value = {
        alias,
        onChangeAlias
    }

    return (
        <>
            <AliasContext.Provider value={value}>
                {children}
            </AliasContext.Provider>
        </>
    );
}

