'use strict';

exports.__esModule = true;
exports['default'] = exports.Labelled = void 0;

var _react = _interopRequireDefault(require('react'));

var _grommet = require('grommet');

var _themes = require('grommet/themes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Labelled = function Labelled() {
  var meterValue = 30;
  return /*#__PURE__*/ _react['default'].createElement(
    _grommet.Grommet,
    {
      theme: _themes.grommet,
    },
    /*#__PURE__*/ _react['default'].createElement(
      _grommet.Box,
      {
        align: 'center',
        pad: 'large',
      },
      /*#__PURE__*/ _react['default'].createElement(
        _grommet.Stack,
        {
          anchor: 'center',
        },
        /*#__PURE__*/ _react['default'].createElement(_grommet.Meter, {
          type: 'circle',
          background: 'light-2',
          values: [
            {
              value: meterValue,
            },
          ],
          size: 'xsmall',
          thickness: 'small',
        }),
        /*#__PURE__*/ _react['default'].createElement(
          _grommet.Box,
          {
            direction: 'row',
            align: 'center',
            pad: {
              bottom: 'xsmall',
            },
          },
          /*#__PURE__*/ _react['default'].createElement(
            _grommet.Text,
            {
              size: 'xlarge',
              weight: 'bold',
            },
            meterValue,
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _grommet.Text,
            {
              size: 'small',
            },
            '%',
          ),
        ),
      ),
    ),
  );
};

exports.Labelled = Labelled;
var _default = {
  title: 'Visualizations/Meter/Labelled',
};
exports['default'] = _default;
