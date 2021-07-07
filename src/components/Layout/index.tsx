import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface LayoutProps {
    className?: string;
    children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
    const { children } = props;

    return <div className="Layout">{children}</div>;
};

export default React.memo(Layout);
