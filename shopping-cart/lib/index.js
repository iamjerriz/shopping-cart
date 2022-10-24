'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

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
const ThemeContext = /*#__PURE__*/React__namespace.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});

function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = React.useContext(ThemeContext);
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
const Button$2 = /*#__PURE__*/React__namespace.forwardRef((_ref, ref) => {
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
  return /*#__PURE__*/jsxRuntime.jsx(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button$2.displayName = 'Button';

var divWithClassName = (className => /*#__PURE__*/React__namespace.forwardRef((p, ref) => /*#__PURE__*/jsxRuntime.jsx("div", { ...p,
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
  const BsComponent = /*#__PURE__*/React__namespace.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /*#__PURE__*/jsxRuntime.jsx(Tag, {
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
const Button = /*#__PURE__*/React__namespace.forwardRef(({
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
  return /*#__PURE__*/jsxRuntime.jsx(Component, { ...buttonProps,
    ...props,
    ref: ref,
    className: classNames(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && props.disabled && 'disabled')
  });
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps$1;
var Button$1 = Button;

const CardImg = /*#__PURE__*/React__namespace.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  variant,
  as: Component = 'img',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card-img');
  return /*#__PURE__*/jsxRuntime.jsx(Component, {
    ref: ref,
    className: classNames(variant ? `${prefix}-${variant}` : prefix, className),
    ...props
  });
});
CardImg.displayName = 'CardImg';
var CardImg$1 = CardImg;

const context = /*#__PURE__*/React__namespace.createContext(null);
context.displayName = 'CardHeaderContext';
var CardHeaderContext = context;

const CardHeader = /*#__PURE__*/React__namespace.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card-header');
  const contextValue = React.useMemo(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return /*#__PURE__*/jsxRuntime.jsx(CardHeaderContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsxRuntime.jsx(Component, {
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
const Card = /*#__PURE__*/React__namespace.forwardRef(({
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
  return /*#__PURE__*/jsxRuntime.jsx(Component, {
    ref: ref,
    ...props,
    className: classNames(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? /*#__PURE__*/jsxRuntime.jsx(CardBody, {
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
    return (jsxRuntime.jsx(Button$1, __assign({ style: { width: "40px", height: "40px" }, className: 'custom-button bg-secondary rounded-circle border-0', onClick: function () { return btn.onClickFunction(btn.param); } }, { children: btn.text })));
};

var CartView = function (_a) {
    var items = _a.items, btnFunction1 = _a.btnFunction1, btnFunction2 = _a.btnFunction2, btnText1 = _a.btnText1, btnText2 = _a.btnText2;
    React.useState([{ items: items }]);
    return (jsxRuntime.jsxs("div", __assign({ className: "text-center w-100" }, { children: [jsxRuntime.jsx("h1", { children: "Shopping Cart" }), jsxRuntime.jsx("div", __assign({ className: "d-flex flex-wrap w-100" }, { children: items[0].map(function (product) {
                    return jsxRuntime.jsxs(Card$1, __assign({ className: "d-flex bg-white shadow-sm m-2 col-2 p-1", style: { minWidth: "30%" } }, { children: [jsxRuntime.jsx(Card$1.Img, { className: "p-1", variant: "top", src: product.img, height: "100px", width: "100px", style: { objectFit: "contain" } }), jsxRuntime.jsxs(Card$1.Body, __assign({ className: "d-flex flex-column p-1" }, { children: [jsxRuntime.jsxs(Card$1.Title, __assign({ className: "d-flex flex-row justify-content-between my-3" }, { children: [jsxRuntime.jsx("span", __assign({ className: "fs-.5" }, { children: product.name })), jsxRuntime.jsxs("span", __assign({ className: "ms-2 text-muted" }, { children: ["\u20B1 ", product.price] }))] })), jsxRuntime.jsxs("div", __assign({ className: "d-flex flex-row justify-content-between" }, { children: [jsxRuntime.jsx(CustomButton, { text: btnText1, onClickFunction: btnFunction1, param: undefined }), jsxRuntime.jsx("span", __assign({ className: "ml-4 mr-4 cart " }, { children: product.quantity })), jsxRuntime.jsx(CustomButton, { text: btnText2, onClickFunction: btnFunction2, param: undefined })] }))] }))] }), product.id);
                }) }))] })));
};

var CartComponent = function (_a) {
    var items = _a.items, btnFunction1 = _a.btnFunction1, btnFunction2 = _a.btnFunction2, btnText1 = _a.btnText1, btnText2 = _a.btnText2;
    return (jsxRuntime.jsx(CartView, { items: [items], btnFunction1: btnFunction1, btnFunction2: btnFunction2, btnText1: btnText1, btnText2: btnText2 }));
};

module.exports = CartComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vVGhlbWVQcm92aWRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC91aS9lc20vQnV0dG9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vZGl2V2l0aENsYXNzTmFtZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vY2FtZWxpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9jcmVhdGVXaXRoQnNQcmVmaXguanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9CdXR0b24uanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9DYXJkSW1nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vQ2FyZEhlYWRlckNvbnRleHQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9DYXJkSGVhZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vQ2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcblx0Q29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG5cdGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cdHZhciBuYXRpdmVDb2RlU3RyaW5nID0gJ1tuYXRpdmUgY29kZV0nO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAmJiAhYXJnLnRvU3RyaW5nLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1tuYXRpdmUgY29kZV0nKSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9CUkVBS1BPSU5UUyA9IFsneHhsJywgJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG5leHBvcnQgY29uc3QgREVGQVVMVF9NSU5fQlJFQUtQT0lOVCA9ICd4cyc7XG5jb25zdCBUaGVtZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIHByZWZpeGVzOiB7fSxcbiAgYnJlYWtwb2ludHM6IERFRkFVTFRfQlJFQUtQT0lOVFMsXG4gIG1pbkJyZWFrcG9pbnQ6IERFRkFVTFRfTUlOX0JSRUFLUE9JTlRcbn0pO1xuY29uc3Qge1xuICBDb25zdW1lcixcbiAgUHJvdmlkZXJcbn0gPSBUaGVtZUNvbnRleHQ7XG5cbmZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoe1xuICBwcmVmaXhlcyA9IHt9LFxuICBicmVha3BvaW50cyA9IERFRkFVTFRfQlJFQUtQT0lOVFMsXG4gIG1pbkJyZWFrcG9pbnQgPSBERUZBVUxUX01JTl9CUkVBS1BPSU5ULFxuICBkaXIsXG4gIGNoaWxkcmVuXG59KSB7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICBwcmVmaXhlczogeyAuLi5wcmVmaXhlc1xuICAgIH0sXG4gICAgYnJlYWtwb2ludHMsXG4gICAgbWluQnJlYWtwb2ludCxcbiAgICBkaXJcbiAgfSksIFtwcmVmaXhlcywgYnJlYWtwb2ludHMsIG1pbkJyZWFrcG9pbnQsIGRpcl0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFZhbHVlLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJvb3RzdHJhcFByZWZpeChwcmVmaXgsIGRlZmF1bHRQcmVmaXgpIHtcbiAgY29uc3Qge1xuICAgIHByZWZpeGVzXG4gIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIHJldHVybiBwcmVmaXggfHwgcHJlZml4ZXNbZGVmYXVsdFByZWZpeF0gfHwgZGVmYXVsdFByZWZpeDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VCb290c3RyYXBCcmVha3BvaW50cygpIHtcbiAgY29uc3Qge1xuICAgIGJyZWFrcG9pbnRzXG4gIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIHJldHVybiBicmVha3BvaW50cztcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VCb290c3RyYXBNaW5CcmVha3BvaW50KCkge1xuICBjb25zdCB7XG4gICAgbWluQnJlYWtwb2ludFxuICB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICByZXR1cm4gbWluQnJlYWtwb2ludDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc1JUTCgpIHtcbiAgY29uc3Qge1xuICAgIGRpclxuICB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICByZXR1cm4gZGlyID09PSAncnRsJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9vdHN0cmFwQ29tcG9uZW50KENvbXBvbmVudCwgb3B0cykge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSBvcHRzID0ge1xuICAgIHByZWZpeDogb3B0c1xuICB9O1xuICBjb25zdCBpc0NsYXNzeSA9IENvbXBvbmVudC5wcm90b3R5cGUgJiYgQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50OyAvLyBJZiBpdCdzIGEgZnVuY3Rpb25hbCBjb21wb25lbnQgbWFrZSBzdXJlIHdlIGRvbid0IGJyZWFrIGl0IHdpdGggYSByZWZcblxuICBjb25zdCB7XG4gICAgcHJlZml4LFxuICAgIGZvcndhcmRSZWZBcyA9IGlzQ2xhc3N5ID8gJ3JlZicgOiAnaW5uZXJSZWYnXG4gIH0gPSBvcHRzO1xuICBjb25zdCBXcmFwcGVkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHsgLi4ucHJvcHNcbiAgfSwgcmVmKSA9PiB7XG4gICAgcHJvcHNbZm9yd2FyZFJlZkFzXSA9IHJlZjtcbiAgICBjb25zdCBic1ByZWZpeCA9IHVzZUJvb3RzdHJhcFByZWZpeChwcm9wcy5ic1ByZWZpeCwgcHJlZml4KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ29tcG9uZW50LCB7IC4uLnByb3BzLFxuICAgICAgYnNQcmVmaXg6IGJzUHJlZml4XG4gICAgfSk7XG4gIH0pO1xuICBXcmFwcGVkLmRpc3BsYXlOYW1lID0gYEJvb3RzdHJhcCgke0NvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZX0pYDtcbiAgcmV0dXJuIFdyYXBwZWQ7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCwgQ29uc3VtZXIgYXMgVGhlbWVDb25zdW1lciB9O1xuZXhwb3J0IGRlZmF1bHQgVGhlbWVQcm92aWRlcjsiLCJjb25zdCBfZXhjbHVkZWQgPSBbXCJhc1wiLCBcImRpc2FibGVkXCJdO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNUcml2aWFsSHJlZihocmVmKSB7XG4gIHJldHVybiAhaHJlZiB8fCBocmVmLnRyaW0oKSA9PT0gJyMnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJ1dHRvblByb3BzKHtcbiAgdGFnTmFtZSxcbiAgZGlzYWJsZWQsXG4gIGhyZWYsXG4gIHRhcmdldCxcbiAgcmVsLFxuICByb2xlLFxuICBvbkNsaWNrLFxuICB0YWJJbmRleCA9IDAsXG4gIHR5cGVcbn0pIHtcbiAgaWYgKCF0YWdOYW1lKSB7XG4gICAgaWYgKGhyZWYgIT0gbnVsbCB8fCB0YXJnZXQgIT0gbnVsbCB8fCByZWwgIT0gbnVsbCkge1xuICAgICAgdGFnTmFtZSA9ICdhJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGFnTmFtZSA9ICdidXR0b24nO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1ldGEgPSB7XG4gICAgdGFnTmFtZVxuICB9O1xuXG4gIGlmICh0YWdOYW1lID09PSAnYnV0dG9uJykge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogdHlwZSB8fCAnYnV0dG9uJyxcbiAgICAgIGRpc2FibGVkXG4gICAgfSwgbWV0YV07XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZGlzYWJsZWQgfHwgdGFnTmFtZSA9PT0gJ2EnICYmIGlzVHJpdmlhbEhyZWYoaHJlZikpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvbkNsaWNrID09IG51bGwgPyB2b2lkIDAgOiBvbkNsaWNrKGV2ZW50KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICcgJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGhhbmRsZUNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHRhZ05hbWUgPT09ICdhJykge1xuICAgIC8vIEVuc3VyZSB0aGVyZSdzIGEgaHJlZiBzbyBFbnRlciBjYW4gdHJpZ2dlciBhbmNob3IgYnV0dG9uLlxuICAgIGhyZWYgfHwgKGhyZWYgPSAnIycpO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBocmVmID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbe1xuICAgIHJvbGU6IHJvbGUgIT0gbnVsbCA/IHJvbGUgOiAnYnV0dG9uJyxcbiAgICAvLyBleHBsaWNpdGx5IHVuZGVmaW5lZCBzbyB0aGF0IGl0IG92ZXJyaWRlcyB0aGUgcHJvcHMgZGlzYWJsZWQgaW4gYSBzcHJlYWRcbiAgICAvLyBlLmcuIDxUYWcgey4uLnByb3BzfSB7Li4uaG9va1Byb3BzfSAvPlxuICAgIGRpc2FibGVkOiB1bmRlZmluZWQsXG4gICAgdGFiSW5kZXg6IGRpc2FibGVkID8gdW5kZWZpbmVkIDogdGFiSW5kZXgsXG4gICAgaHJlZixcbiAgICB0YXJnZXQ6IHRhZ05hbWUgPT09ICdhJyA/IHRhcmdldCA6IHVuZGVmaW5lZCxcbiAgICAnYXJpYS1kaXNhYmxlZCc6ICFkaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGRpc2FibGVkLFxuICAgIHJlbDogdGFnTmFtZSA9PT0gJ2EnID8gcmVsIDogdW5kZWZpbmVkLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93blxuICB9LCBtZXRhXTtcbn1cbmNvbnN0IEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKChfcmVmLCByZWYpID0+IHtcbiAgbGV0IHtcbiAgICBhczogYXNQcm9wLFxuICAgIGRpc2FibGVkXG4gIH0gPSBfcmVmLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQpO1xuXG4gIGNvbnN0IFtidXR0b25Qcm9wcywge1xuICAgIHRhZ05hbWU6IENvbXBvbmVudFxuICB9XSA9IHVzZUJ1dHRvblByb3BzKE9iamVjdC5hc3NpZ24oe1xuICAgIHRhZ05hbWU6IGFzUHJvcCxcbiAgICBkaXNhYmxlZFxuICB9LCBwcm9wcykpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgYnV0dG9uUHJvcHMsIHtcbiAgICByZWY6IHJlZlxuICB9KSk7XG59KTtcbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IChjbGFzc05hbWUgPT4gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHAsIHJlZikgPT4gLyojX19QVVJFX18qL19qc3goXCJkaXZcIiwgeyAuLi5wLFxuICByZWY6IHJlZixcbiAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHAuY2xhc3NOYW1lLCBjbGFzc05hbWUpXG59KSkpOyIsInZhciBySHlwaGVuID0gLy0oLikvZztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbWVsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2Uockh5cGhlbiwgZnVuY3Rpb24gKF8sIGNocikge1xuICAgIHJldHVybiBjaHIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59IiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgY2FtZWxpemUgZnJvbSAnZG9tLWhlbHBlcnMvY2FtZWxpemUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQm9vdHN0cmFwUHJlZml4IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5cbmNvbnN0IHBhc2NhbENhc2UgPSBzdHIgPT4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBjYW1lbGl6ZShzdHIpLnNsaWNlKDEpO1xuXG4vLyBUT0RPOiBlbXN0cmljdGVuICYgZml4IHRoZSB0eXBpbmcgaGVyZSEgYGNyZWF0ZVdpdGhCc1ByZWZpeDxURWxlbWVudFR5cGU+Li4uYFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlV2l0aEJzUHJlZml4KHByZWZpeCwge1xuICBkaXNwbGF5TmFtZSA9IHBhc2NhbENhc2UocHJlZml4KSxcbiAgQ29tcG9uZW50LFxuICBkZWZhdWx0UHJvcHNcbn0gPSB7fSkge1xuICBjb25zdCBCc0NvbXBvbmVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKCh7XG4gICAgY2xhc3NOYW1lLFxuICAgIGJzUHJlZml4LFxuICAgIGFzOiBUYWcgPSBDb21wb25lbnQgfHwgJ2RpdicsXG4gICAgLi4ucHJvcHNcbiAgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRQcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgoYnNQcmVmaXgsIHByZWZpeCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KFRhZywge1xuICAgICAgcmVmOiByZWYsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCByZXNvbHZlZFByZWZpeCksXG4gICAgICAuLi5wcm9wc1xuICAgIH0pO1xuICB9KTtcbiAgQnNDb21wb25lbnQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuICBCc0NvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICByZXR1cm4gQnNDb21wb25lbnQ7XG59IiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VCdXR0b25Qcm9wcyB9IGZyb20gJ0ByZXN0YXJ0L3VpL0J1dHRvbic7XG5pbXBvcnQgeyB1c2VCb290c3RyYXBQcmVmaXggfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogJ3ByaW1hcnknLFxuICBhY3RpdmU6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2Vcbn07XG5jb25zdCBCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoe1xuICBhcyxcbiAgYnNQcmVmaXgsXG4gIHZhcmlhbnQsXG4gIHNpemUsXG4gIGFjdGl2ZSxcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufSwgcmVmKSA9PiB7XG4gIGNvbnN0IHByZWZpeCA9IHVzZUJvb3RzdHJhcFByZWZpeChic1ByZWZpeCwgJ2J0bicpO1xuICBjb25zdCBbYnV0dG9uUHJvcHMsIHtcbiAgICB0YWdOYW1lXG4gIH1dID0gdXNlQnV0dG9uUHJvcHMoe1xuICAgIHRhZ05hbWU6IGFzLFxuICAgIC4uLnByb3BzXG4gIH0pO1xuICBjb25zdCBDb21wb25lbnQgPSB0YWdOYW1lO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ29tcG9uZW50LCB7IC4uLmJ1dHRvblByb3BzLFxuICAgIC4uLnByb3BzLFxuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIHByZWZpeCwgYWN0aXZlICYmICdhY3RpdmUnLCB2YXJpYW50ICYmIGAke3ByZWZpeH0tJHt2YXJpYW50fWAsIHNpemUgJiYgYCR7cHJlZml4fS0ke3NpemV9YCwgcHJvcHMuaHJlZiAmJiBwcm9wcy5kaXNhYmxlZCAmJiAnZGlzYWJsZWQnKVxuICB9KTtcbn0pO1xuQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0J1dHRvbic7XG5CdXR0b24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQm9vdHN0cmFwUHJlZml4IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5jb25zdCBDYXJkSW1nID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoIC8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbih7XG4gIGJzUHJlZml4LFxuICBjbGFzc05hbWUsXG4gIHZhcmlhbnQsXG4gIGFzOiBDb21wb25lbnQgPSAnaW1nJyxcbiAgLi4ucHJvcHNcbn0sIHJlZikgPT4ge1xuICBjb25zdCBwcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgoYnNQcmVmaXgsICdjYXJkLWltZycpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ29tcG9uZW50LCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHZhcmlhbnQgPyBgJHtwcmVmaXh9LSR7dmFyaWFudH1gIDogcHJlZml4LCBjbGFzc05hbWUpLFxuICAgIC4uLnByb3BzXG4gIH0pO1xufSk7XG5DYXJkSW1nLmRpc3BsYXlOYW1lID0gJ0NhcmRJbWcnO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZEltZzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBjb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5jb250ZXh0LmRpc3BsYXlOYW1lID0gJ0NhcmRIZWFkZXJDb250ZXh0JztcbmV4cG9ydCBkZWZhdWx0IGNvbnRleHQ7IiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQm9vdHN0cmFwUHJlZml4IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCBDYXJkSGVhZGVyQ29udGV4dCBmcm9tICcuL0NhcmRIZWFkZXJDb250ZXh0JztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5jb25zdCBDYXJkSGVhZGVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHtcbiAgYnNQcmVmaXgsXG4gIGNsYXNzTmFtZSxcbiAgLy8gTmVlZCB0byBkZWZpbmUgdGhlIGRlZmF1bHQgXCJhc1wiIGR1cmluZyBwcm9wIGRlc3RydWN0dXJpbmcgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHN0eWxlZC1jb21wb25lbnRzIGdpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LWJvb3RzdHJhcC9pc3N1ZXMvMzU5NVxuICBhczogQ29tcG9uZW50ID0gJ2RpdicsXG4gIC4uLnByb3BzXG59LCByZWYpID0+IHtcbiAgY29uc3QgcHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAnY2FyZC1oZWFkZXInKTtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIGNhcmRIZWFkZXJCc1ByZWZpeDogcHJlZml4XG4gIH0pLCBbcHJlZml4XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChDYXJkSGVhZGVyQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0VmFsdWUsXG4gICAgY2hpbGRyZW46IC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwge1xuICAgICAgcmVmOiByZWYsXG4gICAgICAuLi5wcm9wcyxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIHByZWZpeClcbiAgICB9KVxuICB9KTtcbn0pO1xuQ2FyZEhlYWRlci5kaXNwbGF5TmFtZSA9ICdDYXJkSGVhZGVyJztcbmV4cG9ydCBkZWZhdWx0IENhcmRIZWFkZXI7IiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VCb290c3RyYXBQcmVmaXggfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IGNyZWF0ZVdpdGhCc1ByZWZpeCBmcm9tICcuL2NyZWF0ZVdpdGhCc1ByZWZpeCc7XG5pbXBvcnQgZGl2V2l0aENsYXNzTmFtZSBmcm9tICcuL2RpdldpdGhDbGFzc05hbWUnO1xuaW1wb3J0IENhcmRJbWcgZnJvbSAnLi9DYXJkSW1nJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJy4vQ2FyZEhlYWRlcic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgRGl2U3R5bGVkQXNINSA9IGRpdldpdGhDbGFzc05hbWUoJ2g1Jyk7XG5jb25zdCBEaXZTdHlsZWRBc0g2ID0gZGl2V2l0aENsYXNzTmFtZSgnaDYnKTtcbmNvbnN0IENhcmRCb2R5ID0gY3JlYXRlV2l0aEJzUHJlZml4KCdjYXJkLWJvZHknKTtcbmNvbnN0IENhcmRUaXRsZSA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC10aXRsZScsIHtcbiAgQ29tcG9uZW50OiBEaXZTdHlsZWRBc0g1XG59KTtcbmNvbnN0IENhcmRTdWJ0aXRsZSA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1zdWJ0aXRsZScsIHtcbiAgQ29tcG9uZW50OiBEaXZTdHlsZWRBc0g2XG59KTtcbmNvbnN0IENhcmRMaW5rID0gY3JlYXRlV2l0aEJzUHJlZml4KCdjYXJkLWxpbmsnLCB7XG4gIENvbXBvbmVudDogJ2EnXG59KTtcbmNvbnN0IENhcmRUZXh0ID0gY3JlYXRlV2l0aEJzUHJlZml4KCdjYXJkLXRleHQnLCB7XG4gIENvbXBvbmVudDogJ3AnXG59KTtcbmNvbnN0IENhcmRGb290ZXIgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2NhcmQtZm9vdGVyJyk7XG5jb25zdCBDYXJkSW1nT3ZlcmxheSA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1pbWctb3ZlcmxheScpO1xuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBib2R5OiBmYWxzZVxufTtcbmNvbnN0IENhcmQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoe1xuICBic1ByZWZpeCxcbiAgY2xhc3NOYW1lLFxuICBiZyxcbiAgdGV4dCxcbiAgYm9yZGVyLFxuICBib2R5LFxuICBjaGlsZHJlbixcbiAgLy8gTmVlZCB0byBkZWZpbmUgdGhlIGRlZmF1bHQgXCJhc1wiIGR1cmluZyBwcm9wIGRlc3RydWN0dXJpbmcgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHN0eWxlZC1jb21wb25lbnRzIGdpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LWJvb3RzdHJhcC9pc3N1ZXMvMzU5NVxuICBhczogQ29tcG9uZW50ID0gJ2RpdicsXG4gIC4uLnByb3BzXG59LCByZWYpID0+IHtcbiAgY29uc3QgcHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAnY2FyZCcpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ29tcG9uZW50LCB7XG4gICAgcmVmOiByZWYsXG4gICAgLi4ucHJvcHMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgcHJlZml4LCBiZyAmJiBgYmctJHtiZ31gLCB0ZXh0ICYmIGB0ZXh0LSR7dGV4dH1gLCBib3JkZXIgJiYgYGJvcmRlci0ke2JvcmRlcn1gKSxcbiAgICBjaGlsZHJlbjogYm9keSA/IC8qI19fUFVSRV9fKi9fanN4KENhcmRCb2R5LCB7XG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9KSA6IGNoaWxkcmVuXG4gIH0pO1xufSk7XG5DYXJkLmRpc3BsYXlOYW1lID0gJ0NhcmQnO1xuQ2FyZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKENhcmQsIHtcbiAgSW1nOiBDYXJkSW1nLFxuICBUaXRsZTogQ2FyZFRpdGxlLFxuICBTdWJ0aXRsZTogQ2FyZFN1YnRpdGxlLFxuICBCb2R5OiBDYXJkQm9keSxcbiAgTGluazogQ2FyZExpbmssXG4gIFRleHQ6IENhcmRUZXh0LFxuICBIZWFkZXI6IENhcmRIZWFkZXIsXG4gIEZvb3RlcjogQ2FyZEZvb3RlcixcbiAgSW1nT3ZlcmxheTogQ2FyZEltZ092ZXJsYXlcbn0pOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJCdXR0b24i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
