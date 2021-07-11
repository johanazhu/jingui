import * as React from 'react';

export interface LayoutProps {
    className?: string;
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    const { children } = props;

    return <div className="jing-layout">{children}</div>;
};

export default React.memo(Layout);
