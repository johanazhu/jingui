import './style/index.scss';
import _Stepline from './Stepline';
import SteplineItem from './Item';

const Stepline = Object.assign(_Stepline, { Item: SteplineItem });

export default Stepline;

export { Stepline, SteplineItem };

export type { SteplineProps, SteplineItemProps } from './PropType';
