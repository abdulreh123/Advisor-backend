(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[43],{784:function(e,t,n){"use strict";n.r(t);var r,c,d,i,a,s,l,o,j,b,u,m,h,O,x,p=n(648),v=n(653),f=n(1),g=n.n(f),y=n(175),w=n(646),C=n(694),k=n(695),A=n(654),E=n.n(A),I=n(650),N=n(18),S=function(e){var t=e.studentId,n=Object(y.c)((function(e){return e.student.coursesToApprove})),r=Object(y.c)((function(e){return e.student.approveMessage})),c=Object(y.b)();Object(f.useEffect)((function(){t&&c(Object(I.d)(t))}),[c,r,t]);var d=[{selector:"name",name:"Name",sortable:!0,cell:function(e){return Object(N.jsx)("span",{children:e.Course.name})}},{selector:"code",name:"Code",sortable:!0,cell:function(e){return Object(N.jsx)("span",{children:e.Course.code})}},{selector:"credit",name:"Credit",sortable:!0,cell:function(e){return Object(N.jsx)("span",{children:e.Course.credit})}},{name:"Actions",cell:function(e){return Object(N.jsxs)("div",{className:"table-icon",children:[Object(N.jsx)("span",{style:{margin:"1rem"},onClick:function(){c(Object(I.c)(e.studentscourses.studentId,e.studentscourses.courseGroupId))},children:"Approve"}),Object(N.jsx)("span",{children:"Delete"})]})},ignoreRowClick:!0,allowOverflow:!0}];return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(E.a,{columns:d,data:n||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})})},T=n(652),M=n(693),D=n(649),P=n(122),F=n(656),G=(T.default.img(r||(r=Object(v.a)(["\n  width:47%;\n  "]))),T.default.div(c||(c=Object(v.a)(["\n"])))),z=T.default.div(d||(d=Object(v.a)(["\n  display: flex;\n  height: ",";\n  margin: ",";\n  flex-direction: column;\n  color: ",";\n  background: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border-top: ",";\n  opacity: 1;\n  transition: all 0.2s ease;\n  text-align: ",";\n"])),(function(e){return e.height}),(function(e){return e.margin}),(function(e){return e.color||"#4e4e51"}),(function(e){return e.background||"#fff"}),(function(e){return e.padding||"10px 17px"}),(function(e){return e.borderRadius||"8px"}),(function(e){return e.border||"1px solid #E6E9ED"}),(function(e){return e.borderTop}),(function(e){return e.textAlign})),L=Object(T.default)(z)(i||(i=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 24% 40% 11% 10% 15%;\n    border: 0.5px solid #e3e4e8 !important;\n    margin: 1.5rem 1rem 2rem 1rem;\n    padding: 0 !important;\n"]))),R=Object(T.default)(w.d)(a||(a=Object(v.a)(["\nmargin-right: 1rem;\n"]))),H=(Object(T.default)(w.d)(s||(s=Object(v.a)(["\nmargin-left: 1rem;\n"]))),T.default.div(l||(l=Object(v.a)(["\n    border: 0.5px solid #E6E9ED;\n    height: 2rem;\n    text-align: center;\n    padding: 3px;\n"])))),J=T.default.div(o||(o=Object(v.a)(["\n    padding: 12px;\n    border: 0.5px solid #E6E9ED;\n    height: 3rem;\n    text-align: center;\n    font-weight: 550;\n"]))),Y=T.default.div(j||(j=Object(v.a)(["\n    margin: 2rem 2rem 0 2rem;\n    border-bottom: 1px solid #e3e4e8;\n    font-size: 1.2rem;    \n    text-align: center;\n"]))),B=T.default.p(b||(b=Object(v.a)(["\ntext-align: center;\n"]))),U=(Object(T.default)(P.b)(u||(u=Object(v.a)(["\n  color: #8d0000 !important;\n"]))),T.default.div(m||(m=Object(v.a)(["\ndisplay: grid;\ngrid-template-columns:  25% 75%;\ngrid-gap: 5rem;\npadding: 10px;\nborder-radius: 9px;\n@media (max-width:1200px)\n{\n  display:block;\n}\n"])))),q=T.default.div(h||(h=Object(v.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  text-align: -webkit-center;\n"]))),K=T.default.div(O||(O=Object(v.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  margin-right: 5rem; \n  @media (max-width:1200px)\n{ \n  width: 100%;\n  margin-top:2rem;\n}\n"]))),Q=T.default.div(x||(x=Object(v.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  margin-top: 3rem; \n  width: 99%;\n    margin-left: 0.5rem;\n"])));t.default=function(e){var t,n,r,c,d,i=e.match.params.id,a=Object(y.c)((function(e){return e.student.student})),s=Object(y.c)((function(e){return e.student.studentCourse})),l=Object(y.c)((function(e){return e.student.prediction})),o=Object(y.c)((function(e){return e.student.approveMessage})),j=Object(f.useState)(!1),b=Object(p.a)(j,2),u=b[0],m=b[1],h=Object(f.useState)(!1),O=Object(p.a)(h,2),x=O[0],v=O[1],A=Object(y.b)(),E=s.map((function(e){return e.cgpa}));return Object(f.useEffect)((function(){i&&A(Object(I.i)(i))}),[A,i]),Object(f.useEffect)((function(){var e;(null===a||void 0===a?void 0:a.userId)&&(A(Object(F.f)(null===a||void 0===a||null===(e=a.advisor)||void 0===e?void 0:e.departmentId)),A(Object(I.m)(null===a||void 0===a?void 0:a.userId)))}),[A,null===a||void 0===a?void 0:a.userId,o]),Object(f.useEffect)((function(){E.length>0&&A(Object(I.n)(E))}),[A,s]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(U,{class:"content",children:[Object(N.jsxs)(q,{children:[Object(N.jsx)("div",{style:{width:"9rem"},children:Object(N.jsx)(w.y,{src:"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})}),Object(N.jsx)("h3",{style:{color:"black",fontSize:"1.2rem"},children:null===a||void 0===a?void 0:a.name}),Object(N.jsx)("p",{style:{color:"black"},children:"Student"}),Object(N.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(N.jsx)(D.a,{name:"cil-envelope-open"}),Object(N.jsxs)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:[(null===a||void 0===a||null===(t=a.name)||void 0===t?void 0:t.toLowerCase())+"."+(null===a||void 0===a||null===(n=a.name)||void 0===n?void 0:n.toLowerCase()),"@gmail.com"]})]}),Object(N.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(N.jsx)(D.a,{name:"cil-user"}),Object(N.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===a||void 0===a||null===(r=a.Department)||void 0===r?void 0:r.name})]}),Object(N.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(N.jsx)(D.a,{name:"cil-bookmark"}),Object(N.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===a||void 0===a||null===(c=a.advisor)||void 0===c?void 0:c.name})]})]}),Object(N.jsx)(K,{children:Object(N.jsx)("div",{style:{padding:"1rem"},children:Object(N.jsxs)(w.cb,{activeTab:"home",children:[Object(N.jsxs)(w.L,{variant:"tabs",children:[Object(N.jsx)(w.M,{children:Object(N.jsx)(w.N,{"data-tab":"home",children:"General"})}),Object(N.jsx)(w.M,{children:Object(N.jsx)(w.N,{"data-tab":"profile",children:"Contact"})})]}),Object(N.jsxs)(w.ab,{children:[Object(N.jsx)(w.bb,{"data-tab":"home",children:Object(N.jsxs)("div",{class:"card-body pt-0",style:{marginTop:"1rem"},children:[Object(N.jsxs)("table",{class:"table table-bordered",children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{width:"30%",children:"Roll"}),Object(N.jsx)("td",{width:"2%",children:":"}),Object(N.jsx)("td",{children:"125"})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{width:"30%",children:"Academic Year "}),Object(N.jsx)("td",{width:"2%",children:":"}),Object(N.jsx)("td",{children:"2020"})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{width:"30%",children:"Gender"}),Object(N.jsx)("td",{width:"2%",children:":"}),Object(N.jsx)("td",{children:"Male"})]}),5!==(null===a||void 0===a||null===(d=a.Department)||void 0===d?void 0:d.id)?Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{width:"30%",children:"Graduation Cgpa"}),Object(N.jsx)("td",{width:"2%",children:":"}),Object(N.jsx)("td",{children:null===l||void 0===l?void 0:l.result})]}):null,Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{width:"30%",children:"blood"}),Object(N.jsx)("td",{width:"2%",children:":"}),Object(N.jsx)("td",{children:"B+"})]})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)(R,{color:"primary",onClick:function(){return m(!u)},children:"Add courses"}),Object(N.jsx)(w.d,{color:"primary",onClick:function(){return v(!x)},children:"Automate Selection"})]})]})}),Object(N.jsx)(w.bb,{"data-tab":"profile",children:"".concat("null")})]})]})})})]}),Object(N.jsx)(Q,{children:Object(N.jsx)("div",{style:{padding:"1rem"},children:Object(N.jsxs)(w.cb,{activeTab:"payments",children:[Object(N.jsxs)(w.L,{variant:"tabs",children:[Object(N.jsx)(w.M,{children:Object(N.jsx)(w.N,{"data-tab":"payments",children:"Payments"})}),Object(N.jsx)(w.M,{children:Object(N.jsx)(w.N,{"data-tab":"approval",children:"Approval"})})]}),Object(N.jsxs)(w.ab,{children:[Object(N.jsx)(w.bb,{"data-tab":"payments",children:Object(N.jsx)(M.a,{studentId:null===a||void 0===a?void 0:a.userId})}),Object(N.jsx)(w.bb,{"data-tab":"approval",children:Object(N.jsx)(S,{studentId:null===a||void 0===a?void 0:a.userId})})]})]})})}),Object(N.jsxs)("div",{class:"student-profile py-4",children:[Object(N.jsx)(G,{children:null===s||void 0===s?void 0:s.map((function(e,t){var n;return Object(N.jsxs)("div",{margin:"2rem",children:[Object(N.jsxs)(Y,{children:["Academic year ",e.year]}),Object(N.jsxs)(L,{children:[Object(N.jsx)(J,{children:"Code"}),Object(N.jsx)(J,{children:"Name"}),Object(N.jsx)(J,{children:"Credit"}),Object(N.jsx)(J,{children:"grade"}),Object(N.jsx)(J,{children:"CrPts"}),null===e||void 0===e||null===(n=e.courses)||void 0===n?void 0:n.map((function(t,n){var r,c;return Object(N.jsx)(g.a.Fragment,{children:t.studentscourses.academicYear===e.year?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(H,{children:t.Course.code}),Object(N.jsx)(H,{children:t.Course.name}),Object(N.jsx)(H,{children:t.Course.credit}),Object(N.jsx)(H,{children:null===(r=t.studentscourses)||void 0===r?void 0:r.grade}),Object(N.jsx)(H,{children:null===(c=t.studentscourses)||void 0===c?void 0:c.CrPts})," "]}):null},n)}))]}),Object(N.jsxs)(B,{children:["GPA: ",Number.parseFloat(e.gpa).toPrecision(3)," / CGPA: ",Number.parseFloat(e.cgpa).toPrecision(3),"/ STATUS : ",e.status," / TOTAL CREDIT : ",e.totalcredit]})]},t)}))}),Object(N.jsx)(C.a,{modal:u,setModal:m,studentId:i}),Object(N.jsx)(k.a,{modal:x,setModal:v,studentId:i})]})]})}}}]);
//# sourceMappingURL=43.a57eb358.chunk.js.map