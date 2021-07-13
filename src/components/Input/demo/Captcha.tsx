import React, { useState } from 'react';
import { Input, Panel } from 'jing-ui';

export default () => {
    const [img, setImg] = useState('http://wx.jingqb.com/certiification.jpg');
    const [value, setValue] = useState('');

    return (
        <div className="jing-page jing-page-input">
            <Panel title="带验证码的输入框">
                <Input.Captcha
                    type="text"
                    maxLength={4}
                    value={value}
                    placeholder="带验证码的输入框"
                    captcha={<img src={img} />}
                    onHandleChangeCaptcha={() => {
                        console.log('更换验证码');
                        setImg(img + '?' + new Date().getTime());
                    }}
                />
            </Panel>
        </div>
    );
};
