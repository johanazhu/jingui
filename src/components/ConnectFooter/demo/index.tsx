import * as React from 'react';
import { ConnectFooter, Toast } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';
import { divide } from 'lodash';
export default () => {

    return (
        <>
            <DemoBlock title="基本用法">
                <ConnectFooter>
                    提交后2个工作日内，业务经理会与您联系，请注意来电。
                </ConnectFooter>
            </DemoBlock>
            <DemoBlock title="左边">
                <ConnectFooter
                    left="账号密码登录"
                    style={{ color: `var(--color-primary)` }}
                    onClickLeft={() => {
                        Toast('点击了账号密码登录')
                    }}
                />
            </DemoBlock>
            <DemoBlock title="左边右边都有">
                <ConnectFooter
                    left="账号密码登录"
                    style={{ color: `var(--color-second-primary)` }}
                    right={<div style={{ color: `var(--color-primary)` }}>我是业务二号</div>}
                />
            </DemoBlock>
        </>
    );
};
