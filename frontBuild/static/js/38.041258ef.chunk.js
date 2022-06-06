(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[38],{666:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(669);var c=n(668);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},785:function(e,t,n){"use strict";n.r(t);var r,c,i,d,a,s,o,l,u,j,b,m,O,h,x,p=n(666),f=n(648),v=n(653),g=n(1),y=n.n(g),C=n(175),w=n(645),k=n(695),A=n(696),P=n(654),S=n.n(P),D=n(650),I=n(18),E=function(e){var t=e.studentId,n=Object(C.c)((function(e){return e.student.coursesToApprove})),r=Object(C.c)((function(e){return e.student.approveMessage})),c=Object(C.b)();Object(g.useEffect)((function(){t&&c(Object(D.d)(t))}),[c,r,t]);var i=[{selector:"name",name:"Name",sortable:!0,cell:function(e){return Object(I.jsx)("span",{children:e.Course.name})}},{selector:"code",name:"Code",sortable:!0,cell:function(e){return Object(I.jsx)("span",{children:e.Course.code})}},{selector:"credit",name:"Credit",sortable:!0,cell:function(e){return Object(I.jsx)("span",{children:e.Course.credit})}},{name:"Actions",cell:function(e){return Object(I.jsxs)("div",{className:"table-icon",children:[Object(I.jsx)("span",{style:{margin:"1rem"},onClick:function(){c(Object(D.c)(e.studentscourses.studentId,e.studentscourses.courseGroupId))},children:"Approve"}),Object(I.jsx)("span",{children:"Delete"})]})},ignoreRowClick:!0,allowOverflow:!0}];return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(S.a,{columns:i,data:n||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})})},F=n(652),N=n(694),T=n(649),B=n(122),M=n(656),G=(F.default.img(r||(r=Object(v.a)(["\n  width:47%;\n  "]))),F.default.div(c||(c=Object(v.a)(["\n"])))),z=F.default.div(i||(i=Object(v.a)(["\n  display: flex;\n  height: ",";\n  margin: ",";\n  flex-direction: column;\n  color: ",";\n  background: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border-top: ",";\n  opacity: 1;\n  transition: all 0.2s ease;\n  text-align: ",";\n"])),(function(e){return e.height}),(function(e){return e.margin}),(function(e){return e.color||"#4e4e51"}),(function(e){return e.background||"#fff"}),(function(e){return e.padding||"10px 17px"}),(function(e){return e.borderRadius||"8px"}),(function(e){return e.border||"1px solid #E6E9ED"}),(function(e){return e.borderTop}),(function(e){return e.textAlign})),L=Object(F.default)(z)(d||(d=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 24% 40% 11% 10% 15%;\n    border: 0.5px solid #e3e4e8 !important;\n    margin: 1.5rem 1rem 2rem 1rem;\n    padding: 0 !important;\n"]))),R=Object(F.default)(w.d)(a||(a=Object(v.a)(["\nmargin-right: 1rem;\n"]))),J=(Object(F.default)(w.d)(s||(s=Object(v.a)(["\nmargin-left: 1rem;\n"]))),F.default.div(o||(o=Object(v.a)(["\n    border: 0.5px solid #E6E9ED;\n    height: 2.6rem;\n    text-align: center;\n    padding: 3px;\n"])))),H=F.default.div(l||(l=Object(v.a)(["\n    padding: 12px;\n    border: 0.5px solid #E6E9ED;\n    height: 3rem;\n    text-align: center;\n    font-weight: 550;\n"]))),Y=F.default.div(u||(u=Object(v.a)(["\n    margin: 2rem 2rem 0 2rem;\n    border-bottom: 1px solid #e3e4e8;\n    font-size: 1.2rem;    \n    text-align: center;\n"]))),U=F.default.p(j||(j=Object(v.a)(["\ntext-align: center;\n"]))),q=(Object(F.default)(B.b)(b||(b=Object(v.a)(["\n  color: #8d0000 !important;\n"]))),F.default.div(m||(m=Object(v.a)(["\ndisplay: grid;\ngrid-template-columns:  25% 75%;\ngrid-gap: 5rem;\npadding: 10px;\nborder-radius: 9px;\n@media (max-width:1200px)\n{\n  display:block;\n}\n"])))),K=F.default.div(O||(O=Object(v.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  text-align: -webkit-center;\n"]))),Q=F.default.div(h||(h=Object(v.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  margin-right: 5rem; \n  @media (max-width:1200px)\n{ \n  width: 100%;\n  margin-top:2rem;\n}\n"]))),V=F.default.div(x||(x=Object(v.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  margin-top: 3rem; \n  width: 99%;\n    margin-left: 0.5rem;\n"]))),W=["AA","BA","BB","CB","CC","DC","DD","FD","FF"];t.default=function(e){var t,n,r,c,i,d=e.match.params.id,a=Object(C.c)((function(e){return e.student.student})),s=Object(C.c)((function(e){return e.student.studentCourse})),o=Object(C.c)((function(e){return e.student.prediction})),l=Object(C.c)((function(e){return e.student.approveMessage})),u=Object(g.useState)(!1),j=Object(f.a)(u,2),b=j[0],m=j[1],O=Object(g.useState)(!1),h=Object(f.a)(O,2),x=h[0],v=h[1],P=Object(C.b)(),S=s.map((function(e){return e.cgpa})).filter((function(e){return null!==e})),F=Object(g.useState)([]),z=Object(f.a)(F,2),X=z[0],Z=z[1],$=Object(g.useState)(!0),_=Object(f.a)($,2),ee=_[0],te=_[1],ne=s.filter((function(e){return null===e.gpa}));if(Object(g.useEffect)((function(){d&&P(Object(D.i)(d))}),[P,d]),Object(g.useEffect)((function(){(null===a||void 0===a?void 0:a.userId)&&(P(Object(M.f)(null===a||void 0===a?void 0:a.departmentId)),P(Object(D.m)(null===a||void 0===a?void 0:a.userId)))}),[P,null===a||void 0===a?void 0:a.userId,l]),Object(g.useEffect)((function(){S.length>0&&P(Object(D.n)(S))}),[P,s]),ee&&s.length>0){var re,ce;console.log(ee);var ie=null===(re=ne[0])||void 0===re||null===(ce=re.courses)||void 0===ce?void 0:ce.filter((function(e){return null!==e.studentscourses.grade}));console.log(ie),null===ie||void 0===ie||ie.map((function(e){var t={id:e.id,grade:e.studentscourses.grade,CrPts:JSON.parse(e.studentscourses.CrPts),credit:e.Course.credit};Z((function(e){return[].concat(Object(p.a)(e),[t])}))})),te(!1)}var de=function(e){var t=e.target.value,n=JSON.parse(t),r=function(e,t){var n;switch(e){case"AA":n=4*t;break;case"BA":n=3.5*t;break;case"BB":n=3*t;break;case"CB":n=2.5*t;break;case"CC":n=2*t;break;case"DC":n=1.5*t;break;case"DD":n=1*t;break;case"FD":n=.5*t;break;case"FF":n=0*t}return n}(n.grade,n.credit),c={id:n.id,grade:n.grade,CrPts:r,credit:n.credit},i=X.filter((function(e){return e.id!==n.id}));Z(i),Z((function(e){return[].concat(Object(p.a)(e),[c])}))},ae=function(e){var t;return null===(t=X.filter((function(t){return t.id===e}))[0])||void 0===t?void 0:t.CrPts},se=function(){var e=X.reduce((function(e,t){return e+t.CrPts}),0),t=s.filter((function(e){return null!==e.gpa})),n=X.reduce((function(e,t){return e+t.credit}),0);if(t.length>0){var r=t.reduce((function(e,t){return e+t.totalcrPts}),0),c=t.reduce((function(e,t){return e+t.totalcredit}),0);[].concat(Object(p.a)(S),[(r+e)/(n+c)]);return((r+e)/(n+c)).toPrecision(3)}return(e/n).toPrecision(3)};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(q,{class:"content",children:[Object(I.jsxs)(K,{children:[Object(I.jsx)("div",{style:{width:"9rem"},children:Object(I.jsx)(w.y,{src:"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})}),Object(I.jsx)("h3",{style:{color:"black",fontSize:"1.2rem"},children:null===a||void 0===a?void 0:a.name}),Object(I.jsx)("p",{style:{color:"black"},children:"Student"}),Object(I.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(I.jsx)(T.a,{name:"cil-envelope-open"}),Object(I.jsxs)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:[(null===a||void 0===a||null===(t=a.name)||void 0===t?void 0:t.toLowerCase())+"."+(null===a||void 0===a||null===(n=a.name)||void 0===n?void 0:n.toLowerCase()),"@gmail.com"]})]}),Object(I.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(I.jsx)(T.a,{name:"cil-user"}),Object(I.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===a||void 0===a||null===(r=a.Department)||void 0===r?void 0:r.name})]}),Object(I.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(I.jsx)(T.a,{name:"cil-bookmark"}),Object(I.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===a||void 0===a||null===(c=a.advisor)||void 0===c?void 0:c.name})]})]}),Object(I.jsx)(Q,{children:Object(I.jsx)("div",{style:{padding:"1rem"},children:Object(I.jsxs)(w.cb,{activeTab:"home",children:[Object(I.jsxs)(w.L,{variant:"tabs",children:[Object(I.jsx)(w.M,{children:Object(I.jsx)(w.N,{"data-tab":"home",children:"General"})}),Object(I.jsx)(w.M,{children:Object(I.jsx)(w.N,{"data-tab":"profile",children:"Contact"})})]}),Object(I.jsxs)(w.ab,{children:[Object(I.jsx)(w.bb,{"data-tab":"home",children:Object(I.jsxs)("div",{class:"card-body pt-0",style:{marginTop:"1rem"},children:[Object(I.jsxs)("table",{class:"table table-bordered",children:[Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{width:"30%",children:"Roll"}),Object(I.jsx)("td",{width:"2%",children:":"}),Object(I.jsx)("td",{children:"125"})]}),Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{width:"30%",children:"Academic Year "}),Object(I.jsx)("td",{width:"2%",children:":"}),Object(I.jsx)("td",{children:"2020"})]}),Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{width:"30%",children:"Gender"}),Object(I.jsx)("td",{width:"2%",children:":"}),Object(I.jsx)("td",{children:"Male"})]}),5!==(null===a||void 0===a||null===(i=a.Department)||void 0===i?void 0:i.id)?Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{width:"30%",children:"Predicted Graduation Cgpa"}),Object(I.jsx)("td",{width:"2%",children:":"}),Object(I.jsx)("td",{children:null===o||void 0===o?void 0:o.result})]}):null,Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{width:"30%",children:"blood"}),Object(I.jsx)("td",{width:"2%",children:":"}),Object(I.jsx)("td",{children:"B+"})]})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)(R,{color:"primary",onClick:function(){return m(!b)},children:"Add courses"}),Object(I.jsx)(w.d,{color:"primary",onClick:function(){return v(!x)},children:"Automate Selection"})]})]})}),Object(I.jsx)(w.bb,{"data-tab":"profile",children:"".concat("null")})]})]})})})]}),Object(I.jsx)(V,{children:Object(I.jsx)("div",{style:{padding:"1rem"},children:Object(I.jsxs)(w.cb,{activeTab:"payments",children:[Object(I.jsxs)(w.L,{variant:"tabs",children:[Object(I.jsx)(w.M,{children:Object(I.jsx)(w.N,{"data-tab":"payments",children:"Payments"})}),Object(I.jsx)(w.M,{children:Object(I.jsx)(w.N,{"data-tab":"approval",children:"Approval"})})]}),Object(I.jsxs)(w.ab,{children:[Object(I.jsx)(w.bb,{"data-tab":"payments",children:Object(I.jsx)(N.a,{studentId:null===a||void 0===a?void 0:a.userId})}),Object(I.jsx)(w.bb,{"data-tab":"approval",children:Object(I.jsx)(E,{studentId:null===a||void 0===a?void 0:a.userId})})]})]})})}),Object(I.jsxs)("div",{class:"student-profile py-4",children:[Object(I.jsx)(G,{children:null===s||void 0===s?void 0:s.map((function(e,t){var n;return Object(I.jsxs)("div",{margin:"2rem",children:[Object(I.jsxs)(Y,{children:["Academic year ",e.year]}),Object(I.jsxs)(L,{children:[Object(I.jsx)(H,{children:"Code"}),Object(I.jsx)(H,{children:"Name"}),Object(I.jsx)(H,{children:"Credit"}),Object(I.jsx)(H,{children:"grade"}),Object(I.jsx)(H,{children:"CrPts"}),null===e||void 0===e||null===(n=e.courses)||void 0===n?void 0:n.map((function(t,n){var r,c,i,d;return Object(I.jsx)(y.a.Fragment,{children:t.studentscourses.academicYear===e.year?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(J,{children:t.Course.code}),Object(I.jsx)(J,{children:Object(I.jsx)(B.b,{to:"/courseDashboard/".concat(null===t||void 0===t?void 0:t.id),children:t.Course.name})}),Object(I.jsx)(J,{children:t.Course.credit}),Object(I.jsx)(J,{children:(null===(r=t.studentscourses)||void 0===r?void 0:r.grade)?null===(c=t.studentscourses)||void 0===c?void 0:c.grade:Object(I.jsx)(w.t,{row:!0,children:Object(I.jsx)(w.j,{xs:"12",md:"20",children:Object(I.jsxs)(w.R,{custom:!0,name:"grade",id:"select",onChange:de,children:[Object(I.jsx)("option",{value:"0",children:"Predict Grade"}),W.map((function(e){return Object(I.jsx)("option",{value:'{"grade":"'.concat(e,'","id":').concat(null===t||void 0===t?void 0:t.id,',"credit":').concat(t.Course.credit,"}"),children:e})}))]})})})}),Object(I.jsx)(J,{children:(null===(i=t.studentscourses)||void 0===i?void 0:i.CrPts)?null===(d=t.studentscourses)||void 0===d?void 0:d.CrPts:ae(null===t||void 0===t?void 0:t.id)})," "]}):null},n)}))]}),Object(I.jsxs)(U,{children:["GPA: ",e.gpa?Number.parseFloat(e.gpa).toPrecision(3):(X.reduce((function(e,t){return e+t.CrPts}),0)/X.reduce((function(e,t){return e+t.credit}),0)).toPrecision(3)," / CGPA: ",e.cgpa?Number.parseFloat(e.cgpa).toPrecision(3):se(),"/ STATUS : ",e.status," / TOTAL CREDIT: ",e.totalcredit]})]},t)}))}),Object(I.jsx)(k.a,{modal:b,setModal:m,studentId:d}),Object(I.jsx)(A.a,{modal:x,setModal:v,studentId:d})]})]})}}}]);
//# sourceMappingURL=38.041258ef.chunk.js.map