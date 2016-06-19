'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelView = undefined;

var _reactForAtom = require('react-for-atom');

var _reactForAtom2 = _interopRequireDefault(_reactForAtom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @babel */

var PanelView = exports.PanelView = function PanelView(_ref) {
  var isHidden = _ref.isHidden;

  var classes = (0, _classnames2.default)('atom-jq__panel-view', {
    'atom-jq__hidden': isHidden
  });

  return _reactForAtom2.default.createElement(
    'div',
    { className: classes },
    _reactForAtom2.default.createElement(
      'p',
      null,
      'atom-jq is rendered! ',
      isHidden
    ),
    _reactForAtom2.default.createElement('input', {
      type: 'text',
      value: isHidden
    })
  );
};