import React from 'react';
import { Accordion, AccordionPanel, Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
export var Multiple = function Multiple() {
  return /*#__PURE__*/ React.createElement(
    Grommet,
    {
      theme: grommet,
    },
    /*#__PURE__*/ React.createElement(
      Box,
      null,
      /*#__PURE__*/ React.createElement(
        Accordion,
        {
          multiple: true,
        },
        /*#__PURE__*/ React.createElement(
          AccordionPanel,
          {
            label: 'Panel 1',
          },
          /*#__PURE__*/ React.createElement(
            Box,
            {
              background: 'light-2',
              overflow: 'auto',
              height: 'medium',
            },
            /*#__PURE__*/ React.createElement(
              Box,
              {
                height: 'large',
                flex: false,
              },
              'Panel 1 contents',
            ),
          ),
        ),
        /*#__PURE__*/ React.createElement(
          AccordionPanel,
          {
            label: 'Panel 2',
          },
          /*#__PURE__*/ React.createElement(
            Box,
            {
              background: 'light-2',
              style: {
                height: '50px',
              },
            },
            'Panel 2 contents',
          ),
        ),
        /*#__PURE__*/ React.createElement(
          AccordionPanel,
          {
            label: 'Panel 3',
          },
          /*#__PURE__*/ React.createElement(
            Box,
            {
              background: 'light-2',
              style: {
                height: '300px',
              },
            },
            'Panel 3 contents',
          ),
        ),
      ),
    ),
  );
};
Multiple.parameters = {
  chromatic: {
    disable: true,
  },
};
export default {
  title: 'Controls/Accordion/Multiple',
};
