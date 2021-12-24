import React, {
    FC,
    useRef,
    useEffect,
    memo,
    CSSProperties,
    TouchEvent,
} from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { isDef, noop } from '@/utils';
import IndexAnchor from './IndexAnchor';
import { IndexBarType } from './PropType';

const prefixCls = 'jing-index-bar';

const IndexBar: IndexBarType = (props: any) => {
    const { className, style, children } = props;

    const classes = classnames(prefixCls, className, {});

    // 左边、右边
    //

    const renderSidebar = () => {
        return (
            <div className={`${prefixCls}__sidebar`}>
                <span>A</span>
                <span>B</span>
                <span>C</span>
            </div>
        );
    };

    const renderContent = React.Children.map(children, (element, index) => {
        if (!React.isValidElement(element)) return null;

        return <IndexAnchor index={'1'} />;
    });

    return (
        <div className={classes} style={style}>
            {renderSidebar()}
            {renderContent}
        </div>
    );
};

IndexBar.Anchor = IndexAnchor;

IndexBar.defaultProps = {};

export default memo(IndexBar);
