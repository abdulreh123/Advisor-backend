(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[27],{655:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return d}));var a=n(4),c=n(645),r=n.n(c),i=function(){return function(t){r.a.get("/api/department").then((function(e){t({type:a.C,payload:e.data.data})}))}},o=function(t){return function(e){r.a.get("/api/department/".concat(t)).then((function(t){e({type:a.f,payload:t.data.data})}))}},s=function(t){return function(e){r.a.post("/api/department/create",t).then((function(t){e({type:a.f,payload:t.data.data})}))}},u=function(t,e){return function(n){r.a.put("/api/department/".concat(e),t).then((function(t){n({type:a.f,payload:t.data.data})}))}},d=function(t){return function(e){r.a.delete("/api/department/".concat(t)).then((function(t){e({type:a.f,payload:t.data.data})}))}}},658:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return l}));var a=n(4),c=n(645),r=n.n(c),i=n(647),o=function(){return function(t){r.a.get("/api/chairman").then((function(e){t({type:a.z,payload:e.data.data})})).catch((function(e){t(Object(i.b)(e.response.data.message,e.response.status))}))}},s=function(t){return function(e){r.a.get("/api/chairman/".concat(t)).then((function(t){e({type:a.d,payload:t.data.data})})).catch((function(t){e(Object(i.b)(t.response.data.message,t.response.status))}))}},u=function(t){return function(e){r.a.post("/api/chairman/create",t).then((function(t){e({type:a.d,payload:t.data.data}),e(Object(i.b)(t.data.message,t.status))})).catch((function(t){e(Object(i.b)(t.response.data.message,t.response.status))}))}},d=function(t,e){return function(n){r.a.put("/api/chairman/".concat(e),t).then((function(t){n({type:a.d,payload:t.data.data}),n(Object(i.b)(t.data.message,t.status))})).catch((function(t){n(Object(i.b)(t.response.data.message,t.response.status))}))}},l=function(t){return function(e){r.a.delete("/api/chairman/".concat(t)).then((function(t){e({type:a.d,payload:t.data.data})})).catch((function(t){e(Object(i.b)(t.response.data.message,t.response.status))}))}}},782:function(t,e,n){"use strict";n.r(e);var a=n(648),c=n(1),r=n(654),i=n.n(r),o=n(175),s=n(176),u=n(2),d=n(646),l=n(655),j=n(18),p=function(t){var e=Object(c.useState)({}),n=Object(a.a)(e,2),r=n[0],i=n[1],p=Object(o.b)(),f=Object(o.c)((function(t){return t.chairmans.chairmans})),m=Object(o.c)((function(t){return t.department.department})),b=function(t){var e=t.target,n=e.value,a=e.name;i(Object(u.a)(Object(u.a)({},r),{},Object(s.a)({},a,n)))};return Object(j.jsx)(d.Q,{children:Object(j.jsx)(d.f,{children:Object(j.jsxs)(d.G,{show:t.modal,onClose:function(){return t.setModal(!t.modal)},color:"primary",children:[Object(j.jsx)(d.J,{closeButton:!0,children:Object(j.jsx)(d.K,{children:"Update Department"})}),Object(j.jsx)(d.H,{children:Object(j.jsx)(d.f,{children:Object(j.jsxs)(d.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetEditDepartment",children:[Object(j.jsxs)(d.t,{row:!0,children:[Object(j.jsx)(d.j,{md:"3",children:Object(j.jsx)(d.E,{htmlFor:"number-input",children:"Name"})}),Object(j.jsx)(d.j,{xs:"12",md:"9",children:Object(j.jsx)(d.z,{id:"number-input",type:"text",name:"name",onChange:b,defaultValue:null===m||void 0===m?void 0:m.name})})]}),Object(j.jsxs)(d.t,{row:!0,children:[Object(j.jsxs)(d.j,{md:"3",children:["Chairman",Object(j.jsx)(d.E,{htmlFor:"select",children:"Select"})]}),Object(j.jsx)(d.j,{xs:"12",md:"9",children:Object(j.jsxs)(d.R,{custom:!0,name:"chairmanId",id:"select",onChange:b,children:[Object(j.jsx)("option",{value:"0",children:"Please select"}),null===f||void 0===f?void 0:f.map((function(t){return Object(j.jsx)("option",{value:t.id,children:t.name})}))]})})]})]})})}),Object(j.jsxs)(d.I,{children:[Object(j.jsx)(d.d,{color:"primary",onClick:function(e){t.setModal(!t.modal),function(t){t.preventDefault(),p(Object(l.e)(Object(u.a)({},r),null===m||void 0===m?void 0:m.id)),document.getElementById("resetEditDepartment").reset()}(e)},children:"Update"})," ",Object(j.jsx)(d.d,{color:"secondary",onClick:function(){return t.setModal(!t.modal)},children:"Cancel"})]})]})})})},f=n(658);e.default=function(){var t=Object(o.c)((function(t){return t.department.departments})),e=Object(o.c)((function(t){return t.auth.user})),n=Object(o.c)((function(t){return t.department.department})),r=Object(c.useState)(!1),s=Object(a.a)(r,2),u=s[0],d=s[1],m=Object(o.b)();Object(c.useEffect)((function(){m(Object(l.c)()),m(Object(f.c)())}),[m,n]);var b=[{selector:"name",name:"Name",sortable:!0},{selector:"chairman",name:"chairman",sortable:!0,cell:function(t){var e;return Object(j.jsx)("span",{children:null===(e=t.chairman)||void 0===e?void 0:e.name})}},{name:"Actions",cell:function(t){return Object(j.jsxs)("div",{className:"table-icon",children:[Object(j.jsx)("span",{style:{margin:"1rem",cursor:"pointer"},onClick:function(){d(!u),m(Object(l.d)(t.id))},children:"Edit"}),Object(j.jsx)("span",{style:{cursor:"pointer"},onClick:function(){m(Object(l.b)(t.id))},children:"Delete"})]})},ignoreRowClick:!0,allowOverflow:!0}],h=b.filter((function(t){return"Actions"!==t.name}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{modal:u,setModal:d}),Object(j.jsx)(i.a,{columns:"Chairman"===(null===e||void 0===e?void 0:e.status)||"SuperAdmin"===(null===e||void 0===e?void 0:e.status)?b:h,data:t||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})]})}}}]);
//# sourceMappingURL=27.8b2a2fd4.chunk.js.map