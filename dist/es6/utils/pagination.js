function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { useCallback, useEffect, useState } from 'react';
export var normalizeShow = function normalizeShow(showProp, step) {
  var page; // by default, show refers to the index of an item,
  // but if using pagination, show can take the form of { page: # },
  // where page refers to the page # to show

  if (typeof showProp === 'number') page = Math.ceil((showProp + 1) / step);else if (typeof showProp === 'object' && 'page' in showProp) page = showProp.page;
  return page;
};
export var usePagination = function usePagination(_ref) {
  var data = _ref.data,
      page = _ref.page,
      step = _ref.step,
      rest = _objectWithoutPropertiesLoose(_ref, ["data", "page", "step"]);

  var totalPages = data ? Math.ceil(data.length / step) : 0;

  var _useState = useState(Math.min(page, totalPages) || 1),
      activePage = _useState[0],
      setActivePage = _useState[1];

  var itemsBeginIndex = step * (activePage - 1);
  var itemsEndIndex = itemsBeginIndex + step;
  var getCurrentItems = useCallback(function (items) {
    if (Array.isArray(items)) {
      return items.length ? items.slice(itemsBeginIndex, itemsEndIndex) : undefined;
    }

    return items;
  }, [itemsBeginIndex, itemsEndIndex]);

  var _useState2 = useState(getCurrentItems(data)),
      currentItems = _useState2[0],
      setCurrentItems = _useState2[1];

  useEffect(function () {
    if (data) {
      setCurrentItems(getCurrentItems(data));
    }
  }, [data, getCurrentItems, setCurrentItems]);

  var paginationProps = _extends({
    numberItems: data && data.length,
    onChange: function onChange(event) {
      return setActivePage(event.page);
    },
    page: page,
    step: step
  }, rest);

  return [currentItems, paginationProps];
};