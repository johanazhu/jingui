import React, { FC  } from 'react';
import classnames from 'classnames';
import { PanelProps } from './PropType';


const Panel: FC<PanelProps> = props => {
    const { className, children, title, more  } = props;

    return (
        <div className={classnames('jing-panel', className)}>
            <div className="jing-panel--header">
                {title && (
                    <div className="jing-panel--header-title">{title}</div>
                )}
                {more && <div className="jing-panel--header-more">{more}</div>}
            </div>
            <div className="jing-panel--body">{children}</div>
        </div>
    );
};

export default React.memo(Panel);
