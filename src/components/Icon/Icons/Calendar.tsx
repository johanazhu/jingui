import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import calendar from '../svg/calendar.svg';

const Calendar = (props: JqbIconProps) => {
    return <JqbIcon icon={calendar} color="grey" {...props} />;
};

export default React.memo(Calendar);
