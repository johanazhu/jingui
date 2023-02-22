import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import edit from '../svg/edit.svg';

const Edit = (props: JqbIconProps) => {
    return <JqbIcon icon={edit} fill="#26a4a4" {...props} />;
};

export default Edit;
