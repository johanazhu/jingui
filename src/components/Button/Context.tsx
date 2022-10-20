import React from 'react';
import { ButtonGroupProps } from './PropType';

type ButtonContextType = {
    parent?: ButtonGroupProps;
};

const ButtonContext = React.createContext<ButtonContextType>({});

export default ButtonContext;
