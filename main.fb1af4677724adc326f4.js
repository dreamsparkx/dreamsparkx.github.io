(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){"use strict";var r=i(n(1)),a=n(20),o=n(10),l=n(29),u=i(l),c=i(n(41));function i(e){return e&&e.__esModule?e:{default:e}}var s=(0,u.default)();(0,a.render)(r.default.createElement(o.AppContainer,null,r.default.createElement(c.default,{store:s,history:l.history})),document.getElementById("app"))},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.history=void 0;var r=n(3),a=c(n(31)),o=c(n(32)),l=n(4),u=c(n(40));function c(e){return e&&e.__esModule?e:{default:e}}var i=t.history=(0,o.default)();var s=function(e){var t=(0,l.routerMiddleware)(i),n=[a.default,t];return(0,r.createStore)(u.default,e,(0,r.compose)(r.applyMiddleware.apply(void 0,n)))};t.default=s},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),a=n(4),o=(0,r.combineReducers)({routing:a.routerReducer});t.default=o},41:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=i(a),l=(i(n(0)),n(4)),u=n(47),c=n(10);function i(e){return e&&e.__esModule?e:{default:e}}n(43),n(45);var s=o.default.createElement("p",null,"Gaurav Bharti.",o.default.createElement("br",null),o.default.createElement("span",{className:"fullStack"},"Full Stack Developer.")," Ninja."),f=o.default.createElement("div",{className:"row",id:"menu"},o.default.createElement("div",{className:"onecolumn"},o.default.createElement("ul",{className:"navbar-list"},o.default.createElement("li",{className:"navbar-item"},o.default.createElement("a",{className:"navbar-link-active",href:"/"},"Home"))))),d=o.default.createElement("p",{className:"mainHeading"},"LALA"),p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.store,n=e.history;return o.default.createElement(u.Provider,{store:t},o.default.createElement(l.ConnectedRouter,{history:n},o.default.createElement("div",{className:"container"},o.default.createElement("section",{className:"header"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"onecolumn",style:{marginTop:"15%",marginBottom:"15%"}},s))),f,d)))}}]),t}();t.default=(0,c.hot)(e)(p)}).call(this,n(42)(e))},43:function(e,t,n){},45:function(e,t,n){}},[[18,2,1]]]);