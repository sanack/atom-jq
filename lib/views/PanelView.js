'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactForAtom = require('react-for-atom');

var _reactForAtom2 = _interopRequireDefault(_reactForAtom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @babel */

var PanelView = function (_Component) {
  _inherits(PanelView, _Component);

  function PanelView(props) {
    _classCallCheck(this, PanelView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PanelView).call(this, props));
  }

  _createClass(PanelView, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)('atom-jq__panel-view', {
        'atom-jq__hidden': this.props.isHidden
      });

      return _reactForAtom2.default.createElement(
        'div',
        { className: classes },
        _reactForAtom2.default.createElement(
          'p',
          null,
          'atom-jq is rendered! ',
          this.props.isHidden
        ),
        _reactForAtom2.default.createElement('input', {
          type: 'text',
          value: this.state.value,
          onChange: this.handleChange.bind(this)
        })
      );
    }
  }]);

  return PanelView;
}(_reactForAtom.Component);

exports.default = PanelView;