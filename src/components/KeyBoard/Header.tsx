import React, { useState, useEffect, useRef, forwardRef, memo } from 'react';
import { IconArrow, IconKeyboardSecurity } from '../Icon';
import { HeaderProps } from './PropType';

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

Header.defaultProps = {
    showIcon: true,
};

export default memo(Header);
