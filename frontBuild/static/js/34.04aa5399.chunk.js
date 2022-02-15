(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{651:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return j})),n.d(t,"b",(function(){return b}));var r=n(647),a=n(5),c=n(646),i=n.n(c),s=function(){return function(e){i.a.get("/api/advisor").then((function(t){e({type:a.n,payload:t.data.data})})).catch((function(t){e(Object(r.b)(t.response.data.message,t.response.status))}))}},d=function(e){return function(t){i.a.get("/api/advisor/".concat(e)).then((function(e){t({type:a.a,payload:e.data.data})})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}},l=function(e){return function(t){i.a.post("/api/advisor/create",e).then((function(e){t({type:a.a,payload:e.data.data}),t(Object(r.b)(e.data.message,e.status))})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}},o=function(e){return function(t){i.a.get("/api/advisor/time-table/".concat(e,"?year=2021-2022 - Fall")).then((function(e){t({type:a.o,payload:e.data.data})})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}},j=function(e,t){return function(n){i.a.put("/api/advisor/".concat(t),e).then((function(e){n({type:a.a,payload:e.data.data}),n(Object(r.b)(e.data.message,e.status))})).catch((function(e){n(Object(r.b)(e.response.data.message,e.response.status))}))}},b=function(e){return function(t){i.a.delete("/api/advisor/".concat(e)).then((function(e){t({type:a.a,payload:e.data.data})})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}}},775:function(e,t,n){"use strict";n.r(t);var r,a,c,i,s,d,l,o,j,b,u,m,h=n(1),O=n(175),p=n(650),x=n(645),v=n(649),f=n(653),g=(n(654),n(655)),y=n.n(g),w=n(651),k=n(122),S=n(18),C=Object(f.default)(k.b)(r||(r=Object(p.a)(["\n  color: #8d0000 !important;\n"]))),I=f.default.div(a||(a=Object(p.a)(["\ndisplay: grid;\ngrid-template-columns:  25% 75%;\ngrid-gap: 5rem;\npadding: 10px;\nborder-radius: 9px;\n@media (max-width:1200px)\n{\n  display:block;\n}\n"]))),A=f.default.div(c||(c=Object(p.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  text-align: -webkit-center;\n"]))),T=f.default.div(i||(i=Object(p.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  margin-right: 5rem; \n  @media (max-width:1200px)\n{ \n  width: 100%;\n  margin-top:2rem;\n}\n"]))),F=f.default.div(s||(s=Object(p.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  margin-top: 3rem; \n"]))),E=function(){var e=Object(O.c)((function(e){return e.auth.user})),t=Object(O.c)((function(e){return e.advisor.advisor.Students})),n=Object(O.c)((function(e){return e.advisor.advisor.Group})),r=null===e||void 0===e?void 0:e.Id,a=Object(O.b)();Object(h.useEffect)((function(){a(Object(w.e)(r))}),[]);var c=[{selector:"userId",name:"Student ID",sortable:!0},{selector:"name",name:"Name",sortable:!0,cell:function(e){return Object(S.jsx)(C,{to:"/student-profile/".concat(e.id),children:e.name+" "+e.surname})}},{selector:"createdAt",name:"Registered",cell:function(e){var t;return Object(S.jsx)("span",{children:null===e||void 0===e||null===(t=e.createdAt)||void 0===t?void 0:t.replace("T"," ").replace(".000Z","")})},sortable:!0}],i=[{selector:"name",name:"Name",sortable:!0,cell:function(e){return Object(S.jsx)(C,{to:"/courseDashboard/".concat(e.id),children:e.name})}},{selector:"year",name:"Year",sortable:!0}];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(I,{class:"content",children:[Object(S.jsxs)(A,{children:[Object(S.jsx)("div",{style:{width:"9rem"},children:Object(S.jsx)(x.y,{src:"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})}),Object(S.jsx)("h3",{style:{color:"black",fontSize:"1.2rem"},children:null===e||void 0===e?void 0:e.name}),Object(S.jsx)("p",{style:{color:"black"},children:"Instructor"}),Object(S.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(S.jsx)(v.a,{name:"cil-envelope-open"}),Object(S.jsxs)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:[(null===e||void 0===e?void 0:e.name.toLowerCase())+"."+(null===e||void 0===e?void 0:e.name.toLowerCase()),"@gmail.com"]})]}),Object(S.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(S.jsx)(v.a,{name:"cil-user"}),Object(S.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===t||void 0===t?void 0:t.length})]}),Object(S.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(S.jsx)(v.a,{name:"cil-bookmark"}),Object(S.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===n||void 0===n?void 0:n.length})]})]}),Object(S.jsx)(T,{children:Object(S.jsx)("div",{style:{padding:"1rem"},children:Object(S.jsxs)(x.cb,{activeTab:"home",children:[Object(S.jsxs)(x.L,{variant:"tabs",children:[Object(S.jsx)(x.M,{children:Object(S.jsx)(x.N,{"data-tab":"home",children:"General"})}),Object(S.jsx)(x.M,{children:Object(S.jsx)(x.N,{"data-tab":"profile",children:"Contact"})})]}),Object(S.jsxs)(x.ab,{children:[Object(S.jsx)(x.bb,{"data-tab":"home",children:"Prof. Dr. Fadi Al-Turjman received his Ph.D. in computer science from Queen\u2019s University, \n                  Canada, in 2011. He is a full professor and a research center director at Near East University, \n                  Nicosia, Cyprus. Prof. Al-Turjman is a leading authority in the areas of smart/intelligent IoT systems, wireless, \n                  and mobile networks\u2019 architectures, protocols, deployments, and performance evaluation in Artificial Intelligence of \n                  Things (AIoT). His publication history spans over 350 SCI/E publications, in addition to numerous keynotes and plenary\n                   talks at flagship venues. He has authored and edited more than 40 books about cognition, security, and wireless sensor networks\u2019\n                    deployments in smart IoT environments, which have been published by well-reputed publishers such as Taylor and Francis, Elsevier, IET, and Springer. He has received several recognitions and best papers\u2019 awards at top international conferences. He also received the prestigious Best Research Paper Award from Elsevier Computer Communications Journal for the period 2015-2018, in addition to the Top Researcher Award for 2018 at Antalya Bilim University, Turkey. Prof. Al-Turjman has led a number of international symposia and workshops in flagship communication society conferences. Currently, he serves as book series editor and the lead guest/associate editor for several top tier journals, including the IEEE Communications Surveys and Tutorials (IF 23.9) and the Elsevier Sustainable Cities and Society (IF 5.7), in addition to organizing international conferences and symposiums on the most up to date research topics in AI and IoT."}),Object(S.jsx)(x.bb,{"data-tab":"profile",children:"".concat("null")})]})]})})})]}),Object(S.jsx)(F,{children:Object(S.jsx)("div",{style:{padding:"1rem"},children:Object(S.jsxs)(x.cb,{activeTab:"students",children:[Object(S.jsxs)(x.L,{variant:"tabs",children:[Object(S.jsx)(x.M,{children:Object(S.jsx)(x.N,{"data-tab":"students",children:"Students"})}),Object(S.jsx)(x.M,{children:Object(S.jsx)(x.N,{"data-tab":"courses",children:"Courses"})})]}),Object(S.jsxs)(x.ab,{children:[Object(S.jsxs)(x.bb,{"data-tab":"students",children:[Object(S.jsx)(y.a,{columns:c,data:t||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0}),"            "]}),Object(S.jsx)(x.bb,{"data-tab":"courses",children:Object(S.jsx)(y.a,{columns:i,data:n||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})})]})]})})})]})},M=n(648),N=n(176),H=n(2),z=(n(692),n(693)),P=function(e){var t,n=e.studentId,r=Object(h.useState)({}),a=Object(M.a)(r,2),c=a[0],i=a[1],s=Object(h.useState)(null),d=Object(M.a)(s,2),l=d[0],o=d[1],j=Object(O.b)(),b=function(e){var t,r=e.target,a=r.value,s=r.name;i(Object(H.a)(Object(H.a)({},c),{},(t={},Object(N.a)(t,s,a),Object(N.a)(t,"studentId",n),t)))};return Object(S.jsx)(x.Q,{children:Object(S.jsx)(x.f,{children:Object(S.jsxs)(x.G,{show:e.modal,onClose:function(){return e.setModal(!e.modal)},color:"primary",children:[Object(S.jsx)(x.J,{closeButton:!0,children:Object(S.jsx)(x.K,{children:"Add Payment"})}),Object(S.jsx)(x.H,{children:Object(S.jsxs)(x.f,{children:[Object(S.jsxs)(x.t,{row:!0,children:[Object(S.jsx)(x.j,{md:"3",children:"Type"}),Object(S.jsx)(x.j,{xs:"12",md:"9",children:Object(S.jsxs)(x.R,(t={custom:!0,name:"type",id:"select"},Object(N.a)(t,"name","type"),Object(N.a)(t,"onChange",b),Object(N.a)(t,"children",[Object(S.jsx)("option",{value:"0",children:"Please select"}),Object(S.jsx)("option",{value:"course",children:"Per Course"}),Object(S.jsx)("option",{value:"Semester",children:"Per Semester"})]),t))})]}),Object(S.jsxs)(x.t,{row:!0,children:[Object(S.jsx)(x.j,{md:"3",children:Object(S.jsx)(x.E,{htmlFor:"number-input",children:"Amount"})}),Object(S.jsx)(x.j,{xs:"12",md:"9",children:Object(S.jsx)(x.z,{id:"number-input",type:"number",name:"amount",onChange:b})})]}),Object(S.jsxs)(x.t,{row:!0,children:[Object(S.jsx)(x.j,{md:"3",children:"year"}),Object(S.jsx)(x.j,{xs:"12",md:"9",children:Object(S.jsxs)(x.R,{custom:!0,name:"year",id:"select",onChange:b,children:[Object(S.jsx)("option",{value:"0",children:"Please select"}),Object(S.jsx)("option",{value:"2019-2020 - Fall",children:"2019-2020 - Fall"}),Object(S.jsx)("option",{value:"2019-2020 - Spring",children:"2019-2020 - Spring"}),Object(S.jsx)("option",{value:"2019-2020 - Summer",children:"2019-2020 - Summer"}),Object(S.jsx)("option",{value:"2020-2021 - Fall",children:"2020-2021 - Fall"}),Object(S.jsx)("option",{value:"2020-2021 - Spring",children:"2020-2021 - Spring"}),Object(S.jsx)("option",{value:"2020-2021 - Summer",children:"2020-2021 - Summer"}),Object(S.jsx)("option",{value:"2021-2022 - Fall",children:"2021-2022 - Fall"}),Object(S.jsx)("option",{value:"2021-2022 - Spring",children:"2021-2022 - Spring"}),Object(S.jsx)("option",{value:"2022-2023 - Fall",children:"2022-2023 - Fall"})]})})]}),Object(S.jsxs)(x.t,{row:!0,children:[Object(S.jsx)(x.j,{md:"3",children:"reciept"}),Object(S.jsx)(x.j,{xs:"12",md:"9",children:Object(S.jsx)(x.z,{id:"number-input",type:"file",name:"image",onChange:function(e){i(Object(H.a)(Object(H.a)({},c),{},{image:e.target.files[0].name})),o(e.target.files)}})})]})]})}),Object(S.jsxs)(x.I,{children:[Object(S.jsx)(x.d,{color:"primary",onClick:function(t){t.preventDefault(),j(Object(z.a)(c,l)),e.setModal(!e.modal)},children:"Add"})," ",Object(S.jsx)(x.d,{color:"secondary",onClick:function(){return e.setModal(!e.modal)},children:"Cancel"})]})]})})})},L=n(694),G=n(695),R=n(696),D=n(652),B=(f.default.img(d||(d=Object(p.a)(["\n  width:47%;\n  "]))),Object(f.default)(x.d)(l||(l=Object(p.a)(["\nmargin-left: 1rem;\n"])))),J=(Object(f.default)(x.d)(o||(o=Object(p.a)(["\nmargin-right: 1rem;\n"]))),f.default.div(j||(j=Object(p.a)(["\ndisplay: grid;\ngrid-template-columns:  25% 75%;\ngrid-gap: 5rem;\npadding: 10px;\nborder-radius: 9px;\n@media (max-width:1200px)\n{\n  display:block;\n}\n"])))),U=f.default.div(b||(b=Object(p.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  text-align: -webkit-center;\n"]))),Q=f.default.div(u||(u=Object(p.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  margin-right: 5rem; \n  @media (max-width:1200px)\n{ \n  width: 100%;\n  margin-top:2rem;\n}\n"]))),Y=f.default.div(m||(m=Object(p.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  margin-top: 3rem; \n  width: 99%;\n    margin-left: 0.5rem;\n"]))),K=function(){var e,t,n,r=Object(O.c)((function(e){return e.auth.user})),a=null===r||void 0===r?void 0:r.Id,c=Object(O.b)(),i=Object(h.useState)(!1),s=Object(M.a)(i,2),d=s[0],l=s[1],o=Object(O.c)((function(e){return e.student.prediction})),j=Object(O.c)((function(e){return e.student.studentCourse})),b=Object(h.useState)(!1),u=Object(M.a)(b,2),m=u[0],p=u[1],f=Object(h.useState)(!1),g=Object(M.a)(f,2),y=g[0],w=g[1],k=j.map((function(e){return e.cgpa}));return Object(h.useEffect)((function(){c(Object(D.m)(null===r||void 0===r?void 0:r.userId))}),[r]),Object(h.useEffect)((function(){k.length>0&&c(Object(D.n)(k))}),[c,j]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(J,{class:"content",children:[Object(S.jsxs)(U,{children:[Object(S.jsx)("div",{style:{width:"9rem"},children:Object(S.jsx)(x.y,{src:"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})}),Object(S.jsx)("h3",{style:{color:"black",fontSize:"1.2rem"},children:null===r||void 0===r?void 0:r.name}),Object(S.jsx)("p",{style:{color:"black"},children:"Student"}),Object(S.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(S.jsx)(v.a,{name:"cil-envelope-open"}),Object(S.jsxs)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:[(null===r||void 0===r||null===(e=r.name)||void 0===e?void 0:e.toLowerCase())+"."+(null===r||void 0===r||null===(t=r.name)||void 0===t?void 0:t.toLowerCase()),"@gmail.com"]})]}),Object(S.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(S.jsx)(v.a,{name:"cil-user"}),Object(S.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:"Computer Engineering"})]}),Object(S.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(S.jsx)(v.a,{name:"cil-bookmark"}),Object(S.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===r||void 0===r||null===(n=r.advisor)||void 0===n?void 0:n.name})]})]}),Object(S.jsx)(Q,{children:Object(S.jsx)("div",{style:{padding:"1rem"},children:Object(S.jsxs)(x.cb,{activeTab:"home",children:[Object(S.jsxs)(x.L,{variant:"tabs",children:[Object(S.jsx)(x.M,{children:Object(S.jsx)(x.N,{"data-tab":"home",children:"General"})}),Object(S.jsx)(x.M,{children:Object(S.jsx)(x.N,{"data-tab":"profile",children:"Contact"})})]}),Object(S.jsxs)(x.ab,{children:[Object(S.jsx)(x.bb,{"data-tab":"home",children:Object(S.jsxs)("div",{class:"card-body pt-0",style:{marginTop:"1rem"},children:[Object(S.jsxs)("table",{class:"table table-bordered",children:[Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{width:"30%",children:"Roll"}),Object(S.jsx)("td",{width:"2%",children:":"}),Object(S.jsx)("td",{children:"125"})]}),Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{width:"30%",children:"Academic Year "}),Object(S.jsx)("td",{width:"2%",children:":"}),Object(S.jsx)("td",{children:"2020"})]}),Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{width:"30%",children:"Gender"}),Object(S.jsx)("td",{width:"2%",children:":"}),Object(S.jsx)("td",{children:"Male"})]}),Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{width:"30%",children:"Graduation Cgpa"}),Object(S.jsx)("td",{width:"2%",children:":"}),Object(S.jsx)("td",{children:null===o||void 0===o?void 0:o.result})]}),Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{width:"30%",children:"blood"}),Object(S.jsx)("td",{width:"2%",children:":"}),Object(S.jsx)("td",{children:"B+"})]})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(B,{color:"primary",onClick:function(){return p(!m)},children:"Add courses"}),Object(S.jsx)(B,{color:"primary",onClick:function(){return w(!y)},children:"Automate Selection"})]})]})}),Object(S.jsx)(x.bb,{"data-tab":"profile",children:"null"})]})]})})})]}),Object(S.jsx)(Y,{children:Object(S.jsx)("div",{style:{padding:"1rem"},children:Object(S.jsxs)(x.cb,{activeTab:"payments",children:[Object(S.jsx)(x.L,{variant:"tabs",children:Object(S.jsx)(x.M,{children:Object(S.jsx)(x.N,{"data-tab":"payments",children:"Payments"})})}),Object(S.jsx)(x.ab,{children:Object(S.jsx)(x.bb,{"data-tab":"payments",children:Object(S.jsx)(L.a,{studentId:null===r||void 0===r?void 0:r.userId})})})]})})}),Object(S.jsx)(G.a,{modal:m,setModal:p,studentId:a}),Object(S.jsx)(R.a,{modal:y,setModal:w,studentId:a}),Object(S.jsx)(P,{modal:d,setModal:l,studentId:null===r||void 0===r?void 0:r.userId})]})};t.default=function(){var e=Object(O.c)((function(e){return e.auth.user}));return Object(S.jsxs)(S.Fragment,{children:["Advisor"===(null===e||void 0===e?void 0:e.status)?Object(S.jsx)(E,{}):null,"Student"===(null===e||void 0===e?void 0:e.status)?Object(S.jsx)(K,{}):null]})}}}]);
//# sourceMappingURL=34.04aa5399.chunk.js.map