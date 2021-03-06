import * as React from 'react';

import Base from './base';
import Group from './group';
import Prefix from './prefix';
import Suffix from './suffix';
import Phone from './phone';
import Password from './password';
import Search from './search';
import Verify from './verify';
import Clear from './clear';
import Captcha from './captcha';
import KeyBoard from './keyboard';
import Textarea from './textarea';

const Input = (props: any) => <Base {...props} />;

Input.Group = Group;
Input.Verify = Verify;
Input.Prefix = Prefix;
Input.Suffix = Suffix;
Input.Phone = Phone;
Input.Password = Password;
Input.Search = Search;
Input.Clear = Clear;
Input.Captcha = Captcha;
Input.KeyBoard = KeyBoard;
Input.Textarea = Textarea;

export default Input;
