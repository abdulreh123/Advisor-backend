(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[29],{648:function(e,t,s){"use strict";s.d(t,"f",(function(){return r})),s.d(t,"g",(function(){return d})),s.d(t,"h",(function(){return l})),s.d(t,"k",(function(){return j})),s.d(t,"j",(function(){return o})),s.d(t,"i",(function(){return m})),s.d(t,"l",(function(){return u})),s.d(t,"b",(function(){return b})),s.d(t,"a",(function(){return x})),s.d(t,"e",(function(){return h})),s.d(t,"d",(function(){return O})),s.d(t,"c",(function(){return v}));var a=s(647),c=s(5),n=s(645),i=s.n(n),r=function(){return function(e){i.a.get("/api/student").then((function(t){e({type:c.x,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},d=function(e){return function(t){i.a.get("/api/chairman/statistics/".concat(e)).then((function(e){t({type:c.o,payload:e.data.data})})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},l=function(e){return function(t){i.a.get("/api/student/".concat(e)).then((function(e){t({type:c.w,payload:e.data.data})})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},j=function(e){return function(t){i.a.get("/api/student/time-table/".concat(e,"?year=2021-2022 - Spring")).then((function(e){t({type:c.z,payload:e.data.data})})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},o=function(e,t){return function(s){i.a.get("/api/student/stats/".concat(e,"/").concat(t)).then((function(e){s({type:c.y,payload:e.data.data})})).catch((function(e){s(Object(a.a)(e.response.data.message,e.response.status))}))}},m=function(e){return function(t){i.a.get("/api/student/advisor/".concat(e)).then((function(e){t({type:c.B,payload:e.data.data})})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},u=function(e){return function(t){i.a.get("/api/student/transcript/".concat(e)).then((function(e){t({type:c.A,payload:e.data.data})})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},b=function(e){return function(t){i.a.post("/api/student/create",e).then((function(e){t({type:c.h,payload:e.data.data})})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},x=function(e,t){return function(s){i.a.put("/api/student/add/remove/".concat(e),t).then((function(e){s({type:c.h,payload:e.data.data}),s(Object(a.a)(e.data.message,e.status))})).catch((function(e){s(Object(a.a)(e.response.data.message,e.response.status))}))}},h=function(e,t){return function(s){i.a.get("/api/student/automate/".concat(e,"?year=").concat(t)).then((function(e){s({type:c.m,payload:e.data.data}),s(Object(a.a)(e.data.message,e.status))})).catch((function(e){s(Object(a.a)(e.response.data.message,e.response.status))}))}},O=function(e){return function(t){i.a.get("/api/student/get-approve/".concat(e)).then((function(e){t({type:c.j,payload:e.data.data}),t(Object(a.a)(e.data.message,e.status))})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},v=function(e,t){return function(s){i.a.put("/api/student//approve/".concat(e,"/").concat(t)).then((function(e){s({type:c.k,payload:e.data.data}),s(Object(a.a)(e.data.message,e.status))})).catch((function(e){s(Object(a.a)(e.response.data.message,e.response.status))}))}}},762:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(643),n=s(175),i=s(646),r=s(672),d=s(21),l=Object(a.lazy)((function(){return Promise.all([s.e(2),s.e(16)]).then(s.bind(null,759))})),j=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"My Courses"}),Object(d.jsx)(l,{}),Object(d.jsx)(c.e,{children:Object(d.jsxs)(c.f,{children:[Object(d.jsxs)(c.N,{children:[Object(d.jsx)(c.j,{sm:"5",children:Object(d.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"Your Time Table"})}),Object(d.jsx)(c.j,{sm:"7",className:"d-none d-md-block"})]}),Object(d.jsx)(r.a,{hoursInterval:{from:9,to:20},events:{monday:[{id:1,name:"Phy101",type:"custom",startTime:new Date("2018-02-23T11:30:00"),endTime:new Date("2018-02-23T13:30:00")}],tuesday:[{id:1,name:"mth101",type:"custom",startTime:new Date("2018-02-24T09:30:00"),endTime:new Date("2018-02-24T10:30:00")}],wednesday:[],thursday:[],friday:[]}})]})})]})},o=Object(a.lazy)((function(){return Promise.all([s.e(2),s.e(23)]).then(s.bind(null,760))})),m=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{}),Object(d.jsx)(c.N,{children:Object(d.jsx)(c.j,{children:Object(d.jsxs)(c.e,{children:[Object(d.jsx)(c.i,{children:"All Students"}),Object(d.jsxs)(c.f,{children:[Object(d.jsx)("br",{}),Object(d.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(d.jsx)("thead",{className:"thead-light",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"text-center",children:Object(d.jsx)(i.a,{name:"cil-people"})}),Object(d.jsx)("th",{children:"User"}),Object(d.jsx)("th",{className:"text-center",children:"Country"}),Object(d.jsx)("th",{children:"Usage"}),Object(d.jsx)("th",{className:"text-center",children:"Payment Method"}),Object(d.jsx)("th",{children:"Activity"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-center",children:Object(d.jsxs)("div",{className:"c-avatar",children:[Object(d.jsx)("img",{src:"avatars/1.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(d.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{children:"Yiorgos Avraamu"}),Object(d.jsxs)("div",{className:"small text-muted",children:[Object(d.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(d.jsx)("td",{className:"text-center",children:Object(d.jsx)(i.a,{height:25,name:"cif-us",title:"us",id:"us"})}),Object(d.jsxs)("td",{children:[Object(d.jsxs)("div",{className:"clearfix",children:[Object(d.jsx)("div",{className:"float-left",children:Object(d.jsx)("strong",{children:"50%"})}),Object(d.jsx)("div",{className:"float-right",children:Object(d.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(d.jsx)(c.M,{className:"progress-xs",color:"success",value:"50"})]}),Object(d.jsx)("td",{className:"text-center",children:Object(d.jsx)(i.a,{height:25,name:"cib-cc-mastercard"})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(d.jsx)("strong",{children:"10 sec ago"})]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-center",children:Object(d.jsxs)("div",{className:"c-avatar",children:[Object(d.jsx)("img",{src:"avatars/2.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(d.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{children:"Avram Tarasios"}),Object(d.jsxs)("div",{className:"small text-muted",children:[Object(d.jsx)("span",{children:"Recurring"})," | Registered: Jan 1, 2015"]})]}),Object(d.jsx)("td",{className:"text-center",children:Object(d.jsx)(i.a,{height:25,name:"cif-br",title:"br",id:"br"})}),Object(d.jsxs)("td",{children:[Object(d.jsxs)("div",{className:"clearfix",children:[Object(d.jsx)("div",{className:"float-left",children:Object(d.jsx)("strong",{children:"10%"})}),Object(d.jsx)("div",{className:"float-right",children:Object(d.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(d.jsx)(c.M,{className:"progress-xs",color:"info",value:"10"})]}),Object(d.jsx)("td",{className:"text-center",children:Object(d.jsx)(i.a,{height:25,name:"cib-cc-visa"})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(d.jsx)("strong",{children:"5 minutes ago"})]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-center",children:Object(d.jsxs)("div",{className:"c-avatar",children:[Object(d.jsx)("img",{src:"avatars/3.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(d.jsx)("span",{className:"c-avatar-status bg-warning"})]})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{children:"Quintin Ed"}),Object(d.jsxs)("div",{className:"small text-muted",children:[Object(d.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(d.jsx)("td",{className:"text-center",children:Object(d.jsx)(i.a,{height:25,name:"cif-in",title:"in",id:"in"})}),Object(d.jsxs)("td",{children:[Object(d.jsxs)("div",{className:"clearfix",children:[Object(d.jsx)("div",{className:"float-left",children:Object(d.jsx)("strong",{children:"74%"})}),Object(d.jsx)("div",{className:"float-right",children:Object(d.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(d.jsx)(c.M,{className:"progress-xs",color:"warning",value:"74"})]}),Object(d.jsx)("td",{className:"text-center",children:Object(d.jsx)(i.a,{height:25,name:"cib-stripe"})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(d.jsx)("strong",{children:"1 hour ago"})]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-center",children:Object(d.jsxs)("div",{className:"c-avatar",children:[Object(d.jsx)("img",{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(d.jsx)("span",{className:"c-avatar-status bg-secondary"})]})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{children:"En\xe9as Kwadwo"}),Object(d.jsxs)("div",{className:"small text-muted",children:[Object(d.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(d.jsx)("td",{className:"text-center",children:Object(d.jsx)(i.a,{height:25,name:"cif-fr",title:"fr",id:"fr"})}),Object(d.jsxs)("td",{children:[Object(d.jsxs)("div",{className:"clearfix",children:[Object(d.jsx)("div",{className:"float-left",children:Object(d.jsx)("strong",{children:"98%"})}),Object(d.jsx)("div",{className:"float-right",children:Object(d.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(d.jsx)(c.M,{className:"progress-xs",color:"danger",value:"98"})]}),Object(d.jsx)("td",{className:"text-center",children:Object(d.jsx)(i.a,{height:25,name:"cib-paypal"})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(d.jsx)("strong",{children:"Last month"})]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-center",children:Object(d.jsxs)("div",{className:"c-avatar",children:[Object(d.jsx)("img",{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(d.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{children:"Agapetus Tade\xe1\u0161"}),Object(d.jsxs)("div",{className:"small text-muted",children:[Object(d.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(d.jsx)("td",{className:"text-center",children:Object(d.jsx)(i.a,{height:25,name:"cif-es",title:"es",id:"es"})}),Object(d.jsxs)("td",{children:[Object(d.jsxs)("div",{className:"clearfix",children:[Object(d.jsx)("div",{className:"float-left",children:Object(d.jsx)("strong",{children:"22%"})}),Object(d.jsx)("div",{className:"float-right",children:Object(d.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(d.jsx)(c.M,{className:"progress-xs",color:"info",value:"22"})]}),Object(d.jsx)("td",{className:"text-center",children:Object(d.jsx)(i.a,{height:25,name:"cib-google-pay"})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(d.jsx)("strong",{children:"Last week"})]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-center",children:Object(d.jsxs)("div",{className:"c-avatar",children:[Object(d.jsx)("img",{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(d.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{children:"Friderik D\xe1vid"}),Object(d.jsxs)("div",{className:"small text-muted",children:[Object(d.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(d.jsx)("td",{className:"text-center",children:Object(d.jsx)(i.a,{height:25,name:"cif-pl",title:"pl",id:"pl"})}),Object(d.jsxs)("td",{children:[Object(d.jsxs)("div",{className:"clearfix",children:[Object(d.jsx)("div",{className:"float-left",children:Object(d.jsx)("strong",{children:"43%"})}),Object(d.jsx)("div",{className:"float-right",children:Object(d.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(d.jsx)(c.M,{className:"progress-xs",color:"success",value:"43"})]}),Object(d.jsx)("td",{className:"text-center",children:Object(d.jsx)(i.a,{height:25,name:"cib-cc-amex"})}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(d.jsx)("strong",{children:"Yesterday"})]})]})]})]})]})]})})})]})},u=s(648),b=Object(a.lazy)((function(){return Promise.all([s.e(2),s.e(6)]).then(s.bind(null,757))})),x=function(){var e,t,s,i,l,j,o,m,x,h,O,v,f=Object(n.c)((function(e){return e.student.timeTable})),p=Object(n.c)((function(e){return e.auth.user})),g=Object(n.b)();Object(a.useEffect)((function(){p&&g(Object(u.k)(p.Id))}),[g,p]);var N=null===(e=f[0])||void 0===e||null===(t=e.monday[0])||void 0===t?void 0:t.map((function(e){var t,s,a;return{id:1,name:null===(t=e[0])||void 0===t?void 0:t.name,type:"custom",startTime:new Date(null===(s=e[0])||void 0===s?void 0:s.startTime),endTime:new Date(null===(a=e[0])||void 0===a?void 0:a.endTime)}})),y=null===(s=f[1])||void 0===s||null===(i=s.tuesday[0])||void 0===i?void 0:i.map((function(e){var t,s,a;return{id:1,name:null===(t=e[0])||void 0===t?void 0:t.name,type:"custom",startTime:new Date(null===(s=e[0])||void 0===s?void 0:s.startTime),endTime:new Date(null===(a=e[0])||void 0===a?void 0:a.endTime)}})),T=null===(l=f[2])||void 0===l||null===(j=l.wednesday[0])||void 0===j?void 0:j.map((function(e){var t,s,a;return{id:1,name:null===(t=e[0])||void 0===t?void 0:t.name,type:"custom",startTime:new Date(null===(s=e[0])||void 0===s?void 0:s.startTime),endTime:new Date(null===(a=e[0])||void 0===a?void 0:a.endTime)}})),w=null===(o=f[3])||void 0===o||null===(m=o.thursday[0])||void 0===m?void 0:m.map((function(e){var t,s,a;return{id:1,name:null===(t=e[0])||void 0===t?void 0:t.name,type:"custom",startTime:new Date(null===(s=e[0])||void 0===s?void 0:s.startTime),endTime:new Date(null===(a=e[0])||void 0===a?void 0:a.endTime)}})),J=null===(x=f[4])||void 0===x||null===(h=x.friday[0])||void 0===h?void 0:h.map((function(e){var t,s,a;return{id:1,name:null===(t=e[0])||void 0===t?void 0:t.name,type:"custom",startTime:new Date(null===(s=e[0])||void 0===s?void 0:s.startTime),endTime:new Date(null===(a=e[0])||void 0===a?void 0:a.endTime)}}));null===(O=f[5])||void 0===O||null===(v=O.saturday[0])||void 0===v||v.map((function(e){var t,s,a;return{id:1,name:null===(t=e[0])||void 0===t?void 0:t.name,type:"custom",startTime:new Date(null===(s=e[0])||void 0===s?void 0:s.startTime),endTime:new Date(null===(a=e[0])||void 0===a?void 0:a.endTime)}}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(c.e,{children:Object(d.jsxs)(c.f,{children:[Object(d.jsxs)(c.N,{children:[Object(d.jsx)(c.j,{sm:"5",children:Object(d.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"Your Time Table"})}),Object(d.jsx)(c.j,{sm:"7",className:"d-none d-md-block"})]}),Object(d.jsx)(r.a,{hoursInterval:{from:9,to:20},events:{monday:N,tuesday:y,wednesday:T,thursday:w,friday:J}})]})})]})};t.default=function(){var e=Object(n.c)((function(e){var t;return null===(t=e.auth.user)||void 0===t?void 0:t.status}));return Object(d.jsxs)(d.Fragment,{children:["Advisor"===e?Object(d.jsx)(j,{}):null,"Student"===e?Object(d.jsx)(x,{}):null,"Chairman"===e?Object(d.jsx)(m,{}):null]})}}}]);
//# sourceMappingURL=29.01473a7c.chunk.js.map