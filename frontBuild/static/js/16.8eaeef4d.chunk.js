(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{651:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return r})),n.d(e,"f",(function(){return l})),n.d(e,"b",(function(){return m}));var a=n(647),c=n(5),i=n(646),s=n.n(i),o=function(){return function(t){s.a.get("/api/advisor").then((function(e){t({type:c.n,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){s.a.get("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){s.a.post("/api/advisor/create",t).then((function(t){e({type:c.a,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},r=function(t){return function(e){s.a.get("/api/advisor/time-table/".concat(t,"?year=2021-2022 - Fall")).then((function(t){e({type:c.o,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},l=function(t,e){return function(n){s.a.put("/api/advisor/".concat(e),t).then((function(t){n({type:c.a,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},m=function(t){return function(e){s.a.delete("/api/advisor/".concat(t)).then((function(t){e({type:c.a,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},652:function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return d})),n.d(e,"l",(function(){return r})),n.d(e,"k",(function(){return l})),n.d(e,"j",(function(){return m})),n.d(e,"m",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"p",(function(){return v})),n.d(e,"o",(function(){return j})),n.d(e,"a",(function(){return b})),n.d(e,"n",(function(){return h})),n.d(e,"e",(function(){return O})),n.d(e,"d",(function(){return y})),n.d(e,"c",(function(){return g})),n.d(e,"f",(function(){return x}));var a=n(647),c=n(5),i=n(646),s=n.n(i),o=function(){return function(t){s.a.get("/api/student").then((function(e){t({type:c.D,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){s.a.get("/api/chairman/statistics/".concat(t)).then((function(t){e({type:c.t,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){s.a.get("/api/student/".concat(t)).then((function(t){e({type:c.C,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},r=function(t){return function(e){s.a.get("/api/student/time-table/".concat(t,"?year=2021-2022 - Fall")).then((function(t){e({type:c.F,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},l=function(t,e){return function(n){s.a.get("/api/student/stats/".concat(t,"/").concat(e)).then((function(t){n({type:c.E,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},m=function(t){return function(e){s.a.get("/api/student/advisor/".concat(t)).then((function(t){e({type:c.H,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},p=function(t){return function(e){s.a.get("/api/student/transcript/".concat(t)).then((function(t){e({type:c.G,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},f=function(t){return function(e){s.a.post("/api/student/create",t).then((function(t){e({type:c.j,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},v=function(t,e){return function(n){s.a.put("/api/student/".concat(e),t).then((function(t){n({type:c.j,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},j=function(t,e,n){return function(i){s.a.put("/api/student/".concat(e,"/").concat(n),t).then((function(t){i({type:c.j,payload:t.data.data}),i(Object(a.b)(t.data.message,t.status))})).catch((function(t){i(Object(a.b)(t.response.data.message,t.response.status))}))}},b=function(t,e){return function(n){s.a.put("/api/student/add/remove/".concat(t),e).then((function(t){n({type:c.j,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},h=function(t){return function(e){s.a.get("http://app.neu.edu.tr:7003/predict/%7Bvalue%7D?name=[".concat(t,"]")).then((function(t){e({type:c.A,payload:t.data})}))}},O=function(t,e){return function(n){s.a.get("/api/student/automate/".concat(t,"?year=").concat(e)).then((function(t){n({type:c.q,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},y=function(t){return function(e){s.a.get("/api/student/get-approve/".concat(t)).then((function(t){e({type:c.l,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},g=function(t,e){return function(n){s.a.put("/api/student//approve/".concat(t,"/").concat(e)).then((function(t){n({type:c.m,payload:t.data.data}),n(Object(a.b)(t.data.message,t.status))})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},x=function(t){return function(e){s.a.delete("/api/student/".concat(t)).then((function(t){e({type:c.j,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},678:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return d}));var a=n(647),c=n(5),i=n(646),s=n.n(i),o=function(){return function(t){s.a.get("/api/announcement/dashboard/announcement").then((function(e){t({type:c.p,payload:e.data.data})})).catch((function(e){t(Object(a.b)(e.response.data.message,e.response.status))}))}},u=function(t){return function(e){s.a.get("/api/announcement/student/".concat(t)).then((function(t){e({type:c.p,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(e){s.a.post("/api/announcement/create",t).then((function(t){e({type:c.b,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}}},773:function(t,e,n){"use strict";n.r(e);var a,c=n(1),i=n(645),s=n(175),o=n(649),u=n(677),d=n(650),r=n(653),l=n(678),m=n(18),p=r.default.div(a||(a=Object(d.a)(["\n display: grid;\n  grid-template-columns:  33% 33% 33% ;\n  grid-gap: 10px;\n  padding: 10px;\n  background:#123878;\n  border-radius: 9px;\n"]))),f=function(t){var e=Object(s.c)((function(t){return t.auth.user})),n=Object(s.c)((function(t){return t.announcements.announcements})),a=Object(s.b)();return Object(c.useEffect)((function(){"Student"===e.status?a(Object(l.c)(null===e||void 0===e?void 0:e.Id)):a(Object(l.b)())}),[a,e]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{class:"leftbox",children:[Object(m.jsx)("h2",{children:"Announcements"}),Object(m.jsx)(p,{class:"content",children:n.map((function(t){var e,n,a;return Object(m.jsxs)("div",{children:[t.Group?Object(m.jsx)("h3",{style:{color:"white",fontSize:"1.2rem"},children:null===t||void 0===t||null===(e=t.Group)||void 0===e?void 0:e.name}):Object(m.jsx)("h3",{style:{color:"white"},children:null===t||void 0===t?void 0:t.sender}),Object(m.jsx)("p",{style:{color:"white",fontSize:"0.6rem"},children:(null===t||void 0===t||null===(n=t.createdAt)||void 0===n?void 0:n.slice(0,10))+" "+(null===t||void 0===t||null===(a=t.createdAt)||void 0===a?void 0:a.slice(11,16))}),Object(m.jsx)("p",{style:{color:"white"},children:null===t||void 0===t?void 0:t.content})]})}))})]})})},v=n(651),j=Object(c.lazy)((function(){return n.e(44).then(n.bind(null,770))})),b=function(){var t,e,n,a,i,o,d,r,l,p,b,h,O=Object(s.c)((function(t){return t.advisor.timeTable})),y=Object(s.c)((function(t){return t.auth.user})),g=Object(s.b)();Object(c.useEffect)((function(){y&&g(Object(v.d)(y.Id))}),[g,y]);var x=null===(t=O[0])||void 0===t||null===(e=t.monday[0])||void 0===e?void 0:e.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),T=null===(n=O[1])||void 0===n||null===(a=n.tuesday[0])||void 0===a?void 0:a.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),w=null===(i=O[2])||void 0===i||null===(o=i.wednesday[0])||void 0===o?void 0:o.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),D=null===(d=O[3])||void 0===d||null===(r=d.thursday[0])||void 0===r?void 0:r.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),N=null===(l=O[4])||void 0===l||null===(p=l.friday[0])||void 0===p?void 0:p.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),A=null===(b=O[5])||void 0===b||null===(h=b.saturday[0])||void 0===h?void 0:h.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"My Courses"}),Object(m.jsx)(j,{}),Object(m.jsx)(f,{}),Object(m.jsx)("h3",{style:{marginTop:"1rem"},children:"Your Time Table"}),Object(m.jsx)("div",{style:{marginTop:"1rem"},children:Object(m.jsx)(u.a,{hoursInterval:{from:9,to:20},getDayLabel:function(t){return t.slice(0,3)},events:{monday:x,tuesday:T,wednesday:w,thursday:D,friday:N,saturday:A}})})]})},h=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(33)]).then(n.bind(null,771))})),O=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{}),Object(m.jsx)(i.Q,{children:Object(m.jsx)(i.j,{children:Object(m.jsxs)(i.e,{children:[Object(m.jsx)(i.i,{children:"All Advisors"}),Object(m.jsxs)(i.f,{children:[Object(m.jsx)("br",{}),Object(m.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(m.jsx)("thead",{className:"thead-light",children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"text-center",children:Object(m.jsx)(o.a,{name:"cil-people"})}),Object(m.jsx)("th",{children:"User"}),Object(m.jsx)("th",{className:"text-center",children:"Country"}),Object(m.jsx)("th",{className:"text-center",children:"Courses Given"}),Object(m.jsx)("th",{children:"Activity"})]})}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:"text-center",children:Object(m.jsxs)("div",{className:"c-avatar",children:[Object(m.jsx)("img",{src:"avatars/1.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(m.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(m.jsxs)("td",{children:[Object(m.jsx)("div",{children:"Rahib rahib"}),Object(m.jsxs)("div",{className:"small text-muted",children:[Object(m.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(m.jsx)("td",{className:"text-center",children:Object(m.jsx)(o.a,{height:25,name:"cif-us",title:"us",id:"us"})}),Object(m.jsx)("td",{className:"text-center",children:Object(m.jsx)("small",{className:"text-muted",children:"3"})}),Object(m.jsxs)("td",{children:[Object(m.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(m.jsx)("strong",{children:"10 sec ago"})]})]}),Object(m.jsx)("tr",{})]})]})]})]})})})]})},y=n(652),g=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(6)]).then(n.bind(null,768))})),x=function(){var t,e,n,a,i,o,d,r,l,p,v,j,b=Object(s.c)((function(t){return t.student.timeTable})),h=Object(s.c)((function(t){return t.auth.user})),O=Object(s.b)();Object(c.useEffect)((function(){h&&O(Object(y.l)(h.Id))}),[O,h]);var x=null===(t=b[0])||void 0===t||null===(e=t.monday[0])||void 0===e?void 0:e.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),T=null===(n=b[1])||void 0===n||null===(a=n.tuesday[0])||void 0===a?void 0:a.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),w=null===(i=b[2])||void 0===i||null===(o=i.wednesday[0])||void 0===o?void 0:o.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),D=null===(d=b[3])||void 0===d||null===(r=d.thursday[0])||void 0===r?void 0:r.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),N=null===(l=b[4])||void 0===l||null===(p=l.friday[0])||void 0===p?void 0:p.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}})),A=null===(v=b[5])||void 0===v||null===(j=v.saturday[0])||void 0===j?void 0:j.map((function(t){var e,n,a;return{id:1,name:null===(e=t[0])||void 0===e?void 0:e.name,type:"custom",startTime:new Date(null===(n=t[0])||void 0===n?void 0:n.startTime),endTime:new Date(null===(a=t[0])||void 0===a?void 0:a.endTime)}}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{}),Object(m.jsx)(f,{}),Object(m.jsx)("h3",{style:{marginTop:"1rem"},children:"Your Time Table"}),Object(m.jsx)("div",{style:{marginTop:"1rem"},children:Object(m.jsx)(u.a,{hoursInterval:{from:9,to:20},getDayLabel:function(t){return t.slice(0,3)},events:{monday:x,tuesday:T,wednesday:w,thursday:D,friday:N,saturday:A}})})]})};e.default=function(){var t=Object(s.c)((function(t){var e;return null===(e=t.auth.user)||void 0===e?void 0:e.status}));return Object(m.jsxs)(m.Fragment,{children:["Advisor"===t?Object(m.jsx)(b,{}):null,"Student"===t?Object(m.jsx)(x,{}):null,"Chairman"===t?Object(m.jsx)(O,{}):null]})}}}]);
//# sourceMappingURL=16.8eaeef4d.chunk.js.map