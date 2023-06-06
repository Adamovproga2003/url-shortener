import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface MenuItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: string;
    link: string;
}