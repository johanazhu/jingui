import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import filter from '../../svg/filter.svg';

const Filter = (props: JqbIconProps) => {
    return <JqbIcon icon={filter} color="grey" {...props} />;
};

export default React.memo(Filter);
