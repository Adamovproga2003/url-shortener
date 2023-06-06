import { showErrors, showSuccess, showWarn } from "helpers/alerts";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type responseContextType = {
    message: string | null;
    errors: string[] | null;
    warn: string | null;
    onChangeMessage: (msg: string) => void;
    onChangeErrors: (err: string[]) => void;
    onChangeWarn: (msg: string) => void;
};


const responseContextDefaultValues: responseContextType = {
    message: null,
    errors: null,
    warn: null,
    onChangeMessage: (msg: string) => {},
    onChangeErrors: (err: string[]) => {},
    onChangeWarn: (msg: string): void => {}
};


const ResponseContext = createContext<responseContextType>(responseContextDefaultValues);


export function useResponse() {
    return useContext(ResponseContext);
}

type Props = {
    children: ReactNode;
};


export function ResponseProvider({ children }: Props) {
    const [message, setMessage] = useState<string | null>(null);
    const [errors, setErrors] = useState<string[] | null>(null);
    const [warn, setWarn] = useState<string | null>(null);
 
    const onChangeMessage = (msg: string | null): void => {
        setMessage(msg);
    };

    const onChangeErrors = (err: string[] | null): void => {
        setErrors(err);
    };

    const onChangeWarn = (warn: string | null): void => {
        setWarn(warn);
    };

    const value = {
        message,
        errors,
        warn,
        onChangeMessage,
        onChangeErrors,
        onChangeWarn
    }

    useEffect(() => {
        if (errors && errors.length > 0) {
            showErrors(errors, () => onChangeErrors(null));
        }
    }, [errors]);

    useEffect(() => {
        if (message) {
            showSuccess(message, () => onChangeMessage(null));
        }
    }, [message])

    useEffect(() => {
        if (warn) {
            showWarn(warn, () => onChangeWarn(null));
        }
    }, [warn])

    return (
        <>
            <ResponseContext.Provider value={value}>
                {children}
            </ResponseContext.Provider>
        </>
    );
}

