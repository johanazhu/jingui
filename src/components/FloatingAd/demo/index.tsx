import * as React from 'react';
import { FloatingAd } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';
import './index.scss';

export default () => {
    const onClickAd = () => {
        alert('点击悬浮广告');
    };

    return (
        <DemoBlock title="基本用法" className="demo-jing-ad">
            <FloatingAd
                onClick={onClickAd}
                style={{ width: '4rem', bottom: '4rem' }}
            >
                <img
                    src="https://s2.loli.net/2021/12/24/9NUnJXwYVPquDGf.png"
                    alt="AD"
                />
            </FloatingAd>
        </DemoBlock>
    );
};
