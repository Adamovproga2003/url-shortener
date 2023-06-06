import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setOpen: (isOpen: boolean) => void,
    isOpen: boolean,
    logout: () => void
}