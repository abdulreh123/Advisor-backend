(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{650:function(e,t,n){"use strict";function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return c}))},661:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return u}));var c=n(5),i=n(646),a=n.n(i),r=n(647),s=function(){return function(e){a.a.get("/api/buildings").then((function(t){e({type:c.p,payload:t.data.data})})).catch((function(t){e(Object(r.b)(t.response.data.message,t.response.status))}))}},o=function(e){return function(t){a.a.get("/api/buildings/".concat(e)).then((function(e){t({type:c.c,payload:e.data.data})})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}},d=function(e){return function(t){a.a.post("/api/buildings/create",e).then((function(e){t({type:c.c,payload:e.data.data}),t(Object(r.b)(e.data.message,e.status))})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}},l=function(e,t){return function(n){a.a.put("/api/buildings/".concat(t),e).then((function(e){n({type:c.c,payload:e.data.data}),n(Object(r.b)(e.data.message,e.status))})).catch((function(e){n(Object(r.b)(e.response.data.message,e.response.status))}))}},u=function(e){return function(t){a.a.delete("/api/buildings/".concat(e)).then((function(e){t({type:c.c,payload:e.data.data})})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}}},775:function(e,t,n){"use strict";n.r(t);var c,i=n(648),a=n(650),r=n(1),s=n(654),o=n.n(s),d=n(175),l=n(653),u=n(645),j=n(661),b=n(176),O=n(2),m=n(18),h=function(e){var t=Object(r.useState)({}),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(d.b)(),o=function(e){var t=e.target,n=t.value,i=t.name;a(Object(O.a)(Object(O.a)({},c),{},Object(b.a)({},i,n)))};return Object(m.jsx)(u.Q,{children:Object(m.jsx)(u.f,{children:Object(m.jsxs)(u.G,{show:e.modal,onClose:function(){return e.setModal(!e.modal)},color:"primary",children:[Object(m.jsx)(u.J,{closeButton:!0,children:Object(m.jsx)(u.K,{children:"New Building"})}),Object(m.jsx)(u.H,{children:Object(m.jsx)(u.f,{children:Object(m.jsxs)(u.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetBuilding",children:[Object(m.jsxs)(u.t,{row:!0,children:[Object(m.jsx)(u.j,{md:"3",children:Object(m.jsx)(u.E,{htmlFor:"number-input",children:"Name"})}),Object(m.jsx)(u.j,{xs:"12",md:"9",children:Object(m.jsx)(u.z,{id:"number-input",type:"text",name:"name",onChange:o})})]}),Object(m.jsxs)(u.t,{row:!0,children:[Object(m.jsx)(u.j,{md:"3",children:Object(m.jsx)(u.E,{htmlFor:"number-input",children:"Longitude"})}),Object(m.jsx)(u.j,{xs:"12",md:"9",children:Object(m.jsx)(u.z,{id:"number-input",type:"float",name:"longitude",onChange:o})})]}),Object(m.jsxs)(u.t,{row:!0,children:[Object(m.jsx)(u.j,{md:"3",children:Object(m.jsx)(u.E,{htmlFor:"number-input",children:"Latitude"})}),Object(m.jsx)(u.j,{xs:"12",md:"9",children:Object(m.jsx)(u.z,{id:"number-input",type:"float",name:"latitude",onChange:o})})]})]})})}),Object(m.jsxs)(u.I,{children:[Object(m.jsx)(u.d,{color:"primary",onClick:function(t){e.setModal(!e.modal),function(e){e.preventDefault(),s(Object(j.a)(Object(O.a)({},c))),document.getElementById("resetBuilding").reset()}(t)},children:"Add"})," ",Object(m.jsx)(u.d,{color:"secondary",onClick:function(){return e.setModal(!e.modal)},children:"Cancel"})]})]})})})},f=function(e){var t=Object(r.useState)({}),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(d.b)(),o=Object(d.c)((function(e){return e.building.building})),l=function(e){var t=e.target,n=t.value,i=t.name;a(Object(O.a)(Object(O.a)({},c),{},Object(b.a)({},i,n)))};return Object(m.jsx)(u.Q,{children:Object(m.jsx)(u.f,{children:Object(m.jsxs)(u.G,{show:e.modal,onClose:function(){return e.setModal(!e.modal)},color:"primary",children:[Object(m.jsx)(u.J,{closeButton:!0,children:Object(m.jsx)(u.K,{children:"Update Building"})}),Object(m.jsx)(u.H,{children:Object(m.jsx)(u.f,{children:Object(m.jsxs)(u.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetBuilding",children:[Object(m.jsxs)(u.t,{row:!0,children:[Object(m.jsx)(u.j,{md:"3",children:Object(m.jsx)(u.E,{htmlFor:"number-input",children:"Name"})}),Object(m.jsx)(u.j,{xs:"12",md:"9",children:Object(m.jsx)(u.z,{id:"number-input",type:"text",name:"name",onChange:l,defaultValue:null===o||void 0===o?void 0:o.name})})]}),Object(m.jsxs)(u.t,{row:!0,children:[Object(m.jsx)(u.j,{md:"3",children:Object(m.jsx)(u.E,{htmlFor:"number-input",children:"Longitude"})}),Object(m.jsx)(u.j,{xs:"12",md:"9",children:Object(m.jsx)(u.z,{id:"number-input",type:"float",name:"longitude",onChange:l,defaultValue:null===o||void 0===o?void 0:o.longitude})})]}),Object(m.jsxs)(u.t,{row:!0,children:[Object(m.jsx)(u.j,{md:"3",children:Object(m.jsx)(u.E,{htmlFor:"number-input",children:"Latitude"})}),Object(m.jsx)(u.j,{xs:"12",md:"9",children:Object(m.jsx)(u.z,{id:"number-input",type:"float",name:"latitude",onChange:l,defaultValue:null===o||void 0===o?void 0:o.latitude})})]})]})})}),Object(m.jsxs)(u.I,{children:[Object(m.jsx)(u.d,{color:"primary",onClick:function(t){e.setModal(!e.modal),function(e){e.preventDefault(),s(Object(j.e)(Object(O.a)({},c),null===o||void 0===o?void 0:o.id)),document.getElementById("resetBuilding").reset()}(t)},children:"Update"})," ",Object(m.jsx)(u.d,{color:"secondary",onClick:function(){return e.setModal(!e.modal)},children:"Cancel"})]})]})})})},p=Object(l.default)(u.d)(c||(c=Object(a.a)(["\nwidth: 4rem;\n"])));t.default=function(){var e=Object(d.c)((function(e){return e.building.buildings})),t=Object(d.c)((function(e){return e.building.building})),n=Object(r.useState)(!1),c=Object(i.a)(n,2),a=c[0],s=c[1],l=Object(r.useState)(!1),u=Object(i.a)(l,2),b=u[0],O=u[1],x=Object(d.b)();Object(r.useEffect)((function(){x(Object(j.c)())}),[x,t]);var g=[{selector:"name",name:"Name",sortable:!0},{selector:"longitude",name:"Longitude",sortable:!0},{selector:"latitude",name:"Latitude",sortable:!0},{name:"Actions",cell:function(e){return Object(m.jsxs)("div",{className:"table-icon",children:[Object(m.jsx)("span",{style:{margin:"1rem"},onClick:function(){O(!b),x(Object(j.d)(e.id))},children:"Edit"}),Object(m.jsx)("span",{onClick:function(){x(Object(j.b)(e.id))},children:"Delete"})]})},ignoreRowClick:!0,allowOverflow:!0}];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{modal:a,setModal:s}),Object(m.jsx)(p,{block:!0,color:"primary",onClick:function(){return s(!0)},children:"Add"}),Object(m.jsx)(f,{modal:b,setModal:O}),Object(m.jsx)(o.a,{columns:g,data:e||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})]})}}}]);
//# sourceMappingURL=24.ff85b67b.chunk.js.map