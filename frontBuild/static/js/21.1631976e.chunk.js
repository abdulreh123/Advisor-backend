(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{643:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){c=!0,o=u}finally{try{r||null==a.return||a.return()}finally{if(c)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return c}))},655:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(5),c=n(645),o=n.n(c),i=function(){return function(e){o.a.get("/api/department").then((function(t){e({type:r.q,payload:t.data.data})}))}},a=function(e){return function(t){o.a.post("/api/department/create",e).then((function(e){t({type:r.d,payload:e.data.data})}))}}},660:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return s}));var r=n(5),c=n(645),o=n.n(c),i=function(){return function(e){o.a.get("/api/course").then((function(t){e({type:r.p,payload:t.data.data})}))}},a=function(e){return function(t){o.a.get("/api/course/".concat(e)).then((function(e){t({type:r.c,payload:e.data.data})}))}},u=function(e){return function(t){o.a.post("/api/course/create",e).then((function(e){t({type:r.c,payload:e.data.data})}))}},s=function(e,t){return function(n){o.a.put("/api/course/".concat(t),e).then((function(e){n({type:r.c,payload:e.data.data})}))}}},769:function(e,t,n){"use strict";n.r(t);var r=n(643),c=n(1),o=n(653),i=n.n(o),a=n(175),u=n(176),s=n(2),d=n(644),l=n(655),j=n(660),b=n(21),m=function(e){var t=Object(c.useState)({}),n=Object(r.a)(t,2),o=n[0],i=n[1],m=Object(c.useState)(0),f=Object(r.a)(m,2),O=f[0],h=f[1],p=Object(a.b)(),x=Object(a.c)((function(e){return e.department.departments})),y=Object(a.c)((function(e){return e.courses.courses})),v=Object(a.c)((function(e){return e.courses.course})),g=function(e){var t=e.target,n=t.value,r=t.name;"departmentId"===r&&h(n),i(Object(s.a)(Object(s.a)({},o),{},Object(u.a)({},r,n)))},C=y.filter((function(e){return e.departmentId==O}));return Object(c.useEffect)((function(){p(Object(l.b)()),p(Object(j.b)())}),[p]),Object(b.jsx)(d.N,{children:Object(b.jsx)(d.f,{children:Object(b.jsxs)(d.G,{show:e.modal,onClose:function(){return e.setModal(!e.modal)},color:"primary",children:[Object(b.jsx)(d.J,{closeButton:!0,children:Object(b.jsx)(d.K,{children:"Edit Course"})}),Object(b.jsx)(d.H,{children:Object(b.jsx)(d.f,{children:Object(b.jsxs)(d.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetCourse",children:[Object(b.jsxs)(d.t,{row:!0,children:[Object(b.jsx)(d.j,{md:"3",children:Object(b.jsx)(d.E,{htmlFor:"number-input",children:"Name"})}),Object(b.jsx)(d.j,{xs:"12",md:"9",children:Object(b.jsx)(d.z,{id:"number-input",type:"text",name:"name",onChange:g,defaultValue:null===v||void 0===v?void 0:v.name})})]}),Object(b.jsxs)(d.t,{row:!0,children:[Object(b.jsx)(d.j,{md:"3",children:Object(b.jsx)(d.E,{htmlFor:"number-input",children:"Code"})}),Object(b.jsx)(d.j,{xs:"12",md:"9",children:Object(b.jsx)(d.z,{id:"number-input",type:"text",name:"code",onChange:g,defaultValue:null===v||void 0===v?void 0:v.code})})]}),Object(b.jsxs)(d.t,{row:!0,children:[Object(b.jsx)(d.j,{md:"3",children:Object(b.jsx)(d.E,{htmlFor:"number-input",children:"Semester"})}),Object(b.jsx)(d.j,{xs:"12",md:"9",children:Object(b.jsx)(d.z,{id:"number-input",type:"number",name:"semester",onChange:g,defaultValue:null===v||void 0===v?void 0:v.semester})})]}),Object(b.jsxs)(d.t,{row:!0,children:[Object(b.jsx)(d.j,{md:"3",children:"Department"}),Object(b.jsx)(d.j,{xs:"12",md:"9",children:Object(b.jsxs)(d.O,{custom:!0,name:"departmentId",id:"select",onChange:g,children:[Object(b.jsx)("option",{value:"0",children:"Please select"}),x.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name})}))]})})]}),Object(b.jsxs)(d.t,{row:!0,children:[Object(b.jsx)(d.j,{md:"3",children:"Prerequisites"}),Object(b.jsx)(d.j,{xs:"12",md:"9",children:Object(b.jsxs)(d.O,{custom:!0,name:"prerequisites",id:"select",onChange:g,children:[Object(b.jsx)("option",{value:"0",children:"Please select"}),C.map((function(e){return Object(b.jsx)("option",{value:e.code,children:e.name})}))]})})]}),Object(b.jsxs)(d.t,{row:!0,children:[Object(b.jsx)(d.j,{md:"3",children:Object(b.jsx)(d.E,{htmlFor:"number-input",children:"Credit"})}),Object(b.jsx)(d.j,{xs:"12",md:"9",children:Object(b.jsx)(d.z,{id:"number-input",type:"number",name:"credit",onChange:g,defaultValue:null===v||void 0===v?void 0:v.credit})})]}),Object(b.jsxs)(d.t,{row:!0,children:[Object(b.jsx)(d.j,{md:"3",children:Object(b.jsx)(d.E,{htmlFor:"number-input",children:"ECT5"})}),Object(b.jsx)(d.j,{xs:"12",md:"9",children:Object(b.jsx)(d.z,{id:"number-input",type:"number",name:"ECT5",onChange:g,defaultValue:null===v||void 0===v?void 0:v.ECT5})})]})]})})}),Object(b.jsxs)(d.I,{children:[Object(b.jsx)(d.d,{color:"primary",onClick:function(t){e.setModal(!e.modal),function(e){e.preventDefault(),p(Object(j.d)(Object(s.a)({},o),v.id)),document.getElementById("resetCourse").reset()}(t)},children:"Save changes"})," ",Object(b.jsx)(d.d,{color:"secondary",onClick:function(){return e.setModal(!e.modal)},children:"Cancel"})]})]})})})};t.default=function(){var e=Object(a.c)((function(e){return e.courses.courses})),t=Object(a.c)((function(e){return e.courses.course})),n=Object(a.c)((function(e){return e.auth.user})),o=Object(c.useState)(!1),u=Object(r.a)(o,2),s=u[0],d=u[1],l=e.filter((function(e){return e.departmentId===(null===n||void 0===n?void 0:n.department.id)||4===e.departmentId})),f=Object(a.b)();Object(c.useEffect)((function(){f(Object(j.b)())}),[f,t]);var O=[{selector:"name",name:"Name",sortable:!0},{selector:"code",name:"Code",sortable:!0},{selector:"semester",name:"Semester",sortable:!0},{selector:"credit",name:"Credit",sortable:!0},{selector:"ECT5",name:"ECT5",sortable:!0},{name:"Actions",cell:function(e){return Object(b.jsxs)("div",{className:"table-icon",children:[Object(b.jsx)("span",{style:{margin:"1rem",cursor:"pointer"},onClick:function(){d(!s),f(Object(j.c)(e.id))},children:"Edit"}),Object(b.jsx)("span",{children:"Delete"})]})},ignoreRowClick:!0,allowOverflow:!0}];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{modal:s,setModal:d}),Object(b.jsx)(i.a,{columns:O,data:l||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})]})}}}]);
//# sourceMappingURL=21.1631976e.chunk.js.map