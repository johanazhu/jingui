import * as React from 'react';
import Input from '../Input';

// 不同的类型
export interface ListInputProps {
    value: string;
    type: string;
    placeholder: string;
    renderIcon?: any;
    onClick?: () => void;
    isFocus?: boolean;
}

const ListInput = (props: ListInputProps) => {
    const { value, type, placeholder, renderIcon, isFocus } = props;

    return (
        <div className="ListInput1">
            <div className="ListInput1__icon">{renderIcon}</div>
            <Input.Group>
                {/* {type === 'password' &&
                    <Input.Password value={value} placeholder={placeholder} />
                } */}

                {/* <Input.Password type={type} value={value} placeholder={placeholder} />
                <Input.Clear type={type} value={value} placeholder={placeholder} />
                <Input.Verify
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onHandleSendMessage={() => {
                        console.log('调接口')
                    }}
                />
                <Input.Captcha
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    captcha={<img src={'http://wx.jingqb.com/certiification.jpg'} />}
                    onHandleChangeCaptcha={() => {
                        console.log('更换验证码')
                    }}
                /> */}
                <Input.KeyBoard
                    value={value}
                    placeholder={placeholder}
                    isActive={isFocus}
                />

                {/* <Input.Password
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    autofocus
                    onFocus={(e) => {
                        // e.preventDefault();
                        // e.onblur()
                        console.log('11', e)
                    }}
                /> */}
            </Input.Group>
        </div>
    );
};

export default React.memo(ListInput);
