import React from 'react';
import classnames from 'classnames';
import { tuple } from '../utils';

const PresetColorTypes = tuple(
    'orange',
    'highOrange',
    'white',
    'highWhite',
    'red',
    'blue',
    'yellow',
    'green',
);

export interface TagProps {
    className?: string;
    icon?: React.ReactNode;
    color?: string;
    children: React.ReactNode;
    onClick?: (e?: any) => void;
}

const Tag: React.FC<TagProps> = (props) => {
    const { className, icon, color, children, onClick } = props;

    const PresetStatusColorRegex = new RegExp(
        `^(${PresetColorTypes.join('|')})$`,
    );

    const isPresetColor = (): boolean => {
        if (!color) {
            return false;
        }
        return PresetStatusColorRegex.test(color);
    };

    const tagStyle = {
        backgroundColor: color && !isPresetColor() ? 'color' : undefined,
    };

    const presetColor = isPresetColor();

    return (
        <span
            className={classnames(className, 'jing-tag', {
                [`jing-tag__${color}`]: presetColor,
                [`jing-tag__hasColor`]: color && !presetColor,
            })}
            style={tagStyle}
            onClick={onClick}
        >
            {icon}
            {children}
        </span>
    );
};

export default React.memo(Tag);
