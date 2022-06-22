import React, {
    useState,
    useEffect,
    useCallback,
    forwardRef,
    useRef,
    FC,
} from 'react';
import * as PropTypes from 'prop-types';
import { ListProps } from './PropType';

const List: FC<ListProps> = (props) => {
    const { className, hasArrow, icon, title, description, help, onClick } =
        props;

    return (
        <div className="jing-list" onClick={onClick}>
            <div className=""></div>
        </div>
    );
};

List.defaultProps = {
    className: '',
    hasArrow: false,
};

export default React.memo(List);
