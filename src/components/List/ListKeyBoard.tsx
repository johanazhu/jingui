// import * as React from 'react';
// import Input from '../Input';

// // 不同的类型
// export interface ListKeyBoardProps {
//     value: string;
//     placeholder: string;
//     renderIcon?: any;
//     isFocus?: boolean;
//     maxLength?: number;
//     onHandleFocus?: () => void;
//     onClearValue?: () => void;
// }

// const ListKeyBoard = (props: ListKeyBoardProps) => {
//     const {
//         value,
//         placeholder,
//         renderIcon,
//         isFocus,
//         maxLength,
//         onHandleFocus,
//         onClearValue,
//     } = props;
//     return (
//         <div className="ListKeyBoard">
//             <div className="ListKeyBoard__icon">{renderIcon}</div>
//             <Input.Group>
//                 <Input.KeyBoard
//                     value={value}
//                     placeholder={placeholder}
//                     isActive={isFocus}
//                     onHandleFocus={onHandleFocus}
//                     onClearValue={onClearValue}
//                     maxLength={maxLength}
//                 />
//             </Input.Group>
//         </div>
//     );
// };

// export default ListKeyBoard
