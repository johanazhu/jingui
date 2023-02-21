import React, { useState } from 'react';
import { Cell, IconZan, Switch, Input, hooks } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => {

    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState("")

    const [state, updateState] = hooks.useSetState({
        name: '',
        idNo: '',
    })


    return (
        <>
            <DemoBlock title="基本用法" padding="0">
                <Cell title="单元格" value="内容" />
                <Cell title="单元格" value="内容" label="描述信息" />
                <Cell
                    title="单元格"
                    value="内容"
                    label="描述信息"
                    desc="详情信息"
                />
                <Cell title="我是标题很长很长可以换行换行换行换行换行换行换行，没有链接" />
                <Cell
                    title="单元格"
                    value="我是内容很长很长可以换行换行换行换行换行换行换行，没有链接"
                />
            </DemoBlock>
            <DemoBlock title="展示图标" padding="0">
                <Cell title="单元格" icon={<IconZan size="sm" />} />
            </DemoBlock>
            <DemoBlock title="只设置 value" padding="0">
                <Cell value="内容" />
                <Cell value="右侧描述可能很长很长很长很长很长很长很长很长很长" />
            </DemoBlock>
            <DemoBlock title="展示箭头" padding="0">
                <Cell title="单元格" isLink />
                <Cell title="单元格" isLink value="内容" />
                <Cell
                    center
                    title="我是标题很长很长可以换行换行换行换行换行换行换行，没有链接"
                    isLink
                />
            </DemoBlock>
            <DemoBlock title="结合Switch" padding="0">
                <Cell
                    title="证件长期有效"
                    type="must"
                    style={{
                        padding: '3px 16px',
                        alignItems: 'center'
                    }}
                    value={
                        <Switch
                            checked={checked}
                            onChange={(value: any) => value && setChecked(value)}
                        />
                    }
                />
            </DemoBlock>
            <DemoBlock title="垂直居中" padding="0">
                <Cell center title="单元格" value="内容" label="描述信息" />
                <Cell center title="单元格" value="内容" desc="详情信息" />
                <Cell
                    title="我标题很长很长可以换行换行换行换行换行换行换行，没有链接"
                    isLink
                    center
                />
            </DemoBlock>
            <DemoBlock title="必填" padding="0">
                <Cell required title="单元格" value="内容" />
            </DemoBlock>
            <DemoBlock title="组：默认带阴影" padding="0" margin="0 10px" background="">
                <Cell.Group>
                    <Cell title="我只有标题 Normal" value="内容" />
                    <Cell title="我有标题和链接" isLink />
                    <Cell
                        title="单元格"
                        value="内容"
                        label="描述信息"
                        desc="详情信息"
                    />
                </Cell.Group>
            </DemoBlock>
            <DemoBlock title="组：不带阴影功能" padding="12px 0 12px" margin="0 10px" background="">
                <Cell.Group shadow={false}>
                    <Cell title="单元格1" value="内容1" />
                    <Cell title="单元格2" value="内容2" />
                    <Cell
                        title="单元格"
                        value="内容"
                        label="描述信息"
                        desc="详情信息"
                    />
                </Cell.Group>
            </DemoBlock>
            <DemoBlock title="Input的使用" padding="0" margin="0 10px" background="">
                <Cell.Group>
                    <Cell title="成员名字" value={<Input
                        value={state.name}
                        onChange={(name: any) => updateState({ name })}
                        placeholder='请输入'
                        align="right"
                    />}
                        required />
                    <Cell
                        title="与本人关系"
                        value="请选择"
                        required
                        isLink
                    />
                    <Cell title="成员名字" value={<Input
                        value={state.idNo}
                        onChange={(idNo: any) => updateState({ idNo })}
                        placeholder='选填'
                        align="right"
                    />} />
                    {/* <Input
                        clearable
                        icon={<IconUser />}
                        value={value}
                        placeholder="带清除的输入框" />
                    <Input value={value} placeholder="带清除的输入框" prefix={<IconUser />} />
                    <Cell.Input title="我只有标题 Normal" value="内容" />
                    <Cell title="我有标题和链接" isLink />
                    <Cell
                        title="单元格"
                        value="内容"
                        label="描述信息"
                        desc="详情信息"
                    /> */}
                </Cell.Group>
            </DemoBlock>
        </>
    )

}
