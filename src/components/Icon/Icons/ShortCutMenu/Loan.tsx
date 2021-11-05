import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import loanMenu from '../../svg/short_cut_menu/loan.svg';

const LoanMenu = (props: JqbIconProps) => {
    return <JqbIcon icon={loanMenu} color="" {...props} />;
};

export default React.memo(LoanMenu);
