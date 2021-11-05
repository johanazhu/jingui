import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import filterUp from '../../svg/filter-up.svg';

const FilterUp = (props: JqbIconProps) => {
    return <JqbIcon icon={filterUp} color="" {...props} />;
};

export default React.memo(FilterUp);
