import React, { FC, useEffect, Context, createContext } from 'react';
import type {
    ConfigProviderContextProps,
    ConfigProviderProps,
} from './PropType';
import setTheme from './setTheme';
import setPrimaryColor from './setPrimaryColor';

const defaultConfig: ConfigProviderContextProps = {
    theme: 'light',
    primaryColor: '#3264c8',
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

export default React.memo(ConfigProvider);
