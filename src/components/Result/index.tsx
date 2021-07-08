import * as React from 'react';
import classnames from 'classnames';

import {
    JqbSuccess,
    JqbFail,
    JqbEmpty,
    JqbCancel,
    JqbNetwork,
    JqbRight,
    JqbWaiting,
    JqbCountdown,
    JqbError404,
    JqbError500,
} from './resultStatus';

export type ResultStatus = 'success' | 'fail' | 'empty' | 'cancel' | 'network' | 'right' | 'waiting' | 'countdown' | '404' | '500';

export const ExceptionMap = {
    success: JqbSuccess,
    fail: JqbFail,
    empty: JqbEmpty,
    cancel: JqbCancel,
    network: JqbNetwork,
    right: JqbRight,
    waiting: JqbWaiting,
    countdown: JqbCountdown,
    '404': JqbError404,
    '500': JqbError500,
};

export type ResultStatusType = keyof typeof ExceptionMap;

export interface ResultProps {
    title?: string;
    subTitle?: string;
    status?: ResultStatus;
    extra?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
}

const ExceptionStatus = Object.keys(ExceptionMap);

const renderIcon = ({ status }: ResultProps) => {
    if (ExceptionStatus.includes(status as ResultStatusType)) {
        const SVGComponent = ExceptionMap[status as ResultStatusType];
        return (
            <div className={classnames('jqb-result__icon')}>
                <SVGComponent />
            </div>
        );
    }
};

const Result = (props: ResultProps) => {
    const { title, subTitle, extra, className, children } = props;

    const _classes = classnames('jqb-result', className);

    return (
        <div className={_classes}>
            {renderIcon(props)}
            {title && <div className="jqb-result__title">{title}</div>}
            {subTitle && <div className="jqb-result__subTitle">{subTitle}</div>}
            {children && <div className="jqb-result__content">{children}</div>}
            {extra && <div className="jqb-result__extra">{extra}</div>}
        </div>
    );
};

Result.defaultProps = {
    status: 'empty',
};

export default React.memo(Result);
