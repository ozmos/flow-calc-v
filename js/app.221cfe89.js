(function(t){function e(e){for(var n,r,l=e[0],i=e[1],u=e[2],f=0,p=[];f<l.length;f++)r=l[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,l=1;l<s.length;l++){var i=s[l];0!==o[i]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},o={app:0},a=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/flow-calc-v/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=i;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0ff5":function(t,e,s){},"2fdb":function(t,e,s){"use strict";s("eefd")},"352c":function(t,e,s){},3792:function(t,e,s){"use strict";s("0ff5")},"56d7":function(t,e,s){"use strict";s.r(e),s.d(e,"bus",(function(){return ct}));s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container is-max-desktop",attrs:{id:"app"}},[s("Calculator")],1)},a=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("CalcHeader",{attrs:{title:t.title,subtitle:t.subtitle}}),s("article",{directives:[{name:"show",rawName:"v-show",value:!t.flowIsSet,expression:"!flowIsSet"}],staticClass:"card-content has-background-light",attrs:{id:"flow-settings"}},[s("FlowSettings",{attrs:{pressureRange:t.pressureRange,flowRange:t.flowRange,pressure:t.pressure,flow:t.flow}})],1),s("DisplaySettings",{directives:[{name:"show",rawName:"v-show",value:t.flowIsSet,expression:"flowIsSet"}],attrs:{flow:t.flow,pressure:t.pressure},on:{toggle:t.toggleMenu}}),s("Sidebar",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],attrs:{pressureRange:t.pressureRange,flowRange:t.flowRange,pressure:t.pressure,flow:t.flow,info:{name:"Rainbird 3500 series",description:"gear drive sprinkler"}},on:{toggle:t.toggleMenu}}),s("NozzleDisplay",{directives:[{name:"show",rawName:"v-show",value:t.flowIsSet,expression:"flowIsSet"}],attrs:{nozzles:t.currentNozzleData,flow:t.flow}})],1)},l=[],i=(s("b64b"),s("d3b7"),s("25f0"),{170:{.75:{throw:4.6,flow:2.04},"1.0":{throw:6.1,flow:2.91},1.5:{throw:7,flow:4.01},"2.0":{throw:8.2,flow:5.3},"3.0":{throw:8.8,flow:8.21},"4.0":{throw:9.4,flow:11.24}},200:{.75:{throw:4.8,flow:2.24},"1.0":{throw:6.2,flow:3.14},1.5:{throw:7,flow:4.35},"2.0":{throw:8.2,flow:5.74},"3.0":{throw:9.1,flow:8.87},"4.0":{throw:9.7,flow:12.17}},250:{.75:{throw:5.2,flow:2.58},"1.0":{throw:6.4,flow:3.55},1.5:{throw:7,flow:4.94},"2.0":{throw:8.2,flow:6.51},"3.0":{throw:9.4,flow:11.13},"4.0":{throw:10.6,flow:15.32}}}),u=i,c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"card-content has-background-primary p-3",attrs:{id:"calc-header"}},[s("h1",{staticClass:"title is-size-5"},[t._v(" "+t._s(t.title)+" ")]),s("p",{staticClass:"subtitle is-size-7"},[t._v(" "+t._s(t.subtitle)+" ")])])},f=[],p={props:{title:{type:String},subtitle:{type:String}}},d=p,h=s("2877"),w=Object(h["a"])(d,c,f,!1,null,"5a0c9e5c",null),m=w.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"field",attrs:{id:"flow"}},[s("label",{staticClass:"label"},[t._v("Flow rate")]),s("div",{staticClass:"control is-flex is-align-items-center",attrs:{id:"flow"}},[s("NumberInput",{attrs:{min:t.flowRange.min,max:t.flowRange.max,value:t.flow},on:{changeCount:t.updateFlow},model:{value:t.localFlow,callback:function(e){t.localFlow=e},expression:"localFlow"}}),s("span",{staticClass:"is-right ml-1"},[t._v("Lpm")])],1)]),s("div",{staticClass:"field",attrs:{id:"pressure"}},[s("label",{staticClass:"label"},[t._v("Pressure")]),s("div",{staticClass:"control has-icons-right is-flex is-align-items-center"},[s("div",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.localPressure,expression:"localPressure"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.localPressure=e.target.multiple?s:s[0]}}},t._l(t.pressureRange,(function(e,n){return s("option",{key:n},[t._v(t._s(e))])})),0)]),s("span",{staticClass:"is-right ml-1"},[t._v("kpa")])])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-link",on:{click:t.set}},[t._v("Set")])])])])},b=[],g=(s("a9e3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"number-input is-flex is-flex-wrap-nowrap is-align-items-center is-justify-content-center"},[s("span",{staticClass:"plus-minus button has-text-weight-bold is-success",on:{click:function(e){return t.adjust(-1)}}},[t._v("-")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],staticClass:"has-text-centered",attrs:{type:"number",min:t.min,max:t.max},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}}),s("span",{staticClass:"plus-minus button has-text-weight-bold is-success",on:{click:function(e){return t.adjust(1)}}},[t._v("+")])])}),_=[],C={props:{value:{type:Number,default:0},min:{type:Number,default:0},max:Number},data:function(){return{count:this.value}},methods:{adjust:function(t){this.count=parseInt(t,10)+parseInt(this.count,10),this.$emit("changeCount",this.count)},reset:function(){this.count=0,this.$emit("changeCount",this.count)}}},y=C,z=(s("c9a1"),Object(h["a"])(y,g,_,!1,null,null,null)),x=z.exports,N={components:{NumberInput:x},props:{flow:{type:Number},pressureRange:{type:Array},flowRange:{type:Object}},data:function(){return{localFlow:this.flow,localPressure:this.pressureRange[0]}},methods:{updateFlow:function(t){this.localFlow=t},set:function(){ct.$emit("set",this.localFlow,this.localPressure)}}},S=N,k=(s("a2ed"),Object(h["a"])(S,v,b,!1,null,"398a33cc",null)),j=k.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slideLeft"}},[s("div",{staticClass:"card-content is-paddingless",attrs:{id:"display-settings"}},[s("div",{staticClass:"level is-mobile p-2"},[s("div",{staticClass:"level-item"},[s("span",{staticClass:"has-text-weight-bold is-block"},[t._v(t._s(t.flow))]),t._v(" "),s("span",{staticClass:"has-text-grey is-block ml-1"},[t._v("l/pm")])]),t._v(" | "),s("div",{staticClass:"level-item"},[s("span",{staticClass:"has-text-weight-bold is-block"},[t._v(t._s(t.pressure))]),t._v(" "),s("span",{staticClass:"has-text-grey is-block ml-1"},[t._v("kpa")])]),t._v(" | "),s("div",{staticClass:"level-item"},[s("button",{staticClass:"button is-small is-info is-uppercase has-text-weight-bold",on:{click:function(e){return t.$emit("toggle")}}},[t._v("settings")])])])])])},F=[],R={props:{pressure:{type:Number},flow:{type:Number}},data:function(){return{}}},$=R,T=(s("92b3"),Object(h["a"])($,O,F,!1,null,"191ddb5a",null)),I=T.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slideLeft"}},[s("aside",{staticClass:"is-overlay has-background-white is-active box",attrs:{id:"sidebar"}},[s("article",{staticClass:"block"},[s("button",{staticClass:"delete is-large is-pulled-right",on:{click:function(e){return t.$emit("toggle")}}}),s("p",{staticClass:"menu-label"},[t._v("Flow Settings")]),s("FlowSettings",{attrs:{pressureRange:t.pressureRange,flowRange:t.flowRange,pressure:t.pressure,flow:t.flow}})],1),s("article",{staticClass:"block"},[s("p",{staticClass:"menu-label"},[t._v(" Sprinkler info ")]),s("ul",[s("li",{directives:[{name:"show",rawName:"v-show",value:t.info.name,expression:"info.name"}]},[s("a",{attrs:{href:"#"}},[t._v("Name: "+t._s(t.info.name))])]),s("li",{directives:[{name:"show",rawName:"v-show",value:t.info.description,expression:"info.description"}]},[s("a",{attrs:{href:"#"}},[t._v("Description: "+t._s(t.info.description))])])])])])])},P=[],D={components:{FlowSettings:j},props:{flow:{type:Number},pressureRange:{type:Array},flowRange:{type:Object},pressure:Number,info:Object},data:function(){return{isActive:!1}}},E=D,H=(s("2fdb"),Object(h["a"])(E,M,P,!1,null,"36f03622",null)),A=H.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide","enter-active-class":"slideInDown","leave-active-class":"slideOutLeft"}},[s("article",{staticClass:"card-content pl-0 pr-0",attrs:{id:"nozzle-display"}},[s("table",{staticClass:"table is-fullwidth has-text-centered"},[s("thead",[s("tr",[s("th",{attrs:{title:"nozzle"}},[t._v("Noz")]),s("th",{attrs:{title:"number"}},[t._v("Num")]),s("th",{staticClass:"is-hidden-mobile",attrs:{title:"radius"}},[t._v("Throw(m)")]),s("th",{attrs:{title:"required flow"}},[t._v("Flow")])])]),s("tbody",[t._l(t.nozzles,(function(e,n){return s("Nozzle",{key:n,attrs:{nozzle:n,nozzleFlow:e.flow,nozzleThrow:e.throw},on:{add:t.addTotal}})})),s("tr",[s("th",[t._v("Total")]),s("th"),s("th",{staticClass:"is-hidden-mobile"}),s("th",[t._v(t._s(t.formattedTotal))])]),s("tr",[s("th",[t._v("Stations")]),s("th"),s("th",{staticClass:"is-hidden-mobile"}),s("th",[t._v(t._s(t.stations))])])],2)]),s("footer",{staticClass:"card-footer p-2"},[s("a",{staticClass:"button is-danger card-footer-item",attrs:{href:"#"},on:{click:t.resetInputs}},[t._v("reset")]),s("a",{staticClass:"card-footer-item",attrs:{href:"#"}}),s("a",{staticClass:"card-footer-item",attrs:{href:"#"}})])])])},U=[],J=(s("13d5"),s("07ac"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v(t._s(t.nozzle))]),s("td",[s("number-input",{ref:"input",attrs:{type:"number",name:"count",id:"count",value:t.count},on:{changeCount:t.updateCount},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})],1),s("td",{staticClass:"is-hidden-mobile"},[t._v(t._s(t.nozzleThrow))]),s("td",[t._v(t._s(t.subTotal)+" ")])])}),q=[],Y={components:{NumberInput:x},props:{nozzle:{type:String},nozzleFlow:{type:Number},nozzleThrow:{type:Number}},data:function(){return{count:0,flow:this.nozzleFlow}},methods:{updateCount:function(t){this.count=t,this.$emit("add",this.nozzle,this.subTotal)}},computed:{subTotal:function(){return this.numberHelpers.roundUp(this.count*this.flow,2)}},created:function(){var t=this;ct.$on("reset",(function(){t.$refs.input.reset()}))},mounted:function(){}},B=Y,G=(s("3792"),Object(h["a"])(B,J,q,!1,null,"d8629f6a",null)),K=G.exports,Q={components:{Nozzle:K},props:{flow:Number,nozzles:Object},data:function(){return{tally:{0:0},stations:0,rawTotal:0}},computed:{formattedTotal:function(){return this.numberHelpers.roundUp(this.rawTotal,2)}},methods:{addTotal:function(t,e){this.tally[t]=e,this.rawTotal=Object.values(this.tally).reduce((function(t,e){return t+e})),this.stations=Math.ceil(this.rawTotal/this.flow)},resetInputs:function(){ct.$emit("reset")}}},V=Q,W=(s("a464"),Object(h["a"])(V,L,U,!1,null,"827fc4f8",null)),X=W.exports,Z={components:{CalcHeader:m,FlowSettings:j,DisplaySettings:I,NozzleDisplay:X,Sidebar:A},data:function(){return{title:"Flow Calculator",subtitle:"You pocket irrigation buddy",flowIsSet:!1,flow:20,pressure:0,flowRange:{min:2,max:null},nozzles:u,currentNozzleData:{},showMenu:!1}},computed:{pressureRange:function(){return Object.keys(this.nozzles)}},methods:{setFlow:function(t,e){this.flowIsSet=!0,this.flow=parseFloat(t,2),this.pressure=parseFloat(e,2);var s=this.pressure.toString();this.currentNozzleData=this.nozzles[s]},showFlowSettings:function(){this.flowIsSet=!1},toggleMenu:function(){this.showMenu=!this.showMenu}},created:function(){var t=this;ct.$on("set",(function(e,s){t.setFlow(e,s)}))}},tt=Z,et=Object(h["a"])(tt,r,l,!1,null,"50f00d78",null),st=et.exports,nt={name:"App",components:{Calculator:st}},ot=nt,at=Object(h["a"])(ot,o,a,!1,null,null,null),rt=at.exports,lt=function(t,e){return+(Math.round(t+"e+"+e)+"e-"+e)},it={roundUp:lt},ut={install:function(){n["a"].prototype.numberHelpers=it,n["a"].numberHelpers=it}};s("b383"),s("9ddc"),n["a"].config.productionTip=!1,n["a"].use(ut);var ct=new n["a"];new n["a"]({render:function(t){return t(rt)}}).$mount("#app")},"761f":function(t,e,s){},8220:function(t,e,s){},"92b3":function(t,e,s){"use strict";s("8220")},a2ed:function(t,e,s){"use strict";s("f4ac")},a464:function(t,e,s){"use strict";s("352c")},b383:function(t,e,s){},c9a1:function(t,e,s){"use strict";s("761f")},eefd:function(t,e,s){},f4ac:function(t,e,s){}});
//# sourceMappingURL=app.221cfe89.js.map