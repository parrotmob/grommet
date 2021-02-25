'use strict';

exports.__esModule = true;
exports.PageControl = void 0;

var _react = _interopRequireWildcard(require('react'));

var _styledComponents = require('styled-components');

var _StyledPageControl = require('./StyledPageControl');

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var PageControl = function PageControl(_ref) {
  var control = _ref.control,
    separator = _ref.separator,
    sizeProp = _ref.size,
    rest = _objectWithoutPropertiesLoose(_ref, [
      'control',
      'separator',
      'size',
    ]);

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  var size = sizeProp || 'medium';
  return /*#__PURE__*/ _react['default'].createElement(
    _StyledPageControl.StyledContainer,
    {
      as: 'li',
      size: size,
    },
    separator
      ? /*#__PURE__*/ _react['default'].createElement(
          _StyledPageControl.StyledSeparator,
          {
            size: size,
          },
          '\u2026',
        )
      : /*#__PURE__*/ _react['default'].createElement(
          _StyledPageControl.StyledPaginationButton,
          _extends(
            {
              a11yTitle: 'Go to page ' + control,
              fill: true,
              kind: theme.pagination.button,
              label: control,
              size: size,
            },
            rest,
          ),
        ),
  );
};

exports.PageControl = PageControl;
