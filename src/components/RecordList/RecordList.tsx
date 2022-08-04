import React, { FC } from 'react';
import classnames from 'classnames';
import { IconArrow } from '../Icon';
import { RecordListProps } from './PropType';

const prefixCls = 'jing-recordList';

const RecordList: FC<RecordListProps> = (props) => {
    const {
        leftTopText,
        leftBottomText,
        rightTopText,
        rightBottomText,
        rightTopClassName,
        rightBottomClassName,
        link,
        colWidth,
        onClick,
    } = props;

    const classes = classnames(prefixCls, {
        [`${prefixCls}--link`]: !link,
        [`${prefixCls}--action`]: true,
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

    function onLinkClick() {
        if (link) {
            onClick && onClick();
        }
    }

    return (
        <div className={classes} onClick={onLinkClick}>
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
            {link && (
                <span className={`${prefixCls}--arrowicon`}>
                    <IconArrow size="sm" />
                </span>
            )}
        </div>
    );
};

RecordList.defaultProps = {
    link: false,
    colWidth: 12,
};

export default RecordList;
