(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[36],{766:function(e,t,c){"use strict";c.r(t);var s,d,j,r,n,l,i=c(1),a=c(175),b=c(643),O=c(649),h=c(644),o=c(176),x=c(2),u=(c(690),c(691)),m=c(21),v=function(e){var t,c=e.studentId,s=Object(i.useState)({}),d=Object(b.a)(s,2),j=d[0],r=d[1],n=Object(i.useState)(null),l=Object(b.a)(n,2),O=l[0],v=l[1],p=Object(a.b)(),f=function(e){var t,s=e.target,d=s.value,n=s.name;r(Object(x.a)(Object(x.a)({},j),{},(t={},Object(o.a)(t,n,d),Object(o.a)(t,"studentId",c),t)))};return Object(m.jsx)(h.N,{children:Object(m.jsx)(h.f,{children:Object(m.jsxs)(h.G,{show:e.modal,onClose:function(){return e.setModal(!e.modal)},color:"primary",children:[Object(m.jsx)(h.J,{closeButton:!0,children:Object(m.jsx)(h.K,{children:"Add Payment"})}),Object(m.jsx)(h.H,{children:Object(m.jsxs)(h.f,{children:[Object(m.jsxs)(h.t,{row:!0,children:[Object(m.jsx)(h.j,{md:"3",children:"Type"}),Object(m.jsx)(h.j,{xs:"12",md:"9",children:Object(m.jsxs)(h.O,(t={custom:!0,name:"type",id:"select"},Object(o.a)(t,"name","type"),Object(o.a)(t,"onChange",f),Object(o.a)(t,"children",[Object(m.jsx)("option",{value:"0",children:"Please select"}),Object(m.jsx)("option",{value:"course",children:"Per Course"}),Object(m.jsx)("option",{value:"Semester",children:"Per Semester"})]),t))})]}),Object(m.jsxs)(h.t,{row:!0,children:[Object(m.jsx)(h.j,{md:"3",children:Object(m.jsx)(h.E,{htmlFor:"number-input",children:"Amount"})}),Object(m.jsx)(h.j,{xs:"12",md:"9",children:Object(m.jsx)(h.z,{id:"number-input",type:"number",name:"amount",onChange:f})})]}),Object(m.jsxs)(h.t,{row:!0,children:[Object(m.jsx)(h.j,{md:"3",children:"year"}),Object(m.jsx)(h.j,{xs:"12",md:"9",children:Object(m.jsxs)(h.O,{custom:!0,name:"year",id:"select",onChange:f,children:[Object(m.jsx)("option",{value:"0",children:"Please select"}),Object(m.jsx)("option",{value:"2020-2021 - Fall",children:"2020-2021 - Fall"}),Object(m.jsx)("option",{value:"2020-2021 - Spring",children:"2020-2021 - Spring"})]})})]}),Object(m.jsxs)(h.t,{row:!0,children:[Object(m.jsx)(h.j,{md:"3",children:"reciept"}),Object(m.jsx)(h.j,{xs:"12",md:"9",children:Object(m.jsx)(h.z,{id:"number-input",type:"file",name:"image",onChange:function(e){r(Object(x.a)(Object(x.a)({},j),{},{image:e.target.files[0].name})),v(e.target.files)}})})]})]})}),Object(m.jsxs)(h.I,{children:[Object(m.jsx)(h.d,{color:"primary",onClick:function(t){t.preventDefault(),p(Object(u.a)(j,O)),e.setModal(!e.modal)},children:"Add"})," ",Object(m.jsx)(h.d,{color:"secondary",onClick:function(){return e.setModal(!e.modal)},children:"Cancel"})]})]})})})},p=c(676),f=c(677),g=c(678),w=c(650),y=c(654),I=w.default.img(s||(s=Object(O.a)(["\n  width:47%;\n  "]))),S=(Object(w.default)(h.d)(d||(d=Object(O.a)(["\nmargin-left: 1rem;\n"]))),Object(w.default)(h.d)(j||(j=Object(O.a)(["\nmargin-right: 1rem;\n"]))),function(){var e=Object(a.c)((function(e){return e.auth.user})),t=(null===e||void 0===e||e.Id,Object(a.b)()),c=Object(i.useState)(!1),s=Object(b.a)(c,2),d=(s[0],s[1],Object(i.useState)(!1)),j=Object(b.a)(d,2),r=(j[0],j[1],Object(i.useState)(!1)),n=Object(b.a)(r,2);n[0],n[1];return Object(i.useEffect)((function(){t(Object(y.c)(null===e||void 0===e?void 0:e.department.id))}),[]),Object(m.jsx)("div",{class:"student-profile py-4",children:Object(m.jsx)("div",{class:"container",children:Object(m.jsxs)("div",{class:"row",children:[Object(m.jsx)("div",{class:"col-lg-4",children:Object(m.jsxs)("div",{class:"card shadow-sm",children:[Object(m.jsxs)("div",{class:"card-header bg-transparent text-center",children:[Object(m.jsx)(I,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(m.jsx)("h3",{children:null===e||void 0===e?void 0:e.name})]}),Object(m.jsxs)("div",{class:"card-body",children:[Object(m.jsxs)("p",{class:"mb-0",children:[Object(m.jsx)("strong",{class:"pr-1",children:"ID:"}),null===e||void 0===e?void 0:e.userId]}),Object(m.jsxs)("p",{class:"mb-0",children:[Object(m.jsx)("strong",{class:"pr-1",children:"Department:"}),"4"]})]})]})}),Object(m.jsx)("div",{class:"col-lg-8",children:Object(m.jsxs)("div",{class:"card shadow-sm",children:[Object(m.jsx)("div",{class:"card-header bg-transparent border-0",children:Object(m.jsxs)("h3",{class:"mb-0",children:[Object(m.jsx)("i",{class:"far fa-clone pr-1"}),"General Information"]})}),Object(m.jsx)("div",{class:"card-body pt-0",children:Object(m.jsxs)("table",{class:"table table-bordered",children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{width:"30%",children:"Roll"}),Object(m.jsx)("td",{width:"2%",children:":"}),Object(m.jsx)("td",{children:"125"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{width:"30%",children:"Academic Year "}),Object(m.jsx)("td",{width:"2%",children:":"}),Object(m.jsx)("td",{children:"2020"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{width:"30%",children:"Gender"}),Object(m.jsx)("td",{width:"2%",children:":"}),Object(m.jsx)("td",{children:"Male"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{width:"30%",children:"Religion"}),Object(m.jsx)("td",{width:"2%",children:":"}),Object(m.jsx)("td",{children:"Group"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{width:"30%",children:"blood"}),Object(m.jsx)("td",{width:"2%",children:":"}),Object(m.jsx)("td",{children:"B+"})]})]})})]})})]})})})}),C=w.default.img(r||(r=Object(O.a)(["\n  width:47%;\n  "]))),A=Object(w.default)(h.d)(n||(n=Object(O.a)(["\nmargin-left: 1rem;\n"]))),M=Object(w.default)(h.d)(l||(l=Object(O.a)(["\nmargin-right: 1rem;\n"]))),k=function(){var e=Object(a.c)((function(e){return e.auth.user})),t=null===e||void 0===e?void 0:e.Id,c=Object(a.b)(),s=Object(i.useState)(!1),d=Object(b.a)(s,2),j=d[0],r=d[1],n=Object(i.useState)(!1),l=Object(b.a)(n,2),O=l[0],o=l[1],x=Object(i.useState)(!1),u=Object(b.a)(x,2),w=u[0],I=u[1];return Object(i.useEffect)((function(){c(Object(y.c)(null===e||void 0===e?void 0:e.department.id))}),[]),Object(m.jsxs)("div",{class:"student-profile py-4",children:[Object(m.jsx)("div",{class:"container",children:Object(m.jsxs)("div",{class:"row",children:[Object(m.jsx)("div",{class:"col-lg-4",children:Object(m.jsxs)("div",{class:"card shadow-sm",children:[Object(m.jsxs)("div",{class:"card-header bg-transparent text-center",children:[Object(m.jsx)(C,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(m.jsx)("h3",{children:null===e||void 0===e?void 0:e.name})]}),Object(m.jsxs)("div",{class:"card-body",children:[Object(m.jsxs)("p",{class:"mb-0",children:[Object(m.jsx)("strong",{class:"pr-1",children:"Student ID:"}),null===e||void 0===e?void 0:e.userId]}),Object(m.jsxs)("p",{class:"mb-0",children:[Object(m.jsx)("strong",{class:"pr-1",children:"Department:"}),"4"]}),Object(m.jsxs)("p",{class:"mb-0",children:[Object(m.jsx)("strong",{class:"pr-1",children:"Advisor:"}),"A"]})]})]})}),Object(m.jsxs)("div",{class:"col-lg-8",children:[Object(m.jsxs)("div",{class:"card shadow-sm",children:[Object(m.jsx)("div",{class:"card-header bg-transparent border-0",children:Object(m.jsxs)("h3",{class:"mb-0",children:[Object(m.jsx)("i",{class:"far fa-clone pr-1"}),"General Information",Object(m.jsx)(A,{color:"primary",onClick:function(){return r(!j)},children:"Add payment"})]})}),Object(m.jsx)("div",{class:"card-body pt-0",children:Object(m.jsxs)("table",{class:"table table-bordered",children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{width:"30%",children:"Roll"}),Object(m.jsx)("td",{width:"2%",children:":"}),Object(m.jsx)("td",{children:"125"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{width:"30%",children:"Academic Year "}),Object(m.jsx)("td",{width:"2%",children:":"}),Object(m.jsx)("td",{children:"2020"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{width:"30%",children:"Gender"}),Object(m.jsx)("td",{width:"2%",children:":"}),Object(m.jsx)("td",{children:"Male"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{width:"30%",children:"Religion"}),Object(m.jsx)("td",{width:"2%",children:":"}),Object(m.jsx)("td",{children:"Group"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{width:"30%",children:"blood"}),Object(m.jsx)("td",{width:"2%",children:":"}),Object(m.jsx)("td",{children:"B+"})]})]})})]}),Object(m.jsx)(M,{color:"primary",onClick:function(){return o(!O)},children:"Add courses"}),Object(m.jsx)(h.d,{color:"primary",onClick:function(){return I(!w)},children:"Automate Selection"})]})]})}),Object(m.jsx)(f.a,{modal:O,setModal:o,studentId:t}),Object(m.jsx)(g.a,{modal:w,setModal:I,studentId:t}),Object(m.jsx)(v,{modal:j,setModal:r,studentId:null===e||void 0===e?void 0:e.userId}),"My Payments",Object(m.jsx)(p.a,{studentId:null===e||void 0===e?void 0:e.userId})]})};t.default=function(){var e=Object(a.c)((function(e){return e.auth.user}));return Object(m.jsxs)(m.Fragment,{children:["Advisor"===(null===e||void 0===e?void 0:e.status)?Object(m.jsx)(S,{}):null,"Student"===(null===e||void 0===e?void 0:e.status)?Object(m.jsx)(k,{}):null]})}}}]);
//# sourceMappingURL=36.45a63c59.chunk.js.map