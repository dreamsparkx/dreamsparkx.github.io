(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){"use strict";var r=i(n(1)),a=n(25),o=n(18),l=n(34),u=i(l),c=i(n(44));function i(e){return e&&e.__esModule?e:{default:e}}var f=(0,u.default)();(0,a.render)(r.default.createElement(o.AppContainer,null,r.default.createElement(c.default,{store:f,history:l.history})),document.getElementById("app"))},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.history=void 0;var r=n(5),a=c(n(36)),o=c(n(37)),l=n(10),u=c(n(43));function c(e){return e&&e.__esModule?e:{default:e}}var i=t.history=(0,o.default)();var f=function(e){var t=(0,l.routerMiddleware)(i),n=[a.default,t];return(0,r.createStore)(u.default,e,(0,r.compose)(r.applyMiddleware.apply(void 0,n)))};t.default=f},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),a=n(10),o=(0,r.combineReducers)({routing:a.routerReducer});t.default=o},44:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=f(a),l=(f(n(0)),n(10)),u=n(52),c=n(18),i=n(51);function f(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(47),n(49);var m=o.default.createElement("p",null,"Gaurav Bharti.",o.default.createElement("br",null),o.default.createElement("span",{className:"fullStack"},"Full Stack Developer.")," Ninja."),v=o.default.createElement("div",{className:"row",id:"menu"},o.default.createElement("div",{className:"onecolumn"},o.default.createElement("ul",{className:"navbar-list"},o.default.createElement("li",{className:"navbar-item"},o.default.createElement("a",{className:"navbar-link-active",href:"/"},"Home"))))),y=function(e){function t(){return s(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,a.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.store,n=e.history;return o.default.createElement(u.Provider,{store:t},o.default.createElement(l.ConnectedRouter,{history:n},o.default.createElement("div",{className:"container"},o.default.createElement("section",{className:"header"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"onecolumn",style:{marginTop:"15%",marginBottom:"15%"}},m))),v,E)))}}]),t}(),h=o.default.createElement("div",null,o.default.createElement("h1",null,"Gaurav")),b=function(e){function t(){return s(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,a.Component),r(t,[{key:"render",value:function(){return h}}]),t}(),E=React.createElement(i.Switch,null,React.createElement(i.Route,{path:"/asd",component:b}));t.default=(0,c.hot)(e)(y)}).call(this,n(45)(e))},47:function(e,t,n){},49:function(e,t,n){}},[[23,2,1]]]);