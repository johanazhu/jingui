import React, {
    useEffect,
    useState,
    forwardRef,
    useImperativeHandle,
    useRef,
    memo,
} from 'react';
import type { MouseEvent } from 'react';
import classnames from 'classnames';

export interface TabsTitleProps {
    active: boolean; // 是否选中
    value: string;
    label: string; // 值
    disabled?: boolean;
    className?: string;
    icon?: string;
    tagId?: string;
    style?: React.CSSProperties;
    onClick?: (e: MouseEvent) => void;
}

export interface TabsTitleRef {
    scrollTo: (index: string) => void;
}

function useTabActive(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const updateValue = (res: string) => {
        setValue(res);
    };
    return { value, updateValue };
}

function useTabDisabled(initialValue: boolean | undefined) {
    const [value, setValue] = useState(initialValue);

    const updateValue = (res: boolean | undefined) => {
        setValue(res);
    };
    return { value, updateValue };
}

const prefixCls = 'jing-tab';

const Title = forwardRef<TabsTitleRef, TabsTitleProps>((props, ref) => {
    const { active, label, value, disabled, className, icon, style, onClick } =
        props;

    const oValue = useTabActive(value);
    const oDisabled = useTabDisabled(disabled);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        oValue.updateValue(value);
    }, [value]);

    useEffect(() => {
        oDisabled.updateValue(disabled);
    }, [disabled]);

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--active`]: active,
        [`${prefixCls}--disabled`]: oDisabled?.value,
    });

    function scrollTo(index: string) {
        // const body = bodyRef.current
        // if (!body) return
        // const children = body.children
        // for (let i = 0; i < children.length; i++) {
        //     const panel = children.item(i) as HTMLElement
        //     if (!panel) continue
        //     const panelIndex = panel.dataset['index']
        //     if (panelIndex === index) {
        //         body.scrollTop = panel.offsetTop
        //         setActiveIndex(index)
        //         return
        //     }
        // }
    }

    useImperativeHandle(ref, () => ({ scrollTo }));
    // this.$refs.swipe.resize();

    function handleClick(e: MouseEvent<HTMLElement>) {
        onClick?.(e);
    }

    return (
        <div
            ref={rootRef}
            className={classes}
            style={style}
            onClick={handleClick}
            aria-selected={active}
        >
            {icon && <img src={icon} alt="" />}
            {label}
        </div>
    );
});

export default memo(Title);
