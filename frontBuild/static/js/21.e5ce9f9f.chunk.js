(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{655:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return d}));var c=n(4),a=n(645),r=n.n(a),u=function(){return function(t){r.a.get("/api/department").then((function(e){t({type:c.C,payload:e.data.data})}))}},i=function(t){return function(e){r.a.get("/api/department/".concat(t)).then((function(t){e({type:c.f,payload:t.data.data})}))}},s=function(t){return function(e){r.a.post("/api/department/create",t).then((function(t){e({type:c.f,payload:t.data.data})}))}},o=function(t,e){return function(n){r.a.put("/api/department/".concat(e),t).then((function(t){n({type:c.f,payload:t.data.data})}))}},d=function(t){return function(e){r.a.delete("/api/department/".concat(t)).then((function(t){e({type:c.f,payload:t.data.data})}))}}},660:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return d}));var c=n(4),a=n(645),r=n.n(a),u=function(){return function(t){r.a.get("/api/faculty").then((function(e){t({type:c.F,payload:e.data.data})}))}},i=function(t){return function(e){r.a.get("/api/faculty/".concat(t)).then((function(t){e({type:c.g,payload:t.data.data})}))}},s=function(t){return function(e){r.a.post("/api/faculty/create",t).then((function(t){e({type:c.g,payload:t.data.data})}))}},o=function(t,e){return function(n){r.a.put("/api/faculty/".concat(e),t).then((function(t){n({type:c.g,payload:t.data.data})}))}},d=function(t){return function(e){r.a.delete("/api/faculty/".concat(t)).then((function(t){e({type:c.g,payload:t.data.data})}))}}},661:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return j}));var c=n(4),a=n(645),r=n.n(a),u=n(647),i=function(){return function(t){r.a.get("/api/course").then((function(e){t({type:c.B,payload:e.data.data})})).catch((function(e){t(Object(u.b)(e.response.data.message,e.response.status))}))}},s=function(t){return function(e){r.a.get("/api/course/".concat(t)).then((function(t){e({type:c.e,payload:t.data.data})})).catch((function(t){e(Object(u.b)(t.response.data.message,t.response.status))}))}},o=function(t){return function(e){r.a.post("/api/course/create",t).then((function(t){e({type:c.e,payload:t.data.data}),e(Object(u.b)(t.data.message,t.status))})).catch((function(t){e(Object(u.b)(t.response.data.message,t.response.status))}))}},d=function(t,e){return function(n){r.a.put("/api/course/".concat(e),t).then((function(t){n({type:c.e,payload:t.data.data}),n(Object(u.b)(t.data.message,t.status))})).catch((function(t){n(Object(u.b)(t.response.data.message,t.response.status))}))}},j=function(t){return function(e){r.a.delete("/api/course/".concat(t)).then((function(t){e({type:c.e,payload:t.data.data})})).catch((function(t){e(Object(u.b)(t.response.data.message,t.response.status))}))}}},764:function(t,e,n){"use strict";n.r(e);var c=n(176),a=n(2),r=n(648),u=n(1),i=n(649),s=n(175),o=n(646),d=n(655),j=n(660),p=n(661),l=n(18);e.default=function(){var t=Object(u.useState)({}),e=Object(r.a)(t,2),n=e[0],b=e[1],f=Object(u.useState)(0),m=Object(r.a)(f,2),h=m[0],O=m[1],x=Object(s.b)(),y=Object(s.c)((function(t){return t.department.departments})),g=Object(s.c)((function(t){return t.faculty.faculties})),C=function(t){var e=t.target,r=e.value,u=e.name;"departmentId"===u&&O(r),b(Object(a.a)(Object(a.a)({},n),{},Object(c.a)({},u,r)))},v=Object(s.c)((function(t){return t.courses.courses})).filter((function(t){return t.departmentId==h}));return Object(u.useEffect)((function(){x(Object(d.c)()),x(Object(p.c)()),x(Object(j.c)())}),[x]),Object(l.jsx)(o.j,{xs:"12",md:"15",children:Object(l.jsxs)(o.e,{children:[Object(l.jsx)(o.i,{children:"Create new Course"}),Object(l.jsx)(o.f,{children:Object(l.jsxs)(o.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetCourse",children:[Object(l.jsxs)(o.t,{row:!0,children:[Object(l.jsx)(o.j,{md:"3",children:Object(l.jsx)(o.E,{htmlFor:"number-input",children:"Name"})}),Object(l.jsx)(o.j,{xs:"12",md:"9",children:Object(l.jsx)(o.z,{id:"number-input",type:"text",name:"name",onChange:C})})]}),Object(l.jsxs)(o.t,{row:!0,children:[Object(l.jsx)(o.j,{md:"3",children:Object(l.jsx)(o.E,{htmlFor:"number-input",children:"Code"})}),Object(l.jsx)(o.j,{xs:"12",md:"9",children:Object(l.jsx)(o.z,{id:"number-input",type:"text",name:"code",onChange:C})})]}),Object(l.jsxs)(o.t,{row:!0,children:[Object(l.jsx)(o.j,{md:"3",children:Object(l.jsx)(o.E,{htmlFor:"number-input",children:"Semester"})}),Object(l.jsx)(o.j,{xs:"12",md:"9",children:Object(l.jsx)(o.z,{id:"number-input",type:"number",name:"semester",onChange:C})})]}),Object(l.jsxs)(o.t,{row:!0,children:[Object(l.jsx)(o.j,{md:"3",children:"Faculty"}),Object(l.jsx)(o.j,{xs:"12",md:"9",children:Object(l.jsxs)(o.R,{custom:!0,name:"facultyId",id:"select",onChange:C,children:[Object(l.jsx)("option",{value:"0",children:"Please select"}),g.map((function(t){return Object(l.jsx)("option",{value:t.id,children:t.name})}))]})})]}),Object(l.jsxs)(o.t,{row:!0,children:[Object(l.jsx)(o.j,{md:"3",children:"Department"}),Object(l.jsx)(o.j,{xs:"12",md:"9",children:Object(l.jsxs)(o.R,{custom:!0,name:"departmentId",id:"select",onChange:C,children:[Object(l.jsx)("option",{value:"0",children:"Please select"}),y.map((function(t){return Object(l.jsx)("option",{value:t.id,children:t.name})}))]})})]}),Object(l.jsxs)(o.t,{row:!0,children:[Object(l.jsx)(o.j,{md:"3",children:"Prerequisites"}),Object(l.jsx)(o.j,{xs:"12",md:"9",children:Object(l.jsxs)(o.R,{custom:!0,name:"prerequisites",id:"select",onChange:C,children:[Object(l.jsx)("option",{value:"0",children:"Please select"}),v.map((function(t){return Object(l.jsx)("option",{value:t.code,children:t.name})}))]})})]}),Object(l.jsxs)(o.t,{row:!0,children:[Object(l.jsx)(o.j,{md:"3",children:Object(l.jsx)(o.E,{htmlFor:"number-input",children:"Credit"})}),Object(l.jsx)(o.j,{xs:"12",md:"9",children:Object(l.jsx)(o.z,{id:"number-input",type:"number",name:"credit",onChange:C})})]}),Object(l.jsxs)(o.t,{row:!0,children:[Object(l.jsx)(o.j,{md:"3",children:Object(l.jsx)(o.E,{htmlFor:"number-input",children:"ECT5"})}),Object(l.jsx)(o.j,{xs:"12",md:"9",children:Object(l.jsx)(o.z,{id:"number-input",type:"number",name:"ECT5",onChange:C})})]})]})}),Object(l.jsxs)(o.g,{children:[Object(l.jsxs)(o.d,{type:"submit",size:"sm",color:"primary",children:[Object(l.jsx)(i.a,{name:"cil-scrubber",onClick:function(t){t.preventDefault(),x(Object(p.a)(Object(a.a)({},n))),document.getElementById("resetCourse").reset()}})," Submit"]}),Object(l.jsxs)(o.d,{type:"reset",size:"sm",color:"danger",children:[Object(l.jsx)(i.a,{name:"cil-ban",onClick:function(t){document.getElementById("resetCourse").reset()}})," Reset"]})]})]})})}}}]);
//# sourceMappingURL=21.e5ce9f9f.chunk.js.map