(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{643:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){c=!0,i=u}finally{try{r||null==o.return||o.return()}finally{if(c)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return c}))},655:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(5),c=n(645),i=n.n(c),a=function(){return function(e){i.a.get("/api/department").then((function(t){e({type:r.q,payload:t.data.data})}))}},o=function(e){return function(t){i.a.post("/api/department/create",e).then((function(e){t({type:r.d,payload:e.data.data})}))}}},660:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return s}));var r=n(5),c=n(645),i=n.n(c),a=function(){return function(e){i.a.get("/api/course").then((function(t){e({type:r.p,payload:t.data.data})}))}},o=function(e){return function(t){i.a.get("/api/course/".concat(e)).then((function(e){t({type:r.c,payload:e.data.data})}))}},u=function(e){return function(t){i.a.post("/api/course/create",e).then((function(e){t({type:r.c,payload:e.data.data})}))}},s=function(e,t){return function(n){i.a.put("/api/course/".concat(t),e).then((function(e){n({type:r.c,payload:e.data.data})}))}}},754:function(e,t,n){"use strict";n.r(t);var r=n(176),c=n(2),i=n(643),a=n(1),o=n(647),u=n(175),s=n(644),d=n(655),j=n(660),l=n(21);t.default=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],b=t[1],m=Object(a.useState)(0),p=Object(i.a)(m,2),h=p[0],f=p[1],O=Object(u.b)(),x=Object(u.c)((function(e){return e.department.departments})),y=function(e){var t=e.target,i=t.value,a=t.name;"departmentId"===a&&f(i),b(Object(c.a)(Object(c.a)({},n),{},Object(r.a)({},a,i)))},g=Object(u.c)((function(e){return e.courses.courses})).filter((function(e){return e.departmentId==h}));return Object(a.useEffect)((function(){O(Object(d.b)()),O(Object(j.b)())}),[O]),Object(l.jsx)(s.j,{xs:"12",md:"15",children:Object(l.jsxs)(s.e,{children:[Object(l.jsx)(s.i,{children:"Create new Course"}),Object(l.jsx)(s.f,{children:Object(l.jsxs)(s.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetCourse",children:[Object(l.jsxs)(s.t,{row:!0,children:[Object(l.jsx)(s.j,{md:"3",children:Object(l.jsx)(s.E,{htmlFor:"number-input",children:"Name"})}),Object(l.jsx)(s.j,{xs:"12",md:"9",children:Object(l.jsx)(s.z,{id:"number-input",type:"text",name:"name",onChange:y})})]}),Object(l.jsxs)(s.t,{row:!0,children:[Object(l.jsx)(s.j,{md:"3",children:Object(l.jsx)(s.E,{htmlFor:"number-input",children:"Code"})}),Object(l.jsx)(s.j,{xs:"12",md:"9",children:Object(l.jsx)(s.z,{id:"number-input",type:"text",name:"code",onChange:y})})]}),Object(l.jsxs)(s.t,{row:!0,children:[Object(l.jsx)(s.j,{md:"3",children:Object(l.jsx)(s.E,{htmlFor:"number-input",children:"Semester"})}),Object(l.jsx)(s.j,{xs:"12",md:"9",children:Object(l.jsx)(s.z,{id:"number-input",type:"number",name:"semester",onChange:y})})]}),Object(l.jsxs)(s.t,{row:!0,children:[Object(l.jsx)(s.j,{md:"3",children:"Department"}),Object(l.jsx)(s.j,{xs:"12",md:"9",children:Object(l.jsxs)(s.O,{custom:!0,name:"departmentId",id:"select",onChange:y,children:[Object(l.jsx)("option",{value:"0",children:"Please select"}),x.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name})}))]})})]}),Object(l.jsxs)(s.t,{row:!0,children:[Object(l.jsx)(s.j,{md:"3",children:"Prerequisites"}),Object(l.jsx)(s.j,{xs:"12",md:"9",children:Object(l.jsxs)(s.O,{custom:!0,name:"prerequisites",id:"select",onChange:y,children:[Object(l.jsx)("option",{value:"0",children:"Please select"}),g.map((function(e){return Object(l.jsx)("option",{value:e.code,children:e.name})}))]})})]}),Object(l.jsxs)(s.t,{row:!0,children:[Object(l.jsx)(s.j,{md:"3",children:Object(l.jsx)(s.E,{htmlFor:"number-input",children:"Credit"})}),Object(l.jsx)(s.j,{xs:"12",md:"9",children:Object(l.jsx)(s.z,{id:"number-input",type:"number",name:"credit",onChange:y})})]}),Object(l.jsxs)(s.t,{row:!0,children:[Object(l.jsx)(s.j,{md:"3",children:Object(l.jsx)(s.E,{htmlFor:"number-input",children:"ECT5"})}),Object(l.jsx)(s.j,{xs:"12",md:"9",children:Object(l.jsx)(s.z,{id:"number-input",type:"number",name:"ECT5",onChange:y})})]})]})}),Object(l.jsxs)(s.g,{children:[Object(l.jsxs)(s.d,{type:"submit",size:"sm",color:"primary",children:[Object(l.jsx)(o.a,{name:"cil-scrubber",onClick:function(e){e.preventDefault(),O(Object(j.a)(Object(c.a)({},n))),document.getElementById("resetCourse").reset()}})," Submit"]}),Object(l.jsxs)(s.d,{type:"reset",size:"sm",color:"danger",children:[Object(l.jsx)(o.a,{name:"cil-ban",onClick:function(e){document.getElementById("resetCourse").reset()}})," Reset"]})]})]})})}}}]);
//# sourceMappingURL=22.98445954.chunk.js.map