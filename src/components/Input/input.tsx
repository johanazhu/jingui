import React, { useState, useEffect, useCallback } from 'react';
import * as PropTypes from 'prop-types';
// import classnames from 'classnames';

import Base from './base';
import Group from './group';
// import Textarea from './textarea';
import Prefix from './prefix';
import Suffix from './suffix';
import Phone from './phone';
import Password from './password';
import Search from './search';
import Verify from './verify';
import Clear from './clear';
import Captcha from './captcha';
import KeyBoard from './keyboard';

const Input = (props: any) => {
    return <Base {...props} />;
};

Input.Group = Group;
// Input.Textarea = Textarea;
Input.Verify = Verify;
Input.Prefix = Prefix;
Input.Suffix = Suffix;
Input.Phone = Phone;
Input.Password = Password;
Input.Search = Search;
Input.Clear = Clear;
Input.Captcha = Captcha;
Input.KeyBoard = KeyBoard;

export default Input;
