import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import photo from '../svg/photo.svg';

const Photo = (props: JqbIconProps) => {
    return <JqbIcon icon={photo} color="grey" {...props} />;
};

export default Photo;
