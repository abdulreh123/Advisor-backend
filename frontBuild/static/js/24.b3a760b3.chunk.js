(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{659:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return r})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"g",(function(){return j})),n.d(t,"c",(function(){return b}));var c=n(4),a=n(646),i=n.n(a),s=n(647),o=function(){return function(e){i.a.get("/api/rooms").then((function(t){e({type:c.I,payload:t.data.data})})).catch((function(t){e(Object(s.b)(t.response.data.message,t.response.status))}))}},r=function(e){return function(t){i.a.get("/api/rooms/".concat(e)).then((function(e){t({type:c.i,payload:e.data.data})})).catch((function(e){t(Object(s.b)(e.response.data.message,e.response.status))}))}},d=function(e,t,n){return function(a){i.a.get("/api/rooms/availability?day=".concat(e,"&start=").concat(t,"&end=").concat(n)).then((function(e){a({type:c.I,payload:e.data.data})})).catch((function(e){a(Object(s.b)(e.response.data.message,e.response.status))}))}},u=function(e){return function(t){i.a.post("/api/rooms/create",e).then((function(e){t({type:c.i,payload:e.data.data}),t(Object(s.b)(e.data.message,e.status))})).catch((function(e){t(Object(s.b)(e.response.data.message,e.response.status))}))}},l=function(e){return function(t){i.a.post("/api/rooms//create/grouproom",e).then((function(e){t({type:c.i,payload:e.data.data}),t(Object(s.b)(e.data.message,e.status))})).catch((function(e){t(Object(s.b)(e.response.data.message,e.response.status))}))}},j=function(e,t){return function(n){i.a.put("/api/rooms/".concat(t),e).then((function(e){n({type:c.i,payload:e.data.data}),n(Object(s.b)(e.data.message,e.status))})).catch((function(e){n(Object(s.b)(e.response.data.message,e.response.status))}))}},b=function(e){return function(t){i.a.delete("/api/rooms/".concat(e)).then((function(e){t({type:c.i,payload:e.data.data})})).catch((function(e){t(Object(s.b)(e.response.data.message,e.response.status))}))}}},664:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return l}));var c=n(4),a=n(646),i=n.n(a),s=n(647),o=function(){return function(e){i.a.get("/api/buildings").then((function(t){e({type:c.x,payload:t.data.data})})).catch((function(t){e(Object(s.b)(t.response.data.message,t.response.status))}))}},r=function(e){return function(t){i.a.get("/api/buildings/".concat(e)).then((function(e){t({type:c.c,payload:e.data.data})})).catch((function(e){t(Object(s.b)(e.response.data.message,e.response.status))}))}},d=function(e){return function(t){i.a.post("/api/buildings/create",e).then((function(e){t({type:c.c,payload:e.data.data}),t(Object(s.b)(e.data.message,e.status))})).catch((function(e){t(Object(s.b)(e.response.data.message,e.response.status))}))}},u=function(e,t){return function(n){i.a.put("/api/buildings/".concat(t),e).then((function(e){n({type:c.c,payload:e.data.data}),n(Object(s.b)(e.data.message,e.status))})).catch((function(e){n(Object(s.b)(e.response.data.message,e.response.status))}))}},l=function(e){return function(t){i.a.delete("/api/buildings/".concat(e)).then((function(e){t({type:c.c,payload:e.data.data})})).catch((function(e){t(Object(s.b)(e.response.data.message,e.response.status))}))}}},775:function(e,t,n){"use strict";n.r(t);var c,a=n(648),i=n(653),s=n(1),o=n(654),r=n.n(o),d=n(175),u=n(652),l=n(645),j=n(659),b=n(664),m=n(176),O=n(2),p=n(18),f=function(e){var t=Object(s.useState)({}),n=Object(a.a)(t,2),c=n[0],i=n[1],o=Object(d.c)((function(e){return e.building.buildings})),r=Object(d.b)(),u=function(e){var t=e.target,n=t.value,a=t.name;i(Object(O.a)(Object(O.a)({},c),{},Object(m.a)({},a,n)))};return Object(p.jsx)(l.Q,{children:Object(p.jsx)(l.f,{children:Object(p.jsxs)(l.G,{show:e.modal,onClose:function(){return e.setModal(!e.modal)},color:"primary",children:[Object(p.jsx)(l.J,{closeButton:!0,children:Object(p.jsx)(l.K,{children:"New Building"})}),Object(p.jsx)(l.H,{children:Object(p.jsx)(l.f,{children:Object(p.jsxs)(l.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetBuilding",children:[Object(p.jsxs)(l.t,{row:!0,children:[Object(p.jsx)(l.j,{md:"3",children:Object(p.jsx)(l.E,{htmlFor:"number-input",children:"Name"})}),Object(p.jsx)(l.j,{xs:"12",md:"9",children:Object(p.jsx)(l.z,{id:"number-input",type:"text",name:"name",onChange:u})})]}),Object(p.jsxs)(l.t,{row:!0,children:[Object(p.jsx)(l.j,{md:"3",children:"Building"}),Object(p.jsx)(l.j,{xs:"12",md:"9",children:Object(p.jsxs)(l.R,{custom:!0,name:"buildingId",id:"select",onChange:u,children:[Object(p.jsx)("option",{value:"0",children:"Please select"}),o.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name})}))]})})]}),Object(p.jsxs)(l.t,{row:!0,children:[Object(p.jsx)(l.j,{md:"3",children:Object(p.jsx)(l.E,{htmlFor:"number-input",children:"Longitude"})}),Object(p.jsx)(l.j,{xs:"12",md:"9",children:Object(p.jsx)(l.z,{id:"number-input",type:"float",name:"longitude",onChange:u})})]}),Object(p.jsxs)(l.t,{row:!0,children:[Object(p.jsx)(l.j,{md:"3",children:Object(p.jsx)(l.E,{htmlFor:"number-input",children:"Latitude"})}),Object(p.jsx)(l.j,{xs:"12",md:"9",children:Object(p.jsx)(l.z,{id:"number-input",type:"float",name:"latitude",onChange:u})})]})]})})}),Object(p.jsxs)(l.I,{children:[Object(p.jsx)(l.d,{color:"primary",onClick:function(t){e.setModal(!e.modal),function(e){e.preventDefault(),r(Object(j.b)(Object(O.a)({},c))),document.getElementById("resetBuilding").reset()}(t)},children:"Add"})," ",Object(p.jsx)(l.d,{color:"secondary",onClick:function(){return e.setModal(!e.modal)},children:"Cancel"})]})]})})})},h=function(e){var t=Object(s.useState)({}),n=Object(a.a)(t,2),c=n[0],i=n[1],o=Object(d.b)(),r=Object(d.c)((function(e){return e.rooms.room})),u=Object(d.c)((function(e){return e.building.buildings})),b=function(e){var t=e.target,n=t.value,a=t.name;i(Object(O.a)(Object(O.a)({},c),{},Object(m.a)({},a,n)))};return Object(p.jsx)(l.Q,{children:Object(p.jsx)(l.f,{children:Object(p.jsxs)(l.G,{show:e.modal,onClose:function(){return e.setModal(!e.modal)},color:"primary",children:[Object(p.jsx)(l.J,{closeButton:!0,children:Object(p.jsx)(l.K,{children:"Update Building"})}),Object(p.jsx)(l.H,{children:Object(p.jsx)(l.f,{children:Object(p.jsxs)(l.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetBuilding",children:[Object(p.jsxs)(l.t,{row:!0,children:[Object(p.jsx)(l.j,{md:"3",children:Object(p.jsx)(l.E,{htmlFor:"number-input",children:"Name"})}),Object(p.jsx)(l.j,{xs:"12",md:"9",children:Object(p.jsx)(l.z,{id:"number-input",type:"text",name:"name",onChange:b,defaultValue:null===r||void 0===r?void 0:r.name})})]}),Object(p.jsxs)(l.t,{row:!0,children:[Object(p.jsx)(l.j,{md:"3",children:"Building"}),Object(p.jsx)(l.j,{xs:"12",md:"9",children:Object(p.jsxs)(l.R,{custom:!0,name:"buildingId",id:"select",onChange:b,children:[Object(p.jsx)("option",{value:"0",children:"Please select"}),u.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name})}))]})})]}),Object(p.jsxs)(l.t,{row:!0,children:[Object(p.jsx)(l.j,{md:"3",children:Object(p.jsx)(l.E,{htmlFor:"number-input",children:"Longitude"})}),Object(p.jsx)(l.j,{xs:"12",md:"9",children:Object(p.jsx)(l.z,{id:"number-input",type:"float",name:"longitude",onChange:b,defaultValue:null===r||void 0===r?void 0:r.longitude})})]}),Object(p.jsxs)(l.t,{row:!0,children:[Object(p.jsx)(l.j,{md:"3",children:Object(p.jsx)(l.E,{htmlFor:"number-input",children:"Latitude"})}),Object(p.jsx)(l.j,{xs:"12",md:"9",children:Object(p.jsx)(l.z,{id:"number-input",type:"float",name:"latitude",onChange:b,defaultValue:null===r||void 0===r?void 0:r.latitude})})]})]})})}),Object(p.jsxs)(l.I,{children:[Object(p.jsx)(l.d,{color:"primary",onClick:function(t){e.setModal(!e.modal),function(e){e.preventDefault(),o(Object(j.g)(Object(O.a)({},c),null===r||void 0===r?void 0:r.id)),document.getElementById("resetBuilding").reset()}(t)},children:"Update"})," ",Object(p.jsx)(l.d,{color:"secondary",onClick:function(){return e.setModal(!e.modal)},children:"Cancel"})]})]})})})},x=Object(u.default)(l.d)(c||(c=Object(i.a)(["\nwidth: 4rem;\n"])));t.default=function(){var e=Object(d.c)((function(e){return e.rooms.rooms})),t=Object(d.c)((function(e){return e.rooms.room})),n=Object(s.useState)(!1),c=Object(a.a)(n,2),i=c[0],o=c[1],u=Object(s.useState)(!1),l=Object(a.a)(u,2),m=l[0],O=l[1],g=Object(d.b)();Object(s.useEffect)((function(){g(Object(j.d)()),g(Object(b.c)())}),[g,t]);var y=[{selector:"name",name:"Name",sortable:!0},{selector:"building",name:"Building",sortable:!0,cell:function(e){return Object(p.jsx)("span",{children:e.Buildings.name})}},{selector:"longitude",name:"Longitude",sortable:!0},{selector:"latitude",name:"Latitude",sortable:!0},{name:"Actions",cell:function(e){return Object(p.jsxs)("div",{className:"table-icon",children:[Object(p.jsx)("span",{style:{margin:"1rem"},onClick:function(){O(!m),g(Object(j.f)(e.id))},children:"Edit"}),Object(p.jsx)("span",{onClick:function(){g(Object(j.c)(e.id))},children:"Delete"})]})},ignoreRowClick:!0,allowOverflow:!0}];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{modal:i,setModal:o}),Object(p.jsx)(x,{block:!0,color:"primary",onClick:function(){return o(!0)},children:"Add"}),Object(p.jsx)(h,{modal:m,setModal:O}),Object(p.jsx)(r.a,{columns:y,data:e||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})]})}}}]);
//# sourceMappingURL=24.b3a760b3.chunk.js.map