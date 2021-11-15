import * as React from 'react';
import Header, { HeaderProps } from './Header';
import Body, { BodyProps } from './Body';

export interface ProductDetailTopProps extends React.FC {
    Header: React.FC<HeaderProps>;
    Body: React.FC<BodyProps>;
}

const ProductDetailTop: ProductDetailTopProps = (props) => {
    const { children } = props;
    return <div className="ProductDetailTop">{children}</div>;
};

ProductDetailTop.Header = Header;
ProductDetailTop.Body = Body;

export default ProductDetailTop;
