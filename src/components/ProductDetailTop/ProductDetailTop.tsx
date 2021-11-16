import * as React from 'react';
import Header from './Header';
import Body from './Body';
import { ProductDetailTopProps } from './PropType';

const ProductDetailTop: ProductDetailTopProps = (props) => {
    const { children } = props;
    return <div className="ProductDetailTop">{children}</div>;
};

ProductDetailTop.Header = Header;
ProductDetailTop.Body = Body;

export default ProductDetailTop;
