import { ReactNode, CSSProperties } from 'react';
import { BaseTypeProps } from '@/utils';
/**
 * Switch 开关
 * @param {checked} boolean                      // 值
 * @param {defaultChecked} boolean               // 初始值
 * @param {disabled} boolean                     // 是否禁用
 * @param {onChange} function                    // 值变化时触发的回调函数
 **/
export interface SwitchProps extends BaseTypeProps {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
}
