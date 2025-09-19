"use strict";(self.webpackChunkreact_antd_xform=self.webpackChunkreact_antd_xform||[]).push([[65],{58436:function(w,g,n){n.d(g,{Z:function(){return f}});var C=n(4529),m=n(48798),Z=n(59125),x=n(28322),v=n(75271),I=n(82187),T=n.n(I),P=n(62509),O=n(22845),y=n(59942),i=n(23920),c=["icon","className","onClick","style","primaryColor","secondaryColor"],s={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function D(t){var e=t.primaryColor,l=t.secondaryColor;s.primaryColor=e,s.secondaryColor=l||(0,i.pw)(e),s.calculated=!!l}function M(){return(0,y.Z)({},s)}var h=function(e){var l=e.icon,u=e.className,R=e.onClick,A=e.style,b=e.primaryColor,H=e.secondaryColor,L=(0,x.Z)(e,c),B=v.useRef(),p=s;if(b&&(p={primaryColor:b,secondaryColor:H||(0,i.pw)(b)}),(0,i.C3)(B),(0,i.Kp)((0,i.r)(l),"icon should be icon definiton, but got ".concat(l)),!(0,i.r)(l))return null;var d=l;return d&&typeof d.icon=="function"&&(d=(0,y.Z)((0,y.Z)({},d),{},{icon:d.icon(p.primaryColor,p.secondaryColor)})),(0,i.R_)(d.icon,"svg-".concat(d.name),(0,y.Z)((0,y.Z)({className:u,onClick:R,style:A,"data-icon":d.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},L),{},{ref:B}))};h.displayName="IconReact",h.getTwoToneColors=M,h.setTwoToneColors=D;var E=h;function N(t){var e=(0,i.H9)(t),l=(0,m.Z)(e,2),u=l[0],R=l[1];return E.setTwoToneColors({primaryColor:u,secondaryColor:R})}function o(){var t=E.getTwoToneColors();return t.calculated?[t.primaryColor,t.secondaryColor]:t.primaryColor}var r=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];N(P.blue.primary);var a=v.forwardRef(function(t,e){var l=t.className,u=t.icon,R=t.spin,A=t.rotate,b=t.tabIndex,H=t.onClick,L=t.twoToneColor,B=(0,x.Z)(t,r),p=v.useContext(O.Z),d=p.prefixCls,S=d===void 0?"anticon":d,U=p.rootClassName,W=T()(U,S,(0,Z.Z)((0,Z.Z)({},"".concat(S,"-").concat(u.name),!!u.name),"".concat(S,"-spin"),!!R||u.name==="loading"),l),z=b;z===void 0&&H&&(z=-1);var j=A?{msTransform:"rotate(".concat(A,"deg)"),transform:"rotate(".concat(A,"deg)")}:void 0,V=(0,i.H9)(L),K=(0,m.Z)(V,2),F=K[0],$=K[1];return v.createElement("span",(0,C.Z)({role:"img","aria-label":u.name},B,{ref:e,tabIndex:z,onClick:H,className:W}),v.createElement(E,{icon:u,primaryColor:F,secondaryColor:$,style:j}))});a.displayName="AntdIcon",a.getTwoToneColor=o,a.setTwoToneColor=N;var f=a},22845:function(w,g,n){var C=n(75271),m=(0,C.createContext)({});g.Z=m},23920:function(w,g,n){n.d(g,{C3:function(){return N},H9:function(){return M},Kp:function(){return y},R_:function(){return s},pw:function(){return D},r:function(){return i},vD:function(){return h}});var C=n(59942),m=n(41392),Z=n(62509),x=n(18263),v=n(16167),I=n(4449),T=n(75271),P=n(22845);function O(o){return o.replace(/-(.)/g,function(r,a){return a.toUpperCase()})}function y(o,r){(0,I.ZP)(o,"[@ant-design/icons] ".concat(r))}function i(o){return(0,m.Z)(o)==="object"&&typeof o.name=="string"&&typeof o.theme=="string"&&((0,m.Z)(o.icon)==="object"||typeof o.icon=="function")}function c(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(o).reduce(function(r,a){var f=o[a];switch(a){case"class":r.className=f,delete r.class;break;default:delete r[a],r[O(a)]=f}return r},{})}function s(o,r,a){return a?T.createElement(o.tag,(0,C.Z)((0,C.Z)({key:r},c(o.attrs)),a),(o.children||[]).map(function(f,t){return s(f,"".concat(r,"-").concat(o.tag,"-").concat(t))})):T.createElement(o.tag,(0,C.Z)({key:r},c(o.attrs)),(o.children||[]).map(function(f,t){return s(f,"".concat(r,"-").concat(o.tag,"-").concat(t))}))}function D(o){return(0,Z.generate)(o)[0]}function M(o){return o?Array.isArray(o)?o:[o]:[]}var h={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},E=`
.anticon {
  display: inline-flex;
  alignItems: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,N=function(r){var a=(0,T.useContext)(P.Z),f=a.csp,t=a.prefixCls,e=E;t&&(e=e.replace(/anticon/g,t)),(0,T.useEffect)(function(){var l=r.current,u=(0,v.A)(l);(0,x.hq)(e,"@ant-design-icons",{prepend:!0,csp:f,attachTo:u})},[])}},99032:function(w,g,n){n.r(g),n.d(g,{default:function(){return D}});var C=n(4529),m=n(75271),Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},x=Z,v=n(58436),I=function(h,E){return m.createElement(v.Z,(0,C.Z)({},h,{ref:E,icon:x}))},T=m.forwardRef(I),P=T,O=n(92864),y=n(19779),i=n(40435),c=n(13883),s=function(){return(0,c.tZ)("div",{id:"page-404"},(0,c.tZ)("section",null,(0,c.tZ)(O.ZP,{status:"404",title:"404",subTitle:(0,c.tZ)(i._H,{id:"app.not-found.subTitle"}),extra:(0,c.tZ)(i.rU,{to:"/"},(0,c.tZ)(y.ZP,{type:"primary",icon:(0,c.tZ)(P,null)}," ",(0,c.tZ)(i._H,{id:"app.not-found.back-home"})))})))},D=s}}]);
