(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[11],{651:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return d})),n.d(e,"f",(function(){return p})),n.d(e,"b",(function(){return f}));var a=n(647),c=n(5),s=n(646),o=n.n(s),r=function(){return function(t){o.a.get("/api/advisor").then((function(e){t({type:c.n,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){o.a.get("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},i=function(t){return function(e){o.a.post("/api/advisor/create",t).then((function(t){e({type:c.a,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){o.a.get("/api/advisor/time-table/".concat(t,"?year=2021-2022 - Fall")).then((function(t){e({type:c.o,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},p=function(t,e){return function(n){o.a.put("/api/advisor/".concat(e),t).then((function(t){n({type:c.a,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},f=function(t){return function(e){o.a.delete("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},654:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"g",(function(){return b})),n.d(e,"h",(function(){return j}));var a=n(647),c=n(5),s=n(646),o=n.n(s),r=function(){return function(t){o.a.get("/api/group").then((function(e){t({type:c.y,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){o.a.get("/api/group/".concat(t)).then((function(t){e({type:c.g,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},i=function(t){return function(e){o.a.get("/api/group/clash/[".concat(t,"]")).then((function(t){})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){o.a.get("/api/group/department/".concat(t)).then((function(t){e({type:c.w,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},p=function(t){return function(e){o.a.post("/api/group/create",t).then((function(t){e({type:c.g,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},f=function(){return function(t){o.a.post("/api/group/offer-courses").then((function(e){t({type:c.g}),t(Object(a.b)("Courses Offered",e.status))})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},b=function(){return function(t){o.a.get("/api/group/year-active").then((function(e){t({type:c.H,payload:e.data.data.data.year})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},j=function(t){return function(e){console.log(t),o.a.post("/api/group/active-year",t).then((function(t){e({type:c.H,payload:t.data.data.data.year}),e(Object(a.b)("year updated",t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},659:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"f",(function(){return u})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"g",(function(){return f})),n.d(e,"c",(function(){return b}));var a=n(5),c=n(646),s=n.n(c),o=n(647),r=function(){return function(t){s.a.get("/api/rooms").then((function(e){t({type:a.B,payload:e.data.data})})).catch((function(e){t(Object(o.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){s.a.get("/api/rooms/".concat(t)).then((function(t){e({type:a.i,payload:t.data.data})})).catch((function(t){e(Object(o.b)(t.response.data.message,t.response.status))}))}},i=function(t,e,n){return function(c){s.a.get("/api/rooms/availability?day=".concat(t,"&start=").concat(e,"&end=").concat(n)).then((function(t){c({type:a.B,payload:t.data.data})})).catch((function(t){c(Object(o.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){s.a.post("/api/rooms/create",t).then((function(t){e({type:a.i,payload:t.data.data}),e(Object(o.b)(t.data.message,t.status))})).catch((function(t){e(Object(o.b)(t.response.data.message,t.response.status))}))}},p=function(t){return function(e){s.a.post("/api/rooms//create/grouproom",t).then((function(t){e({type:a.i,payload:t.data.data}),e(Object(o.b)(t.data.message,t.status))})).catch((function(t){e(Object(o.b)(t.response.data.message,t.response.status))}))}},f=function(t,e){return function(n){s.a.put("/api/rooms/".concat(e),t).then((function(t){n({type:a.i,payload:t.data.data}),n(Object(o.b)(t.data.message,t.status))})).catch((function(t){n(Object(o.b)(t.response.data.message,t.response.status))}))}},b=function(t){return function(e){s.a.delete("/api/rooms/".concat(t)).then((function(t){e({type:a.i,payload:t.data.data})})).catch((function(t){e(Object(o.b)(t.response.data.message,t.response.status))}))}}},660:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return p}));var a=n(5),c=n(646),s=n.n(c),o=n(647),r=function(){return function(t){s.a.get("/api/course").then((function(e){t({type:a.u,payload:e.data.data})})).catch((function(e){t(Object(o.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){s.a.get("/api/course/".concat(t)).then((function(t){e({type:a.e,payload:t.data.data})})).catch((function(t){e(Object(o.b)(t.response.data.message,t.response.status))}))}},i=function(t){return function(e){s.a.post("/api/course/create",t).then((function(t){e({type:a.e,payload:t.data.data}),e(Object(o.b)(t.data.message,t.status))})).catch((function(t){e(Object(o.b)(t.response.data.message,t.response.status))}))}},d=function(t,e){return function(n){s.a.put("/api/course/".concat(e),t).then((function(t){n({type:a.e,payload:t.data.data}),n(Object(o.b)(t.data.message,t.status))})).catch((function(t){n(Object(o.b)(t.response.data.message,t.response.status))}))}},p=function(t){return function(e){s.a.delete("/api/course/".concat(t)).then((function(t){e({type:a.e,payload:t.data.data})})).catch((function(t){e(Object(o.b)(t.response.data.message,t.response.status))}))}}},766:function(t,e,n){"use strict";n.r(e);var a=n(176),c=n(2),s=n(648),o=n(1),r=n(649),u=n(175),i=n(645),d=n(654),p=n(660),f=n(651),b=n(659),j=n(18);e.default=function(){var t=Object(o.useState)({}),e=Object(s.a)(t,2),n=e[0],l=e[1],h=Object(o.useState)(0),m=Object(s.a)(h,2),O=(m[0],m[1]),g=Object(u.b)(),y=Object(u.c)((function(t){return t.courses.courses})),x=Object(u.c)((function(t){return t.advisor.advisors})),v=(Object(u.c)((function(t){return t.rooms.rooms})),function(t){var e=t.target,s=e.value,o=e.name;"departmentId"===o&&O(s),l(Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},o,s)))});return Object(o.useEffect)((function(){g(Object(p.c)()),g(Object(b.d)()),g(Object(f.c)())}),[g]),Object(j.jsx)(i.j,{xs:"12",md:"15",children:Object(j.jsxs)(i.e,{children:[Object(j.jsx)(i.i,{children:"Create new Group"}),Object(j.jsx)(i.f,{children:Object(j.jsxs)(i.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetCourse",children:[Object(j.jsxs)(i.t,{row:!0,children:[Object(j.jsx)(i.j,{md:"3",children:Object(j.jsx)(i.E,{htmlFor:"number-input",children:"Name"})}),Object(j.jsx)(i.j,{xs:"12",md:"9",children:Object(j.jsx)(i.z,{id:"number-input",type:"text",name:"name",onChange:v})})]}),Object(j.jsxs)(i.t,{row:!0,children:[Object(j.jsx)(i.j,{md:"3",children:"lecturer"}),Object(j.jsx)(i.j,{xs:"12",md:"9",children:Object(j.jsxs)(i.R,{custom:!0,name:"lecturerId",id:"select",onChange:v,children:[Object(j.jsx)("option",{value:"0",children:"Please select"}),null===x||void 0===x?void 0:x.map((function(t){return Object(j.jsx)("option",{value:t.id,children:t.name+" "+t.surname})}))]})})]}),Object(j.jsxs)(i.t,{row:!0,children:[Object(j.jsx)(i.j,{md:"3",children:"Course"}),Object(j.jsx)(i.j,{xs:"12",md:"9",children:Object(j.jsxs)(i.R,{custom:!0,name:"courseId",id:"select",onChange:v,children:[Object(j.jsx)("option",{value:"0",children:"Please select"}),null===y||void 0===y?void 0:y.map((function(t){return Object(j.jsx)("option",{value:t.id,children:t.name})}))]})})]}),Object(j.jsxs)(i.t,{row:!0,children:[Object(j.jsx)(i.j,{md:"3",children:"Academic Year"}),Object(j.jsx)(i.j,{xs:"12",md:"9",children:Object(j.jsxs)(i.R,{custom:!0,name:"year",id:"select",onChange:v,children:[Object(j.jsx)("option",{value:"0",children:"Please select"}),Object(j.jsx)("option",{value:"2019-2020 - Fall",children:"2019-2020 - Fall"}),Object(j.jsx)("option",{value:"2019-2020 - Spring",children:"2019-2020 - Spring"}),Object(j.jsx)("option",{value:"2019-2020 - Summer",children:"2019-2020 - Summer"}),Object(j.jsx)("option",{value:"2020-2021 - Fall",children:"2020-2021 - Fall"}),Object(j.jsx)("option",{value:"2020-2021 - Spring",children:"2020-2021 - Spring"}),Object(j.jsx)("option",{value:"2020-2021 - Summer",children:"2020-2021 - Summer"}),Object(j.jsx)("option",{value:"2021-2022 - Fall",children:"2021-2022 - Fall"}),Object(j.jsx)("option",{value:"2021-2022 - Spring",children:"2021-2022 - Spring"}),Object(j.jsx)("option",{value:"2022-2023 - Fall",children:"2022-2023 - Fall"})]})})]})]})}),Object(j.jsxs)(i.g,{children:[Object(j.jsxs)(i.d,{type:"submit",size:"sm",color:"primary",children:[Object(j.jsx)(r.a,{name:"cil-scrubber",onClick:function(t){t.preventDefault(),g(Object(d.a)(Object(c.a)({},n)))}})," Submit"]}),Object(j.jsxs)(i.d,{type:"reset",size:"sm",color:"danger",children:[Object(j.jsx)(r.a,{name:"cil-ban",onClick:function(t){document.getElementById("resetCourse").reset()}})," Reset"]})]})]})})}}}]);
//# sourceMappingURL=11.bf5b60fe.chunk.js.map