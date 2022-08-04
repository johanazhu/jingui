import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import photofail from '../svg/photo-fail.svg';

const PhotoFail = (props: JqbIconProps) => {
    return <JqbIcon icon={photofail} color="grey" {...props} />;
};

export default PhotoFail;
