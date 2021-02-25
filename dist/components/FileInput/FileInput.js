'use strict';

exports.__esModule = true;
exports.FileInput = void 0;

var _react = _interopRequireWildcard(require('react'));

var _styledComponents = _interopRequireWildcard(require('styled-components'));

var _defaultProps = require('../../default-props');

var _utils = require('../../utils');

var _Anchor = require('../Anchor');

var _Box = require('../Box');

var _Button = require('../Button');

var _FormContext = require('../Form/FormContext');

var _Keyboard = require('../Keyboard');

var _Text = require('../Text');

var _StyledFileInput = require('./StyledFileInput');

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

// We want the interaction of <input type="file" /> but none of its styling.
// So, we put what we want to show underneath and
// position the <input /> on top with an opacity of zero.
// If there are any files selected, we need to show the buttons to remove them.
// So, we offset the <input /> from the right by the appropriate width.
// We don't use Stack because of how we need to control the positioning.
var ContentsBox = (0, _styledComponents['default'])(_Box.Box).withConfig({
  displayName: 'FileInput__ContentsBox',
  componentId: 'sc-1jzq7im-0',
})(
  ['position:relative;', ' &:focus{', '}', ';', ';', ';'],
  function(props) {
    return props.disabled ? (0, _utils.disabledStyle)() : 'cursor: pointer;';
  },
  _utils.focusStyle,
  function(props) {
    return props.theme.fileInput && props.theme.fileInput.extend;
  },
  function(props) {
    return (
      props.hover &&
      props.theme.fileInput &&
      props.theme.fileInput.hover &&
      props.theme.fileInput.hover.extend
    );
  },
  function(props) {
    return (
      props.dragOver &&
      props.theme.fileInput &&
      props.theme.fileInput.dragOver &&
      props.theme.fileInput.dragOver.extend
    );
  },
);
var Label = (0, _styledComponents['default'])(_Text.Text).withConfig({
  displayName: 'FileInput__Label',
  componentId: 'sc-1jzq7im-1',
})(['', ';'], function(props) {
  return (
    props.theme.fileInput &&
    props.theme.fileInput.label &&
    props.theme.fileInput.label.extend
  );
});
var Message = (0, _styledComponents['default'])(_Text.Text).withConfig({
  displayName: 'FileInput__Message',
  componentId: 'sc-1jzq7im-2',
})(['', ';'], function(props) {
  return (
    props.theme.fileInput &&
    props.theme.fileInput.message &&
    props.theme.fileInput.message.extend
  );
});
var FileInput = /*#__PURE__*/ (0, _react.forwardRef)(function(_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
    background = _ref.background,
    border = _ref.border,
    disabled = _ref.disabled,
    id = _ref.id,
    plain = _ref.plain,
    renderFile = _ref.renderFile,
    messages = _ref.messages,
    margin = _ref.margin,
    multiple = _ref.multiple,
    name = _ref.name,
    _onChange = _ref.onChange,
    pad = _ref.pad,
    valueProp = _ref.value,
    rest = _objectWithoutPropertiesLoose(_ref, [
      'a11yTitle',
      'background',
      'border',
      'disabled',
      'id',
      'plain',
      'renderFile',
      'messages',
      'margin',
      'multiple',
      'name',
      'onChange',
      'pad',
      'value',
    ]);

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  var formContext = (0, _react.useContext)(_FormContext.FormContext);

  var _formContext$useFormI = formContext.useFormInput(name, valueProp, []),
    files = _formContext$useFormI[0],
    setFiles = _formContext$useFormI[1];

  var _React$useState = _react['default'].useState(),
    hover = _React$useState[0],
    setHover = _React$useState[1];

  var _React$useState2 = _react['default'].useState(),
    dragOver = _React$useState2[0],
    setDragOver = _React$useState2[1];

  var aggregateThreshold = (multiple && multiple.aggregateThreshold) || 10;
  var inputRef = (0, _utils.useForwardedRef)(ref);
  var controlRef = (0, _react.useRef)();
  var removeRef = (0, _react.useRef)();
  var RemoveIcon = theme.fileInput.icons.remove;

  var mergeTheme = function mergeTheme(propertyName, defaultKey) {
    var result = {};
    var themeProp = theme.fileInput[propertyName];
    if (themeProp)
      if (typeof themeProp !== 'object') {
        if (defaultKey) result[defaultKey] = themeProp;
        else result = themeProp;
      } else result = _extends({}, themeProp);
    var hoverThemeProp = theme.fileInput.hover[propertyName];
    if (hover && hoverThemeProp)
      if (typeof hoverThemeProp !== 'object') {
        if (defaultKey) result[defaultKey] = hoverThemeProp;
        else result = hoverThemeProp;
      } else result = _extends({}, result, hoverThemeProp);
    var dragOverThemeProp = theme.fileInput.dragOver[propertyName];
    if (dragOver && dragOverThemeProp)
      if (typeof dragOverThemeProp !== 'object') {
        if (defaultKey) result[defaultKey] = dragOverThemeProp;
        else result = dragOverThemeProp;
      } else result = _extends({}, result, dragOverThemeProp);
    return typeof result === 'object' && Object.keys(result).length === 0
      ? undefined
      : result;
  };

  return /*#__PURE__*/ _react['default'].createElement(
    _Keyboard.Keyboard,
    {
      onSpace: function onSpace(event) {
        if (controlRef.current === event.target) inputRef.current.click();
      },
      onEnter: function onEnter(event) {
        if (controlRef.current === event.target) inputRef.current.click();
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      ContentsBox,
      {
        ref: controlRef,
        tabIndex: !plain ? 0 : undefined,
        theme: theme,
        disabled: disabled,
        background: mergeTheme('background', 'color'),
        border: mergeTheme('border', 'side'),
        margin: mergeTheme('margin'),
        pad: mergeTheme('pad'),
        round: mergeTheme('round', 'size'),
        align: files.length ? 'stretch' : 'center',
        justify: 'center',
        hover: hover,
        onMouseOver: function onMouseOver() {
          return setHover(true);
        },
        onMouseOut: function onMouseOut() {
          return setHover(false);
        },
        dragOver: dragOver,
      },
      files.length > aggregateThreshold &&
        /*#__PURE__*/ _react['default'].createElement(
          _Box.Box,
          {
            direction: 'row',
            align: 'center',
            justify: 'between',
          },
          /*#__PURE__*/ _react['default'].createElement(
            Label,
            theme.fileInput.label,
            files.length,
            ' ',
            messages.files || 'files',
          ),
          /*#__PURE__*/ _react['default'].createElement(_Button.Button, {
            ref: removeRef,
            a11yTitle: messages.removeAll || 'remove all',
            icon: /*#__PURE__*/ _react['default'].createElement(
              RemoveIcon,
              null,
            ),
            hoverIndicator: true,
            onClick: function onClick(event) {
              event.stopPropagation();
              setFiles([]);
              inputRef.current.focus();
            },
          }),
        ),
      files.length > 0 &&
        files.length <= aggregateThreshold &&
        files.map(function(file, index) {
          return /*#__PURE__*/ _react['default'].createElement(
            _Box.Box,
            {
              key: file.name,
              direction: 'row',
              align: 'center',
              justify: 'between',
            },
            renderFile
              ? renderFile(file)
              : /*#__PURE__*/ _react['default'].createElement(
                  Label,
                  _extends(
                    {
                      weight:
                        theme.global.input.weight ||
                        theme.global.input.font.weight,
                      truncate: true,
                    },
                    theme.fileInput.label,
                  ),
                  file.name,
                ),
            /*#__PURE__*/ _react['default'].createElement(_Button.Button, {
              ref: index ? undefined : removeRef,
              a11yTitle: (messages.remove || 'remove') + ' ' + file.name,
              icon: /*#__PURE__*/ _react['default'].createElement(
                RemoveIcon,
                null,
              ),
              hoverIndicator: true,
              onClick: function onClick(event) {
                event.stopPropagation();
                var nextFiles = [].concat(files);
                nextFiles.splice(index, 1);
                setFiles(nextFiles);
                if (nextFiles.length === 0) inputRef.current.value = '';
                inputRef.current.focus();
              },
            }),
          );
        }),
      !files.length &&
        /*#__PURE__*/ _react['default'].createElement(
          Message,
          theme.fileInput.message,
          multiple
            ? messages.dropPromptMultiple || 'Drop files here or'
            : messages.dropPrompt || 'Drop file here or',
          ' ',
          /*#__PURE__*/ _react['default'].createElement(_Anchor.Anchor, {
            label: messages.browse || 'browse',
          }),
        ),
      /*#__PURE__*/ _react['default'].createElement(
        _StyledFileInput.StyledFileInput,
        _extends(
          {
            ref: inputRef,
            type: 'file',
            id: id,
            name: name,
            multiple: multiple,
            disabled: disabled,
            plain: true,
            rightOffset:
              removeRef.current &&
              removeRef.current.getBoundingClientRect().width,
          },
          rest,
          {
            onDragOver: function onDragOver() {
              return setDragOver(true);
            },
            onDragLeave: function onDragLeave() {
              return setDragOver(false);
            },
            onChange: function onChange(event) {
              event.persist();
              var fileList = event.target.files;
              var nextFiles = multiple ? [].concat(files) : [];

              var _loop = function _loop(i) {
                // avoid duplicates
                var existing =
                  nextFiles.filter(function(file) {
                    return (
                      file.name === fileList[i].name &&
                      file.size === fileList[i].size
                    );
                  }).length > 0;
                if (!existing) nextFiles.push(fileList[i]);
              };

              for (var i = 0; i < fileList.length; i += 1) {
                _loop(i);
              }

              setFiles(nextFiles);
              setDragOver(false);
              if (_onChange) _onChange(event);
            },
          },
        ),
      ),
    ),
  );
});
FileInput.defaultProps = {
  messages: {
    browse: 'browse',
    dropPrompt: 'Drop file here or',
    dropPromptMultiple: 'Drop files here or',
    files: 'files',
    remove: 'remove',
    removeAll: 'remove all',
  },
};
Object.setPrototypeOf(FileInput.defaultProps, _defaultProps.defaultProps);
FileInput.displayName = 'FileInput';
var FileInputDoc;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  FileInputDoc = require('./doc').doc(FileInput);
}

var FileInputWrapper = FileInputDoc || FileInput;
exports.FileInput = FileInputWrapper;
