"use strict";(self.webpackChunkreact_antd_xform=self.webpackChunkreact_antd_xform||[]).push([[904],{82181:function(z,x,r){r.r(x),r.d(x,{demos:function(){return f}});var M=r(75271),f={}},5151:function(z,x,r){r.r(x),r.d(x,{demos:function(){return f}});var M=r(75271),f={}},53748:function(z,x,r){var M;r.r(x),r.d(x,{demos:function(){return J}});var f=r(90228),j=r.n(f),W=r(87999),q=r.n(W),V=r(75271),F=r(12020),de=r(87040),J={"docs-introduction-demo-0":{component:V.memo(V.lazy(q()(j()().mark(function _(){var R,y,E,A,k,g,S,ee,w;return j()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(r.t.bind(r,75271,19));case 2:return R=d.sent,y=R.default,d.next=6,Promise.resolve().then(r.bind(r,12020));case 6:return E=d.sent,A=E.Form,k=E.FormModel,g=E.FormItem,d.next=12,Promise.resolve().then(r.bind(r,87040));case 12:return S=d.sent,ee=S.Button,w=function(){var ne=new k({name:"44444",introduce:"\u6211\u662F\u5F20\u4E09\uFF0C\u6211\u6765\u81EA\u6E56\u5317",date:"2025-09-17",dateRange:["2025-09-24","2025-10-30"],rate:5});return y.createElement(A,{model:ne,onSubmit:function(K){return console.log(K)}},y.createElement(g,{component:"input",label:"input\u8868\u5355",name:"name",required:!0}),y.createElement(g,{component:"textArea",label:"textArea",name:"introduce",required:!0}),y.createElement(g,{defaultValue:"jack",component:"select",label:"select\u5355\u9009",options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"},{value:"disabled",label:"Disabled",disabled:!0}],writeDefaultValueToModel:!0,name:"friend",required:!0,componentProps:{style:{width:"100%"}}}),y.createElement(g,{defaultValue:["book"],component:"multiSelect",label:"select\u591A\u9009",options:[{value:"book",label:"\u8BFB\u4E66"},{value:"study",label:"\u5B66\u4E60"},{value:"disabled",label:"Disabled",disabled:!0}],writeDefaultValueToModel:!0,name:"likes",required:!0,componentProps:{style:{width:"100%"},mode:"multiple"}}),y.createElement(g,{component:"radio",label:"radio\u5355\u9009",options:[{value:"male",label:"\u7537"},{value:"female",label:"\u5973"}],defaultValue:"male",writeDefaultValueToModel:!0,name:"gender",required:!0}),y.createElement(g,{component:"radio",labelStyle:{marginTop:-4},label:"radio\u5355\u9009",options:[{value:"male",label:"\u7537"},{value:"female",label:"\u5973"}],defaultValue:"male",writeDefaultValueToModel:!0,componentProps:{optionType:"button"},name:"gender",required:!0}),y.createElement(g,{component:"checkbox",defaultValue:["apple"],writeDefaultValueToModel:!0,label:"checkbox\u591A\u9009",labelStyle:{marginTop:-4},options:[{value:"apple",label:"\u82F9\u679C"},{value:"banana",label:"\u9999\u8549"}],name:"fruits",required:!0}),y.createElement(g,{component:"inputNumber",defaultValue:1,writeDefaultValueToModel:!0,label:"\u6570\u5B57\u8868\u5355",name:"numbers",required:!0,componentProps:{min:0,max:10}}),y.createElement(g,{component:"slider",defaultValue:80,writeDefaultValueToModel:!0,label:"slider\u8FDB\u5EA6\u6761",name:"slider",required:!0}),y.createElement(g,{component:"switch",defaultValue:!0,writeDefaultValueToModel:!0,label:"switch\u5F00\u5173",name:"switch",required:!0}),y.createElement(g,{component:"datePicker",writeDefaultValueToModel:!0,label:"\u65E5\u671F\u9009\u62E9",name:"date",componentProps:{style:{width:"100%"},picker:"date"},required:!0}),y.createElement(g,{component:"dateRangePicker",writeDefaultValueToModel:!0,label:"\u65E5\u671F\u533A\u95F4\u9009\u62E9",name:"dateRange",componentProps:{style:{width:"100%"},picker:"date"},required:!0}),y.createElement(g,{component:"timePicker",writeDefaultValueToModel:!0,label:"\u65F6\u95F4\u9009\u62E9",name:"time",componentProps:{style:{width:"100%"}},required:!0}),y.createElement(g,{component:"timeRangePicker",writeDefaultValueToModel:!0,label:"\u65F6\u95F4\u533A\u95F4\u9009\u62E9",name:"timeRange",componentProps:{style:{width:"100%"}},required:!0}),y.createElement(g,{component:"rate",writeDefaultValueToModel:!0,label:"rate\u8BC4\u5206",name:"rate",componentProps:{style:{width:"100%"}},required:!0}),y.createElement(g,{component:"colorPicker",writeDefaultValueToModel:!0,label:"colorPicker",name:"colorPicker",componentProps:{returnType:"hex"},required:!0}),y.createElement(A.Submit,{ButtonComponent:ee,type:"primary"},"\u63D0\u4EA4"),y.createElement(A.FormReset,{ButtonComponent:ee},"\u91CD\u7F6E"))},d.abrupt("return",{default:w});case 16:case"end":return d.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-introduction-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Form, FormModel, FormItem } from 'react-antd-xform';
import { Button } from 'antd';

const XFormTest = () => {
  const model = new FormModel({
    name: '44444',
    introduce: '\u6211\u662F\u5F20\u4E09\uFF0C\u6211\u6765\u81EA\u6E56\u5317',
    date: '2025-09-17',
    dateRange: ['2025-09-24', '2025-10-30'],
    rate: 5,
  });
  return (
    <Form model={model} onSubmit={(values) => console.log(values)}>
      <FormItem component="input" label="input\u8868\u5355" name="name" required />
      <FormItem component="textArea" label="textArea" name="introduce" required />
      <FormItem
        defaultValue="jack"
        component="select"
        label="select\u5355\u9009"
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
        writeDefaultValueToModel={true}
        name="friend"
        required
        componentProps={{
          style: { width: '100%' },
        }}
      />
      <FormItem
        defaultValue={['book']}
        component="multiSelect"
        label="select\u591A\u9009"
        options={[
          { value: 'book', label: '\u8BFB\u4E66' },
          { value: 'study', label: '\u5B66\u4E60' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
        writeDefaultValueToModel={true}
        name="likes"
        required
        componentProps={{
          style: { width: '100%' },
          mode: 'multiple',
        }}
      />
      <FormItem
        component="radio"
        label="radio\u5355\u9009"
        options={[
          { value: 'male', label: '\u7537' },
          { value: 'female', label: '\u5973' },
        ]}
        defaultValue="male"
        writeDefaultValueToModel={true}
        name="gender"
        required
      />
      <FormItem
        component="radio"
        labelStyle={{ marginTop: -4 }}
        label="radio\u5355\u9009"
        options={[
          { value: 'male', label: '\u7537' },
          { value: 'female', label: '\u5973' },
        ]}
        defaultValue="male"
        writeDefaultValueToModel={true}
        componentProps={{
          optionType: 'button',
        }}
        name="gender"
        required
      />
      <FormItem
        component="checkbox"
        defaultValue={['apple']}
        writeDefaultValueToModel={true}
        label="checkbox\u591A\u9009"
        labelStyle={{ marginTop: -4 }}
        options={[
          { value: 'apple', label: '\u82F9\u679C' },
          { value: 'banana', label: '\u9999\u8549' },
        ]}
        name="fruits"
        required
      />
      <FormItem
        component="inputNumber"
        defaultValue={1}
        writeDefaultValueToModel={true}
        label="\u6570\u5B57\u8868\u5355"
        name="numbers"
        required
        componentProps={{
          min: 0,
          max: 10,
        }}
      />
      <FormItem
        component="slider"
        defaultValue={80}
        writeDefaultValueToModel={true}
        label="slider\u8FDB\u5EA6\u6761"
        name="slider"
        required
      />
      <FormItem
        component="switch"
        defaultValue={true}
        writeDefaultValueToModel={true}
        label="switch\u5F00\u5173"
        name="switch"
        required
      />
      <FormItem
        component="datePicker"
        writeDefaultValueToModel={true}
        label="\u65E5\u671F\u9009\u62E9"
        name="date"
        componentProps={{
          style: { width: '100%' },
          picker: 'date',
        }}
        required
      />
      <FormItem
        component="dateRangePicker"
        writeDefaultValueToModel={true}
        label="\u65E5\u671F\u533A\u95F4\u9009\u62E9"
        name="dateRange"
        componentProps={{
          style: { width: '100%' },
          picker: 'date',
        }}
        required
      />
      <FormItem
        component="timePicker"
        writeDefaultValueToModel={true}
        label="\u65F6\u95F4\u9009\u62E9"
        name="time"
        componentProps={{
          style: { width: '100%' },
        }}
        required
      />
      <FormItem
        component="timeRangePicker"
        writeDefaultValueToModel={true}
        label="\u65F6\u95F4\u533A\u95F4\u9009\u62E9"
        name="timeRange"
        componentProps={{
          style: { width: '100%' },
        }}
        required
      />
      <FormItem
        component="rate"
        writeDefaultValueToModel={true}
        label="rate\u8BC4\u5206"
        name="rate"
        componentProps={{
          style: { width: '100%' },
        }}
        required
      />
      <FormItem
        component="colorPicker"
        writeDefaultValueToModel={true}
        label="colorPicker"
        name="colorPicker"
        componentProps={{
          returnType: 'hex',
        }}
        required
      />
      <Form.Submit ButtonComponent={Button} type="primary">
        \u63D0\u4EA4
      </Form.Submit>
      <Form.FormReset ButtonComponent={Button}>\u91CD\u7F6E</Form.FormReset>
    </Form>
  );
};

export default XFormTest;`},react:{type:"NPM",value:"18.3.1"},"react-antd-xform":{type:"NPM",value:"1.0.9"},antd:{type:"NPM",value:"5.27.3"}},entry:"index.tsx"},context:{react:M||(M=r.t(V,2)),"react-antd-xform":F,antd:de},renderOpts:{compile:function(){var _=q()(j()().mark(function y(){var E,A=arguments;return j()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,r.e(551).then(r.bind(r,94551));case 2:return g.abrupt("return",(E=g.sent).default.apply(E,A));case 3:case"end":return g.stop()}},y)}));function R(){return _.apply(this,arguments)}return R}()}},"docs-introduction-demo-1":{component:V.memo(V.lazy(q()(j()().mark(function _(){var R,y,E,A,k,g,S;return j()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,Promise.resolve().then(r.t.bind(r,75271,19));case 2:return R=w.sent,y=R.default,w.next=6,Promise.resolve().then(r.bind(r,12020));case 6:return E=w.sent,A=E.Form,k=E.FormModel,g=E.FormItem,S=function(){var d=new k({name:"test"});return y.createElement(A,{model:d,onSubmit:function(ne){return console.log(ne)}},y.createElement(g,{component:"input",label:"input\u8868\u5355",name:"name",required:!0}))},w.abrupt("return",{default:S});case 12:case"end":return w.stop()}},_)})))),asset:{type:"BLOCK",id:"docs-introduction-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Form, FormModel, FormItem } from 'react-antd-xform';
import { Button } from 'antd';

const XFormTest = () => {
  const model = new FormModel({
    name: 'test',
  });
  return (
    <Form model={model} onSubmit={(values) => console.log(values)}>
      <FormItem component="input" label="input\u8868\u5355" name="name" required />
    </Form>
  );
};

export default XFormTest;`},react:{type:"NPM",value:"18.3.1"},"react-antd-xform":{type:"NPM",value:"1.0.9"}},entry:"index.tsx"},context:{react:M||(M=r.t(V,2)),"react-antd-xform":F},renderOpts:{compile:function(){var _=q()(j()().mark(function y(){var E,A=arguments;return j()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,r.e(551).then(r.bind(r,94551));case 2:return g.abrupt("return",(E=g.sent).default.apply(E,A));case 3:case"end":return g.stop()}},y)}));function R(){return _.apply(this,arguments)}return R}()}}}},5379:function(z,x,r){r.r(x),r.d(x,{demos:function(){return f}});var M=r(75271),f={}},283:function(z,x,r){r.r(x),r.d(x,{demos:function(){return f}});var M=r(75271),f={}},55297:function(z,x,r){var M;r.r(x),r.d(x,{demos:function(){return _}});var f=r(90228),j=r.n(f),W=r(87999),q=r.n(W),V=r(75271),F=r(12020),de=r(87040),J=r(62407),_={"docs-use-document-form-submit-demo-0":{component:V.memo(V.lazy(q()(j()().mark(function R(){var y,E,A,k,g,S,ee,w,ae,d,re;return j()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(r.t.bind(r,75271,19));case 2:return y=i.sent,E=y.default,i.next=6,Promise.resolve().then(r.bind(r,12020));case 6:return A=i.sent,k=A.Form,g=A.FormModel,S=A.FormItem,i.next=12,Promise.resolve().then(r.bind(r,87040));case 12:return ee=i.sent,w=ee.Button,i.next=16,Promise.resolve().then(r.bind(r,62407));case 16:return ae=i.sent,d=ae.default,re=function(){var O=new g({name:"44444",introduce:"\u6211\u662F\u5F20\u4E09\uFF0C\u6211\u6765\u81EA\u6E56\u5317"});return E.createElement(k,{model:O,onSubmit:function(be){return console.log(be)}},E.createElement(S,{component:"input",label:"input\u8868\u5355",name:"name",required:!0}),E.createElement(S,{component:"textArea",label:"textArea",name:"introduce",required:!0}),E.createElement(k.Submit,{ButtonComponent:w,type:"primary"},"\u63D0\u4EA4"),E.createElement(d,{defaultShow:!0}))},i.abrupt("return",{default:re});case 20:case"end":return i.stop()}},R)})))),asset:{type:"BLOCK",id:"docs-use-document-form-submit-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Form, FormModel, FormItem } from 'react-antd-xform';
import { Button } from 'antd';
import ValuePreview from '../components/ValuePreview.tsx'

const XFormTest = () => {
  const model = new FormModel({
    name: '44444',
    introduce: '\u6211\u662F\u5F20\u4E09\uFF0C\u6211\u6765\u81EA\u6E56\u5317',
  });
  return (
    <Form model={model} onSubmit={(values) => console.log(values)}>
      <FormItem component="input" label="input\u8868\u5355" name="name" required />
      <FormItem component="textArea" label="textArea" name="introduce" required />
      <Form.Submit ButtonComponent={Button} type="primary">
        \u63D0\u4EA4
      </Form.Submit>
      {/* \u53EA\u7528\u6765\u5B9E\u65F6\u9884\u89C8\u8868\u5355\u4E2D\u7684\u5185\u5BB9 */}
       <ValuePreview defaultShow={true} />
    </Form>
  );
};

export default XFormTest;`},react:{type:"NPM",value:"18.3.1"},"react-antd-xform":{type:"NPM",value:"1.0.9"},antd:{type:"NPM",value:"5.27.3"},"../components/ValuePreview.tsx":{type:"FILE",value:r(48934).Z}},entry:"index.tsx"},context:{"../components/ValuePreview.tsx":J,react:M||(M=r.t(V,2)),"react-antd-xform":F,antd:de,"/Users/zhangjianhua/zjh/react-antd-xform/docs/components/ValuePreview.tsx":J},renderOpts:{compile:function(){var R=q()(j()().mark(function E(){var A,k=arguments;return j()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,r.e(551).then(r.bind(r,94551));case 2:return S.abrupt("return",(A=S.sent).default.apply(A,k));case 3:case"end":return S.stop()}},E)}));function y(){return R.apply(this,arguments)}return y}()}}}},62407:function(z,x,r){r.r(x);var M=r(48305),f=r.n(M),j=r(75271),W=r(28123),q=r(74305),V=r(10001),F=r.n(V),de=r(39453),J=r(78553),_=r(52676),R=(0,de.Pi)(function(y){var E=y.style,A=y.defaultShow,k=y.model,g=(0,J.t)(),S=k!=null?k:g,ee=(0,W.ZN)(S.values),w=j.useState(A),ae=f()(w,2),d=ae[0],re=ae[1];return(0,_.jsxs)("div",{style:E,children:[(0,_.jsx)("div",{style:{marginTop:8,marginBottom:8},children:(0,_.jsx)(q.Z,{checked:d,onChange:function(i){return re(i.target.checked)},children:"\u663E\u793A JSON"})}),d&&(0,_.jsx)(F(),{name:"\u8868\u5355\u72B6\u6001\u9884\u89C8",src:ee})]})});x.default=R},78553:function(z,x,r){r.d(x,{k:function(){return W},t:function(){return j}});var M=r(75271),f=(0,M.createContext)(null);function j(){return(0,M.useContext)(f)}f.displayName="ModelContext";var W=f.Provider},12020:function(z,x,r){r.r(x),r.d(x,{AsyncValue:function(){return ce},Form:function(){return Q},FormEnvProvider:function(){return Re},FormItem:function(){return ra},FormModel:function(){return Ie},arrayHelpers:function(){return tt},createFormItem:function(){return pe},modelUtils:function(){return ie},useFormEnv:function(){return se},useModel:function(){return X.t}});var M=r(26068),f=r.n(M),j=r(48305),W=r.n(j),q=r(67825),V=r.n(q),F=r(75271),de=r(335),J=r.n(de),_=r(90228),R=r.n(_),y=r(87999),E=r.n(y),A=r(15558),k=r.n(A),g=r(25298),S=r.n(g),ee=r(17069),w=r.n(ee),ae=r(82092),d=r.n(ae),re=r(53670),ne=r.n(re),i=r(28123),K=function(e){return e.rootModel="rootModel",e.subModel="subModel",e}({}),O=function(e){return e.normal="normal",e.tuple="tuple",e.readonly="readonly",e}({}),Se=r(21742),be=r.n(Se),rt=r(83136),ot=r.n(rt),lt=r(53318),ut=r.n(lt),ce=function(){function e(t,a){var n=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};S()(this,e),d()(this,"_disposers",void 0),d()(this,"_error",void 0),d()(this,"_reaction",void 0),d()(this,"_status",void 0),d()(this,"_current",void 0),d()(this,"_cancelLastGetter",void 0),d()(this,"_atom",void 0),d()(this,"_refreshAtom",void 0),d()(this,"fetcher",void 0),d()(this,"options",void 0),d()(this,"name",void 0),d()(this,"_start",function(){n._reaction||(n._reaction=new i.le("".concat(n.name,"#reaction"),function(){n._status!=="loading"&&(n._status="loading",n._atom.reportChanged()),n._reaction&&n._reaction.track(function(){var l,u=!1;n._cancelLastGetter=function(){u=!0};var c=(l=n._mobxGlobal.inXFormAsyncValueFetcher)!==null&&l!==void 0?l:!1;n._mobxGlobal.inXFormAsyncValueFetcher=!0,n._refreshAtom.reportObserved();var p;try{p=n.fetcher()}catch(m){p=Promise.reject(m)}Promise.resolve(p).then(function(m){u||(0,i.z)(function(){n._status="ready",m!==e.SKIP&&(n._current=m),n._error=null,n._atom.reportChanged()})}).catch(function(m){if(!(m instanceof e.StillLoading))throw(0,i.z)(function(){n._status="error",n._error=m,n._atom.reportChanged()}),m}),n._mobxGlobal.inXFormAsyncValueFetcher=c})}),n._reaction.schedule_())}),d()(this,"_stop",function(){n._status="loading",n._reaction&&(n._reaction.dispose(),n._reaction=null)}),this._disposers=[],this._error=null,this._reaction=null,this._status="loading",this._current=a,this._cancelLastGetter=null,this.fetcher=t,this.options=o,this.name=typeof o.name=="string"?o.name:"AsyncValue_".concat(e._globalCount++),this._atom=(0,i.cp)("".concat(this.name,"#state")),this._refreshAtom=(0,i.cp)("".concat(this.name,"#refresh")),(0,i.rC)(this,{status:i.Fl,error:i.Fl,_inner_current:(0,i.Fl)({name:"".concat(this.name,".inner_current")}),isLoading:i.Fl,isError:i.Fl,isReady:i.Fl},{name:this.name}),this._disposers.push(this._stop),this._disposers.push((0,i.hz)(this._atom,this._start)),this._disposers.push((0,i.pA)(this._atom,function(){n.options.keepAlive||n._stop()})),this._disposers.push(function(){n._status="ready",n._current=null,n._error=null})}return w()(e,[{key:"_mobxGlobal",get:function(){return(0,i.pu)()}},{key:"refresh",value:function(){this._refreshAtom.reportChanged()}},{key:"dispose",value:function(){var a=J()(this._disposers),n;try{for(a.s();!(n=a.n()).done;){var o=n.value;o()}}catch(l){a.e(l)}finally{a.f()}}},{key:"status",get:function(){return this._atom.reportObserved(),this._status}},{key:"_inner_current",get:function(){return this._atom.reportObserved(),this._current}},{key:"current",get:function(){if(this._mobxGlobal.inXFormAsyncValueFetcher){if(this._atom.reportObserved(),this._status==="loading")throw new e.StillLoading;if(this._status==="error")throw this._error;return this._current}return this._inner_current}},{key:"error",get:function(){return this._atom.reportObserved(),this._error}},{key:"isLoading",get:function(){return this.status==="loading"}},{key:"isReady",get:function(){return this.status==="ready"}},{key:"isError",get:function(){return this.status==="error"}}]),e}();d()(ce,"_globalCount",0),d()(ce,"SKIP","AsyncValue@SKIP"),d()(ce,"StillLoading",function(e){be()(a,e);var t=ot()(a);function a(){return S()(this,a),t.apply(this,arguments)}return w()(a)}(ut()(Error)));function Ae(e){return String(Number.parseInt(e))===e}function Me(e){return Ae(e)?"array":"object"}function fe(e){return String(e).split(".")}function $(e,t){return e!==void 0?e:t}function it(e,t,a){for(var n=Array.isArray(t)?t:fe(t),o=e,l=0;l<n.length;l+=1){if(!i.bi(o))return a;o=i.U2(o,n[l])}return o===void 0?a:o}function oe(e,t,a){for(var n=Array.isArray(t)?t:fe(t),o=n.length-1,l=e,u=0;u<o;u+=1){var c=n[u];if(i.U2(l,c)==null&&(Ae(n[u+1])?i.t8(l,c,[]):i.t8(l,c,{})),l=i.U2(l,c),!i.bi(l))return}i.bi(l)&&i.t8(l,n[o],a)}function dt(e){var t=function(o){return("0"+o.toString(16)).slice(-2)},a=new Uint8Array(e/2);return window.crypto.getRandomValues(a),Array.from(a,t).join("")}function st(e){var t=(0,F.useState)(function(){return"xform_".concat(dt(6),".")}),a=W()(t,1),n=a[0];return e!==void 0?e:n}function me(e){return typeof e=="number"?"".concat(e,"px"):e}function ct(e){return!e||Array.isArray(e)&&e.length===0}var mt=function(t){for(var a=[],n=0;n<t;n++)a.push(n);return a};function vt(e,t){var a={};return t.forEach(function(n){n in e&&(a[n]=e[n])}),a}function we(e,t){if(typeof e=="string")return function(){return(0,i.ZN)(t.getValue(e))};if(typeof e=="function")return e;if(e instanceof le)return function(){return e.value};if(e instanceof Ie)return function(){return(0,i.ZN)(e.values)};if(e instanceof ce)return function(){return e.current};if(Array.isArray(e))return function(){return e.map(function(a){if(typeof a=="string")return(0,i.ZN)(t.getValue(a));if(a instanceof ce)return a.current;if(a instanceof le)return a.value;if(a instanceof Ie)return(0,i.ZN)(a.values)})};console.warn("[xform] \u65E0\u6CD5\u8BC6\u522B\u7684 watch \u53C2\u6570",e)}var ft=[],pt={modelType:K.rootModel},Oe=function(){function e(t){S()(this,e),d()(this,"_nextId",1),d()(this,"prefix",void 0),this.prefix=t}return w()(e,[{key:"getNextId",value:function(){return"".concat(this.prefix,"_").concat(this._nextId++)}}]),e}(),Ie=function(){function e(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pt;S()(this,e),d()(this,"_modelIdGenerator",void 0),d()(this,"_fieldIdGenerator",void 0),d()(this,"id",void 0),d()(this,"state",{}),d()(this,"root",void 0),d()(this,"parent",void 0),d()(this,"name",void 0),d()(this,"_modelType",void 0),d()(this,"_values",void 0),d()(this,"_fieldMap",new Map),d()(this,"_valueShape","auto"),d()(this,"_subModels",void 0),d()(this,"_checkMap",new Map),d()(this,"_selfDeleted",!1),(a==null?void 0:a.modelType)===K.subModel?(this._modelType=K.subModel,this.parent=a.parent,this.root=this.parent.root,this.name=a.name,this.id=this.root._modelIdGenerator.getNextId()):(this._modelType=K.rootModel,this.parent=this,this.root=this,this.name="",this._modelIdGenerator=new Oe("Model"),this._fieldIdGenerator=new Oe("Field"),this.id=this._modelIdGenerator.getNextId(),this._values=$(t,{}),this._values==null&&console.warn("[xform] FormModel \u6839\u8282\u70B9\u7684\u521D\u59CB values \u4E0D\u80FD\u4E3A null")),(0,i.rC)(this,{_values:this._modelType===K.rootModel?i.LO:!1,values:i.Fl,state:i.LO,setValue:i.aD,name:i.LO.ref,path:i.Fl,_selfDeleted:i.LO.ref,isDeleted:i.Fl,_markDeleted:i.aD},{name:"".concat(this.id,"(").concat(this.name,")")})}return w()(e,[{key:"values",get:function(){return this._modelType===K.rootModel?this._values:this.parent.getValue(this.name)},set:function(a){if(this.isDeleted){console.warn("[xform] \u5BF9\u5DF2\u5220\u9664\u7684 Model \u8FDB\u884C\u8D4B\u503C\u5C06\u88AB\u5FFD\u7565\u3002\u8BF7\u4E0D\u8981\u5BF9\u5DF2\u5220\u9664\u7684 Model/Field \u8FDB\u884C\u64CD\u4F5C\u3002");return}this._modelType===K.rootModel?(a==null&&console.warn("[xform] FormModel \u6839\u8282\u70B9\u7684 values \u4E0D\u80FD\u8BBE\u7F6E\u4E3A null/undefined"),this._values=a):this.parent.setValue(this.name,a)}},{key:"path",get:function(){return this._modelType==K.rootModel?ft:[].concat(k()(this.parent.path),[this.name])}},{key:"getValue",value:function(a,n){return it(this.values,String(a),n)}},{key:"setValue",value:function(a,n){if(this.isDeleted){console.warn("[xform] \u5BF9\u5DF2\u5220\u9664\u7684 Model \u8FDB\u884C\u8D4B\u503C\u5C06\u88AB\u5FFD\u7565\u3002\u8BF7\u4E0D\u8981\u5BF9\u5DF2\u5220\u9664\u7684 Model/Field \u8FDB\u884C\u64CD\u4F5C\u3002");return}this._modelType===K.subModel&&this.values==null&&(this._updateValueShape(Me(fe(String(a))[0])),this.values=this._valueShape==="array"?[]:{}),oe(this.values,a,n)}},{key:"getSubModel",value:function(a){for(var n=Array.isArray(a)?a:fe(a),o=this,l=0;l<n.length-1;l++)o=o._getSubModelByShortName(n[l]);return o._getSubModelByShortName(n[n.length-1])}},{key:"getField",value:function(a){var n=Array.isArray(a)?a:fe(a);if(n.length>1){var o=n[n.length-1],l=this.getSubModel(n.slice(0,-1));return l.getField([o])}var u=n[0];this._updateValueShape(Me(u));var c=this._fieldMap.get(u);return c==null&&(c=new le({fieldType:O.normal,parent:this,name:u}),this._fieldMap.set(u,c)),c}},{key:"getTupleField",value:function(){this._updateValueShape("object");for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];var l="tuple(".concat(n.join(","),")"),u=this._fieldMap.get(l);return u==null&&(u=new le({fieldType:O.tuple,parent:this,name:l,tupleParts:n}),this._fieldMap.set(l,u)),u}},{key:"_asField",value:function(){if(this._modelType===K.rootModel)throw new Error("[xform] \u6839\u8282\u70B9\u4E0B\u4E0D\u652F\u6301\u4F7F\u7528 name=&\u3002\u6839\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784\u53EA\u80FD\u4E3A\u666E\u901A\u5BF9\u8C61\u3002");return this.parent.getField(this.name)}},{key:"_updateValueShape",value:function(a){this._valueShape==="auto"?(this._valueShape=a,this._subModels=a==="object"?{}:[]):ne()(this._valueShape===a,"[xform] FormModel \u7684\u7ED3\u6784\u9700\u8981\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4FDD\u6301\u4E00\u81F4\uFF0C\u4E00\u4E2A\u6570\u636E\u7D22\u5F15\u5BF9\u5E94\u7684\u7ED3\u6784\u4E0D\u80FD\u4ECE\u6570\u7EC4\u53D8\u4E3A\u5BF9\u8C61\uFF0C\u4E5F\u4E0D\u80FD\u4ECE\u5BF9\u8C61\u53D8\u4E3A\u6570\u7EC4")}},{key:"iterateModels",value:function(a){if(a(this),this._subModels!=null)for(var n=0,o=Object.values(this._subModels);n<o.length;n++){var l=o[n];l.iterateModels(a)}}},{key:"iterateFields",value:function(a){this.iterateModels(function(n){n._fieldMap.forEach(function(o){o._forkMap.forEach(a)})})}},{key:"iterateChecks",value:function(a){this.iterateModels(function(n){n._checkMap.forEach(a)})}},{key:"_getSubModelByShortName",value:function(a){this._updateValueShape(Me(a));var n=this._subModels[a];return n==null&&(n=new e(null,{modelType:K.subModel,parent:this,name:a}),this._subModels[a]=n),n}},{key:"getCheck",value:function(a){var n=this._checkMap.get(a);return n==null&&(n=new ht(this,a),this._checkMap.set(a,n)),n}},{key:"isDeleted",get:function(){return this._selfDeleted?!0:this._modelType===K.subModel&&this.parent.isDeleted}},{key:"_markDeleted",value:function(){ne()(this._modelType===K.subModel,"\u53EA\u6709 subModels \u624D\u5141\u8BB8\u88AB\u5220\u9664."),this.name="(deleted)",this._selfDeleted=!0}}]),e}(),ht=function(){function e(t,a){S()(this,e),d()(this,"isMounted",!1),d()(this,"config",null),d()(this,"parent",void 0),d()(this,"name",void 0),d()(this,"error",void 0),d()(this,"cancelValidation",null),d()(this,"validating",!1),this.parent=t,this.name=a,(0,i.rC)(this,{path:i.Fl,validate:i.aD,error:i.LO,cancelValidation:i.LO.ref,validating:i.LO.ref})}return w()(e,[{key:"path",get:function(){return this.parent.path.concat([this.name])}},{key:"_track",value:function(a){var n=this;if(this.isMounted){console.warn("[xform] check `".concat(this.path.join("."),"` \u5DF2\u5728\u89C6\u56FE\u4E2D\u88AB\u52A0\u8F7D\u3002"));return}return this.config=a,this.isMounted=!0,function(){n.config=null,n.isMounted=!1}}},{key:"validate",value:function(){var t=E()(R()().mark(function n(){var o,l=this,u,c,p,m,s;return R()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:if(this.isMounted){I.next=2;break}return I.abrupt("return");case 2:if(u=this.config.validate,c=!1,(o=this.cancelValidation)===null||o===void 0||o.call(this),this.validating=!0,this.cancelValidation=(0,i.aD)(function(){c=!0,l.cancelValidation=null,l.validating=!1}),p=(0,i.aD)(function(v){if(!c)return l.cancelValidation=null,l.validating=!1,l.error=v,v}),m=this.parent,s=u((0,i.ZN)(m.values),m),typeof(s==null?void 0:s.then)!="function"){I.next=14;break}return I.abrupt("return",Promise.resolve(s).then(p));case 14:return I.abrupt("return",p(s));case 15:case"end":return I.stop()}},n,this)}));function a(){return t.apply(this,arguments)}return a}()}]),e}(),le=function(){function e(t){var a=this,n;S()(this,e),d()(this,"config",null),d()(this,"isMounted",!1),d()(this,"parent",void 0),d()(this,"name",void 0),d()(this,"_forkName",void 0),d()(this,"_tupleParts",void 0),d()(this,"id",void 0),d()(this,"_forkMap",void 0),d()(this,"fieldType",void 0),d()(this,"_readonlyValue",void 0),d()(this,"state",{}),d()(this,"handleFocus",function(){}),d()(this,"handleBlur",function(){return a.validate("blur")}),d()(this,"handleChange",function(c){var p,m,s;c===void 0&&((p=a.config)===null||p===void 0?void 0:p.defaultValue)!==void 0&&(console.warn("[xform] xform \u4E2D\u6240\u6709\u7EC4\u4EF6\u5747\u4E3A\u53D7\u63A7\u7528\u6CD5\uFF0C\u4E0D\u652F\u6301 onChange(undefined)\uFF0C\u8BE5\u8C03\u7528\u5C06\u81EA\u52A8\u53D8\u4E3A onChange(null)"),c=null),a.value=c;for(var h=arguments.length,I=new Array(h>1?h-1:0),v=1;v<h;v++)I[v-1]=arguments[v];return(m=a.config)===null||m===void 0||(s=m.afterChange)===null||s===void 0||s.call.apply(s,[m,c].concat(I)),a.validate("change")}),d()(this,"clear",function(){var c,p;if(!a.isDeleted){var m=a.parent;if((c=(p=a.state).cancelValidation)===null||c===void 0||c.call(p),a.state.error=null,m.values!=null){if(a.fieldType===O.normal)delete m.values[a.name];else if(a.fieldType===O.tuple){var s=J()(a._tupleParts),h;try{for(s.s();!(h=s.n()).done;){var I=h.value;delete m.values[I]}}catch(v){s.e(v)}finally{s.f()}}}}}),this.fieldType=t.fieldType,this.parent=t.parent,this.name=t.name,this.id=this.parent.root._fieldIdGenerator.getNextId(),this._forkName=(n=t.forkName)!==null&&n!==void 0?n:e.ORIGINAL,t.fieldType===O.tuple?this._tupleParts=t.tupleParts:t.fieldType===O.readonly&&(this._readonlyValue=t.value);var o=this.name,l=this._forkName;if((0,i.rC)(this,{state:i.LO,value:i.Fl,path:i.Fl,validate:i.aD,handleBlur:i.aD,handleChange:i.aD,clear:i.aD,isDeleted:i.Fl},{name:"".concat(this.id,"(").concat(o).concat(l===e.ORIGINAL?"":"#"+l,")")}),l===e.ORIGINAL)this._forkMap=new Map;else{var u=this.parent.getField(o);this._forkMap=u._forkMap}this._forkMap.set(l,this)}return w()(e,[{key:"value",get:function(){var a=this;if(this.fieldType===O.normal)return this.parent.getValue(this.name);if(this.fieldType===O.tuple)return this._tupleParts.map(function(n){return a.parent.getValue(n)});if(this.fieldType===O.readonly)return this._readonlyValue},set:function(a){var n=this;if(this.isDeleted){console.warn("[xform] \u5BF9\u5DF2\u5220\u9664\u7684 Field \u8FDB\u884C\u8D4B\u503C\u5C06\u88AB\u5FFD\u7565\u3002\u8BF7\u4E0D\u8981\u5BF9\u5DF2\u5220\u9664\u7684 Model/Field \u8FDB\u884C\u64CD\u4F5C\u3002");return}this.fieldType===O.normal?this.parent.setValue(this.name,a):this.fieldType===O.tuple?this._tupleParts.forEach(function(o,l){n.parent.setValue(o,a==null?a:a[l])}):this.fieldType===O.readonly&&console.warn("[xform] \u5BF9\u53EA\u8BFB Field \u8FDB\u884C\u8D4B\u503C\u5C06\u88AB\u5FFD\u7565\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u4E3A FormItem \u8BBE\u7F6E\u4E86 props.name \u6216 props.field.")}},{key:"path",get:function(){return this.parent.path.concat([this.name])}},{key:"_track",value:function(a){var n=this;if(this.isMounted){console.warn("[xform] field `".concat(this.path.join("."),"` \u5DF2\u5728\u89C6\u56FE\u4E2D\u88AB\u52A0\u8F7D\uFF0C\u4F60\u9700\u8981 fork \u8BE5\u5B57\u6BB5\u6765\u8FDB\u884C\u591A\u6B21\u52A0\u8F7D."));return}return this.config=a,this.isMounted=!0,function(){n.config=null,n.isMounted=!1}}},{key:"getFork",value:function(a){if(this._forkMap.has(a))return this._forkMap.get(a);var n={parent:this.parent,name:this.name,forkName:a};if(this.fieldType===O.normal)return new e(f()({fieldType:O.normal},n));if(this.fieldType===O.tuple)return new e(f()({fieldType:O.tuple,tupleParts:this._tupleParts},n));if(this.fieldType===O.readonly)return new e(f()({fieldType:O.readonly,value:this._readonlyValue},n))}},{key:"validate",value:function(){var t=E()(R()().mark(function n(){var o,l,u=this,c,p,m,s,h,I,v,P,T,H,C,U,Z,Y,B,L,te=arguments;return R()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(c=te.length>0&&te[0]!==void 0?te[0]:"*",this.isMounted){N.next=3;break}return N.abrupt("return");case 3:if(p=this.config,m=p.validate,s=p.defaultValue,h=p.isEmpty,I=p.required,v=p.requiredMessage,P=v===void 0?"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879":v,T=p.validateOnMount,H=p.validateOnBlur,C=p.validateOnChange,U=c==="*"||H&&c==="blur"||T&&c==="mount"||C&&c==="change",U){N.next=7;break}return N.abrupt("return");case 7:if(Z=!1,(o=(l=this.state).cancelValidation)===null||o===void 0||o.call(l),this.state.validating=!0,this.state.cancelValidation=(0,i.aD)(function(){Z=!0,u.state.cancelValidation=null,u.state.validating=!1}),Y=(0,i.aD)(function(Pe){if(!Z)return u.state.cancelValidation=null,u.state.validating=!1,u.state.error=Pe,Pe}),B=(0,i.ZN)($(this.value,s)),!(I&&h(B))){N.next=15;break}return N.abrupt("return",Y(P));case 15:if(!m){N.next=24;break}if(L=m(B,this,c),typeof(L==null?void 0:L.then)!="function"){N.next=21;break}return N.abrupt("return",Promise.resolve(L).then(Y));case 21:return N.abrupt("return",Y(L));case 22:N.next=25;break;case 24:return N.abrupt("return",Y(null));case 25:case"end":return N.stop()}},n,this)}));function a(){return t.apply(this,arguments)}return a}()},{key:"isDeleted",get:function(){return this.parent.isDeleted}}],[{key:"getHtmlId",value:function(a,n){if(!(a==null||typeof a!="string")){var o=n.path.join("."),l=n._forkName!==e.ORIGINAL?"#".concat(n._forkName):"";return"".concat(a).concat(o).concat(l)}}}]),e}();d()(le,"ORIGINAL","original");var It=r(82187),Fe=r.n(It),ve=r(39453),xt=r(34377),X=r(78553),b=r(52676),gt=["children"],Ee=(0,F.createContext)({isPreview:!1,validateOnMount:!1,validateOnBlur:!0,validateOnChange:!0,writeDefaultValueToModel:!1,autoUnmount:!1,variant:"outlined"});Ee.displayName="FormEnvContext";var se=function(){return(0,F.useContext)(Ee)};function Re(e){var t=e.children,a=V()(e,gt),n=se();return(0,b.jsx)(Ee.Provider,{value:f()(f()({},n),a),children:t})}var ke=r(59519),Ce=r(41615),yt=r(73368),Pt=r(74305),bt=r(65669),Mt=r(96170),Ft=r(13832),Ne=r(95134),je=r(96246),Et=r(66220),Ct=r(52146),Dt=r(17888),D=r.n(Dt),Tt=r(50458),Vt=r.n(Tt),St=r(38870),At=r.n(St),wt=r(32154),Ot=r.n(wt),Rt=["value","onChange","picker"],kt=["value","onChange","format","picker"],Nt=["value","onChange","format"],jt=["value","onChange","format"],Bt=["onChange","returnType"];D().extend(Ot()),D().extend(At()),D().extend(Vt()),D().__patchedForAntd__||(D().__patchedForAntd__=!0,D().prototype.weekday||(D().prototype.weekday=function(){return this.day()}),D().prototype.localeData||(D().prototype.localeData=function(){return{firstDayOfWeek:function(){return 1},weekdaysShort:function(){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},monthsShort:function(){return"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")}}}));function Lt(e){return!e&&e!==0||Array.isArray(e)&&e.length===0}var Be="HH:mm:ss",Le={date:"YYYY-MM-DD",week:"gggg-[W]W",month:"YYYY-MM",quarter:"YYYY-[Q]Q",year:"YYYY"},Ye=function(t){return t==null||t===""||Array.isArray(t)&&t.length===2&&!t[0]&&!t[1]},Yt=function(t){return function(a){var n=function(l){var u;(u=a.onChange)===null||u===void 0||u.call(a,l.target.value)};return(0,b.jsx)(t,f()(f()({},a),{},{onChange:n}))}},Wt=function(t){return function(a){var n=a.value,o=a.onChange,l=a.picker,u=V()(a,Rt),c=(0,F.useMemo)(function(){if(n)if(l==="week"){var m=n.split("-"),s=W()(m,2),h=s[0],I=s[1],v=parseInt(I,10);if(h&&!isNaN(v))return D()().year(parseInt(h,10)).week(v).startOf("week")}else return l==="month"?D()(n,"YYYY-MM"):l==="quarter"?D()(n,"YYYY-[Q]Q"):l==="year"?D()(n,"YYYY"):D()(n)},[n,l]),p=(0,F.useCallback)(function(m,s){if(!m||!m.isValid()){o==null||o(null);return}var h;if(l==="week"){var I=m.year(),v=m.week();h="".concat(I,"-").concat(v)}else l==="month"?h=m.format("YYYY-MM"):l==="quarter"?h=m.format("YYYY-Q"):l==="year"?h=m.format("YYYY"):h=m.format("YYYY-MM-DD");o==null||o(h)},[o,l]);return(0,b.jsx)(t,f()(f()({},u),{},{picker:l,value:c,onChange:p}))}},$t=function(t){return function(a){var n,o=a.value,l=a.onChange,u=a.format,c=a.picker,p=c===void 0?"date":c,m=V()(a,kt),s=u||Le[p]||Le.date,h=(0,F.useMemo)(function(){if(Ye(o)||!Array.isArray(o))return null;var v=W()(o,2),P=v[0],T=v[1];if(Ye([P,T]))return null;var H=function(L,te){if(!L)return null;switch(te){case"week":{var G=L.match(/^(\d{4})-?W?(\d+)$/i);if(!G)return null;var N=parseInt(G[1],10),Pe=parseInt(G[2],10);return D()().year(N).week(Pe).startOf("week")}case"month":return D()(L,"YYYY-MM",!0);case"quarter":{var Ve=L.match(/^(\d{4})-?Q?([1-4])$/i);if(!Ve)return null;var ya=parseInt(Ve[1],10),Pa=parseInt(Ve[2],10),ba=(Pa-1)*3;return D()("".concat(ya,"-").concat(String(ba+1).padStart(2,"0"),"-01"),"YYYY-MM-DD",!0)}case"year":return D()(L,"YYYY",!0);case"date":default:return D()(L,s,!0)}},C=H(P,p),U=H(T,p),Z=C&&C.isValid(),Y=U&&U.isValid();return!Z&&!Y?null:[Z?C:null,Y?U:null]},[o,p,s]),I=(0,F.useCallback)(function(v,P){if(!v||!v[0]&&!v[1]){l==null||l(null);return}var T=W()(v,2),H=T[0],C=T[1],U=function(B,L){if(!B||!B.isValid())return"";switch(L){case"week":return"".concat(B.year(),"-W").concat(B.week());case"month":return B.format("YYYY-MM");case"quarter":{var te=B.year(),G=Math.floor(B.month()/3)+1;return"".concat(te,"-Q").concat(G)}case"year":return B.format("YYYY");case"date":default:return B.format(s)}},Z=[U(H,p),U(C,p)];!Z[0]&&!Z[1]?l==null||l(null):l==null||l(Z)},[l,p,s]);return(0,b.jsx)(t,f()(f()({},m),{},{picker:p,format:s,value:h,onChange:I,allowClear:(n=m.allowClear)!==null&&n!==void 0?n:!0}))}},Ut=function(t){return function(a){var n=a.value,o=a.onChange,l=a.format,u=l===void 0?Be:l,c=V()(a,Nt),p=(0,F.useMemo)(function(){if(n){var s=String(n).trim();if(s){var h=D()(s,u,!0);return h.isValid()?h:void 0}}},[n,u]),m=(0,F.useCallback)(function(s,h){if(!s||!s.isValid()){o==null||o(null);return}var I=s.format(u);o==null||o(I)},[o,u]);return(0,b.jsx)(t,f()(f()({},c),{},{format:u,value:p,onChange:m}))}},_t=function(t){return function(a){var n=a.value,o=a.onChange,l=a.format,u=l===void 0?Be:l,c=V()(a,jt),p=(0,F.useMemo)(function(){if(!(!n||!Array.isArray(n))){var s=W()(n,2),h=s[0],I=s[1];if(!(!h&&!I)){var v=h?D()(h,u,!0):null,P=I?D()(I,u,!0):null,T=v&&v.isValid(),H=P&&P.isValid();if(!(!T&&!H))return[T?v:null,H?P:null]}}},[n,u]),m=(0,F.useCallback)(function(s,h){if(!s){o==null||o(null);return}var I=W()(s,2),v=I[0],P=I[1],T=[v!=null&&v.isValid()?v.format(u):"",P!=null&&P.isValid()?P.format(u):""];!T[0]&&!T[1]?o==null||o(null):o==null||o(T)},[o,u]);return(0,b.jsx)(t,f()(f()({},c),{},{format:u,value:p,onChange:m}))}},Kt=function(t){return function(a){var n=F.forwardRef(function(o,l){var u=f()(f()({},t),o);return(0,b.jsx)(a,f()({ref:l},u))});return n.displayName="WithInjectedProps(".concat(a.displayName||a.name,")"),n}},Gt=function(t){return function(a){var n=a.onChange,o=a.returnType,l=o===void 0?"hex":o,u=V()(a,Bt),c=function(m){if(n){var s;switch(l){case"hex":s=m.toHexString();break;case"rgb":s=m.toRgbString();break;case"hsv":var h=m.toHsb();s="hsv(".concat(h.h,", ").concat(h.s*100,"%, ").concat(h.b*100,"%)");break;default:s=m.toHexString()}n(s)}};return(0,b.jsx)(t,f()(f()({},u),{},{onChange:c}))}},ue=function(t){return t!=null&&t!==""?"".concat(t):"--"},We=function(t){return t?D()(t).format("YYYY-MM-DD"):"--"},$e=function(t){return!Array.isArray(t)||!t[0]||!t[1]?"--":"".concat(D()(t[0]).format("YYYY-MM-DD")," ~ ").concat(D()(t[1]).format("YYYY-MM-DD"))},Ue=function(t){return t?D()(t).format("HH:mm:ss"):"--"},_e=function(t){return!Array.isArray(t)||!t[0]||!t[1]?"--":"".concat(D()(t[0]).format("HH:mm")," ~ ").concat(D()(t[1]).format("HH:mm"))},De=function(t){return Array.isArray(t)&&t.length>0?t.join(", "):"--"},Ke=function(t){return typeof t=="boolean"?t?"\u662F":"\u5426":"--"},Ge=function(t){return typeof t=="number"?"\u2605".repeat(t)+"\u2606".repeat(5-t):"--"},ze=function(t){return t?(0,b.jsx)("span",{style:{display:"inline-block",width:16,height:16,border:"1px solid #ddd",backgroundColor:t,borderRadius:3}}):"--"},Ma={useValueToPreview:ue,useDatePreview:We,useDateRangePreview:$e,useTimePreview:Ue,useTimeRangePreview:_e,useMultiplePreview:De,useBooleanPreview:Ke,useRatePreview:Ge,useColorPreview:ze},He={input:ke.Z,textArea:ke.Z.TextArea,select:Ce.default,singleSelect:Ce.default,multiSelect:Ce.default,radio:yt.ZP.Group,checkbox:Pt.Z.Group,inputNumber:bt.Z,slider:Mt.Z,switch:Ft.Z,datePicker:Ne.default,dateRangePicker:Ne.default.RangePicker,timePicker:je.Z,timeRangePicker:je.Z.RangePicker,rate:Et.Z,colorPicker:Ct.Z},zt={input:"",textArea:"",select:"",singleSelect:"",multiSelect:[],radio:"",checkbox:[],inputNumber:null,slider:null,switch:!1,datePicker:null,dateRangePicker:null,timePicker:null,timeRangePicker:null,rate:0,colorPicker:""},Ht={input:{hocs:["valueChange"],renderPreview:ue,hasIntrinsicWidth:!1},textArea:{hocs:["valueChange"],renderPreview:ue,hasIntrinsicWidth:!0},select:{hocs:[],renderPreview:ue,hasIntrinsicWidth:!0},singleSelect:{hocs:[],renderPreview:ue,hasIntrinsicWidth:!0},multiSelect:{hocs:["multiSelect"],renderPreview:De,hasIntrinsicWidth:!0},radio:{hocs:["valueChange"],renderPreview:ue,hasIntrinsicWidth:!1},checkbox:{hocs:[],renderPreview:De,hasIntrinsicWidth:!1},inputNumber:{hocs:["valueChange"],renderPreview:ue,hasIntrinsicWidth:!1},slider:{hocs:["valueChange"],renderPreview:ue,hasIntrinsicWidth:!1},switch:{hocs:["valueChange"],renderPreview:Ke,hasIntrinsicWidth:!1},datePicker:{hocs:["dayjsDate"],renderPreview:We,hasIntrinsicWidth:!0},dateRangePicker:{hocs:["dayjsDateRange"],renderPreview:$e,hasIntrinsicWidth:!0},timePicker:{hocs:["dayjsTime"],renderPreview:Ue,hasIntrinsicWidth:!0},timeRangePicker:{hocs:["dayjsTimeRange"],renderPreview:_e,hasIntrinsicWidth:!0},rate:{hocs:[],renderPreview:Ge,hasIntrinsicWidth:!1},colorPicker:{hocs:["colorPicker"],renderPreview:ze,hasIntrinsicWidth:!1}},Zt=Object.keys(He).map(function(e){var t=He[e],a=Ht[e];return a.hocs.forEach(function(n){switch(n){case"valueChange":t=Yt(t);break;case"dayjsDate":t=Wt(t);break;case"dayjsDateRange":t=$t(t);break;case"dayjsTime":t=Ut(t);break;case"dayjsTimeRange":t=_t(t);break;case"multiSelect":t=Kt({mode:"multiple"})(t);break;case"colorPicker":t=Gt(t);break}}),{name:e,component:t,defaultValue:zt[e],isEmpty:Lt,hasIntrinsicWidth:a.hasIntrinsicWidth,renderPreview:function(o){return a.renderPreview(o.value)}}}),Xt=["defaultValue","isEmpty","renderPreview","componentProps","name","field"],Jt=["$Component"],Qt=["use","component"];function qt(e){var t,a,n,o=(t=e.render)!==null&&t!==void 0?t:function(l){return F.createElement(e.component,l)};return{name:e.name,hidden:e.hidden,withField:!!e.withField,statusPropName:$(e.statusPropName,"state"),valuePropName:$(e.valuePropName,"value"),hasIntrinsicWidth:e.hasIntrinsicWidth!==!1,defaultValue:Object.keys(e).includes("defaultValue")?e.defaultValue:null,isEmpty:(a=e.isEmpty)!==null&&a!==void 0?a:ct,render:o,renderPreview:(n=e.renderPreview)!==null&&n!==void 0?n:o}}function ea(e,t,a,n){var o;return e!=null?o=e:a==="&"?o=t._asField():a!=null?o=t.getField(a):o=new le({fieldType:O.readonly,value:n,name:"(readonly)",forkName:le.ORIGINAL,parent:t}),o}function Ze(e){var t=e.htmlId,a=e.label,n=a===void 0?"":a,o=e.help,l=e.tip,u=e.asterisk,c=e.error,p=e.children,m=e.className,s=e.style,h=e.labelWidth,I=e.controlWidth,v=e.rightNode,P=e.labelStyle,T=e.controlStyle;return(0,b.jsxs)("div",{"data-xform-id":t,className:Fe()("form-item",m),style:f()({"--label-width":me(h),"--control-width":me(I)},s),children:[n==null&&l==null?null:(0,b.jsxs)("label",{className:"form-item-label",htmlFor:t,style:P,children:[u&&(0,b.jsx)("span",{className:"required-indicator"}),n&&(0,b.jsx)("span",{className:"form-item-label-text",children:n})]}),(0,b.jsxs)("div",{className:"form-item-control",style:T,children:[p,o&&(0,b.jsx)("div",{className:"help",children:o}),c&&(0,b.jsx)("div",{className:"error-message",children:c})]}),v]})}function pe(e){var t=qt(e);function a(n){var o,l=n.defaultValue,u=n.isEmpty,c=u===void 0?t.isEmpty:u,p=n.renderPreview,m=p===void 0?t.renderPreview:p,s=n.componentProps,h=n.name,I=n.field,v=V()(n,Xt),P=se(),T=(0,X.t)(),H=P.variant,C=ea(I,T,h,v.value),U=$(v.isPreview,P.isPreview),Z=$(v.error,C.state.error),Y=$(l,t.defaultValue),B=(0,i.ZN)($(C.value,Y)),L=le.getHtmlId(P.htmlIdPrefix,C),te=f()(f()(f()(f()({id:L,variant:H},U?{isPreview:!0}:null),vt(v,["dataSource","readOnly","disabled","options"])),s),{},d()(d()(d()(d()(d()({},t.statusPropName,$(s==null?void 0:s[t.statusPropName],$(v[t.statusPropName],Z?"error":void 0))),t.valuePropName,$(v[t.valuePropName],B)),"onChange",$(v.onChange,C.handleChange)),"onFocus",$(v.onFocus,C.handleFocus)),"onBlur",$(v.onBlur,C.handleBlur)));t.withField&&(te.field=C);var G=f()({htmlId:L,valueProp:v[t.valuePropName],defaultValue:Y,defaultValueProp:l,isEmpty:c,validateOnChange:P.validateOnChange,validateOnBlur:P.validateOnBlur,validateOnMount:P.validateOnMount,writeDefaultValueToModel:P.writeDefaultValueToModel,autoUnmount:P.autoUnmount},v);return(0,F.useLayoutEffect)(function(){return C._track(G)}),(0,F.useLayoutEffect)(function(){return G.writeDefaultValueToModel==="force"?(0,i.U5)(function(){return C.value},function(){C.value===void 0&&G.defaultValueProp!==void 0&&(C.value=G.defaultValueProp)},{fireImmediately:!0}):(G.writeDefaultValueToModel&&C.value===void 0&&G.defaultValueProp!==void 0&&(0,i.z)(function(){C.value=G.defaultValueProp}),function(){G.autoUnmount&&C.clear()})},[]),(0,F.useEffect)(function(){if(G.validateOnMount){C.validate("mount");var N=C.state.cancelValidation;return function(){N==null||N()}}},[]),t.hidden&&v.renderHiddenFormItemView===!1?null:(0,b.jsx)(Ze,{htmlId:L,label:v.label,help:v.help,asterisk:(o=v.asterisk)!==null&&o!==void 0?o:v.required,error:Z,tip:v.tip,style:v.style,className:Fe()(v.className,{"form-item-hidden":t.hidden,"form-item-preview":U,"auto-control-width":t.hasIntrinsicWidth}),labelWidth:v.labelWidth,labelStyle:v.labelStyle,controlWidth:v.controlWidth,controlStyle:v.controlStyle,rightNode:v.rightNode,children:U?m(te):t.render(te)})}return a.displayName="FormItem__".concat(t.name),(0,ve.Pi)(a)}var Xe={},xe=J()(Zt),Je;try{for(xe.s();!(Je=xe.n()).done;){var Qe=Je.value,ta=pe(Qe);Xe[Qe.name]=ta}}catch(e){xe.e(e)}finally{xe.f()}var aa=pe({name:"anonymous",render:function(t){var a=t.$Component,n=V()(t,Jt);return(0,b.jsx)(a,f()({},n))}}),qe=pe({name:"notFound",isEmpty:function(){return!1},render:function(t){var a=t.$Component;return(0,b.jsxs)("div",{style:{border:"1px dashed red",fontSize:14,padding:4,color:"red"},children:[(0,b.jsxs)("code",{children:["<FormItem component='",a,"' />"]})," ","\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7EC4\u4EF6\uFF0C\u8BF7\u68C0\u67E5\u7EC4\u4EF6\u540D\u79F0\u662F\u5426\u62FC\u5199\u6B63\u786E"]})}}),na=pe({name:"hidden",hidden:!0,hasIntrinsicWidth:!1,defaultValue:void 0,isEmpty:function(){return!1},render:function(t){var a=t.id,n=t.value;return(0,b.jsx)("input",{type:"hidden",value:(0,xt.Z)(n),id:a})}});function ra(e){var t=e.use,a=e.component,n=V()(e,Qt),o=se(),l=o.variant;if(t===!1)return null;if(a==null)return(0,b.jsx)(qe,f()(f()({},n),{},{componentProps:{$Component:String(a)}}));if(typeof a=="string"){if(a==="hidden")return(0,b.jsx)(na,f()({},n));var u=Xe[a];return u==null?(0,b.jsx)(qe,f()(f()({},n),{},{componentProps:{$Component:a}})):F.createElement(u,f()(f()({},n),{},{componentProps:f()(f()({},n.componentProps),{},{variant:l})}))}else return(0,b.jsx)(aa,f()(f()({},n),{},{componentProps:f()(f()({},n.componentProps),{},{variant:l,$Component:a})}))}function he(e){ne()(e._valueShape==="auto"||e._valueShape==="array",'arrayModel._valueShape should be "auto" or "array"')}function ge(e){e._subModels.forEach(function(t,a){t.name=String(a)})}function et(e,t,a){if(e!=null){var n=e.splice(t,1),o=W()(n,1),l=o[0];e.splice(a,0,l)}}function ye(e,t,a){if(e!=null){var n=e[t];e[t]=e[a],e[a]=n}}var tt={append:(0,i.aD)(function(e,t){e.values==null&&(e.values=[]);var a=$(typeof t=="function"?t(e):t,{});e.values.push(a)}),delete:(0,i.aD)(function(e,t){if(he(e),Array.isArray(e.values)&&e.values.splice(t,1),Array.isArray(e._subModels)){var a=e._subModels.splice(t,1),n=W()(a,1),o=n[0];o._markDeleted(),ge(e)}}),moveUp:(0,i.aD)(function(e,t){he(e),t!==0&&(Array.isArray(e.values)&&ye(e.values,t,t-1),Array.isArray(e._subModels)&&(ye(e._subModels,t,t-1),ge(e)))}),moveDown:(0,i.aD)(function(e,t){if(he(e),Array.isArray(e.values)){if(t===e.values.length-1)return;ye(e.values,t,t+1)}Array.isArray(e._subModels)&&(ye(e._subModels,t,t+1),ge(e))}),clear:(0,i.aD)(function(e){he(e),!(e.values==null||e.values.length===0)&&(e.values=[],Array.isArray(e)&&(e._subModels.forEach(function(t){t._markDeleted()}),e._subModels.length=0))}),move:(0,i.aD)(function(e,t,a){he(e),Array.isArray(e.values)&&et(e.values,t,a),Array.isArray(e._subModels)&&(et(e._subModels,t,a),ge(e))}),renderArrayItem:function(t,a,n){var o=t.getSubModel(a);return(0,b.jsx)(Q.ModelProvider,{value:o,children:n(a,o)},o.id)},getKey:function(t,a){return t.getSubModel(a).id}},oa=function(t){var a=t.arrayModel,n=t.itemContent,o=t.itemCount;return mt(o).map(function(l){return tt.renderArrayItem(a,l,n)})},la=(0,ve.Pi)(function(e){var t,a,n=e.name,o=e.children,l=e.layout,u=e.arrayModel,c=e.use,p=(0,X.t)();if(c===!1)return null;var m=u!=null?u:n==="&"?p:p.getSubModel(n),s=(t=(a=m.values)===null||a===void 0?void 0:a.length)!==null&&t!==void 0?t:0,h=typeof o=="function"?o:function(){return o};return(0,b.jsx)(X.k,{value:m,children:(l!=null?l:oa)({arrayModel:m,itemCount:s,itemContent:h})})}),ua=(0,ve.Pi)(function(t){var a=t.name,n=t.check,o=t.validate,l=t.watch,u=l===void 0?[]:l,c=t.validateOnMount,p=t.renderError,m=t.deps,s=m===void 0?[]:m,h=se(),I=(0,X.t)(),v=$(n,I.getCheck(a)),P={validateOnMount:c!=null?c:h.validateOnMount,validate:o};return(0,F.useLayoutEffect)(function(){return v._track(P)}),(0,F.useEffect)(function(){return(0,i.U5)(we(u,I),function(){v.validate()},{fireImmediately:P.validateOnMount})},[v,I].concat(k()(s))),p===!0?v.error:typeof p=="function"?p(v.error):null}),ie={clearError:(0,i.aD)(function(e){e.iterateFields(function(t){t.state.error=null}),e.iterateChecks(function(t){t.error=null})}),scrollToFirstError:function(t){var a=J()(t),n;try{for(a.s();!(n=a.n()).done;){var o,l=n.value;if((o=l.config)!==null&&o!==void 0&&o.htmlId){var u=document.querySelector('*[data-xform-id="'.concat(l.config.htmlId,'"]'));if(u){typeof u.scrollIntoViewIfNeeded=="function"?u.scrollIntoViewIfNeeded():u.scrollIntoView({block:"nearest"});return}}}}catch(c){a.e(c)}finally{a.f()}},animateErrorFields:function(t){var a=J()(t),n;try{for(a.s();!(n=a.n()).done;){var o,l=n.value;if((o=l.config)!==null&&o!==void 0&&o.htmlId){var u=document.querySelector('*[data-xform-id="'.concat(l.config.htmlId,'"]'));u&&u.animate([{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],{duration:750})}}}catch(c){a.e(c)}finally{a.f()}},validateAll:(0,i.aD)(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"*",a=!1,n=(0,i.LO)(e._valueShape==="array"?[]:{}),o=[],l=[];return e.iterateFields(function(u){u.isMounted&&l.push(u.validate(t).then((0,i.aD)(function(c){c&&(a=!0,oe(n,u.path,c),o.push(u))})))}),e.iterateChecks(function(u){l.push(u.validate().then((0,i.aD)(function(c){c&&(a=!0,oe(n,u.path,c))})))}),Promise.all(l).then(function(){return{hasError:a,errors:(0,i.ZN)(n),errorFields:o}})}),submit:(0,i.aD)(function(){var e=E()(R()().mark(function t(a){var n,o,l,u,c,p,m,s,h,I,v,P,T,H,C,U=arguments;return R()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return n=U.length>1&&U[1]!==void 0?U[1]:{},o=n.onError,l=n.onSubmit,u=n.valueFilter,c=u===void 0?"mounted":u,p=n.mergeDefaultValue,m=p===void 0?!0:p,s=n.animateErrorFields,h=s===void 0?!1:s,I=n.scrollToFirstError,v=I===void 0?!0:I,Y.next=4,ie.validateAll(a);case 4:P=Y.sent,T=P.hasError,H=P.errors,C=P.errorFields,T?(v&&ie.scrollToFirstError(C),h&&ie.animateErrorFields(C),o==null||o(H,a)):typeof l=="function"&&(0,i.z)(function(){var B=(0,i.LO)(c==="all"?(0,i.ZN)(a.values):a._valueShape==="array"?[]:{});Te(B,a,{mergeDefaultValue:m}),l((0,i.ZN)(B),a)});case 9:case"end":return Y.stop()}},t)}));return function(t){return e.apply(this,arguments)}}()),reset:(0,i.aD)(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.onReset;e.values={},ie.clearError(e),a==null||a(e)}),acceptValuesFormView:(0,i.aD)(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Te(e.values,e,t)}),mergeValuesFromViewToView:Te};function Te(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.mergeDefaultValue,o=n===void 0?!0:n;t.iterateFields(function(l){if(l.isMounted){if(l.fieldType===O.normal)if(l.config.valueProp!==void 0)oe(e,l.path,l.config.valueProp);else if(l.value!==void 0)oe(e,l.path,l.value);else{var u=l.config.defaultValueProp;o&&u!==void 0&&oe(e,l.path,u)}else if(l.fieldType===O.tuple){var c=l.parent,p=l.value.some(function(s){return s!==void 0});if(p)l._tupleParts.map(function(s,h){oe(e,[].concat(k()(c.path),[s]),l.value[h])});else{var m=l.config.defaultValueProp;o&&m!==void 0&&l._tupleParts.map(function(s,h){oe(e,[].concat(k()(c.path),[s]),m==null?void 0:m[h])})}}}})}var ia=["ButtonComponent","children"];function da(e){var t=e.ButtonComponent,a=e.children,n=a===void 0?"\u63D0\u4EA4":a,o=V()(e,ia),l=(0,X.t)(),u=se();return(0,b.jsx)(t,f()(f()({},o),{},{onClick:(0,i.aD)(function(){return ie.reset(l,u)}),children:n},o))}var sa=r(53649),ca=r.n(sa),ma=r(52413),at,va=ma.ZP.div(at||(at=ca()([`
  --label-width: auto;
  --control-width: auto;
  --form-item-gap: 0;
  --form-item-label-top-position: 0;

  .form-item {
    margin-bottom: var(--form-item-gap);
    line-height: 1.5;

    &.auto-control-width {
      --control-width: auto;
    }
  }

  .form-item-label {
    display: block;
  }

  .form-item-label-text {
    color: #666;
  }

  .form-item.minimal {
    margin-bottom: 0;

    > .error-message,
    > .form-item-label {
      display: none;
    }
  }

  &.horizontal {
    .form-item {
      display: flex;
      align-items: flex-start;
    }

    .form-item-label {
      flex: 0 0 var(--label-width);
      padding-top: var(--form-item-label-top-position);
      padding-right: 12px;
      text-align: right;
    }
  }

  .form-item.form-item-hidden {
    display: none;
  }

  &.vertical {
    .form-item-label {
      font-size: 12px;
      margin-bottom: 4px;
    }
  }

  &.inline-error .error-message {
    position: absolute;
    right: 0;
    top: -24px;
  }

  .form-item-preview {
    > .form-item-label {
      padding-top: 0;
    }
  }

  .required-indicator {
    margin-right: 4px;
    color: #eb4141;
  }

  .required-indicator::before {
    content: '*';
  }

  .error-message {
    margin-top: 2px;
    color: #eb4141;
  }

  .tip {
    margin-left: 4px;
    color: #999;
  }

  .help {
    color: #999999;
    margin-top: 4px;
  }

  .form-item-control {
    position: relative;
    width: var(--control-width);

    > .next-input,
    > .next-select {
      width: 100%;
    }

    > .next-range {
      margin: 8px 0;
    }

    > .next-rating {
      margin-top: 4px;
      margin-bottom: 2px;
    }

    > .next-checkbox-group,
    > .next-radio-group,
    > .next-checkbox-wrapper {
      display: inline-block;
      line-height: 18px;
    }
  }

  &.horizontal .form-item-control {
    > .next-checkbox-group,
    > .next-radio-group,
    > .next-checkbox-wrapper {
      padding-top: 8px;
    }
  }
`])));function nt(e){var t=e.children,a=e.className,n=e.style,o=e.labelPosition,l=o===void 0?"left":o,u=e.labelWidth,c=u===void 0?l==="left"?120:"auto":u,p=e.formItemGap,m=p===void 0?l==="left"?12:16:p,s=e.controlWidth,h=s===void 0?320:s,I=e.defaultLabelTopPosition,v=I===void 0?4:I,P=e.inlineError,T=e.containerProps;return(0,b.jsx)(va,f()(f()({style:f()({"--label-width":me(c),"--control-width":me(h),"--form-item-gap":me(m),"--form-item-label-top-position":me(v)},n),className:Fe()("xform-container",{horizontal:l==="left",vertical:l==="top","inline-error":l==="top"&&P},a)},T),{},{children:t}))}var fa=["ButtonComponent","children"];function pa(e){var t=e.ButtonComponent,a=e.children,n=a===void 0?"\u63D0\u4EA4":a,o=V()(e,fa),l=(0,X.t)(),u=se(),c=u.onSubmit,p=u.onError,m={onSubmit:c,onError:p};return t?(0,b.jsx)(t,f()(f()({},o),{},{onClick:function(){return ie.submit(l,m)},children:n},o)):(0,b.jsx)("button",f()(f()({},o),{},{onClick:function(){return ie.submit(l,m)},children:n},o))}var ha=(0,ve.Pi)(function(t){var a=t.watch,n=t.effect,o=t.fireImmediately,l=t.deps,u=l===void 0?[]:l,c=t.equals,p=(0,X.t)(),m=(0,F.useRef)(n);return(0,F.useEffect)(function(){m.current=n}),(0,F.useEffect)(function(){return(0,i.U5)(we(a,p),function(s,h){m.current(s,{model:p,prev:h,next:s})},{fireImmediately:o,equals:c})},u),null}),Ia=(0,ve.Pi)(function(e){var t=e.name,a=e.children,n=e.use,o=(0,X.t)();if(n===!1)return null;var l=t==="&"?o:o.getSubModel(t);return(0,b.jsx)(X.k,{value:l,children:a})}),xa=(0,ve.Pi)(function(e){var t=e.children,a=(0,X.t)();return t(a)}),ga=["model","defaultValue","children","className","style","layout","containerProps","htmlIdPrefix","variant"];function Q(e){var t=e.model,a=e.defaultValue,n=e.children,o=e.className,l=e.style,u=e.layout,c=e.containerProps,p=e.htmlIdPrefix,m=e.variant,s=V()(e,ga),h=(0,F.useState)(function(){return new Ie(a)}),I=W()(h,1),v=I[0],P=$(t,v),T=st(p);return(0,b.jsx)(Re,f()(f()({htmlIdPrefix:T,variant:m},s),{},{children:(0,b.jsx)(X.k,{value:P,children:(0,b.jsx)(nt,f()(f()({style:l,className:o,containerProps:c},u),{},{children:n}))})}))}Q.Array=la,Q.Check=ua,Q.Effect=ha,Q.Object=Ia,Q.Submit=pa,Q.Layout=nt,Q.ItemView=Ze,Q.ModelProvider=X.k,Q.ModelConsumer=xa,Q.FormReset=da},83534:function(z,x,r){r.r(x),r.d(x,{texts:function(){return M}});const M=[{value:`
  `,paraId:0},{value:`
  `,paraId:0},{value:`
    `,paraId:0},{value:`
      `,paraId:0},{value:`
      Your browser does not support the video tag.
    `,paraId:0},{value:`
  `,paraId:0},{value:`
  `,paraId:0},{value:`
  `,paraId:0},{value:`
    `,paraId:0},{value:`
      `,paraId:0},{value:`
        `,paraId:0},{value:`
      `,paraId:0},{value:`
      `,paraId:0},{value:"react-antd-xform",paraId:0},{value:`
      `,paraId:0},{value:"\u57FA\u4E8E React + Ant Design \u7684\u8868\u5355\u89E3\u51B3\u65B9\u6848",paraId:1},{value:`
      `,paraId:0},{value:`
        `,paraId:0},{value:"\u5FEB\u901F\u5F00\u59CB",paraId:2},{value:`
        `,paraId:0},{value:"GitHub",paraId:0},{value:`
      `,paraId:0},{value:`
    `,paraId:0},{value:`
  `,paraId:0},{value:`
  `,paraId:0},{value:`
  `,paraId:0},{value:`
    `,paraId:0},{value:`
      `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:"\u96C6\u6210 Ant Design\uFF0C\u65E0\u9700\u590D\u6742\u914D\u7F6E\u5373\u53EF\u4F7F\u7528\u3002",paraId:3,tocIndex:0},{value:`
      `,paraId:0},{value:`
      `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:"\u652F\u6301\u52A8\u6001\u8868\u5355\u7ED3\u6784\u5B9A\u4E49\uFF0C\u8F7B\u677E\u5B9E\u73B0\u914D\u7F6E\u5316\u5F00\u53D1\u3002",paraId:4,tocIndex:1},{value:`
      `,paraId:0},{value:`
      `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:"\u652F\u6301\u81EA\u5B9A\u4E49\u63A7\u4EF6\u3001\u6821\u9A8C\u89C4\u5219\u548C\u63D2\u4EF6\u4F53\u7CFB\u3002",paraId:5,tocIndex:2},{value:`
      `,paraId:0},{value:`
    `,paraId:0},{value:`
  `,paraId:0}]},75254:function(z,x,r){r.r(x),r.d(x,{texts:function(){return M}});const M=[{value:"react-antd-xform",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u57FA\u4E8E MobX \u548C Ant Design \u7684\u52A8\u6001\u8868\u5355\u89E3\u51B3\u65B9\u6848\uFF0C\u63D0\u4F9B JSON Schema \u9A71\u52A8\u3001\u8868\u5355\u8054\u52A8\u548C\u590D\u6742\u6821\u9A8C\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u9009\u62E9\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668\u8FDB\u884C\u5B89\u88C5\uFF1A",paraId:1,tocIndex:1}]},93435:function(z,x,r){r.r(x),r.d(x,{texts:function(){return M}});const M=[{value:"react-antd-xform",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u57FA\u4E8E MobX \u548C Ant Design \u7684\u52A8\u6001\u8868\u5355\u89E3\u51B3\u65B9\u6848\uFF0C\u63D0\u4F9B JSON Schema \u9A71\u52A8\u3001\u8868\u5355\u8054\u52A8\u548C\u590D\u6742\u6821\u9A8C\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u4F60\u9700\u8981\u77E5\u9053\u5982\u4F55\u4F7F\u7528",paraId:0,tocIndex:0},{value:"mobx",paraId:0,tocIndex:0},{value:"\u8FDB\u884C\u6570\u636E\u7BA1\u7406\u3002",paraId:0,tocIndex:0},{value:"\u65E0\u7F1D\u5BF9\u63A5 mobx,\u8868\u5355\u5185\u6838\u5B8C\u5168\u91C7\u7528 mobx \u63D0\u4F9B\u7684\u6570\u636E\u7ED3\u6784\u3002",paraId:1,tocIndex:1},{value:"\u8868\u5355\u7EC4\u4EF6\u683C\u5F0F\u5B9A\u5236\u5316\u914D\u7F6E\uFF0C\u66F4\u9002\u5408\u4F4E\u4EE3\u7801/\u96F6\u4EE3\u7801\u5E73\u53F0\u3002",paraId:1,tocIndex:1},{value:"\u6982\u5FF5\u7CBE\u7B80\uFF0C\u4E0A\u624B\u8F7B\u677E\u3002",paraId:1,tocIndex:1},{value:"\u57FA\u4E8E\u53CC\u5411\u7ED1\u5B9A\u6A21\u578B\uFF0C\u63D0\u4F9B\u7075\u6D3B\u7684\u3001\u7B26\u5408\u76F4\u89C9\u7684\u62BD\u8C61\u3002",paraId:1,tocIndex:1},{value:"\u9AD8\u6027\u80FD\u3002",paraId:1,tocIndex:1},{value:"\u501F\u52A9 mobx \u4F9D\u8D56\u6536\u96C6\u673A\u5236\uFF0C\u5B9E\u73B0\u8868\u5355\u7EC4\u4EF6\u7684\u7CBE\u786E\u66F4\u65B0\uFF0C[\u5927\u6570\u636E\u91CF\u573A\u666F\u4E0B\u4EA4\u4E92\u4F9D\u65E7\u6D41\u7545]\u3002",paraId:1,tocIndex:1},{value:"react-antd-xform",paraId:2,tocIndex:3},{value:" \u91C7\u7528\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406\u9A71\u52A8UI\u66F4\u65B0\uFF0C\u4F7F\u5F97\u8868\u5355\u7EC4\u4EF6\u7684\u66F4\u65B0\u66F4\u52A0\u7CBE\u786E\u3002",paraId:2,tocIndex:3},{value:"\u76F8\u8F83\u4E8Eantd form\uFF0C\u5927\u5927\u7B80\u5316\u8868\u5355\uFF0C\u65E0\u9700\u8FC7\u591A\u5D4C\u5957\uFF0C\u4E14\u652F\u6301\u901A\u8FC7\u4F20\u5165component\u65B9\u5F0F\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6\u3002",paraId:3,tocIndex:4}]},65530:function(z,x,r){r.r(x),r.d(x,{texts:function(){return M}});const M=[{value:"\u8868\u5355\u7EC4\u4EF6\uFF0C\u521B\u5EFA\u6240\u9700\u7684\u4E0A\u4E0B\u6587\uFF0C\u5E76\u901A\u8FC7 FormLayout \u6E32\u67D3\u4E00\u4E2A div\uFF1A",paraId:0,tocIndex:0},{value:"FormEnvProvider\uFF1A\u8868\u5355\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7 useFormEnv \u83B7\u53D6\u8FD9\u4E9B\u73AF\u5883\u53D8\u91CF\u3002",paraId:1,tocIndex:0},{value:"ModelProvider\uFF1A\u6A21\u578B\u5BF9\u8C61\uFF0C\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7 useModel \u83B7\u53D6\u6A21\u578B\u5BF9\u8C61\u3002",paraId:1,tocIndex:0},{value:"FormLayout\uFF1A \u8868\u5355\u5E03\u5C40\u3002",paraId:1,tocIndex:0},{value:"\u5B57\u6BB5",paraId:2,tocIndex:0},{value:"\u63CF\u8FF0",paraId:2,tocIndex:0},{value:"model",paraId:2,tocIndex:0},{value:"FormModel",paraId:2,tocIndex:0},{value:" \u53D7\u63A7\u7528\u6CD5\u3002xform \u6A21\u578B\u5BF9\u8C61\uFF0C\u4E00\u822C\u7531\u4E0A\u5C42\u901A\u8FC7 ",paraId:2,tocIndex:0},{value:"new FormModel(...)",paraId:2,tocIndex:0},{value:" \u521B\u5EFA\u800C\u6210",paraId:2,tocIndex:0},{value:"defaultValue",paraId:2,tocIndex:0},{value:"unknown",paraId:2,tocIndex:0},{value:"\u975E\u53D7\u63A7\u7528\u6CD5\u3002\u8868\u5355\u7684\u9ED8\u8BA4\u503C",paraId:2,tocIndex:0},{value:"onSubmit",paraId:2,tocIndex:0},{value:"(submitValues: any, model: FormModel<any>) => void",paraId:2,tocIndex:0},{value:"\u63D0\u4EA4\u8868\u5355\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u9700\u914D\u5408 ",paraId:2,tocIndex:0},{value:"<Form.Submit />",paraId:2,tocIndex:0},{value:" \u4F7F\u7528",paraId:2,tocIndex:0},{value:"onError",paraId:2,tocIndex:0},{value:"(errors: any, model: FormModel<any>) => void",paraId:2,tocIndex:0},{value:"\u63D0\u4EA4\u8868\u5355\u65F6\u7684\u51FA\u9519\u56DE\u8C03\u51FD\u6570\uFF0C\u9700\u914D\u5408 ",paraId:2,tocIndex:0},{value:"<Form.Submit />",paraId:2,tocIndex:0},{value:" \u4F7F\u7528",paraId:2,tocIndex:0},{value:"onReset",paraId:2,tocIndex:0},{value:"(model: FormModel<any>) => void",paraId:2,tocIndex:0},{value:"\u6E05\u7A7A\u8868\u5355\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u9700\u914D\u5408 ",paraId:2,tocIndex:0},{value:"<Form.Reset />",paraId:2,tocIndex:0},{value:" \u4F7F\u7528",paraId:2,tocIndex:0},{value:"isPreview",paraId:2,tocIndex:0},{value:"boolean = false",paraId:2,tocIndex:0},{value:"\u662F\u5426\u4E3A\u9884\u89C8\u6001",paraId:2,tocIndex:0},{value:"validateOnMount",paraId:2,tocIndex:0},{value:"boolean = false",paraId:2,tocIndex:0},{value:"\u7EC4\u4EF6\u52A0\u8F7D\u65F6\u662F\u5426\u89E6\u53D1\u6821\u9A8C",paraId:2,tocIndex:0},{value:"validateOnChange",paraId:2,tocIndex:0},{value:"boolean = true",paraId:2,tocIndex:0},{value:"\u503C\u4FEE\u6539\u65F6\u662F\u5426\u89E6\u53D1\u6821\u9A8C",paraId:2,tocIndex:0},{value:"validateOnBlur",paraId:2,tocIndex:0},{value:"boolean = true",paraId:2,tocIndex:0},{value:"\u7EC4\u4EF6\u5931\u53BB\u7126\u70B9\u65F6\u662F\u5426\u89E6\u53D1\u6821\u9A8C",paraId:2,tocIndex:0},{value:"writeDefaultValueToModel",paraId:2,tocIndex:0},{value:"boolean | 'force' = false",paraId:2,tocIndex:0},{value:"\u662F\u5426\u5C06 ",paraId:2,tocIndex:0},{value:"FormItem",paraId:2,tocIndex:0},{value:" \u4E0A\u7684 ",paraId:2,tocIndex:0},{value:"defaultValue",paraId:2,tocIndex:0},{value:" \u56DE\u5199\u5230 model \u4E2D\u3002\u6CE8\u610F\uFF1A\u53EA\u6709\u300C\u4E0D\u4E3A undefined\u300D\u4E14\u300C\u901A\u8FC7 ",paraId:2,tocIndex:0},{value:"FormItem",paraId:2,tocIndex:0},{value:" props \u8BBE\u7F6E\u7684\u300D\u7684\u9ED8\u8BA4\u503C\u624D\u4F1A\u88AB\u56DE\u5199\u5230 model \u4E2D\u3002",paraId:2,tocIndex:0},{value:"autoUnmount",paraId:2,tocIndex:0},{value:"boolean = false",paraId:2,tocIndex:0},{value:"FormItem",paraId:2,tocIndex:0},{value:" \u5378\u8F7D\u65F6\uFF0C\u662F\u5426\u81EA\u52A8\u5C06\u5BF9\u5E94\u6570\u636E\u6E05\u9664",paraId:2,tocIndex:0},{value:"htmlIdPrefix",paraId:2,tocIndex:0},{value:"string",paraId:2,tocIndex:0},{value:"\u8868\u5355\u5185\u63A7\u4EF6\u7684 html id \u524D\u7F00\u3002\u8868\u5355\u4F1A\u4EE5\u8BE5\u5C5E\u6027\u4E3A\u524D\u7F00\u4E3A\u5404\u4E2A\u63A7\u4EF6\u5206\u914D ",paraId:2,tocIndex:0},{value:"id",paraId:2,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u4F7F\u63A7\u4EF6\u4E0E HTML ",paraId:2,tocIndex:0},{value:"label",paraId:2,tocIndex:0},{value:" \u6807\u7B7E\u4EA7\u751F\u5BF9\u5E94\u5173\u7CFB\uFF0C\u70B9\u51FB ",paraId:2,tocIndex:0},{value:"label",paraId:2,tocIndex:0},{value:" \u53EF\u4EE5\u805A\u7126\u5230\u76F8\u5E94\u63A7\u4EF6\u4E0A\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8868\u5355\u5185\u90E8\u4F1A\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u968F\u673A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u524D\u7F00\u3002\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A ",paraId:2,tocIndex:0},{value:"null",paraId:2,tocIndex:0},{value:" \u53EF\u4EE5\u5173\u95ED label \u5173\u8054\u884C\u4E3A\uFF1B\u8BBE\u7F6E\u4E3A\u6307\u5B9A\u5B57\u7B26\u4E32\u5219\u53EF\u4F7F\u7528\u6307\u5B9A\u524D\u7F00\u3002",paraId:2,tocIndex:0},{value:"variant",paraId:2,tocIndex:0},{value:"antd \u8868\u5355\u5185\u63A7\u4EF6\u53D8\u4F53\uFF0C\u53EF\u9009\u503C\u4E3A ",paraId:2,tocIndex:0},{value:"outlined",paraId:2,tocIndex:0},{value:" | ",paraId:2,tocIndex:0},{value:"borderless",paraId:2,tocIndex:0},{value:" | ",paraId:2,tocIndex:0},{value:"filled",paraId:2,tocIndex:0},{value:" | ",paraId:2,tocIndex:0},{value:"underlined",paraId:2,tocIndex:0},{value:"\uFF0C\u9ED8\u8BA4\u503C\u4E3Aoutlined",paraId:2,tocIndex:0}]},81347:function(z,x,r){r.r(x),r.d(x,{texts:function(){return M}});const M=[{value:"\u8868\u5355\u9879\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u5F15\u5165form-ui\u6587\u4EF6\u5939\u5185\u5236\u6CE8\u518C\u7684antd\u7EC4\u4EF6\uFF0C\u8FDB\u800C\u751F\u6210\u4E00\u4E2A\u8868\u5355\u9879\uFF0C\u6700\u540E\u6E32\u67D3\u4E00\u4E2A Form.ItemView\uFF0C\u5E76\u5C06 \u300C\u67D0\u4E2A\u6570\u636E\u7D22\u5F15\u300D\u4E0E ItemView \u8FDB\u884C[\u53CC\u5411\u7ED1\u5B9A]",paraId:0,tocIndex:0},{value:"Form.ItemView \u5305\u542B label\u3001error\u3001help \u7B49\u90E8\u5206\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u5177\u4F53\u7684\u63A7\u4EF6\u5B9E\u4F8B\uFF08\u4F8B\u5982\u4E00\u4E2A\u8F93\u5165\u6846\uFF09\uFF1B",paraId:1,tocIndex:0},{value:"\u6570\u636E\u7D22\u5F15\u53EF\u4EE5\u7528 name \u8FDB\u884C\u6307\u5B9A\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 field \u6307\u5B9A\u3002",paraId:1,tocIndex:0},{value:"\u5B57\u6BB5",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:0},{value:"\u7C7B\u578B",paraId:2,tocIndex:0},{value:"\u4ECB\u7ECD",paraId:2,tocIndex:0},{value:"use",paraId:2,tocIndex:0},{value:"false",paraId:2,tocIndex:0},{value:"boolean",paraId:2,tocIndex:0},{value:"\u4E3A ",paraId:2,tocIndex:0},{value:"false",paraId:2,tocIndex:0},{value:" \u65F6\uFF0C\u8BE5 FormItem \u5C06\u6E32\u67D3\u4E3A ",paraId:2,tocIndex:0},{value:"null",paraId:2,tocIndex:0},{value:"component",paraId:2,tocIndex:0},{value:"true",paraId:2,tocIndex:0},{value:"string",paraId:2,tocIndex:0},{value:"\u7EC4\u4EF6\u7C7B\u578B\uFF08\u5982 ",paraId:2,tocIndex:0},{value:"Input",paraId:2,tocIndex:0},{value:", ",paraId:2,tocIndex:0},{value:"Select",paraId:2,tocIndex:0},{value:" \u7B49\uFF09",paraId:2,tocIndex:0},{value:"label",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"ReactNode",paraId:2,tocIndex:0},{value:"\u5B57\u6BB5\u7684\u663E\u793A\u540D\u79F0",paraId:2,tocIndex:0},{value:"name",paraId:2,tocIndex:0},{value:"true",paraId:2,tocIndex:0},{value:"string",paraId:2,tocIndex:0},{value:"\u5B57\u6BB5\u6570\u636E\u7D22\u5F15\uFF0C\u7528\u4E8E\u7ED1\u5B9A model \u4E2D\u7684\u6570\u636E\u8DEF\u5F84",paraId:2,tocIndex:0},{value:"field",paraId:2,tocIndex:0},{value:"false",paraId:2,tocIndex:0},{value:"Field",paraId:2,tocIndex:0},{value:"\u5B57\u6BB5\u7ED1\u5B9A\u7684 Field \u5BF9\u8C61\uFF0C\u63D0\u4F9B\u540E\u5C06\u8986\u76D6 ",paraId:2,tocIndex:0},{value:"name",paraId:2,tocIndex:0},{value:" \u5C5E\u6027",paraId:2,tocIndex:0},{value:"tip",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"ReactNode",paraId:2,tocIndex:0},{value:"\u63D0\u793A\u4FE1\u606F\uFF0C\u901A\u5E38\u4EE5\u95EE\u53F7\u56FE\u6807\u5C55\u793A",paraId:2,tocIndex:0},{value:"asterisk",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"boolean",paraId:2,tocIndex:0},{value:"\u662F\u5426\u5C55\u793A\u7EA2\u8272\u661F\u53F7 ",paraId:2,tocIndex:0},{value:"*",paraId:2,tocIndex:0},{value:" \u6807\u8BB0\u5FC5\u586B",paraId:2,tocIndex:0},{value:"help",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"ReactNode",paraId:2,tocIndex:0},{value:"\u5E2E\u52A9\u6587\u672C\uFF0C\u663E\u793A\u5728\u63A7\u4EF6\u4E0B\u65B9",paraId:2,tocIndex:0},{value:"defaultValue",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"any",paraId:2,tocIndex:0},{value:"\u5B57\u6BB5\u9ED8\u8BA4\u503C\uFF08\u975E\u53D7\u63A7\u7528\u6CD5\uFF09",paraId:2,tocIndex:0},{value:"isPreview",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"boolean",paraId:2,tocIndex:0},{value:"\u662F\u5426\u4E3A\u9884\u89C8\u6001\uFF0C\u63A7\u5236\u662F\u5426\u5C55\u793A\u53EA\u8BFB\u5185\u5BB9",paraId:2,tocIndex:0},{value:"componentProps",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"object",paraId:2,tocIndex:0},{value:"\u4F20\u9012\u7ED9\u5B9E\u9645\u7EC4\u4EF6\u7684\u989D\u5916 props",paraId:2,tocIndex:0},{value:"config",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"object",paraId:2,tocIndex:0},{value:"\u5176\u4ED6\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF1B",paraId:2,tocIndex:0},{value:"props.config",paraId:2,tocIndex:0},{value:" \u4E2D\u7684\u503C\u4F1A\u5408\u5E76\u5230 ",paraId:2,tocIndex:0},{value:"field.config",paraId:2,tocIndex:0},{value:" \u4E2D",paraId:2,tocIndex:0},{value:"writeDefaultValueToModel",paraId:2,tocIndex:0},{value:"false",paraId:2,tocIndex:0},{value:"boolean | 'force'",paraId:2,tocIndex:0},{value:"\u662F\u5426\u5C06 ",paraId:2,tocIndex:0},{value:"FormItem",paraId:2,tocIndex:0},{value:" \u4E0A\u7684 ",paraId:2,tocIndex:0},{value:"defaultValue",paraId:2,tocIndex:0},{value:" \u56DE\u5199\u5230 model \u4E2D\u3002\u6CE8\u610F\uFF1A\u53EA\u6709\u300C\u4E0D\u4E3A ",paraId:2,tocIndex:0},{value:"undefined",paraId:2,tocIndex:0},{value:"\u300D\u4E14\u300C\u901A\u8FC7 ",paraId:2,tocIndex:0},{value:"FormItem",paraId:2,tocIndex:0},{value:" props \u8BBE\u7F6E\u7684\u300D\u7684\u9ED8\u8BA4\u503C\u624D\u4F1A\u88AB\u56DE\u5199\u3002",paraId:2,tocIndex:0},{value:"FormEnvProvider",paraId:2,tocIndex:0},{value:" \u53EF\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u3002",paraId:2,tocIndex:0},{value:"required",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"boolean",paraId:2,tocIndex:0},{value:"\u5B57\u6BB5\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:0},{value:"requiredMessage",paraId:2,tocIndex:0},{value:'"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879"',paraId:2,tocIndex:0},{value:"string",paraId:2,tocIndex:0},{value:"\u5FC5\u586B\u6821\u9A8C\u5931\u8D25\u65F6\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:2,tocIndex:0},{value:"validate",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"(value: any, field: Field, trigger: FieldValidateTrigger) => string | Promise<string>",paraId:2,tocIndex:0},{value:"\u81EA\u5B9A\u4E49\u6821\u9A8C\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u5B57\u7B26\u4E32\u8868\u793A\u9519\u8BEF\u4FE1\u606F\uFF0C\u652F\u6301\u5F02\u6B65\u6821\u9A8C",paraId:2,tocIndex:0},{value:"validateOnMount",paraId:2,tocIndex:0},{value:"false",paraId:2,tocIndex:0},{value:"boolean",paraId:2,tocIndex:0},{value:"\u7EC4\u4EF6\u52A0\u8F7D\u65F6\u662F\u5426\u89E6\u53D1\u6821\u9A8C\u3002",paraId:2,tocIndex:0},{value:"FormEnvProvider",paraId:2,tocIndex:0},{value:" \u53EF\u8BBE\u7F6E\u9ED8\u8BA4\u503C",paraId:2,tocIndex:0},{value:"validateOnChange",paraId:2,tocIndex:0},{value:"true",paraId:2,tocIndex:0},{value:"boolean",paraId:2,tocIndex:0},{value:"\u503C\u4FEE\u6539\u65F6\u662F\u5426\u89E6\u53D1\u6821\u9A8C\u3002",paraId:2,tocIndex:0},{value:"FormEnvProvider",paraId:2,tocIndex:0},{value:" \u53EF\u8BBE\u7F6E\u9ED8\u8BA4\u503C",paraId:2,tocIndex:0},{value:"validateOnBlur",paraId:2,tocIndex:0},{value:"true",paraId:2,tocIndex:0},{value:"boolean",paraId:2,tocIndex:0},{value:"\u7EC4\u4EF6\u5931\u53BB\u7126\u70B9\u65F6\u662F\u5426\u89E6\u53D1\u6821\u9A8C\u3002",paraId:2,tocIndex:0},{value:"FormEnvProvider",paraId:2,tocIndex:0},{value:" \u53EF\u8BBE\u7F6E\u9ED8\u8BA4\u503C",paraId:2,tocIndex:0},{value:"dataSource",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"\u540C ",paraId:2,tocIndex:0},{value:"componentProps.dataSource",paraId:2,tocIndex:0},{value:"\uFF0C\u5FEB\u6377\u8BBE\u7F6E\u9009\u9879\u5217\u8868",paraId:2,tocIndex:0},{value:"disabled",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"\u540C ",paraId:2,tocIndex:0},{value:"componentProps.disabled",paraId:2,tocIndex:0},{value:"\uFF0C\u5FEB\u6377\u7981\u7528\u63A7\u4EF6",paraId:2,tocIndex:0},{value:"readOnly",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"\u540C ",paraId:2,tocIndex:0},{value:"componentProps.readOnly",paraId:2,tocIndex:0},{value:"\uFF0C\u8BBE\u7F6E\u53EA\u8BFB\u72B6\u6001",paraId:2,tocIndex:0},{value:"state",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"\u540C ",paraId:2,tocIndex:0},{value:"componentProps.state",paraId:2,tocIndex:0},{value:"\uFF0C\u63A7\u5236\u63A7\u4EF6\u72B6\u6001\uFF08\u5982 success / error\uFF09",paraId:2,tocIndex:0},{value:"labelWidth",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"string | number",paraId:2,tocIndex:0},{value:"\u6807\u7B7E\u5BBD\u5EA6\uFF0C\u652F\u6301\u50CF\u7D20\u6216\u767E\u5206\u6BD4",paraId:2,tocIndex:0},{value:"labelStyle",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"CSSProperties",paraId:2,tocIndex:0},{value:"\u6807\u7B7E\u533A\u57DF\u7684\u5185\u8054\u6837\u5F0F",paraId:2,tocIndex:0},{value:"controlWidth",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"string | number",paraId:2,tocIndex:0},{value:"\u63A7\u4EF6\u533A\u57DF\u5BBD\u5EA6",paraId:2,tocIndex:0},{value:"controlStyle",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"CSSProperties",paraId:2,tocIndex:0},{value:"\u63A7\u4EF6\u533A\u57DF\u7684\u5185\u8054\u6837\u5F0F",paraId:2,tocIndex:0},{value:"rightNode",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"ReactNode",paraId:2,tocIndex:0},{value:"\u5728\u63A7\u4EF6\u53F3\u4FA7\u6DFB\u52A0\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF08\u5982\u5355\u4F4D\u3001\u6309\u94AE\u7B49\uFF09",paraId:2,tocIndex:0},{value:"value",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"\u8986\u76D6\u8868\u5355\u9879\u9ED8\u8BA4\u7684 ",paraId:2,tocIndex:0},{value:"value",paraId:2,tocIndex:0},{value:"\u3002\u6CE8\u610F\uFF1A\u4E0D\u540C\u7EC4\u4EF6\u53EF\u80FD\u4F7F\u7528\u4E0D\u540C prop \u540D\u79F0\uFF08\u5982 ",paraId:2,tocIndex:0},{value:"checked",paraId:2,tocIndex:0},{value:"\uFF09",paraId:2,tocIndex:0},{value:"onChange",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"\u8986\u76D6\u8868\u5355\u9879\u9ED8\u8BA4\u7684 ",paraId:2,tocIndex:0},{value:"onChange",paraId:2,tocIndex:0},{value:" \u56DE\u8C03",paraId:2,tocIndex:0},{value:"onBlur",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"\u8986\u76D6\u8868\u5355\u9879\u9ED8\u8BA4\u7684 ",paraId:2,tocIndex:0},{value:"onBlur",paraId:2,tocIndex:0},{value:" \u56DE\u8C03",paraId:2,tocIndex:0},{value:"renderPreview",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6001\u4E0B\u7684\u6E32\u67D3\u65B9\u5F0F",paraId:2,tocIndex:0},{value:"isEmpty",paraId:2,tocIndex:0},{value:"(value: any) => boolean",paraId:2,tocIndex:0},{value:"(value: any) => boolean",paraId:2,tocIndex:0},{value:"\u81EA\u5B9A\u4E49\u5224\u65AD\u5B57\u6BB5\u503C\u662F\u5426\u4E3A\u7A7A\u7684\u903B\u8F91",paraId:2,tocIndex:0},{value:"afterChange",paraId:2,tocIndex:0},{value:"-",paraId:2,tocIndex:0},{value:"(...args: any[]) => void",paraId:2,tocIndex:0},{value:"\u8868\u5355\u9879\u503C\u4FEE\u6539\u4E4B\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u65E0\u8BBA\u662F\u5426\u89E6\u53D1\u6821\u9A8C\uFF09",paraId:2,tocIndex:0}]},21500:function(z,x,r){r.r(x),r.d(x,{texts:function(){return M}});const M=[{value:"\u8868\u5355\u63D0\u4EA4\u6309\u94AE\uFF0C\u70B9\u51FB\u65F6...",paraId:0,tocIndex:0},{value:"\u89E6\u53D1\u6240\u6709\u5B57\u6BB5\u7684\u6821\u9A8C\u3002",paraId:1,tocIndex:0},{value:"\u5982\u679C\u6821\u9A8C\u901A\u8FC7\uFF0C\u5219\u8C03\u7528 Form \u7684 onSubmit(submitValues, model)\u3002",paraId:1,tocIndex:0},{value:"\u5982\u679C\u53D1\u751F\u9519\u8BEF\uFF0C\u5219\u8C03\u7528 Form \u7684 onSubmit(erros, model)\u3002",paraId:1,tocIndex:0}]},48934:function(z,x){x.Z=`import React from 'react';
import { toJS } from 'mobx';
import { Checkbox } from 'antd';
import ReactJson from 'react-json-view';
import { observer } from 'mobx-react-lite';
import { FormModel, useModel } from 'react-antd-xform';

export interface ValuePreviewProps {
  style?: React.CSSProperties;
  defaultShow?: boolean;
  model?: FormModel;
}

const ValuePreview = observer(
  ({ style, defaultShow, model: modelProp }: ValuePreviewProps) => {
    const ctxModel = useModel();
    const model = modelProp ?? ctxModel;
    const data = toJS(model.values) as object;
    const [showReactJson, setShowReactJson] = React.useState(defaultShow);

    return (
      <div style={style}>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Checkbox checked={showReactJson} onChange={(v) => setShowReactJson(v.target.checked)}>
            \u663E\u793A JSON
          </Checkbox>
        </div>
        {showReactJson && <ReactJson name="\u8868\u5355\u72B6\u6001\u9884\u89C8" src={data} />}
      </div>
    );
  }
);

export default ValuePreview;
`}}]);
