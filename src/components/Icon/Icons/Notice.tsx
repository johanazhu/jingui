import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import notice from '../svg/notice.svg';

const Notice = (props: JqbIconProps) => {
    return <JqbIcon icon={notice} {...props} />;
};

export default React.memo(Notice);
