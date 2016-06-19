'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.destroy = undefined;
exports.togglePanel = togglePanel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _PanelView = require('./PanelView');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = null; /** @babel */


var destroy = exports.destroy = function destroy() {
  _reactDom2.default.unmountComponentAtNode(root);
};

var start = exports.start = function start() {
  root = document.createElement('div');
  document.querySelector('.vertical').appendChild(root);
  root.setAttribute('id', 'atom-jq__root');
  _reactDom2.default.render(_react2.default.createElement(_PanelView.PanelView, null), root);
};

function togglePanel() {
  render(_react2.default.createElement(_PanelView.PanelView, { isHidden: true }), root);
}