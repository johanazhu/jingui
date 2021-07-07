import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import filterDown from '../../svg/filter-down.svg';

const FilterDown = (props: JqbIconProps) => {
    return <JqbIcon icon={filterDown} color="" {...props} />;
};

export default React.memo(FilterDown);
