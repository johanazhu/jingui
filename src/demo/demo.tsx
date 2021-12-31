import React, { FC } from 'react';
import classnames from 'classnames';
import './index.scss';

export interface Props {
    className?: string;
    title?: string;
    padding?: string;
    border?: string;
    background?: string;
}

export const DemoBlock: FC<Props> = (props) => {
    return (
        <div className={classnames('jing-demo', props.className)}>
            {props.title && (
                <div className="jing-demo__title">{props.title}</div>
            )}
            <div
                className="jing-demo__content"
                style={{
                    padding: props.padding,
                    background: props.background,
                    border: props.border,
                }}
            >
                {props.children}
            </div>
        </div>
    );
};

DemoBlock.defaultProps = {
    padding: '10px 16px',
    background: '#ffffff',
};
