import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import { IconArrow } from 'icons';

export interface RecordListProps {
    leftTopText: string;
    leftBottomText: string;
    rightTopText?: string;
    rightBottomText?: string;
    actionNode?: any;
    hasLink?: boolean;
    colWidth: number;
    rightTopClassName?: string;
    rightBottomClassName?: string;
    onClick?: () => void;
}

const RecordList = (props: RecordListProps) => {
    const {
        leftTopText,
        leftBottomText,
        rightTopText,
        rightBottomText,
        rightTopClassName,
        rightBottomClassName,
        hasLink,
        colWidth,
        onClick,
    } = props;
    const classes = classnames('RecordList', {
        'RecordList-noLink': !hasLink,
        'RecordList-Action': true,
    });

    const leftClasses = classnames(`col-xs-${colWidth}`);
    const rightClasses = classnames(`col-xs-${24 - colWidth} am-align-right`);

    const rightTopClasses = classnames('am-sm ellipsis', rightTopClassName, {
        'RecordList-centerText': !rightBottomText,
    });
    const rightBottomClasses = classnames(
        'am-xs ellipsis',
        rightBottomClassName,
        {
            'RecordList-centerText': !rightTopText,
        },
    );

    function onLinkClick(click: () => void) {
        if (typeof onClick !== 'function') {
            throw new Error(`${click}为函数`);
        } else {
            if (hasLink) {
                click();
            }
        }
    }

    return (
        <div
            className={classes}
            onClick={() => {
                onClick && onLinkClick(onClick);
            }}
        >
            <div className={leftClasses}>
                <div className="am-sm ellipsis">{leftTopText}</div>
                <div className="am-xs ellipsis">{leftBottomText}</div>
            </div>
            <div className={rightClasses}>
                <div className={rightTopClasses}>{rightTopText}</div>
                {rightBottomText && (
                    <div className={rightBottomClasses}>{rightBottomText}</div>
                )}
            </div>
            {hasLink && (
                <span className="RecordList-arrowicon">
                    <IconArrow size="small" />
                </span>
            )}
        </div>
    );
};

RecordList.defaultProps = {
    hasLink: false,
    colWidth: 12,
};

export default React.memo(RecordList);
