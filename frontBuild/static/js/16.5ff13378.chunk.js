(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{652:function(t,e,o){"use strict";o.d(e,"a",(function(){return i})),o.d(e,"b",(function(){return c}));var a=o(646),r=o(5),n=o(644),s=o.n(n),i=function(){return function(t){s.a.get("/api/advisor").then((function(e){t({type:r.l,payload:e.data.data})})).catch((function(e){t(Object(a.a)(e.response.data.message,e.response.status))}))}},c=function(t){return function(e){s.a.get("/api/advisor/".concat(t)).then((function(t){e({type:r.a,payload:t.data.data})})).catch((function(t){e(Object(a.a)(t.response.data.message,t.response.status))}))}}},653:function(t,e,o){"use strict";var a=o(2),r=o(122),n=(o(1),o(654)),s=o(655),i=o(22),c=["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],d=function(t){var e=t.borderColor,o=t.backgroundColor,d=t.pointHoverBackgroundColor,l=t.dataPoints,u=t.label,b=t.pointed,p=Object(r.a)(t,c),g=d||("transparent"!==o?o:e),j=[{data:l,borderColor:Object(n.getColor)(e),backgroundColor:Object(n.getColor)(o),pointBackgroundColor:Object(n.getColor)(g),pointHoverBackgroundColor:Object(n.getColor)(g),label:u}],f={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,l)-5,max:Math.max.apply(Math,l)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},O={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},C=function(){var t=b?f:O;return Object.assign({},t,{maintainAspectRatio:!1,legend:{display:!1}})}(),v=Object(n.deepObjectsMerge)(j,p.datasets||{}),h=Object(n.deepObjectsMerge)(C,p.options||{});return Object(i.jsx)(s.b,Object(a.a)(Object(a.a)({},p),{},{datasets:v,options:h,labels:u}))};d.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},e.a=d},660:function(t,e,o){"use strict";var a=o(2),r=o(122),n=(o(1),o(654)),s=o(655),i=o(22),c=["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],d=function(t){var e=t.backgroundColor,o=t.pointHoverBackgroundColor,d=t.dataPoints,l=t.label,u=(t.pointed,Object(r.a)(t,c)),b=[{data:d,backgroundColor:Object(n.getColor)(e),pointHoverBackgroundColor:Object(n.getColor)(o),label:l,barPercentage:.5,categoryPercentage:1}],p={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(i.jsx)(s.a,Object(a.a)(Object(a.a)({},u),{},{datasets:b,options:p,labels:l}))};d.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"}},759:function(t,e,o){"use strict";o.r(e);var a=o(1),r=o(642),n=(o(653),o(660),o(652)),s=o(173),i=o(22);e.default=function(){var t,e=Object(s.c)((function(t){return t.auth.user})),o=Object(s.c)((function(t){return t.advisor.advisor})),c=Object(s.b)();return Object(a.useEffect)((function(){c(Object(n.b)(null===e||void 0===e?void 0:e.userId))}),[c,e]),Object(i.jsx)(r.N,{children:null===o||void 0===o||null===(t=o.Group)||void 0===t?void 0:t.map((function(t){return Object(i.jsx)(r.j,{sm:"6",lg:"3",children:Object(i.jsx)(r.Z,{color:"gradient-primary",header:t.name,text:"students:12"})})}))})}}}]);
//# sourceMappingURL=16.5ff13378.chunk.js.map