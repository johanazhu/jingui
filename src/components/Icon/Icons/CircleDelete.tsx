import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import circledelete from '../svg/circledelete.svg';

const CircleDelete = (props: JqbIconProps) => {
    return <JqbIcon icon={circledelete} color="grey" {...props} />;
};

export default React.memo(CircleDelete);
