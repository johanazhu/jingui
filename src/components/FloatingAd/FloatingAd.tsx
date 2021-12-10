import React, {
    useState,
    useEffect,
    CSSProperties,
    ReactNode,
    FC,
    memo,
    useRef,
} from 'react';

export interface FloatingAdProps {
    children?: ReactNode;
    style?: CSSProperties;
    onClick?: () => void;
}

const prefixCls = 'jing-FloatingAd';

const FloatingAd: FC<FloatingAdProps> = (props) => {
    const { children, onClick, style } = props;

    const [right, setRight] = useState(16);
    const [FloatingAdWidth, setFloatingAdWidth] = useState(75); // 整个屏幕的 1/5
    const [FloatingAdHeight, setFloatingAdHeight] = useState(93.75); // 宽的 1.25 倍
    const rootRef = useRef<any>(null);
    // getBoundingClientRect
    let timer: any;

    useEffect(() => {
        const screenWidth = document.body.clientWidth;
        setFloatingAdWidth(screenWidth / 5);
        setFloatingAdHeight((screenWidth / 5) * 1.25);
    }, []);

    const handleScroll = () => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            handleScrollEnd();
        }, 1500);
        if (rootRef.current) {
            const { width } = rootRef.current.getBoundingClientRect();
            setRight(-width / 2);
        }
    };

    const handleScrollEnd = () => {
        setRight(16);
        clearTimeout(timer);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            timer = null;
        };
    }, []);

    const containerStyle: CSSProperties = {
        position: 'fixed',
        width: FloatingAdWidth,
        height: FloatingAdHeight,
        bottom: 'calc(100px + env(safe-area-inset-bottom))',
        right,
        zIndex: 100,
        transition: 'right 1s',
        ...style,
    };

    return (
        <div
            className={prefixCls}
            ref={rootRef}
            onClick={onClick}
            style={containerStyle}
        >
            {children}
        </div>
    );
};

export default memo(FloatingAd);
