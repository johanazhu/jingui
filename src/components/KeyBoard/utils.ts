export const getDefaultDisplay = () => {
    return {
        '{bksp}': 'back',
        '{emty}': 'emty',
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
        element === 'shift' ||
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

export const letterLayout = {
    default: [
        'q w e r t y u i o p',
        'a s d f g h j k l',
        '{shift} z x c v b n m {delete}',
        '{123.*!&} {space} {complete}',
    ],
    shift: [
        'Q W E R T Y U I O P',
        'A S D F G H J K L',
        '{shift} Z X C V B N M {delete}',
        '{123.*!&} {space} {complete}',
    ],
    symbol: [
        '1 2 3 4 5 6 7 8 9 0',
        '` ! @ # $ % ^ & *',
        '+ - \\ / [ ] { } {delete}',
        '{ABC} , . € £ ￥ {complete}',
    ],
};
// export const numberLayout = ['1 2 3'];
export const numberLayout = ['1 2 3', '4 5 6', '7 8 9', '{emty} 0 {delete}'];

export const priceLayout = ['1 2 3', '4 5 6', '7 8 9', '. 0 {delete}'];

export const idLayout = ['1 2 3', '4 5 6', '7 8 9', 'X 0 {delete}'];

export const themeToLayout = (type: string) => {
    switch (type) {
        case 'number':
            return numberLayout;
        case 'price':
            return priceLayout;
        case 'id':
            return idLayout;
    }
};
