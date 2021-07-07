import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import filterEmty from '../../svg/filter-emty.svg';

const FilterEmty = (props: JqbIconProps) => {
    return <JqbIcon icon={filterEmty} color="grey" {...props} />;
};

export default React.memo(FilterEmty);
