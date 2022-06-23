import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { RowProps } from './PropType';

const prefixCls = 'jing-row';

export type RowSpaces = { left?: number; right: number }[];

const Row: FC<RowProps> = (props) => {
    const { className, children, gutter, justify, align, style, onClick } =
        props;

    const classes = classnames(
        prefixCls,
        `${prefixCls}--justify-${justify}`,
        `${prefixCls}--align-${align}`,
        className,
    );

    const groups = () => {
        const groups: number[][] = [[]];

        let totalSpan = 0;
        React.Children.forEach(children, (child, index) => {
            if (!React.isValidElement(child)) return null;
            totalSpan += Number(child.props.span);

            if (totalSpan > 24) {
                groups.push([index]);
                totalSpan -= 24;
            } else {
                groups[groups.length - 1].push(index);
            }
        });

        return groups;
    };

    // const spaces = () => {
    //     const gutter = Number(props.gutter);
    //     const spaces: RowSpaces = [];

    //     if (!gutter) {
    //         return spaces;
    //     }

    //     groups?.forEach((group) => {
    //         const averagePadding = (gutter * (group.length - 1)) / group.length;

    //         group.forEach((item, index) => {
    //             if (index === 0) {
    //                 spaces.push({ right: averagePadding });
    //             } else {
    //                 const left = gutter - spaces[item - 1].right;
    //                 const right = averagePadding - left;
    //                 spaces.push({ left, right });
    //             }
    //         });
    //     });

    //     return spaces;
    // }

    return (
        <div className={classes} style={style} onClick={onClick}>
            {children}
        </div>
    );
};

Row.defaultProps = {
    justify: 'start',
    align: 'top',
};

export default memo(Row);
