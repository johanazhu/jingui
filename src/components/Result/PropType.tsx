import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

import {
    JqbSuccess,
    JqbFail,
    JqbEmpty,
    JqbCancel,
    JqbNetwork,
    JqbRight,
    JqbWaiting,
    JqbCountdown,
    JqbError404,
    JqbError500,
} from './resultStatus';

export type ResultStatus =
    | 'success'
    | 'fail'
    | 'empty'
    | 'cancel'
    | 'network'
    | 'right'
    | 'waiting'
    | 'countdown'
    | '404'
    | '500';

export const ExceptionMap = {
    success: JqbSuccess,
    fail: JqbFail,
    empty: JqbEmpty,
    cancel: JqbCancel,
    network: JqbNetwork,
    right: JqbRight,
    waiting: JqbWaiting,
    countdown: JqbCountdown,
    '404': JqbError404,
    '500': JqbError500,
};

export type ResultStatusType = keyof typeof ExceptionMap;

export type ResultPlace = 'left' | 'center' | 'right';

/**
 * Result 结果
 * @param {title} string                            // 一级标题
 * @param {status} ResultStatus                     // 状态
 * @param {place} ResultPlace                       // 内容对齐方式
 * @param {extra} ReactNode                         // 额外自定义区域
 * @param {children} ReactNode                      // 组件中的内容
 **/
export interface ResultProps extends BaseTypeProps {
    title?: string;
    status?: ResultStatus;
    place?: ResultPlace;
    extra?: ReactNode;
    children?: ReactNode;
}
