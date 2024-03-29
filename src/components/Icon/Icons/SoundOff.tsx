import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import soundoff from '../svg/soundoff.svg';

const SoundOff = (props: JqbIconProps) => {
    return <JqbIcon icon={soundoff} fill="#26a4a4" {...props} />;
};

export default SoundOff;
