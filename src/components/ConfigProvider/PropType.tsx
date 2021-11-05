import { ReactNode } from 'react';

export type Theme = 'dark' | 'light';
export type PrimaryColor = string;

export interface ConfigProviderContextProps {
    theme: Theme;
    primaryColor: PrimaryColor;
}
export interface ConfigProviderProps {
    theme: Theme;
    primaryColor: PrimaryColor;
    children: ReactNode;
}
