// import React, { useState, useEffect } from 'react';
// import * as PropTypes from 'prop-types';
// import { Popup } from 'jing-ui';

// /**
//  * 选择器
//  * @param {show} 是否显示
//  * @param {title} 标题
//  * @param {height} 选择器高度
//  * @param {onHandleCancel} 点击空白处回调
//  */
// export interface PickerProps {
//     children: React.ReactNode;
//     show: boolean;
//     title: string;
//     height?: string;
//     onHandleCancel?: () => void;
// }

// const Picker = (props: PickerProps) => {
//     const { children, show, title, height, onHandleCancel } = props;
//     const [isShow, setIsShow] = useState(show);
//     // console.log('picker----------------------', isShow)

//     useEffect(() => {
//         setIsShow(show);
//     }, [show]);

//     return (
//         <Popup.Group
//             isActionSheet={true}
//             show={isShow}
//             preventDefault
//             onClose={() => {
//                 setIsShow(false);
//                 onHandleCancel && onHandleCancel();
//             }}
//         >
//             <Popup.Slideup
//                 style={{ height: height }}
//                 title={title}
//                 onCancel={() => {
//                     setIsShow(false);
//                     onHandleCancel && onHandleCancel();
//                 }}
//             >
//                 <div className="Picker">{children}</div>
//             </Popup.Slideup>
//         </Popup.Group>
//     );
// };

// Picker.defaultProps = {
//     show: true,
// };

// Picker.propTypes = {
//     show: PropTypes.bool,
//     title: PropTypes.string,
//     height: PropTypes.string,
//     onHandleCancel: PropTypes.func,
// };

// export default React.memo(Picker);
