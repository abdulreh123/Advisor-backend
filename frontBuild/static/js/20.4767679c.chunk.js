(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{643:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(c=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);c=!0);}catch(s){r=!0,i=s}finally{try{c||null==o.return||o.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},649:function(e,t,n){"use strict";function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return c}))},662:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return l}));var c=n(5),r=n(645),i=n.n(r),a=n(646),o=function(){return function(e){i.a.get("/api/buildings").then((function(t){e({type:c.n,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},s=function(e){return function(t){i.a.get("/api/buildings/".concat(e)).then((function(e){t({type:c.b,payload:e.data.data})})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},d=function(e){return function(t){i.a.post("/api/buildings/create",e).then((function(e){t({type:c.b,payload:e.data.data}),t(Object(a.a)(e.data.message,e.status))})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},l=function(e,t){return function(n){i.a.put("/api/buildings/".concat(t),e).then((function(e){n({type:c.b,payload:e.data.data}),n(Object(a.a)(e.data.message,e.status))})).catch((function(e){n(Object(a.a)(e.response.data.message,e.response.status))}))}}},767:function(e,t,n){"use strict";n.r(t);var c,r=n(643),i=n(649),a=n(1),o=n(653),s=n.n(o),d=n(175),l=n(650),u=n(644),j=n(662),b=n(176),m=n(2),O=n(21),f=function(e){var t=Object(a.useState)({}),n=Object(r.a)(t,2),c=n[0],i=n[1],o=Object(d.b)(),s=function(e){var t=e.target,n=t.value,r=t.name;i(Object(m.a)(Object(m.a)({},c),{},Object(b.a)({},r,n)))};return Object(O.jsx)(u.N,{children:Object(O.jsx)(u.f,{children:Object(O.jsxs)(u.G,{show:e.modal,onClose:function(){return e.setModal(!e.modal)},color:"primary",children:[Object(O.jsx)(u.J,{closeButton:!0,children:Object(O.jsx)(u.K,{children:"New Building"})}),Object(O.jsx)(u.H,{children:Object(O.jsx)(u.f,{children:Object(O.jsxs)(u.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetBuilding",children:[Object(O.jsxs)(u.t,{row:!0,children:[Object(O.jsx)(u.j,{md:"3",children:Object(O.jsx)(u.E,{htmlFor:"number-input",children:"Name"})}),Object(O.jsx)(u.j,{xs:"12",md:"9",children:Object(O.jsx)(u.z,{id:"number-input",type:"text",name:"name",onChange:s})})]}),Object(O.jsxs)(u.t,{row:!0,children:[Object(O.jsx)(u.j,{md:"3",children:Object(O.jsx)(u.E,{htmlFor:"number-input",children:"Longitude"})}),Object(O.jsx)(u.j,{xs:"12",md:"9",children:Object(O.jsx)(u.z,{id:"number-input",type:"float",name:"longitude",onChange:s})})]}),Object(O.jsxs)(u.t,{row:!0,children:[Object(O.jsx)(u.j,{md:"3",children:Object(O.jsx)(u.E,{htmlFor:"number-input",children:"Latitude"})}),Object(O.jsx)(u.j,{xs:"12",md:"9",children:Object(O.jsx)(u.z,{id:"number-input",type:"float",name:"latitude",onChange:s})})]})]})})}),Object(O.jsxs)(u.I,{children:[Object(O.jsx)(u.d,{color:"primary",onClick:function(t){e.setModal(!e.modal),function(e){e.preventDefault(),o(Object(j.a)(Object(m.a)({},c))),document.getElementById("resetBuilding").reset()}(t)},children:"Add"})," ",Object(O.jsx)(u.d,{color:"secondary",onClick:function(){return e.setModal(!e.modal)},children:"Cancel"})]})]})})})},h=function(e){var t=Object(a.useState)({}),n=Object(r.a)(t,2),c=n[0],i=n[1],o=Object(d.b)(),s=Object(d.c)((function(e){return e.building.building})),l=function(e){var t=e.target,n=t.value,r=t.name;i(Object(m.a)(Object(m.a)({},c),{},Object(b.a)({},r,n)))};return Object(O.jsx)(u.N,{children:Object(O.jsx)(u.f,{children:Object(O.jsxs)(u.G,{show:e.modal,onClose:function(){return e.setModal(!e.modal)},color:"primary",children:[Object(O.jsx)(u.J,{closeButton:!0,children:Object(O.jsx)(u.K,{children:"Update Building"})}),Object(O.jsx)(u.H,{children:Object(O.jsx)(u.f,{children:Object(O.jsxs)(u.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetBuilding",children:[Object(O.jsxs)(u.t,{row:!0,children:[Object(O.jsx)(u.j,{md:"3",children:Object(O.jsx)(u.E,{htmlFor:"number-input",children:"Name"})}),Object(O.jsx)(u.j,{xs:"12",md:"9",children:Object(O.jsx)(u.z,{id:"number-input",type:"text",name:"name",onChange:l,defaultValue:null===s||void 0===s?void 0:s.name})})]}),Object(O.jsxs)(u.t,{row:!0,children:[Object(O.jsx)(u.j,{md:"3",children:Object(O.jsx)(u.E,{htmlFor:"number-input",children:"Longitude"})}),Object(O.jsx)(u.j,{xs:"12",md:"9",children:Object(O.jsx)(u.z,{id:"number-input",type:"float",name:"longitude",onChange:l,defaultValue:null===s||void 0===s?void 0:s.longitude})})]}),Object(O.jsxs)(u.t,{row:!0,children:[Object(O.jsx)(u.j,{md:"3",children:Object(O.jsx)(u.E,{htmlFor:"number-input",children:"Latitude"})}),Object(O.jsx)(u.j,{xs:"12",md:"9",children:Object(O.jsx)(u.z,{id:"number-input",type:"float",name:"latitude",onChange:l,defaultValue:null===s||void 0===s?void 0:s.latitude})})]})]})})}),Object(O.jsxs)(u.I,{children:[Object(O.jsx)(u.d,{color:"primary",onClick:function(t){e.setModal(!e.modal),function(e){e.preventDefault(),o(Object(j.d)(Object(m.a)({},c),null===s||void 0===s?void 0:s.id)),document.getElementById("resetBuilding").reset()}(t)},children:"Update"})," ",Object(O.jsx)(u.d,{color:"secondary",onClick:function(){return e.setModal(!e.modal)},children:"Cancel"})]})]})})})},p=Object(l.default)(u.d)(c||(c=Object(i.a)(["\nwidth: 4rem;\n"])));t.default=function(){var e=Object(d.c)((function(e){return e.building.buildings})),t=Object(d.c)((function(e){return e.building.building})),n=Object(a.useState)(!1),c=Object(r.a)(n,2),i=c[0],o=c[1],l=Object(a.useState)(!1),u=Object(r.a)(l,2),b=u[0],m=u[1],x=Object(d.b)();Object(a.useEffect)((function(){x(Object(j.b)())}),[x,t]);var g=[{selector:"name",name:"Name",sortable:!0},{selector:"longitude",name:"Longitude",sortable:!0},{selector:"latitude",name:"Latitude",sortable:!0},{name:"Actions",cell:function(e){return Object(O.jsxs)("div",{className:"table-icon",children:[Object(O.jsx)("span",{style:{margin:"1rem"},onClick:function(){m(!b),x(Object(j.c)(e.id))},children:"Edit"}),Object(O.jsx)("span",{children:"Delete"})]})},ignoreRowClick:!0,allowOverflow:!0}];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{modal:i,setModal:o}),Object(O.jsx)(p,{block:!0,color:"primary",onClick:function(){return o(!0)},children:"Add"}),Object(O.jsx)(h,{modal:b,setModal:m}),Object(O.jsx)(s.a,{columns:g,data:e||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})]})}}}]);
//# sourceMappingURL=20.4767679c.chunk.js.map