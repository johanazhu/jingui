import './style/index.scss';
import _Input from './Input';
import TextArea from '../TextArea';
import KeyBoard from '../KeyBoard';
// import InputGroup from './Group';

const Input = Object.assign(_Input, { TextArea: TextArea, KeyBoard: KeyBoard });

export default Input;
export { Input };

export type { InputProps, InputInstance, KeyboardInputProps } from './PropType';

// export type { TextAreaProps, TextAreaInstance } from '../TextArea/PropsType'
