import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * 选择器
 * @param {columns}                                         // 对象数组，配置每一列显示的数据
 * @param {defaultIndex}                                    // 单列选择时，默认选中项的索引
 * @param {title}                                           // 顶部栏标题
 * @param {confirmButtonText}                               // 确认按钮文字
 * @param {cancelButtonText}                                // 取消按钮文字
 * @param {loading}                                         // 是否显示加载状态
 * @param {showToolbar}                                     // 是否显示顶部栏
 * @param {itemHeight}                                      // 选项高度
 * @param {visibleItemCount}                                // 可见的选项个数
 * @param {swipeDuration}                                   // 快速滑动时惯性滚动的时长，单位 ms
 * @param {onConfirm}                                       // 点击完成按钮时触发。注意：当传入多列数据时，返回值为数组格式。
 * @param {onCancel}                                        // 点击取消按钮时触发。注意：当传入多列数据时，返回值为数组格式
 * @param {onChange}                                        // 选项改变时触发。注意：当传入多列数据时，返回值为数组格式
 */
export interface PickerProps extends BaseTypeProps {
    columns: Array<PickerOption | PickerColumn>;
    defaultIndex?: number;
    title?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    loading?: boolean;
    showToolbar?: boolean;
    itemHeight?: number;
    visibleItemCount?: number;
    swipeDuration?: number;
    onConfirm?: (
        currentValue: PickerOption | PickerOption[],
        currentIndex: number | number[],
    ) => void;
    onCancel?: (
        currentValue: PickerOption | PickerOption[],
        currentIndex: number | number[],
    ) => void;
    onChange?: (
        currentValue: PickerOption | PickerOption[],
        currentIndex: number | number[],
    ) => void;
}

// export interface columnsFieldNamesProps {
//     text?: string;
//     children: Array<string>;
//     values: Array<string>;
// }

export interface PickerColumnProps {
    className?: string;
    // text: string;
    children?: Array<string>;
    values?: Array<string | number>;
    defaultIndex?: number;
    disabled?: boolean;
    valueKey: string;
    itemHeight?: number;
    visibleItemCount?: number;
    swipeDuration?: number;
    initialOptions?: Array<string>;
    onChange?: (index: number) => void;
}

export type PickerObjectOption = {
    type?: number | string;
    disabled?: boolean;
    [key: PropertyKey]: any;
};

export type PickerOption = number | string | PickerObjectOption;

export type PickerObjectColumn = {
    values?: PickerOption[];
    children?: PickerColumn;
    className?: string;
    defaultIndex?: number;
    [key: PropertyKey]: any;
};

export type PickerColumn = PickerOption[] | PickerObjectColumn;
