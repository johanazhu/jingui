import { FC } from 'react';
import { PortalProps } from './PropType';
import { renderToContainer } from '@/utils/dom/renderToContainer';

const Portal: FC<PortalProps> = (props) => {
    const { children, mountContainer } = props;

    return renderToContainer(mountContainer, children);
};

Portal.defaultProps = {
    mountContainer: document.body,
};

export default Portal;
