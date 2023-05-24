import{r as c,b as yn,j as O,F as Fn,R as wn,c as Se,a as Me}from"./index-8d7dd934.js";import{_ as te,a as Cn,b as Ee,d as In,P as An,L as Pn,e as kn,H as j,m as Le,n as D,u as $e,s as fe,f as Tn,g as Sn,O as Mn}from"./StoriesWrapper-1590f6a9.js";import{C as Ln,a as $n}from"./react-icons.esm-7d868620.js";function Nn(){var e=c.useRef(!1),n=te(c.useState(0),2),r=n[0],t=n[1];return Cn(function(){return e.current=!0}),[c.useCallback(function(){!e.current&&t(r+1)},[r]),r]}var ye=0;function _n(){var e=ye;return ye++,e}var Y=function(e){var n=e.children,r=e.initial,t=e.isPresent,o=e.onExitComplete,a=e.custom,i=e.presenceAffectsLayout,u=Ee(Rn),d=Ee(_n),l=c.useMemo(function(){return{id:d,initial:r,isPresent:t,custom:a,onExitComplete:function(f){var s,p;u.set(f,!0);try{for(var m=In(u.values()),v=m.next();!v.done;v=m.next()){var g=v.value;if(!g)return}}catch(h){s={error:h}}finally{try{v&&!v.done&&(p=m.return)&&p.call(m)}finally{if(s)throw s.error}}o==null||o()},register:function(f){return u.set(f,!1),function(){return u.delete(f)}}}},i?void 0:[t]);return c.useMemo(function(){u.forEach(function(f,s){return u.set(s,!1)})},[t]),c.useEffect(function(){!t&&!u.size&&(o==null||o())},[t]),c.createElement(An.Provider,{value:l},n)};function Rn(){return new Map}function T(e){return e.key||""}function Dn(e,n){e.forEach(function(r){var t=T(r);n.set(t,r)})}function Hn(e){var n=[];return c.Children.forEach(e,function(r){c.isValidElement(r)&&n.push(r)}),n}var Bn=function(e){var n=e.children,r=e.custom,t=e.initial,o=t===void 0?!0:t,a=e.onExitComplete,i=e.exitBeforeEnter,u=e.presenceAffectsLayout,d=u===void 0?!0:u,l=te(Nn(),1),f=l[0],s=c.useContext(Pn).forceRender;s&&(f=s);var p=c.useRef(!0),m=Hn(n),v=c.useRef(m),g=c.useRef(new Map).current,h=c.useRef(new Set).current;if(Dn(m,g),p.current)return p.current=!1,c.createElement(c.Fragment,null,m.map(function(b){return c.createElement(Y,{key:T(b),isPresent:!0,initial:o?void 0:!1,presenceAffectsLayout:d},b)}));for(var x=kn([],te(m),!1),E=v.current.map(T),A=m.map(T),y=E.length,I=0;I<y;I++){var C=E[I];A.indexOf(C)===-1?h.add(C):h.delete(C)}return i&&h.size&&(x=[]),h.forEach(function(b){if(A.indexOf(b)===-1){var F=g.get(b);if(F){var N=E.indexOf(b),_=function(){g.delete(b),h.delete(b);var k=v.current.findIndex(function(K){return K.key===b});v.current.splice(k,1),h.size||(v.current=m,f(),a&&a())};x.splice(N,0,c.createElement(Y,{key:T(F),isPresent:!1,onExitComplete:_,custom:r,presenceAffectsLayout:d},F))}}}),x=x.map(function(b){var F=b.key;return h.has(F)?b:c.createElement(Y,{key:T(b),isPresent:!0,presenceAffectsLayout:d},b)}),v.current=x,c.createElement(c.Fragment,null,h.size?x:x.map(function(b){return c.cloneElement(b)}))};const Un={MODAL:1e3,ALERT:3e3,BOTTOM_SHEET:2e3,NOTIFICATION:4e3},Wn=({children:e,target:n=document.body})=>yn.createPortal(O(Fn,{children:e}),n),jn=Wn;function Gn(e,n){if(e==null)return{};var r={},t=Object.keys(e),o,a;for(a=0;a<t.length;a++)o=t[a],!(n.indexOf(o)>=0)&&(r[o]=e[o]);return r}function H(){return H=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},H.apply(this,arguments)}var oe="data-focus-lock",Ne="data-focus-lock-disabled",zn="data-no-focus-lock",Vn="data-autofocus-inside",qn="data-no-autofocus";function Kn(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}function Zn(e,n){var r=c.useState(function(){return{value:e,callback:n,facade:{get current(){return r.value},set current(t){var o=r.value;o!==t&&(r.value=t,r.callback(t,o))}}}})[0];return r.callback=n,r.facade}function Qn(e,n){return Zn(n||null,function(r){return e.forEach(function(t){return Kn(t,r)})})}var J={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},ae=function(){return ae=Object.assign||function(n){for(var r,t=1,o=arguments.length;t<o;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n},ae.apply(this,arguments)};function _e(e){return e}function Re(e,n){n===void 0&&(n=_e);var r=[],t=!1,o={read:function(){if(t)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(a){var i=n(a,t);return r.push(i),function(){r=r.filter(function(u){return u!==i})}},assignSyncMedium:function(a){for(t=!0;r.length;){var i=r;r=[],i.forEach(a)}r={push:function(u){return a(u)},filter:function(){return r}}},assignMedium:function(a){t=!0;var i=[];if(r.length){var u=r;r=[],u.forEach(a),i=r}var d=function(){var f=i;i=[],f.forEach(a)},l=function(){return Promise.resolve().then(d)};l(),r={push:function(f){i.push(f),l()},filter:function(f){return i=i.filter(f),r}}}};return o}function de(e,n){return n===void 0&&(n=_e),Re(e,n)}function Xn(e){e===void 0&&(e={});var n=Re(null);return n.options=ae({async:!0,ssr:!1},e),n}var De=de({},function(e){var n=e.target,r=e.currentTarget;return{target:n,currentTarget:r}}),He=de(),Yn=de(),Jn=Xn({async:!0}),er=[],se=c.forwardRef(function(n,r){var t,o=c.useState(),a=o[0],i=o[1],u=c.useRef(),d=c.useRef(!1),l=c.useRef(null),f=n.children,s=n.disabled,p=n.noFocusGuards,m=n.persistentFocus,v=n.crossFrame,g=n.autoFocus;n.allowTextSelection;var h=n.group,x=n.className,E=n.whiteList,A=n.hasPositiveIndices,y=n.shards,I=y===void 0?er:y,C=n.as,b=C===void 0?"div":C,F=n.lockProps,N=F===void 0?{}:F,_=n.sideCar,k=n.returnFocus,K=n.focusOptions,Z=n.onActivation,Q=n.onDeactivation,sn=c.useState({}),ln=sn[0],vn=c.useCallback(function(){l.current=l.current||document&&document.activeElement,u.current&&Z&&Z(u.current),d.current=!0},[Z]),mn=c.useCallback(function(){d.current=!1,Q&&Q(u.current)},[Q]);c.useEffect(function(){s||(l.current=null)},[]);var pn=c.useCallback(function(P){var R=l.current;if(R&&R.focus){var X=typeof k=="function"?k(R):k;if(X){var Oe=typeof X=="object"?X:void 0;l.current=null,P?Promise.resolve().then(function(){return R.focus(Oe)}):R.focus(Oe)}}},[k]),hn=c.useCallback(function(P){d.current&&De.useMedium(P)},[]),bn=He.useMedium,gn=c.useCallback(function(P){u.current!==P&&(u.current=P,i(P))},[]),xn=H((t={},t[Ne]=s&&"disabled",t[oe]=h,t),N),xe=p!==!0,On=xe&&p!=="tail",En=Qn([r,gn]);return c.createElement(c.Fragment,null,xe&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:s?-1:0,style:J}),A?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:s?-1:1,style:J}):null],!s&&c.createElement(_,{id:ln,sideCar:Jn,observed:a,disabled:s,persistentFocus:m,crossFrame:v,autoFocus:g,whiteList:E,shards:I,onActivation:vn,onDeactivation:mn,returnFocus:pn,focusOptions:K}),c.createElement(b,H({ref:En},xn,{className:x,onBlur:bn,onFocus:hn}),f),On&&c.createElement("div",{"data-focus-guard":!0,tabIndex:s?-1:0,style:J}))});se.propTypes={};se.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const Be=se;function ie(e,n){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},ie(e,n)}function nr(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,ie(e,n)}function B(e){return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},B(e)}function rr(e,n){if(B(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,n||"default");if(B(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function tr(e){var n=rr(e,"string");return B(n)==="symbol"?n:String(n)}function or(e,n,r){return n=tr(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function ar(e,n){function r(t){return t.displayName||t.name||"Component"}return function(o){var a=[],i;function u(){i=e(a.map(function(l){return l.props})),n(i)}var d=function(l){nr(f,l);function f(){return l.apply(this,arguments)||this}f.peek=function(){return i};var s=f.prototype;return s.componentDidMount=function(){a.push(this),u()},s.componentDidUpdate=function(){u()},s.componentWillUnmount=function(){var m=a.indexOf(this);a.splice(m,1),u()},s.render=function(){return wn.createElement(o,this.props)},f}(c.PureComponent);return or(d,"displayName","SideEffect("+r(o)+")"),d}}var w=function(e){for(var n=Array(e.length),r=0;r<e.length;++r)n[r]=e[r];return n},G=function(e){return Array.isArray(e)?e:[e]},Ue=function(e){return Array.isArray(e)?e[0]:e},ir=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var n=window.getComputedStyle(e,null);return!n||!n.getPropertyValue?!1:n.getPropertyValue("display")==="none"||n.getPropertyValue("visibility")==="hidden"},We=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},je=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},ur=function(e,n){return!e||je(e)||!ir(e)&&n(We(e))},Ge=function(e,n){var r=e.get(n);if(r!==void 0)return r;var t=ur(n,Ge.bind(void 0,e));return e.set(n,t),t},cr=function(e,n){return e&&!je(e)?sr(e)?n(We(e)):!1:!0},ze=function(e,n){var r=e.get(n);if(r!==void 0)return r;var t=cr(n,ze.bind(void 0,e));return e.set(n,t),t},Ve=function(e){return e.dataset},fr=function(e){return e.tagName==="BUTTON"},qe=function(e){return e.tagName==="INPUT"},Ke=function(e){return qe(e)&&e.type==="radio"},dr=function(e){return!((qe(e)||fr(e))&&(e.type==="hidden"||e.disabled))},sr=function(e){var n=e.getAttribute(qn);return![!0,"true",""].includes(n)},le=function(e){var n;return!!(e&&(!((n=Ve(e))===null||n===void 0)&&n.focusGuard))},z=function(e){return!le(e)},lr=function(e){return!!e},vr=function(e,n){var r=e.tabIndex-n.tabIndex,t=e.index-n.index;if(r){if(!e.tabIndex)return 1;if(!n.tabIndex)return-1}return r||t},Ze=function(e,n,r){return w(e).map(function(t,o){return{node:t,index:o,tabIndex:r&&t.tabIndex===-1?(t.dataset||{}).focusGuard?0:-1:t.tabIndex}}).filter(function(t){return!n||t.tabIndex>=0}).sort(vr)},mr=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],ve=mr.join(","),pr="".concat(ve,", [data-focus-guard]"),Qe=function(e,n){return w((e.shadowRoot||e).children).reduce(function(r,t){return r.concat(t.matches(n?pr:ve)?[t]:[],Qe(t))},[])},hr=function(e,n){var r;return e instanceof HTMLIFrameElement&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?q([e.contentDocument.body],n):[e]},q=function(e,n){return e.reduce(function(r,t){var o,a=Qe(t,n),i=(o=[]).concat.apply(o,a.map(function(u){return hr(u,n)}));return r.concat(i,t.parentNode?w(t.parentNode.querySelectorAll(ve)).filter(function(u){return u===t}):[])},[])},br=function(e){var n=e.querySelectorAll("[".concat(Vn,"]"));return w(n).map(function(r){return q([r])}).reduce(function(r,t){return r.concat(t)},[])},me=function(e,n){return w(e).filter(function(r){return Ge(n,r)}).filter(function(r){return dr(r)})},Fe=function(e,n){return n===void 0&&(n=new Map),w(e).filter(function(r){return ze(n,r)})},ue=function(e,n,r){return Ze(me(q(e,r),n),!0,r)},we=function(e,n){return Ze(me(q(e),n),!1)},gr=function(e,n){return me(br(e),n)},M=function(e,n){return e.shadowRoot?M(e.shadowRoot,n):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,n)?!0:w(e.children).some(function(r){var t;if(r instanceof HTMLIFrameElement){var o=(t=r.contentDocument)===null||t===void 0?void 0:t.body;return o?M(o,n):!1}return M(r,n)})},xr=function(e){for(var n=new Set,r=e.length,t=0;t<r;t+=1)for(var o=t+1;o<r;o+=1){var a=e[t].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&n.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&n.add(t)}return e.filter(function(i,u){return!n.has(u)})},Xe=function(e){return e.parentNode?Xe(e.parentNode):e},pe=function(e){var n=G(e);return n.filter(Boolean).reduce(function(r,t){var o=t.getAttribute(oe);return r.push.apply(r,o?xr(w(Xe(t).querySelectorAll("[".concat(oe,'="').concat(o,'"]:not([').concat(Ne,'="disabled"])')))):[t]),r},[])},Or=function(e){try{return e()}catch{return}},U=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var n=e.activeElement;return n.shadowRoot?U(n.shadowRoot):n instanceof HTMLIFrameElement&&Or(function(){return n.contentWindow.document})?U(n.contentWindow.document):n}},Er=function(e,n){return e===n},yr=function(e,n){return!!w(e.querySelectorAll("iframe")).some(function(r){return Er(r,n)})},Ye=function(e,n){return n===void 0&&(n=U(Ue(e).ownerDocument)),!n||n.dataset&&n.dataset.focusGuard?!1:pe(e).some(function(r){return M(r,n)||yr(r,n)})},Fr=function(e){e===void 0&&(e=document);var n=U(e);return n?w(e.querySelectorAll("[".concat(zn,"]"))).some(function(r){return M(r,n)}):!1},wr=function(e,n){return n.filter(Ke).filter(function(r){return r.name===e.name}).filter(function(r){return r.checked})[0]||e},he=function(e,n){return Ke(e)&&e.name?wr(e,n):e},Cr=function(e){var n=new Set;return e.forEach(function(r){return n.add(he(r,e))}),e.filter(function(r){return n.has(r)})},Ce=function(e){return e[0]&&e.length>1?he(e[0],e):e[0]},Ie=function(e,n){return e.length>1?e.indexOf(he(e[n],e)):n},Je="NEW_FOCUS",Ir=function(e,n,r,t){var o=e.length,a=e[0],i=e[o-1],u=le(r);if(!(r&&e.indexOf(r)>=0)){var d=r!==void 0?n.indexOf(r):-1,l=t?n.indexOf(t):d,f=t?e.indexOf(t):-1,s=d-l,p=n.indexOf(a),m=n.indexOf(i),v=Cr(n),g=r!==void 0?v.indexOf(r):-1,h=g-(t?v.indexOf(t):d),x=Ie(e,0),E=Ie(e,o-1);if(d===-1||f===-1)return Je;if(!s&&f>=0)return f;if(d<=p&&u&&Math.abs(s)>1)return E;if(d>=m&&u&&Math.abs(s)>1)return x;if(s&&Math.abs(h)>1)return f;if(d<=p)return E;if(d>m)return x;if(s)return Math.abs(s)>1?f:(o+f+s)%o}},Ar=function(e){return function(n){var r,t=(r=Ve(n))===null||r===void 0?void 0:r.autofocus;return n.autofocus||t!==void 0&&t!=="false"||e.indexOf(n)>=0}},Pr=function(e,n,r){var t=e.map(function(a){var i=a.node;return i}),o=Fe(t.filter(Ar(r)));return o&&o.length?Ce(o):Ce(Fe(n))},ce=function(e,n){return n===void 0&&(n=[]),n.push(e),e.parentNode&&ce(e.parentNode.host||e.parentNode,n),n},ee=function(e,n){for(var r=ce(e),t=ce(n),o=0;o<r.length;o+=1){var a=r[o];if(t.indexOf(a)>=0)return a}return!1},en=function(e,n,r){var t=G(e),o=G(n),a=t[0],i=!1;return o.filter(Boolean).forEach(function(u){i=ee(i||u,u)||i,r.filter(Boolean).forEach(function(d){var l=ee(a,d);l&&(!i||M(l,i)?i=l:i=ee(l,i))})}),i},kr=function(e,n){return e.reduce(function(r,t){return r.concat(gr(t,n))},[])},Tr=function(e,n){var r=new Map;return n.forEach(function(t){return r.set(t.node,t)}),e.map(function(t){return r.get(t)}).filter(lr)},Sr=function(e,n){var r=U(G(e).length>0?document:Ue(e).ownerDocument),t=pe(e).filter(z),o=en(r||e,e,t),a=new Map,i=we(t,a),u=ue(t,a).filter(function(m){var v=m.node;return z(v)});if(!(!u[0]&&(u=i,!u[0]))){var d=we([o],a).map(function(m){var v=m.node;return v}),l=Tr(d,u),f=l.map(function(m){var v=m.node;return v}),s=Ir(f,d,r,n);if(s===Je){var p=Pr(i,f,kr(t,a));if(p)return{node:p};console.warn("focus-lock: cannot find any node to move focus into");return}return s===void 0?s:l[s]}},Mr=function(e){var n=pe(e).filter(z),r=en(e,e,n),t=new Map,o=ue([r],t,!0),a=ue(n,t).filter(function(i){var u=i.node;return z(u)}).map(function(i){var u=i.node;return u});return o.map(function(i){var u=i.node,d=i.index;return{node:u,index:d,lockItem:a.indexOf(u)>=0,guard:le(u)}})},Lr=function(e,n){"focus"in e&&e.focus(n),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},ne=0,re=!1,nn=function(e,n,r){r===void 0&&(r={});var t=Sr(e,n);if(!re&&t){if(ne>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),re=!0,setTimeout(function(){re=!1},1);return}ne++,Lr(t.node,r.focusOptions),ne--}};function rn(e){var n=window,r=n.setImmediate;typeof r<"u"?r(e):setTimeout(e,1)}var $r=function(){return document&&document.activeElement===document.body},Nr=function(){return $r()||Fr()},L=null,S=null,$=null,W=!1,_r=function(){return!0},Rr=function(n){return(L.whiteList||_r)(n)},Dr=function(n,r){$={observerNode:n,portaledElement:r}},Hr=function(n){return $&&$.portaledElement===n};function Ae(e,n,r,t){var o=null,a=e;do{var i=t[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=r)!==n);o&&(o.node.tabIndex=0)}var Br=function(n){return n&&"current"in n?n.current:n},Ur=function(n){return n?!!W:W==="meanwhile"},Wr=function e(n,r,t){return r&&(r.host===n&&(!r.activeElement||t.contains(r.activeElement))||r.parentNode&&e(n,r.parentNode,t))},jr=function(n,r){return r.some(function(t){return Wr(n,t,t)})},V=function(){var n=!1;if(L){var r=L,t=r.observed,o=r.persistentFocus,a=r.autoFocus,i=r.shards,u=r.crossFrame,d=r.focusOptions,l=t||$&&$.portaledElement,f=document&&document.activeElement;if(l){var s=[l].concat(i.map(Br).filter(Boolean));if((!f||Rr(f))&&(o||Ur(u)||!Nr()||!S&&a)&&(l&&!(Ye(s)||f&&jr(f,s)||Hr(f))&&(document&&!S&&f&&!a?(f.blur&&f.blur(),document.body.focus()):(n=nn(s,S,{focusOptions:d}),$={})),W=!1,S=document&&document.activeElement),document){var p=document&&document.activeElement,m=Mr(s),v=m.map(function(g){var h=g.node;return h}).indexOf(p);v>-1&&(m.filter(function(g){var h=g.guard,x=g.node;return h&&x.dataset.focusAutoGuard}).forEach(function(g){var h=g.node;return h.removeAttribute("tabIndex")}),Ae(v,m.length,1,m),Ae(v,-1,-1,m))}}}return n},tn=function(n){V()&&n&&(n.stopPropagation(),n.preventDefault())},be=function(){return rn(V)},Gr=function(n){var r=n.target,t=n.currentTarget;t.contains(r)||Dr(t,r)},zr=function(){return null},on=function(){W="just",setTimeout(function(){W="meanwhile"},0)},Vr=function(){document.addEventListener("focusin",tn),document.addEventListener("focusout",be),window.addEventListener("blur",on)},qr=function(){document.removeEventListener("focusin",tn),document.removeEventListener("focusout",be),window.removeEventListener("blur",on)};function Kr(e){return e.filter(function(n){var r=n.disabled;return!r})}function Zr(e){var n=e.slice(-1)[0];n&&!L&&Vr();var r=L,t=r&&n&&n.id===r.id;L=n,r&&!t&&(r.onDeactivation(),e.filter(function(o){var a=o.id;return a===r.id}).length||r.returnFocus(!n)),n?(S=null,(!t||r.observed!==n.observed)&&n.onActivation(),V(),rn(V)):(qr(),S=null)}De.assignSyncMedium(Gr);He.assignMedium(be);Yn.assignMedium(function(e){return e({moveFocusInside:nn,focusInside:Ye})});const Qr=ar(Kr,Zr)(zr);var an=c.forwardRef(function(n,r){return c.createElement(Be,H({sideCar:Qr,ref:r},n))}),un=Be.propTypes||{};un.sideCar;Gn(un,["sideCar"]);an.propTypes={};const Xr=an,Yr=({children:e,readyToFocus:n,returnFocus:r=!0})=>O(Xr,{returnFocus:r,disabled:!n,onDeactivation:t=>{setTimeout(()=>t.focus(),0)},children:e}),Jr=Yr,cn={initial:{opacity:0},appear:{opacity:1},disappear:{opacity:0}},et=j(Le.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100000;

  & [data-focus-lock-disabled] {
    display: contents;
  }

  & [data-focus-guard] {
    display: contents;
  }
`,fn=({children:e,className:n,open:r=!0,hasFocusTrap:t=r,animationVariants:o=cn,transition:a,closeOnBlur:i=!1,closeOnEsc:u=!1,onBlur:d=D,onClose:l=D,onOpen:f=D})=>{const s=Se(n,"overlay"),p=c.useCallback(v=>{v.key==="Escape"&&u&&(v.preventDefault(),v.stopPropagation(),l())},[u,l]),m=c.useCallback(v=>{v.preventDefault(),v.stopPropagation(),d(),i&&l()},[d,l,i]);return c.useEffect(()=>(document.addEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)}),[p]),O(jn,{children:Me(Jr,{readyToFocus:t,children:[O(Bn,{children:r&&O(et,{className:s,variants:o,transition:a,initial:"initial",animate:"appear",exit:"disappear",onClick:m,onAnimationStart:f},"overlay-motion")},"overlay"),e]})})},nt=(e,n,r={})=>({...n[e],...r}),rt=({open:e=!0,children:n,className:r,animationVariants:t=cn,transition:o,onClick:a=D,onOpen:i=D,animate:u})=>{const d=Se("overlay-child",r),f=nt(e?"appear":"disappear",t,u);return O(Le.div,{className:d,variants:t,initial:f,animate:f,transition:o,onClick:a,onAnimationStart:i,children:n},"overlay-child-motion")};fn.Child=rt;const dn=fn,tt=j.div`
  height: ${({styles:e})=>e==null?void 0:e.height};
  background: ${({styles:e})=>e==null?void 0:e.background};
  min-height: ${({styles:e})=>e==null?void 0:e.height};
  display: flex;
  align-items: center;
  border-bottom: ${({styles:e})=>e==null?void 0:e.borderBottom};
`,Pe=j.button`
  background: ${({styles:e})=>e==null?void 0:e.background};
  color: ${({styles:e})=>e==null?void 0:e.color};
  border: ${({styles:e})=>e==null?void 0:e.border};
  width: ${({styles:e})=>e==null?void 0:e.width};
  height: ${({styles:e})=>e==null?void 0:e.height};
  display: ${({styles:e})=>e==null?void 0:e.display};
  justify-content: ${({styles:e})=>e==null?void 0:e.justifyContent};
  align-items: ${({styles:e})=>e==null?void 0:e.alignItems};
  cursor: ${({styles:e})=>e==null?void 0:e.cursor};
  border-radius: ${({styles:e})=>e==null?void 0:e.borderRadius};
  &:hover {
    background: ${({styles:e})=>e==null?void 0:e.hover.background};
  }
`,ot=j.div`
  text-align: ${({styles:e})=>e==null?void 0:e.textAlign};
  display: ${({styles:e})=>e==null?void 0:e.display};
  justify-content: ${({styles:e})=>e==null?void 0:e.justifyContent};
  flex-grow: ${({styles:e})=>e==null?void 0:e.flexGrow};
`,ke=j.div`
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Te=e=>{switch(e){case"close":return O($n,{});case"back":return O(Ln,{});default:return null}},at=({title:e,leftButton:n,onLeftButtonClick:r,rightButton:t,onRightButtonClick:o})=>{var i,u,d;const a=$e({key:"Modal",fromContext:!0});return Me(tt,{styles:a==null?void 0:a.Header,children:[O(ke,{children:n?O(Pe,{onClick:r,styles:(i=a==null?void 0:a.Header)==null?void 0:i.ActionButton,children:Te(n)}):null}),O(ot,{styles:(u=a==null?void 0:a.Header)==null?void 0:u.Title,children:e}),O(ke,{children:t?O(Pe,{onClick:o,styles:(d=a==null?void 0:a.Header)==null?void 0:d.ActionButton,children:Te(t)}):null})]})},it=at,ut=Un.MODAL,ct=fe(dn)`
  z-index: ${e=>e.zIndex};
`,ft=fe(dn.Child)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({styles:e})=>e.mobile.backgroundColor};
  border-radius: ${({styles:e})=>e.mobile.borderRadius};
  width: ${({styles:e})=>e.mobile.width};
  max-width: ${({styles:e})=>e.mobile.maxWidth};
  height: ${({styles:e})=>e.mobile.height};
  max-height: ${({styles:e})=>e.mobile.maxHeight};
  box-shadow: ${({styles:e})=>e.mobile.boxShadow};
  margin: ${({styles:e})=>e.mobile.margin};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  z-index: ${e=>e.zIndex};

  @media (min-width: 769px) {
    background-color: ${({styles:e})=>e.desktop.backgroundColor};
    border-radius: ${({styles:e})=>e.desktop.borderRadius};
    width: ${({styles:e})=>e.desktop.width};
    max-width: ${({styles:e})=>e.desktop.maxWidth};
    height: ${({styles:e})=>e.desktop.height};
    max-height: ${({styles:e})=>e.desktop.maxHeight};
    box-shadow: ${({styles:e})=>e.desktop.boxShadow};
    margin: ${({styles:e})=>e.desktop.margin};
  }
`,dt=fe.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  overflow: auto;
  padding-bottom: 16px; /*Needed to compensate top margin on mobile*/
  @media (min-width: 769px) {
    padding-bottom: 0px;
  }
`,st={desktop:{initial:{y:"100vh",scale:.8},appear:{y:0,scale:1},disappear:{y:"100vh",scale:.8}},mobile:{initial:{y:"100vh",scale:.8},appear:{y:0,scale:1},disappear:{y:"100vh",scale:.8}}},lt={type:"spring",bounce:.15,duration:.5},vt=(e,n)=>e===-1?0:e+1===n?16:-8,ge=({uniqId:e,label:n="modal",role:r="dialog",open:t,onClose:o,onBlur:a,closeOnBlur:i=!0,closeOnEsc:u=!0,animationVariants:d=st,vailAnimationVariants:l,transition:f=lt,vailTransition:s,overrides:p,animate:m={},children:v})=>{const[g,h]=c.useState(0),x=$e({key:"Modal",overrides:p}),{onModalOpen:E,onModalClose:A,modalPosition:y,openModals:I,modalIsActive:C}=Tn(e),b=Sn();c.useEffect(()=>{t?(h(ut+2*y),E()):A()},[t,E,A,y]);const F=y===-1?1:1-(I-y-1)*.03,N=b?vt(y,I):"auto",_=b?d.mobile:d.desktop;return O(Mn,{overrides:p,children:O(ct,{open:t,hasFocusTrap:C&&t,closeOnBlur:i,closeOnEsc:C&&u,onClose:o,onBlur:a,transition:s,animationVariants:l,zIndex:g,children:O(ft,{animationVariants:_,open:t,transition:f,label:n,role:r,animate:{scale:F,marginTop:N,...m},styles:x,zIndex:g+1,children:v})})})};ge.Content=dt;ge.Header=it;const bt=ge;export{Un as L,bt as M,dn as O};
