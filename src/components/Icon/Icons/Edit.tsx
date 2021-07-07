import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import edit from '../svg/edit.svg';

const Edit = (props: JqbIconProps) => {
    return <JqbIcon icon={edit} {...props} />;
};

export default React.memo(Edit);
