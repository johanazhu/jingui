import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import qingdao from '../../svg/bank/QD.svg';

// 浦发
const QD = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={qingdao}
            {...props}
        />
    );
};

export default React.memo(QD);
