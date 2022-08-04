import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import Financial from '../../svg/tabbar-financial.svg';

const TabbarFinancial = (props: JqbIconProps) => {
    return <JqbIcon icon={Financial} color="grey" {...props} />;
};

export default TabbarFinancial;
