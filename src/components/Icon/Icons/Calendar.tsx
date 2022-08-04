import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import calendar from '../svg/calendar.svg';

const Calendar = (props: JqbIconProps) => {
    return <JqbIcon icon={calendar} color="grey" {...props} />;
};

export default Calendar;
