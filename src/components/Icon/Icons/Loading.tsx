import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import loading from '../svg/loading.svg';

const Loading = (props: JqbIconProps) => {
    return <JqbIcon className="jing-icon--loading" icon={loading} {...props} />;
};

export default Loading;
