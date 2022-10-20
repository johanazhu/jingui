import './style/index.scss';
import _Button from './Button';
import ButtonGroup from './Group';

const Button = Object.assign(_Button, { Group: ButtonGroup });

export default Button;
export { Button, ButtonGroup };

export type { ButtonProps, ButtonGroupProps } from './PropType';
