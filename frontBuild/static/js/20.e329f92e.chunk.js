(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{646:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}));var a=t(4),r=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return 401===n?{type:a.V,payload:{msg:e,status:n,id:t}}:{type:a.E,payload:{msg:e,status:n,id:t}}},i=function(){return{type:a.l}}},661:function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return m}));var a=t(646),r=t(4),i=t(645),s=t.n(i),o=(t(74),function(e){return function(n){n({type:r.eb}),s.a.post("/api/auth/user",e).then((function(e){n({type:r.U,payload:e.data.data})})).catch((function(e){n(Object(a.b)(e.response.data.message,e.response.status)),n({type:r.T})}))}}),c=function(){return function(e){e({type:r.eb}),s.a.get("/api/auth/access").then((function(n){e({type:r.db,payload:n.data.data})})).catch((function(n){e({type:r.V}),e(Object(a.b)(n.response.data.message,n.response.status))}))}},m=function(){return function(e){e({type:r.V})}}},666:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t(647),r=t(1),i=t(177),s=t(173),o=t(646),c=t(19),m=function(e){var n,t=Object(s.b)(),m=e.type,u=e.message,d=void 0===u?"Request successful!":u;if(200===m)n="success";else n="danger";var l={position:"bottom-right",style:{backgroundColor:"var(--".concat(n,")"),border:"1px solid #ffffffd1",color:"var(--white)",borderRadius:".5rem",fontFamily:"roboto condense, monospace",fontSize:"1rem",textAlign:"center"},closeStyle:{color:"#92e792ad",fontSize:"16px"}},p=Object(i.b)(l),b=Object(a.a)(p,1)[0];return Object(r.useEffect)((function(){m&&d&&(b("".concat(d),5e3),t(Object(o.a)()))}),[m,d]),Object(c.jsx)(c.Fragment,{})}},775:function(e,n,t){"use strict";t.r(n);var a,r,i,s=t(1),o=t.n(s),c=t(2),m=t(22),u=t(644),d=t(393),l=o.a.lazy((function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,754))})),p=o.a.lazy((function(){return Promise.all([t.e(0),t.e(34)]).then(t.bind(null,781))})),b=o.a.lazy((function(){return t.e(23).then(t.bind(null,755))})),h=o.a.lazy((function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,756))})),j=o.a.lazy((function(){return t.e(31).then(t.bind(null,757))})),v=o.a.lazy((function(){return t.e(14).then(t.bind(null,758))})),f=o.a.lazy((function(){return t.e(24).then(t.bind(null,759))})),g=o.a.lazy((function(){return t.e(28).then(t.bind(null,760))})),S=o.a.lazy((function(){return Promise.all([t.e(0),t.e(27)]).then(t.bind(null,782))})),C=o.a.lazy((function(){return Promise.all([t.e(0),t.e(29)]).then(t.bind(null,783))})),x=o.a.lazy((function(){return t.e(35).then(t.bind(null,761))})),O=o.a.lazy((function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,784))})),A=o.a.lazy((function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,762))})),y=o.a.lazy((function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,763))})),N=o.a.lazy((function(){return Promise.all([t.e(0),t.e(25)]).then(t.bind(null,764))})),_=o.a.lazy((function(){return t.e(22).then(t.bind(null,765))})),w=o.a.lazy((function(){return Promise.all([t.e(47),t.e(13)]).then(t.bind(null,776))})),z=o.a.lazy((function(){return Promise.all([t.e(0),t.e(46),t.e(19)]).then(t.bind(null,778))})),I=o.a.lazy((function(){return t.e(40).then(t.bind(null,766))})),D=o.a.lazy((function(){return Promise.all([t.e(0),t.e(36)]).then(t.bind(null,767))})),k=o.a.lazy((function(){return t.e(37).then(t.bind(null,768))})),P=o.a.lazy((function(){return t.e(11).then(t.bind(null,769))})),R=o.a.lazy((function(){return Promise.all([t.e(0),t.e(33)]).then(t.bind(null,779))})),F=o.a.lazy((function(){return Promise.all([t.e(0),t.e(26)]).then(t.bind(null,780))})),E=o.a.lazy((function(){return t.e(30).then(t.bind(null,770))})),T=o.a.lazy((function(){return t.e(39).then(t.bind(null,771))})),U=o.a.lazy((function(){return Promise.all([t.e(0),t.e(3),t.e(32)]).then(t.bind(null,777))})),V=o.a.lazy((function(){return Promise.all([t.e(0),t.e(3),t.e(38)]).then(t.bind(null,785))})),Y=[{path:"/dashboard",name:"Dashboard",component:w,permissions:["Student","SuperAdmin","Chairman","Advisor"]},{path:"/student",name:"All Studnets",component:l,permissions:["Advisor","Chairman","SuperAdmin"]},{path:"/chairman",name:"All Chairman",component:p,permissions:["SuperAdmin"]},{path:"/registerChairman",name:"register Chairman",component:b,permissions:["SuperAdmin"]},{path:"/mystudent",name:"All Studnets",component:h,permissions:["Advisor",,"SuperAdmin"]},{path:"/my-courses",name:"My courses",component:j,permissions:["Student","Advisor","Chairman","SuperAdmin"]},{path:"/registerStudent",name:"Register Students",exact:!0,component:v,permissions:["Chairman","SuperAdmin"]},{path:"/registerAdvisor",name:"Register Advisor",exact:!0,component:f,permissions:["Chairman","SuperAdmin"]},{path:"/departments",name:"Departments",exact:!0,component:S,permissions:["Chairman","SuperAdmin"]},{path:"/createDepartment",name:"Create Departments",exact:!0,component:g,permissions:["Chairman","SuperAdmin"]},{path:"/faculties",name:"Faculties",exact:!0,component:C,permissions:["Chairman","SuperAdmin"]},{path:"/createFaculty",name:"Create Faculties",exact:!0,component:x,permissions:["Chairman","SuperAdmin"]},{path:"/settings",name:"OfferCourses",exact:!0,component:k,permissions:["Chairman","SuperAdmin"]},{path:"/courses",name:"Courses",exact:!0,component:O,permissions:["Student","Advisor","Chairman","SuperAdmin"]},{path:"/create-courses",name:"CreateCourses",exact:!0,component:_,permissions:["Chairman","SuperAdmin"]},{path:"/groups",name:"Course group",exact:!0,component:D,permissions:["Chairman","SuperAdmin"]},{path:"/create-groups",name:"Create group",exact:!0,component:P,permissions:["Chairman","SuperAdmin"]},{path:"/buildings",name:"Buildings",exact:!0,component:R,permissions:["Chairman","SuperAdmin"]},{path:"/rooms",name:"Rooms",exact:!0,component:F,permissions:["Chairman","SuperAdmin"]},{path:"/group-rooms",name:"Group rooms",exact:!0,component:E,permissions:["Chairman","SuperAdmin"]},{path:"/users",exact:!0,name:"Users",component:I,permissions:["Chairman","SuperAdmin"]},{path:"/users/:id",exact:!0,name:"User Details",component:T,permissions:["Advisor","Chairman","SuperAdmin"]},{path:"/profile",exact:!0,name:"Profile",component:U,permissions:["Student","Advisor","Chairman","SuperAdmin"]},{path:"/student-profile/:id",exact:!0,name:"Student profile",component:V,permissions:["Advisor","Chairman","SuperAdmin"]},{path:"/all-advisors",exact:!0,name:"All Advisors",component:A,permissions:["SuperAdmin"]},{path:"/courseDashboard/:id",exact:!0,name:"Course room",component:z,permissions:["SuperAdmin","Advisor","Chairman","Student"]},{path:"/advisorProfile/:id",exact:!0,name:"advisor profile",component:N,permissions:["Chairman","SuperAdmin"]},{path:"/advisors",exact:!0,name:"Advisors",component:y,permissions:["Chairman"]}],q=t(19),B=Object(q.jsx)("div",{className:"pt-3 text-center",children:Object(q.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),G=function(e){return Object(q.jsx)("main",{className:"c-main",children:Object(q.jsx)(u.k,{fluid:!0,children:Object(q.jsx)(s.Suspense,{fallback:B,children:Object(q.jsxs)(m.d,{children:[Y.map((function(e,n){return e.component&&Object(s.createElement)(d.a,Object(c.a)(Object(c.a)({},e),{},{key:n}))})),Object(q.jsx)(m.a,{from:"/",to:"/dashboard"})]})})})})},H=o.a.memo(G),J=function(){return Object(q.jsx)(u.r,{fixed:!1,children:Object(q.jsxs)("div",{children:[Object(q.jsx)("a",{href:"https://coreui.io",target:"_blank",rel:"noopener noreferrer",children:"IOT"}),Object(q.jsx)("span",{className:"ml-1",children:"\xa9 NEU"})]})})},L=o.a.memo(J),M=t(173),W=t(666),X=t(648),Z=t(661),K=t(646),Q=t(4),$=function(){return function(e){e({type:Q.S})}},ee=function(){return function(e){e({type:Q.ab})}},ne=function(){var e=Object(M.b)(),n=Object(M.c)((function(e){return e.sidebar.show})),t=Object(M.c)((function(e){return e.auth.user})),a=Object(M.c)((function(e){return e.errors})),r=a.msg,i=a.status;return Object(s.useEffect)((function(){e(Object(Z.a)())}),[e]),Object(q.jsxs)(u.u,{withSubheader:!0,children:[Object(q.jsx)(u.eb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){[!1,"responsive"].includes(n)?e((function(e){e({type:Q.bb})})):e(ee())}}),Object(q.jsx)(u.eb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){[!0,"responsive"].includes(n)?e($()):e(ee())}}),Object(q.jsx)(u.v,{className:"mx-auto d-lg-none",to:"/",children:Object(q.jsx)(X.a,{className:"c-sidebar-brand-full",name:"logo-negative",src:"https://neu.edu.tr/wp-content/uploads/2018/11/01/neu-42-years-in-education.png",height:40})}),Object(q.jsxs)(u.w,{className:"d-md-down-none mr-auto",children:[Object(q.jsx)(u.x,{className:"px-3"}),Object(q.jsx)(u.x,{className:"px-3"}),Object(q.jsx)(u.x,{className:"px-3"})]}),Object(q.jsx)(W.a,{type:i,message:r}),Object(q.jsxs)(u.w,{className:"px-3",children:[Object(q.jsx)(he,{}),Object(q.jsx)(se,{user:t})]})]})},te=t(662),ae=t.n(te),re=t(663),ie=t(121),se=function(e){var n=Object(M.b)(),t=e.user,a=Object(m.g)(),r=function(){var e=Object(re.a)(ae.a.mark((function e(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(Object(Z.b)());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(re.a)(ae.a.mark((function e(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:a.push("/login");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(q.jsxs)(u.n,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(q.jsx)(u.q,{className:"c-header-nav-link",caret:!1,children:Object(q.jsx)("div",{className:"c-avatar",children:2===(null===t||void 0===t?void 0:t.Id)?Object(q.jsx)(u.y,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}):Object(q.jsx)(u.y,{src:"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})})}),Object(q.jsxs)(u.p,{className:"pt-0",placement:"bottom-end",children:[Object(q.jsx)(u.o,{children:Object(q.jsxs)(ie.b,{to:"/profile",children:[Object(q.jsx)(X.a,{name:"cil-user",className:"mfe-2"}),"Profile"]})}),Object(q.jsx)(u.o,{divider:!0}),Object(q.jsxs)(u.o,{onClick:i,children:[Object(q.jsx)(X.a,{name:"cil-lock-locked",className:"mfe-2"}),"Log Out"]})]})]})},oe=t(652),ce=t(651),me=t(645),ue=t.n(me),de=function(e){return function(){var n=Object(re.a)(ae.a.mark((function n(t){return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(e),t({type:Q.W}),ue.a.get("/api/notification/receiver/".concat(e)).then((function(e){t({type:Q.H,payload:e.data.data})})).catch((function(e){console.log(e),t(Object(K.b)(e.response.data.message,e.response.status))}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},le=Object(ce.default)(u.y)(a||(a=Object(oe.a)(["\nwidth:27% !important\n"]))),pe=Object(ce.default)(u.p)(r||(r=Object(oe.a)(["\nwidth:23rem !important\n"]))),be=Object(ce.default)(u.o)(i||(i=Object(oe.a)(["\nwhite-space: break-spaces;\n"]))),he=function(){var e=Object(M.c)((function(e){return e.auth.user})),n=Object(M.c)((function(e){return e.notifications.general})),t=n.length>9?"9+":n.length,a=0===n.length?null:t,r=Object(M.b)();return Object(s.useEffect)((function(){"Advisor"===(null===e||void 0===e?void 0:e.status)?r(de(e.Id)):(null===e||void 0===e?void 0:e.userId)&&r(de(null===e||void 0===e?void 0:e.userId))}),[r,e]),Object(q.jsxs)(u.n,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(q.jsxs)(u.q,{className:"c-header-nav-link",caret:!1,children:[Object(q.jsx)(X.a,{name:"cil-bell"}),Object(q.jsx)(u.a,{shape:"pill",color:"danger",children:a})]}),Object(q.jsxs)(pe,{placement:"bottom-end",className:"pt-0",children:[Object(q.jsx)(u.o,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(q.jsxs)("strong",{children:["You have ",a," notifications"]})}),null===n||void 0===n?void 0:n.map((function(e,n){return Object(q.jsxs)(be,{children:["  ",Object(q.jsx)(le,{src:"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})," ",e.content]})}))]})]})},je=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(q.jsx)(X.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),permissions:["Student","Advisor","Chairman","SuperAdmin"]},{_tag:"CSidebarNavTitle",permissions:["Advisor","Chairman","SuperAdmin"]},{_tag:"CSidebarNavDropdown",name:"Students",route:"/students",permissions:["Advisor","Chairman","SuperAdmin"],_children:[{_tag:"CSidebarNavItem",name:"All Students",to:"/student",permissions:["Chairman","SuperAdmin"]},{_tag:"CSidebarNavItem",name:"My Students",to:"/mystudent",permissions:["Advisor","SuperAdmin"]},{_tag:"CSidebarNavItem",name:"Register Students",to:"/registerStudent",permissions:["Chairman","SuperAdmin"]}]},{_tag:"CSidebarNavDropdown",name:"Chairman",route:"/chairman",permissions:["SuperAdmin"],_children:[{_tag:"CSidebarNavItem",name:"All Chairman",to:"/chairman",permissions:["SuperAdmin"]},{_tag:"CSidebarNavItem",name:"Register Chairman",to:"/registerChairman",permissions:["SuperAdmin"]}]},{_tag:"CSidebarNavDropdown",name:"Advisors",route:"/advisor",permissions:["Chairman","SuperAdmin"],_children:[{_tag:"CSidebarNavItem",name:"All Advisors",to:"/All-Advisors",permissions:["SuperAdmin"]},{_tag:"CSidebarNavItem",name:"Advisors",to:"/advisors",permissions:["Chairman"]},{_tag:"CSidebarNavItem",name:"Register Advisor",to:"/registerAdvisor",permissions:["Chairman","SuperAdmin"]}]},{_tag:"CSidebarNavDropdown",name:"Departments",route:"/departments",permissions:["SuperAdmin"],_children:[{_tag:"CSidebarNavItem",name:"Departments",to:"/departments",permissions:["SuperAdmin"]},{_tag:"CSidebarNavItem",name:"Create Department",to:"/createDepartment",permissions:["SuperAdmin"]}]},{_tag:"CSidebarNavDropdown",name:"Faculties",route:"/faculties",permissions:["SuperAdmin"],_children:[{_tag:"CSidebarNavItem",name:"faculties",to:"/faculties",permissions:["SuperAdmin"]},{_tag:"CSidebarNavItem",name:"Create Faculties",to:"/createFaculty",permissions:["SuperAdmin"]}]},{_tag:"CSidebarNavDropdown",name:"Courses",route:"/courses",permissions:["Student","Advisor","Chairman","SuperAdmin"],_children:[{_tag:"CSidebarNavItem",name:"All Courses",to:"/courses",permissions:["Student","Advisor","Chairman","SuperAdmin"]},{_tag:"CSidebarNavItem",name:"Create Course",to:"/create-courses",permissions:["Chairman","SuperAdmin"]},{_tag:"CSidebarNavItem",name:"Transcript",to:"/my-courses",permissions:["Student","SuperAdmin"]}]},{_tag:"CSidebarNavDropdown",name:"Groups",route:"/groups",permissions:["Chairman","SuperAdmin"],_children:[{_tag:"CSidebarNavItem",name:"Course group",to:"/groups",permissions:["Chairman","SuperAdmin"]},{_tag:"CSidebarNavItem",name:"Create group",to:"/create-groups",permissions:["Chairman","SuperAdmin"]}]},{_tag:"CSidebarNavDropdown",name:"Buildings",route:"/buildings",permissions:["Chairman","SuperAdmin"],_children:[{_tag:"CSidebarNavItem",name:"Buildings",to:"/buildings",permissions:["Chairman","SuperAdmin"]},{_tag:"CSidebarNavItem",name:"Rooms",to:"/rooms",permissions:["Chairman","SuperAdmin"]},{_tag:"CSidebarNavItem",name:"Assign Rooms",to:"/group-rooms",permissions:["Chairman","SuperAdmin"]}]},{_tag:"CSidebarNavDropdown",name:"Settings",route:"/settings",permissions:["Chairman","SuperAdmin"],_children:[{_tag:"CSidebarNavItem",name:"Academic Year",to:"/settings",permissions:["Chairman","SuperAdmin"]}]}],ve=function(){var e=Object(M.b)(),n=Object(M.c)((function(e){return e.sidebar.show})),t=Object(M.c)((function(e){var n;return null===(n=e.auth.user)||void 0===n?void 0:n.status})),a=je.map((function(e){var n,a=e._children,r=[];if(null===(n=e.permissions)||void 0===n?void 0:n.includes(t))return null===a||void 0===a||a.map((function(e){e.permissions.includes(t)&&r.push(e)})),r.length>0?{_tag:null===e||void 0===e?void 0:e._tag,name:null===e||void 0===e?void 0:e.name,route:null===e||void 0===e?void 0:e.route,icon:null===e||void 0===e?void 0:e.icon,_children:r}:{_tag:null===e||void 0===e?void 0:e._tag,name:null===e||void 0===e?void 0:e.name,to:null===e||void 0===e?void 0:e.to,icon:null===e||void 0===e?void 0:e.icon}})).filter((function(e){return void 0!==e}));return Object(q.jsxs)(u.S,{show:n,onShowChange:function(n){return e($())},children:[Object(q.jsxs)(u.T,{className:"d-md-down-none",to:"/",children:[Object(q.jsx)(X.a,{className:"c-sidebar-brand-full",name:"logo-negative",src:"https://neu.edu.tr/wp-content/uploads/2018/11/01/neu-42-years-in-education.png",height:35}),Object(q.jsx)(X.a,{className:"c-sidebar-brand-minimized",name:"sygnet",src:"https://neu.edu.tr/wp-content/uploads/2018/11/01/YDU_LOGO.png",height:35})]}),Object(q.jsx)(u.V,{children:Object(q.jsx)(u.l,{items:a,components:{CSidebarNavDivider:u.W,CSidebarNavDropdown:u.X,CSidebarNavItem:u.Y,CSidebarNavTitle:u.Z}})}),Object(q.jsx)(u.U,{className:"c-d-md-down-none"})]})},fe=o.a.memo(ve);n.default=function(e){return Object(q.jsxs)("div",{className:"c-app c-default-layout",children:[Object(q.jsx)(fe,{}),Object(q.jsxs)("div",{className:"c-wrapper",children:[Object(q.jsx)(ne,{}),Object(q.jsx)("div",{className:"c-body",children:Object(q.jsx)(H,{routes:e.routes})}),Object(q.jsx)(L,{})]})]})}}}]);
//# sourceMappingURL=20.e329f92e.chunk.js.map