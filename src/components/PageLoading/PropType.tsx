import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * PageLoading 页面级loading
 * @param {mask} boolean                            // 是否要加遮罩
 * @param {loading} boolean                            // ...
 **/
export interface PageLoadingProps extends BaseTypeProps {
    mask?: boolean;
    loading?: boolean;
}
