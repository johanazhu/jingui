import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import pdf from '../svg/pdf.svg';

const Pdf = (props: JqbIconProps) => {
    return <JqbIcon icon={pdf} color="" {...props} />;
};

export default React.memo(Pdf);
