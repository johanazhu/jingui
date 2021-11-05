import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import edit from '../svg/edit.svg';

const Edit = (props: JqbIconProps) => {
    return <JqbIcon icon={edit} {...props} />;
};

export default React.memo(Edit);
