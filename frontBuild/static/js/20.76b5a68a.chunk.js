(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{643:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){c=!0,a=s}finally{try{r||null==o.return||o.return()}finally{if(c)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return c}))},653:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(7),c=n(645),a=n.n(c),i=function(){return function(e){a.a.get("/api/department").then((function(t){e({type:r.n,payload:t.data.data})}))}},o=function(e){return function(t){a.a.post("/api/department/create",e).then((function(e){t({type:r.d,payload:e.data.data})}))}}},748:function(e,t,n){"use strict";n.r(t);var r=n(175),c=n(3),a=n(643),i=n(1),o=n(644),s=n(173),u=n(642),l=n(653),d=n(22);t.default=function(){var e=Object(i.useState)({}),t=Object(a.a)(e,2),n=t[0],j=t[1],b=Object(s.b)(),m=function(e){var t=e.target,a=t.value,i=t.name;"chairmanId"===i&&j(Object(c.a)(Object(c.a)({},n),{},Object(r.a)({},i,parseInt(a)))),j(Object(c.a)(Object(c.a)({},n),{},Object(r.a)({},i,a)))};return Object(d.jsx)(u.k,{xs:"12",md:"15",children:Object(d.jsxs)(u.f,{children:[Object(d.jsx)(u.j,{children:"Create Department"}),Object(d.jsx)(u.g,{children:Object(d.jsxs)(u.t,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetDepartment",children:[Object(d.jsxs)(u.u,{row:!0,children:[Object(d.jsx)(u.k,{md:"3",children:Object(d.jsx)(u.F,{htmlFor:"number-input",children:"Name"})}),Object(d.jsx)(u.k,{xs:"12",md:"9",children:Object(d.jsx)(u.A,{id:"number-input",type:"text",name:"name",onChange:m})})]}),Object(d.jsxs)(u.u,{row:!0,children:[Object(d.jsxs)(u.k,{md:"3",children:["Chairman",Object(d.jsx)(u.F,{htmlFor:"select",children:"Select"})]}),Object(d.jsx)(u.k,{xs:"12",md:"9",children:Object(d.jsxs)(u.P,{custom:!0,name:"chairmanId",id:"select",onChange:m,children:[Object(d.jsx)("option",{value:"0",children:"Please select"}),Object(d.jsx)("option",{value:"1",children:"Option #1"}),Object(d.jsx)("option",{value:"2",children:"Option #2"}),Object(d.jsx)("option",{value:"3",children:"Option #3"})]})})]})]})}),Object(d.jsxs)(u.h,{children:[Object(d.jsxs)(u.d,{type:"submit",size:"sm",color:"primary",children:[Object(d.jsx)(o.a,{name:"cil-scrubber",onClick:function(e){e.preventDefault(),b(Object(l.a)(Object(c.a)({},n))),document.getElementById("resetDepartment").reset()}})," Submit"]}),Object(d.jsxs)(u.d,{type:"reset",size:"sm",color:"danger",children:[Object(d.jsx)(o.a,{name:"cil-ban",onClick:function(e){document.getElementById("resetDepartment").reset()}})," Reset"]})]})]})})}}}]);
//# sourceMappingURL=20.76b5a68a.chunk.js.map