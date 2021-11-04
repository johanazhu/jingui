import React, {
    useState,
    useEffect,
    useCallback,
    forwardRef,
    useRef,
    FC
} from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { ListProps } from './PropType';



const List:FC<ListProps> = (props) => {
    const {
        className,
        hasArrow,
        icon,
        title,
        description,
        help,
        onClick
    } = props;



    return (
        <div className="jing-list" onClick={onClick}>
            <div className="">

            </div>
        </div>
    );
} 

List.defaultProps = {
    className: '',
    hasArrow: false,

};

List.propTypes = {
    className: PropTypes.string,
    hasArrow: PropTypes.bool
};

export default React.memo(List);
