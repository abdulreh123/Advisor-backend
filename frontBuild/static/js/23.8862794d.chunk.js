(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{647:function(t,e,n){"use strict";n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return o})),n.d(e,"j",(function(){return i})),n.d(e,"i",(function(){return d})),n.d(e,"h",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return j})),n.d(e,"e",(function(){return b})),n.d(e,"d",(function(){return g})),n.d(e,"c",(function(){return h}));var a=n(646),c=n(6),r=n(645),s=n.n(r),u=function(){return function(t){s.a.get("/api/student").then((function(e){t({type:c.w,payload:e.data.data})})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},o=function(t){return function(e){s.a.get("/api/student/".concat(t)).then((function(t){e({type:c.v,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},i=function(t){return function(e){s.a.get("/api/student/time-table/".concat(t,"?year=2021-2022 - Spring")).then((function(t){e({type:c.y,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},d=function(t,e){return function(n){s.a.get("/api/student/stats/".concat(t,"/").concat(e)).then((function(t){n({type:c.x,payload:t.data.data})})).catch((function(t){n(Object(a.a)(t.response.data.message,t.response.status))}))}},p=function(t){return function(e){s.a.get("/api/student/advisor/".concat(t)).then((function(t){e({type:c.A,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},f=function(t){return function(e){s.a.get("/api/student/transcript/".concat(t)).then((function(t){e({type:c.z,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},l=function(t){return function(e){s.a.post("/api/student/create",t).then((function(t){e({type:c.h,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},j=function(t,e){return function(n){s.a.put("/api/student/add/remove/".concat(t),e).then((function(t){n({type:c.h,payload:t.data.data}),n(Object(a.a)(t.data.message,t.status))})).catch((function(t){n(Object(a.a)(t.response.data.message,t.response.status))}))}},b=function(t,e){return function(n){s.a.get("/api/student/automate/".concat(t,"?year=").concat(e)).then((function(t){n({type:c.m,payload:t.data.data}),n(Object(a.a)(t.data.message,t.status))})).catch((function(t){n(Object(a.a)(t.response.data.message,t.response.status))}))}},g=function(t){return function(e){s.a.get("/api/student/get-approve/".concat(t)).then((function(t){e({type:c.j,payload:t.data.data}),e(Object(a.a)(t.data.message,t.status))})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}},h=function(t,e){return function(n){s.a.put("/api/student//approve/".concat(t,"/").concat(e)).then((function(t){n({type:c.k,payload:t.data.data}),n(Object(a.a)(t.data.message,t.status))})).catch((function(t){n(Object(a.a)(t.response.data.message,t.response.status))}))}}},651:function(t,e,n){"use strict";function a(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,"a",(function(){return a}))},750:function(t,e,n){"use strict";n.r(e);var a,c,r,s,u,o,i,d=n(651),p=n(1),f=n.n(p),l=n(173),j=n(647),b=n(650),g=n(22),h=b.default.div(a||(a=Object(d.a)(["\n"]))),m=b.default.div(c||(c=Object(d.a)(["\n  display: flex;\n  height: ",";\n  margin: ",";\n  flex-direction: column;\n  color: ",";\n  background: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border-top: ",";\n  opacity: 1;\n  transition: all 0.2s ease;\n  text-align: ",";\n"])),(function(t){return t.height}),(function(t){return t.margin}),(function(t){return t.color||"#4e4e51"}),(function(t){return t.background||"#fff"}),(function(t){return t.padding||"10px 17px"}),(function(t){return t.borderRadius||"8px"}),(function(t){return t.border||"1px solid #E6E9ED"}),(function(t){return t.borderTop}),(function(t){return t.textAlign})),O=Object(b.default)(m)(r||(r=Object(d.a)(["\n    display: grid;\n    grid-template-columns: 24% 40% 11% 10% 15%;\n    border: 0.5px solid #e3e4e8 !important;\n    margin: 1.5rem 2rem 2rem 2rem;\n    padding: 0 !important;\n"]))),x=b.default.div(s||(s=Object(d.a)(["\n    border: 0.5px solid #E6E9ED;\n    height: 2rem;\n    text-align: center;\n    padding: 3px;\n"]))),y=b.default.div(u||(u=Object(d.a)(["\n    padding: 12px;\n    border: 0.5px solid #E6E9ED;\n    height: 3rem;\n    text-align: center;\n    font-weight: 550;\n"]))),v=b.default.div(o||(o=Object(d.a)(["\n    margin: 2rem 2rem 0 2rem;\n    border-bottom: 1px solid #e3e4e8;\n    font-size: 1.2rem;\n"]))),E=b.default.p(i||(i=Object(d.a)(["\ntext-align: center;\n"])));e.default=function(){var t=Object(l.c)((function(t){return t.auth.user})),e=Object(l.c)((function(t){return t.student.studentCourse})),n=Object(l.b)();return Object(p.useEffect)((function(){n(Object(j.k)(null===t||void 0===t?void 0:t.userId))}),[n,t]),Object(g.jsx)(h,{children:null===e||void 0===e?void 0:e.map((function(t,e){var n;return Object(g.jsxs)("div",{margin:"2rem",children:[Object(g.jsxs)(v,{children:["Academic year ",t.year]}),Object(g.jsxs)(O,{children:[Object(g.jsx)(y,{children:"Code"}),Object(g.jsx)(y,{children:"Name"}),Object(g.jsx)(y,{children:"Credit"}),Object(g.jsx)(y,{children:"grade"}),Object(g.jsx)(y,{children:"CrPts"}),null===t||void 0===t||null===(n=t.courses)||void 0===n?void 0:n.map((function(e,n){var a,c;return Object(g.jsx)(f.a.Fragment,{children:e.studentscourses.academicYear===t.year?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(x,{children:e.Course.code}),Object(g.jsx)(x,{children:e.Course.name}),Object(g.jsx)(x,{children:e.Course.credit}),Object(g.jsx)(x,{children:null===(a=e.studentscourses)||void 0===a?void 0:a.grade}),Object(g.jsx)(x,{children:null===(c=e.studentscourses)||void 0===c?void 0:c.CrPts})," "]}):null},n)}))]}),Object(g.jsxs)(E,{children:["AVERAGE: ",t.gpa," / OVERALL AVERAGE: ",t.gpa,"/ STATUS : Successful / TOTAL : ",t.totalcredit]})]},e)}))})}}}]);
//# sourceMappingURL=23.8862794d.chunk.js.map