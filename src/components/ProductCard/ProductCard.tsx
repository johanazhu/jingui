// import * as React from 'react';
// import classnames from 'classnames';
// import { Tag, CardBox } from 'components';
import { ProductCardProps } from './PropType';

// /**
//  * @Description: 产品卡片底部渲染, 高端，固收，基金显示底部，但是基金没有“剩余”与“进度条”，
//  * 通过 convertedRemainAmount 来判断
//  * @Date: 2020-09-30 16:04:29
//  * @LastEditors: johan
//  */
// const ProductFooterRender = (props: ProductCardProps) => {
//     const {
//         renderFooter,
//         convertedRemainAmount,
//         productOnlineStatus,
//         salePercent,
//         productFooterText,
//         btnText,
//         btnStatus,
//         showBtn,
//     } = props;

//     // console.log('convertedRemainAmount', convertedRemainAmount);
//     // console.log('salePercent', salePercent);

//     return (
//         <div className="ProductCard__footer">
//             {renderFooter ? (
//                 <div className="ProductCard__footer-left">
//                     <div className="ProductCard__footer-box">
//                         <div className="ProductCard__footer-box-left">
//                             <div className="ProductCard__footer-box-left__time">
//                                 {productFooterText}
//                             </div>
//                         </div>
//                         {convertedRemainAmount && (
//                             <div className="ProdcutCard__footer-box-right">
//                                 <div className="ProductCard__footer-box-right__money">
//                                     {productOnlineStatus === '1' ? '规模' : '剩余'}
//                                     {convertedRemainAmount}万
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                     {convertedRemainAmount && salePercent !== '0' && salePercent !== 0 && (
//                         <div className="ProductCard__footer-process">
//                             <span style={{ width: `${salePercent}%` }}></span>
//                         </div>
//                     )}
//                 </div>
//             ) : null}
//             {showBtn && (
//                 <div className={classnames('ProductCard__footer-btn', btnStatus)}>{btnText}</div>
//             )}
//         </div>
//     );
// };

// const ProductCard: React.FC<ProductCardProps> = (props) => {
//     const { headerTitle, contentList, tagList, ShortSpace, mode, onHandleClick } = props;

//     return (
//         <div className="ProductCard" onClick={onHandleClick}>
//             <div className="ProductCard__header">
//                 <div className="ProductCard__header-title">{headerTitle}</div>
//                 <div className="ProductCard__header-taglist">
//                     {tagList &&
//                         tagList.map((item, i) => (
//                             <Tag color={item.labelType === '04' ? 'highOrange' : 'orange'} key={i}>
//                                 {item.labelName}
//                             </Tag>
//                         ))}
//                 </div>
//             </div>
//             <div className="ProductCard__content">
//                 {contentList &&
//                     contentList.map((item, i) => (
//                         <CardBox
//                             className={classnames('ProductCard__content-item', mode, {
//                                 short_space: ShortSpace,
//                             })}
//                             key={i}
//                         >
//                             <CardBox.Header>{item.title}</CardBox.Header>
//                             <CardBox.Footer>{item.desc}</CardBox.Footer>
//                         </CardBox>
//                     ))}
//                 {/* <div className="ProductCard__content-item-box">
//                     {contentList &&
//                         contentList.map((item, i) => (
//                             <CardBox
//                                 className={classnames('ProductCard__content-item', mode, {
//                                     short_space: ShortSpace,
//                                 })}
//                                 key={i}
//                             >
//                                 <CardBox.Header>{item.title}</CardBox.Header>
//                                 <CardBox.Footer>{item.desc}</CardBox.Footer>
//                             </CardBox>
//                         ))}
//                 </div> */}
//             </div>
//             <ProductFooterRender {...props} />
//         </div>
//     );
// };

// ProductCard.defaultProps = {
//     headerTitle: '',
//     ShortSpace: false,
//     btnText: '立即投资',
//     renderFooter: false,
//     showBtn: true,
//     mode: 'fourthreethree',
// };

// export default React.memo(ProductCard);
