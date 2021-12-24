import React, { useState } from 'react';
import {
    IconBJBank,
    IconBJRCBBank,
    IconBHBank,
    IconGSBank,
    IconGDBank,
    IconGDNXBank,
    IconGFBank,
    IconGZRCBBank,
    IconHFBank,
    IconHXBank,
    IconJSUBank,
    IconJXBank,
    IconJSHBank,
    IconJTBank,
    IconMSBank,
    IconNJBank,
    IconNBBank,
    IconNYBank,
    IconPABank,
    IconPFBank,
    IconQDBank,
    IconSHBank,
    IconXYBank,
    IconYZBank,
    IconZSBank,
    IconZGBank,
    IconZXBank,
    IconUser,
    IconEyeClose,
    IconEyeOpen,
    IconEyeCloseTwo,
    IconEyeOpenTwo,
    IconCircleDelete,
    IconRadioEmpty,
    IconRadioOk,
    IconPhone,
    IconEmail,
    IconMedal,
    IconEdit,
    IconPassword,
    IconCall,
    IconArrow,
    IconRight,
    IconClose,
    IconCircleOk,
    IconRmb,
    IconAuthen,
    IconBack,
    IconCalendar,
    IconCallcenter,
    IconCoin2,
    IconTrash,
    IconFace,
    IconFinger,
    IconGesture,
    IconHelp,
    IconSoundOn,
    IconSoundOff,
    IconIdCard,
    IconIttype,
    IconMagezine,
    IconMoney,
    IconMore,
    IconMore2,
    IconPaper,
    IconPdf,
    IconRefresh,
    IconSecurity,
    IconWaiting,
    IconCheckboxEmpty,
    IconCheckboxOk,
    IconMoneyPlus,
    IconMoneyPlusFull,
    IconExclamation,
    IconCustomer,
    IconNotice,
    IconFZ,
    IconXiaojinguang,
    IconZan,
    IconZanOver,
    IconToastRight,
    IconToastWait,
    IconToastWrong,
    IconTabbarHome,
    IconTabbarFinancial,
    IconTabbarUser,
    IconKeyboardDelete,
    IconKeyboardDeleteLine,
    IconKeyboardSecurity,
    IconKeyboardShift,
    IconKeyboardShiftLine,
    IconFilterDown,
    IconFilterUp,
    IconFilterEmty,
    IconFilter,
    IconOfficeExcel,
    IconOfficePpt,
    IconOfficeWord,
    IconLoanMenu,
    IconMoneyPlusMenu,
    IcontransferMenu,
    IconAddition,
    IconSubtraction,
    IconCalculation,
    IconPhoto,
    IconPhotoFail,
    Row,
    Col,
    Tabs,
} from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <Tabs
                value={value}
                sticky
                onChange={(index) => {
                    index && setValue(index);
                }}
            >
                <Tabs.Panel title="用法示例">
                    <DemoBlock
                        title="基础用法"
                        className="demo-jing-icon"
                        padding=""
                    >
                        <Row justify="start" align="center">
                            <Col span={6}>
                                <IconUser />
                            </Col>
                            <Col span={6}>
                                <IconPhone />
                            </Col>
                        </Row>
                    </DemoBlock>
                    <DemoBlock
                        title="图标颜色"
                        className="demo-jing-icon"
                        padding=""
                    >
                        <Row justify="start" align="center">
                            <Col span={6}>
                                <IconUser color="blue" />
                            </Col>
                            <Col span={6}>
                                <IconUser color="grey" />
                            </Col>
                            <Col span={6} style={{ background: '#ddd' }}>
                                <IconUser color="white" />
                            </Col>
                            <Col span={6}>
                                <IconUser color="black" />
                            </Col>
                            <Col span={6}>
                                <IconUser color="red" />
                            </Col>
                            <Col span={6}>
                                <IconUser color="orange" />
                            </Col>
                            <Col span={6}>
                                <IconUser color="shy-blue" />
                            </Col>
                        </Row>
                    </DemoBlock>
                    <DemoBlock
                        title="图标大小"
                        className="demo-jing-icon"
                        padding=""
                    >
                        <Row justify="start" align="center">
                            <Col span={6}>
                                <IconCall size="sm" />
                            </Col>
                            <Col span={6}>
                                <IconCall size="md" />
                            </Col>
                            <Col span={6}>
                                <IconCall size="lg" />
                            </Col>
                            <Col span={6}>
                                <IconCall size="auto" />
                            </Col>
                        </Row>
                    </DemoBlock>
                    <DemoBlock
                        title="保持原来颜色"
                        className="demo-jing-icon"
                        padding=""
                    >
                        <Row justify="start" align="center">
                            <Col span={6}>
                                <IconPdf />
                            </Col>
                            <Col span={6}>
                                <IconCustomer />
                            </Col>
                            <Col span={6}>
                                <IconXiaojinguang />
                            </Col>
                            <Col span={6}>
                                <IconZanOver />
                            </Col>
                        </Row>
                    </DemoBlock>
                </Tabs.Panel>
                <Tabs.Panel title="基础图案" className="demo-jing-icon">
                    <DemoBlock className="demo-jing-icon" padding="">
                        <Row justify="start" align="center">
                            <Col span={6}>
                                <IconEyeClose />
                                <span>闭眼</span>
                            </Col>
                            <Col span={6}>
                                <IconEyeOpen />
                                <span>睁眼</span>
                            </Col>
                            <Col span={6}>
                                <IconEyeCloseTwo />
                                <span>闭眼2</span>
                            </Col>
                            <Col span={6}>
                                <IconEyeOpenTwo />
                                <span>睁眼2</span>
                            </Col>
                            <Col span={6}>
                                <IconUser />
                                <span>用户</span>
                            </Col>
                            <Col span={6}>
                                <IconCircleDelete />
                                <span>删除圆</span>
                            </Col>
                            <Col span={6}>
                                <IconRadioEmpty />
                                <span>单选为空</span>
                            </Col>
                            <Col span={6}>
                                <IconRadioOk />
                                <span>单选选择</span>
                            </Col>
                            <Col span={6}>
                                <IconPhone />
                                <span>手机</span>
                            </Col>
                            <Col span={6}>
                                <IconEmail />
                                <span>邮箱</span>
                            </Col>
                            <Col span={6}>
                                <IconMedal />
                                <span>媒体</span>
                            </Col>
                            <Col span={6}>
                                <IconEdit />
                                <span>编辑</span>
                            </Col>
                            <Col span={6}>
                                <IconPassword />
                                <span>密码</span>
                            </Col>
                            <Col span={6}>
                                <IconCall />
                                <span>电话</span>
                            </Col>
                            <Col span={6}>
                                <IconArrow />
                                <span>箭头</span>
                            </Col>
                            <Col span={6}>
                                <IconRight />
                                <span>打勾</span>
                            </Col>
                            <Col span={6}>
                                <IconClose />
                                <span>关闭</span>
                            </Col>
                            <Col span={6}>
                                <IconCircleOk />
                                <span>圈圈打勾</span>
                            </Col>
                            <Col span={6}>
                                <IconRmb />
                                <span>人名币￥</span>
                            </Col>
                            <Col span={6}>
                                <IconAuthen />
                                <span>完成状态</span>
                            </Col>
                            <Col span={6}>
                                <IconBack />
                                <span>返回</span>
                            </Col>
                            <Col span={6}>
                                <IconCalendar />
                                <span>日历</span>
                            </Col>
                            <Col span={6}>
                                <IconCallcenter />
                                <span>计算器</span>
                            </Col>
                            <Col span={6}>
                                <IconCoin2 />
                                <span>资产-选择</span>
                            </Col>
                            <Col span={6}>
                                <IconTrash />
                                <span>垃圾桶</span>
                            </Col>
                            <Col span={6}>
                                <IconFace />
                                <span>人脸</span>
                            </Col>
                            <Col span={6}>
                                <IconFinger />
                                <span>指纹</span>
                            </Col>
                            <Col span={6}>
                                <IconGesture />
                                <span>手势密码</span>
                            </Col>
                            <Col span={6}>
                                <IconHelp />
                                <span>帮助</span>
                            </Col>
                            <Col span={6}>
                                <IconSoundOn />
                                <span>声音开</span>
                            </Col>
                            <Col span={6}>
                                <IconSoundOff />
                                <span>声音关</span>
                            </Col>
                            <Col span={6}>
                                <IconIdCard />
                                <span>身份证</span>
                            </Col>
                            <Col span={6}>
                                <IconIttype />
                                <span>授权过的身份</span>
                            </Col>
                            <Col span={6}>
                                <IconMagezine />
                                <span>杂志</span>
                            </Col>
                            <Col span={6}>
                                <IconMoney />
                                <span>钱</span>
                            </Col>
                            <Col span={6}>
                                <IconMore />
                                <span>更多</span>
                            </Col>
                            <Col span={6}>
                                <IconMore2 />
                                <span>等待中</span>
                            </Col>
                            <Col span={6}>
                                <IconPaper />
                                <span>纸</span>
                            </Col>
                            <Col span={6}>
                                <IconRefresh />
                                <span>刷新</span>
                            </Col>
                            <Col span={6}>
                                <IconSecurity />
                                <span>安全-键盘</span>
                            </Col>
                            <Col span={6}>
                                <IconWaiting />
                                <span>等待</span>
                            </Col>
                            <Col span={6}>
                                <IconCheckboxEmpty />
                                <span>选择-空</span>
                            </Col>
                            <Col span={6}>
                                <IconCheckboxOk />
                                <span>选择-打勾</span>
                            </Col>
                            <Col span={6}>
                                <IconMoneyPlus />
                                <span>货币+</span>
                            </Col>
                            <Col span={6}>
                                <IconMoneyPlusFull />
                                <span>货币+2</span>
                            </Col>
                            <Col span={6}>
                                <IconExclamation />
                                <span>感叹</span>
                            </Col>
                            <Col span={6}>
                                <IconCustomer />
                                <span>客服</span>
                            </Col>
                            <Col span={6}>
                                <IconNotice />
                                <span>注意</span>
                            </Col>
                            <Col span={6}>
                                <IconFZ />
                                <span>翻转</span>
                            </Col>
                            <Col span={6}>
                                <IconXiaojinguang />
                                <span>小金罐</span>
                            </Col>
                            <Col span={6}>
                                <IconZan />
                                <span>点赞</span>
                            </Col>
                            <Col span={6}>
                                <IconZanOver />
                                <span>点赞-空</span>
                            </Col>
                            <Col span={6}>
                                <IconPhoto />
                                <span>图片</span>
                            </Col>
                            <Col span={6}>
                                <IconPhotoFail />
                                <span>图片裂开</span>
                            </Col>
                            <Col span={6}>
                                <IconPdf />
                                <span>PDF</span>
                            </Col>
                            <Col span={6}>
                                <IconOfficeExcel />
                                <span>Excel</span>
                            </Col>
                            <Col span={6}>
                                <IconOfficePpt />
                                <span>PPT</span>
                            </Col>
                            <Col span={6}>
                                <IconOfficeWord />
                                <span>Word</span>
                            </Col>
                        </Row>
                    </DemoBlock>
                </Tabs.Panel>
                <Tabs.Panel title="银行卡">
                    <DemoBlock className="demo-jing-icon" padding="">
                        <Row justify="start" align="center">
                            <Col span={6}>
                                <IconBJBank />
                                <span>北京银行</span>
                            </Col>
                            <Col span={6}>
                                <IconBHBank />
                                <span>北京农村商业银行</span>
                            </Col>
                            <Col span={6}>
                                <IconBJRCBBank />
                                <span>渤海银行</span>
                            </Col>
                            <Col span={6}>
                                <IconGSBank />
                                <span>工商银行</span>
                            </Col>
                            <Col span={6}>
                                <IconGDBank />
                                <span>光大银行</span>
                            </Col>
                            <Col span={6}>
                                <IconGDNXBank />
                                <span>广东农信</span>
                            </Col>
                            <Col span={6}>
                                <IconGFBank />
                                <span>广发银行</span>
                            </Col>
                            <Col span={6}>
                                <IconGZRCBBank />
                                <span>广州农村商业银行</span>
                            </Col>
                            <Col span={6}>
                                <IconHFBank />
                                <span>恒丰银行</span>
                            </Col>
                            <Col span={6}>
                                <IconHXBank />
                                <span>华夏银行</span>
                            </Col>
                            <Col span={6}>
                                <IconJSUBank />
                                <span>江苏银行</span>
                            </Col>
                            <Col span={6}>
                                <IconJXBank />
                                <span>江西银行</span>
                            </Col>
                            <Col span={6}>
                                <IconJSHBank />
                                <span>建设银行</span>
                            </Col>
                            <Col span={6}>
                                <IconJTBank />
                                <span>交通银行</span>
                            </Col>
                            <Col span={6}>
                                <IconMSBank />
                                <span>民生银行</span>
                            </Col>
                            <Col span={6}>
                                <IconNJBank />
                                <span>南京银行</span>
                            </Col>
                            <Col span={6}>
                                <IconNBBank />
                                <span>宁波银行</span>
                            </Col>
                            <Col span={6}>
                                <IconNYBank />
                                <span>农业银行</span>
                            </Col>
                            <Col span={6}>
                                <IconPABank />
                                <span>平安银行</span>
                            </Col>
                            <Col span={6}>
                                <IconPFBank />
                                <span>浦发银行</span>
                            </Col>
                            <Col span={6}>
                                <IconQDBank />
                                <span>青岛银行</span>
                            </Col>
                            <Col span={6}>
                                <IconSHBank />
                                <span>上海银行</span>
                            </Col>
                            <Col span={6}>
                                <IconXYBank />
                                <span>兴业银行</span>
                            </Col>
                            <Col span={6}>
                                <IconYZBank />
                                <span>邮政储蓄</span>
                            </Col>
                            <Col span={6}>
                                <IconZSBank />
                                <span>招商银行</span>
                            </Col>
                            <Col span={6}>
                                <IconZGBank />
                                <span>中国银行</span>
                            </Col>
                            <Col span={6}>
                                <IconZXBank />
                                <span>中信银行</span>
                            </Col>
                        </Row>
                    </DemoBlock>
                </Tabs.Panel>
            </Tabs>
        </>
    );
};
