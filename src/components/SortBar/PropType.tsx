
export type SortBarItemStatus = '0' | '1' | '2';
/**
 * SortBarItem
 * @param {name} string                                 // 名字
 * @param {status} SortBarItemStatus                    // 状态
 * @param {onClick} function                            // 点击后的回调
 **/
export interface SortBarItemProps {
    name: string;
    status?: SortBarItemStatus;
    onClick: (isStatus: string) => void;
}

/**
 * SortBarFilter
 * @param {name} string                                 // 名字
 * @param {status} boolean                              // 状态
 * @param {onClick} function                            // 点击后的回调
 **/
export interface SortBarFilterProps {
    name: string;
    status: boolean;
    onClick: () => void;
}

/**
 * SortBar
 * @param {options} Array                               // ...
 * @param {isSticky} boolean                            // ...
 * @param {filterName} string                           // ...
 * @param {status} boolean                              // ...
 * @param {onItemHandleClick} function                  // ...
 * @param {onFilterHandleClick} function                // ...
 **/
export interface SortBarProps {
    options: Array<any>;
    isSticky: boolean;
    filterName: string;
    status: boolean;
    onItemHandleClick: (item: any) => void;
    onFilterHandleClick: () => void;
}

