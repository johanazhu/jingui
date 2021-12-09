import React, {
    useState,
    useEffect,
    useRef,
    forwardRef,
    TouchEvent,
} from 'react';
import * as PropTypes from 'prop-types';
// import { lock, unlock, clearBodyLocks } from 'tua-body-scroll-lock';
import classnames from 'classnames';
import Portal from './Portal';
import { SPEED } from '@/utils';
import { PopupProps } from './PropType';

const Popup = forwardRef((props: PopupProps, ref: any) => {
    let timer: any = null;
    let timer2: any = null;
    const {
        className,
        show,
        mask,
        children,
        onClose,
        islock,
        isActionSheet,
        model,
        groupStyle,
    } = props;

    const [isShow, setIsShow] = useState('false');
    const [style, setStyle] = useState({});
    const [toggleDisplay, setToggleDisplay] = useState(true);

    const popupRef = useRef<HTMLDivElement>(null);

    let pos = {
        x: 0,
        y: 0,
    };

    useEffect(() => {
        return () => {
            // clearBodyLocks()
            timer = null;
            timer2 = null;
        };
    }, []);

    useEffect(() => {
        if (groupStyle) {
            if (model === 'input') {
                if (show) {
                    setStyle(groupStyle);
                } else {
                    setStyle({});
                }
            } else {
                if (groupStyle.display === 'none') {
                    timer2 = setTimeout(() => {
                        setStyle(groupStyle);
                    }, SPEED + 200);
                } else {
                    setStyle(groupStyle);
                    setToggleDisplay(false);
                }
            }
        }
        return () => {
            timer2 = null;
        };
    }, [show, groupStyle]);

    useEffect(() => {
        if (show && isShow === 'false') {
            if (model === 'input') {
                // lock(popupRef.current)
            } else {
                // 禁止滑动
                // tuaLock();
                // unlock(popupRef.current)
                // lock(popupRef.current)
                // console.log('不让它滑动', window.scrollY);
                // @ts-ignore
                document.body.style = `position: fixed; top: 0;`;
            }
            setIsShow('true');
        } else if (!show && isShow === 'true') {
            // unlock(popupRef.current)
            // @ts-ignore
            document.body.style = '';
            setIsShow('ready');
            timer = setTimeout(function () {
                setIsShow('false');
            }, SPEED + 200);
        }
        return () => {
            timer = null;
            // @ts-ignore
            document.body.style = '';
        };
    }, [show]);

    if (isActionSheet) {
        return (
            <div
                className={classnames(
                    'Popup',
                    `Popup__state_${isShow}`,
                    className,
                )}
                ref={ref}
                style={style}
            >
                <div
                    className="Popup__container"
                    style={{ height: 'auto' }}
                    ref={popupRef}
                >
                    {mask && <div className="Popup__mask" onClick={onClose} />}
                </div>
                {children}
            </div>
        );
    }

    return (
        <>
            {isShow !== 'false' && (
                <Portal>
                    <div
                        className={classnames(
                            'Popup',
                            `Popup__state_${isShow}`,
                            className,
                        )}
                        ref={ref}
                        style={style}
                    >
                        <div className="Popup__container" ref={popupRef}>
                            {mask && (
                                <div
                                    className="Popup__mask"
                                    onClick={onClose}
                                />
                            )}
                        </div>
                        {children}
                    </div>
                </Portal>
            )}
        </>
    );
});

Popup.defaultProps = {
    mask: true,
    islock: true,
    isActionSheet: false,
};

Popup.propTypes = {
    mask: PropTypes.bool,
    children: PropTypes.any,
    onClose: PropTypes.func,
};

export default React.memo(Popup);
