import * as React from 'react';
import classnames from 'classnames';

interface PanelProps {
    className?: string;
    title?: React.ReactNode;
    more?: React.ReactNode;
    children: React.ReactNode;
}

const Panel: React.FC<PanelProps> = ({ className, children, title, more }) => {
    return (
        <div className={classnames('jing-panel', className)}>
            <div className="jing-panel__header">
                {title && (
                    <div className="jing-panel__header__title">{title}</div>
                )}
                {more && <div className="jing-panel__header__more">{more}</div>}
            </div>
            <div className="jing-panel__body">{children}</div>
        </div>
    );
};

export default React.memo(Panel);
