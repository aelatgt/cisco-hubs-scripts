import 'https://cdn.jsdelivr.net/npm/ethereal@2.1.3/dist/ethereal.umd.js';
import * as Excalidraw from 'https://www.aelatgt.org/excalidraw/static/js/excalidraw.hubs.min.js';

var style$1 = '';

var n$1,l$2,u$2,t$2,r$2,o$2,e$2={},c$2=[],s$2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a$2(n,l){for(var u in l)n[u]=l[u];return n}function h$1(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return y$2(l,f,t,r,null)}function y$2(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u$2:o};return null==o&&null!=l$2.vnode&&l$2.vnode(f),f}function d$1(n){return n.children}function _(n,l){this.props=n,this.context=l;}function k$1(n,l){if(null==l)return n.__?k$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k$1(n):null}function b$2(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b$2(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$2.push(n)&&!g$2.__r++||o$2!==l$2.debounceRendering)&&((o$2=l$2.debounceRendering)||r$2)(g$2);}function g$2(){for(var n;g$2.__r=t$2.length;)n=t$2.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$2=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=a$2({},t)).__v=t.__v+1,j$2(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?k$1(t):r,t.__h),z$1(u,t),t.__e!=r&&b$2(t)));});}function w$2(n,l,u,i,t,r,o,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c$2,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y$2(null,_,null,null,_):Array.isArray(_)?y$2(d$1,{children:_},null,null,null):_.__b>0?y$2(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j$2(n,_,p=p||e$2,t,r,o,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x$1(_,s,n):s=P$1(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k$1(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k$1(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M$1(g[h],g[++h],g[++h]);}function x$1(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?x$1(i,l,u):P$1(u,i,i,t,i.__e,l));return l}function A$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A$2(n,l);}):l.push(n)),l}function P$1(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r;}return void 0!==o?o:t.nextSibling}function C$1(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||H$1(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||H$1(n,r,l[r],u[r],i);}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s$2.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?T$2:I,r):n.removeEventListener(l,r?T$2:I,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l$2.event?l$2.event(n):n);}function T$2(n){this.l[n.type+!0](l$2.event?l$2.event(n):n);}function j$2(n,u,i,t,r,o,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l$2.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O$1),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a$2({},h.__s)),a$2(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l$2.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a$2(a$2({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d$1&&null==s.key?s.props.children:s,w$2(n,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,r,o,f,c);(s=l$2.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l$2.__e(n,u,i);}}function z$1(n,u){l$2.__c&&l$2.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$2.__e(n,u.__v);}});}function L$1(l,u,i,t,r,o,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(o=o&&n$1.call(l.childNodes),a=(y=i.props||e$2).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,r,c),v)u.__k=[];else if(_=u.props.children,w$2(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&k$1(i,0),c),null!=o)for(_=o.length;_--;)null!=o[_]&&h$1(o[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==y.value||_!==l.value||"progress"===d&&!_)&&H$1(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H$1(l,"checked",_,y.checked,!1));}return l}function M$1(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$2.__e(n,i);}}function N(n,u,i){var t,r;if(l$2.unmount&&l$2.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$1(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$2.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&N(t[r],u,"function"!=typeof n.type);i||null==n.__e||h$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function S$1(u,i,t){var r,o,f;l$2.__&&l$2.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j$2(i,u=(!r&&t||i).__k=v$1(d$1,null,[u]),o||e$2,e$2,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n$1.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),z$1(f,u);}n$1=c$2.slice,l$2={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u$2=0,_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a$2({},this.state),"function"==typeof n&&(n=n(a$2({},u),this.props)),n&&a$2(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m$1(this));},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},_.prototype.render=d$1,t$2=[],r$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$2.__r=0;

var t$1,u$1,r$1,o$1=0,i$1=[],c$1=l$2.__b,f=l$2.__r,e$1=l$2.diffed,a$1=l$2.__c,v=l$2.unmount;function m(t,r){l$2.__h&&l$2.__h(u$1,t,o$1||r),o$1=0;var i=u$1.__H||(u$1.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l$1(n){return o$1=1,p(w$1,n)}function p(n,r,o){var i=m(t$1++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u$1),i.__}function y$1(r,o){var i=m(t$1++,3);!l$2.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u$1.__H.__h.push(i));}function h(r,o){var i=m(t$1++,4);!l$2.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u$1.__h.push(i));}function s$1(n){return o$1=5,d(function(){return {current:n}},[])}function d(n,u){var r=m(t$1++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o$1=8,d(function(){return n},t)}function T$1(t,u){l$2.useDebugValue&&l$2.useDebugValue(u?u(t):t);}function x(){for(var t;t=i$1.shift();)if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],l$2.__e(u,t.__v);}}l$2.__b=function(n){u$1=null,c$1&&c$1(n);},l$2.__r=function(n){f&&f(n),t$1=0;var r=(u$1=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},l$2.diffed=function(t){e$1&&e$1(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i$1.push(o)&&r$1===l$2.requestAnimationFrame||((r$1=l$2.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b$1&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b$1&&(t=requestAnimationFrame(u));})(x)),u$1=null;},l$2.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$2.__e(r,t.__v);}}),a$1&&a$1(t,u);},l$2.unmount=function(t){v&&v(t);var u,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{g$1(n);}catch(n){u=n;}}),u&&l$2.__e(u,r.__v));};var b$1="function"==typeof requestAnimationFrame;function g$1(n){var t=u$1,r=n.__c;"function"==typeof r&&(n.__c=void 0,r()),u$1=t;}function j$1(n){var t=u$1;n.__c=n.__(),u$1=t;}function k(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}(E.prototype=new _).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=l$2.__b;l$2.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var A=l$2.__e;l$2.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e);};var O=l$2.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function M(){this.u=null,this.o=null;}l$2.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new _).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&v$1(d$1,null,n.fallback);return u&&(u.__h=null),[v$1(d$1,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(M.prototype=new _).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u();};e?e(o):o();}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=A$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t);});};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V="undefined"!=typeof document,z=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function B(n,t,e){return null==t.__k&&(t.textContent=""),S$1(n,t),"function"==typeof e&&e(),n?n.__c:null}_.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(_.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=l$2.event;function Z(){}function Y(){return this.cancelBubble}function q(){return this.defaultPrevented}l$2.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=q,n.nativeEvent=n};var J={configurable:!0,get:function(){return this.class}},K=l$2.vnode;l$2.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];V&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!z(e.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():u&&P.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r,e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J));}n.$$typeof=j,K&&K(n);};var Q=l$2.__r;l$2.__r=function(n){Q&&Q(n);};

const e=Symbol(),t=Symbol(),r=Symbol(),n=Object.getPrototypeOf,o=new WeakMap,s=e=>e&&(o.has(e)?o.get(e):n(e)===Object.prototype||n(e)===Array.prototype),c=e=>"object"==typeof e&&null!==e,l=(n,o)=>{let s=!1;const c=(e,t)=>{if(!s){let r=e.a.get(n);r||(r=new Set,e.a.set(n,r)),r.add(t);}},l={f:o,get(e,t){return t===r?n:(c(this,t),i(e[t],this.a,this.c))},has(e,r){return r===t?(s=!0,this.a.delete(n),!0):(c(this,r),r in e)},ownKeys(t){return c(this,e),Reflect.ownKeys(t)}};return o&&(l.set=l.deleteProperty=()=>!1),l},i=(e,t,o)=>{if(!s(e))return e;const c=e[r]||e,i=(e=>Object.isFrozen(e)||Object.values(Object.getOwnPropertyDescriptors(e)).some(e=>!e.writable))(c);let u=o&&o.get(c);return u&&u.f===i||(u=l(c,i),u.p=new Proxy(i?(e=>{if(Array.isArray(e))return Array.from(e);const t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0;}),Object.create(n(e),t)})(c):c,u),o&&o.set(c,u)),u.a=t,u.c=o,u.p},u=(e,t)=>{const r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some((e,t)=>e!==n[t])},a=(t,r,n,o)=>{if(Object.is(t,r))return !1;if(!c(t)||!c(r))return !0;const s=n.get(t);if(!s)return !0;if(o){const e=o.get(t);if(e&&e.n===r)return e.g;o.set(t,{n:r,g:!1});}let l=null;for(const c of s){const s=c===e?u(t,r):a(t[c],r[c],n,o);if(!0!==s&&!1!==s||(l=s),l)break}return null===l&&(l=!0),o&&o.set(t,{n:r,g:l}),l},y=e=>s(e)&&e[r]||null,b=(e,t=!0)=>{o.set(e,t);},g=(e,t)=>{const r=[],n=(e,o)=>{const s=t.get(e);s?s.forEach(t=>{n(e[t],o?[...o,t]:[t]);}):o&&r.push(o);};return n(e),r};

const VERSION = Symbol();
const LISTENERS = Symbol();
const SNAPSHOT = Symbol();
const HANDLER = Symbol();
const PROMISE_RESULT = Symbol();
const PROMISE_ERROR = Symbol();
const refSet = /* @__PURE__ */ new WeakSet();
const isObject = (x) => typeof x === "object" && x !== null;
const canProxy = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer);
const proxyCache = /* @__PURE__ */ new WeakMap();
let globalVersion = 1;
const snapshotCache = /* @__PURE__ */ new WeakMap();
const proxy = (initialObject = {}) => {
  if (!isObject(initialObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(initialObject);
  if (found) {
    return found;
  }
  let version = globalVersion;
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion) => {
    if (!nextVersion) {
      nextVersion = ++globalVersion;
    }
    if (version !== nextVersion) {
      version = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  const propListeners = /* @__PURE__ */ new Map();
  const getPropListener = (prop) => {
    let propListener = propListeners.get(prop);
    if (!propListener) {
      propListener = (op, nextVersion) => {
        const newOp = [...op];
        newOp[1] = [prop, ...newOp[1]];
        notifyUpdate(newOp, nextVersion);
      };
      propListeners.set(prop, propListener);
    }
    return propListener;
  };
  const popPropListener = (prop) => {
    const propListener = propListeners.get(prop);
    propListeners.delete(prop);
    return propListener;
  };
  const createSnapshot = (target, receiver) => {
    const cache = snapshotCache.get(receiver);
    if ((cache == null ? void 0 : cache[0]) === version) {
      return cache[1];
    }
    const snapshot2 = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
    b(snapshot2, true);
    snapshotCache.set(receiver, [version, snapshot2]);
    Reflect.ownKeys(target).forEach((key) => {
      const value = Reflect.get(target, key, receiver);
      if (refSet.has(value)) {
        b(value, false);
        snapshot2[key] = value;
      } else if (value instanceof Promise) {
        if (PROMISE_RESULT in value) {
          snapshot2[key] = value[PROMISE_RESULT];
        } else {
          const errorOrPromise = value[PROMISE_ERROR] || value;
          Object.defineProperty(snapshot2, key, {
            get() {
              if (PROMISE_RESULT in value) {
                return value[PROMISE_RESULT];
              }
              throw errorOrPromise;
            }
          });
        }
      } else if (value == null ? void 0 : value[LISTENERS]) {
        snapshot2[key] = value[SNAPSHOT];
      } else {
        snapshot2[key] = value;
      }
    });
    Object.freeze(snapshot2);
    return snapshot2;
  };
  const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
  const handler = {
    get(target, prop, receiver) {
      if (prop === VERSION) {
        return version;
      }
      if (prop === LISTENERS) {
        return listeners;
      }
      if (prop === SNAPSHOT) {
        return createSnapshot(target, receiver);
      }
      if (prop === HANDLER) {
        return handler;
      }
      return Reflect.get(target, prop, receiver);
    },
    deleteProperty(target, prop) {
      const prevValue = Reflect.get(target, prop);
      const childListeners = prevValue == null ? void 0 : prevValue[LISTENERS];
      if (childListeners) {
        childListeners.delete(popPropListener(prop));
      }
      const deleted = Reflect.deleteProperty(target, prop);
      if (deleted) {
        notifyUpdate(["delete", [prop], prevValue]);
      }
      return deleted;
    },
    is: Object.is,
    canProxy,
    set(target, prop, value, receiver) {
      var _a;
      const prevValue = Reflect.get(target, prop, receiver);
      if (this.is(prevValue, value)) {
        return true;
      }
      const childListeners = prevValue == null ? void 0 : prevValue[LISTENERS];
      if (childListeners) {
        childListeners.delete(popPropListener(prop));
      }
      if (isObject(value)) {
        value = y(value) || value;
      }
      let nextValue;
      if ((_a = Object.getOwnPropertyDescriptor(target, prop)) == null ? void 0 : _a.set) {
        nextValue = value;
      } else if (value instanceof Promise) {
        nextValue = value.then((v) => {
          nextValue[PROMISE_RESULT] = v;
          notifyUpdate(["resolve", [prop], v]);
          return v;
        }).catch((e) => {
          nextValue[PROMISE_ERROR] = e;
          notifyUpdate(["reject", [prop], e]);
        });
      } else if (value == null ? void 0 : value[LISTENERS]) {
        nextValue = value;
        nextValue[LISTENERS].add(getPropListener(prop));
      } else if (this.canProxy(value)) {
        nextValue = proxy(value);
        nextValue[LISTENERS].add(getPropListener(prop));
      } else {
        nextValue = value;
      }
      Reflect.set(target, prop, nextValue, receiver);
      notifyUpdate(["set", [prop], value, prevValue]);
      return true;
    }
  };
  const proxyObject = new Proxy(baseObject, handler);
  proxyCache.set(initialObject, proxyObject);
  Reflect.ownKeys(initialObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(initialObject, key);
    if (desc.get || desc.set) {
      Object.defineProperty(baseObject, key, desc);
    } else {
      proxyObject[key] = initialObject[key];
    }
  });
  return proxyObject;
};
const getVersion = (proxyObject) => isObject(proxyObject) ? proxyObject[VERSION] : void 0;
const subscribe = (proxyObject, callback, notifyInSync) => {
  if (typeof process === "object" && "production" !== "production" && !(proxyObject == null ? void 0 : proxyObject[LISTENERS])) {
    console.warn("Please use proxy object");
  }
  let promise;
  const ops = [];
  const listener = (op) => {
    ops.push(op);
    if (notifyInSync) {
      callback(ops.splice(0));
      return;
    }
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = void 0;
        callback(ops.splice(0));
      });
    }
  };
  proxyObject[LISTENERS].add(listener);
  return () => {
    proxyObject[LISTENERS].delete(listener);
  };
};
const snapshot = (proxyObject) => {
  if (typeof process === "object" && "production" !== "production" && !(proxyObject == null ? void 0 : proxyObject[SNAPSHOT])) {
    console.warn("Please use proxy object");
  }
  return proxyObject[SNAPSHOT];
};

const TARGET = "_uMS_T";
const GET_VERSION = "_uMS_V";
const createMutableSource = (target, getVersion) => ({
  [TARGET]: target,
  [GET_VERSION]: getVersion
});
const useMutableSource = (source, getSnapshot, subscribe) => {
  const lastVersion = s$1();
  const currentVersion = source[GET_VERSION](source[TARGET]);
  const [state, setState] = l$1(() => [
    source,
    getSnapshot,
    subscribe,
    currentVersion,
    getSnapshot(source[TARGET])
  ]);
  let currentSnapshot = state[4];
  if (state[0] !== source || state[1] !== getSnapshot || state[2] !== subscribe) {
    currentSnapshot = getSnapshot(source[TARGET]);
    setState([
      source,
      getSnapshot,
      subscribe,
      currentVersion,
      currentSnapshot
    ]);
  } else if (currentVersion !== state[3] && currentVersion !== lastVersion.current) {
    currentSnapshot = getSnapshot(source[TARGET]);
    if (!Object.is(currentSnapshot, state[4])) {
      setState([
        source,
        getSnapshot,
        subscribe,
        currentVersion,
        currentSnapshot
      ]);
    }
  }
  y$1(() => {
    let didUnsubscribe = false;
    const checkForUpdates = () => {
      if (didUnsubscribe) {
        return;
      }
      try {
        const nextSnapshot = getSnapshot(source[TARGET]);
        const nextVersion = source[GET_VERSION](source[TARGET]);
        lastVersion.current = nextVersion;
        setState((prev) => {
          if (prev[0] !== source || prev[1] !== getSnapshot || prev[2] !== subscribe) {
            return prev;
          }
          if (Object.is(prev[4], nextSnapshot)) {
            return prev;
          }
          return [
            prev[0],
            prev[1],
            prev[2],
            nextVersion,
            nextSnapshot
          ];
        });
      } catch (e) {
        setState((prev) => [...prev]);
      }
    };
    const unsubscribe = subscribe(source[TARGET], checkForUpdates);
    checkForUpdates();
    return () => {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [source, getSnapshot, subscribe]);
  return currentSnapshot;
};

const isSSR = typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
const useIsomorphicLayoutEffect = isSSR ? y$1 : h;
const useAffectedDebugValue = (state, affected) => {
  const pathList = s$1();
  y$1(() => {
    pathList.current = g(state, affected);
  });
  T$1(pathList.current);
};
const mutableSourceCache = /* @__PURE__ */ new WeakMap();
const getMutableSource = (proxyObject) => {
  if (!mutableSourceCache.has(proxyObject)) {
    mutableSourceCache.set(proxyObject, createMutableSource(proxyObject, getVersion));
  }
  return mutableSourceCache.get(proxyObject);
};
const useSnapshot = (proxyObject, options) => {
  const forceUpdate = p((c) => c + 1, 0)[1];
  const affected = /* @__PURE__ */ new WeakMap();
  const lastAffected = s$1();
  const prevSnapshot = s$1();
  const lastSnapshot = s$1();
  useIsomorphicLayoutEffect(() => {
    lastSnapshot.current = prevSnapshot.current = snapshot(proxyObject);
  }, [proxyObject]);
  useIsomorphicLayoutEffect(() => {
    lastAffected.current = affected;
    if (prevSnapshot.current !== lastSnapshot.current && a(prevSnapshot.current, lastSnapshot.current, affected, /* @__PURE__ */ new WeakMap())) {
      prevSnapshot.current = lastSnapshot.current;
      forceUpdate();
    }
  });
  const notifyInSync = options == null ? void 0 : options.sync;
  const sub = A$1((proxyObject2, cb) => subscribe(proxyObject2, () => {
    const nextSnapshot = snapshot(proxyObject2);
    lastSnapshot.current = nextSnapshot;
    try {
      if (lastAffected.current && !a(prevSnapshot.current, nextSnapshot, lastAffected.current, /* @__PURE__ */ new WeakMap())) {
        return;
      }
    } catch (e) {
    }
    prevSnapshot.current = nextSnapshot;
    cb();
  }, notifyInSync), [notifyInSync]);
  const currSnapshot = useMutableSource(getMutableSource(proxyObject), snapshot, sub);
  if (typeof process === "object" && "production" !== "production") {
    useAffectedDebugValue(currSnapshot, affected);
  }
  const proxyCache = d(() => /* @__PURE__ */ new WeakMap(), []);
  return i(currSnapshot, affected, proxyCache);
};

const initialState = {
  key: "",
  enableLights: false
};
try {
  const storedState = JSON.parse(localStorage.getItem("___config"));
  Object.assign(initialState, storedState);
} catch (e) {
}
const state = proxy(initialState);
subscribe(state, () => {
  localStorage.setItem("___config", JSON.stringify(state));
});
function mount() {
  const root = document.createElement("div");
  root.style.position = "fixed";
  document.body.appendChild(root);
  B(/* @__PURE__ */ v$1(PresenceUI, null), root);
}
function PresenceUI() {
  const snap = useSnapshot(state);
  return /* @__PURE__ */ v$1("div", {
    style: {
      display: "grid",
      gap: "5px",
      background: "white",
      borderRadius: "10px",
      padding: "20px",
      margin: "10px"
    }
  }, /* @__PURE__ */ v$1("span", {
    style: { display: "flex", gap: "5px", alignItems: "center" }
  }, "Config"), /* @__PURE__ */ v$1("label", {
    style: { display: "flex", gap: "5px", alignItems: "center" }
  }, "IFTTT key:", /* @__PURE__ */ v$1("input", {
    type: "password",
    onChange: (e) => state.key = e.target.value,
    value: snap.key
  })), /* @__PURE__ */ v$1("label", {
    style: { display: "flex", gap: "5px", alignItems: "center" }
  }, "Enable Lights:", /* @__PURE__ */ v$1("input", {
    type: "checkbox",
    onChange: (e) => state.enableLights = e.target.checked,
    checked: snap.enableLights
  })));
}

AFRAME.registerSystem("config-panel", {
  init: function () {
    mount();
    this.state = state;
    subscribe(state, () => {
      this.el.emit("config_state", snapshot(state));
    });
  },
});

class HueLights {
  constructor(key) {
    this.key = key;
  }

  webhook(event, body) {
    /**
     * Have to use mode: "no-cors" for hubs which means can't set
     * Content-Type header, therefore sending body as URL encoded form-data.
     */
    return fetch(`https://maker.ifttt.com/trigger/${event}/with/key/${this.key}`, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams(body),
    })
  }

  setColor(value) {
    this.webhook("hue_color", { value1: value });
  }

  setBrightness(value) {
    this.webhook("hue_brightness", { value1: value });
  }

  set({ color, brightness }) {
    this.setColor(color);
    this.setBrightness(brightness);
  }
}

AFRAME.registerSystem("hue-lights", {
  dependencies: ["config-panel"],
  init: function () {
    const key = this.el.systems["config-panel"].state.key;
    this.lights = new HueLights(key);
    this.enabled = this.el.systems["config-panel"].state.enableLights;

    this.el.addEventListener("config_state", (e) => {
      this.lights = new HueLights(e.detail.key);
      this.enabled = e.detail.enableLights;
    });
  },
});

/**
 * Modifies an existing component's dependencies array.
 * This allows a new component to appear alongside a built-in Hubs component
 *
 * @param {string} baseComponent Name of the component whose dependencies should be modified
 * @param {string} dependentComponent Name of the component to inject in baseComponent's dependencies
 */
function registerDependency(baseComponent, dependentComponent) {
  AFRAME.components[baseComponent].dependencies ??= [];
  AFRAME.components[baseComponent].dependencies.push(dependentComponent);
}

/**
 * Add a component to be networked for each avatar
 *
 * @param {string} name Name of the component to add to the "remote-avatar" NAF template
 * @param {any} value Initial value for the component
 */
function registerNetworkedAvatarComponent(name, value) {
  const stringValue = AFRAME.utils.styleParser.stringify(value);

  // Attach component locally so we can control it (since attachTemplateToLocal=false on #remote-avatar)
  document.querySelector("#avatar-rig").setAttribute(name, stringValue);

  // Inject component into #remote-avatar template for remote users
  NAF.schemas.templateCache["#remote-avatar"].firstElementChild.setAttribute(name, stringValue);

  // Set component to be synced in schema
  NAF.schemas.schemaDict["#remote-avatar"].components.push(name);
}

AFRAME.registerSystem("page-visibility", {
  init: function () {
    const avatarRig = document.querySelector("#avatar-rig");

    // Handle value updates
    document.addEventListener("visibilitychange", () => {
      avatarRig.setAttribute("networked-page-visibility", { hidden: document.hidden });
    });
  },
});

AFRAME.registerComponent("networked-page-visibility", {
  schema: {
    hidden: { type: "boolean" },
  },
  update() {
    this.el.emit("visibilitychange", { hidden: this.data.hidden });
  },
});

registerNetworkedAvatarComponent("networked-page-visibility", { hidden: document.hidden });

const zoneColors = {
  social: "orange",
  meeting: "blue",
  self: "green",
};

AFRAME.registerSystem("presence-zone", {
  dependencies: ["hue-lights"],
  init: function () {
    this.entities = new Set();
    this.activeZone = null;
    this.activeSize = 0;
    this.lightSystem = this.el.systems["hue-lights"];
    console.log("intitializing presence-zone system");

    this.brightness = null;
    this.color = null;
  },
  register: function (el) {
    this.entities.add(el);
  },
  unregister: function (el) {
    this.entities.delete(el);
  },
  tick: function () {
    // Solve for color and brightness based on activity in each zone
    let topZoneEl;
    for (let zoneEl of this.entities) {
      const zoneComponent = zoneEl.components["presence-zone"];
      if (zoneComponent.peers.size > 0) {
        if (!topZoneEl) {
          topZoneEl = zoneEl;
        } else {
          const topZoneComponent = topZoneEl.components["presence-zone"];
          const hasHigherPriority = zoneComponent.priority > topZoneComponent.priority;
          const hasEqualPriority = zoneComponent.priority === topZoneComponent.priority;
          const hasHigherActivity = zoneComponent.hasActivePeers() > topZoneComponent.hasActivePeers();
          if (hasHigherPriority || (hasEqualPriority && hasHigherActivity)) {
            topZoneEl = zoneEl;
          }
        }
      }
    }

    let brightness;
    let color;

    if (topZoneEl) {
      const topZoneComponent = topZoneEl.components["presence-zone"];
      const zoneType = topZoneComponent.data.type;
      const zoneIsActive = topZoneComponent.hasActivePeers();

      brightness = zoneIsActive ? 100 : 30;
      color = zoneColors[zoneType];
    } else {
      color = "black";
      brightness = 0;
    }

    if (brightness !== this.brightness || color !== this.color) {
      this.color = color;
      this.brightness = brightness;
      if (this.lightSystem.enabled) {
        console.log("setting", color, brightness);
        this.lightSystem.lights.set({ brightness, color });
      }
    }
  },
});

function getPriority(type) {
  switch (type) {
    case "self":
      return 3
    case "social":
      return 2
    case "meeting":
      return 1
    default:
      return 0
  }
}

const vA = new THREE.Vector3();
const vB = new THREE.Vector3();

AFRAME.registerComponent("presence-zone", {
  schema: {
    type: { type: "string" },
  },
  init: function () {
    this.box = new THREE.Box3();

    this.peers = new Set();
    this.priority = getPriority(this.data.type);

    this.el.sceneEl.systems["presence-zone"].register(this.el);
  },
  tick() {
    this.el.object3D.getWorldScale(vA);
    this.el.object3D.getWorldPosition(vB);
    this.box.min.copy(vA).multiplyScalar(-0.5).add(vB);
    this.box.max.copy(vA).multiplyScalar(0.5).add(vB);
  },
  hasActivePeers() {
    for (let memberEl of this.peers) {
      const { hidden } = memberEl.getAttribute("networked-page-visibility");
      if (!hidden) return true
    }
    return false
  },
});

AFRAME.registerComponent("presence-zone-member", {
  init: function () {
    this.zoneSystem = this.el.sceneEl.systems["presence-zone"];
    this.isSelf = this.el === APP.scene.querySelector("#avatar-rig");
    this.zones = new Set();
  },
  tick: function () {
    for (let zoneEl of this.zoneSystem.entities) {
      const zone = zoneEl.components["presence-zone"];
      if (zone.box.containsPoint(this.el.object3D.position)) {
        if (!this.isSelf) {
          zone.peers.add(this.el);
          this.zones.add(zone);
        }
      } else {
        if (!this.isSelf) {
          zone.peers.delete(this.el);
          this.zones.delete(zone);
        }
      }
    }
  },
  remove: function () {
    for (let zone of this.zones) {
      zone.peers.delete(this.el);
    }
  },
});

AFRAME.GLTFModelPlus.registerComponent("presence-zone", "presence-zone");
registerDependency("networked-avatar", "presence-zone-member");

// Create a zone around user's own avatar

const avatarRig = APP.scene.querySelector("#avatar-rig");
const selfZoneEl = document.createElement("a-entity");
selfZoneEl.setAttribute("presence-zone", { type: "self" });
selfZoneEl.setAttribute("scale", "3 3 3");
avatarRig.appendChild(selfZoneEl);

const ONCE_TRUE = { once: true };
const TYPE_IMG_PNG = { type: "image/png" };

/**
 * Creates image from a canvas and uploads it to the room.
 * Logic pulled from Hubs `media-video` component
 */
AFRAME.registerComponent("snapshot", {
  init: function () {
    this.localSnapCount = 0;
  },

  /**
   * @param {HTMLCanvasElement} canvas
   */
  spawnSnapshot: async function (canvas) {
    const blob = await new Promise((resolve) => canvas.toBlob(resolve));
    const file = new File([blob], "snap.png", TYPE_IMG_PNG);
    // const { entity } = APP.utils.addAndArrangeMedia(this.el, file, "photo-snapshot", this.localSnapCount, false, 1)
    const { entity } = APP.utils.addMedia(file, "#interactable-media", undefined, "photo-snapshot", false);
    entity.addEventListener(
      "media_resolved",
      () => {
        this.el.emit(`photo_taken`, entity.components["media-loader"].data.src);
      },
      { once: true }
    );
    return new Promise((resolve) => {
      entity.addEventListener("image-loaded", resolve({ entity }), ONCE_TRUE);
    })
  },
});

AFRAME.registerComponent("excalidraw", {
  dependencies: ["snapshot"],
  schema: {
    link: { type: "string" },
  },
  init: function () {
    this.el.setAttribute("geometry", { primitive: "plane", width: 2, height: 1 });
    this.el.setAttribute("material", { color: "white", shader: "flat", side: "double" });
    this.mesh = this.el.getObject3D("mesh");

    this.root = document.createElement("div");
    this.root.style.position = "absolute";
    this.root.style.width = 1024 + "px";
    this.root.style.height = 512 + "px";
    this.root.style.zIndex = -1; // Hide in background
    document.body.appendChild(this.root);

    this.unmount = Excalidraw.mount(this.root, this.data.link);
    this.lastUpdateTime = 0;

    this.el.addEventListener("click_snapshot", () => this.onClickSnapshot());
  },
  _tryInitCanvas: function () {
    const canvas = this.root.querySelector("canvas");
    if (canvas) {
      this.canvas = canvas;
      this.texture = new THREE.CanvasTexture(canvas);
      this.texture.encoding = THREE.sRGBEncoding;
      this.mesh.material.map = this.texture;
      this.mesh.material.needsUpdate = true;
    }
  },
  tick: function (time) {
    if (!this.texture) {
      this._tryInitCanvas();
    } else if (time - this.lastUpdateTime > 100) {
      this.texture.needsUpdate = true;
      this.lastUpdateTime = time;
    }
  },
  remove: function () {
    this.root.remove();
    this.unmount();
  },
  onClickSnapshot: async function () {
    const { entity } = await this.el.components["snapshot"].spawnSnapshot(this.canvas);
    entity.removeAttribute("offset-relative-to"); // Clear for re-run
    entity.setAttribute("offset-relative-to", "target: #avatar-pov-node; offset: 0 0 -1");
  },
});

AFRAME.GLTFModelPlus.registerComponent("excalidraw", "excalidraw");

APP.utils.registerContentType(/^https:\/\/www.aelatgt.org\/excalidraw\//, (el, src) => {
  el.setAttribute("geometry", { primitive: "plane" });
  el.setAttribute("excalidraw", { link: src });

  const cloneButton = el.querySelector("[clone-media-button]");

  if (cloneButton) {
    // Replace default clone button from interactable-media template
    cloneButton.removeAttribute("clone-media-button");
    cloneButton.firstElementChild.setAttribute("text", { value: "snapshot" });
    cloneButton.object3D.addEventListener("interact", () => el.emit("click_snapshot"));
  }
});

// Log objects as you inspect them
APP.scene.addEventListener("inspect-target-changed", () => {
  const cameraSystem = APP.scene.systems["hubs-systems"].cameraSystem;
  const inspectedEl = cameraSystem.inspectable?.el;
  inspectedEl && console.log(inspectedEl);
});

/**
 * Creates a root element overlaying the A-Frame canvas
 *
 * Usage: append DOM elements to this.root
 */
AFRAME.registerSystem("scene-overlay", {
  init: function () {
    this.root = document.createElement("div");
    this.root.style.position = "fixed";
    this.root.style.pointerEvents = "none";
    this.root.style.overflow = "hidden";
    this.root.style.margin = "0 15px";
    document.body.appendChild(this.root);

    this.canvas = this.el.sceneEl.canvas;
  },
  tick: function () {
    this.resize();
  },
  resize: function () {
    this.root.style.width = this.canvas.clientWidth + "px";
    this.root.style.height = this.canvas.clientHeight + "px";
  },
});

const html = String.raw;
const css = String.raw;

/**
 * HTML
 */
const template = document.createElement("template");
template.innerHTML = html`
  <div class="widget">
    <div class="row">
      <button id="btnCollapse">Minimap</button>
    </div>
    <div id="collapsible">
      <canvas width="256" height="256"></canvas>
      <div class="row" style="margin-bottom: 15px">
        <button class="btnZoom" id="btnZoomOut">-</button>
        <span>Zoom</span>
        <button class="btnZoom" id="btnZoomIn">+</button>
      </div>
    </div>
  </div>
`;

/**
 * CSS
 */
const style = css`
  :host {
    --hubs-blue: #007ab8;
    --hubs-lightblue: #008bd1;
    --hubs-gray: #868686;
  }

  .widget {
    --border-radius: 20px;
    pointer-events: initial;
    padding: 0 15px;
    background-color: white;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    box-shadow: 0 0 5px rgb(0, 0, 0, 10%);
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  .spacer {
    height: 15px;
  }

  canvas {
    display: block;
  }

  .btnZoom {
    --outline-color: var(--hubs-blue);
    padding: 4px;
    border-radius: 4px;
    width: 30px;
    background: none;
    border: 2px solid var(--outline-color);
    color: var(--hubs-blue);
  }
  .btnZoom:hover {
    --outline-color: var(--hubs-lightblue);
  }

  button:enabled {
    cursor: pointer;
  }

  #btnCollapse {
    background: none;
    border: none;
    flex-grow: 1;
  }
  #btnCollapse:disabled {
    color: gray;
  }

  #collapsible {
    overflow: hidden;
    transition: height 200ms ease-in-out;
    height: 0;

    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

class MinimapWidget extends HTMLElement {
  static get observedAttributes() {
    return ["disabled"]
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const styleEl = document.createElement("style");
    styleEl.textContent = style;
    shadowRoot.appendChild(styleEl);
    shadowRoot.appendChild(template.content.cloneNode(true));

    const collapsible = shadowRoot.querySelector("#collapsible");
    const btnCollapse = shadowRoot.querySelector("#btnCollapse");
    btnCollapse.addEventListener("click", () => this.toggleCollapse());
    btnCollapse.disabled = Boolean(this.hasAttribute("disabled"));

    shadowRoot.querySelector("#btnZoomOut").addEventListener("click", () => this.onChangeZoom(0.8));
    shadowRoot.querySelector("#btnZoomIn").addEventListener("click", () => this.onChangeZoom(1 / 0.8));

    const canvas = shadowRoot.querySelector("canvas");

    Object.assign(this, { canvas, collapsible, btnCollapse });
    this.collapse();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "disabled") {
      this.btnCollapse.disabled = newValue !== null;
    }
  }
  onChangeZoom(factor) {
    this.dispatchEvent(new CustomEvent("changezoom", { detail: { factor } }));
  }
  uncollapse() {
    this.collapsible.style.height = this.collapsible.scrollHeight + "px";
    this.dispatchEvent(new CustomEvent("collapse", { detail: { collapsed: false } }));
  }
  collapse() {
    this.collapsible.style.height = "0px";
    this.dispatchEvent(new CustomEvent("collapse", { detail: { collapsed: true } }));
  }
  toggleCollapse() {
    if (this.collapsible.style.height === "0px") {
      this.uncollapse();
    } else {
      this.collapse();
    }
  }
}

customElements.define("minimap-widget", MinimapWidget);

const MINIMAP_LAYER = 20;
const SIZE = 256;
const tmpSize = new THREE.Vector2();

AFRAME.registerSystem("minimap", {
  dependencies: ["scene-overlay"],
  init: function () {
    this.renderTarget = new THREE.WebGLRenderTarget(1024, 1024);
    this.camera = new THREE.OrthographicCamera();
    this.camera.zoom = 0.05;
    this.camera.position.y = 200;
    this.camera.rotation.x = -Math.PI / 2;
    this.camera.updateMatrix();
    this.camera.updateProjectionMatrix();
    this.camera.layers.enable(MINIMAP_LAYER);

    const avatarRig = document.querySelector("#avatar-rig");
    avatarRig.setObject3D("minimapCamera", this.camera);

    const minimapEl = document.createElement("minimap-widget");
    minimapEl.setAttribute("disabled", "");
    minimapEl.style.position = "absolute";
    minimapEl.style.bottom = 0;
    minimapEl.style.left = 0;
    this.context = minimapEl.canvas.getContext("2d");
    this.collapsed = true;
    minimapEl.addEventListener("collapse", (e) => {
      this.collapsed = e.detail.collapsed;
    });
    minimapEl.addEventListener("changezoom", (e) => {
      const { factor } = e.detail;
      this.camera.zoom *= factor;
      this.camera.updateProjectionMatrix();
    });

    const avatarModel = avatarRig.querySelector(".model");
    avatarModel.addEventListener(
      "model-loaded",
      () => {
        console.log("enabling minimap");
        minimapEl.removeAttribute("disabled");
      },
      { once: true }
    );

    const sceneOverlayRoot = this.el.sceneEl.systems["scene-overlay"].root;
    sceneOverlayRoot.appendChild(minimapEl);
  },
  tick: function () {
    if (this.collapsed) return
    this.renderToCanvas();
  },
  renderToCanvas() {
    const scene = APP.scene.object3D;
    const renderer = APP.scene.renderer;
    // MODIFY RENDER SETTINGS
    const tmpOnAfterRender = scene.onAfterRender;
    delete scene.onAfterRender;

    renderer.getSize(tmpSize);
    renderer.setSize(SIZE, SIZE, false);

    renderer.render(scene, this.camera);
    this.context.drawImage(renderer.domElement, 0, 0, SIZE, SIZE);

    // RESTORE RENDER SETTINGS
    scene.onAfterRender = tmpOnAfterRender;
    renderer.setSize(tmpSize.x, tmpSize.y, false);
  },
});

AFRAME.registerComponent("minimap-avatar-indicator", {
  dependencies: ["player-info", "networked-page-visibility"],
  init() {
    // Set up indicator dot
    const indicatorDot = new THREE.Mesh(new THREE.CircleGeometry(1, 16), new THREE.MeshBasicMaterial({ color: "hotpink" }));
    indicatorDot.rotation.x = -Math.PI / 2;
    indicatorDot.position.y = 100;
    indicatorDot.renderOrder = 1;
    indicatorDot.layers.set(MINIMAP_LAYER);
    this.el.setObject3D("indicatorDot", indicatorDot);
    this.indicatorDot = indicatorDot;
    this.el.addEventListener("visibilitychange", (e) => {
      this.updateIndicatorColor();
    });
    this.updateIndicatorColor();

    // Set up displayName text
    this.text = document.createElement("a-entity");
    this.text.setAttribute("geometry", { primitive: "plane" });
    this.text.setAttribute("material", { transparent: true, opacity: 0 });
    this.text.setAttribute("text", { color: "black", value: "", align: "center", width: 8 });
    this.text.object3D.scale.setScalar(10);
    this.text.object3D.position.y = 100;
    this.text.object3D.position.z = -5;
    this.text.object3D.rotation.x = -Math.PI / 2;
    this.el.appendChild(this.text);

    this.updateText = this.updateText.bind(this);
    this.el.addEventListener("model-loaded", this.updateText);
    this.el.sceneEl.addEventListener("presence_updated", this.updateText);
    this.el.sceneEl.addEventListener("stateadded", this.updateText);
    this.el.sceneEl.addEventListener("stateremoved", this.updateText);
    this.updateText();
  },
  updateText() {
    const playerInfo = this.el.components["player-info"];
    if (!playerInfo) return
    this.text.setAttribute("text", { value: playerInfo.displayName });
  },
  updateIndicatorColor() {
    const { hidden } = this.el.getAttribute("networked-page-visibility");
    this.indicatorDot.material.color.set(hidden ? "red" : "green");
  },
});

registerDependency("networked-avatar", "minimap-avatar-indicator");
