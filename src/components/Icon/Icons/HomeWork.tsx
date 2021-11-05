import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import homework from '../svg/homework.svg';

const Homework = (props: JqbIconProps) => {
    return <JqbIcon icon={homework} {...props} />;
};

export default React.memo(Homework);
