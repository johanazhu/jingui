import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import word from '../../svg/word.svg';

const Word = (props: JqbIconProps) => {
    return <JqbIcon icon={word} color="" {...props} />;
};

export default React.memo(Word);
