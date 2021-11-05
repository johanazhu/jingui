import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import fund from '../svg/fund.svg';

const Fund = (props: JqbIconProps) => {
    return <JqbIcon icon={fund} color="" {...props} />;
};

export default React.memo(Fund);
