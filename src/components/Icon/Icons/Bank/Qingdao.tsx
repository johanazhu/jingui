import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
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
