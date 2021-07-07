import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import filter from '../../svg/filter.svg';

const Filter = (props: JqbIconProps) => {
    return <JqbIcon icon={filter} color="grey" {...props} />;
};

export default React.memo(Filter);
