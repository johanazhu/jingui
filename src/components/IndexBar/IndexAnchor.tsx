import React, { FC } from 'react';
import classnames from 'classnames';
import { IndexAnchorProps } from './PropType';

const prefixCls = 'jing-index-anchor';

const IndexAnchor: FC<IndexAnchorProps> = (props) => {
    const { className, style, index, children, onClick } = props;
    return (
        <div className={classnames(prefixCls, className)} style={style}>
            <div className="van-index-anchor" onClick={onClick}>
                {index}
            </div>
            {children}
        </div>
    );
};

export default IndexAnchor;
