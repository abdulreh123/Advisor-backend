(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{644:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,c=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);a=!0);}catch(i){c=!0,r=i}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return c}))},648:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return i})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return d})),n.d(e,"b",(function(){return j})),n.d(e,"a",(function(){return b})),n.d(e,"e",(function(){return p})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return m}));var a=n(646),c=n(6),r=n(645),s=n.n(r),o=function(){return function(t){s.a.get("/api/student").then((function(e){t({type:c.w,payload:e.data.data})})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},i=function(t){return function(e){s.a.get("/api/student/".concat(t)).then((function(t){e({type:c.v,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},u=function(t){return function(e){s.a.get("/api/student/advisor/".concat(t)).then((function(t){e({type:c.y,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){s.a.get("/api/student/transcript/".concat(t)).then((function(t){e({type:c.x,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},j=function(t){return function(e){s.a.post("/api/student/create",t).then((function(t){e({type:c.h,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},b=function(t,e){return function(n){s.a.put("/api/student/add/remove/".concat(t),e).then((function(t){n({type:c.h,payload:t.data.data}),n(Object(a.a)(t.data.message,t.status))})).catch((function(t){n(Object(a.a)(t.response.data.message,t.response.status))}))}},p=function(t,e){return function(n){s.a.get("/api/student/automate/".concat(t,"?year=").concat(e)).then((function(t){n({type:c.m,payload:t.data.data}),n(Object(a.a)(t.data.message,t.status))})).catch((function(t){n(Object(a.a)(t.response.data.message,t.response.status))}))}},l=function(t){return function(e){s.a.get("/api/student/get-approve/".concat(t)).then((function(t){e({type:c.j,payload:t.data.data}),e(Object(a.a)(t.data.message,t.status))})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},m=function(t,e){return function(n){s.a.put("/api/student//approve/".concat(t,"/").concat(e)).then((function(t){n({type:c.k,payload:t.data.data}),n(Object(a.a)(t.data.message,t.status))})).catch((function(t){n(Object(a.a)(t.response.data.message,t.response.status))}))}}},751:function(t,e,n){"use strict";n.r(e);var a=n(175),c=n(2),r=n(644),s=n(1),o=n(643),i=n(173),u=n(642),d=n(648),j=n(22);e.default=function(){var t=Object(s.useState)({}),e=Object(r.a)(t,2),n=e[0],b=e[1],p=Object(s.useState)({}),l=Object(r.a)(p,2),m=l[0],h=l[1],O=Object(i.b)(),f=function(t){var e=t.target,r=e.value,s=e.name;"userId"===s&&b(Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},s,parseInt(r)))),b(Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},s,r)))},x=function(t){var e=t.target,n=e.value,r=e.name;h(Object(c.a)(Object(c.a)({},m),{},Object(a.a)({},r,n)))};return Object(j.jsx)(u.k,{xs:"12",md:"15",children:Object(j.jsxs)(u.f,{children:[Object(j.jsx)(u.j,{children:"Register new student"}),Object(j.jsx)(u.g,{children:Object(j.jsxs)(u.t,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetStudent",children:[Object(j.jsxs)(u.u,{row:!0,children:[Object(j.jsx)(u.k,{md:"3",children:Object(j.jsx)(u.F,{htmlFor:"number-input",children:"Student ID"})}),Object(j.jsx)(u.k,{xs:"12",md:"9",children:Object(j.jsx)(u.A,{id:"number-input",type:"number",name:"userId",onChange:f})})]}),Object(j.jsxs)(u.u,{row:!0,children:[Object(j.jsx)(u.k,{md:"3",children:Object(j.jsx)(u.F,{htmlFor:"number-input",children:"Name"})}),Object(j.jsx)(u.k,{xs:"12",md:"9",children:Object(j.jsx)(u.A,{id:"number-input",type:"text",name:"name",onChange:f})})]}),Object(j.jsxs)(u.u,{row:!0,children:[Object(j.jsx)(u.k,{md:"3",children:Object(j.jsx)(u.F,{htmlFor:"number-input",children:"Surname"})}),Object(j.jsx)(u.k,{xs:"12",md:"9",children:Object(j.jsx)(u.A,{id:"number-input",type:"text",name:"surname",onChange:f})})]}),Object(j.jsxs)(u.u,{row:!0,children:[Object(j.jsx)(u.k,{md:"3",children:Object(j.jsx)(u.F,{htmlFor:"number-input",children:"Username"})}),Object(j.jsx)(u.k,{xs:"12",md:"9",children:Object(j.jsx)(u.A,{id:"number-input",type:"text",name:"userName",onChange:x})})]}),Object(j.jsxs)(u.u,{row:!0,children:[Object(j.jsx)(u.k,{md:"3",children:Object(j.jsx)(u.F,{htmlFor:"password-input",children:"Password"})}),Object(j.jsx)(u.k,{xs:"12",md:"9",children:Object(j.jsx)(u.A,{type:"password",id:"password-input",name:"password",onChange:x})})]}),Object(j.jsxs)(u.u,{row:!0,children:[Object(j.jsx)(u.k,{md:"3",children:Object(j.jsx)(u.F,{htmlFor:"date-input",children:"Date of birth"})}),Object(j.jsx)(u.k,{xs:"12",md:"9",children:Object(j.jsx)(u.A,{type:"date",id:"date-input",name:"dob"})})]}),Object(j.jsxs)(u.u,{row:!0,children:[Object(j.jsxs)(u.k,{md:"3",children:["advisor",Object(j.jsx)(u.F,{htmlFor:"select",children:"Select"})]}),Object(j.jsx)(u.k,{xs:"12",md:"9",children:Object(j.jsxs)(u.P,{custom:!0,name:"select",id:"select",children:[Object(j.jsx)("option",{value:"0",children:"Please select"}),Object(j.jsx)("option",{value:"1",children:"Option #1"}),Object(j.jsx)("option",{value:"2",children:"Option #2"}),Object(j.jsx)("option",{value:"3",children:"Option #3"})]})})]})]})}),Object(j.jsxs)(u.h,{children:[Object(j.jsxs)(u.d,{type:"submit",size:"sm",color:"primary",children:[Object(j.jsx)(o.a,{name:"cil-scrubber",onClick:function(t){var e={userId:n.userId,name:n.name,surname:n.surname,advisorId:n.advisorId,user:m};t.preventDefault(),O(Object(d.b)(Object(c.a)({},e))),document.getElementById("resetStudent").reset()}})," Submit"]}),Object(j.jsxs)(u.d,{type:"reset",size:"sm",color:"danger",children:[Object(j.jsx)(o.a,{name:"cil-ban"})," Reset"]})]})]})})}}}]);
//# sourceMappingURL=21.2467a529.chunk.js.map