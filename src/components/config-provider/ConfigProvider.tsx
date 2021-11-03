import React, { FC, useEffect, Context, createContext } from 'react';
import type { ConfigProviderProps } from './PropsType';
import setTheme from './setTheme';

const defaultConfig: ConfigProviderProps = {
    theme: 'light',
    primaryColor: '#3264c8',
};

export const ConfigContext: Context<ConfigProviderProps> =
    createContext(defaultConfig);

const ConfigProvider: FC<ConfigProviderProps> = (props) => {
    const { theme, primaryColor, children } = props;

    useEffect(() => {
        setTheme(theme);
    }, [props]);

    return (
        <ConfigContext.Provider value={{ theme, primaryColor }}>
            {React.Children.only(children)}
        </ConfigContext.Provider>
    );
};

export default React.memo(ConfigProvider);
