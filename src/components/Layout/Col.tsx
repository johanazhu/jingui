import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

export interface ColProps {
    lg?: any;
    md?: any;
    sm?: any;
    xl?: any;
    xs?: any;
    className?: string;
    children?: React.ReactNode;
}

const Col: React.FC<ColProps> = (props) => {
    const { lg, md, sm, xl, xs, children, className } = props;

    let defaultClass = 'jing-col';

    const _lg =
        (typeof lg === 'string' || typeof lg === 'number') &&
        `jing-col-lg-${lg}`;
    const _md =
        (typeof md === 'string' || typeof md === 'number') &&
        `jing-col-md-${md}`;
    const _sm =
        (typeof sm === 'string' || typeof sm === 'number') &&
        `jing-col-sm-${sm}`;
    const _xl =
        (typeof xl === 'string' || typeof xl === 'number') &&
        `jing-col-xl-${xl}`;
    const _xs =
        (typeof xs === 'string' || typeof xs === 'number') && `jing-col-${xs}`;

    const _lgBoolean = typeof lg === 'boolean' && `jing-col-lg`;
    const _mdBoolean = typeof md === 'boolean' && `jing-col-md`;
    const _smBoolean = typeof sm === 'boolean' && `jing-col-sm`;
    const _xlBoolean = typeof xl === 'boolean' && `jing-col-xl`;
    const _xsBoolean = typeof xs === 'boolean' && `jing-col`;

    if (typeof lg !== 'undefined') defaultClass = '';
    if (typeof md !== 'undefined') defaultClass = '';
    if (typeof sm !== 'undefined') defaultClass = '';
    if (typeof xl !== 'undefined') defaultClass = '';
    if (typeof xs !== 'undefined') defaultClass = '';

    let _xsOrder, _mdOrder, _mdOffset, _mdSpan;
    if (typeof xs === 'object') {
        const { order } = xs;
        if (order !== undefined) _xsOrder = `order-${order}`;
        defaultClass = 'jing-col';
    }
    if (typeof md === 'object') {
        const { span, offset, order } = md;

        if (span !== undefined) _mdSpan = `jing-col-md-${span}`;
        if (order !== undefined) _mdOrder = `jing-order-${order}`;
        if (offset !== undefined) _mdOffset = `jing-offset-md-${offset}`;
    }

    const classes = classNames(
        defaultClass,
        className,
        _lg,
        _md,
        _sm,
        _xl,
        _xs,
        _lgBoolean,
        _mdBoolean,
        _smBoolean,
        _xlBoolean,
        _xsBoolean,
        _xsOrder,
        _mdSpan,
        _mdOrder,
        _mdOffset,
    );

    return <div className={classes}>{children}</div>;
};

Col.defaultProps = {};

const colSize = PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.oneOf(['auto']),
]);

const stringOrNumber = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
]);

const column = PropTypes.oneOfType([
    colSize,
    PropTypes.shape({
        size: colSize,
        order: stringOrNumber,
        offset: stringOrNumber,
    }),
]);

Col.propTypes = {
    lg: column,
    md: column,
    sm: column,
    xl: column,
    xs: column,
};

export default React.memo(Col);
