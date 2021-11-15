import * as React from 'react';
import classnames from 'classnames';

export interface ProductDetailCardProps {
    hasHeader?: boolean;
    headerLeft: any;
    headerRight?: JSX.Element;
    children: React.ReactNode;
    leftclass?: string;
    onClick?: () => void;
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = (props) => {
    const { hasHeader, children, headerLeft, headerRight, leftclass, onClick } =
        props;

    return (
        <div className="ProductDetailCard">
            {hasHeader && (
                <div className="ProductDetailCard__Header" onClick={onClick}>
                    <div
                        className={classnames(
                            'ProductDetailCard__Header-left',
                            leftclass,
                        )}
                    >
                        {headerLeft}
                    </div>
                    {headerRight && (
                        <div className="ProductDetailCard__Header-right">
                            {headerRight}
                        </div>
                    )}
                </div>
            )}
            <div className="ProductDetailCard__Body">{children}</div>
        </div>
    );
};

ProductDetailCard.defaultProps = {
    hasHeader: false,
};

export default React.memo(ProductDetailCard);
