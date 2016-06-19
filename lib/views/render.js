'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.togglePanel = exports.start = exports.destroy = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _PanelView = require('./PanelView');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = null; /** @babel */

var destroy = exports.destroy = function destroy() {
  (0, _reactDom.unmountComponentAtNode)(root);
};

var start = exports.start = function start() {
  console.log('start');
  root = document.createElement('div');
  document.querySelector('.vertical').appendChild(root);
  root.setAttribute('id', 'atom-jq__root');
  (0, _reactDom.render)(_react2.default.createElement(_PanelView.PanelView, null), root);
};

var togglePanel = exports.togglePanel = function togglePanel() {
  console.log('RenderPanelView');
};