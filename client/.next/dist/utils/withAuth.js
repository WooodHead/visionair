'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = withAuth;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AuthService = require('./AuthService.js');

var _AuthService2 = _interopRequireDefault(_AuthService);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewtirrell/Projects/visionair/client/utils/withAuth.js';
function withAuth(AuthComponent) {
    var Auth = new _AuthService2.default('http://localhost:8080');
    return function (_Component) {
        (0, _inherits3.default)(Authenticated, _Component);

        function Authenticated(props) {
            (0, _classCallCheck3.default)(this, Authenticated);

            var _this = (0, _possibleConstructorReturn3.default)(this, (Authenticated.__proto__ || (0, _getPrototypeOf2.default)(Authenticated)).call(this, props));

            _this.state = {
                isLoading: true
            };
            return _this;
        }

        (0, _createClass3.default)(Authenticated, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                if (!Auth.loggedIn()) {
                    this.props.url.replace('/admin-edit');
                }
                this.setState({ isLoading: false });
            }
        }, {
            key: 'render',
            value: function render() {
                console.log('withauth props', this.props);
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }, _react2.default.createElement(_head2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, _react2.default.createElement('title', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }, 'PairHub'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                })), this.state.isLoading ? _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                }, 'LOADING...') : _react2.default.createElement(AuthComponent, (0, _extends3.default)({}, this.props, { auth: Auth, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                })));
            }
        }]);

        return Authenticated;
    }(_react.Component);
}