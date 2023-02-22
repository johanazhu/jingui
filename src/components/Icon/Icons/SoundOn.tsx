import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import soundon from '../svg/soundon.svg';

const SoundOn = (props: JqbIconProps) => {
    return <JqbIcon icon={soundon} fill="#26a4a4" {...props} />;
};

export default SoundOn;
