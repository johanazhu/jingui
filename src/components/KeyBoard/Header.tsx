import React, { useState, useEffect, useRef, forwardRef } from 'react';
import * as PropTypes from 'prop-types';
import { IconArrow, IconKeyboardSecurity } from '../Icon';

export interface HeaderProps {
    onClick?: () => void;
    showIcon?: boolean;
}

const Header = forwardRef((props: HeaderProps, ref: any) => {
    const { onClick, showIcon } = props;

    const [valueHeight, setValueHeight] = useState(0);
    const Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (Ref.current) {
            let hTotal = Math.round(document.body.clientWidth / 1.46);
            const hTitle = Math.round(hTotal * 0.15);
            setValueHeight(hTitle);
        }
    }, [Ref]);

    return (
        <div
            className="jing-keyBoardHeader"
            ref={Ref}
            style={{ height: valueHeight }}
        >
            <div className="jing-keyBoardHeader__left"></div>
            <div className="jing-keyBoardHeader__center">
                <IconKeyboardSecurity
                    // size="md"
                    onClick={(e: any) => {
                        e.stopPropagation();
                    }}
                />
                <span className="jing-keyBoardHeader__center-title">
                    鲸钱包安全键盘
                </span>
            </div>
            <div
                className="jing-keyBoardHeader__right"
                onClick={(e) => {
                    e.stopPropagation();
                    onClick && onClick();
                }}
            >
                {showIcon && <IconArrow size="sm" />}
            </div>
        </div>
    );
});

Header.propTypes = {
    onClick: PropTypes.func,
};

Header.defaultProps = {
    showIcon: true,
};

export default React.memo(Header);
