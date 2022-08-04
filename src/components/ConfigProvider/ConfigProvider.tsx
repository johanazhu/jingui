import React, { FC, useEffect, Context, createContext } from 'react';
import type {
    ConfigProviderContextProps,
    ConfigProviderProps,
} from './PropType';
import setTheme from './setTheme';
import setPrimaryColor from './setPrimaryColor';

const defaultConfig: ConfigProviderContextProps = {
    theme: 'light',
    primaryColor: '#4664D2',
};

export const ConfigContext: Context<ConfigProviderContextProps> =
    createContext(defaultConfig);

const ConfigProvider: FC<ConfigProviderProps> = (props) => {
    const { theme, primaryColor, children } = props;

    useEffect(() => {
        setTheme(theme);
        setPrimaryColor(primaryColor);
    }, [props]);

    return (
        <ConfigContext.Provider value={{ theme, primaryColor }}>
            {React.Children.only(children)}
        </ConfigContext.Provider>
    );
};

export default ConfigProvider;
