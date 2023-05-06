import React, { useState, useEffect } from 'react';
import { Cell, ActionSheet, hooks } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

// 判断是否是闰年
export const isRunYear = (year: number) => {
    return year % 4 === 0 && (year % 100 != 0 || year % 400 == 0);
};

export const getMonths = (year: number) => {
    const date = new Date();
    const fullyear = date.getFullYear();
    const month = date.getMonth() + 1;
    if (fullyear === year) {
        return { month: month, isOk: true };
    } else if (fullyear - 50 === year) {
        return { month: 12 - month, isOk: false };
    } else {
        return { month: 12, isOk: true };
    }
};

// 开始日期的各月天数
export const getDays = (year: number, month: number) => {
    const date = new Date();
    const fullyear = date.getFullYear();
    const strMonth = date.getMonth() + 1;
    const strDate = date.getDate();
    let baseMonthsDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //各月天数
    // 当天
    if (fullyear === year && strMonth === month) {
        return { day: strDate, isOk: true };
    } else if (fullyear - 50 === year && strMonth === month) {
        return { day: baseMonthsDay[month - 1], isOk: false };
    }

    if (isRunYear(year) && month === 2) {
        //闰年2月29天
        return { day: 29, isOk: true };
    } else {
        return { day: baseMonthsDay[month - 1], isOk: true };
    }
};

const familyMemberList = [
    { id: '01', value: '01', label: '父亲' },
    { id: '02', value: '02', label: '母亲' },
    { id: '03', value: '03', label: '配偶' },
    { id: '04', value: '04', label: '儿子' },
    { id: '05', value: '05', label: '女儿' },
];

const date = new Date();
const year = date.getFullYear();
const strDate = date.getDate();
const columnYear: any = [];
let columnMonth: any = [];
let columnDay: any = [];

for (let i = 0; i <= 50; i++) {
    columnYear.push({ value: year - i + '年', label: year - i });
}

export default () => {
    const [base, updateBase] = hooks.useSetState({
        visible: false,
        value: '请选择',
    });
    const [plus, updatePlus] = hooks.useSetState({
        visible: false,
        value: '请选择',
        tabSource: [],
        columnSource: [{ value: '', lable: '' }],
        dateArray: [],
    });
    const [base2, updateBase2] = hooks.useSetState({
        visible: false,
        value: '请选择',
    });

    useEffect(() => {
        updatePlus({
            columnSource: columnYear,
        });
    }, []);

    const filterTab = (current: any) => {
        let resultTab: any = plus.tabSource;

        if (columnYear.indexOf(current) > -1) {
            if (plus.dateArray.length === 0) {
                resultTab = [...plus.tabSource, current];
            } else {
                resultTab = [current];
            }
        } else if (columnMonth.indexOf(current) > -1) {
            // resultTab = [...tabSource, current]
            if (plus.dateArray.length === 1) {
                resultTab = [...plus.tabSource, current];
            } else {
                plus.tabSource.splice(1, 1, current);
                resultTab = [...plus.tabSource];
            }
        }
        updatePlus({
            tabSource: resultTab,
        });
    };

    const filterColumn = (current: any) => {
        let originFirstDate = plus.dateArray;

        if (columnYear.indexOf(current) > -1) {
            const months = getMonths(Number(current.label));
            columnMonth = [];
            if (months.isOk) {
                for (let i = 1; i <= months.month; i++) {
                    columnMonth.push({
                        value: i + '月',
                        label: i < 10 ? '0' + i : i,
                    });
                }
            } else {
                for (let i = 12 - months.month; i <= 12; i++) {
                    columnMonth.push({
                        value: i + '月',
                        label: i < 10 ? '0' + i : i,
                    });
                }
            }
            updatePlus({
                columnSource: columnMonth,
            });

            if (plus.dateArray.length === 0) {
                updatePlus({
                    dateArray: [...plus.dateArray, current.label],
                });
            } else {
                updatePlus({
                    dateArray: [current.label],
                });
            }
        } else if (columnMonth.indexOf(current) > -1) {
            const days = getDays(plus.dateArray[0], Number(current.label));
            columnDay = [];
            if (days.isOk) {
                for (let i = 1; i <= days.day; i++) {
                    columnDay.push({
                        value: i + '日',
                        label: i < 10 ? '0' + i : i,
                    });
                }
            } else {
                for (let i = strDate; i <= days.day; i++) {
                    columnDay.push({
                        value: i + '日',
                        label: i < 10 ? '0' + i : i,
                    });
                }
            }

            updatePlus({
                columnSource: columnDay,
            });
            if (plus.dateArray.length === 1) {
                updatePlus({
                    dateArray: [...plus.dateArray, current.label],
                });
            } else {
                originFirstDate.splice(1, 1, current.label);
                updatePlus({
                    dateArray: originFirstDate,
                });
            }
        } else {
            if (plus.dateArray.length === 2) {
                updatePlus({
                    dateArray: [...plus.dateArray, current.label],
                });
            } else {
                originFirstDate.splice(2, 1, current.label);
                updatePlus({
                    dateArray: originFirstDate,
                });
            }
            updatePlus({
                visible: false,
                value: `${plus.dateArray[0]}-${plus.dateArray[1]}-${current.label}`,
            });
        }
    };

    return (
        <>
            <DemoBlock
                title="基本用法"
                className="demo-jing-button"
                padding="0"
            >
                <Cell
                    title="基础用法"
                    value={base.value}
                    isLink
                    onClick={() => {
                        updateBase({
                            visible: true,
                        });
                    }}
                />
                <ActionSheet
                    visible={base.visible}
                    title="添加成员"
                    tabSource={[]}
                    columns={familyMemberList}
                    onCancel={() => {
                        updateBase({
                            visible: false,
                        });
                    }}
                    onColumnItemClick={(current: any) => {
                        updateBase({
                            visible: false,
                            value: current.label,
                        });
                    }}
                />
            </DemoBlock>
            <DemoBlock title="联动" className="demo-jing-button" padding="0">
                <Cell
                    title="出生日期"
                    value={plus.value}
                    isLink
                    onClick={() => {
                        updatePlus({
                            visible: true,
                        });
                    }}
                />
                <ActionSheet
                    visible={plus.visible}
                    title="证件有限期"
                    tabSource={plus.tabSource}
                    columns={plus.columnSource}
                    onCancel={() => {
                        updatePlus({
                            visible: false,
                        });
                    }}
                    onHeaderItemClick={(current: any) => {
                        if (columnYear.indexOf(current) > -1) {
                            updatePlus({
                                columnSource: columnYear,
                            });
                        } else if (columnMonth.indexOf(current) > -1) {
                            updatePlus({
                                columnSource: columnMonth,
                            });
                        } else if (columnDay.indexOf(current) > -1) {
                            updatePlus({
                                columnSource: columnDay,
                            });
                        } else if (current.value === '请选择') {
                            if (plus.dateArray.length === 0) {
                                updatePlus({
                                    columnSource: columnYear,
                                });
                            } else if (plus.dateArray.length === 1) {
                                updatePlus({
                                    columnSource: columnMonth,
                                });
                            } else {
                                updatePlus({
                                    columnSource: columnDay,
                                });
                            }
                        }
                    }}
                    onColumnItemClick={(current: any) => {
                        console.log('current', current);
                        filterTab(current);
                        filterColumn(current);
                    }}
                />
            </DemoBlock>
            <DemoBlock
                title="无header部分"
                className="demo-jing-button"
                padding="0"
            >
                <Cell
                    title="无header部分"
                    value={base2.value}
                    isLink
                    onClick={() => {
                        updateBase2({
                            visible: true,
                        });
                    }}
                />
                <ActionSheet
                    visible={base2.visible}
                    title="无header部分"
                    columns={familyMemberList}
                    onCancel={() => {
                        updateBase2({
                            visible: false,
                        });
                    }}
                    onColumnItemClick={(current: any) => {
                        updateBase2({
                            visible: false,
                            value: current.label,
                        });
                    }}
                />
            </DemoBlock>
        </>
    );
};
