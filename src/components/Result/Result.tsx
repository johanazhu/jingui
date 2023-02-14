import * as React from 'react';
import classnames from 'classnames';
import { ExceptionMap, ResultStatusType, ResultProps } from './PropType';

const ExceptionStatus = Object.keys(ExceptionMap);

const renderIcon = ({ status }: ResultProps) => {
    if (ExceptionStatus.includes(status as ResultStatusType)) {
        const SVGComponent = ExceptionMap[status as ResultStatusType];
        return (
            <div className={classnames('jing-result__icon')}>
                <SVGComponent />
            </div>
        );
    }
};

const prefixCls = 'jing-result';

const Result = (props: ResultProps) => {
    const { title, extra, place, className, children } = props;

    const _classes = classnames(prefixCls, className);

    const contentclass = classnames(`${prefixCls}__content`, {
        [`${prefixCls}__content--${place}`]: !!place,
    });

    return (
        <div className={_classes}>
            {renderIcon(props)}
            {title && <div className={`${prefixCls}__title`}>{title}</div>}
            {children && <div className={contentclass}>{children}</div>}
            {extra && <div className={`${prefixCls}__extra`}>{extra}</div>}
        </div>
    );
};

Result.defaultProps = {
    status: 'empty',
    place: 'center',
};

export default Result;
