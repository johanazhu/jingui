import * as React from 'react';
import BoardBase from './BoardBase';

export interface IdCardBoardProps {
    isRandom?: boolean;
    value: string;
    onHandleDelete: (text: any) => void;
    onHandleValue: (text: any) => void;
}
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
    const { isRandom, value, onHandleValue, onHandleDelete } = props;

    return (
        <BoardBase
            keys={keys}
            sourceNumber={idCardRegular}
            onHandleValue={onHandleValue}
            onHandleDelete={onHandleDelete}
            value={value}
            isRandom={isRandom}
        />
    );
};

export default React.memo(IdCard);
