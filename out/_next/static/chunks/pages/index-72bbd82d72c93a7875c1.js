_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var l=f[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=o.props[l],p=r[l]||new Set;"name"===l&&c||!p.has(d)?(p.add(d),r[l]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var b=h;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n("nKUr"),o=n("ODXe"),a=n("q1tI"),c=n("g4pe"),i=n.n(c),s=n("vRNQ"),u=n.n(s),l=n("YFqc"),d=n.n(l),f=n("pm6h"),p=n("9fDg"),h=n("tcOx"),b=n("G8i6"),j=n("afyi"),m=void 0,v=function(e){var t=e.isFetching,n=e.children;return t?Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(r.jsx)("h1",{children:"Loading..."})}):n},y=function(e){var t=e.contrast,n=e.onClick;return Object(r.jsx)("div",{style:{border:"2px solid ".concat(t),borderRadius:"10px",padding:"5px 8px",position:"absolute",top:5,right:5},children:Object(r.jsx)(p.a,{onClick:n,children:Object(r.jsx)(f.a,{style:{margin:0},size:"1rem",contrast:t,children:"Try"})})})},x=function(e){var t=e.item,n=e.handleColor,o=t.value,a=t.name,c=t.contrast;return"Black"===a?null:Object(r.jsx)(h.b,{color:o,children:Object(r.jsxs)(h.a,{children:[Object(r.jsx)(f.a,{onClick:n.bind(m,o,"bg"),contrast:c,children:a}),Object(r.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[Object(r.jsx)(j.a,{contrast:c}),Object(r.jsx)(y,{contrast:c,onClick:n.bind(m,o,"title")}),Object(r.jsx)(d.a,{href:"/detail/<id>",as:"/next-color_JS"+"/detail/".concat(Object(b.b)(t)),children:Object(r.jsx)(p.c,{style:{alignSelf:"end"},contrast:c,children:"See detail"})})]})]})})},_=function(e){var t=e.colors,n=e.isFetching,o=e.handleColor;return Object(r.jsx)(v,{isFetching:n,children:Object(r.jsx)(h.c,{children:t.map((function(e,t){return Object(r.jsx)(x,{item:e,handleColor:o},t)}))})})},g=n("8k8F");function O(){var e=Object(a.useState)("#0070f3"),t=e[0],n=e[1],c=Object(a.useState)("#f2efe8"),s=c[0],l=c[1],d=Object(g.a)(20,{reset:!1}),f=Object(o.a)(d,3),h=f[0],b=f[1],j=f[2],m=Object(a.useCallback)((function(e,t){"bg"===t?l(e):n(e),window.scrollTo(0,0)}),[]),v=Object(a.useCallback)((function(){j(),window.scrollTo(0,document.body.scrollHeight)}),[j]);return Object(r.jsxs)("div",{className:u.a.container,style:{backgroundColor:s},children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:"Create Next App"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)("header",{className:u.a.main,children:[Object(r.jsxs)("h1",{className:u.a.title,children:["Welcome to ",Object(r.jsx)("span",{style:{color:t},children:"Color"}),".js"]}),Object(r.jsxs)("p",{className:u.a.description,children:["Get started by coping ",Object(r.jsx)("code",{className:u.a.code,children:s})]}),Object(r.jsx)(p.b,{onClick:v,children:"Fetch more"})]}),Object(r.jsx)(_,{colors:h,isFetching:b,handleColor:m})]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){c(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",logo:"Home_logo__1YbrH"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);