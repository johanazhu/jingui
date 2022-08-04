// import React, { useState, useEffect, FC } from 'react';
// import { Picker } from '../Picker';
// import Column from './column';
// import Header from './header';
// import { AreaProps } from './PropType';

// const prefixCls = 'jing-area';

// const Area:FC<AreaProps> = (props) => {
//     const {
//         tabSource,
//         columnSource,
//         onHeaderItemClick,
//         onColumnItemClick,
//         show,
//         title,
//         onCancel,
//     } = props;
//     const [isShow, setIsShow] = useState(show);

//     useEffect(() => {
//         setIsShow(show);
//     }, [show]);

//     return (
//         <Picker show={isShow} title={title} onCancel={onCancel}>
//             <div className={prefixCls}>
//                 {tabSource && (
//                     <Header
//                         tabSource={tabSource}
//                         onClick={(currentHeaderItem) => {
//                             onHeaderItemClick &&
//                                 onHeaderItemClick(currentHeaderItem);
//                         }}
//                     />
//                 )}
//                 <Column
//                     tabSource={tabSource}
//                     columnSource={columnSource}
//                     onClick={(currentItem) => {
//                         onColumnItemClick(currentItem);
//                     }}
//                 />
//             </div>
//         </Picker>
//     );
// };

// Area.defaultProps = {
//     show: true,
// };

// export default Area;
