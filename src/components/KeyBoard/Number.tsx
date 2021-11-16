import * as React from 'react';
import BoardBase from './BoardBase';
import { NumberBoardProps } from './PropType';

const numberRegular = [
    { text: 'emty', type: 'emty' },
    { text: '0', type: '0' },
    { text: 'del', type: 'del' },
];

let keys: { text: any; type: string }[] = [];

for (let i = 1; i <= 9; i++) {
    keys.push({ text: i + '', type: i + '' });
}

keys = keys.concat(numberRegular);

const Number = (props: NumberBoardProps) => {
    const { random, value, new: isNew, onHandleValue, onHandleDelete } = props;

    return (
        <BoardBase
            keys={keys}
            sourceNumber={numberRegular}
            onHandleValue={onHandleValue}
            onHandleDelete={onHandleDelete}
            value={value}
            random={random}
            new={isNew}
        />
    );
};

export default React.memo(Number);
