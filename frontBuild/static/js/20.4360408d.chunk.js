(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{643:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,c=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);a=!0);}catch(i){c=!0,r=i}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return c}))},647:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return i})),n.d(e,"j",(function(){return u})),n.d(e,"i",(function(){return d})),n.d(e,"h",(function(){return j})),n.d(e,"k",(function(){return l})),n.d(e,"b",(function(){return b})),n.d(e,"a",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return f}));var a=n(646),c=n(6),r=n(645),s=n.n(r),o=function(){return function(t){s.a.get("/api/student").then((function(e){t({type:c.w,payload:e.data.data})})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},i=function(t){return function(e){s.a.get("/api/student/".concat(t)).then((function(t){e({type:c.v,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},u=function(t){return function(e){s.a.get("/api/student/time-table/".concat(t,"?year=2021-2022 - Spring")).then((function(t){e({type:c.y,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},d=function(t,e){return function(n){s.a.get("/api/student/stats/".concat(t,"/").concat(e)).then((function(t){n({type:c.x,payload:t.data.data})})).catch((function(t){n(Object(a.a)(t.response.data.message,t.response.status))}))}},j=function(t){return function(e){s.a.get("/api/student/advisor/".concat(t)).then((function(t){e({type:c.A,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},l=function(t){return function(e){s.a.get("/api/student/transcript/".concat(t)).then((function(t){e({type:c.z,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},b=function(t){return function(e){s.a.post("/api/student/create",t).then((function(t){e({type:c.h,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},p=function(t,e){return function(n){s.a.put("/api/student/add/remove/".concat(t),e).then((function(t){n({type:c.h,payload:t.data.data}),n(Object(a.a)(t.data.message,t.status))})).catch((function(t){n(Object(a.a)(t.response.data.message,t.response.status))}))}},h=function(t,e){return function(n){s.a.get("/api/student/automate/".concat(t,"?year=").concat(e)).then((function(t){n({type:c.m,payload:t.data.data}),n(Object(a.a)(t.data.message,t.status))})).catch((function(t){n(Object(a.a)(t.response.data.message,t.response.status))}))}},m=function(t){return function(e){s.a.get("/api/student/get-approve/".concat(t)).then((function(t){e({type:c.j,payload:t.data.data}),e(Object(a.a)(t.data.message,t.status))})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},f=function(t,e){return function(n){s.a.put("/api/student//approve/".concat(t,"/").concat(e)).then((function(t){n({type:c.k,payload:t.data.data}),n(Object(a.a)(t.data.message,t.status))})).catch((function(t){n(Object(a.a)(t.response.data.message,t.response.status))}))}}},672:function(t,e,n){"use strict";var a=n(175),c=n(2),r=n(643),s=n(1),o=n(642),i=n(22);e.a=function(t){var e=Object(s.useState)({}),n=Object(r.a)(e,2),u=n[0],d=n[1],j=Object(s.useState)({}),l=Object(r.a)(j,2),b=l[0],p=l[1],h=function(t){var e=t.target,n=e.value,r=e.name;"userId"===r&&d(Object(c.a)(Object(c.a)({},u),{},Object(a.a)({},r,parseInt(n)))),d(Object(c.a)(Object(c.a)({},u),{},Object(a.a)({},r,n)))},m=function(t){var e=t.target,n=e.value,r=e.name;p(Object(c.a)(Object(c.a)({},b),{},Object(a.a)({},r,n)))};return Object(i.jsx)(o.O,{children:Object(i.jsx)(o.g,{children:Object(i.jsxs)(o.H,{show:t.modal,onClose:function(){return t.setModal(!t.modal)},color:"primary",children:[Object(i.jsx)(o.K,{closeButton:!0,children:Object(i.jsx)(o.L,{children:"Edit Student"})}),Object(i.jsx)(o.I,{children:Object(i.jsx)(o.g,{children:Object(i.jsxs)(o.t,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetStudent",children:[Object(i.jsxs)(o.u,{row:!0,children:[Object(i.jsx)(o.k,{md:"3",children:Object(i.jsx)(o.F,{htmlFor:"number-input",children:"Student ID"})}),Object(i.jsx)(o.k,{xs:"12",md:"9",children:Object(i.jsx)(o.A,{id:"number-input",type:"number",name:"userId",onChange:h})})]}),Object(i.jsxs)(o.u,{row:!0,children:[Object(i.jsx)(o.k,{md:"3",children:Object(i.jsx)(o.F,{htmlFor:"number-input",children:"Name"})}),Object(i.jsx)(o.k,{xs:"12",md:"9",children:Object(i.jsx)(o.A,{id:"number-input",type:"text",name:"name",onChange:h})})]}),Object(i.jsxs)(o.u,{row:!0,children:[Object(i.jsx)(o.k,{md:"3",children:Object(i.jsx)(o.F,{htmlFor:"number-input",children:"Surname"})}),Object(i.jsx)(o.k,{xs:"12",md:"9",children:Object(i.jsx)(o.A,{id:"number-input",type:"text",name:"surname",onChange:h})})]}),Object(i.jsxs)(o.u,{row:!0,children:[Object(i.jsx)(o.k,{md:"3",children:Object(i.jsx)(o.F,{htmlFor:"number-input",children:"Username"})}),Object(i.jsx)(o.k,{xs:"12",md:"9",children:Object(i.jsx)(o.A,{id:"number-input",type:"text",name:"userName",onChange:m})})]}),Object(i.jsxs)(o.u,{row:!0,children:[Object(i.jsx)(o.k,{md:"3",children:Object(i.jsx)(o.F,{htmlFor:"password-input",children:"Password"})}),Object(i.jsx)(o.k,{xs:"12",md:"9",children:Object(i.jsx)(o.A,{type:"password",id:"password-input",name:"password",onChange:m})})]}),Object(i.jsxs)(o.u,{row:!0,children:[Object(i.jsx)(o.k,{md:"3",children:Object(i.jsx)(o.F,{htmlFor:"date-input",children:"Date of birth"})}),Object(i.jsx)(o.k,{xs:"12",md:"9",children:Object(i.jsx)(o.A,{type:"date",id:"date-input",name:"dob"})})]}),Object(i.jsxs)(o.u,{row:!0,children:[Object(i.jsxs)(o.k,{md:"3",children:["advisor",Object(i.jsx)(o.F,{htmlFor:"select",children:"Select"})]}),Object(i.jsx)(o.k,{xs:"12",md:"9",children:Object(i.jsxs)(o.P,{custom:!0,name:"select",id:"select",children:[Object(i.jsx)("option",{value:"0",children:"Please select"}),Object(i.jsx)("option",{value:"1",children:"Option #1"}),Object(i.jsx)("option",{value:"2",children:"Option #2"}),Object(i.jsx)("option",{value:"3",children:"Option #3"})]})})]})]})})}),Object(i.jsxs)(o.J,{children:[Object(i.jsx)(o.d,{color:"primary",onClick:function(){return t.setModal(!t.modal)},children:"Save changes"})," ",Object(i.jsx)(o.d,{color:"secondary",onClick:function(){return t.setModal(!t.modal)},children:"Cancel"})]})]})})})}},748:function(t,e,n){"use strict";n.r(e);var a=n(643),c=n(1),r=n(649),s=n.n(r),o=n(173),i=n(672),u=n(647),d=n(22);e.default=function(){var t=Object(o.c)((function(t){return t.student.students})),e=Object(c.useState)(!1),n=Object(a.a)(e,2),r=n[0],j=n[1],l=Object(o.b)();Object(c.useEffect)((function(){l(Object(u.f)())}),[l]);var b=[{selector:"userId",name:"Student ID",sortable:!0},{selector:"name",name:"Name",sortable:!0},{selector:"surname",name:"Surname",sortable:!0},{selector:"createdAt",name:"Registered",cell:function(t){return Object(d.jsx)("span",{children:t.createdAt.replace("T"," ").replace(".000Z","")})},sortable:!0},{name:"Actions",cell:function(t){return Object(d.jsxs)("div",{className:"table-icon",children:[Object(d.jsx)("span",{style:{margin:"1rem"},onClick:function(){j(!r)},children:"Edit"}),Object(d.jsx)("span",{children:"Delete"})]})},ignoreRowClick:!0,allowOverflow:!0}];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.a,{modal:r,setModal:j}),Object(d.jsx)(s.a,{columns:b,data:t||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})]})}}}]);
//# sourceMappingURL=20.4360408d.chunk.js.map