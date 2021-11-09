import React from 'react';
import { NoticeBar, Panel, Space } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基本用法">
            <NoticeBar text="生活不是这样就是那样，总之，不会是你想的那样。" />
        </DemoBlock>
        <DemoBlock title="滚动播放-scrollable">
            <p>文字较短时，通过设置 scrollable 属性开启滚动播放</p>
            <NoticeBar scrollable text="你的脸，一分天注定，九分看滤镜。" />
            <p>文字较长时，通过禁用 scrollable 属性关闭滚动播放</p>
            <NoticeBar
                scrollable={false}
                text="世界很公平，比你忙的人赚的比你多，比你闲的人你赚的比他少。"
            />
        </DemoBlock>
        <DemoBlock title="动画时长">
            <NoticeBar
                duration={3}
                text="我没有去过你的城市，但我刷过你那的题。"
            />
        </DemoBlock>
        <DemoBlock title="居中">
            <NoticeBar center={false} text="别低头，双下巴会露。" />
        </DemoBlock>
        <DemoBlock title="closeable模式">
            <NoticeBar
                mode="closeable"
                text="单身脱发又没钱，跑步进入中老年。"
                onClose={() => {
                    alert('关闭按钮');
                }}
            />
        </DemoBlock>
        <DemoBlock title="link模式">
            <NoticeBar
                mode="link"
                text="你现在所拥有的，都不曾是你的，因为未来你都会失去。"
                onClick={() => {
                    alert('点击');
                }}
            />
        </DemoBlock>
        <DemoBlock title="点击事件">
            <NoticeBar
                text="如果全世界都不要你了，你要记得还有我，我也不要你。"
                onClick={() => {
                    alert('点击');
                }}
            />
        </DemoBlock>
    </>
);
