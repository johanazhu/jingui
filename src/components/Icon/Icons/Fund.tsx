import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import fund from '../svg/fund.svg';

const Fund = (props: JqbIconProps) => {
    return <JqbIcon icon={fund} color="" {...props} />;
};

export default React.memo(Fund);
