import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import loanMenu from '../../svg/short_cut_menu/loan.svg';

const LoanMenu = (props: JqbIconProps) => {
    return <JqbIcon icon={loanMenu} color="" {...props} />;
};

export default React.memo(LoanMenu);
