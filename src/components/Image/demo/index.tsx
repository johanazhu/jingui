import React from 'react';
import { Image, Row, Col, Loading } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const src = 'https://s2.loli.net/2021/12/24/9NUnJXwYVPquDGf.png';
    const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const;
    return (
        <>
            <DemoBlock title="基础用法">
                <Image width="100" height="100" src={src} />
            </DemoBlock>
            <DemoBlock title="填充状态" className="demo-jing-image">
                <Row>
                    {fits.map((item: any, index: number) => (
                        <Col span={8} key={index}>
                            <Image
                                width="100%"
                                height="27vw"
                                fit={item}
                                src={src}
                            />
                            <div className="text">{item}</div>
                        </Col>
                    ))}
                </Row>
            </DemoBlock>
            <DemoBlock title="圆形图片" className="demo-jing-image">
                <Row>
                    {fits.map((item: any, index: number) => (
                        <Col span={8} key={index}>
                            <Image
                                round
                                width="100%"
                                height="27vw"
                                fit={item}
                                src={src}
                            />
                            <div className="text">{item}</div>
                        </Col>
                    ))}
                </Row>
            </DemoBlock>
            <DemoBlock title="加载中提示" className="demo-jing-image">
                <Row>
                    <Col span={8}>
                        <Image width="100%" height="27vw" />
                        <div className="text">默认提示</div>
                    </Col>
                    <Col span={8}>
                        <Image
                            loadingIcon={<Loading type="spinner" />}
                            width="100%"
                            height="27vw"
                        />
                        <div className="text">自定义提示</div>
                    </Col>
                </Row>
            </DemoBlock>
            <DemoBlock title="加载中提示" className="demo-jing-image">
                <Row>
                    <Col span={8}>
                        <Image width="100%" height="27vw" src="x" />
                        <div className="text">默认提示</div>
                    </Col>
                    <Col span={8}>
                        <Image
                            width="100%"
                            height="27vw"
                            src="x"
                            errorIcon={<div>加载失败</div>}
                        />
                        <div className="text">自定义提示</div>
                    </Col>
                </Row>
            </DemoBlock>
        </>
    );
};
