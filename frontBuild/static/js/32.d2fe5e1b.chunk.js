(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{651:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return j})),n.d(t,"b",(function(){return b}));var r=n(647),a=n(4),c=n(646),i=n.n(c),s=function(){return function(e){i.a.get("/api/advisor").then((function(t){e({type:a.u,payload:t.data.data})})).catch((function(t){e(Object(r.b)(t.response.data.message,t.response.status))}))}},d=function(e){return function(t){i.a.get("/api/advisor/".concat(e)).then((function(e){t({type:a.a,payload:e.data.data})})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}},l=function(e){return function(t){i.a.post("/api/advisor/create",e).then((function(e){t({type:a.a,payload:e.data.data}),t(Object(r.b)(e.data.message,e.status))})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}},o=function(e){return function(t){i.a.get("/api/advisor/time-table/".concat(e,"?year=2021-2022 - Fall")).then((function(e){t({type:a.v,payload:e.data.data})})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}},j=function(e,t){return function(n){i.a.put("/api/advisor/".concat(t),e).then((function(e){n({type:a.a,payload:e.data.data}),n(Object(r.b)(e.data.message,e.status))})).catch((function(e){n(Object(r.b)(e.response.data.message,e.response.status))}))}},b=function(e){return function(t){i.a.delete("/api/advisor/".concat(e)).then((function(e){t({type:a.a,payload:e.data.data})})).catch((function(e){t(Object(r.b)(e.response.data.message,e.response.status))}))}}},777:function(e,t,n){"use strict";n.r(t);var r,a,c,i,s,d,l,o,j,b,u=n(1),m=n(175),h=n(653),O=n(645),p=n(649),x=n(652),v=n(655),f=n(654),g=n.n(f),y=n(651),w=n(122),k=n(18),S=Object(x.default)(w.b)(r||(r=Object(h.a)(["\n  color: #8d0000 !important;\n"]))),C=x.default.div(a||(a=Object(h.a)(["\ndisplay: grid;\ngrid-template-columns:  25% 75%;\ngrid-gap: 5rem;\npadding: 10px;\nborder-radius: 9px;\n@media (max-width:1200px)\n{\n  display:block;\n}\n"]))),I=x.default.div(c||(c=Object(h.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  text-align: -webkit-center;\n"]))),A=x.default.div(i||(i=Object(h.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  margin-right: 5rem; \n  @media (max-width:1200px)\n{ \n  width: 100%;\n  margin-top:2rem;\n}\n"]))),T=x.default.div(s||(s=Object(h.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  margin-top: 3rem; \n"]))),F=function(){var e=Object(m.c)((function(e){return e.auth.user})),t=Object(m.c)((function(e){return e.advisor.advisor.Students})),n=Object(m.c)((function(e){return e.advisor.advisor.Group})),r=null===e||void 0===e?void 0:e.Id,a=Object(m.b)();Object(u.useEffect)((function(){a(Object(y.e)(r))}),[]);var c=[{selector:"userId",name:"Student ID",sortable:!0},{selector:"name",name:"Name",sortable:!0,cell:function(e){return Object(k.jsx)(S,{to:"/student-profile/".concat(e.id),children:e.name+" "+e.surname})}},{selector:"createdAt",name:"Registered",cell:function(e){var t;return Object(k.jsx)("span",{children:null===e||void 0===e||null===(t=e.createdAt)||void 0===t?void 0:t.replace("T"," ").replace(".000Z","")})},sortable:!0}],i=[{selector:"name",name:"Name",sortable:!0,cell:function(e){return Object(k.jsx)(S,{to:"/courseDashboard/".concat(e.id),children:e.name})}},{selector:"year",name:"Year",sortable:!0}];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(C,{class:"content",children:[Object(k.jsxs)(I,{children:[Object(k.jsx)("div",{style:{width:"9rem"},children:Object(k.jsx)(O.y,{src:"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})}),Object(k.jsx)("h3",{style:{color:"black",fontSize:"1.2rem"},children:null===e||void 0===e?void 0:e.name}),Object(k.jsx)("p",{style:{color:"black"},children:"Instructor"}),Object(k.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(k.jsx)(p.a,{name:"cil-envelope-open"}),Object(k.jsxs)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:[(null===e||void 0===e?void 0:e.name.toLowerCase())+"."+(null===e||void 0===e?void 0:e.name.toLowerCase()),"@gmail.com"]})]}),Object(k.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(k.jsx)(p.a,{name:"cil-user"}),Object(k.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===t||void 0===t?void 0:t.length})]}),Object(k.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(k.jsx)(p.a,{name:"cil-bookmark"}),Object(k.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===n||void 0===n?void 0:n.length})]})]}),Object(k.jsx)(A,{children:Object(k.jsx)("div",{style:{padding:"1rem"},children:Object(k.jsxs)(O.cb,{activeTab:"home",children:[Object(k.jsxs)(O.L,{variant:"tabs",children:[Object(k.jsx)(O.M,{children:Object(k.jsx)(O.N,{"data-tab":"home",children:"General"})}),Object(k.jsx)(O.M,{children:Object(k.jsx)(O.N,{"data-tab":"profile",children:"Contact"})})]}),Object(k.jsxs)(O.ab,{children:[Object(k.jsx)(O.bb,{"data-tab":"home",children:"Prof. Dr. Fadi Al-Turjman received his Ph.D. in computer science from Queen\u2019s University, \n                  Canada, in 2011. He is a full professor and a research center director at Near East University, \n                  Nicosia, Cyprus. Prof. Al-Turjman is a leading authority in the areas of smart/intelligent IoT systems, wireless, \n                  and mobile networks\u2019 architectures, protocols, deployments, and performance evaluation in Artificial Intelligence of \n                  Things (AIoT). His publication history spans over 350 SCI/E publications, in addition to numerous keynotes and plenary\n                   talks at flagship venues. He has authored and edited more than 40 books about cognition, security, and wireless sensor networks\u2019\n                    deployments in smart IoT environments, which have been published by well-reputed publishers such as Taylor and Francis, Elsevier, IET, and Springer. He has received several recognitions and best papers\u2019 awards at top international conferences. He also received the prestigious Best Research Paper Award from Elsevier Computer Communications Journal for the period 2015-2018, in addition to the Top Researcher Award for 2018 at Antalya Bilim University, Turkey. Prof. Al-Turjman has led a number of international symposia and workshops in flagship communication society conferences. Currently, he serves as book series editor and the lead guest/associate editor for several top tier journals, including the IEEE Communications Surveys and Tutorials (IF 23.9) and the Elsevier Sustainable Cities and Society (IF 5.7), in addition to organizing international conferences and symposiums on the most up to date research topics in AI and IoT."}),Object(k.jsx)(O.bb,{"data-tab":"profile",children:"".concat("null")})]})]})})})]}),Object(k.jsx)(T,{children:Object(k.jsx)("div",{style:{padding:"1rem"},children:Object(k.jsxs)(O.cb,{activeTab:"students",children:[Object(k.jsxs)(O.L,{variant:"tabs",children:[Object(k.jsx)(O.M,{children:Object(k.jsx)(O.N,{"data-tab":"students",children:"Students"})}),Object(k.jsx)(O.M,{children:Object(k.jsx)(O.N,{"data-tab":"courses",children:"Courses"})})]}),Object(k.jsxs)(O.ab,{children:[Object(k.jsxs)(O.bb,{"data-tab":"students",children:[Object(k.jsx)(g.a,{columns:c,data:t||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0}),"            "]}),Object(k.jsx)(O.bb,{"data-tab":"courses",children:Object(k.jsx)(g.a,{columns:i,data:n||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})})]})]})})})]})},M=n(648),E=n(176),N=n(2),H=(n(692),n(693)),P=function(e){var t,n=e.studentId,r=Object(u.useState)({}),a=Object(M.a)(r,2),c=a[0],i=a[1],s=Object(u.useState)(null),d=Object(M.a)(s,2),l=d[0],o=d[1],j=Object(m.b)(),b=function(e){var t,r=e.target,a=r.value,s=r.name;i(Object(N.a)(Object(N.a)({},c),{},(t={},Object(E.a)(t,s,a),Object(E.a)(t,"studentId",n),t)))};return Object(k.jsx)(O.Q,{children:Object(k.jsx)(O.f,{children:Object(k.jsxs)(O.G,{show:e.modal,onClose:function(){return e.setModal(!e.modal)},color:"primary",children:[Object(k.jsx)(O.J,{closeButton:!0,children:Object(k.jsx)(O.K,{children:"Add Payment"})}),Object(k.jsx)(O.H,{children:Object(k.jsxs)(O.f,{children:[Object(k.jsxs)(O.t,{row:!0,children:[Object(k.jsx)(O.j,{md:"3",children:"Type"}),Object(k.jsx)(O.j,{xs:"12",md:"9",children:Object(k.jsxs)(O.R,(t={custom:!0,name:"type",id:"select"},Object(E.a)(t,"name","type"),Object(E.a)(t,"onChange",b),Object(E.a)(t,"children",[Object(k.jsx)("option",{value:"0",children:"Please select"}),Object(k.jsx)("option",{value:"course",children:"Per Course"}),Object(k.jsx)("option",{value:"Semester",children:"Per Semester"})]),t))})]}),Object(k.jsxs)(O.t,{row:!0,children:[Object(k.jsx)(O.j,{md:"3",children:Object(k.jsx)(O.E,{htmlFor:"number-input",children:"Amount"})}),Object(k.jsx)(O.j,{xs:"12",md:"9",children:Object(k.jsx)(O.z,{id:"number-input",type:"number",name:"amount",onChange:b})})]}),Object(k.jsxs)(O.t,{row:!0,children:[Object(k.jsx)(O.j,{md:"3",children:"year"}),Object(k.jsx)(O.j,{xs:"12",md:"9",children:Object(k.jsxs)(O.R,{custom:!0,name:"year",id:"select",onChange:b,children:[Object(k.jsx)("option",{value:"0",children:"Please select"}),Object(k.jsx)("option",{value:"2019-2020 - Fall",children:"2019-2020 - Fall"}),Object(k.jsx)("option",{value:"2019-2020 - Spring",children:"2019-2020 - Spring"}),Object(k.jsx)("option",{value:"2019-2020 - Summer",children:"2019-2020 - Summer"}),Object(k.jsx)("option",{value:"2020-2021 - Fall",children:"2020-2021 - Fall"}),Object(k.jsx)("option",{value:"2020-2021 - Spring",children:"2020-2021 - Spring"}),Object(k.jsx)("option",{value:"2020-2021 - Summer",children:"2020-2021 - Summer"}),Object(k.jsx)("option",{value:"2021-2022 - Fall",children:"2021-2022 - Fall"}),Object(k.jsx)("option",{value:"2021-2022 - Spring",children:"2021-2022 - Spring"}),Object(k.jsx)("option",{value:"2022-2023 - Fall",children:"2022-2023 - Fall"})]})})]}),Object(k.jsxs)(O.t,{row:!0,children:[Object(k.jsx)(O.j,{md:"3",children:"reciept"}),Object(k.jsx)(O.j,{xs:"12",md:"9",children:Object(k.jsx)(O.z,{id:"number-input",type:"file",name:"image",onChange:function(e){i(Object(N.a)(Object(N.a)({},c),{},{image:e.target.files[0].name})),o(e.target.files)}})})]})]})}),Object(k.jsxs)(O.I,{children:[Object(k.jsx)(O.d,{color:"primary",onClick:function(t){t.preventDefault(),j(Object(H.a)(c,l)),e.setModal(!e.modal)},children:"Add"})," ",Object(k.jsx)(O.d,{color:"secondary",onClick:function(){return e.setModal(!e.modal)},children:"Cancel"})]})]})})})},z=n(694),L=n(695),G=n(696),R=n(650),D=Object(x.default)(O.d)(d||(d=Object(h.a)(["\nmargin-left: 1rem;\n"]))),B=x.default.div(l||(l=Object(h.a)(["\ndisplay: grid;\ngrid-template-columns:  25% 75%;\ngrid-gap: 5rem;\npadding: 10px;\nborder-radius: 9px;\n@media (max-width:1200px)\n{\n  display:block;\n}\n"]))),J=x.default.div(o||(o=Object(h.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  text-align: -webkit-center;\n"]))),U=x.default.div(j||(j=Object(h.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  margin-right: 5rem; \n  @media (max-width:1200px)\n{ \n  width: 100%;\n  margin-top:2rem;\n}\n"]))),Q=x.default.div(b||(b=Object(h.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  margin-top: 3rem; \n  width: 99%;\n    margin-left: 0.5rem;\n"]))),Y=function(){var e,t,n,r,a=Object(m.c)((function(e){return e.auth.user})),c=null===a||void 0===a?void 0:a.Id,i=Object(m.b)(),s=Object(u.useState)(!1),d=Object(M.a)(s,2),l=d[0],o=d[1],j=Object(m.c)((function(e){return e.student.prediction})),b=Object(m.c)((function(e){return e.student.studentCourse})),h=Object(u.useState)(!1),x=Object(M.a)(h,2),f=x[0],g=x[1],y=Object(u.useState)(!1),w=Object(M.a)(y,2),S=w[0],C=w[1],I=b.map((function(e){return e.cgpa})).filter((function(e){return null!==e}));return Object(u.useEffect)((function(){i(Object(R.m)(null===a||void 0===a?void 0:a.userId))}),[a]),Object(u.useEffect)((function(){I.length>0&&i(Object(R.n)(I)),(null===a||void 0===a?void 0:a.userId)&&i(Object(v.f)(null===a||void 0===a?void 0:a.departmentId))}),[i,b]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(B,{class:"content",children:[Object(k.jsxs)(J,{children:[Object(k.jsx)("div",{style:{width:"9rem"},children:Object(k.jsx)(O.y,{src:"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})}),Object(k.jsx)("h3",{style:{color:"black",fontSize:"1.2rem"},children:null===a||void 0===a?void 0:a.name}),Object(k.jsx)("p",{style:{color:"black"},children:"Student"}),Object(k.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(k.jsx)(p.a,{name:"cil-envelope-open"}),Object(k.jsxs)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:[(null===a||void 0===a||null===(e=a.name)||void 0===e?void 0:e.toLowerCase())+"."+(null===a||void 0===a||null===(t=a.name)||void 0===t?void 0:t.toLowerCase()),"@gmail.com"]})]}),Object(k.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(k.jsx)(p.a,{name:"cil-user"}),Object(k.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===a||void 0===a||null===(n=a.department)||void 0===n?void 0:n.name})]}),Object(k.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(k.jsx)(p.a,{name:"cil-bookmark"}),Object(k.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===a||void 0===a||null===(r=a.advisor)||void 0===r?void 0:r.name})]})]}),Object(k.jsx)(U,{children:Object(k.jsx)("div",{style:{padding:"1rem"},children:Object(k.jsxs)(O.cb,{activeTab:"home",children:[Object(k.jsxs)(O.L,{variant:"tabs",children:[Object(k.jsx)(O.M,{children:Object(k.jsx)(O.N,{"data-tab":"home",children:"General"})}),Object(k.jsx)(O.M,{children:Object(k.jsx)(O.N,{"data-tab":"profile",children:"Contact"})})]}),Object(k.jsxs)(O.ab,{children:[Object(k.jsx)(O.bb,{"data-tab":"home",children:Object(k.jsxs)("div",{class:"card-body pt-0",style:{marginTop:"1rem"},children:[Object(k.jsxs)("table",{class:"table table-bordered",children:[Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{width:"30%",children:"Roll"}),Object(k.jsx)("td",{width:"2%",children:":"}),Object(k.jsx)("td",{children:"125"})]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{width:"30%",children:"Academic Year "}),Object(k.jsx)("td",{width:"2%",children:":"}),Object(k.jsx)("td",{children:"2020"})]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{width:"30%",children:"Gender"}),Object(k.jsx)("td",{width:"2%",children:":"}),Object(k.jsx)("td",{children:"Male"})]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{width:"30%",children:"Predicted Graduation Cgpa"}),Object(k.jsx)("td",{width:"2%",children:":"}),Object(k.jsx)("td",{children:null===j||void 0===j?void 0:j.result})]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{width:"30%",children:"blood"}),Object(k.jsx)("td",{width:"2%",children:":"}),Object(k.jsx)("td",{children:"B+"})]})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(D,{color:"primary",onClick:function(){return g(!f)},children:"Add courses"}),Object(k.jsx)(D,{color:"primary",onClick:function(){return C(!S)},children:"Automate Selection"})]})]})}),Object(k.jsx)(O.bb,{"data-tab":"profile",children:"null"})]})]})})})]}),Object(k.jsx)(Q,{children:Object(k.jsx)("div",{style:{padding:"1rem"},children:Object(k.jsxs)(O.cb,{activeTab:"payments",children:[Object(k.jsx)(O.L,{variant:"tabs",children:Object(k.jsx)(O.M,{children:Object(k.jsx)(O.N,{"data-tab":"payments",children:"Payments"})})}),Object(k.jsx)(O.ab,{children:Object(k.jsx)(O.bb,{"data-tab":"payments",children:Object(k.jsx)(z.a,{studentId:null===a||void 0===a?void 0:a.userId})})})]})})}),Object(k.jsx)(L.a,{modal:f,setModal:g,studentId:c}),Object(k.jsx)(G.a,{modal:S,setModal:C,studentId:c}),Object(k.jsx)(P,{modal:l,setModal:o,studentId:null===a||void 0===a?void 0:a.userId})]})};t.default=function(){var e=Object(m.c)((function(e){return e.auth.user}));return Object(k.jsxs)(k.Fragment,{children:["Advisor"===(null===e||void 0===e?void 0:e.status)?Object(k.jsx)(F,{}):null,"Student"===(null===e||void 0===e?void 0:e.status)?Object(k.jsx)(Y,{}):null]})}}}]);
//# sourceMappingURL=32.d2fe5e1b.chunk.js.map