(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[7],{652:function(e,t,r){"use strict";var o=r(2),a=r(122),n=(r(1),r(653)),s=r(654),c=r(22),i=["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],l=function(e){var t=e.borderColor,r=e.backgroundColor,l=e.pointHoverBackgroundColor,d=e.dataPoints,b=e.label,u=e.pointed,p=Object(a.a)(e,i),j=l||("transparent"!==r?r:t),g=[{data:d,borderColor:Object(n.getColor)(t),backgroundColor:Object(n.getColor)(r),pointBackgroundColor:Object(n.getColor)(j),pointHoverBackgroundColor:Object(n.getColor)(j),label:b}],O={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,d)-5,max:Math.max.apply(Math,d)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},C={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},k=function(){var e=u?O:C;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),x=Object(n.deepObjectsMerge)(g,p.datasets||{}),f=Object(n.deepObjectsMerge)(k,p.options||{});return Object(c.jsx)(s.b,Object(o.a)(Object(o.a)({},p),{},{datasets:x,options:f,labels:b}))};l.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=l},660:function(e,t,r){"use strict";var o=r(2),a=r(122),n=(r(1),r(653)),s=r(654),c=r(22),i=["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],l=function(e){var t=e.backgroundColor,r=e.pointHoverBackgroundColor,l=e.dataPoints,d=e.label,b=(e.pointed,Object(a.a)(e,i)),u=[{data:l,backgroundColor:Object(n.getColor)(t),pointHoverBackgroundColor:Object(n.getColor)(r),label:d,barPercentage:.5,categoryPercentage:1}],p={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(c.jsx)(s.a,Object(o.a)(Object(o.a)({},b),{},{datasets:u,options:p,labels:d}))};l.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"}},674:function(e,t,r){"use strict";r.r(t);var o=r(1),a=r(642),n=r(173),s=r(647),c=(r(652),r(660),r(22));t.default=function(){var e=Object(n.c)((function(e){return e.auth.user})),t=Object(n.c)((function(e){return e.student.stats})),r=Object(n.b)();return Object(o.useEffect)((function(){r(Object(s.i)(e.Id,e.department.id))}),[r,e]),Object(c.jsxs)(a.O,{children:[Object(c.jsx)(a.k,{sm:"6",lg:"3",children:Object(c.jsx)(a.ab,{color:"gradient-primary",header:t.coursesTaken,text:"Courses Taken"})}),Object(c.jsx)(a.k,{sm:"6",lg:"3",children:Object(c.jsx)(a.ab,{color:"gradient-info",header:t.courses-t.coursesTaken,text:"Courses Left",backgroundColor:"red"})}),Object(c.jsx)(a.k,{sm:"6",lg:"3",children:Object(c.jsx)(a.ab,{color:"gradient-warning",header:t.creditTaken,text:"Crdits Taken"})}),Object(c.jsx)(a.k,{sm:"6",lg:"3",children:Object(c.jsx)(a.ab,{color:"gradient-danger",header:t.credit-t.creditTaken,text:"Credits left"})})]})}}}]);
//# sourceMappingURL=7.28ebb137.chunk.js.map