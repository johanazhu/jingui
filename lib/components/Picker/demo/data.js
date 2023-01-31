"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalColumns = exports.multipleColumns = exports.disabledColumns = exports.cascadeColumns = void 0;
var normalColumns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华'];
exports.normalColumns = normalColumns;
var disabledColumns = [{
  text: '杭州',
  disabled: true
}, {
  text: '宁波'
}, {
  text: '温州'
}];
exports.disabledColumns = disabledColumns;
var multipleColumns = [
// 第一列
{
  values: ['周一', '周二', '周三', '周四', '周五'],
  defaultIndex: 2
},
// 第二列
{
  values: ['上午', '下午', '晚上'],
  defaultIndex: 1
}];
exports.multipleColumns = multipleColumns;
var cascadeColumns = [{
  text: '浙江',
  children: [{
    text: '杭州',
    children: [{
      text: '西湖区'
    }, {
      text: '余杭区'
    }]
  }, {
    text: '温州',
    children: [{
      text: '鹿城区'
    }, {
      text: '瓯海区'
    }]
  }]
}, {
  text: '福建',
  children: [{
    text: '福州',
    children: [{
      text: '鼓楼区'
    }, {
      text: '台江区'
    }]
  }, {
    text: '厦门',
    children: [{
      text: '思明区'
    }, {
      text: '海沧区'
    }]
  }]
}];
exports.cascadeColumns = cascadeColumns;