import * as React from 'react';
import classnames from 'classnames';

interface BodyItemProps {
    title: React.ReactNode;
    desc: string;
}

export interface BodyProps {
    list: Array<BodyItemProps>;
    mode?: string;
}

const Body: React.FC<BodyProps> = (props) => {
    const { list, mode } = props;

    // if (mode === )

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

export default React.memo(Body);
