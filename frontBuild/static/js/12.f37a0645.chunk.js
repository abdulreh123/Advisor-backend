(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{643:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(c=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);c=!0);}catch(i){r=!0,a=i}finally{try{c||null==s.return||s.return()}finally{if(r)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},655:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));var c=n(646),r=n(6),a=n(645),o=n.n(a),s=function(){return function(e){o.a.get("/api/group").then((function(t){e({type:r.s,payload:t.data.data})})).catch((function(t){e(Object(c.a)(t.response.data.message,t.response.status))}))}},i=function(e){return function(t){o.a.get("/api/group/department/".concat(e)).then((function(e){t({type:r.q,payload:e.data.data})})).catch((function(e){t(Object(c.a)(e.response.data.message,e.response.status))}))}},u=function(e){return function(t){o.a.post("/api/group/create",e).then((function(e){t({type:r.e,payload:e.data.data}),t(Object(c.a)(e.data.message,e.status))})).catch((function(e){t(Object(c.a)(e.response.data.message,e.response.status))}))}}},657:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(646),r=n(6),a=n(645),o=n.n(a),s=function(){return function(e){o.a.get("/api/advisor").then((function(t){e({type:r.l,payload:t.data.data})})).catch((function(t){e(Object(c.a)(t.response.data.message,t.response.status))}))}},i=function(e){return function(t){o.a.get("/api/advisor/".concat(e)).then((function(e){t({type:r.a,payload:e.data.data})})).catch((function(e){t(Object(c.a)(e.response.data.message,e.response.status))}))}}},659:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var c=n(6),r=n(645),a=n.n(r),o=function(){return function(e){a.a.get("/api/course").then((function(t){e({type:c.o,payload:t.data.data})}))}},s=function(e){return function(t){a.a.post("/api/course/create",e).then((function(e){t({type:c.c,payload:e.data.data})}))}}},761:function(e,t,n){"use strict";n.r(t);var c=n(175),r=n(2),a=n(643),o=n(1),s=n(644),i=n(173),u=n(642),d=n(655),l=n(659),j=n(657),b=n(6),p=n(645),f=n.n(p),m=n(646),h=n(22);t.default=function(){var e=Object(o.useState)({}),t=Object(a.a)(e,2),n=t[0],p=t[1],O=Object(o.useState)(0),x=Object(a.a)(O,2),y=(x[0],x[1]),g=Object(i.b)(),v=Object(i.c)((function(e){return e.courses.courses})),k=Object(i.c)((function(e){return e.advisor.advisors})),w=(Object(i.c)((function(e){return e.rooms.rooms})),function(e){var t=e.target,a=t.value,o=t.name;"departmentId"===o&&y(a),p(Object(r.a)(Object(r.a)({},n),{},Object(c.a)({},o,a)))});return Object(o.useEffect)((function(){g(Object(l.b)()),g((function(e){f.a.get("/api/rooms").then((function(t){e({type:b.u,payload:t.data.data})})).catch((function(t){e(Object(m.a)(t.response.data.message,t.response.status))}))})),g(Object(j.a)())}),[g]),Object(h.jsx)(u.k,{xs:"12",md:"15",children:Object(h.jsxs)(u.f,{children:[Object(h.jsx)(u.j,{children:"Create new Group"}),Object(h.jsx)(u.g,{children:Object(h.jsxs)(u.t,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetCourse",children:[Object(h.jsxs)(u.u,{row:!0,children:[Object(h.jsx)(u.k,{md:"3",children:Object(h.jsx)(u.F,{htmlFor:"number-input",children:"Name"})}),Object(h.jsx)(u.k,{xs:"12",md:"9",children:Object(h.jsx)(u.A,{id:"number-input",type:"text",name:"name",onChange:w})})]}),Object(h.jsxs)(u.u,{row:!0,children:[Object(h.jsx)(u.k,{md:"3",children:"lecturer"}),Object(h.jsx)(u.k,{xs:"12",md:"9",children:Object(h.jsxs)(u.P,{custom:!0,name:"lecturerId",id:"select",onChange:w,children:[Object(h.jsx)("option",{value:"0",children:"Please select"}),null===k||void 0===k?void 0:k.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name+" "+e.surname})}))]})})]}),Object(h.jsxs)(u.u,{row:!0,children:[Object(h.jsx)(u.k,{md:"3",children:"Course"}),Object(h.jsx)(u.k,{xs:"12",md:"9",children:Object(h.jsxs)(u.P,{custom:!0,name:"courseId",id:"select",onChange:w,children:[Object(h.jsx)("option",{value:"0",children:"Please select"}),null===v||void 0===v?void 0:v.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name})}))]})})]}),Object(h.jsxs)(u.u,{row:!0,children:[Object(h.jsx)(u.k,{md:"3",children:"Academic Year"}),Object(h.jsx)(u.k,{xs:"12",md:"9",children:Object(h.jsxs)(u.P,{custom:!0,name:"year",id:"select",onChange:w,children:[Object(h.jsx)("option",{value:"0",children:"Please select"}),Object(h.jsx)("option",{value:"2021-2022 - Spring",children:"2021-2022 - Spring"}),Object(h.jsx)("option",{value:"2022-2023 - Fall",children:"2022-2023 - Fall"})]})})]})]})}),Object(h.jsxs)(u.h,{children:[Object(h.jsxs)(u.d,{type:"submit",size:"sm",color:"primary",children:[Object(h.jsx)(s.a,{name:"cil-scrubber",onClick:function(e){e.preventDefault(),g(Object(d.a)(Object(r.a)({},n)))}})," Submit"]}),Object(h.jsxs)(u.d,{type:"reset",size:"sm",color:"danger",children:[Object(h.jsx)(s.a,{name:"cil-ban",onClick:function(e){document.getElementById("resetCourse").reset()}})," Reset"]})]})]})})}}}]);
//# sourceMappingURL=12.f37a0645.chunk.js.map