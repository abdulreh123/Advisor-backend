(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{652:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return u})),n.d(e,"f",(function(){return j})),n.d(e,"b",(function(){return p}));var a=n(647),c=n(5),r=n(646),s=n.n(r),i=function(){return function(t){s.a.get("/api/advisor").then((function(e){t({type:c.m,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},o=function(t){return function(e){s.a.get("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){s.a.post("/api/advisor/create",t).then((function(t){e({type:c.a,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},u=function(t){return function(e){s.a.get("/api/advisor/time-table/".concat(t,"?year=2021-2022 - Spring")).then((function(t){e({type:c.n,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},j=function(t,e){return function(n){s.a.put("/api/advisor/".concat(e),t).then((function(t){n({type:c.a,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},p=function(t){return function(e){s.a.delete("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},656:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return u}));var a=n(5),c=n(646),r=n.n(c),s=function(){return function(t){r.a.get("/api/department").then((function(e){t({type:a.u,payload:e.data.data})}))}},i=function(t){return function(e){r.a.get("/api/department/".concat(t)).then((function(t){e({type:a.e,payload:t.data.data})}))}},o=function(t){return function(e){r.a.post("/api/department/create",t).then((function(t){e({type:a.e,payload:t.data.data})}))}},d=function(t,e){return function(n){r.a.put("/api/department/".concat(e),t).then((function(t){n({type:a.e,payload:t.data.data})}))}},u=function(t){return function(e){r.a.delete("/api/department/".concat(t)).then((function(t){e({type:a.e,payload:t.data.data})}))}}},756:function(t,e,n){"use strict";n.r(e);var a=n(176),c=n(2),r=n(648),s=n(1),i=n(649),o=n(175),d=n(656),u=n(645),j=n(652),p=n(18);e.default=function(){var t=Object(s.useState)({}),e=Object(r.a)(t,2),n=e[0],b=e[1],m=Object(s.useState)({}),l=Object(r.a)(m,2),f=l[0],O=l[1],h=Object(o.c)((function(t){return t.department.departments})),x=Object(o.b)(),y=function(t){var e=t.target,r=e.value,s=e.name;b(Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},s,parseInt(r)))),b(Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},s,r)))};console.log(n);var g=function(t){var e=t.target,n=e.value,r=e.name;O(Object(c.a)(Object(c.a)({},f),{},Object(a.a)({},r,n)))};return Object(s.useEffect)((function(){x(Object(d.c)())}),[x]),Object(p.jsx)(u.j,{xs:"12",md:"15",children:Object(p.jsxs)(u.e,{children:[Object(p.jsx)(u.i,{children:"Register new Advisor"}),Object(p.jsx)(u.f,{children:Object(p.jsxs)(u.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetAdvisor",children:[Object(p.jsxs)(u.t,{row:!0,children:[Object(p.jsx)(u.j,{md:"3",children:Object(p.jsx)(u.E,{htmlFor:"number-input",children:"Name"})}),Object(p.jsx)(u.j,{xs:"12",md:"9",children:Object(p.jsx)(u.z,{id:"number-input",type:"text",name:"name",onChange:y})})]}),Object(p.jsxs)(u.t,{row:!0,children:[Object(p.jsx)(u.j,{md:"3",children:Object(p.jsx)(u.E,{htmlFor:"number-input",children:"Surname"})}),Object(p.jsx)(u.j,{xs:"12",md:"9",children:Object(p.jsx)(u.z,{id:"number-input",type:"text",name:"surname",onChange:y})})]}),Object(p.jsxs)(u.t,{row:!0,children:[Object(p.jsx)(u.j,{md:"3",children:Object(p.jsx)(u.E,{htmlFor:"number-input",children:"Username"})}),Object(p.jsx)(u.j,{xs:"12",md:"9",children:Object(p.jsx)(u.z,{id:"number-input",type:"text",name:"userName",onChange:g})})]}),Object(p.jsxs)(u.t,{row:!0,children:[Object(p.jsx)(u.j,{md:"3",children:Object(p.jsx)(u.E,{htmlFor:"password-input",children:"Password"})}),Object(p.jsx)(u.j,{xs:"12",md:"9",children:Object(p.jsx)(u.z,{type:"password",id:"password-input",name:"password",onChange:g})})]}),Object(p.jsxs)(u.t,{row:!0,children:[Object(p.jsxs)(u.j,{md:"3",children:["Department",Object(p.jsx)(u.E,{htmlFor:"select",children:"Select"})]}),Object(p.jsx)(u.j,{xs:"12",md:"9",children:Object(p.jsxs)(u.R,{custom:!0,name:"departmentId",id:"select",onChange:y,children:[Object(p.jsx)("option",{value:"0",children:"Please select"}),null===h||void 0===h?void 0:h.map((function(t){return Object(p.jsx)("option",{value:t.id,children:t.name})}))]})})]})]})}),Object(p.jsxs)(u.g,{children:[Object(p.jsxs)(u.d,{type:"submit",size:"sm",color:"primary",children:[Object(p.jsx)(i.a,{name:"cil-scrubber",onClick:function(t){var e={userId:n.userId,name:n.name,surname:n.surname,departmentId:n.departmentId,user:f};t.preventDefault(),x(Object(j.a)(Object(c.a)({},e))),document.getElementById("resetAdvisor").reset()}})," Submit"]}),Object(p.jsxs)(u.d,{type:"reset",size:"sm",color:"danger",children:[Object(p.jsx)(i.a,{name:"cil-ban"})," Reset"]})]})]})})}}}]);
//# sourceMappingURL=22.63d0c85d.chunk.js.map