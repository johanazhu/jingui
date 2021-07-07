import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import homework from '../svg/homework.svg';

const Homework = (props: JqbIconProps) => {
    return <JqbIcon icon={homework} {...props} />;
};

export default React.memo(Homework);
