"use strict";(self.webpackChunkreact_antd_xform=self.webpackChunkreact_antd_xform||[]).push([[904],{82181:function(q,E,i){i.r(E),i.d(E,{demos:function(){return h}});var O=i(75271),h={}},5151:function(q,E,i){i.r(E),i.d(E,{demos:function(){return h}});var O=i(75271),h={}},53748:function(q,E,i){var O;i.r(E),i.d(E,{demos:function(){return ne}});var h=i(90228),K=i.n(h),X=i(87999),ie=i.n(X),D=i(75271),F=i(66062),be=i(17982),ne={"docs-introduction-demo-0":{component:D.memo(D.lazy(ie()(K()().mark(function J(){var $,I,w,G,U,P,H,le,k;return K()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(i.t.bind(i,75271,19));case 2:return $=f.sent,I=$.default,f.next=6,Promise.resolve().then(i.bind(i,66062));case 6:return w=f.sent,G=w.Form,U=w.FormModel,P=w.FormItem,f.next=12,Promise.resolve().then(i.bind(i,17982));case 12:return H=f.sent,le=H.Button,k=function(){var re=new U({name:"44444",introduce:"\u6211\u662F\u5F20\u4E09\uFF0C\u6211\u6765\u81EA\u6E56\u5317",date:"2025-09-17",dateRange:["2025-09-24","2025-10-30"],rate:5});return I.createElement(G,{model:re,onSubmit:function(L){return console.log(L)}},I.createElement(P,{component:"input",label:"input\u8868\u5355",name:"name",required:!0}),I.createElement(P,{component:"textArea",label:"textArea",name:"introduce",required:!0}),I.createElement(P,{defaultValue:"jack",component:"select",label:"select\u5355\u9009",options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"},{value:"disabled",label:"Disabled",disabled:!0}],writeDefaultValueToModel:!0,name:"friend",required:!0,componentProps:{style:{width:"100%"}}}),I.createElement(P,{defaultValue:["book"],component:"multiSelect",label:"select\u591A\u9009",options:[{value:"book",label:"\u8BFB\u4E66"},{value:"study",label:"\u5B66\u4E60"},{value:"disabled",label:"Disabled",disabled:!0}],writeDefaultValueToModel:!0,name:"likes",required:!0,componentProps:{style:{width:"100%"},mode:"multiple"}}),I.createElement(P,{component:"radio",label:"radio\u5355\u9009",options:[{value:"male",label:"\u7537"},{value:"female",label:"\u5973"}],defaultValue:"male",writeDefaultValueToModel:!0,name:"gender",required:!0}),I.createElement(P,{component:"radio",labelStyle:{marginTop:-4},label:"radio\u5355\u9009",options:[{value:"male",label:"\u7537"},{value:"female",label:"\u5973"}],defaultValue:"male",writeDefaultValueToModel:!0,componentProps:{optionType:"button"},name:"gender",required:!0}),I.createElement(P,{component:"checkbox",defaultValue:["apple"],writeDefaultValueToModel:!0,label:"checkbox\u591A\u9009",labelStyle:{marginTop:-4},options:[{value:"apple",label:"\u82F9\u679C"},{value:"banana",label:"\u9999\u8549"}],name:"fruits",required:!0}),I.createElement(P,{component:"inputNumber",defaultValue:1,writeDefaultValueToModel:!0,label:"\u6570\u5B57\u8868\u5355",name:"numbers",required:!0,componentProps:{min:0,max:10}}),I.createElement(P,{component:"slider",defaultValue:80,writeDefaultValueToModel:!0,label:"slider\u8FDB\u5EA6\u6761",name:"slider",required:!0}),I.createElement(P,{component:"switch",defaultValue:!0,writeDefaultValueToModel:!0,label:"switch\u5F00\u5173",name:"switch",required:!0}),I.createElement(P,{component:"datePicker",writeDefaultValueToModel:!0,label:"\u65E5\u671F\u9009\u62E9",name:"date",componentProps:{style:{width:"100%"},picker:"date"},required:!0}),I.createElement(P,{component:"dateRangePicker",writeDefaultValueToModel:!0,label:"\u65E5\u671F\u533A\u95F4\u9009\u62E9",name:"dateRange",componentProps:{style:{width:"100%"},picker:"date"},required:!0}),I.createElement(P,{component:"timePicker",writeDefaultValueToModel:!0,label:"\u65F6\u95F4\u9009\u62E9",name:"time",componentProps:{style:{width:"100%"}},required:!0}),I.createElement(P,{component:"timeRangePicker",writeDefaultValueToModel:!0,label:"\u65F6\u95F4\u533A\u95F4\u9009\u62E9",name:"timeRange",componentProps:{style:{width:"100%"}},required:!0}),I.createElement(P,{component:"rate",writeDefaultValueToModel:!0,label:"rate\u8BC4\u5206",name:"rate",componentProps:{style:{width:"100%"}},required:!0}),I.createElement(P,{component:"colorPicker",writeDefaultValueToModel:!0,label:"colorPicker",name:"colorPicker",componentProps:{returnType:"hex"},required:!0}),I.createElement(G.Submit,{ButtonComponent:le,type:"primary"},"\u63D0\u4EA4"),I.createElement(G.FormReset,{ButtonComponent:le},"\u91CD\u7F6E"))},f.abrupt("return",{default:k});case 16:case"end":return f.stop()}},J)})))),asset:{type:"BLOCK",id:"docs-introduction-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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

export default XFormTest;`},react:{type:"NPM",value:"18.3.1"},"react-antd-xform":{type:"NPM",value:"1.0.9"},antd:{type:"NPM",value:"5.27.3"}},entry:"index.tsx"},context:{react:O||(O=i.t(D,2)),"react-antd-xform":F,antd:be},renderOpts:{compile:function(){var J=ie()(K()().mark(function I(){var w,G=arguments;return K()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,i.e(551).then(i.bind(i,94551));case 2:return P.abrupt("return",(w=P.sent).default.apply(w,G));case 3:case"end":return P.stop()}},I)}));function $(){return J.apply(this,arguments)}return $}()}},"docs-introduction-demo-1":{component:D.memo(D.lazy(ie()(K()().mark(function J(){var $,I,w,G,U,P,H;return K()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,Promise.resolve().then(i.t.bind(i,75271,19));case 2:return $=k.sent,I=$.default,k.next=6,Promise.resolve().then(i.bind(i,66062));case 6:return w=k.sent,G=w.Form,U=w.FormModel,P=w.FormItem,H=function(){var f=new U({name:"test"});return I.createElement(G,{model:f,onSubmit:function(re){return console.log(re)}},I.createElement(P,{component:"input",label:"input\u8868\u5355",name:"name",required:!0}))},k.abrupt("return",{default:H});case 12:case"end":return k.stop()}},J)})))),asset:{type:"BLOCK",id:"docs-introduction-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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

export default XFormTest;`},react:{type:"NPM",value:"18.3.1"},"react-antd-xform":{type:"NPM",value:"1.0.9"}},entry:"index.tsx"},context:{react:O||(O=i.t(D,2)),"react-antd-xform":F},renderOpts:{compile:function(){var J=ie()(K()().mark(function I(){var w,G=arguments;return K()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,i.e(551).then(i.bind(i,94551));case 2:return P.abrupt("return",(w=P.sent).default.apply(w,G));case 3:case"end":return P.stop()}},I)}));function $(){return J.apply(this,arguments)}return $}()}}}},55903:function(q,E,i){i.r(E),i.d(E,{demos:function(){return h}});var O=i(75271),h={}},66062:function(q,E,i){i.r(E),i.d(E,{AsyncValue:function(){return ue},Form:function(){return Z},FormEnvProvider:function(){return Ne},FormItem:function(){return ln},FormModel:function(){return ve},arrayHelpers:function(){return tt},createFormItem:function(){return me},modelUtils:function(){return oe},useFormEnv:function(){return ae},useModel:function(){return Q}});var O=i(26068),h=i.n(O),K=i(48305),X=i.n(K),ie=i(67825),D=i.n(ie),F=i(75271),be=i(335),ne=i.n(be),J=i(90228),$=i.n(J),I=i(87999),w=i.n(I),G=i(15558),U=i.n(G),P=i(25298),H=i.n(P),le=i(17069),k=i.n(le),Ie=i(82092),f=i.n(Ie),Me=i(53670),re=i.n(Me),u=i(28123),L=function(e){return e.rootModel="rootModel",e.subModel="subModel",e}({}),T=function(e){return e.normal="normal",e.tuple="tuple",e.readonly="readonly",e}({}),at=i(21742),ot=i.n(at),it=i(83136),lt=i.n(it),ut=i(53318),st=i.n(ut),ue=function(){function e(t,n){var r=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};H()(this,e),f()(this,"_disposers",void 0),f()(this,"_error",void 0),f()(this,"_reaction",void 0),f()(this,"_status",void 0),f()(this,"_current",void 0),f()(this,"_cancelLastGetter",void 0),f()(this,"_atom",void 0),f()(this,"_refreshAtom",void 0),f()(this,"fetcher",void 0),f()(this,"options",void 0),f()(this,"name",void 0),f()(this,"_start",function(){r._reaction||(r._reaction=new u.le("".concat(r.name,"#reaction"),function(){r._status!=="loading"&&(r._status="loading",r._atom.reportChanged()),r._reaction&&r._reaction.track(function(){var o,l=!1;r._cancelLastGetter=function(){l=!0};var d=(o=r._mobxGlobal.inXFormAsyncValueFetcher)!==null&&o!==void 0?o:!1;r._mobxGlobal.inXFormAsyncValueFetcher=!0,r._refreshAtom.reportObserved();var v;try{v=r.fetcher()}catch(c){v=Promise.reject(c)}Promise.resolve(v).then(function(c){l||(0,u.z)(function(){r._status="ready",c!==e.SKIP&&(r._current=c),r._error=null,r._atom.reportChanged()})}).catch(function(c){if(!(c instanceof e.StillLoading))throw(0,u.z)(function(){r._status="error",r._error=c,r._atom.reportChanged()}),c}),r._mobxGlobal.inXFormAsyncValueFetcher=d})}),r._reaction.schedule_())}),f()(this,"_stop",function(){r._status="loading",r._reaction&&(r._reaction.dispose(),r._reaction=null)}),this._disposers=[],this._error=null,this._reaction=null,this._status="loading",this._current=n,this._cancelLastGetter=null,this.fetcher=t,this.options=a,this.name=typeof a.name=="string"?a.name:"AsyncValue_".concat(e._globalCount++),this._atom=(0,u.cp)("".concat(this.name,"#state")),this._refreshAtom=(0,u.cp)("".concat(this.name,"#refresh")),(0,u.rC)(this,{status:u.Fl,error:u.Fl,_inner_current:(0,u.Fl)({name:"".concat(this.name,".inner_current")}),isLoading:u.Fl,isError:u.Fl,isReady:u.Fl},{name:this.name}),this._disposers.push(this._stop),this._disposers.push((0,u.hz)(this._atom,this._start)),this._disposers.push((0,u.pA)(this._atom,function(){r.options.keepAlive||r._stop()})),this._disposers.push(function(){r._status="ready",r._current=null,r._error=null})}return k()(e,[{key:"_mobxGlobal",get:function(){return(0,u.pu)()}},{key:"refresh",value:function(){this._refreshAtom.reportChanged()}},{key:"dispose",value:function(){var n=ne()(this._disposers),r;try{for(n.s();!(r=n.n()).done;){var a=r.value;a()}}catch(o){n.e(o)}finally{n.f()}}},{key:"status",get:function(){return this._atom.reportObserved(),this._status}},{key:"_inner_current",get:function(){return this._atom.reportObserved(),this._current}},{key:"current",get:function(){if(this._mobxGlobal.inXFormAsyncValueFetcher){if(this._atom.reportObserved(),this._status==="loading")throw new e.StillLoading;if(this._status==="error")throw this._error;return this._current}return this._inner_current}},{key:"error",get:function(){return this._atom.reportObserved(),this._error}},{key:"isLoading",get:function(){return this.status==="loading"}},{key:"isReady",get:function(){return this.status==="ready"}},{key:"isError",get:function(){return this.status==="error"}}]),e}();f()(ue,"_globalCount",0),f()(ue,"SKIP","AsyncValue@SKIP"),f()(ue,"StillLoading",function(e){ot()(n,e);var t=lt()(n);function n(){return H()(this,n),t.apply(this,arguments)}return k()(n)}(st()(Error)));function Ae(e){return String(Number.parseInt(e))===e}function Fe(e){return Ae(e)?"array":"object"}function ce(e){return String(e).split(".")}function R(e,t){return e!==void 0?e:t}function dt(e,t,n){for(var r=Array.isArray(t)?t:ce(t),a=e,o=0;o<r.length;o+=1){if(!u.bi(a))return n;a=u.U2(a,r[o])}return a===void 0?n:a}function _(e,t,n){for(var r=Array.isArray(t)?t:ce(t),a=r.length-1,o=e,l=0;l<a;l+=1){var d=r[l];if(u.U2(o,d)==null&&(Ae(r[l+1])?u.t8(o,d,[]):u.t8(o,d,{})),o=u.U2(o,d),!u.bi(o))return}u.bi(o)&&u.t8(o,r[a],n)}function ct(e){var t=function(a){return("0"+a.toString(16)).slice(-2)},n=new Uint8Array(e/2);return window.crypto.getRandomValues(n),Array.from(n,t).join("")}function mt(e){var t=(0,F.useState)(function(){return"xform_".concat(ct(6),".")}),n=X()(t,1),r=n[0];return e!==void 0?e:r}function se(e){return typeof e=="number"?"".concat(e,"px"):e}function ft(e){return!e||Array.isArray(e)&&e.length===0}var vt=function(t){for(var n=[],r=0;r<t;r++)n.push(r);return n};function ht(e,t){var n={};return t.forEach(function(r){r in e&&(n[r]=e[r])}),n}function Se(e,t){if(typeof e=="string")return function(){return(0,u.ZN)(t.getValue(e))};if(typeof e=="function")return e;if(e instanceof ee)return function(){return e.value};if(e instanceof ve)return function(){return(0,u.ZN)(e.values)};if(e instanceof ue)return function(){return e.current};if(Array.isArray(e))return function(){return e.map(function(n){if(typeof n=="string")return(0,u.ZN)(t.getValue(n));if(n instanceof ue)return n.current;if(n instanceof ee)return n.value;if(n instanceof ve)return(0,u.ZN)(n.values)})};console.warn("[xform] \u65E0\u6CD5\u8BC6\u522B\u7684 watch \u53C2\u6570",e)}var pt=[],gt={modelType:L.rootModel},ke=function(){function e(t){H()(this,e),f()(this,"_nextId",1),f()(this,"prefix",void 0),this.prefix=t}return k()(e,[{key:"getNextId",value:function(){return"".concat(this.prefix,"_").concat(this._nextId++)}}]),e}(),ve=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:gt;H()(this,e),f()(this,"_modelIdGenerator",void 0),f()(this,"_fieldIdGenerator",void 0),f()(this,"id",void 0),f()(this,"state",{}),f()(this,"root",void 0),f()(this,"parent",void 0),f()(this,"name",void 0),f()(this,"_modelType",void 0),f()(this,"_values",void 0),f()(this,"_fieldMap",new Map),f()(this,"_valueShape","auto"),f()(this,"_subModels",void 0),f()(this,"_checkMap",new Map),f()(this,"_selfDeleted",!1),(n==null?void 0:n.modelType)===L.subModel?(this._modelType=L.subModel,this.parent=n.parent,this.root=this.parent.root,this.name=n.name,this.id=this.root._modelIdGenerator.getNextId()):(this._modelType=L.rootModel,this.parent=this,this.root=this,this.name="",this._modelIdGenerator=new ke("Model"),this._fieldIdGenerator=new ke("Field"),this.id=this._modelIdGenerator.getNextId(),this._values=R(t,{}),this._values==null&&console.warn("[xform] FormModel \u6839\u8282\u70B9\u7684\u521D\u59CB values \u4E0D\u80FD\u4E3A null")),(0,u.rC)(this,{_values:this._modelType===L.rootModel?u.LO:!1,values:u.Fl,state:u.LO,setValue:u.aD,name:u.LO.ref,path:u.Fl,_selfDeleted:u.LO.ref,isDeleted:u.Fl,_markDeleted:u.aD},{name:"".concat(this.id,"(").concat(this.name,")")})}return k()(e,[{key:"values",get:function(){return this._modelType===L.rootModel?this._values:this.parent.getValue(this.name)},set:function(n){if(this.isDeleted){console.warn("[xform] \u5BF9\u5DF2\u5220\u9664\u7684 Model \u8FDB\u884C\u8D4B\u503C\u5C06\u88AB\u5FFD\u7565\u3002\u8BF7\u4E0D\u8981\u5BF9\u5DF2\u5220\u9664\u7684 Model/Field \u8FDB\u884C\u64CD\u4F5C\u3002");return}this._modelType===L.rootModel?(n==null&&console.warn("[xform] FormModel \u6839\u8282\u70B9\u7684 values \u4E0D\u80FD\u8BBE\u7F6E\u4E3A null/undefined"),this._values=n):this.parent.setValue(this.name,n)}},{key:"path",get:function(){return this._modelType==L.rootModel?pt:[].concat(U()(this.parent.path),[this.name])}},{key:"getValue",value:function(n,r){return dt(this.values,String(n),r)}},{key:"setValue",value:function(n,r){if(this.isDeleted){console.warn("[xform] \u5BF9\u5DF2\u5220\u9664\u7684 Model \u8FDB\u884C\u8D4B\u503C\u5C06\u88AB\u5FFD\u7565\u3002\u8BF7\u4E0D\u8981\u5BF9\u5DF2\u5220\u9664\u7684 Model/Field \u8FDB\u884C\u64CD\u4F5C\u3002");return}this._modelType===L.subModel&&this.values==null&&(this._updateValueShape(Fe(ce(String(n))[0])),this.values=this._valueShape==="array"?[]:{}),_(this.values,n,r)}},{key:"getSubModel",value:function(n){for(var r=Array.isArray(n)?n:ce(n),a=this,o=0;o<r.length-1;o++)a=a._getSubModelByShortName(r[o]);return a._getSubModelByShortName(r[r.length-1])}},{key:"getField",value:function(n){var r=Array.isArray(n)?n:ce(n);if(r.length>1){var a=r[r.length-1],o=this.getSubModel(r.slice(0,-1));return o.getField([a])}var l=r[0];this._updateValueShape(Fe(l));var d=this._fieldMap.get(l);return d==null&&(d=new ee({fieldType:T.normal,parent:this,name:l}),this._fieldMap.set(l,d)),d}},{key:"getTupleField",value:function(){this._updateValueShape("object");for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var o="tuple(".concat(r.join(","),")"),l=this._fieldMap.get(o);return l==null&&(l=new ee({fieldType:T.tuple,parent:this,name:o,tupleParts:r}),this._fieldMap.set(o,l)),l}},{key:"_asField",value:function(){if(this._modelType===L.rootModel)throw new Error("[xform] \u6839\u8282\u70B9\u4E0B\u4E0D\u652F\u6301\u4F7F\u7528 name=&\u3002\u6839\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784\u53EA\u80FD\u4E3A\u666E\u901A\u5BF9\u8C61\u3002");return this.parent.getField(this.name)}},{key:"_updateValueShape",value:function(n){this._valueShape==="auto"?(this._valueShape=n,this._subModels=n==="object"?{}:[]):re()(this._valueShape===n,"[xform] FormModel \u7684\u7ED3\u6784\u9700\u8981\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4FDD\u6301\u4E00\u81F4\uFF0C\u4E00\u4E2A\u6570\u636E\u7D22\u5F15\u5BF9\u5E94\u7684\u7ED3\u6784\u4E0D\u80FD\u4ECE\u6570\u7EC4\u53D8\u4E3A\u5BF9\u8C61\uFF0C\u4E5F\u4E0D\u80FD\u4ECE\u5BF9\u8C61\u53D8\u4E3A\u6570\u7EC4")}},{key:"iterateModels",value:function(n){if(n(this),this._subModels!=null)for(var r=0,a=Object.values(this._subModels);r<a.length;r++){var o=a[r];o.iterateModels(n)}}},{key:"iterateFields",value:function(n){this.iterateModels(function(r){r._fieldMap.forEach(function(a){a._forkMap.forEach(n)})})}},{key:"iterateChecks",value:function(n){this.iterateModels(function(r){r._checkMap.forEach(n)})}},{key:"_getSubModelByShortName",value:function(n){this._updateValueShape(Fe(n));var r=this._subModels[n];return r==null&&(r=new e(null,{modelType:L.subModel,parent:this,name:n}),this._subModels[n]=r),r}},{key:"getCheck",value:function(n){var r=this._checkMap.get(n);return r==null&&(r=new yt(this,n),this._checkMap.set(n,r)),r}},{key:"isDeleted",get:function(){return this._selfDeleted?!0:this._modelType===L.subModel&&this.parent.isDeleted}},{key:"_markDeleted",value:function(){re()(this._modelType===L.subModel,"\u53EA\u6709 subModels \u624D\u5141\u8BB8\u88AB\u5220\u9664."),this.name="(deleted)",this._selfDeleted=!0}}]),e}(),yt=function(){function e(t,n){H()(this,e),f()(this,"isMounted",!1),f()(this,"config",null),f()(this,"parent",void 0),f()(this,"name",void 0),f()(this,"error",void 0),f()(this,"cancelValidation",null),f()(this,"validating",!1),this.parent=t,this.name=n,(0,u.rC)(this,{path:u.Fl,validate:u.aD,error:u.LO,cancelValidation:u.LO.ref,validating:u.LO.ref})}return k()(e,[{key:"path",get:function(){return this.parent.path.concat([this.name])}},{key:"_track",value:function(n){var r=this;if(this.isMounted){console.warn("[xform] check `".concat(this.path.join("."),"` \u5DF2\u5728\u89C6\u56FE\u4E2D\u88AB\u52A0\u8F7D\u3002"));return}return this.config=n,this.isMounted=!0,function(){r.config=null,r.isMounted=!1}}},{key:"validate",value:function(){var t=w()($()().mark(function r(){var a,o=this,l,d,v,c,s;return $()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(this.isMounted){g.next=2;break}return g.abrupt("return");case 2:if(l=this.config.validate,d=!1,(a=this.cancelValidation)===null||a===void 0||a.call(this),this.validating=!0,this.cancelValidation=(0,u.aD)(function(){d=!0,o.cancelValidation=null,o.validating=!1}),v=(0,u.aD)(function(m){if(!d)return o.cancelValidation=null,o.validating=!1,o.error=m,m}),c=this.parent,s=l((0,u.ZN)(c.values),c),typeof(s==null?void 0:s.then)!="function"){g.next=14;break}return g.abrupt("return",Promise.resolve(s).then(v));case 14:return g.abrupt("return",v(s));case 15:case"end":return g.stop()}},r,this)}));function n(){return t.apply(this,arguments)}return n}()}]),e}(),ee=function(){function e(t){var n=this,r;H()(this,e),f()(this,"config",null),f()(this,"isMounted",!1),f()(this,"parent",void 0),f()(this,"name",void 0),f()(this,"_forkName",void 0),f()(this,"_tupleParts",void 0),f()(this,"id",void 0),f()(this,"_forkMap",void 0),f()(this,"fieldType",void 0),f()(this,"_readonlyValue",void 0),f()(this,"state",{}),f()(this,"handleFocus",function(){}),f()(this,"handleBlur",function(){return n.validate("blur")}),f()(this,"handleChange",function(d){var v,c,s;d===void 0&&((v=n.config)===null||v===void 0?void 0:v.defaultValue)!==void 0&&(console.warn("[xform] xform \u4E2D\u6240\u6709\u7EC4\u4EF6\u5747\u4E3A\u53D7\u63A7\u7528\u6CD5\uFF0C\u4E0D\u652F\u6301 onChange(undefined)\uFF0C\u8BE5\u8C03\u7528\u5C06\u81EA\u52A8\u53D8\u4E3A onChange(null)"),d=null),n.value=d;for(var p=arguments.length,g=new Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];return(c=n.config)===null||c===void 0||(s=c.afterChange)===null||s===void 0||s.call.apply(s,[c,d].concat(g)),n.validate("change")}),f()(this,"clear",function(){var d,v;if(!n.isDeleted){var c=n.parent;if((d=(v=n.state).cancelValidation)===null||d===void 0||d.call(v),n.state.error=null,c.values!=null){if(n.fieldType===T.normal)delete c.values[n.name];else if(n.fieldType===T.tuple){var s=ne()(n._tupleParts),p;try{for(s.s();!(p=s.n()).done;){var g=p.value;delete c.values[g]}}catch(m){s.e(m)}finally{s.f()}}}}}),this.fieldType=t.fieldType,this.parent=t.parent,this.name=t.name,this.id=this.parent.root._fieldIdGenerator.getNextId(),this._forkName=(r=t.forkName)!==null&&r!==void 0?r:e.ORIGINAL,t.fieldType===T.tuple?this._tupleParts=t.tupleParts:t.fieldType===T.readonly&&(this._readonlyValue=t.value);var a=this.name,o=this._forkName;if((0,u.rC)(this,{state:u.LO,value:u.Fl,path:u.Fl,validate:u.aD,handleBlur:u.aD,handleChange:u.aD,clear:u.aD,isDeleted:u.Fl},{name:"".concat(this.id,"(").concat(a).concat(o===e.ORIGINAL?"":"#"+o,")")}),o===e.ORIGINAL)this._forkMap=new Map;else{var l=this.parent.getField(a);this._forkMap=l._forkMap}this._forkMap.set(o,this)}return k()(e,[{key:"value",get:function(){var n=this;if(this.fieldType===T.normal)return this.parent.getValue(this.name);if(this.fieldType===T.tuple)return this._tupleParts.map(function(r){return n.parent.getValue(r)});if(this.fieldType===T.readonly)return this._readonlyValue},set:function(n){var r=this;if(this.isDeleted){console.warn("[xform] \u5BF9\u5DF2\u5220\u9664\u7684 Field \u8FDB\u884C\u8D4B\u503C\u5C06\u88AB\u5FFD\u7565\u3002\u8BF7\u4E0D\u8981\u5BF9\u5DF2\u5220\u9664\u7684 Model/Field \u8FDB\u884C\u64CD\u4F5C\u3002");return}this.fieldType===T.normal?this.parent.setValue(this.name,n):this.fieldType===T.tuple?this._tupleParts.forEach(function(a,o){r.parent.setValue(a,n==null?n:n[o])}):this.fieldType===T.readonly&&console.warn("[xform] \u5BF9\u53EA\u8BFB Field \u8FDB\u884C\u8D4B\u503C\u5C06\u88AB\u5FFD\u7565\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u4E3A FormItem \u8BBE\u7F6E\u4E86 props.name \u6216 props.field.")}},{key:"path",get:function(){return this.parent.path.concat([this.name])}},{key:"_track",value:function(n){var r=this;if(this.isMounted){console.warn("[xform] field `".concat(this.path.join("."),"` \u5DF2\u5728\u89C6\u56FE\u4E2D\u88AB\u52A0\u8F7D\uFF0C\u4F60\u9700\u8981 fork \u8BE5\u5B57\u6BB5\u6765\u8FDB\u884C\u591A\u6B21\u52A0\u8F7D."));return}return this.config=n,this.isMounted=!0,function(){r.config=null,r.isMounted=!1}}},{key:"getFork",value:function(n){if(this._forkMap.has(n))return this._forkMap.get(n);var r={parent:this.parent,name:this.name,forkName:n};if(this.fieldType===T.normal)return new e(h()({fieldType:T.normal},r));if(this.fieldType===T.tuple)return new e(h()({fieldType:T.tuple,tupleParts:this._tupleParts},r));if(this.fieldType===T.readonly)return new e(h()({fieldType:T.readonly,value:this._readonlyValue},r))}},{key:"validate",value:function(){var t=w()($()().mark(function r(){var a,o,l=this,d,v,c,s,p,g,m,y,C,W,M,Y,B,N,A,S,z=arguments;return $()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(d=z.length>0&&z[0]!==void 0?z[0]:"*",this.isMounted){V.next=3;break}return V.abrupt("return");case 3:if(v=this.config,c=v.validate,s=v.defaultValue,p=v.isEmpty,g=v.required,m=v.requiredMessage,y=m===void 0?"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879":m,C=v.validateOnMount,W=v.validateOnBlur,M=v.validateOnChange,Y=d==="*"||W&&d==="blur"||C&&d==="mount"||M&&d==="change",Y){V.next=7;break}return V.abrupt("return");case 7:if(B=!1,(a=(o=this.state).cancelValidation)===null||a===void 0||a.call(o),this.state.validating=!0,this.state.cancelValidation=(0,u.aD)(function(){B=!0,l.state.cancelValidation=null,l.state.validating=!1}),N=(0,u.aD)(function(Pe){if(!B)return l.state.cancelValidation=null,l.state.validating=!1,l.state.error=Pe,Pe}),A=(0,u.ZN)(R(this.value,s)),!(g&&p(A))){V.next=15;break}return V.abrupt("return",N(y));case 15:if(!c){V.next=24;break}if(S=c(A,this,d),typeof(S==null?void 0:S.then)!="function"){V.next=21;break}return V.abrupt("return",Promise.resolve(S).then(N));case 21:return V.abrupt("return",N(S));case 22:V.next=25;break;case 24:return V.abrupt("return",N(null));case 25:case"end":return V.stop()}},r,this)}));function n(){return t.apply(this,arguments)}return n}()},{key:"isDeleted",get:function(){return this.parent.isDeleted}}],[{key:"getHtmlId",value:function(n,r){if(!(n==null||typeof n!="string")){var a=r.path.join("."),o=r._forkName!==e.ORIGINAL?"#".concat(r._forkName):"";return"".concat(n).concat(a).concat(o)}}}]),e}();f()(ee,"ORIGINAL","original");var Pt=i(82187),xe=i.n(Pt),de=i(39453),bt=i(34377),Ee=(0,F.createContext)(null);function Q(){return(0,F.useContext)(Ee)}Ee.displayName="ModelContext";var he=Ee.Provider,b=i(52676),It=["children"],Ce=(0,F.createContext)({isPreview:!1,validateOnMount:!1,validateOnBlur:!0,validateOnChange:!0,writeDefaultValueToModel:!1,autoUnmount:!1,variant:"outlined"});Ce.displayName="FormEnvContext";var ae=function(){return(0,F.useContext)(Ce)};function Ne(e){var t=e.children,n=D()(e,It),r=ae();return(0,b.jsx)(Ce.Provider,{value:h()(h()({},r),n),children:t})}var Oe=i(59519),Te=i(41615),Mt=i(73368),Ft=i(74305),xt=i(65669),Et=i(96170),Ct=i(13832),Re=i(95134),Ye=i(96246),Tt=i(66220),Vt=i(52146),Dt=i(17888),x=i.n(Dt),wt=i(50458),At=i.n(wt),St=i(38870),kt=i.n(St),Nt=i(32154),Ot=i.n(Nt),Rt=["value","onChange","picker"],Yt=["value","onChange","format","picker"],$t=["value","onChange","format"],jt=["value","onChange","format"],Lt=["onChange","returnType"];x().extend(Ot()),x().extend(kt()),x().extend(At()),x().__patchedForAntd__||(x().__patchedForAntd__=!0,x().prototype.weekday||(x().prototype.weekday=function(){return this.day()}),x().prototype.localeData||(x().prototype.localeData=function(){return{firstDayOfWeek:function(){return 1},weekdaysShort:function(){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},monthsShort:function(){return"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")}}}));function Wt(e){return!e&&e!==0||Array.isArray(e)&&e.length===0}var $e="HH:mm:ss",je={date:"YYYY-MM-DD",week:"gggg-[W]W",month:"YYYY-MM",quarter:"YYYY-[Q]Q",year:"YYYY"},Le=function(t){return t==null||t===""||Array.isArray(t)&&t.length===2&&!t[0]&&!t[1]},Bt=function(t){return function(n){var r=function(o){var l;(l=n.onChange)===null||l===void 0||l.call(n,o.target.value)};return(0,b.jsx)(t,h()(h()({},n),{},{onChange:r}))}},Gt=function(t){return function(n){var r=n.value,a=n.onChange,o=n.picker,l=D()(n,Rt),d=(0,F.useMemo)(function(){if(r)if(o==="week"){var c=r.split("-"),s=X()(c,2),p=s[0],g=s[1],m=parseInt(g,10);if(p&&!isNaN(m))return x()().year(parseInt(p,10)).week(m).startOf("week")}else return o==="month"?x()(r,"YYYY-MM"):o==="quarter"?x()(r,"YYYY-[Q]Q"):o==="year"?x()(r,"YYYY"):x()(r)},[r,o]),v=(0,F.useCallback)(function(c,s){if(!c||!c.isValid()){a==null||a(null);return}var p;if(o==="week"){var g=c.year(),m=c.week();p="".concat(g,"-").concat(m)}else o==="month"?p=c.format("YYYY-MM"):o==="quarter"?p=c.format("YYYY-Q"):o==="year"?p=c.format("YYYY"):p=c.format("YYYY-MM-DD");a==null||a(p)},[a,o]);return(0,b.jsx)(t,h()(h()({},l),{},{picker:o,value:d,onChange:v}))}},Ut=function(t){return function(n){var r,a=n.value,o=n.onChange,l=n.format,d=n.picker,v=d===void 0?"date":d,c=D()(n,Yt),s=l||je[v]||je.date,p=(0,F.useMemo)(function(){if(Le(a)||!Array.isArray(a))return null;var m=X()(a,2),y=m[0],C=m[1];if(Le([y,C]))return null;var W=function(S,z){if(!S)return null;switch(z){case"week":{var j=S.match(/^(\d{4})-?W?(\d+)$/i);if(!j)return null;var V=parseInt(j[1],10),Pe=parseInt(j[2],10);return x()().year(V).week(Pe).startOf("week")}case"month":return x()(S,"YYYY-MM",!0);case"quarter":{var we=S.match(/^(\d{4})-?Q?([1-4])$/i);if(!we)return null;var Fn=parseInt(we[1],10),xn=parseInt(we[2],10),En=(xn-1)*3;return x()("".concat(Fn,"-").concat(String(En+1).padStart(2,"0"),"-01"),"YYYY-MM-DD",!0)}case"year":return x()(S,"YYYY",!0);case"date":default:return x()(S,s,!0)}},M=W(y,v),Y=W(C,v),B=M&&M.isValid(),N=Y&&Y.isValid();return!B&&!N?null:[B?M:null,N?Y:null]},[a,v,s]),g=(0,F.useCallback)(function(m,y){if(!m||!m[0]&&!m[1]){o==null||o(null);return}var C=X()(m,2),W=C[0],M=C[1],Y=function(A,S){if(!A||!A.isValid())return"";switch(S){case"week":return"".concat(A.year(),"-W").concat(A.week());case"month":return A.format("YYYY-MM");case"quarter":{var z=A.year(),j=Math.floor(A.month()/3)+1;return"".concat(z,"-Q").concat(j)}case"year":return A.format("YYYY");case"date":default:return A.format(s)}},B=[Y(W,v),Y(M,v)];!B[0]&&!B[1]?o==null||o(null):o==null||o(B)},[o,v,s]);return(0,b.jsx)(t,h()(h()({},c),{},{picker:v,format:s,value:p,onChange:g,allowClear:(r=c.allowClear)!==null&&r!==void 0?r:!0}))}},Ht=function(t){return function(n){var r=n.value,a=n.onChange,o=n.format,l=o===void 0?$e:o,d=D()(n,$t),v=(0,F.useMemo)(function(){if(r){var s=String(r).trim();if(s){var p=x()(s,l,!0);return p.isValid()?p:void 0}}},[r,l]),c=(0,F.useCallback)(function(s,p){if(!s||!s.isValid()){a==null||a(null);return}var g=s.format(l);a==null||a(g)},[a,l]);return(0,b.jsx)(t,h()(h()({},d),{},{format:l,value:v,onChange:c}))}},Zt=function(t){return function(n){var r=n.value,a=n.onChange,o=n.format,l=o===void 0?$e:o,d=D()(n,jt),v=(0,F.useMemo)(function(){if(!(!r||!Array.isArray(r))){var s=X()(r,2),p=s[0],g=s[1];if(!(!p&&!g)){var m=p?x()(p,l,!0):null,y=g?x()(g,l,!0):null,C=m&&m.isValid(),W=y&&y.isValid();if(!(!C&&!W))return[C?m:null,W?y:null]}}},[r,l]),c=(0,F.useCallback)(function(s,p){if(!s){a==null||a(null);return}var g=X()(s,2),m=g[0],y=g[1],C=[m!=null&&m.isValid()?m.format(l):"",y!=null&&y.isValid()?y.format(l):""];!C[0]&&!C[1]?a==null||a(null):a==null||a(C)},[a,l]);return(0,b.jsx)(t,h()(h()({},d),{},{format:l,value:v,onChange:c}))}},Xt=function(t){return function(n){var r=F.forwardRef(function(a,o){var l=h()(h()({},t),a);return(0,b.jsx)(n,h()({ref:o},l))});return r.displayName="WithInjectedProps(".concat(n.displayName||n.name,")"),r}},zt=function(t){return function(n){var r=n.onChange,a=n.returnType,o=a===void 0?"hex":a,l=D()(n,Lt),d=function(c){if(r){var s;switch(o){case"hex":s=c.toHexString();break;case"rgb":s=c.toRgbString();break;case"hsv":var p=c.toHsb();s="hsv(".concat(p.h,", ").concat(p.s*100,"%, ").concat(p.b*100,"%)");break;default:s=c.toHexString()}r(s)}};return(0,b.jsx)(t,h()(h()({},l),{},{onChange:d}))}},te=function(t){return t!=null&&t!==""?"".concat(t):"--"},We=function(t){return t?x()(t).format("YYYY-MM-DD"):"--"},Be=function(t){return!Array.isArray(t)||!t[0]||!t[1]?"--":"".concat(x()(t[0]).format("YYYY-MM-DD")," ~ ").concat(x()(t[1]).format("YYYY-MM-DD"))},Ge=function(t){return t?x()(t).format("HH:mm:ss"):"--"},Ue=function(t){return!Array.isArray(t)||!t[0]||!t[1]?"--":"".concat(x()(t[0]).format("HH:mm")," ~ ").concat(x()(t[1]).format("HH:mm"))},Ve=function(t){return Array.isArray(t)&&t.length>0?t.join(", "):"--"},He=function(t){return typeof t=="boolean"?t?"\u662F":"\u5426":"--"},Ze=function(t){return typeof t=="number"?"\u2605".repeat(t)+"\u2606".repeat(5-t):"--"},Xe=function(t){return t?(0,b.jsx)("span",{style:{display:"inline-block",width:16,height:16,border:"1px solid #ddd",backgroundColor:t,borderRadius:3}}):"--"},Cn={useValueToPreview:te,useDatePreview:We,useDateRangePreview:Be,useTimePreview:Ge,useTimeRangePreview:Ue,useMultiplePreview:Ve,useBooleanPreview:He,useRatePreview:Ze,useColorPreview:Xe},ze={input:Oe.Z,textArea:Oe.Z.TextArea,select:Te.default,singleSelect:Te.default,multiSelect:Te.default,radio:Mt.ZP.Group,checkbox:Ft.Z.Group,inputNumber:xt.Z,slider:Et.Z,switch:Ct.Z,datePicker:Re.default,dateRangePicker:Re.default.RangePicker,timePicker:Ye.Z,timeRangePicker:Ye.Z.RangePicker,rate:Tt.Z,colorPicker:Vt.Z},Kt={input:"",textArea:"",select:"",singleSelect:"",multiSelect:[],radio:"",checkbox:[],inputNumber:null,slider:null,switch:!1,datePicker:null,dateRangePicker:null,timePicker:null,timeRangePicker:null,rate:0,colorPicker:""},Jt={input:{hocs:["valueChange"],renderPreview:te,hasIntrinsicWidth:!1},textArea:{hocs:["valueChange"],renderPreview:te,hasIntrinsicWidth:!0},select:{hocs:[],renderPreview:te,hasIntrinsicWidth:!0},singleSelect:{hocs:[],renderPreview:te,hasIntrinsicWidth:!0},multiSelect:{hocs:["multiSelect"],renderPreview:Ve,hasIntrinsicWidth:!0},radio:{hocs:["valueChange"],renderPreview:te,hasIntrinsicWidth:!1},checkbox:{hocs:[],renderPreview:Ve,hasIntrinsicWidth:!1},inputNumber:{hocs:["valueChange"],renderPreview:te,hasIntrinsicWidth:!1},slider:{hocs:["valueChange"],renderPreview:te,hasIntrinsicWidth:!1},switch:{hocs:["valueChange"],renderPreview:He,hasIntrinsicWidth:!1},datePicker:{hocs:["dayjsDate"],renderPreview:We,hasIntrinsicWidth:!0},dateRangePicker:{hocs:["dayjsDateRange"],renderPreview:Be,hasIntrinsicWidth:!0},timePicker:{hocs:["dayjsTime"],renderPreview:Ge,hasIntrinsicWidth:!0},timeRangePicker:{hocs:["dayjsTimeRange"],renderPreview:Ue,hasIntrinsicWidth:!0},rate:{hocs:[],renderPreview:Ze,hasIntrinsicWidth:!1},colorPicker:{hocs:["colorPicker"],renderPreview:Xe,hasIntrinsicWidth:!1}},Qt=Object.keys(ze).map(function(e){var t=ze[e],n=Jt[e];return n.hocs.forEach(function(r){switch(r){case"valueChange":t=Bt(t);break;case"dayjsDate":t=Gt(t);break;case"dayjsDateRange":t=Ut(t);break;case"dayjsTime":t=Ht(t);break;case"dayjsTimeRange":t=Zt(t);break;case"multiSelect":t=Xt({mode:"multiple"})(t);break;case"colorPicker":t=zt(t);break}}),{name:e,component:t,defaultValue:Kt[e],isEmpty:Wt,hasIntrinsicWidth:n.hasIntrinsicWidth,renderPreview:function(a){return n.renderPreview(a.value)}}}),qt=["defaultValue","isEmpty","renderPreview","componentProps","name","field"],_t=["$Component"],en=["use","component"];function tn(e){var t,n,r,a=(t=e.render)!==null&&t!==void 0?t:function(o){return F.createElement(e.component,o)};return{name:e.name,hidden:e.hidden,withField:!!e.withField,statusPropName:R(e.statusPropName,"state"),valuePropName:R(e.valuePropName,"value"),hasIntrinsicWidth:e.hasIntrinsicWidth!==!1,defaultValue:Object.keys(e).includes("defaultValue")?e.defaultValue:null,isEmpty:(n=e.isEmpty)!==null&&n!==void 0?n:ft,render:a,renderPreview:(r=e.renderPreview)!==null&&r!==void 0?r:a}}function nn(e,t,n,r){var a;return e!=null?a=e:n==="&"?a=t._asField():n!=null?a=t.getField(n):a=new ee({fieldType:T.readonly,value:r,name:"(readonly)",forkName:ee.ORIGINAL,parent:t}),a}function Ke(e){var t=e.htmlId,n=e.label,r=n===void 0?"":n,a=e.help,o=e.tip,l=e.asterisk,d=e.error,v=e.children,c=e.className,s=e.style,p=e.labelWidth,g=e.controlWidth,m=e.rightNode,y=e.labelStyle,C=e.controlStyle;return(0,b.jsxs)("div",{"data-xform-id":t,className:xe()("form-item",c),style:h()({"--label-width":se(p),"--control-width":se(g)},s),children:[r==null&&o==null?null:(0,b.jsxs)("label",{className:"form-item-label",htmlFor:t,style:y,children:[l&&(0,b.jsx)("span",{className:"required-indicator"}),r&&(0,b.jsx)("span",{className:"form-item-label-text",children:r})]}),(0,b.jsxs)("div",{className:"form-item-control",style:C,children:[v,a&&(0,b.jsx)("div",{className:"help",children:a}),d&&(0,b.jsx)("div",{className:"error-message",children:d})]}),m]})}function me(e){var t=tn(e);function n(r){var a,o=r.defaultValue,l=r.isEmpty,d=l===void 0?t.isEmpty:l,v=r.renderPreview,c=v===void 0?t.renderPreview:v,s=r.componentProps,p=r.name,g=r.field,m=D()(r,qt),y=ae(),C=Q(),W=y.variant,M=nn(g,C,p,m.value),Y=R(m.isPreview,y.isPreview),B=R(m.error,M.state.error),N=R(o,t.defaultValue),A=(0,u.ZN)(R(M.value,N)),S=ee.getHtmlId(y.htmlIdPrefix,M),z=h()(h()(h()(h()({id:S,variant:W},Y?{isPreview:!0}:null),ht(m,["dataSource","readOnly","disabled","options"])),s),{},f()(f()(f()(f()(f()({},t.statusPropName,R(s==null?void 0:s[t.statusPropName],R(m[t.statusPropName],B?"error":void 0))),t.valuePropName,R(m[t.valuePropName],A)),"onChange",R(m.onChange,M.handleChange)),"onFocus",R(m.onFocus,M.handleFocus)),"onBlur",R(m.onBlur,M.handleBlur)));t.withField&&(z.field=M);var j=h()({htmlId:S,valueProp:m[t.valuePropName],defaultValue:N,defaultValueProp:o,isEmpty:d,validateOnChange:y.validateOnChange,validateOnBlur:y.validateOnBlur,validateOnMount:y.validateOnMount,writeDefaultValueToModel:y.writeDefaultValueToModel,autoUnmount:y.autoUnmount},m);return(0,F.useLayoutEffect)(function(){return M._track(j)}),(0,F.useLayoutEffect)(function(){return j.writeDefaultValueToModel==="force"?(0,u.U5)(function(){return M.value},function(){M.value===void 0&&j.defaultValueProp!==void 0&&(M.value=j.defaultValueProp)},{fireImmediately:!0}):(j.writeDefaultValueToModel&&M.value===void 0&&j.defaultValueProp!==void 0&&(0,u.z)(function(){M.value=j.defaultValueProp}),function(){j.autoUnmount&&M.clear()})},[]),(0,F.useEffect)(function(){if(j.validateOnMount){M.validate("mount");var V=M.state.cancelValidation;return function(){V==null||V()}}},[]),t.hidden&&m.renderHiddenFormItemView===!1?null:(0,b.jsx)(Ke,{htmlId:S,label:m.label,help:m.help,asterisk:(a=m.asterisk)!==null&&a!==void 0?a:m.required,error:B,tip:m.tip,style:m.style,className:xe()(m.className,{"form-item-hidden":t.hidden,"form-item-preview":Y,"auto-control-width":t.hasIntrinsicWidth}),labelWidth:m.labelWidth,labelStyle:m.labelStyle,controlWidth:m.controlWidth,controlStyle:m.controlStyle,rightNode:m.rightNode,children:Y?c(z):t.render(z)})}return n.displayName="FormItem__".concat(t.name),(0,de.Pi)(n)}var Je={},pe=ne()(Qt),Qe;try{for(pe.s();!(Qe=pe.n()).done;){var qe=Qe.value,rn=me(qe);Je[qe.name]=rn}}catch(e){pe.e(e)}finally{pe.f()}var an=me({name:"anonymous",render:function(t){var n=t.$Component,r=D()(t,_t);return(0,b.jsx)(n,h()({},r))}}),_e=me({name:"notFound",isEmpty:function(){return!1},render:function(t){var n=t.$Component;return(0,b.jsxs)("div",{style:{border:"1px dashed red",fontSize:14,padding:4,color:"red"},children:[(0,b.jsxs)("code",{children:["<FormItem component='",n,"' />"]})," ","\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7EC4\u4EF6\uFF0C\u8BF7\u68C0\u67E5\u7EC4\u4EF6\u540D\u79F0\u662F\u5426\u62FC\u5199\u6B63\u786E"]})}}),on=me({name:"hidden",hidden:!0,hasIntrinsicWidth:!1,defaultValue:void 0,isEmpty:function(){return!1},render:function(t){var n=t.id,r=t.value;return(0,b.jsx)("input",{type:"hidden",value:(0,bt.Z)(r),id:n})}});function ln(e){var t=e.use,n=e.component,r=D()(e,en),a=ae(),o=a.variant;if(t===!1)return null;if(n==null)return(0,b.jsx)(_e,h()(h()({},r),{},{componentProps:{$Component:String(n)}}));if(typeof n=="string"){if(n==="hidden")return(0,b.jsx)(on,h()({},r));var l=Je[n];return l==null?(0,b.jsx)(_e,h()(h()({},r),{},{componentProps:{$Component:n}})):F.createElement(l,h()(h()({},r),{},{componentProps:h()(h()({},r.componentProps),{},{variant:o})}))}else return(0,b.jsx)(an,h()(h()({},r),{},{componentProps:h()(h()({},r.componentProps),{},{variant:o,$Component:n})}))}function fe(e){re()(e._valueShape==="auto"||e._valueShape==="array",'arrayModel._valueShape should be "auto" or "array"')}function ge(e){e._subModels.forEach(function(t,n){t.name=String(n)})}function et(e,t,n){if(e!=null){var r=e.splice(t,1),a=X()(r,1),o=a[0];e.splice(n,0,o)}}function ye(e,t,n){if(e!=null){var r=e[t];e[t]=e[n],e[n]=r}}var tt={append:(0,u.aD)(function(e,t){e.values==null&&(e.values=[]);var n=R(typeof t=="function"?t(e):t,{});e.values.push(n)}),delete:(0,u.aD)(function(e,t){if(fe(e),Array.isArray(e.values)&&e.values.splice(t,1),Array.isArray(e._subModels)){var n=e._subModels.splice(t,1),r=X()(n,1),a=r[0];a._markDeleted(),ge(e)}}),moveUp:(0,u.aD)(function(e,t){fe(e),t!==0&&(Array.isArray(e.values)&&ye(e.values,t,t-1),Array.isArray(e._subModels)&&(ye(e._subModels,t,t-1),ge(e)))}),moveDown:(0,u.aD)(function(e,t){if(fe(e),Array.isArray(e.values)){if(t===e.values.length-1)return;ye(e.values,t,t+1)}Array.isArray(e._subModels)&&(ye(e._subModels,t,t+1),ge(e))}),clear:(0,u.aD)(function(e){fe(e),!(e.values==null||e.values.length===0)&&(e.values=[],Array.isArray(e)&&(e._subModels.forEach(function(t){t._markDeleted()}),e._subModels.length=0))}),move:(0,u.aD)(function(e,t,n){fe(e),Array.isArray(e.values)&&et(e.values,t,n),Array.isArray(e._subModels)&&(et(e._subModels,t,n),ge(e))}),renderArrayItem:function(t,n,r){var a=t.getSubModel(n);return(0,b.jsx)(Z.ModelProvider,{value:a,children:r(n,a)},a.id)},getKey:function(t,n){return t.getSubModel(n).id}},un=function(t){var n=t.arrayModel,r=t.itemContent,a=t.itemCount;return vt(a).map(function(o){return tt.renderArrayItem(n,o,r)})},sn=(0,de.Pi)(function(e){var t,n,r=e.name,a=e.children,o=e.layout,l=e.arrayModel,d=e.use,v=Q();if(d===!1)return null;var c=l!=null?l:r==="&"?v:v.getSubModel(r),s=(t=(n=c.values)===null||n===void 0?void 0:n.length)!==null&&t!==void 0?t:0,p=typeof a=="function"?a:function(){return a};return(0,b.jsx)(he,{value:c,children:(o!=null?o:un)({arrayModel:c,itemCount:s,itemContent:p})})}),dn=(0,de.Pi)(function(t){var n=t.name,r=t.check,a=t.validate,o=t.watch,l=o===void 0?[]:o,d=t.validateOnMount,v=t.renderError,c=t.deps,s=c===void 0?[]:c,p=ae(),g=Q(),m=R(r,g.getCheck(n)),y={validateOnMount:d!=null?d:p.validateOnMount,validate:a};return(0,F.useLayoutEffect)(function(){return m._track(y)}),(0,F.useEffect)(function(){return(0,u.U5)(Se(l,g),function(){m.validate()},{fireImmediately:y.validateOnMount})},[m,g].concat(U()(s))),v===!0?m.error:typeof v=="function"?v(m.error):null}),oe={clearError:(0,u.aD)(function(e){e.iterateFields(function(t){t.state.error=null}),e.iterateChecks(function(t){t.error=null})}),scrollToFirstError:function(t){var n=ne()(t),r;try{for(n.s();!(r=n.n()).done;){var a,o=r.value;if((a=o.config)!==null&&a!==void 0&&a.htmlId){var l=document.querySelector('*[data-xform-id="'.concat(o.config.htmlId,'"]'));if(l){typeof l.scrollIntoViewIfNeeded=="function"?l.scrollIntoViewIfNeeded():l.scrollIntoView({block:"nearest"});return}}}}catch(d){n.e(d)}finally{n.f()}},animateErrorFields:function(t){var n=ne()(t),r;try{for(n.s();!(r=n.n()).done;){var a,o=r.value;if((a=o.config)!==null&&a!==void 0&&a.htmlId){var l=document.querySelector('*[data-xform-id="'.concat(o.config.htmlId,'"]'));l&&l.animate([{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],{duration:750})}}}catch(d){n.e(d)}finally{n.f()}},validateAll:(0,u.aD)(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"*",n=!1,r=(0,u.LO)(e._valueShape==="array"?[]:{}),a=[],o=[];return e.iterateFields(function(l){l.isMounted&&o.push(l.validate(t).then((0,u.aD)(function(d){d&&(n=!0,_(r,l.path,d),a.push(l))})))}),e.iterateChecks(function(l){o.push(l.validate().then((0,u.aD)(function(d){d&&(n=!0,_(r,l.path,d))})))}),Promise.all(o).then(function(){return{hasError:n,errors:(0,u.ZN)(r),errorFields:a}})}),submit:(0,u.aD)(function(){var e=w()($()().mark(function t(n){var r,a,o,l,d,v,c,s,p,g,m,y,C,W,M,Y=arguments;return $()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return r=Y.length>1&&Y[1]!==void 0?Y[1]:{},a=r.onError,o=r.onSubmit,l=r.valueFilter,d=l===void 0?"mounted":l,v=r.mergeDefaultValue,c=v===void 0?!0:v,s=r.animateErrorFields,p=s===void 0?!1:s,g=r.scrollToFirstError,m=g===void 0?!0:g,N.next=4,oe.validateAll(n);case 4:y=N.sent,C=y.hasError,W=y.errors,M=y.errorFields,C?(m&&oe.scrollToFirstError(M),p&&oe.animateErrorFields(M),a==null||a(W,n)):typeof o=="function"&&(0,u.z)(function(){var A=(0,u.LO)(d==="all"?(0,u.ZN)(n.values):n._valueShape==="array"?[]:{});De(A,n,{mergeDefaultValue:c}),o((0,u.ZN)(A),n)});case 9:case"end":return N.stop()}},t)}));return function(t){return e.apply(this,arguments)}}()),reset:(0,u.aD)(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.onReset;e.values={},oe.clearError(e),n==null||n(e)}),acceptValuesFormView:(0,u.aD)(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};De(e.values,e,t)}),mergeValuesFromViewToView:De};function De(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.mergeDefaultValue,a=r===void 0?!0:r;t.iterateFields(function(o){if(o.isMounted){if(o.fieldType===T.normal)if(o.config.valueProp!==void 0)_(e,o.path,o.config.valueProp);else if(o.value!==void 0)_(e,o.path,o.value);else{var l=o.config.defaultValueProp;a&&l!==void 0&&_(e,o.path,l)}else if(o.fieldType===T.tuple){var d=o.parent,v=o.value.some(function(s){return s!==void 0});if(v)o._tupleParts.map(function(s,p){_(e,[].concat(U()(d.path),[s]),o.value[p])});else{var c=o.config.defaultValueProp;a&&c!==void 0&&o._tupleParts.map(function(s,p){_(e,[].concat(U()(d.path),[s]),c==null?void 0:c[p])})}}}})}var cn=["ButtonComponent","children"];function mn(e){var t=e.ButtonComponent,n=e.children,r=n===void 0?"\u63D0\u4EA4":n,a=D()(e,cn),o=Q(),l=ae();return(0,b.jsx)(t,h()(h()({},a),{},{onClick:(0,u.aD)(function(){return oe.reset(o,l)}),children:r},a))}var fn=i(53649),vn=i.n(fn),hn=i(52413),nt,pn=hn.ZP.div(nt||(nt=vn()([`
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
`])));function rt(e){var t=e.children,n=e.className,r=e.style,a=e.labelPosition,o=a===void 0?"left":a,l=e.labelWidth,d=l===void 0?o==="left"?120:"auto":l,v=e.formItemGap,c=v===void 0?o==="left"?12:16:v,s=e.controlWidth,p=s===void 0?320:s,g=e.defaultLabelTopPosition,m=g===void 0?4:g,y=e.inlineError,C=e.containerProps;return(0,b.jsx)(pn,h()(h()({style:h()({"--label-width":se(d),"--control-width":se(p),"--form-item-gap":se(c),"--form-item-label-top-position":se(m)},r),className:xe()("xform-container",{horizontal:o==="left",vertical:o==="top","inline-error":o==="top"&&y},n)},C),{},{children:t}))}var gn=["ButtonComponent","children"];function yn(e){var t=e.ButtonComponent,n=e.children,r=n===void 0?"\u63D0\u4EA4":n,a=D()(e,gn),o=Q(),l=ae(),d=l.onSubmit,v=l.onError,c={onSubmit:d,onError:v};return(0,b.jsx)(t,h()(h()({},a),{},{onClick:function(){return oe.submit(o,c)},children:r},a))}var Pn=(0,de.Pi)(function(t){var n=t.watch,r=t.effect,a=t.fireImmediately,o=t.deps,l=o===void 0?[]:o,d=t.equals,v=Q(),c=(0,F.useRef)(r);return(0,F.useEffect)(function(){c.current=r}),(0,F.useEffect)(function(){return(0,u.U5)(Se(n,v),function(s,p){c.current(s,{model:v,prev:p,next:s})},{fireImmediately:a,equals:d})},l),null}),bn=(0,de.Pi)(function(e){var t=e.name,n=e.children,r=e.use,a=Q();if(r===!1)return null;var o=t==="&"?a:a.getSubModel(t);return(0,b.jsx)(he,{value:o,children:n})}),In=(0,de.Pi)(function(e){var t=e.children,n=Q();return t(n)}),Mn=["model","defaultValue","children","className","style","layout","containerProps","htmlIdPrefix","variant"];function Z(e){var t=e.model,n=e.defaultValue,r=e.children,a=e.className,o=e.style,l=e.layout,d=e.containerProps,v=e.htmlIdPrefix,c=e.variant,s=D()(e,Mn),p=(0,F.useState)(function(){return new ve(n)}),g=X()(p,1),m=g[0],y=R(t,m),C=mt(v);return(0,b.jsx)(Ne,h()(h()({htmlIdPrefix:C,variant:c},s),{},{children:(0,b.jsx)(he,{value:y,children:(0,b.jsx)(rt,h()(h()({style:o,className:a,containerProps:d},l),{},{children:r}))})}))}Z.Array=sn,Z.Check=dn,Z.Effect=Pn,Z.Object=bn,Z.Submit=yn,Z.Layout=rt,Z.ItemView=Ke,Z.ModelProvider=he,Z.ModelConsumer=In,Z.FormReset=mn},83534:function(q,E,i){i.r(E),i.d(E,{texts:function(){return O}});const O=[{value:`
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
  `,paraId:0}]},75254:function(q,E,i){i.r(E),i.d(E,{texts:function(){return O}});const O=[{value:"react-antd-xform",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u57FA\u4E8E MobX \u548C Ant Design \u7684\u52A8\u6001\u8868\u5355\u89E3\u51B3\u65B9\u6848\uFF0C\u63D0\u4F9B JSON Schema \u9A71\u52A8\u3001\u8868\u5355\u8054\u52A8\u548C\u590D\u6742\u6821\u9A8C\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u9009\u62E9\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668\u8FDB\u884C\u5B89\u88C5\uFF1A",paraId:1,tocIndex:1},{value:`# npm
npm install react-antd-xform --save

# yarn
yarn add react-antd-xform

# pnpm
pnpm add react-antd-xform
`,paraId:2,tocIndex:1}]},93435:function(q,E,i){i.r(E),i.d(E,{texts:function(){return O}});const O=[{value:"react-antd-xform",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u57FA\u4E8E MobX \u548C Ant Design \u7684\u52A8\u6001\u8868\u5355\u89E3\u51B3\u65B9\u6848\uFF0C\u63D0\u4F9B JSON Schema \u9A71\u52A8\u3001\u8868\u5355\u8054\u52A8\u548C\u590D\u6742\u6821\u9A8C\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u4F60\u9700\u8981\u77E5\u9053\u5982\u4F55\u4F7F\u7528",paraId:0,tocIndex:0},{value:"mobx",paraId:0,tocIndex:0},{value:"\u8FDB\u884C\u6570\u636E\u7BA1\u7406\u3002",paraId:0,tocIndex:0},{value:"\u65E0\u7F1D\u5BF9\u63A5 mobx,\u8868\u5355\u5185\u6838\u5B8C\u5168\u91C7\u7528 mobx \u63D0\u4F9B\u7684\u6570\u636E\u7ED3\u6784\u3002",paraId:1,tocIndex:1},{value:"\u8868\u5355\u7EC4\u4EF6\u683C\u5F0F\u5B9A\u5236\u5316\u914D\u7F6E\uFF0C\u66F4\u9002\u5408\u4F4E\u4EE3\u7801/\u96F6\u4EE3\u7801\u5E73\u53F0\u3002",paraId:1,tocIndex:1},{value:"\u6982\u5FF5\u7CBE\u7B80\uFF0C\u4E0A\u624B\u8F7B\u677E\u3002",paraId:1,tocIndex:1},{value:"\u57FA\u4E8E\u53CC\u5411\u7ED1\u5B9A\u6A21\u578B\uFF0C\u63D0\u4F9B\u7075\u6D3B\u7684\u3001\u7B26\u5408\u76F4\u89C9\u7684\u62BD\u8C61\u3002",paraId:1,tocIndex:1},{value:"\u9AD8\u6027\u80FD\u3002",paraId:1,tocIndex:1},{value:"\u501F\u52A9 mobx \u4F9D\u8D56\u6536\u96C6\u673A\u5236\uFF0C\u5B9E\u73B0\u8868\u5355\u7EC4\u4EF6\u7684\u7CBE\u786E\u66F4\u65B0\uFF0C[\u5927\u6570\u636E\u91CF\u573A\u666F\u4E0B\u4EA4\u4E92\u4F9D\u65E7\u6D41\u7545]\u3002",paraId:1,tocIndex:1},{value:"react-antd-xform",paraId:2,tocIndex:3},{value:" \u91C7\u7528\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406\u9A71\u52A8UI\u66F4\u65B0\uFF0C\u4F7F\u5F97\u8868\u5355\u7EC4\u4EF6\u7684\u66F4\u65B0\u66F4\u52A0\u7CBE\u786E\u3002",paraId:2,tocIndex:3},{value:"\u76F8\u8F83\u4E8Eantd form\uFF0C\u5927\u5927\u7B80\u5316\u8868\u5355\uFF0C\u65E0\u9700\u8FC7\u591A\u5D4C\u5957\uFF0C\u4E14\u652F\u6301\u901A\u8FC7\u4F20\u5165component\u65B9\u5F0F\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6\u3002",paraId:3,tocIndex:4}]},63312:function(q,E,i){i.r(E),i.d(E,{texts:function(){return O}});const O=[]}}]);
