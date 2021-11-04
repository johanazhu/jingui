import React from 'react';
import Portal from '../Portal';
import { IconFZ } from '../Icon';

const Orientation = () => {
    return (
        <Portal>
            <div className="Orientation">
                <div className="Orientation__inner">
                    <div className="Orientation__inner-icon">
                        <IconFZ size="auto" />
                    </div>
                    <div className="Orientation__inner-desc">
                        为了更好的体验
                    </div>
                    <div className="Orientation__inner-desc">
                        请竖向使用您的手机
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default React.memo(Orientation);
