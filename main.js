(()=>{"use strict";var n,e,o,r,t,a,i,c,s,d,l,p,u,f,v={426:(n,e,o)=>{o.d(e,{Z:()=>c});var r=o(81),t=o.n(r),a=o(645),i=o.n(a)()(t());i.push([n.id,':root {\n  --bg-color: #f0ebe3;\n  --header-color: #576f72;\n  --nav-color: #e4dccf;\n  --black: #333;\n  --lighter-blue:#7d9d9c;\n  --nav-hover: #cec7bb; \n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  background-color: var(--bg-color);\n}\n\n/* --HEADER-- */\n.header {\n  background-color: var(--header-color);\n  padding: 20px;\n  color: white;\n}\n\n.logo {\n  display: flex;\n  gap: 10px;\n  font-size: 3rem;\n  align-items: center;\n}\n\n.title {\n  font-size: 3rem;\n}\n\n/* Main */\n.main {\n  display: flex;\n  min-height: calc(100vh - 4rem - 4rem);\n}\n\n/* Navigation Bar */\n.nav {\n  background-color: var(--nav-color);\n  width: 16vw;\n  padding: 20px;\n  color: var(--black);\n  list-style: none;\n  font-size: 1.2em;\n}\n\n.heading {\n  color: var(--header-color);\n  display: flex;\n  align-self: center;\n  gap: 8px;\n  margin-top: 30px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid var(--header-color);\n}\n\n.heading:first-child {\n  margin-top: 10px;\n}\n\n#homeBtn {\n  cursor: pointer;\n  padding: 10px;\n}\n\n.list {\n  cursor: pointer;\n  padding: 10px 30px;\n  margin: 3px;\n}\n\n.btn:hover {\n  background-color: var(--nav-hover);\n  border-radius: 5px;\n}\n\n/* Projects Menu */\n.add-proj {\n  border: none;\n  background: none;\n  font-size: 1em;\n  line-height: 2em;\n  color: var(--header-color);\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  padding: 4px 20px;\n}\n\n/* Priorities Menu */\n.fa-circle, .fa-plus {\n  font-size: .8em;\n}\n\n.red {color: rgb(255, 108, 108);}\n\n.orange {color: rgb(240, 194, 142);}\n\n.green {color: rgb(99, 143, 99);}\n\n/* --Content-- */\n.content {\n  padding: 40px;\n  color: var(--black);\n  width: 100%;\n}\n\n.project-heading {margin-bottom: 25px;}\n.project-name {font-size: 2rem;}\n\n.task-description, .project-description {\n  color: gray;\n  overflow: hidden;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1; /* number of lines to show */\n          line-clamp: 1; \n  -webkit-box-orient: vertical;\n}\n\n.task {\n  display: flex;\n  background-color: white;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 50px;\n  padding: 20px;\n  border-radius: 5px;\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.high {border-left: 8px solid rgb(255, 108, 108);}\n\n.medium {border-left: rgb(240, 194, 142);}\n\n.low {border-left: rgb(99, 143, 99);}\n\ninput[type="checkbox"] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--lighter-blue);\n}\n\n.task-info, .actions-btn {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin: 0 20px;\n}\n\n.duedate {\n  word-wrap: break-word;\n}\n\n.actions {cursor: pointer;}\n\n.options {\n  position: absolute;\n  top: 40px;\n  right: 10px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.option {\n  padding: 10px;\n  cursor: pointer;\n}\n\n.option:hover {\n  background-color: #f1f1f1;\n}\n\n#addTask:hover {\n  background-color: var(--nav-color);\n  border-radius: 5px;\n}\n\n/* --Modal-- */\n.modal {\n  position: fixed;\n  left: 0;\n  top: 0;\n  overflow-y: auto;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.16);\n  width: 100vw;\n  height: 100vh;\n  opacity: 0;\n  pointer-events: none;\n}\n\n/* added on the options menu and modal to be visible */\n.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.add-project-form {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 30px;\n  background-color: white;\n  min-width: 20vw;\n  min-height: 40vh;\n  position: absolute;\n  left: 50%;\n  top: 20%;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  transform: translate(-50%);\n  -webkit-transform: translate(-50%);\n    -moz-transform: translate(-50%);\n    -ms-transform: translate(-50%);\n    -o-transform: translate(-50%);\n}\n\nlabel {\n  color: var(--header-color);\n  font-weight: 600;\n  font-size: 1.2rem;\n  margin-bottom: 5px;\n}\n\ninput[type="text"], input[type="date"], select, textarea {\n  padding: 8px;\n  border-radius: 5px;\n  border: 2px solid #7d9d9c;\n  background-color: var(--bg-color);\n  font-size: 1rem;\n  margin-bottom: 15px;\n}\n\ntextarea {\n  resize: none;\n}\n\n#saveBtn {\n  background-color: var(--header-color);\n  color: var(--bg-color);\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\n.modal-close-btn {\n  position: absolute;\n  color: var(--header-color);\n  font-size: 2.3rem;\n  right: 10px;\n  top: 2px;\n  opacity: 0.2;\n  cursor: pointer;\n}\n\n.modal-close-btn:hover {\n  opacity: 1;\n}\n\n\n/* --Footer-- */\n.footer {\n  display: flex;\n  background-color: var(--header-color);\n  height: 6vh;\n  color: white;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  padding: 20px;\n}\n\n/* --Media Queries-- */\n@media only screen and (max-width: 600px) {\n  .main {\n    display: block;\n  }\n\n  .nav {\n    width: 100%;\n    /* display: none; */\n  }\n}',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o="",r=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),r&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=n(e),r&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(n,o,r,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),t&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=t):l[4]="".concat(t)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function o(n){for(var o=-1,r=0;r<e.length;r++)if(e[r].identifier===n){o=r;break}return o}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=o(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var v=t(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function t(n,e){var o=e.domAPI(e);return o.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;o.update(n=e)}else o.remove()}}n.exports=function(n,t){var a=r(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=o(a[i]);e[c].references--}for(var s=r(n,t),d=0;d<a.length;d++){var l=o(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,o){var r=function(n){if(void 0===e[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,o)=>{n.exports=function(n){var e=o.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(o){!function(n,e,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var t=void 0!==o.layer;t&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,t&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function g(n){var e=m[n];if(void 0!==e)return e.exports;var o=m[n]={id:n,exports:{}};return v[n](o,o.exports,g),o.exports}g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var o in e)g.o(e,o)&&!g.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),g.nc=void 0,n=g(379),e=g.n(n),o=g(795),r=g.n(o),t=g(569),a=g.n(t),i=g(565),c=g.n(i),s=g(216),d=g.n(s),l=g(589),p=g.n(l),u=g(426),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,function(){const n=document.getElementById("addTask"),e=document.querySelector(".modal"),o=document.querySelector(".modal-close-btn"),r=document.querySelector(".actions"),t=document.querySelector(".options");n.addEventListener("click",(function(){e.classList.add("active")})),o.addEventListener("click",(function(){e.classList.remove("active")})),r.addEventListener("click",(function(){t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}))}()})();