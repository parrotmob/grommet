import React from 'react';
import {
  grommet,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grommet,
  Text,
} from 'grommet';
export var Simple = function Simple() {
  return /*#__PURE__*/ React.createElement(
    Grommet,
    {
      theme: grommet,
    },
    /*#__PURE__*/ React.createElement(
      Box,
      {
        pad: 'large',
        gap: 'medium',
        height: 'large',
        width: 'medium',
      },
      /*#__PURE__*/ React.createElement(
        Card,
        {
          pad: 'small',
          background: 'dark-1',
          gap: 'medium',
        },
        /*#__PURE__*/ React.createElement(CardHeader, null, 'header'),
        /*#__PURE__*/ React.createElement(CardBody, null, 'body'),
        /*#__PURE__*/ React.createElement(CardFooter, null, 'footer'),
      ),
      /*#__PURE__*/ React.createElement(
        Card,
        {
          pad: 'small',
          gap: 'medium',
          background: 'light-4',
        },
        /*#__PURE__*/ React.createElement(CardBody, null, 'body'),
        /*#__PURE__*/ React.createElement(Box, null, 'box - random component'),
      ),
      /*#__PURE__*/ React.createElement(
        Card,
        {
          pad: 'small',
          gap: 'medium',
        },
        /*#__PURE__*/ React.createElement(CardBody, null, 'body'),
        /*#__PURE__*/ React.createElement(CardHeader, null, 'header'),
        /*#__PURE__*/ React.createElement(CardFooter, null, 'footer'),
      ),
      /*#__PURE__*/ React.createElement(
        Card,
        {
          pad: 'small',
          gap: 'medium',
          background: 'light-1',
        },
        /*#__PURE__*/ React.createElement(
          Text,
          null,
          'text - random component',
        ),
        /*#__PURE__*/ React.createElement(Box, null, 'box - random component'),
      ),
    ),
  );
};
export default {
  title: 'Layout/Card/Simple',
};
