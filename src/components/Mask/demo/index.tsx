import React from 'react';
import { Mask } from 'jing-ui';

export default () => (
    <div className="jing-page">
        <Mask />
        <Mask isTransparent={true} />
    </div>
);

{
    /* <Mask
visible={props.visible}
destroyOnClose
getContainer={props.getContainer}
afterClose={props.afterClose}
onMaskClick={props.closeOnMaskClick ? props.onClose : undefined}
style={props.maskStyle}
className={classNames(`${classPrefix}-mask`, props.maskClassName)}
stopPropagation={props.stopPropagation}
> */
}
// https://mobile.ant.design/components/masks
