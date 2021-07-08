import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconCircleDelete, IconEyeClose, IconEyeOpen } from 'icons';

export interface ListInputProps {
    value?: string;
    isEyeOn?: boolean;
    onHandleFocus?: (e: any) => void;
    onHandleBlur?: () => void;
    placeholder?: string;
}


function eyeClicked(isEyeOn: any, setIsEyeOn: any) {
    if (isEyeOn === true) {
        setIsEyeOn(false);
    } else {
        setIsEyeOn(true);
    }
}

// function clearClicked(setValue: any) {
//   if (typeof setValue === 'function') {
//     setValue('');
//   }
// }

function inputOnBlur(setIsFocus: any) {
    setTimeout(() => {
        setIsFocus(false);
    }, 250);
}

function inputOnFocus(setIsFocus: any) {
    setIsFocus(true);
}


const ListCustomInput = (props: ListInputProps) => {
    const {
        value,
        onHandleFocus,
        onHandleBlur,
        placeholder,
    } = props;

    const [isFocus, setIsFocus] = React.useState(false);
    const [isEyeOn, setIsEyeOn] = React.useState(props.isEyeOn || false);

    const classes = classNames('ListCustomInput');

    let isShowClear = false;
    if (value !== '' && isFocus === true) {
        isShowClear = true;
    } else {
        isShowClear = false;
    }

    const eyeJSX = (
        <div
            className="ListCustomInput__content-eye"
            onClick={() => {
                eyeClicked(isEyeOn, setIsEyeOn);
            }}>
            {
                isEyeOn ? <IconEyeOpen /> : <IconEyeClose />
            }
        </div>
    )

    const clearJSX = (
        <div
            className="ListCustomInput__content-clear"
            onClick={() => {
                console.log('清')
            }}>
            {
                isShowClear ? (
                    <IconCircleDelete />
                ) : <IconCircleDelete />
            }
        </div>
    )

    return (
        <div className={classes}>
            <div className="ListCustomInput__content">
                {eyeJSX}
                {clearJSX}
                <div
                    onBlur={() => {
                        inputOnBlur(setIsFocus);
                        if (typeof onHandleBlur === 'function') {
                            onHandleBlur()
                        }
                    }}
                    onFocus={(e) => {
                        inputOnFocus(setIsFocus);
                        if (typeof onHandleFocus === 'function') {
                            onHandleFocus(e)
                        }
                    }}
                    className="ListCustomInput__content-input"
                    placeholder={placeholder}>
                    {value}
                </div>
            </div>
        </div>
    );
};

ListCustomInput.propTypes = {
    value: PropTypes.string,
    isEyeOn: PropTypes.bool,
    placeholder: PropTypes.string,
    onHandleFocus: PropTypes.func,
    onHandleBlur: PropTypes.func
};

export default React.memo(ListCustomInput);
