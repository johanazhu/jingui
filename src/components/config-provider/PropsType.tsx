export type Theme = 'dark' | 'light';
export type PrimaryColor = string;

export interface ConfigProviderProps {
    theme: Theme;
    primaryColor: PrimaryColor;
}
