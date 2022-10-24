import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useContext, useMemo, useState } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var classNames = classnames.exports;

const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const DEFAULT_MIN_BREAKPOINT = 'xs';
const ThemeContext = /*#__PURE__*/React.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});

function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

const _excluded = ["as", "disabled"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  const meta = {
    tagName
  };

  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }

  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (tagName === 'a') {
    // Ensure there's a href so Enter can trigger anchor button.
    href || (href = '#');

    if (disabled) {
      href = undefined;
    }
  }

  return [{
    role: role != null ? role : 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button$2 = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/jsx(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button$2.displayName = 'Button';

var divWithClassName = (className => /*#__PURE__*/React.forwardRef((p, ref) => /*#__PURE__*/jsx("div", { ...p,
  ref: ref,
  className: classNames(p.className, className)
})));

var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

const pascalCase = str => str[0].toUpperCase() + camelize(str).slice(1);

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = /*#__PURE__*/React.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /*#__PURE__*/jsx(Tag, {
      ref: ref,
      className: classNames(className, resolvedPrefix),
      ...props
    });
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

const defaultProps$1 = {
  variant: 'primary',
  active: false,
  disabled: false
};
const Button = /*#__PURE__*/React.forwardRef(({
  as,
  bsPrefix,
  variant,
  size,
  active,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn');
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    ...props
  });
  const Component = tagName;
  return /*#__PURE__*/jsx(Component, { ...buttonProps,
    ...props,
    ref: ref,
    className: classNames(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && props.disabled && 'disabled')
  });
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps$1;
var Button$1 = Button;

const CardImg = /*#__PURE__*/React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  variant,
  as: Component = 'img',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card-img');
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    className: classNames(variant ? `${prefix}-${variant}` : prefix, className),
    ...props
  });
});
CardImg.displayName = 'CardImg';
var CardImg$1 = CardImg;

const context = /*#__PURE__*/React.createContext(null);
context.displayName = 'CardHeaderContext';
var CardHeaderContext = context;

const CardHeader = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card-header');
  const contextValue = useMemo(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return /*#__PURE__*/jsx(CardHeaderContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsx(Component, {
      ref: ref,
      ...props,
      className: classNames(className, prefix)
    })
  });
});
CardHeader.displayName = 'CardHeader';
var CardHeader$1 = CardHeader;

const DivStyledAsH5 = divWithClassName('h5');
const DivStyledAsH6 = divWithClassName('h6');
const CardBody = createWithBsPrefix('card-body');
const CardTitle = createWithBsPrefix('card-title', {
  Component: DivStyledAsH5
});
const CardSubtitle = createWithBsPrefix('card-subtitle', {
  Component: DivStyledAsH6
});
const CardLink = createWithBsPrefix('card-link', {
  Component: 'a'
});
const CardText = createWithBsPrefix('card-text', {
  Component: 'p'
});
const CardFooter = createWithBsPrefix('card-footer');
const CardImgOverlay = createWithBsPrefix('card-img-overlay');
const defaultProps = {
  body: false
};
const Card = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card');
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classNames(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? /*#__PURE__*/jsx(CardBody, {
      children: children
    }) : children
  });
});
Card.displayName = 'Card';
Card.defaultProps = defaultProps;
var Card$1 = Object.assign(Card, {
  Img: CardImg$1,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: CardHeader$1,
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
});

var CustomButton = function (btn) {
    return (jsx(Button$1, __assign({ style: { width: "40px", height: "40px" }, className: 'custom-button bg-secondary rounded-circle border-0', onClick: function () { return btn.onClickFunction(btn.param); } }, { children: btn.text })));
};

var CartView = function (_a) {
    var items = _a.items, btnFunction1 = _a.btnFunction1, btnFunction2 = _a.btnFunction2, btnText1 = _a.btnText1, btnText2 = _a.btnText2;
    useState([{ items: items }]);
    return (jsxs("div", __assign({ className: "text-center w-100" }, { children: [jsx("h1", { children: "Shopping Cart" }), jsx("div", __assign({ className: "d-flex flex-wrap w-100" }, { children: items[0].map(function (product) {
                    return jsxs(Card$1, __assign({ className: "d-flex bg-white shadow-sm m-2 col-2 p-1", style: { minWidth: "30%" } }, { children: [jsx(Card$1.Img, { className: "p-1", variant: "top", src: product.img, height: "100px", width: "100px", style: { objectFit: "contain" } }), jsxs(Card$1.Body, __assign({ className: "d-flex flex-column p-1" }, { children: [jsxs(Card$1.Title, __assign({ className: "d-flex flex-row justify-content-between my-3" }, { children: [jsx("span", __assign({ className: "fs-.5" }, { children: product.name })), jsxs("span", __assign({ className: "ms-2 text-muted" }, { children: ["\u20B1 ", product.price] }))] })), jsxs("div", __assign({ className: "d-flex flex-row justify-content-between" }, { children: [jsx(CustomButton, { text: btnText1, onClickFunction: btnFunction1, param: undefined }), jsx("span", __assign({ className: "ml-4 mr-4 cart " }, { children: product.quantity })), jsx(CustomButton, { text: btnText2, onClickFunction: btnFunction2, param: undefined })] }))] }))] }), product.id);
                }) }))] })));
};

var CartComponent = function (_a) {
    var items = _a.items, btnFunction1 = _a.btnFunction1, btnFunction2 = _a.btnFunction2, btnText1 = _a.btnText1, btnText2 = _a.btnText2;
    return (jsx(CartView, { items: [items], btnFunction1: btnFunction1, btnFunction2: btnFunction2, btnText1: btnText1, btnText2: btnText2 }));
};

export { CartComponent as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXNtLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL1RoZW1lUHJvdmlkZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvdWkvZXNtL0J1dHRvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL2RpdldpdGhDbGFzc05hbWUuanMiLCIuLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2NhbWVsaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vY3JlYXRlV2l0aEJzUHJlZml4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vQnV0dG9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vQ2FyZEltZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL0NhcmRIZWFkZXJDb250ZXh0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vQ2FyZEhlYWRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL0NhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXHR2YXIgbmF0aXZlQ29kZVN0cmluZyA9ICdbbmF0aXZlIGNvZGVdJztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQlJFQUtQT0lOVFMgPSBbJ3h4bCcsICd4bCcsICdsZycsICdtZCcsICdzbScsICd4cyddO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUlOX0JSRUFLUE9JTlQgPSAneHMnO1xuY29uc3QgVGhlbWVDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBwcmVmaXhlczoge30sXG4gIGJyZWFrcG9pbnRzOiBERUZBVUxUX0JSRUFLUE9JTlRTLFxuICBtaW5CcmVha3BvaW50OiBERUZBVUxUX01JTl9CUkVBS1BPSU5UXG59KTtcbmNvbnN0IHtcbiAgQ29uc3VtZXIsXG4gIFByb3ZpZGVyXG59ID0gVGhlbWVDb250ZXh0O1xuXG5mdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHtcbiAgcHJlZml4ZXMgPSB7fSxcbiAgYnJlYWtwb2ludHMgPSBERUZBVUxUX0JSRUFLUE9JTlRTLFxuICBtaW5CcmVha3BvaW50ID0gREVGQVVMVF9NSU5fQlJFQUtQT0lOVCxcbiAgZGlyLFxuICBjaGlsZHJlblxufSkge1xuICBjb25zdCBjb250ZXh0VmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgcHJlZml4ZXM6IHsgLi4ucHJlZml4ZXNcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzLFxuICAgIG1pbkJyZWFrcG9pbnQsXG4gICAgZGlyXG4gIH0pLCBbcHJlZml4ZXMsIGJyZWFrcG9pbnRzLCBtaW5CcmVha3BvaW50LCBkaXJdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KFByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRWYWx1ZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VCb290c3RyYXBQcmVmaXgocHJlZml4LCBkZWZhdWx0UHJlZml4KSB7XG4gIGNvbnN0IHtcbiAgICBwcmVmaXhlc1xuICB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICByZXR1cm4gcHJlZml4IHx8IHByZWZpeGVzW2RlZmF1bHRQcmVmaXhdIHx8IGRlZmF1bHRQcmVmaXg7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQm9vdHN0cmFwQnJlYWtwb2ludHMoKSB7XG4gIGNvbnN0IHtcbiAgICBicmVha3BvaW50c1xuICB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICByZXR1cm4gYnJlYWtwb2ludHM7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQm9vdHN0cmFwTWluQnJlYWtwb2ludCgpIHtcbiAgY29uc3Qge1xuICAgIG1pbkJyZWFrcG9pbnRcbiAgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgcmV0dXJuIG1pbkJyZWFrcG9pbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlSXNSVEwoKSB7XG4gIGNvbnN0IHtcbiAgICBkaXJcbiAgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgcmV0dXJuIGRpciA9PT0gJ3J0bCc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChDb21wb25lbnQsIG9wdHMpIHtcbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykgb3B0cyA9IHtcbiAgICBwcmVmaXg6IG9wdHNcbiAgfTtcbiAgY29uc3QgaXNDbGFzc3kgPSBDb21wb25lbnQucHJvdG90eXBlICYmIENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDsgLy8gSWYgaXQncyBhIGZ1bmN0aW9uYWwgY29tcG9uZW50IG1ha2Ugc3VyZSB3ZSBkb24ndCBicmVhayBpdCB3aXRoIGEgcmVmXG5cbiAgY29uc3Qge1xuICAgIHByZWZpeCxcbiAgICBmb3J3YXJkUmVmQXMgPSBpc0NsYXNzeSA/ICdyZWYnIDogJ2lubmVyUmVmJ1xuICB9ID0gb3B0cztcbiAgY29uc3QgV3JhcHBlZCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKCh7IC4uLnByb3BzXG4gIH0sIHJlZikgPT4ge1xuICAgIHByb3BzW2ZvcndhcmRSZWZBc10gPSByZWY7XG4gICAgY29uc3QgYnNQcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgocHJvcHMuYnNQcmVmaXgsIHByZWZpeCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwgeyAuLi5wcm9wcyxcbiAgICAgIGJzUHJlZml4OiBic1ByZWZpeFxuICAgIH0pO1xuICB9KTtcbiAgV3JhcHBlZC5kaXNwbGF5TmFtZSA9IGBCb290c3RyYXAoJHtDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWV9KWA7XG4gIHJldHVybiBXcmFwcGVkO1xufVxuXG5leHBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQsIENvbnN1bWVyIGFzIFRoZW1lQ29uc3VtZXIgfTtcbmV4cG9ydCBkZWZhdWx0IFRoZW1lUHJvdmlkZXI7IiwiY29uc3QgX2V4Y2x1ZGVkID0gW1wiYXNcIiwgXCJkaXNhYmxlZFwiXTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzVHJpdmlhbEhyZWYoaHJlZikge1xuICByZXR1cm4gIWhyZWYgfHwgaHJlZi50cmltKCkgPT09ICcjJztcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VCdXR0b25Qcm9wcyh7XG4gIHRhZ05hbWUsXG4gIGRpc2FibGVkLFxuICBocmVmLFxuICB0YXJnZXQsXG4gIHJlbCxcbiAgcm9sZSxcbiAgb25DbGljayxcbiAgdGFiSW5kZXggPSAwLFxuICB0eXBlXG59KSB7XG4gIGlmICghdGFnTmFtZSkge1xuICAgIGlmIChocmVmICE9IG51bGwgfHwgdGFyZ2V0ICE9IG51bGwgfHwgcmVsICE9IG51bGwpIHtcbiAgICAgIHRhZ05hbWUgPSAnYSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZ05hbWUgPSAnYnV0dG9uJztcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXRhID0ge1xuICAgIHRhZ05hbWVcbiAgfTtcblxuICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IHR5cGUgfHwgJ2J1dHRvbicsXG4gICAgICBkaXNhYmxlZFxuICAgIH0sIG1ldGFdO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgaWYgKGRpc2FibGVkIHx8IHRhZ05hbWUgPT09ICdhJyAmJiBpc1RyaXZpYWxIcmVmKGhyZWYpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25DbGljayA9PSBudWxsID8gdm9pZCAwIDogb25DbGljayhldmVudCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBoYW5kbGVDbGljayhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGlmICh0YWdOYW1lID09PSAnYScpIHtcbiAgICAvLyBFbnN1cmUgdGhlcmUncyBhIGhyZWYgc28gRW50ZXIgY2FuIHRyaWdnZXIgYW5jaG9yIGJ1dHRvbi5cbiAgICBocmVmIHx8IChocmVmID0gJyMnKTtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgaHJlZiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW3tcbiAgICByb2xlOiByb2xlICE9IG51bGwgPyByb2xlIDogJ2J1dHRvbicsXG4gICAgLy8gZXhwbGljaXRseSB1bmRlZmluZWQgc28gdGhhdCBpdCBvdmVycmlkZXMgdGhlIHByb3BzIGRpc2FibGVkIGluIGEgc3ByZWFkXG4gICAgLy8gZS5nLiA8VGFnIHsuLi5wcm9wc30gey4uLmhvb2tQcm9wc30gLz5cbiAgICBkaXNhYmxlZDogdW5kZWZpbmVkLFxuICAgIHRhYkluZGV4OiBkaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRhYkluZGV4LFxuICAgIGhyZWYsXG4gICAgdGFyZ2V0OiB0YWdOYW1lID09PSAnYScgPyB0YXJnZXQgOiB1bmRlZmluZWQsXG4gICAgJ2FyaWEtZGlzYWJsZWQnOiAhZGlzYWJsZWQgPyB1bmRlZmluZWQgOiBkaXNhYmxlZCxcbiAgICByZWw6IHRhZ05hbWUgPT09ICdhJyA/IHJlbCA6IHVuZGVmaW5lZCxcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICBvbktleURvd246IGhhbmRsZUtleURvd25cbiAgfSwgbWV0YV07XG59XG5jb25zdCBCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoX3JlZiwgcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgYXM6IGFzUHJvcCxcbiAgICBkaXNhYmxlZFxuICB9ID0gX3JlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkKTtcblxuICBjb25zdCBbYnV0dG9uUHJvcHMsIHtcbiAgICB0YWdOYW1lOiBDb21wb25lbnRcbiAgfV0gPSB1c2VCdXR0b25Qcm9wcyhPYmplY3QuYXNzaWduKHtcbiAgICB0YWdOYW1lOiBhc1Byb3AsXG4gICAgZGlzYWJsZWRcbiAgfSwgcHJvcHMpKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIGJ1dHRvblByb3BzLCB7XG4gICAgcmVmOiByZWZcbiAgfSkpO1xufSk7XG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCAoY2xhc3NOYW1lID0+IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKChwLCByZWYpID0+IC8qI19fUFVSRV9fKi9fanN4KFwiZGl2XCIsIHsgLi4ucCxcbiAgcmVmOiByZWYsXG4gIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhwLmNsYXNzTmFtZSwgY2xhc3NOYW1lKVxufSkpKTsiLCJ2YXIgckh5cGhlbiA9IC8tKC4pL2c7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW1lbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJIeXBoZW4sIGZ1bmN0aW9uIChfLCBjaHIpIHtcbiAgICByZXR1cm4gY2hyLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufSIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGNhbWVsaXplIGZyb20gJ2RvbS1oZWxwZXJzL2NhbWVsaXplJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuXG5jb25zdCBwYXNjYWxDYXNlID0gc3RyID0+IHN0clswXS50b1VwcGVyQ2FzZSgpICsgY2FtZWxpemUoc3RyKS5zbGljZSgxKTtcblxuLy8gVE9ETzogZW1zdHJpY3RlbiAmIGZpeCB0aGUgdHlwaW5nIGhlcmUhIGBjcmVhdGVXaXRoQnNQcmVmaXg8VEVsZW1lbnRUeXBlPi4uLmBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVdpdGhCc1ByZWZpeChwcmVmaXgsIHtcbiAgZGlzcGxheU5hbWUgPSBwYXNjYWxDYXNlKHByZWZpeCksXG4gIENvbXBvbmVudCxcbiAgZGVmYXVsdFByb3BzXG59ID0ge30pIHtcbiAgY29uc3QgQnNDb21wb25lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoe1xuICAgIGNsYXNzTmFtZSxcbiAgICBic1ByZWZpeCxcbiAgICBhczogVGFnID0gQ29tcG9uZW50IHx8ICdkaXYnLFxuICAgIC4uLnByb3BzXG4gIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkUHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCBwcmVmaXgpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChUYWcsIHtcbiAgICAgIHJlZjogcmVmLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgcmVzb2x2ZWRQcmVmaXgpLFxuICAgICAgLi4ucHJvcHNcbiAgICB9KTtcbiAgfSk7XG4gIEJzQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiAgQnNDb21wb25lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgcmV0dXJuIEJzQ29tcG9uZW50O1xufSIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQnV0dG9uUHJvcHMgfSBmcm9tICdAcmVzdGFydC91aS9CdXR0b24nO1xuaW1wb3J0IHsgdXNlQm9vdHN0cmFwUHJlZml4IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHZhcmlhbnQ6ICdwcmltYXJ5JyxcbiAgYWN0aXZlOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuY29uc3QgQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHtcbiAgYXMsXG4gIGJzUHJlZml4LFxuICB2YXJpYW50LFxuICBzaXplLFxuICBhY3RpdmUsXG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn0sIHJlZikgPT4ge1xuICBjb25zdCBwcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgoYnNQcmVmaXgsICdidG4nKTtcbiAgY29uc3QgW2J1dHRvblByb3BzLCB7XG4gICAgdGFnTmFtZVxuICB9XSA9IHVzZUJ1dHRvblByb3BzKHtcbiAgICB0YWdOYW1lOiBhcyxcbiAgICAuLi5wcm9wc1xuICB9KTtcbiAgY29uc3QgQ29tcG9uZW50ID0gdGFnTmFtZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwgeyAuLi5idXR0b25Qcm9wcyxcbiAgICAuLi5wcm9wcyxcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBwcmVmaXgsIGFjdGl2ZSAmJiAnYWN0aXZlJywgdmFyaWFudCAmJiBgJHtwcmVmaXh9LSR7dmFyaWFudH1gLCBzaXplICYmIGAke3ByZWZpeH0tJHtzaXplfWAsIHByb3BzLmhyZWYgJiYgcHJvcHMuZGlzYWJsZWQgJiYgJ2Rpc2FibGVkJylcbiAgfSk7XG59KTtcbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgQ2FyZEltZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKCAvLyBOZWVkIHRvIGRlZmluZSB0aGUgZGVmYXVsdCBcImFzXCIgZHVyaW5nIHByb3AgZGVzdHJ1Y3R1cmluZyB0byBiZSBjb21wYXRpYmxlIHdpdGggc3R5bGVkLWNvbXBvbmVudHMgZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcy8zNTk1XG4oe1xuICBic1ByZWZpeCxcbiAgY2xhc3NOYW1lLFxuICB2YXJpYW50LFxuICBhczogQ29tcG9uZW50ID0gJ2ltZycsXG4gIC4uLnByb3BzXG59LCByZWYpID0+IHtcbiAgY29uc3QgcHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAnY2FyZC1pbWcnKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwge1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyh2YXJpYW50ID8gYCR7cHJlZml4fS0ke3ZhcmlhbnR9YCA6IHByZWZpeCwgY2xhc3NOYW1lKSxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn0pO1xuQ2FyZEltZy5kaXNwbGF5TmFtZSA9ICdDYXJkSW1nJztcbmV4cG9ydCBkZWZhdWx0IENhcmRJbWc7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgY29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuY29udGV4dC5kaXNwbGF5TmFtZSA9ICdDYXJkSGVhZGVyQ29udGV4dCc7XG5leHBvcnQgZGVmYXVsdCBjb250ZXh0OyIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgQ2FyZEhlYWRlckNvbnRleHQgZnJvbSAnLi9DYXJkSGVhZGVyQ29udGV4dCc7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgQ2FyZEhlYWRlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKCh7XG4gIGJzUHJlZml4LFxuICBjbGFzc05hbWUsXG4gIC8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbiAgYXM6IENvbXBvbmVudCA9ICdkaXYnLFxuICAuLi5wcm9wc1xufSwgcmVmKSA9PiB7XG4gIGNvbnN0IHByZWZpeCA9IHVzZUJvb3RzdHJhcFByZWZpeChic1ByZWZpeCwgJ2NhcmQtaGVhZGVyJyk7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICBjYXJkSGVhZGVyQnNQcmVmaXg6IHByZWZpeFxuICB9KSwgW3ByZWZpeF0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ2FyZEhlYWRlckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFZhbHVlLFxuICAgIGNoaWxkcmVuOiAvKiNfX1BVUkVfXyovX2pzeChDb21wb25lbnQsIHtcbiAgICAgIHJlZjogcmVmLFxuICAgICAgLi4ucHJvcHMsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBwcmVmaXgpXG4gICAgfSlcbiAgfSk7XG59KTtcbkNhcmRIZWFkZXIuZGlzcGxheU5hbWUgPSAnQ2FyZEhlYWRlcic7XG5leHBvcnQgZGVmYXVsdCBDYXJkSGVhZGVyOyIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQm9vdHN0cmFwUHJlZml4IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCBjcmVhdGVXaXRoQnNQcmVmaXggZnJvbSAnLi9jcmVhdGVXaXRoQnNQcmVmaXgnO1xuaW1wb3J0IGRpdldpdGhDbGFzc05hbWUgZnJvbSAnLi9kaXZXaXRoQ2xhc3NOYW1lJztcbmltcG9ydCBDYXJkSW1nIGZyb20gJy4vQ2FyZEltZyc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICcuL0NhcmRIZWFkZXInO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmNvbnN0IERpdlN0eWxlZEFzSDUgPSBkaXZXaXRoQ2xhc3NOYW1lKCdoNScpO1xuY29uc3QgRGl2U3R5bGVkQXNINiA9IGRpdldpdGhDbGFzc05hbWUoJ2g2Jyk7XG5jb25zdCBDYXJkQm9keSA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1ib2R5Jyk7XG5jb25zdCBDYXJkVGl0bGUgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2NhcmQtdGl0bGUnLCB7XG4gIENvbXBvbmVudDogRGl2U3R5bGVkQXNINVxufSk7XG5jb25zdCBDYXJkU3VidGl0bGUgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2NhcmQtc3VidGl0bGUnLCB7XG4gIENvbXBvbmVudDogRGl2U3R5bGVkQXNINlxufSk7XG5jb25zdCBDYXJkTGluayA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1saW5rJywge1xuICBDb21wb25lbnQ6ICdhJ1xufSk7XG5jb25zdCBDYXJkVGV4dCA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC10ZXh0Jywge1xuICBDb21wb25lbnQ6ICdwJ1xufSk7XG5jb25zdCBDYXJkRm9vdGVyID0gY3JlYXRlV2l0aEJzUHJlZml4KCdjYXJkLWZvb3RlcicpO1xuY29uc3QgQ2FyZEltZ092ZXJsYXkgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2NhcmQtaW1nLW92ZXJsYXknKTtcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgYm9keTogZmFsc2Vcbn07XG5jb25zdCBDYXJkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHtcbiAgYnNQcmVmaXgsXG4gIGNsYXNzTmFtZSxcbiAgYmcsXG4gIHRleHQsXG4gIGJvcmRlcixcbiAgYm9keSxcbiAgY2hpbGRyZW4sXG4gIC8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbiAgYXM6IENvbXBvbmVudCA9ICdkaXYnLFxuICAuLi5wcm9wc1xufSwgcmVmKSA9PiB7XG4gIGNvbnN0IHByZWZpeCA9IHVzZUJvb3RzdHJhcFByZWZpeChic1ByZWZpeCwgJ2NhcmQnKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwge1xuICAgIHJlZjogcmVmLFxuICAgIC4uLnByb3BzLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIHByZWZpeCwgYmcgJiYgYGJnLSR7Ymd9YCwgdGV4dCAmJiBgdGV4dC0ke3RleHR9YCwgYm9yZGVyICYmIGBib3JkZXItJHtib3JkZXJ9YCksXG4gICAgY2hpbGRyZW46IGJvZHkgPyAvKiNfX1BVUkVfXyovX2pzeChDYXJkQm9keSwge1xuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfSkgOiBjaGlsZHJlblxuICB9KTtcbn0pO1xuQ2FyZC5kaXNwbGF5TmFtZSA9ICdDYXJkJztcbkNhcmQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmFzc2lnbihDYXJkLCB7XG4gIEltZzogQ2FyZEltZyxcbiAgVGl0bGU6IENhcmRUaXRsZSxcbiAgU3VidGl0bGU6IENhcmRTdWJ0aXRsZSxcbiAgQm9keTogQ2FyZEJvZHksXG4gIExpbms6IENhcmRMaW5rLFxuICBUZXh0OiBDYXJkVGV4dCxcbiAgSGVhZGVyOiBDYXJkSGVhZGVyLFxuICBGb290ZXI6IENhcmRGb290ZXIsXG4gIEltZ092ZXJsYXk6IENhcmRJbWdPdmVybGF5XG59KTsiXSwibmFtZXMiOlsiQnV0dG9uIiwiX2pzeCIsImRlZmF1bHRQcm9wcyIsIkNhcmRJbWciLCJDYXJkSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0EsQ0FBQSxDQUFDLFlBQVk7QUFFYjtBQUNBLEVBQUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQztBQUVoQztFQUNDLFNBQVMsVUFBVSxHQUFHO0FBQ3ZCLEdBQUUsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ25CO0FBQ0EsR0FBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3QyxJQUFHLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUztBQUN0QjtBQUNBLElBQUcsSUFBSSxPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUM7QUFDNUI7SUFDRyxJQUFJLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLFFBQVEsRUFBRTtBQUNyRCxLQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDbEMsS0FBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7TUFDZixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztNQUN4QyxJQUFJLEtBQUssRUFBRTtBQUNoQixPQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDcEI7TUFDRDtBQUNMLEtBQUksTUFBTSxJQUFJLE9BQU8sS0FBSyxRQUFRLEVBQUU7S0FDaEMsSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7TUFDckcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNsQyxNQUFLLFNBQVM7TUFDVDtBQUNMO0FBQ0EsS0FBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRTtBQUN6QixNQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzVDLE9BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUNsQjtNQUNEO0tBQ0Q7SUFDRDtBQUNIO0FBQ0EsR0FBRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDekI7QUFDRjtFQUNDLElBQXFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDdEQsR0FBRSxVQUFVLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztHQUNoQyxNQUFBLENBQUEsT0FBQSxHQUFpQixVQUFVLENBQUM7QUFDOUIsR0FBRSxNQUtNO0FBQ1IsR0FBRSxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztHQUMvQjtBQUNGLEVBQUMsRUFBRSxFQUFBOzs7OztBQ3hESSxNQUFNLG1CQUFtQixHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsRSxNQUFNLHNCQUFzQixHQUFHLElBQUksQ0FBQztBQUMzQyxNQUFNLFlBQVksZ0JBQWdCLEtBQUssQ0FBQyxhQUFhLENBQUM7QUFDdEQsRUFBRSxRQUFRLEVBQUUsRUFBRTtBQUNkLEVBQUUsV0FBVyxFQUFFLG1CQUFtQjtBQUNsQyxFQUFFLGFBQWEsRUFBRSxzQkFBc0I7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUF5Qkg7QUFDTyxTQUFTLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUU7QUFDMUQsRUFBRSxNQUFNO0FBQ1IsSUFBSSxRQUFRO0FBQ1osR0FBRyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMvQixFQUFFLE9BQU8sTUFBTSxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFhLENBQUM7QUFDNUQ7O0FDeENBLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3JDO0FBQ0EsU0FBUyw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFO0FBSTVTLFNBQVMsYUFBYSxDQUFDLElBQUksRUFBRTtBQUNwQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQztBQUN0QyxDQUFDO0FBQ00sU0FBUyxjQUFjLENBQUM7QUFDL0IsRUFBRSxPQUFPO0FBQ1QsRUFBRSxRQUFRO0FBQ1YsRUFBRSxJQUFJO0FBQ04sRUFBRSxNQUFNO0FBQ1IsRUFBRSxHQUFHO0FBQ0wsRUFBRSxJQUFJO0FBQ04sRUFBRSxPQUFPO0FBQ1QsRUFBRSxRQUFRLEdBQUcsQ0FBQztBQUNkLEVBQUUsSUFBSTtBQUNOLENBQUMsRUFBRTtBQUNILEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNoQixJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDdkQsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQ3BCLEtBQUssTUFBTTtBQUNYLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUN6QixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsRUFBRSxNQUFNLElBQUksR0FBRztBQUNmLElBQUksT0FBTztBQUNYLEdBQUcsQ0FBQztBQUNKO0FBQ0EsRUFBRSxJQUFJLE9BQU8sS0FBSyxRQUFRLEVBQUU7QUFDNUIsSUFBSSxPQUFPLENBQUM7QUFDWixNQUFNLElBQUksRUFBRSxJQUFJLElBQUksUUFBUTtBQUM1QixNQUFNLFFBQVE7QUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDYixHQUFHO0FBQ0g7QUFDQSxFQUFFLE1BQU0sV0FBVyxHQUFHLEtBQUssSUFBSTtBQUMvQixJQUFJLElBQUksUUFBUSxJQUFJLE9BQU8sS0FBSyxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzVELE1BQU0sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzdCLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxRQUFRLEVBQUU7QUFDbEIsTUFBTSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDOUIsTUFBTSxPQUFPO0FBQ2IsS0FBSztBQUNMO0FBQ0EsSUFBSSxPQUFPLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QyxHQUFHLENBQUM7QUFDSjtBQUNBLEVBQUUsTUFBTSxhQUFhLEdBQUcsS0FBSyxJQUFJO0FBQ2pDLElBQUksSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtBQUMzQixNQUFNLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM3QixNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixLQUFLO0FBQ0wsR0FBRyxDQUFDO0FBQ0o7QUFDQSxFQUFFLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTtBQUN2QjtBQUNBLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN6QjtBQUNBLElBQUksSUFBSSxRQUFRLEVBQUU7QUFDbEIsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sQ0FBQztBQUNWLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLFFBQVE7QUFDeEM7QUFDQTtBQUNBLElBQUksUUFBUSxFQUFFLFNBQVM7QUFDdkIsSUFBSSxRQUFRLEVBQUUsUUFBUSxHQUFHLFNBQVMsR0FBRyxRQUFRO0FBQzdDLElBQUksSUFBSTtBQUNSLElBQUksTUFBTSxFQUFFLE9BQU8sS0FBSyxHQUFHLEdBQUcsTUFBTSxHQUFHLFNBQVM7QUFDaEQsSUFBSSxlQUFlLEVBQUUsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLFFBQVE7QUFDckQsSUFBSSxHQUFHLEVBQUUsT0FBTyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsU0FBUztBQUMxQyxJQUFJLE9BQU8sRUFBRSxXQUFXO0FBQ3hCLElBQUksU0FBUyxFQUFFLGFBQWE7QUFDNUIsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUNELE1BQU1BLFFBQU0sZ0JBQWdCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLO0FBQzVELEVBQUUsSUFBSTtBQUNOLElBQUksRUFBRSxFQUFFLE1BQU07QUFDZCxJQUFJLFFBQVE7QUFDWixHQUFHLEdBQUcsSUFBSTtBQUNWLE1BQU0sS0FBSyxHQUFHLDZCQUE2QixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUM3RDtBQUNBLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRTtBQUN0QixJQUFJLE9BQU8sRUFBRSxTQUFTO0FBQ3RCLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3BDLElBQUksT0FBTyxFQUFFLE1BQU07QUFDbkIsSUFBSSxRQUFRO0FBQ1osR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDYixFQUFFLG9CQUFvQkMsR0FBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO0FBQzVFLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUM7QUFDSEQsUUFBTSxDQUFDLFdBQVcsR0FBRyxRQUFROztBQ2hHN0IsdUJBQWUsQ0FBQyxTQUFTLGlCQUFpQixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsa0JBQWtCQyxHQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxDQUFDO0FBQ3RHLEVBQUUsR0FBRyxFQUFFLEdBQUc7QUFDVixFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQUM7O0FDTkgsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ1AsU0FBUyxRQUFRLENBQUMsTUFBTSxFQUFFO0FBQ3pDLEVBQUUsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBRSxHQUFHLEVBQUU7QUFDbkQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM3QixHQUFHLENBQUMsQ0FBQztBQUNMOztBQ0NBLE1BQU0sVUFBVSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RTtBQUNBO0FBQ2UsU0FBUyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7QUFDbkQsRUFBRSxXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUNsQyxFQUFFLFNBQVM7QUFDWCxFQUFFLFlBQVk7QUFDZCxDQUFDLEdBQUcsRUFBRSxFQUFFO0FBQ1IsRUFBRSxNQUFNLFdBQVcsZ0JBQWdCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyRCxJQUFJLFNBQVM7QUFDYixJQUFJLFFBQVE7QUFDWixJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsU0FBUyxJQUFJLEtBQUs7QUFDaEMsSUFBSSxHQUFHLEtBQUs7QUFDWixHQUFHLEVBQUUsR0FBRyxLQUFLO0FBQ2IsSUFBSSxNQUFNLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEUsSUFBSSxvQkFBb0JBLEdBQUksQ0FBQyxHQUFHLEVBQUU7QUFDbEMsTUFBTSxHQUFHLEVBQUUsR0FBRztBQUNkLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDO0FBQ3RELE1BQU0sR0FBRyxLQUFLO0FBQ2QsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHLENBQUMsQ0FBQztBQUNMLEVBQUUsV0FBVyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFDMUMsRUFBRSxXQUFXLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUN4QyxFQUFFLE9BQU8sV0FBVyxDQUFDO0FBQ3JCOztBQ3pCQSxNQUFNQyxjQUFZLEdBQUc7QUFDckIsRUFBRSxPQUFPLEVBQUUsU0FBUztBQUNwQixFQUFFLE1BQU0sRUFBRSxLQUFLO0FBQ2YsRUFBRSxRQUFRLEVBQUUsS0FBSztBQUNqQixDQUFDLENBQUM7QUFDRixNQUFNLE1BQU0sZ0JBQWdCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QyxFQUFFLEVBQUU7QUFDSixFQUFFLFFBQVE7QUFDVixFQUFFLE9BQU87QUFDVCxFQUFFLElBQUk7QUFDTixFQUFFLE1BQU07QUFDUixFQUFFLFNBQVM7QUFDWCxFQUFFLEdBQUcsS0FBSztBQUNWLENBQUMsRUFBRSxHQUFHLEtBQUs7QUFDWCxFQUFFLE1BQU0sTUFBTSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNyRCxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7QUFDdEIsSUFBSSxPQUFPO0FBQ1gsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDO0FBQ3RCLElBQUksT0FBTyxFQUFFLEVBQUU7QUFDZixJQUFJLEdBQUcsS0FBSztBQUNaLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRSxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFDNUIsRUFBRSxvQkFBb0JELEdBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxHQUFHLFdBQVc7QUFDdEQsSUFBSSxHQUFHLEtBQUs7QUFDWixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxTQUFTLEVBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxJQUFJLFFBQVEsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDO0FBQzVLLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUM5QixNQUFNLENBQUMsWUFBWSxHQUFHQyxjQUFZLENBQUM7QUFDbkMsZUFBZSxNQUFNOztBQy9CckIsTUFBTSxPQUFPLGdCQUFnQixLQUFLLENBQUMsVUFBVTtBQUM3QyxDQUFDO0FBQ0QsRUFBRSxRQUFRO0FBQ1YsRUFBRSxTQUFTO0FBQ1gsRUFBRSxPQUFPO0FBQ1QsRUFBRSxFQUFFLEVBQUUsU0FBUyxHQUFHLEtBQUs7QUFDdkIsRUFBRSxHQUFHLEtBQUs7QUFDVixDQUFDLEVBQUUsR0FBRyxLQUFLO0FBQ1gsRUFBRSxNQUFNLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDMUQsRUFBRSxvQkFBb0JELEdBQUksQ0FBQyxTQUFTLEVBQUU7QUFDdEMsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsU0FBUyxDQUFDO0FBQy9FLElBQUksR0FBRyxLQUFLO0FBQ1osR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0FBQ2hDLGdCQUFlLE9BQU87O0FDbkJ0QixNQUFNLE9BQU8sZ0JBQWdCLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkQsT0FBTyxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQztBQUMxQyx3QkFBZSxPQUFPOztBQ0d0QixNQUFNLFVBQVUsZ0JBQWdCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsRCxFQUFFLFFBQVE7QUFDVixFQUFFLFNBQVM7QUFDWDtBQUNBLEVBQUUsRUFBRSxFQUFFLFNBQVMsR0FBRyxLQUFLO0FBQ3ZCLEVBQUUsR0FBRyxLQUFLO0FBQ1YsQ0FBQyxFQUFFLEdBQUcsS0FBSztBQUNYLEVBQUUsTUFBTSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzdELEVBQUUsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU87QUFDdEMsSUFBSSxrQkFBa0IsRUFBRSxNQUFNO0FBQzlCLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNoQixFQUFFLG9CQUFvQkEsR0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRTtBQUN2RCxJQUFJLEtBQUssRUFBRSxZQUFZO0FBQ3ZCLElBQUksUUFBUSxlQUFlQSxHQUFJLENBQUMsU0FBUyxFQUFFO0FBQzNDLE1BQU0sR0FBRyxFQUFFLEdBQUc7QUFDZCxNQUFNLEdBQUcsS0FBSztBQUNkLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO0FBQzlDLEtBQUssQ0FBQztBQUNOLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDSCxVQUFVLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztBQUN0QyxtQkFBZSxVQUFVOztBQ25CekIsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0MsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0MsTUFBTSxRQUFRLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakQsTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxFQUFFO0FBQ25ELEVBQUUsU0FBUyxFQUFFLGFBQWE7QUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFDSCxNQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUU7QUFDekQsRUFBRSxTQUFTLEVBQUUsYUFBYTtBQUMxQixDQUFDLENBQUMsQ0FBQztBQUNILE1BQU0sUUFBUSxHQUFHLGtCQUFrQixDQUFDLFdBQVcsRUFBRTtBQUNqRCxFQUFFLFNBQVMsRUFBRSxHQUFHO0FBQ2hCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxRQUFRLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxFQUFFO0FBQ2pELEVBQUUsU0FBUyxFQUFFLEdBQUc7QUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFDSCxNQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNyRCxNQUFNLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzlELE1BQU0sWUFBWSxHQUFHO0FBQ3JCLEVBQUUsSUFBSSxFQUFFLEtBQUs7QUFDYixDQUFDLENBQUM7QUFDRixNQUFNLElBQUksZ0JBQWdCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1QyxFQUFFLFFBQVE7QUFDVixFQUFFLFNBQVM7QUFDWCxFQUFFLEVBQUU7QUFDSixFQUFFLElBQUk7QUFDTixFQUFFLE1BQU07QUFDUixFQUFFLElBQUk7QUFDTixFQUFFLFFBQVE7QUFDVjtBQUNBLEVBQUUsRUFBRSxFQUFFLFNBQVMsR0FBRyxLQUFLO0FBQ3ZCLEVBQUUsR0FBRyxLQUFLO0FBQ1YsQ0FBQyxFQUFFLEdBQUcsS0FBSztBQUNYLEVBQUUsTUFBTSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELEVBQUUsb0JBQW9CQSxHQUFJLENBQUMsU0FBUyxFQUFFO0FBQ3RDLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsS0FBSztBQUNaLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3BILElBQUksUUFBUSxFQUFFLElBQUksZ0JBQWdCQSxHQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2pELE1BQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsS0FBSyxDQUFDLEdBQUcsUUFBUTtBQUNqQixHQUFHLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7QUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFDakMsYUFBZSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUNuQyxFQUFFLEdBQUcsRUFBRUUsU0FBTztBQUNkLEVBQUUsS0FBSyxFQUFFLFNBQVM7QUFDbEIsRUFBRSxRQUFRLEVBQUUsWUFBWTtBQUN4QixFQUFFLElBQUksRUFBRSxRQUFRO0FBQ2hCLEVBQUUsSUFBSSxFQUFFLFFBQVE7QUFDaEIsRUFBRSxJQUFJLEVBQUUsUUFBUTtBQUNoQixFQUFFLE1BQU0sRUFBRUMsWUFBVTtBQUNwQixFQUFFLE1BQU0sRUFBRSxVQUFVO0FBQ3BCLEVBQUUsVUFBVSxFQUFFLGNBQWM7QUFDNUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
