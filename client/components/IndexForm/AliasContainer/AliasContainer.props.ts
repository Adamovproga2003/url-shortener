import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface AliasContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    alias?: string;
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}