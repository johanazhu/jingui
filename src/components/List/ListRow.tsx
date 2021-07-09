import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { tuple } from '../_util/type';
import { IconArrow } from 'icons';

const descColorKind = tuple(
    'red',
    'blue',
    'green',
    'orange',
    'yellow',
    'black0',
    'black1',
    'black2',
    'white0',
    'white1',
    'white2',
    'whiteA50',
);

export interface ListRowProps {
    icon?: any;
    title: string;
    descColor?: string;
    desc?: any;
    href?: string;
    autoBreak?: boolean;
    onClick?: () => void;
    onDescClick?: () => void;
    classNameTitle?: string;
}

const ListRow = (props: ListRowProps) => {
    const {
        icon,
        title,
        descColor,
        desc,
        onClick,
        onDescClick,
        href,
        autoBreak,
        classNameTitle,
    } = props;

    const classes = classnames('ListRow', {
        [`ListRow__type_link`]: href || onClick,
        [`ListRow__type_break`]: autoBreak === true,
    });

    let tempJSX;

    const tempJSXInner = (
        <>
            {icon && <span className="ListRow__icon">{icon}</span>}
            <span
                className={
                    icon
                        ? 'ListRow__content ListRow__content_state_hasicon'
                        : 'ListRow__content'
                }
            >
                <span
                    className={classnames(
                        'ListRow__content-title',
                        classNameTitle,
                    )}
                >
                    {title}
                </span>
                <span
                    onClick={onDescClick}
                    className={
                        descColor
                            ? `ListRow__content-desc am-color-${descColor}`
                            : 'ListRow__content-desc'
                    }
                >
                    {desc}
                </span>
            </span>
            {href ||
                (onClick && (
                    <span className="ListRow__link">
                        <IconArrow size="mini" />
                    </span>
                ))}
        </>
    );

    if (href || onClick) {
        tempJSX = (
            <a className={classes} href={href} onClick={onClick}>
                {tempJSXInner}
            </a>
        );
    } else {
        tempJSX = <div className={classes}>{tempJSXInner}</div>;
    }
    return tempJSX;
};

ListRow.propTypes = {
    icon: PropTypes.any,
    title: PropTypes.string,
    descColor: PropTypes.oneOf(descColorKind),
    desc: PropTypes.any,
    href: PropTypes.string,
    autoBreak: PropTypes.bool,
    onClick: PropTypes.func,
    onDescClick: PropTypes.func,
    classNameTitle: PropTypes.string,
};

export default React.memo(ListRow);
