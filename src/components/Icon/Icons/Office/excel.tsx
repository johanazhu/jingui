import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import excel from '../../svg/excel.svg';

const Excel = (props: JqbIconProps) => {
    return <JqbIcon icon={excel} color="" {...props} />;
};

export default React.memo(Excel);
