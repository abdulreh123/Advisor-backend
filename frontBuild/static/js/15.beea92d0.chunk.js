(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{650:function(t,e,n){"use strict";function a(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,"a",(function(){return a}))},651:function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return i})),n.d(e,"l",(function(){return d})),n.d(e,"k",(function(){return j})),n.d(e,"j",(function(){return p})),n.d(e,"m",(function(){return b})),n.d(e,"b",(function(){return l})),n.d(e,"o",(function(){return f})),n.d(e,"n",(function(){return m})),n.d(e,"a",(function(){return h})),n.d(e,"e",(function(){return O})),n.d(e,"d",(function(){return x})),n.d(e,"c",(function(){return g})),n.d(e,"f",(function(){return y}));var a=n(647),c=n(5),s=n(646),r=n.n(s),o=function(){return function(t){r.a.get("/api/student").then((function(e){t({type:c.C,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){r.a.get("/api/chairman/statistics/".concat(t)).then((function(t){e({type:c.s,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},i=function(t){return function(e){r.a.get("/api/student/".concat(t)).then((function(t){e({type:c.B,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){r.a.get("/api/student/time-table/".concat(t,"?year=2021-2022 - Spring")).then((function(t){e({type:c.E,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},j=function(t,e){return function(n){r.a.get("/api/student/stats/".concat(t,"/").concat(e)).then((function(t){n({type:c.D,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},p=function(t){return function(e){r.a.get("/api/student/advisor/".concat(t)).then((function(t){e({type:c.G,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},b=function(t){return function(e){r.a.get("/api/student/transcript/".concat(t)).then((function(t){e({type:c.F,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},l=function(t){return function(e){r.a.post("/api/student/create",t).then((function(t){e({type:c.i,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},f=function(t,e){return function(n){r.a.put("/api/student/".concat(e),t).then((function(t){n({type:c.i,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},m=function(t,e,n){return function(s){r.a.put("/api/student/".concat(e,"/").concat(n),t).then((function(t){s({type:c.i,payload:t.data.data}),s(Object(a.b)(t.data.message,t.status))})).catch((function(t){s(Object(a.b)(t.response.data.message,t.response.status))}))}},h=function(t,e){return function(n){r.a.put("/api/student/add/remove/".concat(t),e).then((function(t){n({type:c.i,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},O=function(t,e){return function(n){r.a.get("/api/student/automate/".concat(t,"?year=").concat(e)).then((function(t){n({type:c.p,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},x=function(t){return function(e){r.a.get("/api/student/get-approve/".concat(t)).then((function(t){e({type:c.k,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},g=function(t,e){return function(n){r.a.put("/api/student//approve/".concat(t,"/").concat(e)).then((function(t){n({type:c.l,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},y=function(t){return function(e){r.a.delete("/api/student/".concat(t)).then((function(t){e({type:c.i,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},652:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return d})),n.d(e,"f",(function(){return j})),n.d(e,"b",(function(){return p}));var a=n(647),c=n(5),s=n(646),r=n.n(s),o=function(){return function(t){r.a.get("/api/advisor").then((function(e){t({type:c.m,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){r.a.get("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},i=function(t){return function(e){r.a.post("/api/advisor/create",t).then((function(t){e({type:c.a,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){r.a.get("/api/advisor/time-table/".concat(t,"?year=2021-2022 - Spring")).then((function(t){e({type:c.n,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},j=function(t,e){return function(n){r.a.put("/api/advisor/".concat(e),t).then((function(t){n({type:c.a,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},p=function(t){return function(e){r.a.delete("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},674:function(t,e,n){"use strict";var a=n(176),c=n(2),s=n(648),r=n(1),o=n(645),u=n(652),i=n(651),d=n(175),j=n(18);e.a=function(t){var e=Object(r.useState)({}),n=Object(s.a)(e,2),p=n[0],b=n[1],l=Object(r.useState)({}),f=Object(s.a)(l,2),m=f[0],h=f[1],O=Object(d.c)((function(t){return t.student.student})),x=Object(d.c)((function(t){return t.advisor.advisors})),g=function(t){var e=t.target,n=e.value,s=e.name;"userId"===s&&b(Object(c.a)(Object(c.a)({},p),{},Object(a.a)({},s,parseInt(n)))),b(Object(c.a)(Object(c.a)({},p),{},Object(a.a)({},s,n)))},y=function(t){var e=t.target,n=e.value,s=e.name;h(Object(c.a)(Object(c.a)({},m),{},Object(a.a)({},s,n)))},v=Object(d.b)();return Object(r.useEffect)((function(){v(Object(u.c)())}),[v]),Object(j.jsx)(o.Q,{children:Object(j.jsx)(o.f,{children:Object(j.jsxs)(o.G,{show:t.modal,onClose:function(){return t.setModal(!t.modal)},color:"primary",children:[Object(j.jsx)(o.J,{closeButton:!0,children:Object(j.jsx)(o.K,{children:"Edit Student"})}),Object(j.jsx)(o.H,{children:Object(j.jsx)(o.f,{children:Object(j.jsxs)(o.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetUpdateStudent",children:[Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"number-input",children:"Student ID"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{id:"number-input",type:"number",name:"userId",onChange:g,defaultValue:null===O||void 0===O?void 0:O.userId})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"number-input",children:"Name"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{id:"number-input",type:"text",name:"name",onChange:g,defaultValue:null===O||void 0===O?void 0:O.name})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"number-input",children:"Surname"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{id:"number-input",type:"text",name:"surname",onChange:g,defaultValue:null===O||void 0===O?void 0:O.surname})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"number-input",children:"Username"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{id:"number-input",type:"text",name:"userName",onChange:y})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"password-input",children:"Password"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{type:"password",id:"password-input",name:"password",onChange:y})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"date-input",children:"Date of birth"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{type:"date",id:"date-input",name:"dob"})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsxs)(o.j,{md:"3",children:["advisor",Object(j.jsx)(o.E,{htmlFor:"select",children:"Select"})]}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsxs)(o.R,{custom:!0,name:"advisorId",id:"select",onChange:g,children:[Object(j.jsx)("option",{value:"0",children:"Please select"}),null===x||void 0===x?void 0:x.map((function(t){return Object(j.jsx)("option",{value:t.id,children:t.name+" "+t.surname})}))]})})]})]})})}),Object(j.jsxs)(o.I,{children:[Object(j.jsx)(o.d,{color:"primary",onClick:function(e){t.setModal(!t.modal),function(t){var e={userId:p.userId,name:p.name,surname:p.surname,advisorId:p.advisorId,user:m};t.preventDefault(),v(Object(i.o)(Object(c.a)({},e),null===O||void 0===O?void 0:O.id)),document.getElementById("resetUpdateStudent").reset()}(e)},children:"Save changes"})," ",Object(j.jsx)(o.d,{color:"secondary",onClick:function(){return t.setModal(!t.modal)},children:"Cancel"})]})]})})})}},753:function(t,e,n){"use strict";n.r(e);var a,c=n(648),s=n(650),r=n(1),o=n(654),u=n.n(o),i=n(175),d=n(122),j=n(674),p=n(651),b=n(653),l=n(18),f=Object(b.default)(d.b)(a||(a=Object(s.a)(["\n  color: #8d0000 !important;\n"])));e.default=function(){var t=Object(i.c)((function(t){return t.student.advisor})),e=Object(i.c)((function(t){return t.auth.user.userId})),n=Object(r.useState)(!1),a=Object(c.a)(n,2),s=a[0],o=a[1],d=Object(i.b)();Object(r.useEffect)((function(){d(Object(p.j)(e))}),[d]);var b=[{selector:"userId",name:"Student ID",sortable:!0},{selector:"name",name:"Name",sortable:!0,cell:function(t){return Object(l.jsx)(f,{to:"/student-profile/".concat(t.id),children:t.name+" "+t.surname})}},{selector:"createdAt",name:"Registered",cell:function(t){var e;return Object(l.jsx)("span",{children:null===t||void 0===t||null===(e=t.createdAt)||void 0===e?void 0:e.replace("T"," ").replace(".000Z","")})},sortable:!0}];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j.a,{modal:s,setModal:o}),Object(l.jsx)(u.a,{columns:b,data:t||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})]})}}}]);
//# sourceMappingURL=15.beea92d0.chunk.js.map