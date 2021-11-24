import { ReactNode } from 'react';

/**
 * PageLoading 页面级loading
 * @param {mask} boolean                            // 是否要加遮罩
 * @param {loading} boolean                            // ...
 **/
export interface PageLoadingProps {
    mask?: boolean;
    loading?: boolean;
}
