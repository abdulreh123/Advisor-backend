(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{650:function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return i})),n.d(e,"l",(function(){return d})),n.d(e,"k",(function(){return j})),n.d(e,"j",(function(){return l})),n.d(e,"m",(function(){return p})),n.d(e,"b",(function(){return b})),n.d(e,"p",(function(){return f})),n.d(e,"o",(function(){return m})),n.d(e,"a",(function(){return h})),n.d(e,"n",(function(){return O})),n.d(e,"e",(function(){return x})),n.d(e,"d",(function(){return g})),n.d(e,"c",(function(){return y})),n.d(e,"f",(function(){return v}));var a=n(647),c=n(4),s=n(646),r=n.n(s),o=function(){return function(t){r.a.get("/api/student").then((function(e){t({type:c.M,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){r.a.get("/api/chairman/statistics/".concat(t)).then((function(t){e({type:c.A,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},i=function(t){return function(e){r.a.get("/api/student/".concat(t)).then((function(t){e({type:c.L,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){r.a.get("/api/student/time-table/".concat(t,"?year=2021-2022 - Fall")).then((function(t){e({type:c.O,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},j=function(t,e){return function(n){r.a.get("/api/student/stats/".concat(t,"/").concat(e)).then((function(t){n({type:c.N,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},l=function(t){return function(e){r.a.get("/api/student/advisor/".concat(t)).then((function(t){e({type:c.R,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},p=function(t){return function(e){r.a.get("/api/student/transcript/".concat(t)).then((function(t){e({type:c.P,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},b=function(t){return function(e){r.a.post("/api/student/create",t).then((function(t){e({type:c.k,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},f=function(t,e){return function(n){r.a.put("/api/student/".concat(e),t).then((function(t){n({type:c.k,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},m=function(t,e,n){return function(s){r.a.put("/api/student/".concat(e,"/").concat(n),t).then((function(t){s({type:c.k,payload:t.data.data}),s(Object(a.b)(t.data.message,t.status))})).catch((function(t){s(Object(a.b)(t.response.data.message,t.response.status))}))}},h=function(t,e){return function(n){r.a.put("/api/student/add/remove/".concat(t),e).then((function(t){n({type:c.k,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},O=function(t){return function(e){r.a.get("http://app.neu.edu.tr:7003/predict/%7Bvalue%7D?name=[".concat(t,"]")).then((function(t){e({type:c.J,payload:t.data})}))}},x=function(t,e){return function(n){r.a.get("/api/student/automate/".concat(t,"?year=").concat(e)).then((function(t){n({type:c.x,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},g=function(t){return function(e){r.a.get("/api/student/get-approve/".concat(t)).then((function(t){e({type:c.m,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},y=function(t,e){return function(n){r.a.put("/api/student//approve/".concat(t,"/").concat(e)).then((function(t){n({type:c.n,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},v=function(t){return function(e){r.a.delete("/api/student/".concat(t)).then((function(t){e({type:c.k,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},651:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return d})),n.d(e,"f",(function(){return j})),n.d(e,"b",(function(){return l}));var a=n(647),c=n(4),s=n(646),r=n.n(s),o=function(){return function(t){r.a.get("/api/advisor").then((function(e){t({type:c.u,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){r.a.get("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},i=function(t){return function(e){r.a.post("/api/advisor/create",t).then((function(t){e({type:c.a,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){r.a.get("/api/advisor/time-table/".concat(t,"?year=2021-2022 - Fall")).then((function(t){e({type:c.v,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},j=function(t,e){return function(n){r.a.put("/api/advisor/".concat(e),t).then((function(t){n({type:c.a,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},l=function(t){return function(e){r.a.delete("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},676:function(t,e,n){"use strict";var a=n(176),c=n(2),s=n(648),r=n(1),o=n(645),u=n(651),i=n(650),d=n(175),j=n(18);e.a=function(t){var e=Object(r.useState)({}),n=Object(s.a)(e,2),l=n[0],p=n[1],b=Object(r.useState)({}),f=Object(s.a)(b,2),m=f[0],h=f[1],O=Object(d.c)((function(t){return t.student.student})),x=Object(d.c)((function(t){return t.advisor.advisors})),g=function(t){var e=t.target,n=e.value,s=e.name;"userId"===s&&p(Object(c.a)(Object(c.a)({},l),{},Object(a.a)({},s,parseInt(n)))),p(Object(c.a)(Object(c.a)({},l),{},Object(a.a)({},s,n)))},y=function(t){var e=t.target,n=e.value,s=e.name;h(Object(c.a)(Object(c.a)({},m),{},Object(a.a)({},s,n)))},v=Object(d.b)();return Object(r.useEffect)((function(){v(Object(u.c)())}),[v]),Object(j.jsx)(o.Q,{children:Object(j.jsx)(o.f,{children:Object(j.jsxs)(o.G,{show:t.modal,onClose:function(){return t.setModal(!t.modal)},color:"primary",children:[Object(j.jsx)(o.J,{closeButton:!0,children:Object(j.jsx)(o.K,{children:"Edit Student"})}),Object(j.jsx)(o.H,{children:Object(j.jsx)(o.f,{children:Object(j.jsxs)(o.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetUpdateStudent",children:[Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"number-input",children:"Student ID"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{id:"number-input",type:"number",name:"userId",onChange:g,defaultValue:null===O||void 0===O?void 0:O.userId})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"number-input",children:"Name"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{id:"number-input",type:"text",name:"name",onChange:g,defaultValue:null===O||void 0===O?void 0:O.name})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"number-input",children:"Surname"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{id:"number-input",type:"text",name:"surname",onChange:g,defaultValue:null===O||void 0===O?void 0:O.surname})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"number-input",children:"Username"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{id:"number-input",type:"text",name:"userName",onChange:y})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"password-input",children:"Password"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{type:"password",id:"password-input",name:"password",onChange:y})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"date-input",children:"Date of birth"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{type:"date",id:"date-input",name:"dob"})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsxs)(o.j,{md:"3",children:["advisor",Object(j.jsx)(o.E,{htmlFor:"select",children:"Select"})]}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsxs)(o.R,{custom:!0,name:"advisorId",id:"select",onChange:g,children:[Object(j.jsx)("option",{value:"0",children:"Please select"}),null===x||void 0===x?void 0:x.map((function(t){return Object(j.jsx)("option",{value:t.id,children:t.name+" "+t.surname})}))]})})]}),Object(j.jsxs)(o.t,{row:!0,children:[Object(j.jsx)(o.j,{md:"3",children:Object(j.jsx)(o.E,{htmlFor:"number-input",children:"English Score"})}),Object(j.jsx)(o.j,{xs:"12",md:"9",children:Object(j.jsx)(o.z,{id:"number-input",type:"number",name:"englishScore",onChange:g,defaultValue:null===O||void 0===O?void 0:O.englishScore})})]})]})})}),Object(j.jsxs)(o.I,{children:[Object(j.jsx)(o.d,{color:"primary",onClick:function(e){t.setModal(!t.modal),function(t){var e={userId:l.userId,name:l.name,surname:l.surname,advisorId:l.advisorId,englishScore:l.englishScore,user:m};t.preventDefault(),v(Object(i.p)(Object(c.a)({},e),null===O||void 0===O?void 0:O.id)),document.getElementById("resetUpdateStudent").reset()}(e)},children:"Save changes"})," ",Object(j.jsx)(o.d,{color:"secondary",onClick:function(){return t.setModal(!t.modal)},children:"Cancel"})]})]})})})}},754:function(t,e,n){"use strict";n.r(e);var a,c=n(648),s=n(653),r=n(1),o=n(654),u=n.n(o),i=n(175),d=n(676),j=n(650),l=n(122),p=n(652),b=n(18),f=Object(p.default)(l.b)(a||(a=Object(s.a)(["\n  color: #8d0000 !important;\n"])));e.default=function(){var t=Object(i.c)((function(t){return t.student.students})),e=Object(i.c)((function(t){return t.auth.user})),n=Object(i.c)((function(t){return t.student.student})),a=Object(r.useState)(!1),s=Object(c.a)(a,2),o=s[0],l=s[1],p=Object(i.b)();Object(r.useEffect)((function(){p(Object(j.g)())}),[p,n]);var m=[{selector:"userId",name:"Student ID",sortable:!0},{selector:"name",name:"Name",sortable:!0,cell:function(t){return Object(b.jsx)(f,{to:"/student-profile/".concat(t.id),children:t.name+" "+t.surname})}},{selector:"createdAt",name:"Registered",cell:function(t){var e;return Object(b.jsx)("span",{children:null===t||void 0===t||null===(e=t.createdAt)||void 0===e?void 0:e.replace("T"," ").replace(".000Z","")})},sortable:!0},{name:"Actions",cell:function(t){return Object(b.jsxs)("div",{className:"table-icon",children:[Object(b.jsx)("span",{style:{margin:"1rem",cursor:"pointer"},onClick:function(){l(!o),p(Object(j.i)(t.id))},children:"Edit"}),Object(b.jsx)("span",{style:{cursor:"pointer"},onClick:function(){p(Object(j.f)(t.id))},children:"Delete"})]})},ignoreRowClick:!0,allowOverflow:!0}],h=m.filter((function(t){return"Actions"!==t.name}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{modal:o,setModal:l}),Object(b.jsx)(u.a,{columns:"Chairman"===(null===e||void 0===e?void 0:e.status)||"SuperAdmin"===(null===e||void 0===e?void 0:e.status)?m:h,data:t||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})]})}}}]);
//# sourceMappingURL=17.871e29bf.chunk.js.map