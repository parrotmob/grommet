'use strict';

exports.__esModule = true;
exports['default'] = exports.Multiple = void 0;

var _react = _interopRequireDefault(require('react'));

var _grommet = require('grommet');

var _themes = require('grommet/themes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Multiple = function Multiple() {
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
      },
      /*#__PURE__*/ _react['default'].createElement(
        _grommet.Box,
        {
          width: 'medium',
        },
        /*#__PURE__*/ _react['default'].createElement(_grommet.FileInput, {
          multiple: true,
          onChange: function onChange(event) {
            var fileList = event.target.files;

            for (var i = 0; i < fileList.length; i += 1) {
              var file = fileList[i];
              console.log(file.name);
            }
          },
        }),
      ),
    ),
  );
};

exports.Multiple = Multiple;
var _default = {
  title: 'Input/FileInput/Multiple',
};
exports['default'] = _default;
