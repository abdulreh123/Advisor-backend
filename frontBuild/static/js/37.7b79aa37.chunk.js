(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[37],{650:function(t,n,e){"use strict";e.d(n,"g",(function(){return s})),e.d(n,"h",(function(){return u})),e.d(n,"i",(function(){return i})),e.d(n,"l",(function(){return d})),e.d(n,"k",(function(){return p})),e.d(n,"j",(function(){return f})),e.d(n,"m",(function(){return b})),e.d(n,"b",(function(){return l})),e.d(n,"p",(function(){return j})),e.d(n,"o",(function(){return h})),e.d(n,"a",(function(){return m})),e.d(n,"n",(function(){return g})),e.d(n,"e",(function(){return O})),e.d(n,"d",(function(){return y})),e.d(n,"c",(function(){return x})),e.d(n,"f",(function(){return v}));var a=e(647),c=e(4),r=e(645),o=e.n(r),s=function(){return function(t){o.a.get("/api/student").then((function(n){t({type:c.M,payload:n.data.data})})).catch((function(n){t(Object(a.b)(n.response.data.message,n.response.status))}))}},u=function(t){return function(n){o.a.get("/api/chairman/statistics/".concat(t)).then((function(t){n({type:c.A,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},i=function(t){return function(n){o.a.get("/api/student/".concat(t)).then((function(t){n({type:c.L,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},d=function(t){return function(n){o.a.get("/api/student/time-table/".concat(t,"?year=2021-2022 - Fall")).then((function(t){n({type:c.O,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},p=function(t,n){return function(e){o.a.get("/api/student/stats/".concat(t,"/").concat(n)).then((function(t){e({type:c.N,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},f=function(t){return function(n){o.a.get("/api/student/advisor/".concat(t)).then((function(t){n({type:c.R,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},b=function(t){return function(n){o.a.get("/api/student/transcript/".concat(t)).then((function(t){n({type:c.P,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},l=function(t){return function(n){o.a.post("/api/student/create",t).then((function(t){n({type:c.k,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},j=function(t,n){return function(e){o.a.put("/api/student/".concat(n),t).then((function(t){e({type:c.k,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},h=function(t,n,e){return function(r){o.a.put("/api/student/".concat(n,"/").concat(e),t).then((function(t){r({type:c.k,payload:t.data.data}),r(Object(a.b)(t.data.message,t.status))})).catch((function(t){r(Object(a.b)(t.response.data.message,t.response.status))}))}},m=function(t,n){return function(e){o.a.put("/api/student/add/remove/".concat(t),n).then((function(t){e({type:c.k,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},g=function(t){return function(n){o.a.get("http://app.neu.edu.tr:7003/predict/%7Bvalue%7D?name=[".concat(t,"]")).then((function(t){n({type:c.J,payload:t.data})}))}},O=function(t,n){return function(e){o.a.get("/api/student/automate/".concat(t,"?year=").concat(n)).then((function(t){e({type:c.x,payload:t.data.data})})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},y=function(t){return function(n){o.a.get("/api/student/get-approve/".concat(t)).then((function(t){n({type:c.m,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}},x=function(t,n){return function(e){o.a.put("/api/student//approve/".concat(t,"/").concat(n)).then((function(t){e({type:c.n,payload:t.data.data}),e(Object(a.b)(t.data.message,t.status))})).catch((function(t){e(Object(a.b)(t.response.data.message,t.response.status))}))}},v=function(t){return function(n){o.a.delete("/api/student/".concat(t)).then((function(t){n({type:c.k,payload:t.data.data})})).catch((function(t){n(Object(a.b)(t.response.data.message,t.response.status))}))}}},756:function(t,n,e){"use strict";e.r(n);var a,c,r,o,s,u,i,d=e(653),p=e(1),f=e.n(p),b=e(175),l=e(122),j=e(650),h=e(652),m=e(18),g=h.default.div(a||(a=Object(d.a)(["\n"]))),O=h.default.div(c||(c=Object(d.a)(["\n  display: flex;\n  height: ",";\n  margin: ",";\n  flex-direction: column;\n  color: ",";\n  background: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border-top: ",";\n  opacity: 1;\n  transition: all 0.2s ease;\n  text-align: ",";\n"])),(function(t){return t.height}),(function(t){return t.margin}),(function(t){return t.color||"#4e4e51"}),(function(t){return t.background||"#fff"}),(function(t){return t.padding||"10px 17px"}),(function(t){return t.borderRadius||"8px"}),(function(t){return t.border||"1px solid #E6E9ED"}),(function(t){return t.borderTop}),(function(t){return t.textAlign})),y=Object(h.default)(O)(r||(r=Object(d.a)(["\n    display: grid;\n    grid-template-columns: 24% 40% 11% 10% 15%;\n    border: 0.5px solid #e3e4e8 !important;\n    margin: 1.5rem 2rem 2rem 2rem;\n    padding: 0 !important;\n"]))),x=h.default.div(o||(o=Object(d.a)(["\n    border: 0.5px solid #E6E9ED;\n    height: 2rem;\n    text-align: center;\n    padding: 3px;\n"]))),v=h.default.div(s||(s=Object(d.a)(["\n    padding: 12px;\n    border: 0.5px solid #E6E9ED;\n    height: 3rem;\n    text-align: center;\n    font-weight: 550;\n"]))),E=h.default.div(u||(u=Object(d.a)(["\n    margin: 2rem 2rem 0 2rem;\n    border-bottom: 1px solid #e3e4e8;\n    font-size: 1.2rem;\n"]))),k=h.default.p(i||(i=Object(d.a)(["\ntext-align: center;\n"])));n.default=function(){var t=Object(b.c)((function(t){return t.auth.user})),n=Object(b.c)((function(t){return t.student.studentCourse})),e=Object(b.b)();return Object(p.useEffect)((function(){e(Object(j.m)(null===t||void 0===t?void 0:t.userId))}),[e,t]),Object(m.jsx)(g,{children:null===n||void 0===n?void 0:n.map((function(t,n){var e;return Object(m.jsxs)("div",{margin:"2rem",children:[Object(m.jsxs)(E,{children:["Academic year ",t.year]}),Object(m.jsxs)(y,{children:[Object(m.jsx)(v,{children:"Code"}),Object(m.jsx)(v,{children:"Name"}),Object(m.jsx)(v,{children:"Credit"}),Object(m.jsx)(v,{children:"grade"}),Object(m.jsx)(v,{children:"CrPts"}),null===t||void 0===t||null===(e=t.courses)||void 0===e?void 0:e.map((function(n,e){var a,c;return Object(m.jsx)(f.a.Fragment,{children:n.studentscourses.academicYear===t.year?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{children:n.Course.code}),Object(m.jsx)(x,{children:Object(m.jsx)(l.b,{to:"/courseDashboard/".concat(null===n||void 0===n?void 0:n.id),children:n.Course.name})}),Object(m.jsx)(x,{children:n.Course.credit}),Object(m.jsx)(x,{children:null===(a=n.studentscourses)||void 0===a?void 0:a.grade}),Object(m.jsx)(x,{children:null===(c=n.studentscourses)||void 0===c?void 0:c.CrPts})," "]}):null},e)}))]}),Object(m.jsxs)(k,{children:["GPA: ",Number.parseFloat(t.gpa).toPrecision(3)," / CGPA: ",Number.parseFloat(t.cgpa).toPrecision(3),"/ STATUS : ",t.status," / TOTAL CREDIT: ",t.totalcredit]})]},n)}))})}}}]);
//# sourceMappingURL=37.7b79aa37.chunk.js.map