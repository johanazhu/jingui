import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import chart from '../svg/chart.svg';

const Chart = (props: JqbIconProps) => {
    return <JqbIcon icon={chart} {...props} />;
};

export default React.memo(Chart);
