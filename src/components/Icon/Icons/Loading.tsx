import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import loading from '../svg/loading.svg';

const Loading = (props: JqbIconProps) => {
    return <JqbIcon className="jing-icon--loading" icon={loading} {...props} />;
};

export default React.memo(Loading);
