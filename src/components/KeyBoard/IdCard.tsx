import * as React from 'react';
import BoardBase from './BoardBase';
import { IdCardBoardProps } from './PropType';

const idCardRegular = [
    { text: 'X', type: 'X' },
    { text: '0', type: '0' },
    { text: 'del', type: 'del' },
];

let keys: { text: any; type: string }[] = [];
for (let i = 1; i <= 9; i++) {
    keys.push({ text: i + '', type: i + '' });
}

keys = keys.concat(idCardRegular);

const IdCard = (props: IdCardBoardProps) => {
    const { random, value, onHandleValue, onHandleDelete } = props;

    return (
        <BoardBase
            keys={keys}
            sourceNumber={idCardRegular}
            onHandleValue={onHandleValue}
            onHandleDelete={onHandleDelete}
            value={value}
            random={random}
        />
    );
};

export default React.memo(IdCard);
