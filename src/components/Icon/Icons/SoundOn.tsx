import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import soundon from '../svg/soundon.svg';

const SoundOn = (props: JqbIconProps) => {
    return <JqbIcon icon={soundon} {...props} />;
};

export default React.memo(SoundOn);
