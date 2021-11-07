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

const Result = (props: ResultProps) => {
    const { title, subTitle, extra, className, children } = props;

    const _classes = classnames('jing-result', className);

    return (
        <div className={_classes}>
            {renderIcon(props)}
            {title && <div className="jing-result--title">{title}</div>}
            {subTitle && (
                <div className="jing-result--subTitle">{subTitle}</div>
            )}
            {children && <div className="jing-result--content">{children}</div>}
            {extra && <div className="jing-result--extra">{extra}</div>}
        </div>
    );
};

Result.defaultProps = {
    status: 'empty',
};

export default React.memo(Result);
