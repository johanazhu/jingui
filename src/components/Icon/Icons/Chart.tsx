import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import chart from '../svg/chart.svg';

const Chart = (props: JqbIconProps) => {
    return <JqbIcon icon={chart} {...props} />;
};

export default React.memo(Chart);
