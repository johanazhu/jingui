import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import soundoff from '../svg/soundoff.svg';

const SoundOff = (props: JqbIconProps) => {
    return <JqbIcon icon={soundoff} {...props} />;
};

export default React.memo(SoundOff);
