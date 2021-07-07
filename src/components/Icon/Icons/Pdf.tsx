import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import pdf from '../svg/pdf.svg';

const Pdf = (props: JqbIconProps) => {
    return <JqbIcon icon={pdf} color="" {...props} />;
};

export default React.memo(Pdf);
