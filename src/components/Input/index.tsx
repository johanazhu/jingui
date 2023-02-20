import './style/index.scss';
import _Input from './Input';
import TextArea from '../TextArea';
import KeyBoradInput from './KeyBoard';

const Input = Object.assign(_Input, {
    TextArea: TextArea,
    KeyBoard: KeyBoradInput
});

export default Input;
export { Input };

export type { InputProps, InputInstance, KeyboardInputProps } from './PropType';

export type { TextAreaProps, TextAreaInstance } from '../TextArea/PropType'
