import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import zan from '../svg/zan.svg';

const Zan = (props: JqbIconProps) => {
    return <JqbIcon icon={zan} color="" {...props} />;
};

export default React.memo(Zan);
