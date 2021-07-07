import * as React from 'react';
import BoardBase from './BoardBase';

export interface NumberBoardProps {
    isRandom?: boolean;
    value: string;
    isNew?: boolean;
    onHandleDelete: (text: any) => void;
    onHandleValue: (text: any) => void;
}
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
    const { isRandom, value, isNew, onHandleValue, onHandleDelete } = props;

    return (
        <BoardBase
            keys={keys}
            sourceNumber={numberRegular}
            onHandleValue={onHandleValue}
            onHandleDelete={onHandleDelete}
            value={value}
            isRandom={isRandom}
            isNew={isNew}
        />
    );
};

export default React.memo(Number);
