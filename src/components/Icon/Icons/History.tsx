import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import history from '../svg/history.svg';

const History = (props: JqbIconProps) => {
    return <JqbIcon icon={history} {...props} />;
};

export default React.memo(History);
