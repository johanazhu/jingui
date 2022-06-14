export const getDefaultDisplay = () => {
    return {
        '{bksp}': 'back',
        '{shift}': 'shift',
        '{delete}': 'delete',
        '{123.*!&}': '123.*!&',
        '{ABC}': 'ABC',
        '{space}': '空格',
        '{complete}': '完成',
    };
};

export const getCantActive = (element: string) => {
    if (
        element === '' ||
        element === 'delete' ||
        element === '123.*!&' ||
        element === 'ABC' ||
        element === '空格' ||
        element === '完成'
    ) {
        return true;
    } else {
        return false;
    }
};
