(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{651:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return d})),n.d(e,"f",(function(){return j})),n.d(e,"b",(function(){return p}));var a=n(647),c=n(5),s=n(646),r=n.n(s),o=function(){return function(t){r.a.get("/api/advisor").then((function(e){t({type:c.n,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){r.a.get("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},i=function(t){return function(e){r.a.post("/api/advisor/create",t).then((function(t){e({type:c.a,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){r.a.get("/api/advisor/time-table/".concat(t,"?year=2021-2022 - Fall")).then((function(t){e({type:c.o,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},j=function(t,e){return function(n){r.a.put("/api/advisor/".concat(e),t).then((function(t){n({type:c.a,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},p=function(t){return function(e){r.a.delete("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},652:function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return i})),n.d(e,"l",(function(){return d})),n.d(e,"k",(function(){return j})),n.d(e,"j",(function(){return p})),n.d(e,"m",(function(){return b})),n.d(e,"b",(function(){return f})),n.d(e,"o",(function(){return m})),n.d(e,"n",(function(){return l})),n.d(e,"a",(function(){return h})),n.d(e,"e",(function(){return O})),n.d(e,"d",(function(){return x})),n.d(e,"c",(function(){return y})),n.d(e,"f",(function(){return g}));var a=n(647),c=n(5),s=n(646),r=n.n(s),o=function(){return function(t){r.a.get("/api/student").then((function(e){t({type:c.D,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){r.a.get("/api/chairman/statistics/".concat(t)).then((function(t){e({type:c.t,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},i=function(t){return function(e){r.a.get("/api/student/".concat(t)).then((function(t){e({type:c.C,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){r.a.get("/api/student/time-table/".concat(t,"?year=2021-2022 - Fall")).then((function(t){e({type:c.F,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},j=function(t,e){return function(n){r.a.get("/api/student/stats/".concat(t,"/").concat(e)).then((function(t){n({type:c.E,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},p=function(t){return function(e){r.a.get("/api/student/advisor/".concat(t)).then((function(t){e({type:c.H,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},b=function(t){return function(e){r.a.get("/api/student/transcript/".concat(t)).then((function(t){e({type:c.G,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},f=function(t){return function(e){r.a.post("/api/student/create",t).then((function(t){e({type:c.j,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},m=function(t,e){return function(n){r.a.put("/api/student/".concat(e),t).then((function(t){n({type:c.j,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},l=function(t,e,n){return function(s){r.a.put("/api/student/".concat(e,"/").concat(n),t).then((function(t){s({type:c.j,payload:t.data.data}),s(Object(a.b)(t.data.message,t.status))})).catch((function(t){s(Object(a.b)(t.response.data.message,t.response.status))}))}},h=function(t,e){return function(n){r.a.put("/api/student/add/remove/".concat(t),e).then((function(t){n({type:c.j,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},O=function(t,e){return function(n){r.a.get("/api/student/automate/".concat(t,"?year=").concat(e)).then((function(t){n({type:c.q,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},x=function(t){return function(e){r.a.get("/api/student/get-approve/".concat(t)).then((function(t){e({type:c.l,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},y=function(t,e){return function(n){r.a.put("/api/student//approve/".concat(t,"/").concat(e)).then((function(t){n({type:c.m,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},g=function(t){return function(e){r.a.delete("/api/student/".concat(t)).then((function(t){e({type:c.j,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},655:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return d}));var a=n(5),c=n(646),s=n.n(c),r=function(){return function(t){s.a.get("/api/department").then((function(e){t({type:a.v,payload:e.data.data})}))}},o=function(t){return function(e){s.a.get("/api/department/".concat(t)).then((function(t){e({type:a.f,payload:t.data.data})}))}},u=function(t){return function(e){s.a.post("/api/department/create",t).then((function(t){e({type:a.f,payload:t.data.data})}))}},i=function(t,e){return function(n){s.a.put("/api/department/".concat(e),t).then((function(t){n({type:a.f,payload:t.data.data})}))}},d=function(t){return function(e){s.a.delete("/api/department/".concat(t)).then((function(t){e({type:a.f,payload:t.data.data})}))}}},756:function(t,e,n){"use strict";n.r(e);var a=n(176),c=n(2),s=n(648),r=n(1),o=n(649),u=n(175),i=n(651),d=n(655),j=n(645),p=n(652),b=n(18);e.default=function(){var t=Object(r.useState)({}),e=Object(s.a)(t,2),n=e[0],f=e[1],m=Object(r.useState)({}),l=Object(s.a)(m,2),h=l[0],O=l[1],x=Object(u.c)((function(t){return t.advisor.advisors})),y=Object(u.c)((function(t){return t.department.departments})),g=Object(u.b)(),v=function(t){var e=t.target,s=e.value,r=e.name;f(Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},r,parseInt(s)))),f(Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},r,s)))},w=function(t){var e=t.target,n=e.value,s=e.name;O(Object(c.a)(Object(c.a)({},h),{},Object(a.a)({},s,n)))};return Object(r.useEffect)((function(){g(Object(i.c)()),g(Object(d.c)())}),[g]),Object(b.jsx)(j.j,{xs:"12",md:"15",children:Object(b.jsxs)(j.e,{children:[Object(b.jsx)(j.i,{children:"Register new student"}),Object(b.jsx)(j.f,{children:Object(b.jsxs)(j.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetStudent",children:[Object(b.jsxs)(j.t,{row:!0,children:[Object(b.jsx)(j.j,{md:"3",children:Object(b.jsx)(j.E,{htmlFor:"number-input",children:"Student ID"})}),Object(b.jsx)(j.j,{xs:"12",md:"9",children:Object(b.jsx)(j.z,{id:"number-input",type:"number",name:"userId",onChange:v})})]}),Object(b.jsxs)(j.t,{row:!0,children:[Object(b.jsx)(j.j,{md:"3",children:Object(b.jsx)(j.E,{htmlFor:"number-input",children:"Name"})}),Object(b.jsx)(j.j,{xs:"12",md:"9",children:Object(b.jsx)(j.z,{id:"number-input",type:"text",name:"name",onChange:v})})]}),Object(b.jsxs)(j.t,{row:!0,children:[Object(b.jsx)(j.j,{md:"3",children:Object(b.jsx)(j.E,{htmlFor:"number-input",children:"Surname"})}),Object(b.jsx)(j.j,{xs:"12",md:"9",children:Object(b.jsx)(j.z,{id:"number-input",type:"text",name:"surname",onChange:v})})]}),Object(b.jsxs)(j.t,{row:!0,children:[Object(b.jsx)(j.j,{md:"3",children:Object(b.jsx)(j.E,{htmlFor:"number-input",children:"Passport Number"})}),Object(b.jsx)(j.j,{xs:"12",md:"9",children:Object(b.jsx)(j.z,{id:"number-input",type:"text",name:"passportNumber",onChange:v})})]}),Object(b.jsxs)(j.t,{row:!0,children:[Object(b.jsx)(j.j,{md:"3",children:Object(b.jsx)(j.E,{htmlFor:"number-input",children:"Nationality"})}),Object(b.jsx)(j.j,{xs:"12",md:"9",children:Object(b.jsx)(j.z,{id:"number-input",type:"text",name:"nationality",onChange:v})})]}),Object(b.jsxs)(j.t,{row:!0,children:[Object(b.jsx)(j.j,{md:"3",children:Object(b.jsx)(j.E,{htmlFor:"number-input",children:"Username"})}),Object(b.jsx)(j.j,{xs:"12",md:"9",children:Object(b.jsx)(j.z,{id:"number-input",type:"text",name:"userName",onChange:w})})]}),Object(b.jsxs)(j.t,{row:!0,children:[Object(b.jsx)(j.j,{md:"3",children:Object(b.jsx)(j.E,{htmlFor:"password-input",children:"Password"})}),Object(b.jsx)(j.j,{xs:"12",md:"9",children:Object(b.jsx)(j.z,{type:"password",id:"password-input",name:"password",onChange:w})})]}),Object(b.jsxs)(j.t,{row:!0,children:[Object(b.jsx)(j.j,{md:"3",children:Object(b.jsx)(j.E,{htmlFor:"date-input",children:"Date of birth"})}),Object(b.jsx)(j.j,{xs:"12",md:"9",children:Object(b.jsx)(j.z,{type:"date",id:"date-input",name:"dob"})})]}),Object(b.jsxs)(j.t,{row:!0,children:[Object(b.jsxs)(j.j,{md:"3",children:["advisor",Object(b.jsx)(j.E,{htmlFor:"select",children:"Select"})]}),Object(b.jsx)(j.j,{xs:"12",md:"9",children:Object(b.jsxs)(j.R,{custom:!0,name:"advisorId",id:"select",onChange:v,children:[Object(b.jsx)("option",{value:"0",children:"Please select"}),null===x||void 0===x?void 0:x.map((function(t){return Object(b.jsx)("option",{value:t.id,children:t.name+" "+t.surname})}))]})})]}),Object(b.jsxs)(j.t,{row:!0,children:[Object(b.jsx)(j.j,{md:"3",children:"Department"}),Object(b.jsx)(j.j,{xs:"12",md:"9",children:Object(b.jsxs)(j.R,{custom:!0,name:"departmentId",id:"select",onChange:v,children:[Object(b.jsx)("option",{value:"0",children:"Please select"}),null===y||void 0===y?void 0:y.map((function(t){return Object(b.jsx)("option",{value:t.id,children:t.name})}))]})})]})]})}),Object(b.jsxs)(j.g,{children:[Object(b.jsxs)(j.d,{type:"submit",size:"sm",color:"primary",children:[Object(b.jsx)(o.a,{name:"cil-scrubber",onClick:function(t){var e={userId:n.userId,name:n.name,surname:n.surname,passportNumber:n.passportNumber,nationality:n.nationality,advisorId:n.advisorId,departmentId:n.departmentId,user:h};t.preventDefault(),g(Object(p.b)(Object(c.a)({},e))),document.getElementById("resetStudent").reset()}})," Submit"]}),Object(b.jsxs)(j.d,{type:"reset",size:"sm",color:"danger",children:[Object(b.jsx)(o.a,{name:"cil-ban"})," Reset"]})]})]})})}}}]);
//# sourceMappingURL=17.3df2e36f.chunk.js.map