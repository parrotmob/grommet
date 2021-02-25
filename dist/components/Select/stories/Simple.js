'use strict';

exports.__esModule = true;
exports['default'] = exports.Simple = void 0;

var _react = _interopRequireWildcard(require('react'));

var _grommet = require('grommet');

var _themes = require('grommet/themes');

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

var Simple = function Simple() {
  var options = ['one', 'two'];

  var _useState = (0, _react.useState)(''),
    value = _useState[0],
    setValue = _useState[1];

  return /*#__PURE__*/ _react['default'].createElement(
    _grommet.Grommet,
    {
      full: true,
      theme: _themes.grommet,
    },
    /*#__PURE__*/ _react['default'].createElement(
      _grommet.Box,
      {
        fill: true,
        align: 'center',
        justify: 'start',
        pad: 'large',
        gap: 'medium',
      },
      /*#__PURE__*/ _react['default'].createElement(
        _grommet.Text,
        {
          weight: 'bold',
        },
        'Enabled',
      ),
      /*#__PURE__*/ _react['default'].createElement(_grommet.Select, {
        id: 'select',
        name: 'select',
        placeholder: 'Select',
        value: value,
        options: options,
        onChange: function onChange(_ref) {
          var option = _ref.option;
          return setValue(option);
        },
      }),
      /*#__PURE__*/ _react['default'].createElement(
        _grommet.Text,
        {
          weight: 'bold',
        },
        'Disabled',
      ),
      /*#__PURE__*/ _react['default'].createElement(_grommet.Select, {
        id: 'select',
        name: 'select',
        placeholder: 'Select',
        value: value,
        options: options,
        onChange: function onChange(_ref2) {
          var option = _ref2.option;
          return setValue(option);
        },
        disabled: true,
      }),
    ),
  );
};

exports.Simple = Simple;
var _default = {
  title: 'Input/Select/Simple',
};
exports['default'] = _default;
