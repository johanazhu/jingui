import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * SmallConnect 小行内容
 * @param {children} any 渲染的内容
 * @param {right} boolean 列表组件的样式
 * @param {onClick} function 点击回调
 * @param {className} string
 **/
export interface SmallConnectProps {
    children?: React.ReactNode;
    right?: boolean;
    onClick?: () => void;
    className?: string;
}

const SmallConnect = (props: SmallConnectProps) => {
    const { children, right, className, onClick } = props;
    const classes = classnames(className, 'SmallConnect-desc', {
        'am-align-left': !right,
        'am-align-right': right,
    });
    return (
        <div className="SmallConnect" onClick={onClick}>
            <div className={classes}>{children}</div>
        </div>
    );
};

SmallConnect.defaultProps = {
    right: false,
};

export default SmallConnect;
