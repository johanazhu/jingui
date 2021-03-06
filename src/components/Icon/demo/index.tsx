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
                <Tabs.Panel title="????????????">
                    <DemoBlock
                        title="????????????"
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
                        title="????????????"
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
                        title="????????????"
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
                        title="??????????????????"
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
                <Tabs.Panel title="????????????" className="demo-jing-icon">
                    <DemoBlock className="demo-jing-icon" padding="">
                        <Row justify="start" align="center">
                            <Col span={6}>
                                <IconEyeClose />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconEyeOpen />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconEyeCloseTwo />
                                <span>??????2</span>
                            </Col>
                            <Col span={6}>
                                <IconEyeOpenTwo />
                                <span>??????2</span>
                            </Col>
                            <Col span={6}>
                                <IconUser />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconCircleDelete />
                                <span>?????????</span>
                            </Col>
                            <Col span={6}>
                                <IconRadioEmpty />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconRadioOk />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconPhone />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconEmail />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconMedal />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconEdit />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconPassword />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconCall />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconArrow />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconRight />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconClose />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconCircleOk />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconRmb />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconAuthen />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconBack />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconCalendar />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconCallcenter />
                                <span>?????????</span>
                            </Col>
                            <Col span={6}>
                                <IconCoin2 />
                                <span>??????-??????</span>
                            </Col>
                            <Col span={6}>
                                <IconTrash />
                                <span>?????????</span>
                            </Col>
                            <Col span={6}>
                                <IconFace />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconFinger />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconGesture />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconHelp />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconSoundOn />
                                <span>?????????</span>
                            </Col>
                            <Col span={6}>
                                <IconSoundOff />
                                <span>?????????</span>
                            </Col>
                            <Col span={6}>
                                <IconIdCard />
                                <span>?????????</span>
                            </Col>
                            <Col span={6}>
                                <IconIttype />
                                <span>??????????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconMagezine />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconMoney />
                                <span>???</span>
                            </Col>
                            <Col span={6}>
                                <IconMore />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconMore2 />
                                <span>?????????</span>
                            </Col>
                            <Col span={6}>
                                <IconPaper />
                                <span>???</span>
                            </Col>
                            <Col span={6}>
                                <IconRefresh />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconSecurity />
                                <span>??????-??????</span>
                            </Col>
                            <Col span={6}>
                                <IconWaiting />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconCheckboxEmpty />
                                <span>??????-???</span>
                            </Col>
                            <Col span={6}>
                                <IconCheckboxOk />
                                <span>??????-??????</span>
                            </Col>
                            <Col span={6}>
                                <IconMoneyPlus />
                                <span>??????+</span>
                            </Col>
                            <Col span={6}>
                                <IconMoneyPlusFull />
                                <span>??????+2</span>
                            </Col>
                            <Col span={6}>
                                <IconExclamation />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconCustomer />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconNotice />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconFZ />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconXiaojinguang />
                                <span>?????????</span>
                            </Col>
                            <Col span={6}>
                                <IconZan />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconZanOver />
                                <span>??????-???</span>
                            </Col>
                            <Col span={6}>
                                <IconPhoto />
                                <span>??????</span>
                            </Col>
                            <Col span={6}>
                                <IconPhotoFail />
                                <span>????????????</span>
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
                <Tabs.Panel title="?????????">
                    <DemoBlock className="demo-jing-icon" padding="">
                        <Row justify="start" align="center">
                            <Col span={6}>
                                <IconBJBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconBHBank />
                                <span>????????????????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconBJRCBBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconGSBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconGDBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconGDNXBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconGFBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconGZRCBBank />
                                <span>????????????????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconHFBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconHXBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconJSUBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconJXBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconJSHBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconJTBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconMSBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconNJBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconNBBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconNYBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconPABank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconPFBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconQDBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconSHBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconXYBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconYZBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconZSBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconZGBank />
                                <span>????????????</span>
                            </Col>
                            <Col span={6}>
                                <IconZXBank />
                                <span>????????????</span>
                            </Col>
                        </Row>
                    </DemoBlock>
                </Tabs.Panel>
            </Tabs>
        </>
    );
};
