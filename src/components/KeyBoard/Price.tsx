import React, { FC, memo } from 'react';
import BoardBase from './BoardBase';
import { PriceBoardProps } from './PropType';

const priceRegular = [
    { text: '.', type: 'point' },
    { text: '0', type: '0' },
    { text: 'del', type: 'del' },
];

let keys: { text: any; type: string }[] = [];
for (let i = 1; i <= 9; i++) {
    keys.push({ text: i + '', type: i + '' });
}
keys = keys.concat(priceRegular);

const Price: FC<PriceBoardProps> = (props) => {
    const { value, random, new: isNew, onHandleValue, onHandleDelete } = props;

    return (
        <BoardBase
            keys={keys}
            value={value}
            random={random}
            new={isNew}
            sourceNumber={priceRegular}
            onHandleValue={onHandleValue}
            onHandleDelete={onHandleDelete}
        />
    );
};

export default memo(Price);
