import React, {
    useEffect,
    useState,
    useMemo,
    useRef,
    FC,
    memo,
    CSSProperties,
} from 'react';
import classnames from 'classnames';
import { IconPhoto, IconPhotoFail } from '../Icon';
import { isDef } from '@/utils';
import { addUnit } from '@/utils/format/unit';
import { ImageProps } from './PropType';

const prefixCls = 'jing-image';

const Image: FC<ImageProps> = (props) => {
    const {
        className,
        style,
        width,
        height,
        src,
        alt,
        fit,
        round,
        radius,
        showLoading,
        showError,
        loadingIcon,
        errorIcon,
        children,
        onClick,
        onLoad: onPropsLoad,
        onError: onPropsError,
    } = props;

    const [status, setStatus] = useState({ loading: true, error: false });
    const imgRef = useRef<HTMLImageElement>(null);

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--round`]: !!round,
    });

    const _style = useMemo(() => {
        const internalStyle: CSSProperties = { ...style };

        if (isDef(width)) {
            internalStyle.width = addUnit(width);
        }

        if (isDef(height)) {
            internalStyle.height = addUnit(height);
        }

        if (isDef(radius)) {
            internalStyle.overflow = 'hidden';
            internalStyle.borderRadius = addUnit(radius);
        }

        return internalStyle;
    }, [style]);

    useEffect(() => {
        const payload = { error: false, loading: true } as typeof status;
        if (imgRef.current) {
            if (imgRef.current.complete) {
                payload.loading = false;
            } else {
                payload.loading = true;
            }
        }
        setStatus(payload);
    }, [src]);

    const onLoad = (e: React.MouseEvent<HTMLImageElement>) => {
        setStatus({ loading: false, error: false });
        onPropsLoad?.(e);
    };

    const onError = (e: React.MouseEvent<HTMLImageElement>) => {
        setStatus({ loading: false, error: true });
        onPropsError?.(e);
    };

    const renderLoadingIcon = () => {
        if (loadingIcon) return <>{loadingIcon}</>;
        return <IconPhoto size="lg" />;
    };

    const renderErrorIcon = () => {
        if (errorIcon) return <>{errorIcon}</>;
        return <IconPhotoFail size="lg" />;
    };

    const renderImage = () => {
        if (status.error || !src) {
            return null;
        }
        const attrs = {
            className: classnames(`${prefixCls}__img`),
            style: {
                objectFit: fit,
            },
        };

        return (
            <img
                ref={imgRef}
                src={src}
                alt={alt || 'img'}
                onLoad={onLoad}
                onError={onError}
                {...attrs}
            />
        );
    };

    const renderPlaceholder = () => {
        if (status.loading && showLoading) {
            return (
                <div className={`${prefixCls}__loading`}>
                    {renderLoadingIcon()}
                </div>
            );
        }
        if (status.error && showError) {
            return (
                <div className={`${prefixCls}__error`}>{renderErrorIcon()}</div>
            );
        }
        return null;
    };

    return (
        <div className={classes} style={_style} onClick={onClick}>
            {renderImage()}
            {renderPlaceholder()}
            {children}
        </div>
    );
};

Image.defaultProps = {
    fit: 'fill',
    round: false,
    showLoading: true,
    showError: true,
};

export default memo(Image);
