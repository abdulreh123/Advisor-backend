(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{649:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return r})),n.d(e,"h",(function(){return u})),n.d(e,"k",(function(){return d})),n.d(e,"j",(function(){return l})),n.d(e,"i",(function(){return j})),n.d(e,"l",(function(){return b})),n.d(e,"b",(function(){return m})),n.d(e,"o",(function(){return p})),n.d(e,"n",(function(){return f})),n.d(e,"a",(function(){return h})),n.d(e,"m",(function(){return v})),n.d(e,"e",(function(){return O})),n.d(e,"d",(function(){return y})),n.d(e,"c",(function(){return x}));var a=n(646),c=n(5),s=n(645),i=n.n(s),o=function(){return function(t){i.a.get("/api/student").then((function(e){t({type:c.A,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},r=function(t){return function(e){i.a.get("/api/chairman/statistics/".concat(t)).then((function(t){e({type:c.q,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},u=function(t){return function(e){i.a.get("/api/student/".concat(t)).then((function(t){e({type:c.z,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){i.a.get("/api/student/time-table/".concat(t,"?year=2021-2022 - Spring")).then((function(t){e({type:c.C,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},l=function(t,e){return function(n){i.a.get("/api/student/stats/".concat(t,"/").concat(e)).then((function(t){n({type:c.B,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},j=function(t){return function(e){i.a.get("/api/student/advisor/".concat(t)).then((function(t){e({type:c.E,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},b=function(t){return function(e){i.a.get("/api/student/transcript/".concat(t)).then((function(t){e({type:c.D,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},m=function(t){return function(e){i.a.post("/api/student/create",t).then((function(t){e({type:c.i,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},p=function(t,e){return function(n){i.a.put("/api/student/".concat(e),t).then((function(t){n({type:c.i,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},f=function(t,e,n){return function(s){i.a.put("/api/student/".concat(e,"/").concat(n),t).then((function(t){s({type:c.i,payload:t.data.data}),s(Object(a.b)(t.data.message,t.status))})).catch((function(t){s(Object(a.b)(t.response.data.message,t.response.status))}))}},h=function(t,e){return function(n){i.a.put("/api/student/add/remove/".concat(t),e).then((function(t){n({type:c.i,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},v=function(t){return function(e){i.a.get("http://localhost:8000/predict/%7Bvalue%7D?name=[".concat(t,"]")).then((function(t){e({type:c.x,payload:t.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},O=function(t,e){return function(n){i.a.get("/api/student/automate/".concat(t,"?year=").concat(e)).then((function(t){n({type:c.o,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},y=function(t){return function(e){i.a.get("/api/student/get-approve/".concat(t)).then((function(t){e({type:c.k,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},x=function(t,e){return function(n){i.a.put("/api/student//approve/".concat(t,"/").concat(e)).then((function(t){n({type:c.l,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}}},677:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}));var a=n(646),c=n(5),s=n(645),i=n.n(s),o=function(){return function(t){i.a.get("/api/announcement/dashboard/announcement").then((function(e){t({type:c.n,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},r=function(t){return function(e){i.a.get("/api/announcement/student/".concat(t)).then((function(t){e({type:c.n,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},u=function(t){return function(e){i.a.post("/api/announcement/create",t).then((function(t){e({type:c.b,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},771:function(t,e,n){"use strict";n.r(e);var a,c=n(1),s=n(644),i=n(173),o=n(648),r=n(676),u=n(650),d=n(652),l=n(677),j=n(19),b=d.default.div(a||(a=Object(u.a)(["\n display: grid;\n  grid-template-columns:  33% 33% 33% ;\n  grid-gap: 10px;\n  padding: 10px;\n  background:#123878;\n  border-radius: 9px;\n"]))),m=function(t){var e=Object(i.c)((function(t){return t.auth.user})),n=Object(i.c)((function(t){return t.announcements.announcements})),a=Object(i.b)();return Object(c.useEffect)((function(){"Student"===e.status?a(Object(l.c)(null===e||void 0===e?void 0:e.Id)):a(Object(l.b)())}),[a,e]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{class:"leftbox",children:[Object(j.jsx)("h2",{children:"Announcements"}),Object(j.jsx)(b,{class:"content",children:n.map((function(t){var e,n,a;return Object(j.jsxs)("div",{children:[t.Group?Object(j.jsx)("h3",{style:{color:"white",fontSize:"1.2rem"},children:null===t||void 0===t||null===(e=t.Group)||void 0===e?void 0:e.name}):Object(j.jsx)("h3",{style:{color:"white"},children:null===t||void 0===t?void 0:t.sender}),Object(j.jsx)("p",{style:{color:"white",fontSize:"0.6rem"},children:(null===t||void 0===t||null===(n=t.createdAt)||void 0===n?void 0:n.slice(0,10))+" "+(null===t||void 0===t||null===(a=t.createdAt)||void 0===a?void 0:a.slice(11,16))}),Object(j.jsx)("p",{style:{color:"white"},children:null===t||void 0===t?void 0:t.content})]})}))})]})})},p=Object(c.lazy)((function(){return n.e(29).then(n.bind(null,768))})),f=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"My Courses"}),Object(j.jsx)(p,{}),Object(j.jsx)(m,{}),Object(j.jsx)("h3",{style:{marginTop:"1rem"},children:"Your Time Table"}),Object(j.jsx)("div",{style:{marginTop:"1rem"},children:Object(j.jsx)(r.a,{hoursInterval:{from:9,to:20},getDayLabel:function(t){return t.slice(0,3)},events:{monday:[{id:1,name:"Phy101",type:"custom",startTime:new Date("2018-02-23T11:30:00"),endTime:new Date("2018-02-23T13:30:00")}],tuesday:[{id:1,name:"mth101",type:"custom",startTime:new Date("2018-02-24T09:30:00"),endTime:new Date("2018-02-24T10:30:00")}],wednesday:[],thursday:[],friday:[]}})})]})},h=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(28)]).then(n.bind(null,769))})),v=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(s.Q,{children:Object(j.jsx)(s.j,{children:Object(j.jsxs)(s.e,{children:[Object(j.jsx)(s.i,{children:"All Advisors"}),Object(j.jsxs)(s.f,{children:[Object(j.jsx)("br",{}),Object(j.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(j.jsx)("thead",{className:"thead-light",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"text-center",children:Object(j.jsx)(o.a,{name:"cil-people"})}),Object(j.jsx)("th",{children:"User"}),Object(j.jsx)("th",{className:"text-center",children:"Country"}),Object(j.jsx)("th",{className:"text-center",children:"Courses Given"}),Object(j.jsx)("th",{children:"Activity"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-center",children:Object(j.jsxs)("div",{className:"c-avatar",children:[Object(j.jsx)("img",{src:"avatars/1.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(j.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{children:"Rahib rahib"}),Object(j.jsxs)("div",{className:"small text-muted",children:[Object(j.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)(o.a,{height:25,name:"cif-us",title:"us",id:"us"})}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)("small",{className:"text-muted",children:"3"})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(j.jsx)("strong",{children:"10 sec ago"})]})]}),Object(j.jsx)("tr",{})]})]})]})]})})})]})},O=n(649),y=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(6)]).then(n.bind(null,766))})),x=function(){var t,e,n,a,s,o,u,d,l,b,p,f,h=Object(i.c)((function(t){return t.student.timeTable})),v=Object(i.c)((function(t){return t.auth.user})),x=Object(i.b)();Object(c.useEffect)((function(){v&&x(Object(O.k)(v.Id))}),[x,v]);var g=null===(t=h[0])||void 0===t||null===(e=t.monday[0])||void 0===e?void 0:e.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),T=null===(n=h[1])||void 0===n||null===(a=n.tuesday[0])||void 0===a?void 0:a.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),w=null===(s=h[2])||void 0===s||null===(o=s.wednesday[0])||void 0===o?void 0:o.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),D=null===(u=h[3])||void 0===u||null===(d=u.thursday[0])||void 0===d?void 0:d.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),N=null===(l=h[4])||void 0===l||null===(b=l.friday[0])||void 0===b?void 0:b.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),A=null===(p=h[5])||void 0===p||null===(f=p.saturday[0])||void 0===f?void 0:f.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y,{}),Object(j.jsx)(m,{}),Object(j.jsx)("h3",{style:{marginTop:"1rem"},children:"Your Time Table"}),Object(j.jsx)("div",{style:{marginTop:"1rem"},children:Object(j.jsx)(r.a,{hoursInterval:{from:9,to:20},getDayLabel:function(t){return t.slice(0,3)},events:{monday:g,tuesday:T,wednesday:w,thursday:D,friday:N,saturday:A}})})]})};e.default=function(){var t=Object(i.c)((function(t){var e;return null===(e=t.auth.user)||void 0===e?void 0:e.status}));return Object(j.jsxs)(j.Fragment,{children:["Advisor"===t?Object(j.jsx)(f,{}):null,"Student"===t?Object(j.jsx)(x,{}):null,"Chairman"===t?Object(j.jsx)(v,{}):null]})}}}]);
//# sourceMappingURL=22.0867293d.chunk.js.map