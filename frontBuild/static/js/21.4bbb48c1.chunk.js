(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{651:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var c=n(646),s=n(5),r=n(645),a=n.n(r),j=function(){return function(e){a.a.get("/api/advisor").then((function(t){e({type:s.m,payload:t.data.data})})).catch((function(t){e(Object(c.b)(t.response.data.message,t.response.status))}))}},i=function(e){return function(t){a.a.get("/api/advisor/".concat(e)).then((function(e){t({type:s.a,payload:e.data.data})})).catch((function(e){t(Object(c.b)(e.response.data.message,e.response.status))}))}},o=function(e){return function(t){a.a.post("/api/advisor/create",e).then((function(e){t({type:s.a,payload:e.data.data}),t(Object(c.b)(e.data.message,e.status))})).catch((function(e){t(Object(c.b)(e.response.data.message,e.response.status))}))}}},675:function(e,t,n){"use strict";var c=n(174),s=n(2),r=n(647),a=n(1),j=n(644),i=n(19);t.a=function(e){var t=Object(a.useState)({}),n=Object(r.a)(t,2),o=n[0],d=n[1],l=Object(a.useState)({}),b=Object(r.a)(l,2),u=b[0],O=b[1],m=function(e){var t=e.target,n=t.value,r=t.name;"userId"===r&&d(Object(s.a)(Object(s.a)({},o),{},Object(c.a)({},r,parseInt(n)))),d(Object(s.a)(Object(s.a)({},o),{},Object(c.a)({},r,n)))},h=function(e){var t=e.target,n=t.value,r=t.name;O(Object(s.a)(Object(s.a)({},u),{},Object(c.a)({},r,n)))};return Object(i.jsx)(j.Q,{children:Object(i.jsx)(j.f,{children:Object(i.jsxs)(j.G,{show:e.modal,onClose:function(){return e.setModal(!e.modal)},color:"primary",children:[Object(i.jsx)(j.J,{closeButton:!0,children:Object(i.jsx)(j.K,{children:"Edit Student"})}),Object(i.jsx)(j.H,{children:Object(i.jsx)(j.f,{children:Object(i.jsxs)(j.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetStudent",children:[Object(i.jsxs)(j.t,{row:!0,children:[Object(i.jsx)(j.j,{md:"3",children:Object(i.jsx)(j.E,{htmlFor:"number-input",children:"Student ID"})}),Object(i.jsx)(j.j,{xs:"12",md:"9",children:Object(i.jsx)(j.z,{id:"number-input",type:"number",name:"userId",onChange:m})})]}),Object(i.jsxs)(j.t,{row:!0,children:[Object(i.jsx)(j.j,{md:"3",children:Object(i.jsx)(j.E,{htmlFor:"number-input",children:"Name"})}),Object(i.jsx)(j.j,{xs:"12",md:"9",children:Object(i.jsx)(j.z,{id:"number-input",type:"text",name:"name",onChange:m})})]}),Object(i.jsxs)(j.t,{row:!0,children:[Object(i.jsx)(j.j,{md:"3",children:Object(i.jsx)(j.E,{htmlFor:"number-input",children:"Surname"})}),Object(i.jsx)(j.j,{xs:"12",md:"9",children:Object(i.jsx)(j.z,{id:"number-input",type:"text",name:"surname",onChange:m})})]}),Object(i.jsxs)(j.t,{row:!0,children:[Object(i.jsx)(j.j,{md:"3",children:Object(i.jsx)(j.E,{htmlFor:"number-input",children:"Username"})}),Object(i.jsx)(j.j,{xs:"12",md:"9",children:Object(i.jsx)(j.z,{id:"number-input",type:"text",name:"userName",onChange:h})})]}),Object(i.jsxs)(j.t,{row:!0,children:[Object(i.jsx)(j.j,{md:"3",children:Object(i.jsx)(j.E,{htmlFor:"password-input",children:"Password"})}),Object(i.jsx)(j.j,{xs:"12",md:"9",children:Object(i.jsx)(j.z,{type:"password",id:"password-input",name:"password",onChange:h})})]}),Object(i.jsxs)(j.t,{row:!0,children:[Object(i.jsx)(j.j,{md:"3",children:Object(i.jsx)(j.E,{htmlFor:"date-input",children:"Date of birth"})}),Object(i.jsx)(j.j,{xs:"12",md:"9",children:Object(i.jsx)(j.z,{type:"date",id:"date-input",name:"dob"})})]}),Object(i.jsxs)(j.t,{row:!0,children:[Object(i.jsxs)(j.j,{md:"3",children:["advisor",Object(i.jsx)(j.E,{htmlFor:"select",children:"Select"})]}),Object(i.jsx)(j.j,{xs:"12",md:"9",children:Object(i.jsxs)(j.R,{custom:!0,name:"select",id:"select",children:[Object(i.jsx)("option",{value:"0",children:"Please select"}),Object(i.jsx)("option",{value:"1",children:"Option #1"}),Object(i.jsx)("option",{value:"2",children:"Option #2"}),Object(i.jsx)("option",{value:"3",children:"Option #3"})]})})]})]})})}),Object(i.jsxs)(j.I,{children:[Object(i.jsx)(j.d,{color:"primary",onClick:function(){return e.setModal(!e.modal)},children:"Save changes"})," ",Object(i.jsx)(j.d,{color:"secondary",onClick:function(){return e.setModal(!e.modal)},children:"Cancel"})]})]})})})}},758:function(e,t,n){"use strict";n.r(t);var c=n(647),s=n(1),r=n(654),a=n.n(r),j=n(173),i=n(675),o=n(651),d=n(19);t.default=function(){var e=Object(j.c)((function(e){return e.advisor.advisors})),t=Object(s.useState)(!1),n=Object(c.a)(t,2),r=n[0],l=n[1],b=Object(j.b)();Object(s.useEffect)((function(){b(Object(o.b)())}),[b]);var u=[{selector:"name",name:"Name",sortable:!0},{selector:"surname",name:"Surname",sortable:!0},{selector:"Department",name:"Department",cell:function(e){return Object(d.jsx)("span",{children:e.Department.name})},sortable:!0},{name:"Actions",cell:function(e){return Object(d.jsxs)("div",{className:"table-icon",children:[Object(d.jsx)("span",{style:{margin:"1rem"},onClick:function(){l(!r)},children:"Edit"}),Object(d.jsx)("span",{children:"Delete"})]})},ignoreRowClick:!0,allowOverflow:!0}];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.a,{modal:r,setModal:l}),Object(d.jsx)(a.a,{columns:u,data:e||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})]})}}}]);
//# sourceMappingURL=21.4bbb48c1.chunk.js.map