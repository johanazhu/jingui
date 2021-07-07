import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import history from '../svg/history.svg';

const History = (props: JqbIconProps) => {
    return <JqbIcon icon={history} {...props} />;
};

export default React.memo(History);
