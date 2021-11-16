import { ReactNode } from 'react';

/**
 * ProductCard
 * @param {className} string                            // 自定义 class 名
 * @param {type} TagType                                // 类型
 * @param {size} string                                 // 颜色
 * @param {active} boolean                              // 是否选中
 * @param {children} ReactNode                          // 组件中的内容
 * @param {onClick} MouseEventHandler<HTMLElement>      // 点击后的回调事件
 **/
export interface ProductCardProps {
    headerTitle: string;
    headerTagList?: Array<HeaderTagItemProps>;
    contentList: Array<CardItemProps>;
    tagList?: Array<TagItemProps>;
    productList?: any;
    saleStartDate?: string;
    convertedRemainAmount?: string; // 剩余金额
    salePercent?: any;
    renderFooter?: boolean; // 是否渲染底部
    countdown?: []; // 倒计时时间数组 天 小时 分 秒
    ShortSpace?: boolean; // 缩短CardBox的间距
    productFooterText?: string; // 底部文字
    productOnlineStatus?: string; // 产品在线状态
    btnText?: string; // button 按钮文字
    btnStatus?: string; // button 按钮状态
    showBtn?: boolean; // 是否显示btn按钮
    onHandleClick?: () => void; // 卡片点击事件
    mode?: string; // 布局模式 433 334 11
}

export interface HeaderTagItemProps {
    headerTagList: string;
    headerTitleClasses: string;
}

export interface CardItemProps {
    title: any;
    desc: string;
}

export interface TagItemProps {
    labelName: string;
    labelType: string;
}
