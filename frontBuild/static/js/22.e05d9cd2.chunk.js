(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{651:function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return i})),n.d(e,"l",(function(){return d})),n.d(e,"k",(function(){return j})),n.d(e,"j",(function(){return p})),n.d(e,"m",(function(){return b})),n.d(e,"b",(function(){return f})),n.d(e,"o",(function(){return m})),n.d(e,"n",(function(){return h})),n.d(e,"a",(function(){return l})),n.d(e,"e",(function(){return O})),n.d(e,"d",(function(){return x})),n.d(e,"c",(function(){return y})),n.d(e,"f",(function(){return g}));var a=n(647),c=n(5),s=n(646),r=n.n(s),o=function(){return function(t){r.a.get("/api/student").then((function(e){t({type:c.B,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){r.a.get("/api/chairman/statistics/".concat(t)).then((function(t){e({type:c.r,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},i=function(t){return function(e){r.a.get("/api/student/".concat(t)).then((function(t){e({type:c.A,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){r.a.get("/api/student/time-table/".concat(t,"?year=2021-2022 - Spring")).then((function(t){e({type:c.D,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},j=function(t,e){return function(n){r.a.get("/api/student/stats/".concat(t,"/").concat(e)).then((function(t){n({type:c.C,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},p=function(t){return function(e){r.a.get("/api/student/advisor/".concat(t)).then((function(t){e({type:c.F,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},b=function(t){return function(e){r.a.get("/api/student/transcript/".concat(t)).then((function(t){e({type:c.E,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},f=function(t){return function(e){r.a.post("/api/student/create",t).then((function(t){e({type:c.i,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},m=function(t,e){return function(n){r.a.put("/api/student/".concat(e),t).then((function(t){n({type:c.i,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},h=function(t,e,n){return function(s){r.a.put("/api/student/".concat(e,"/").concat(n),t).then((function(t){s({type:c.i,payload:t.data.data}),s(Object(a.b)(t.data.message,t.status))})).catch((function(t){s(Object(a.b)(t.response.data.message,t.response.status))}))}},l=function(t,e){return function(n){r.a.put("/api/student/add/remove/".concat(t),e).then((function(t){n({type:c.i,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},O=function(t,e){return function(n){r.a.get("/api/student/automate/".concat(t,"?year=").concat(e)).then((function(t){n({type:c.o,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},x=function(t){return function(e){r.a.get("/api/student/get-approve/".concat(t)).then((function(t){e({type:c.k,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},y=function(t,e){return function(n){r.a.put("/api/student//approve/".concat(t,"/").concat(e)).then((function(t){n({type:c.l,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},g=function(t){return function(e){r.a.delete("/api/student/".concat(t)).then((function(t){e({type:c.i,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},652:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return j}));var a=n(647),c=n(5),s=n(646),r=n.n(s),o=function(){return function(t){r.a.get("/api/advisor").then((function(e){t({type:c.m,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){r.a.get("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},i=function(t){return function(e){r.a.post("/api/advisor/create",t).then((function(t){e({type:c.a,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t,e){return function(n){r.a.put("/api/advisor/".concat(e),t).then((function(t){n({type:c.a,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},j=function(t){return function(e){r.a.delete("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},755:function(t,e,n){"use strict";n.r(e);var a=n(176),c=n(2),s=n(648),r=n(1),o=n(649),u=n(175),i=n(652),d=n(645),j=n(651),p=n(18);e.default=function(){var t=Object(r.useState)({}),e=Object(s.a)(t,2),n=e[0],b=e[1],f=Object(r.useState)({}),m=Object(s.a)(f,2),h=m[0],l=m[1],O=Object(u.c)((function(t){return t.advisor.advisors})),x=Object(u.b)(),y=function(t){var e=t.target,s=e.value,r=e.name;b(Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},r,parseInt(s)))),b(Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},r,s)))},g=function(t){var e=t.target,n=e.value,s=e.name;l(Object(c.a)(Object(c.a)({},h),{},Object(a.a)({},s,n)))};return Object(r.useEffect)((function(){x(Object(i.c)())}),[x]),Object(p.jsx)(d.j,{xs:"12",md:"15",children:Object(p.jsxs)(d.e,{children:[Object(p.jsx)(d.i,{children:"Register new student"}),Object(p.jsx)(d.f,{children:Object(p.jsxs)(d.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetStudent",children:[Object(p.jsxs)(d.t,{row:!0,children:[Object(p.jsx)(d.j,{md:"3",children:Object(p.jsx)(d.E,{htmlFor:"number-input",children:"Student ID"})}),Object(p.jsx)(d.j,{xs:"12",md:"9",children:Object(p.jsx)(d.z,{id:"number-input",type:"number",name:"userId",onChange:y})})]}),Object(p.jsxs)(d.t,{row:!0,children:[Object(p.jsx)(d.j,{md:"3",children:Object(p.jsx)(d.E,{htmlFor:"number-input",children:"Name"})}),Object(p.jsx)(d.j,{xs:"12",md:"9",children:Object(p.jsx)(d.z,{id:"number-input",type:"text",name:"name",onChange:y})})]}),Object(p.jsxs)(d.t,{row:!0,children:[Object(p.jsx)(d.j,{md:"3",children:Object(p.jsx)(d.E,{htmlFor:"number-input",children:"Surname"})}),Object(p.jsx)(d.j,{xs:"12",md:"9",children:Object(p.jsx)(d.z,{id:"number-input",type:"text",name:"surname",onChange:y})})]}),Object(p.jsxs)(d.t,{row:!0,children:[Object(p.jsx)(d.j,{md:"3",children:Object(p.jsx)(d.E,{htmlFor:"number-input",children:"Passport Number"})}),Object(p.jsx)(d.j,{xs:"12",md:"9",children:Object(p.jsx)(d.z,{id:"number-input",type:"text",name:"passportNumber",onChange:y})})]}),Object(p.jsxs)(d.t,{row:!0,children:[Object(p.jsx)(d.j,{md:"3",children:Object(p.jsx)(d.E,{htmlFor:"number-input",children:"Nationality"})}),Object(p.jsx)(d.j,{xs:"12",md:"9",children:Object(p.jsx)(d.z,{id:"number-input",type:"text",name:"nationality",onChange:y})})]}),Object(p.jsxs)(d.t,{row:!0,children:[Object(p.jsx)(d.j,{md:"3",children:Object(p.jsx)(d.E,{htmlFor:"number-input",children:"Username"})}),Object(p.jsx)(d.j,{xs:"12",md:"9",children:Object(p.jsx)(d.z,{id:"number-input",type:"text",name:"userName",onChange:g})})]}),Object(p.jsxs)(d.t,{row:!0,children:[Object(p.jsx)(d.j,{md:"3",children:Object(p.jsx)(d.E,{htmlFor:"password-input",children:"Password"})}),Object(p.jsx)(d.j,{xs:"12",md:"9",children:Object(p.jsx)(d.z,{type:"password",id:"password-input",name:"password",onChange:g})})]}),Object(p.jsxs)(d.t,{row:!0,children:[Object(p.jsx)(d.j,{md:"3",children:Object(p.jsx)(d.E,{htmlFor:"date-input",children:"Date of birth"})}),Object(p.jsx)(d.j,{xs:"12",md:"9",children:Object(p.jsx)(d.z,{type:"date",id:"date-input",name:"dob"})})]}),Object(p.jsxs)(d.t,{row:!0,children:[Object(p.jsxs)(d.j,{md:"3",children:["advisor",Object(p.jsx)(d.E,{htmlFor:"select",children:"Select"})]}),Object(p.jsx)(d.j,{xs:"12",md:"9",children:Object(p.jsxs)(d.R,{custom:!0,name:"advisorId",id:"select",onChange:y,children:[Object(p.jsx)("option",{value:"0",children:"Please select"}),null===O||void 0===O?void 0:O.map((function(t){return Object(p.jsx)("option",{value:t.id,children:t.name+" "+t.surname})}))]})})]})]})}),Object(p.jsxs)(d.g,{children:[Object(p.jsxs)(d.d,{type:"submit",size:"sm",color:"primary",children:[Object(p.jsx)(o.a,{name:"cil-scrubber",onClick:function(t){var e={userId:n.userId,name:n.name,surname:n.surname,passportNumber:n.passportNumber,nationality:n.nationality,advisorId:n.advisorId,user:h};t.preventDefault(),x(Object(j.b)(Object(c.a)({},e))),document.getElementById("resetStudent").reset()}})," Submit"]}),Object(p.jsxs)(d.d,{type:"reset",size:"sm",color:"danger",children:[Object(p.jsx)(o.a,{name:"cil-ban"})," Reset"]})]})]})})}}}]);
//# sourceMappingURL=22.e05d9cd2.chunk.js.map