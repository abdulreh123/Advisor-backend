(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{652:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return j}));var r=n(647),a=n(5),c=n(646),i=n.n(c),s=function(){return function(e){i.a.get("/api/advisor").then((function(t){e({type:a.m,payload:t.data.data})})).catch((function(t){e(Object(r.b)(t.response.data.message,t.response.status))}))}},d=function(e){return function(t){i.a.get("/api/advisor/".concat(e)).then((function(e){t({type:a.a,payload:e.data.data})})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}},l=function(e){return function(t){i.a.post("/api/advisor/create",e).then((function(e){t({type:a.a,payload:e.data.data}),t(Object(r.b)(e.data.message,e.status))})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}},o=function(e,t){return function(n){i.a.put("/api/advisor/".concat(t),e).then((function(e){n({type:a.a,payload:e.data.data}),n(Object(r.b)(e.data.message,e.status))})).catch((function(e){n(Object(r.b)(e.response.data.message,e.response.status))}))}},j=function(e){return function(t){i.a.delete("/api/advisor/".concat(e)).then((function(e){t({type:a.a,payload:e.data.data})})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}}},773:function(e,t,n){"use strict";n.r(t);var r,a,c,i,s,d,l,o,j,b,u,m,h=n(1),O=n(175),p=n(650),x=n(645),v=n(649),f=n(653),g=(n(655),n(654)),y=n.n(g),w=n(652),k=n(122),C=n(18),S=Object(f.default)(k.b)(r||(r=Object(p.a)(["\n  color: #8d0000 !important;\n"]))),I=f.default.div(a||(a=Object(p.a)(["\ndisplay: grid;\ngrid-template-columns:  25% 75%;\ngrid-gap: 5rem;\npadding: 10px;\nborder-radius: 9px;\n@media (max-width:1200px)\n{\n  display:block;\n}\n"]))),A=f.default.div(c||(c=Object(p.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  text-align: -webkit-center;\n"]))),T=f.default.div(i||(i=Object(p.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  margin-right: 5rem; \n  @media (max-width:1200px)\n{ \n  width: 100%;\n  margin-top:2rem;\n}\n"]))),E=f.default.div(s||(s=Object(p.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  margin-top: 3rem; \n"]))),M=function(){var e=Object(O.c)((function(e){return e.auth.user})),t=Object(O.c)((function(e){return e.advisor.advisor.Students})),n=Object(O.c)((function(e){return e.advisor.advisor.Group})),r=null===e||void 0===e?void 0:e.Id,a=Object(O.b)();Object(h.useEffect)((function(){a(Object(w.d)(r))}),[]);var c=[{selector:"userId",name:"Student ID",sortable:!0},{selector:"name",name:"Name",sortable:!0,cell:function(e){return Object(C.jsx)(S,{to:"/student-profile/".concat(e.id),children:e.name+" "+e.surname})}},{selector:"createdAt",name:"Registered",cell:function(e){var t;return Object(C.jsx)("span",{children:null===e||void 0===e||null===(t=e.createdAt)||void 0===t?void 0:t.replace("T"," ").replace(".000Z","")})},sortable:!0}],i=[{selector:"name",name:"Name",sortable:!0,cell:function(e){return Object(C.jsx)(S,{to:"/courseDashboard/".concat(e.id),children:e.name})}},{selector:"year",name:"Year",sortable:!0}];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(I,{class:"content",children:[Object(C.jsxs)(A,{children:[Object(C.jsx)("div",{style:{width:"9rem"},children:Object(C.jsx)(x.y,{src:"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})}),Object(C.jsx)("h3",{style:{color:"black",fontSize:"1.2rem"},children:null===e||void 0===e?void 0:e.name}),Object(C.jsx)("p",{style:{color:"black"},children:"Instructor"}),Object(C.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(C.jsx)(v.a,{name:"cil-envelope-open"}),Object(C.jsxs)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:[(null===e||void 0===e?void 0:e.name.toLowerCase())+"."+(null===e||void 0===e?void 0:e.name.toLowerCase()),"@gmail.com"]})]}),Object(C.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(C.jsx)(v.a,{name:"cil-user"}),Object(C.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===t||void 0===t?void 0:t.length})]}),Object(C.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(C.jsx)(v.a,{name:"cil-bookmark"}),Object(C.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===n||void 0===n?void 0:n.length})]})]}),Object(C.jsx)(T,{children:Object(C.jsx)("div",{style:{padding:"1rem"},children:Object(C.jsxs)(x.cb,{activeTab:"home",children:[Object(C.jsxs)(x.L,{variant:"tabs",children:[Object(C.jsx)(x.M,{children:Object(C.jsx)(x.N,{"data-tab":"home",children:"General"})}),Object(C.jsx)(x.M,{children:Object(C.jsx)(x.N,{"data-tab":"profile",children:"Contact"})})]}),Object(C.jsxs)(x.ab,{children:[Object(C.jsx)(x.bb,{"data-tab":"home",children:"Prof. Dr. Fadi Al-Turjman received his Ph.D. in computer science from Queen\u2019s University, \n                  Canada, in 2011. He is a full professor and a research center director at Near East University, \n                  Nicosia, Cyprus. Prof. Al-Turjman is a leading authority in the areas of smart/intelligent IoT systems, wireless, \n                  and mobile networks\u2019 architectures, protocols, deployments, and performance evaluation in Artificial Intelligence of \n                  Things (AIoT). His publication history spans over 350 SCI/E publications, in addition to numerous keynotes and plenary\n                   talks at flagship venues. He has authored and edited more than 40 books about cognition, security, and wireless sensor networks\u2019\n                    deployments in smart IoT environments, which have been published by well-reputed publishers such as Taylor and Francis, Elsevier, IET, and Springer. He has received several recognitions and best papers\u2019 awards at top international conferences. He also received the prestigious Best Research Paper Award from Elsevier Computer Communications Journal for the period 2015-2018, in addition to the Top Researcher Award for 2018 at Antalya Bilim University, Turkey. Prof. Al-Turjman has led a number of international symposia and workshops in flagship communication society conferences. Currently, he serves as book series editor and the lead guest/associate editor for several top tier journals, including the IEEE Communications Surveys and Tutorials (IF 23.9) and the Elsevier Sustainable Cities and Society (IF 5.7), in addition to organizing international conferences and symposiums on the most up to date research topics in AI and IoT."}),Object(C.jsx)(x.bb,{"data-tab":"profile",children:"".concat("null")})]})]})})})]}),Object(C.jsx)(E,{children:Object(C.jsx)("div",{style:{padding:"1rem"},children:Object(C.jsxs)(x.cb,{activeTab:"students",children:[Object(C.jsxs)(x.L,{variant:"tabs",children:[Object(C.jsx)(x.M,{children:Object(C.jsx)(x.N,{"data-tab":"students",children:"Students"})}),Object(C.jsx)(x.M,{children:Object(C.jsx)(x.N,{"data-tab":"courses",children:"Courses"})})]}),Object(C.jsxs)(x.ab,{children:[Object(C.jsxs)(x.bb,{"data-tab":"students",children:[Object(C.jsx)(y.a,{columns:c,data:t||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0}),"            "]}),Object(C.jsx)(x.bb,{"data-tab":"courses",children:Object(C.jsx)(y.a,{columns:i,data:n||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})})]})]})})})]})},N=n(648),H=n(176),P=n(2),z=(n(692),n(693)),F=function(e){var t,n=e.studentId,r=Object(h.useState)({}),a=Object(N.a)(r,2),c=a[0],i=a[1],s=Object(h.useState)(null),d=Object(N.a)(s,2),l=d[0],o=d[1],j=Object(O.b)(),b=function(e){var t,r=e.target,a=r.value,s=r.name;i(Object(P.a)(Object(P.a)({},c),{},(t={},Object(H.a)(t,s,a),Object(H.a)(t,"studentId",n),t)))};return Object(C.jsx)(x.Q,{children:Object(C.jsx)(x.f,{children:Object(C.jsxs)(x.G,{show:e.modal,onClose:function(){return e.setModal(!e.modal)},color:"primary",children:[Object(C.jsx)(x.J,{closeButton:!0,children:Object(C.jsx)(x.K,{children:"Add Payment"})}),Object(C.jsx)(x.H,{children:Object(C.jsxs)(x.f,{children:[Object(C.jsxs)(x.t,{row:!0,children:[Object(C.jsx)(x.j,{md:"3",children:"Type"}),Object(C.jsx)(x.j,{xs:"12",md:"9",children:Object(C.jsxs)(x.R,(t={custom:!0,name:"type",id:"select"},Object(H.a)(t,"name","type"),Object(H.a)(t,"onChange",b),Object(H.a)(t,"children",[Object(C.jsx)("option",{value:"0",children:"Please select"}),Object(C.jsx)("option",{value:"course",children:"Per Course"}),Object(C.jsx)("option",{value:"Semester",children:"Per Semester"})]),t))})]}),Object(C.jsxs)(x.t,{row:!0,children:[Object(C.jsx)(x.j,{md:"3",children:Object(C.jsx)(x.E,{htmlFor:"number-input",children:"Amount"})}),Object(C.jsx)(x.j,{xs:"12",md:"9",children:Object(C.jsx)(x.z,{id:"number-input",type:"number",name:"amount",onChange:b})})]}),Object(C.jsxs)(x.t,{row:!0,children:[Object(C.jsx)(x.j,{md:"3",children:"year"}),Object(C.jsx)(x.j,{xs:"12",md:"9",children:Object(C.jsxs)(x.R,{custom:!0,name:"year",id:"select",onChange:b,children:[Object(C.jsx)("option",{value:"0",children:"Please select"}),Object(C.jsx)("option",{value:"2020-2021 - Fall",children:"2020-2021 - Fall"}),Object(C.jsx)("option",{value:"2020-2021 - Spring",children:"2020-2021 - Spring"})]})})]}),Object(C.jsxs)(x.t,{row:!0,children:[Object(C.jsx)(x.j,{md:"3",children:"reciept"}),Object(C.jsx)(x.j,{xs:"12",md:"9",children:Object(C.jsx)(x.z,{id:"number-input",type:"file",name:"image",onChange:function(e){i(Object(P.a)(Object(P.a)({},c),{},{image:e.target.files[0].name})),o(e.target.files)}})})]})]})}),Object(C.jsxs)(x.I,{children:[Object(C.jsx)(x.d,{color:"primary",onClick:function(t){t.preventDefault(),j(Object(z.a)(c,l)),e.setModal(!e.modal)},children:"Add"})," ",Object(C.jsx)(x.d,{color:"secondary",onClick:function(){return e.setModal(!e.modal)},children:"Cancel"})]})]})})})},L=n(694),R=n(695),D=n(696),G=n(651),B=(f.default.img(d||(d=Object(p.a)(["\n  width:47%;\n  "]))),Object(f.default)(x.d)(l||(l=Object(p.a)(["\nmargin-left: 1rem;\n"])))),J=(Object(f.default)(x.d)(o||(o=Object(p.a)(["\nmargin-right: 1rem;\n"]))),f.default.div(j||(j=Object(p.a)(["\ndisplay: grid;\ngrid-template-columns:  25% 75%;\ngrid-gap: 5rem;\npadding: 10px;\nborder-radius: 9px;\n@media (max-width:1200px)\n{\n  display:block;\n}\n"])))),U=f.default.div(b||(b=Object(p.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  text-align: -webkit-center;\n"]))),Q=f.default.div(u||(u=Object(p.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  margin-right: 5rem; \n  @media (max-width:1200px)\n{ \n  width: 100%;\n  margin-top:2rem;\n}\n"]))),Y=f.default.div(m||(m=Object(p.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  margin-top: 3rem; \n  width: 99%;\n    margin-left: 0.5rem;\n"]))),K=function(){var e,t,n,r=Object(O.c)((function(e){return e.auth.user})),a=null===r||void 0===r?void 0:r.Id,c=Object(O.b)(),i=Object(h.useState)(!1),s=Object(N.a)(i,2),d=s[0],l=s[1],o=(Object(O.c)((function(e){return e.student.prediction})),Object(O.c)((function(e){return e.student.studentCourse}))),j=Object(h.useState)(!1),b=Object(N.a)(j,2),u=b[0],m=b[1],p=Object(h.useState)(!1),f=Object(N.a)(p,2),g=f[0],y=f[1];return Object(h.useEffect)((function(){c(Object(G.m)(null===r||void 0===r?void 0:r.userId))}),[r]),Object(h.useEffect)((function(){}),[c,o]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(J,{class:"content",children:[Object(C.jsxs)(U,{children:[Object(C.jsx)("div",{style:{width:"9rem"},children:Object(C.jsx)(x.y,{src:"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})}),Object(C.jsx)("h3",{style:{color:"black",fontSize:"1.2rem"},children:null===r||void 0===r?void 0:r.name}),Object(C.jsx)("p",{style:{color:"black"},children:"Student"}),Object(C.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(C.jsx)(v.a,{name:"cil-envelope-open"}),Object(C.jsxs)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:[(null===r||void 0===r||null===(e=r.name)||void 0===e?void 0:e.toLowerCase())+"."+(null===r||void 0===r||null===(t=r.name)||void 0===t?void 0:t.toLowerCase()),"@gmail.com"]})]}),Object(C.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(C.jsx)(v.a,{name:"cil-user"}),Object(C.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:"Computer Engineering"})]}),Object(C.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(C.jsx)(v.a,{name:"cil-bookmark"}),Object(C.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===r||void 0===r||null===(n=r.advisor)||void 0===n?void 0:n.name})]})]}),Object(C.jsx)(Q,{children:Object(C.jsx)("div",{style:{padding:"1rem"},children:Object(C.jsxs)(x.cb,{activeTab:"home",children:[Object(C.jsxs)(x.L,{variant:"tabs",children:[Object(C.jsx)(x.M,{children:Object(C.jsx)(x.N,{"data-tab":"home",children:"General"})}),Object(C.jsx)(x.M,{children:Object(C.jsx)(x.N,{"data-tab":"profile",children:"Contact"})})]}),Object(C.jsxs)(x.ab,{children:[Object(C.jsx)(x.bb,{"data-tab":"home",children:Object(C.jsxs)("div",{class:"card-body pt-0",style:{marginTop:"1rem"},children:[Object(C.jsxs)("table",{class:"table table-bordered",children:[Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{width:"30%",children:"Roll"}),Object(C.jsx)("td",{width:"2%",children:":"}),Object(C.jsx)("td",{children:"125"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{width:"30%",children:"Academic Year "}),Object(C.jsx)("td",{width:"2%",children:":"}),Object(C.jsx)("td",{children:"2020"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{width:"30%",children:"Gender"}),Object(C.jsx)("td",{width:"2%",children:":"}),Object(C.jsx)("td",{children:"Male"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{width:"30%",children:"Predicted Cgpa"}),Object(C.jsx)("td",{width:"2%",children:":"}),Object(C.jsx)("td",{})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{width:"30%",children:"blood"}),Object(C.jsx)("td",{width:"2%",children:":"}),Object(C.jsx)("td",{children:"B+"})]})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(B,{color:"primary",onClick:function(){return m(!u)},children:"Add courses"}),Object(C.jsx)(B,{color:"primary",onClick:function(){return y(!g)},children:"Automate Selection"})]})]})}),Object(C.jsx)(x.bb,{"data-tab":"profile",children:"null"})]})]})})})]}),Object(C.jsx)(Y,{children:Object(C.jsx)("div",{style:{padding:"1rem"},children:Object(C.jsxs)(x.cb,{activeTab:"payments",children:[Object(C.jsx)(x.L,{variant:"tabs",children:Object(C.jsx)(x.M,{children:Object(C.jsx)(x.N,{"data-tab":"payments",children:"Payments"})})}),Object(C.jsx)(x.ab,{children:Object(C.jsx)(x.bb,{"data-tab":"payments",children:Object(C.jsx)(L.a,{studentId:null===r||void 0===r?void 0:r.userId})})})]})})}),Object(C.jsx)(R.a,{modal:u,setModal:m,studentId:a}),Object(C.jsx)(D.a,{modal:g,setModal:y,studentId:a}),Object(C.jsx)(F,{modal:d,setModal:l,studentId:null===r||void 0===r?void 0:r.userId})]})};t.default=function(){var e=Object(O.c)((function(e){return e.auth.user}));return Object(C.jsxs)(C.Fragment,{children:["Advisor"===(null===e||void 0===e?void 0:e.status)?Object(C.jsx)(M,{}):null,"Student"===(null===e||void 0===e?void 0:e.status)?Object(C.jsx)(K,{}):null]})}}}]);
//# sourceMappingURL=32.039a224b.chunk.js.map