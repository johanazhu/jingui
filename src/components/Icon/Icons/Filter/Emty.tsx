import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import filterEmty from '../../svg/filter-emty.svg';

const FilterEmty = (props: JqbIconProps) => {
    return <JqbIcon icon={filterEmty} color="grey" {...props} />;
};

export default FilterEmty;
