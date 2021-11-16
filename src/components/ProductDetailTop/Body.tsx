import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { BodyProps, BodyItemProps } from './PropType';

const Body: FC<BodyProps> = (props) => {
    const { list, mode } = props;

    return (
        <div className="ProductDetailTop__Body">
            {list.map((item: BodyItemProps, i: number) => (
                <div
                    className={classnames('ProductDetailTop__Body-item', mode)}
                    key={i}
                >
                    <div className="ProductDetailTop__Body-item-title">
                        {item.title}
                    </div>
                    <div className="ProductDetailTop__Body-item-desc">
                        {item.desc}
                    </div>
                </div>
            ))}
        </div>
    );
};

Body.defaultProps = {
    mode: 'fourthreethree',
};

export default memo(Body);
