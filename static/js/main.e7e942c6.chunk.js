(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{20:function(e,t,n){"use strict";n.r(t);var r={};n.d(r,"addRoll",function(){return h}),n.d(r,"clearHistory",function(){return m}),n.d(r,"modifyInput",function(){return b});var o=n(1),a=n.n(o),i=n(19),l=n.n(i),u=n(3),c=n(11),s="add roll",p="clear history",d="modify input";function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=Object(c.b)({rolls:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return[t.payload].concat(f(e));case p:return[];default:return e}},inputValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return document.querySelector(".roll-input").classList.remove("roll-input-validation-error"),document.querySelector(".roll-input-validation-label").style.display="none",t.payload;default:return e}}});function h(e){return{type:s,payload:e}}function m(){return{type:p}}function b(e){return{type:d,payload:e}}var w=n(0),v=function(e,t,n,r){var o=new w.AmbientLight(t,1),a=new w.PointLight(n,1),i=new w.PointLight(r,1);return a.position.set(-20,-30,40),i.position.set(20,30,40),e.add(o),e.add(a),e.add(i),{update:function(e){}}},g=function(e,t,n,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=new w.Clock,u=new w.Vector3(0,0,0),c={width:e.width,height:e.height},s={x:0,y:0},p=new w.Scene,d=function(t){var n=t.width,r=t.height,o=new w.WebGLRenderer({canvas:e,alpha:!0,antialias:!0}),a=window.devicePixelRatio?window.devicePixelRatio:1;return o.setPixelRatio(a),o.setSize(n,r),o.gammaInput=!0,o.gammaOutput=!0,o}(c),f=function(e){var t=e.width,n=e.height,r=t/n,o=new w.PerspectiveCamera(60,r,4,100);return o.position.z=40,o}(c),y=function(e){var l;l=i?t(e,15,n,i,.9):t(e,15,n,.93);return[v(e,r,o,a),l]}(p);return{update:function(){for(var e=l.getElapsedTime(),t=0;t<y.length;t++)y[t].update(e);f.position.x+=.01*(.01*s.x-f.position.x),f.position.y+=.01*(-.01*s.y-f.position.y),f.lookAt(u),d.render(p,f)},onWindowResize:function(){var t=e.width,n=e.height;c.width=t,c.height=n,f.aspect=t/n,f.updateProjectionMatrix(),d.setSize(t,n)},onMouseMove:function(e,t){s.x=e,s.y=t}}};function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,L(t).apply(this,arguments))}var n,r,o;return n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.shape,n=e.color,r=e.ambientColor,o=e.strongLightColor,a=e.weakLightColor,i=e.color2,l=void 0===i?null:i;!function(e,t,n,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=function(e,t){var n=e.createElement("canvas");return t.appendChild(n),n}(document,e),u=g(l,t,n,r,o,a,i);function c(){l.width=window.innerWidth/7,l.height=window.innerWidth/7*.8,u.onWindowResize()}window.onresize=c,c(),function e(t){requestAnimationFrame(e),u.update()}()}(this.threeRootElement,t,n,r,o,a,l)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{ref:function(t){e.threeRootElement=t}})}}])&&S(n.prototype,r),o&&S(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");_(e.prototype,t&&t.prototype),t&&_(e,t)}(t,e),t}(o.Component),R=n(16),O=new(n.n(R).a);function M(e){try{return O.parse(e)}catch(e){return e}}var j=n(7);function x(e){return(x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return!t||"object"!==x(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var G=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=D(this,N(t).call(this,e))).triggerRoll=function(){var e="%"===n.props.sides?100:n.props.sides,t=M("1d".concat(e)),r=Object(j.a)(t);n.props.addRoll({rollData:r,original:"1d".concat(n.props.sides)})},n.state={width:window.innerWidth/7,height:window.innerWidth/7},n}var n,r,o;return n=t,(r=[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(t){e.setState({width:t.target.innerWidth/7,height:t.target.innerWidth/7})})}},{key:"render",value:function(){return a.a.createElement("a",{style:{width:this.state.width,height:this.state.height},className:"die-button",onClick:this.triggerRoll},a.a.createElement("div",null,a.a.createElement(C,this.props),a.a.createElement("label",{className:"die-button-label"},"d",this.props.sides)))}}])&&z(n.prototype,r),o&&z(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");P(e.prototype,t&&t.prototype),t&&P(e,t)}(t,e),t}(o.Component),T=Object(u.b)(null,r)(G),A=function(e,t,n,r){var o=new w.Group,a=new w.BoxGeometry(t,t,t),i=new w.MeshLambertMaterial({color:n,side:w.DoubleSide,opacity:r,transparent:!0}),l=new w.Mesh(a,i),u=new w.LineSegments(new w.EdgesGeometry(a),new w.LineBasicMaterial);o.add(l),o.add(u),e.add(o);var c=1;return{update:function(e){var t=e*c;o.rotation.z=-t,o.rotation.x=t}}},I=function(e,t,n,r){var o=new w.Group,a=new w.DodecahedronGeometry(t),i=new w.MeshLambertMaterial({color:n,side:w.DoubleSide,opacity:r,transparent:!0}),l=new w.Mesh(a,i),u=new w.LineSegments(new w.EdgesGeometry(a),new w.LineBasicMaterial);o.add(l),o.add(u),e.add(o);var c=1;return{update:function(e){var t=e*c;o.rotation.z=-t,o.rotation.x=t}}},W=n(4),q=n(5),B=n.n(q);window.THREE=w,window.CANNON=B.a;var H=function(e,t,n,r,o){var a=new w.Group,i=new B.a.World;W.DiceManager.setWorld(i);var l=new W.DiceD10({size:t});l.chamfer=1;var u=l.getGeometry(),c=new w.MeshLambertMaterial({color:n,side:w.DoubleSide,opacity:o,transparent:!0}),s=new w.Mesh(u,c),p=new w.LineSegments(new w.EdgesGeometry(u),new w.LineBasicMaterial),d=new W.DiceD10({size:t/3});d.chamfer=1;var f=d.getGeometry(),y=new w.MeshLambertMaterial({color:r,side:w.DoubleSide,opacity:o,transparent:!0}),h=new w.Mesh(f,y),m=new w.LineSegments(new w.EdgesGeometry(f),new w.LineBasicMaterial);a.add(s),a.add(p),h.position.set(.6*-t,.6*t,.6*-t),m.position.set(.6*-t,.6*t,.6*-t),a.add(h),a.add(m),e.add(a);var b=1;return{update:function(e){var t=e*b;a.rotation.z=-t,a.rotation.x=t}}},V=function(e,t,n,r){var o=new w.Group,a=new w.IcosahedronGeometry(t),i=new w.MeshLambertMaterial({color:n,side:w.DoubleSide,opacity:r,transparent:!0}),l=new w.Mesh(a,i),u=new w.LineSegments(new w.EdgesGeometry(a),new w.LineBasicMaterial);o.add(l),o.add(u),e.add(o);var c=1;return{update:function(e){var t=e*c;o.rotation.z=-t,o.rotation.x=t}}},K=function(e,t,n,r){var o=new w.Group,a=new w.OctahedronGeometry(t),i=new w.MeshLambertMaterial({color:n,side:w.DoubleSide,opacity:r,transparent:!0}),l=new w.Mesh(a,i),u=new w.LineSegments(new w.EdgesGeometry(a),new w.LineBasicMaterial);o.add(l),o.add(u),e.add(o);var c=1;return{group:o,update:function(e){var t=e*c;o.rotation.z=-t,o.rotation.x=t}}};window.THREE=w,window.CANNON=B.a;var F=function(e,t,n,r){var o=new w.Group,a=new B.a.World;W.DiceManager.setWorld(a);var i=new W.DiceD10({size:t});i.chamfer=1;var l=i.getGeometry(),u=new w.MeshLambertMaterial({color:n,side:w.DoubleSide,opacity:r,transparent:!0}),c=new w.Mesh(l,u),s=new w.LineSegments(new w.EdgesGeometry(l),new w.LineBasicMaterial);o.add(c),o.add(s),e.add(o);var p=1;return{update:function(e){var t=e*p;o.rotation.z=-t,o.rotation.x=t}}},J=function(e,t,n,r){var o=new w.Group,a=new w.TetrahedronGeometry(t),i=new w.MeshLambertMaterial({color:n,side:w.DoubleSide,opacity:r,transparent:!0}),l=new w.Mesh(a,i),u=new w.LineSegments(new w.EdgesGeometry(a),new w.LineBasicMaterial);o.add(l),o.add(u),e.add(o);var c=1;return{update:function(e){var t=e*c;o.rotation.z=-t,o.rotation.x=t}}},U="#f53b57";function X(e){return(X="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){return!t||"object"!==X(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $(e){return($=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ee=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Z(this,$(t).call(this,e))).state={forceResize:0},n}var n,r,o;return n=t,(r=[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(){return e.forceUpdate()})}},{key:"render",value:function(){return a.a.createElement("div",{className:"qr",style:{display:"flex"}},a.a.createElement(T,{sides:4,shape:J,color:"#ef5777",ambientColor:"white",strongLightColor:"#ffc048",weakLightColor:"#ffdd59"}),a.a.createElement(T,{sides:6,shape:A,color:"#ff3f34",ambientColor:"white",strongLightColor:"#ffdd59",weakLightColor:"#0be881"}),a.a.createElement(T,{sides:8,shape:K,color:"#ffdd59",ambientColor:"white",strongLightColor:"#0be881",weakLightColor:"#05c46b"}),a.a.createElement(T,{sides:10,shape:F,color:"#0be881",ambientColor:"white",strongLightColor:"#ffdd59",weakLightColor:"#ffdd59"}),a.a.createElement(T,{sides:12,shape:I,color:"#34e7e4",ambientColor:"white",strongLightColor:"#4bcffa",weakLightColor:"#575fcf"}),a.a.createElement(T,{sides:20,shape:V,color:"#4bcffa",ambientColor:"#575fcf",strongLightColor:"#575fcf",weakLightColor:U}),a.a.createElement(T,{sides:"%",shape:H,color:"#575fcf",color2:U,ambientColor:U,strongLightColor:U,weakLightColor:"#ffc048"}))}}])&&Y(n.prototype,r),o&&Y(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Q(e.prototype,t&&t.prototype),t&&Q(e,t)}(t,e),t}(o.Component);function te(e){return(te="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e,t){return!t||"object"!==te(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ae(e){return(ae=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ie=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return oe(r,(n=r=oe(this,(e=ae(t)).call.apply(e,[this].concat(a))),r.parseRoll=function(){var e=r.props.inputValue;if("clear"===e.toLowerCase())return r.props.clearHistory(),void r.props.modifyInput("");var t=M(e.split("d%").join("d100"));if(t instanceof Error){var n=t.toString(),o=n.substr(n.lastIndexOf("Error: ")+"Error: ".length);if("Invalid term ''."===o)return;document.querySelector("#roll-input-validation-label").innerHTML="* "+o,document.querySelector(".roll-input-validation-label").style.display="block",document.querySelector(".roll-input").classList.add("roll-input-validation-error")}else{if(!t)return;var a=Object(j.a)(t);r.props.addRoll({original:e,rollData:a}),r.props.modifyInput("")}},r.onChangeInput=function(e){r.props.modifyInput(e.target.value),document.querySelector(".roll-input-validation-label").style.display="none",document.querySelector(".roll-input").classList.remove("roll-input-validation-error")},r.handleKeyPress=function(e){"Enter"===e.key&&r.parseRoll()},n))}var n,r,o;return n=t,(r=[{key:"componentDidMount",value:function(){document.querySelector(".roll-input").addEventListener("change",function(){document.querySelector(".roll-input").classList.remove("roll-input-validation-error")})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"roll-input-div"},a.a.createElement("span",{style:{width:"90%",display:"inline-block"}},a.a.createElement("input",{id:"roll-input",className:"roll-input",placeholder:"3d12 + 4d8k3 + 10",value:this.props.inputValue,onChange:this.onChangeInput,onKeyPress:this.handleKeyPress})),a.a.createElement("span",{style:{width:"10%",display:"inline-block"}},a.a.createElement("button",{className:"roll-input-button",onClick:this.parseRoll},"Roll"))),a.a.createElement("div",{className:"roll-input-validation-label"},a.a.createElement("label",{htmlFor:"roll-input",id:"roll-input-validation-label"})))}}])&&re(n.prototype,r),o&&re(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");ne(e.prototype,t&&t.prototype),t&&ne(e,t)}(t,e),t}(o.Component);var le=Object(u.b)(function(e){return{inputValue:e.inputValue}},r)(ie);function ue(e){var t=e.rollData,n=e.original;if(t){var r=t.roll;return a.a.createElement("div",null,a.a.createElement("div",{className:"roll-original"},n),a.a.createElement("span",{className:"breakdown"},r.map(function(e,t){return function(e,t){if(e.constant)return a.a.createElement("span",{key:t,className:"breakdown-constant"}," ",e.constant," ");if(e.operator)return a.a.createElement("span",{key:t,className:"breakdown-operator"}," ",e.operator," ");console.log(e.synthesizedRolls);var n=a.a.createElement("i",{key:"poly"+t,className:function(e){switch(e){case 4:return"flaticon-tetrahedron poly polyhedron-d4";case 6:return"flaticon-cube poly polyhedron-d6";case 8:return"flaticon-octahedron poly polyhedron-d8";case 10:return"flaticon-dodecahedron-1 poly polyhedron-d10";case 12:return"flaticon-dodecahedron poly polyhedron-d12";case 20:return"flaticon-icosahedron poly polyhedron-d20";case 100:return"flaticon-dodecahedron-1 poly polyhedron-d100";default:return"flaticon-dodecahedron-2 poly polyhedron-dn"}}(e.diceTerm.die.sides)});return e.synthesizedRolls.length<=1?a.a.createElement("span",{key:"term"+t},n,ce(e)):a.a.createElement("span",{key:"term"+t},n,"(",ce(e),")")}(e,t)})))}}function ce(e){return e.synthesizedRolls.map(function(t,n){var r=function(e,t){var n=["breakdown-die"];return e.explosions&&e.explosions[t]?n.push("breakdown-exploded"):e.allRolls[t]===e.diceTerm.die.sides&&n.push("breakdown-critical-hit"),e.rerolls&&e.rerolls[t]&&n.push("breakdown-rerolled"),1==e.synthesizedRolls[t]&&n.push("breakdown-critical-miss"),e.keep[t]||n.push("breakdown-dropped"),n.join(" ")}(e,n),o=[a.a.createElement("span",{key:n,className:r}," ",t," ")];return n<e.synthesizedRolls.length-1&&o.push(a.a.createElement("span",{key:"plus"+n,className:"breakdown-operator"},"\xa0+\xa0")),o})}function se(e){return(se="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e,t){return!t||"object"!==se(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ye(e){return(ye=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var he=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),fe(this,ye(t).apply(this,arguments))}var n,r,o;return n=t,(r=[{key:"renderRolls",value:function(){var e=this;return this.props.rolls?this.props.rolls.map(function(t,n){var r=ue(t),o=n%2!==e.props.rolls.length%2?"roll-table-dark-band":"roll-table-light-band",i="roll-row ".concat(o);return a.a.createElement("tr",{key:n,className:i,onClick:function(){return e.props.modifyInput(t.original)}},a.a.createElement("td",{className:"roll-table-roll-data"},r),a.a.createElement("td",{className:"roll-table-roll-evaluated"},t.rollData.evaluated))}):[]}},{key:"render",value:function(){return a.a.createElement("table",{style:{width:"100%",borderCollapse:"collapse",border:"3px solid #333"}},a.a.createElement("tbody",{style:{width:"100%"},className:"roll-table"},this.renderRolls()))}}])&&de(n.prototype,r),o&&de(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");pe(e.prototype,t&&t.prototype),t&&pe(e,t)}(t,e),t}(o.Component);var me=Object(u.b)(function(e){return{rolls:e.rolls}},r)(he);function be(e){return(be="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e,t){return(we=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ge(e,t){return!t||"object"!==be(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ee(e){return(Ee=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var _e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ge(this,Ee(t).apply(this,arguments))}var n,r,o;return n=t,(r=[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(ee,null),a.a.createElement(le,null),a.a.createElement(me,null))}}])&&ve(n.prototype,r),o&&ve(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");we(e.prototype,t&&t.prototype),t&&we(e,t)}(t,e),t}(o.Component);l.a.render(a.a.createElement(u.a,{store:Object(c.c)(y)},a.a.createElement(_e,null)),document.getElementById("root"))},44:function(e,t,n){n(43),e.exports=n(20)},7:function(module,__webpack_exports__,__webpack_require__){"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function interpretRoll(roll){var terms=[];roll.forEach(function(e){e.die?terms.push(rollDice(e)):terms.push(e)}),console.log(terms);var toEvaluate=terms.map(function(e){return e.allRolls?e.sum:e.operator?e.operator:e.constant?e.constant:void 0}).join("");return{roll:terms,evaluated:eval(toEvaluate)}}function rollDice(e){for(var t=[],n=0;n<e.count;n++)t.push(generateRoll(e.die.sides));var r=e.die.explode?explode(e,t):null,o=e.die.reroll?rerollLowest(e,t):null,a=synthesizeRolls(t,r,o),i=determineKeep(e,a);return{allRolls:t,explosions:r,rerolls:o,keep:i,sum:sumOfRolls(a,i),synthesizedRolls:a,diceTerm:e}}function generateRoll(e,t){if(!t)return Math.floor(Math.random()*e)+1;switch(t){case"MIN":return 1;case"MAX":return e;case"AVG":return(1+e)/2}}function compareByRoll(e,t){return e.roll<t.roll?-1:e.roll>t.roll?1:0}function explode(e,t){return t.map(function(t){if(e.die.explode.includes(t)){for(var n=[],r=t;r===e.die.sides;)n.push(r),r=generateRoll(e.die.sides);return n.push(r),n}return null})}function rerollLowest(e,t){return t.map(function(t){return e.die.reroll.includes(t)?[t,generateRoll(e.die.sides)]:null})}function determineKeep(e,t){var n=[],r=t.map(function(e,t){return n.push(!0),{roll:e,index:t}});if(0===e.keep)return n;r.sort(compareByRoll);for(var o=0;o<e.count-e.keep;o++)n[r[o].index]=!1;return n}function sumOfRolls(e,t){return e.reduce(function(e,n,r){return t[r]?e+n:e},0)}function sum(e){return e.reduce(function(e,t){return e+t})}function synthesizeRolls(e,t,n){var r=_toConsumableArray(e);return t&&t.map(function(e,t){e&&(r[t]=sum(e))}),n&&n.map(function(e,t){e&&(r[t]=e[e.length-1])}),r}__webpack_require__.d(__webpack_exports__,"a",function(){return interpretRoll})}},[[44,0,1]]]);
//# sourceMappingURL=main.e7e942c6.chunk.js.map