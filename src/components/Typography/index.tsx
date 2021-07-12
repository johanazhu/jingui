import * as React from 'react';
import classnames from 'classnames';

export interface TypographyProps {
    className?: string;
    innerHtml?: string;
    children?: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = (props) => {
    const { children, className, innerHtml } = props;

    if (innerHtml) {
        return (
            <div
                className={classnames('jing-typography', className)}
                dangerouslySetInnerHTML={{ __html: innerHtml }}
            />
        );
    }

    return (
        <div className={classnames('jing-typography', className)}>
            {children}
        </div>
    );
};

export default React.memo(Typography);
