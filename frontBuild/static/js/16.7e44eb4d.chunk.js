(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{650:function(e,t,n){"use strict";function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return a}))},652:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return l}));var a=n(647),r=n(5),s=n(646),i=n.n(s),c=function(){return function(e){i.a.get("/api/advisor").then((function(t){e({type:r.m,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},o=function(e){return function(t){i.a.get("/api/advisor/".concat(e)).then((function(e){t({type:r.a,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},d=function(e){return function(t){i.a.post("/api/advisor/create",e).then((function(e){t({type:r.a,payload:e.data.data}),t(Object(a.b)(e.data.message,e.status))})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(e,t){return function(n){i.a.put("/api/advisor/".concat(t),e).then((function(e){n({type:r.a,payload:e.data.data}),n(Object(a.b)(e.data.message,e.status))})).catch((function(e){n(Object(a.b)(e.response.data.message,e.response.status))}))}},l=function(e){return function(t){i.a.delete("/api/advisor/".concat(e)).then((function(e){t({type:r.a,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}}},655:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(647),r=n(5),s=n(646),i=n.n(s),c=function(){return function(e){i.a.get("/api/group").then((function(t){e({type:r.w,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},o=function(e){return function(t){i.a.get("/api/group/".concat(e)).then((function(e){t({type:r.f,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},d=function(e){return function(t){i.a.get("/api/group/clash/[".concat(e,"]")).then((function(e){})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(e){return function(t){i.a.get("/api/group/department/".concat(e)).then((function(e){t({type:r.u,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},l=function(e){return function(t){i.a.post("/api/group/create",e).then((function(e){t({type:r.f,payload:e.data.data}),t(Object(a.b)(e.data.message,e.status))})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}}},760:function(e,t,n){"use strict";n.r(t);var a,r,s,i,c,o=n(650),d=n(1),u=n(645),l=n(175),b=n(649),m=n(653),p=(n(655),n(654)),h=n.n(p),j=n(652),f=n(122),v=n(18),g=Object(m.default)(f.b)(a||(a=Object(o.a)(["\n  color: #8d0000 !important;\n"]))),O=m.default.div(r||(r=Object(o.a)(["\ndisplay: grid;\ngrid-template-columns:  25% 75%;\ngrid-gap: 5rem;\npadding: 10px;\nborder-radius: 9px;\n@media (max-width:1200px)\n{\n  display:block;\n}\n"]))),y=m.default.div(s||(s=Object(o.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  text-align: -webkit-center;\n"]))),x=m.default.div(i||(i=Object(o.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  height: 23rem;\n  margin-right: 5rem; \n  @media (max-width:1200px)\n{ \n  width: 100%;\n  margin-top:2rem;\n}\n"]))),w=m.default.div(c||(c=Object(o.a)(["\n  border-radius: 0.5rem;\n  background: white;\n  margin-top: 3rem; \n"])));t.default=function(e){var t,n,a,r,s=Object(l.c)((function(e){return e.advisor.advisor.Students})),i=Object(l.c)((function(e){return e.advisor.advisor.Group})),c=Object(l.c)((function(e){return e.advisor.advisor})),o=null===e||void 0===e||null===(t=e.match)||void 0===t||null===(n=t.params)||void 0===n?void 0:n.id,m=Object(l.b)();Object(d.useEffect)((function(){m(Object(j.d)(o))}),[]);var p=[{selector:"userId",name:"Student ID",sortable:!0},{selector:"name",name:"Name",sortable:!0,cell:function(e){return Object(v.jsx)(g,{to:"/student-profile/".concat(e.id),children:e.name+" "+e.surname})}},{selector:"createdAt",name:"Registered",cell:function(e){var t;return Object(v.jsx)("span",{children:null===e||void 0===e||null===(t=e.createdAt)||void 0===t?void 0:t.replace("T"," ").replace(".000Z","")})},sortable:!0}],f=[{selector:"name",name:"Name",sortable:!0,cell:function(e){return Object(v.jsx)(g,{to:"/courseDashboard/".concat(e.id),children:e.name})}},{selector:"year",name:"Year",sortable:!0}];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(O,{class:"content",children:[Object(v.jsxs)(y,{children:[Object(v.jsx)("div",{style:{width:"9rem"},children:Object(v.jsx)(u.y,{src:"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})}),Object(v.jsx)("h3",{style:{color:"black",fontSize:"1.2rem"},children:(null===c||void 0===c?void 0:c.name)+" "+(null===c||void 0===c?void 0:c.surname)}),Object(v.jsx)("p",{style:{color:"black"},children:"Instructor"}),Object(v.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(v.jsx)(b.a,{name:"cil-envelope-open"}),Object(v.jsxs)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:[(null===c||void 0===c||null===(a=c.name)||void 0===a?void 0:a.toLowerCase())+"."+(null===c||void 0===c||null===(r=c.surname)||void 0===r?void 0:r.toLowerCase()),"@gmail.com"]})]}),Object(v.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(v.jsx)(b.a,{name:"cil-user"}),Object(v.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===s||void 0===s?void 0:s.length})]}),Object(v.jsxs)("div",{style:{display:"flex",padding:"0rem 0rem 0.5rem 1rem"},children:[Object(v.jsx)(b.a,{name:"cil-bookmark"}),Object(v.jsx)("h3",{style:{color:"black",padding:"0rem 0rem 0rem 1rem",fontSize:"0.8rem"},children:null===i||void 0===i?void 0:i.length})]})]}),Object(v.jsx)(x,{children:Object(v.jsx)("div",{style:{padding:"1rem"},children:Object(v.jsxs)(u.cb,{activeTab:"home",children:[Object(v.jsxs)(u.L,{variant:"tabs",children:[Object(v.jsx)(u.M,{children:Object(v.jsx)(u.N,{"data-tab":"home",children:"General"})}),Object(v.jsx)(u.M,{children:Object(v.jsx)(u.N,{"data-tab":"profile",children:"Contact"})})]}),Object(v.jsxs)(u.ab,{children:[Object(v.jsx)(u.bb,{"data-tab":"home",children:"Prof. Dr. Fadi Al-Turjman received his Ph.D. in computer science from Queen\u2019s University, \n                  Canada, in 2011. He is a full professor and a research center director at Near East University, \n                  Nicosia, Cyprus. Prof. Al-Turjman is a leading authority in the areas of smart/intelligent IoT systems, wireless, \n                  and mobile networks\u2019 architectures, protocols, deployments, and performance evaluation in Artificial Intelligence of \n                  Things (AIoT). His publication history spans over 350 SCI/E publications, in addition to numerous keynotes and plenary\n                   talks at flagship venues. He has authored and edited more than 40 books about cognition, security, and wireless sensor networks\u2019\n                    deployments in smart IoT environments, which have been published by well-reputed publishers such as Taylor and Francis, Elsevier, IET, and Springer. He has received several recognitions and best papers\u2019 awards at top international conferences. He also received the prestigious Best Research Paper Award from Elsevier Computer Communications Journal for the period 2015-2018, in addition to the Top Researcher Award for 2018 at Antalya Bilim University, Turkey. Prof. Al-Turjman has led a number of international symposia and workshops in flagship communication society conferences. Currently, he serves as book series editor and the lead guest/associate editor for several top tier journals, including the IEEE Communications Surveys and Tutorials (IF 23.9) and the Elsevier Sustainable Cities and Society (IF 5.7), in addition to organizing international conferences and symposiums on the most up to date research topics in AI and IoT."}),Object(v.jsx)(u.bb,{"data-tab":"profile",children:"".concat("null")})]})]})})})]}),Object(v.jsx)(w,{children:Object(v.jsx)("div",{style:{padding:"1rem"},children:Object(v.jsxs)(u.cb,{activeTab:"students",children:[Object(v.jsxs)(u.L,{variant:"tabs",children:[Object(v.jsx)(u.M,{children:Object(v.jsx)(u.N,{"data-tab":"students",children:"Students"})}),Object(v.jsx)(u.M,{children:Object(v.jsx)(u.N,{"data-tab":"courses",children:"Courses"})})]}),Object(v.jsxs)(u.ab,{children:[Object(v.jsxs)(u.bb,{"data-tab":"students",children:[Object(v.jsx)(h.a,{columns:p,data:s||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0}),"            "]}),Object(v.jsx)(u.bb,{"data-tab":"courses",children:Object(v.jsx)(h.a,{columns:f,data:i||[],striped:!0,responsive:!0,pagination:!0,highlightOnHover:!0,subHeaderAlign:"center",noHeader:!0})})]})]})})})]})}}}]);
//# sourceMappingURL=16.7e44eb4d.chunk.js.map