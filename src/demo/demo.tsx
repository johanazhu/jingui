import React, { FC } from 'react';
import './index.scss';

export interface Props {
    title: string;
    padding?: string;
    border?: string;
    background?: string;
}

export const DemoBlock: FC<Props> = (props) => {
    return (
        <div className="jing-demo">
            <div className="jing-demo__title">{props.title}</div>
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
