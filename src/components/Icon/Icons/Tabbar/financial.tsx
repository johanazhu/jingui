import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import Financial from '../../svg/tabbar-financial.svg';

const TabbarFinancial = (props: JqbIconProps) => {
    return <JqbIcon icon={Financial} color="grey" {...props} />;
};

export default React.memo(TabbarFinancial);
