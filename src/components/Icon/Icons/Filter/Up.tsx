import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import filterUp from '../../svg/filter-up.svg';

const FilterUp = (props: JqbIconProps) => {
    return <JqbIcon icon={filterUp} color="" {...props} />;
};

export default React.memo(FilterUp);
