(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{650:function(e,a,n){"use strict";n.d(a,"g",(function(){return i})),n.d(a,"h",(function(){return s})),n.d(a,"i",(function(){return r})),n.d(a,"l",(function(){return u})),n.d(a,"k",(function(){return m})),n.d(a,"j",(function(){return l})),n.d(a,"m",(function(){return p})),n.d(a,"b",(function(){return b})),n.d(a,"p",(function(){return j})),n.d(a,"o",(function(){return f})),n.d(a,"a",(function(){return h})),n.d(a,"n",(function(){return O})),n.d(a,"e",(function(){return y})),n.d(a,"d",(function(){return g})),n.d(a,"c",(function(){return x})),n.d(a,"f",(function(){return S}));var t=n(647),c=n(4),o=n(646),d=n.n(o),i=function(){return function(e){d.a.get("/api/student").then((function(a){e({type:c.M,payload:a.data.data})})).catch((function(a){e(Object(t.b)(a.response.data.message,a.response.status))}))}},s=function(e){return function(a){d.a.get("/api/chairman/statistics/".concat(e)).then((function(e){a({type:c.A,payload:e.data.data})})).catch((function(e){a(Object(t.b)(e.response.data.message,e.response.status))}))}},r=function(e){return function(a){d.a.get("/api/student/".concat(e)).then((function(e){a({type:c.L,payload:e.data.data})})).catch((function(e){a(Object(t.b)(e.response.data.message,e.response.status))}))}},u=function(e){return function(a){d.a.get("/api/student/time-table/".concat(e,"?year=2021-2022 - Fall")).then((function(e){a({type:c.O,payload:e.data.data})})).catch((function(e){a(Object(t.b)(e.response.data.message,e.response.status))}))}},m=function(e,a){return function(n){d.a.get("/api/student/stats/".concat(e,"/").concat(a)).then((function(e){n({type:c.N,payload:e.data.data})})).catch((function(e){n(Object(t.b)(e.response.data.message,e.response.status))}))}},l=function(e){return function(a){d.a.get("/api/student/advisor/".concat(e)).then((function(e){a({type:c.R,payload:e.data.data})})).catch((function(e){a(Object(t.b)(e.response.data.message,e.response.status))}))}},p=function(e){return function(a){d.a.get("/api/student/transcript/".concat(e)).then((function(e){a({type:c.P,payload:e.data.data})})).catch((function(e){a(Object(t.b)(e.response.data.message,e.response.status))}))}},b=function(e){return function(a){d.a.post("/api/student/create",e).then((function(e){a({type:c.k,payload:e.data.data})})).catch((function(e){a(Object(t.b)(e.response.data.message,e.response.status))}))}},j=function(e,a){return function(n){d.a.put("/api/student/".concat(a),e).then((function(e){n({type:c.k,payload:e.data.data}),n(Object(t.b)(e.data.message,e.status))})).catch((function(e){n(Object(t.b)(e.response.data.message,e.response.status))}))}},f=function(e,a,n){return function(o){d.a.put("/api/student/".concat(a,"/").concat(n),e).then((function(e){o({type:c.k,payload:e.data.data}),o(Object(t.b)(e.data.message,e.status))})).catch((function(e){o(Object(t.b)(e.response.data.message,e.response.status))}))}},h=function(e,a){return function(n){d.a.put("/api/student/add/remove/".concat(e),a).then((function(e){n({type:c.k,payload:e.data.data}),n(Object(t.b)(e.data.message,e.status))})).catch((function(e){n(Object(t.b)(e.response.data.message,e.response.status))}))}},O=function(e){return function(a){d.a.get("http://app.neu.edu.tr:7003/predict/%7Bvalue%7D?name=[".concat(e,"]")).then((function(e){a({type:c.J,payload:e.data})}))}},y=function(e,a){return function(n){d.a.get("/api/student/automate/".concat(e,"?year=").concat(a)).then((function(e){n({type:c.x,payload:e.data.data})})).catch((function(e){n(Object(t.b)(e.response.data.message,e.response.status))}))}},g=function(e){return function(a){d.a.get("/api/student/get-approve/".concat(e)).then((function(e){a({type:c.m,payload:e.data.data})})).catch((function(e){a(Object(t.b)(e.response.data.message,e.response.status))}))}},x=function(e,a){return function(n){d.a.put("/api/student//approve/".concat(e,"/").concat(a)).then((function(e){n({type:c.n,payload:e.data.data}),n(Object(t.b)(e.data.message,e.status))})).catch((function(e){n(Object(t.b)(e.response.data.message,e.response.status))}))}},S=function(e){return function(a){d.a.delete("/api/student/".concat(e)).then((function(e){a({type:c.k,payload:e.data.data})})).catch((function(e){a(Object(t.b)(e.response.data.message,e.response.status))}))}}},651:function(e,a,n){"use strict";n.d(a,"c",(function(){return i})),n.d(a,"e",(function(){return s})),n.d(a,"a",(function(){return r})),n.d(a,"d",(function(){return u})),n.d(a,"f",(function(){return m})),n.d(a,"b",(function(){return l}));var t=n(647),c=n(4),o=n(646),d=n.n(o),i=function(){return function(e){d.a.get("/api/advisor").then((function(a){e({type:c.u,payload:a.data.data})})).catch((function(a){e(Object(t.b)(a.response.data.message,a.response.status))}))}},s=function(e){return function(a){d.a.get("/api/advisor/".concat(e)).then((function(e){a({type:c.a,payload:e.data.data})})).catch((function(e){a(Object(t.b)(e.response.data.message,e.response.status))}))}},r=function(e){return function(a){d.a.post("/api/advisor/create",e).then((function(e){a({type:c.a,payload:e.data.data}),a(Object(t.b)(e.data.message,e.status))})).catch((function(e){a(Object(t.b)(e.response.data.message,e.response.status))}))}},u=function(e){return function(a){d.a.get("/api/advisor/time-table/".concat(e,"?year=2021-2022 - Fall")).then((function(e){a({type:c.v,payload:e.data.data})})).catch((function(e){a(Object(t.b)(e.response.data.message,e.response.status))}))}},m=function(e,a){return function(n){d.a.put("/api/advisor/".concat(a),e).then((function(e){n({type:c.a,payload:e.data.data}),n(Object(t.b)(e.data.message,e.status))})).catch((function(e){n(Object(t.b)(e.response.data.message,e.response.status))}))}},l=function(e){return function(a){d.a.delete("/api/advisor/".concat(e)).then((function(e){a({type:c.a,payload:e.data.data})})).catch((function(e){a(Object(t.b)(e.response.data.message,e.response.status))}))}}},655:function(e,a,n){"use strict";n.d(a,"c",(function(){return d})),n.d(a,"d",(function(){return i})),n.d(a,"a",(function(){return s})),n.d(a,"e",(function(){return r})),n.d(a,"b",(function(){return u}));var t=n(4),c=n(646),o=n.n(c),d=function(){return function(e){o.a.get("/api/department").then((function(a){e({type:t.C,payload:a.data.data})}))}},i=function(e){return function(a){o.a.get("/api/department/".concat(e)).then((function(e){a({type:t.f,payload:e.data.data})}))}},s=function(e){return function(a){o.a.post("/api/department/create",e).then((function(e){a({type:t.f,payload:e.data.data})}))}},r=function(e,a){return function(n){o.a.put("/api/department/".concat(a),e).then((function(e){n({type:t.f,payload:e.data.data})}))}},u=function(e){return function(a){o.a.delete("/api/department/".concat(e)).then((function(e){a({type:t.f,payload:e.data.data})}))}}},758:function(e,a,n){"use strict";n.r(a),n.d(a,"nationalities",(function(){return b}));var t=n(176),c=n(2),o=n(648),d=n(1),i=n(649),s=n(175),r=n(651),u=n(655),m=n(645),l=n(650),p=n(18),b=[{name:"Turkey",code:"TR"},{name:"Turkish Republic of Northern Cyprus",code:"TRNC"},{name:"Afghanistan",code:"AF"},{name:"Aland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}];a.default=function(){var e=Object(d.useState)({}),a=Object(o.a)(e,2),n=a[0],j=a[1],f=Object(d.useState)({}),h=Object(o.a)(f,2),O=h[0],y=h[1],g=Object(s.c)((function(e){return e.advisor.advisors})),x=Object(s.c)((function(e){return e.department.departments})),S=Object(s.b)(),M=function(e){var a=e.target,o=a.value,d=a.name;j(Object(c.a)(Object(c.a)({},n),{},Object(t.a)({},d,parseInt(o)))),j(Object(c.a)(Object(c.a)({},n),{},Object(t.a)({},d,o)))},C=function(e){var a=e.target,n=a.value,o=a.name;y(Object(c.a)(Object(c.a)({},O),{},Object(t.a)({},o,n)))};return Object(d.useEffect)((function(){S(Object(r.c)()),S(Object(u.c)())}),[S]),Object(p.jsx)(m.j,{xs:"12",md:"15",children:Object(p.jsxs)(m.e,{children:[Object(p.jsx)(m.i,{children:"Register new student"}),Object(p.jsx)(m.f,{children:Object(p.jsxs)(m.s,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",id:"resetStudent",children:[Object(p.jsxs)(m.t,{row:!0,children:[Object(p.jsx)(m.j,{md:"3",children:Object(p.jsx)(m.E,{htmlFor:"number-input",children:"Student ID"})}),Object(p.jsx)(m.j,{xs:"12",md:"9",children:Object(p.jsx)(m.z,{id:"number-input",type:"number",name:"userId",onChange:M})})]}),Object(p.jsxs)(m.t,{row:!0,children:[Object(p.jsx)(m.j,{md:"3",children:Object(p.jsx)(m.E,{htmlFor:"number-input",children:"Name"})}),Object(p.jsx)(m.j,{xs:"12",md:"9",children:Object(p.jsx)(m.z,{id:"number-input",type:"text",name:"name",onChange:M})})]}),Object(p.jsxs)(m.t,{row:!0,children:[Object(p.jsx)(m.j,{md:"3",children:Object(p.jsx)(m.E,{htmlFor:"number-input",children:"Surname"})}),Object(p.jsx)(m.j,{xs:"12",md:"9",children:Object(p.jsx)(m.z,{id:"number-input",type:"text",name:"surname",onChange:M})})]}),Object(p.jsxs)(m.t,{row:!0,children:[Object(p.jsx)(m.j,{md:"3",children:Object(p.jsx)(m.E,{htmlFor:"number-input",children:"Passport Number"})}),Object(p.jsx)(m.j,{xs:"12",md:"9",children:Object(p.jsx)(m.z,{id:"number-input",type:"text",name:"passportNumber",onChange:M})})]}),Object(p.jsxs)(m.t,{row:!0,children:[Object(p.jsx)(m.j,{md:"3",children:Object(p.jsx)(m.E,{htmlFor:"number-input",children:"Nationality"})}),Object(p.jsx)(m.j,{xs:"12",md:"9",children:Object(p.jsxs)(m.R,{custom:!0,name:"nationality",id:"select",onChange:M,children:[Object(p.jsx)("option",{value:"0",children:"Please select"}),null===b||void 0===b?void 0:b.map((function(e){return Object(p.jsx)("option",{value:e.name,children:e.name})}))]})})]}),Object(p.jsxs)(m.t,{row:!0,children:[Object(p.jsx)(m.j,{md:"3",children:Object(p.jsx)(m.E,{htmlFor:"number-input",children:"Username"})}),Object(p.jsx)(m.j,{xs:"12",md:"9",children:Object(p.jsx)(m.z,{id:"number-input",type:"text",name:"userName",onChange:C})})]}),Object(p.jsxs)(m.t,{row:!0,children:[Object(p.jsx)(m.j,{md:"3",children:Object(p.jsx)(m.E,{htmlFor:"password-input",children:"Password"})}),Object(p.jsx)(m.j,{xs:"12",md:"9",children:Object(p.jsx)(m.z,{type:"password",id:"password-input",name:"password",onChange:C})})]}),Object(p.jsxs)(m.t,{row:!0,children:[Object(p.jsx)(m.j,{md:"3",children:Object(p.jsx)(m.E,{htmlFor:"date-input",children:"Date of birth"})}),Object(p.jsx)(m.j,{xs:"12",md:"9",children:Object(p.jsx)(m.z,{type:"date",id:"date-input",name:"dob"})})]}),Object(p.jsxs)(m.t,{row:!0,children:[Object(p.jsxs)(m.j,{md:"3",children:["advisor",Object(p.jsx)(m.E,{htmlFor:"select",children:"Select"})]}),Object(p.jsx)(m.j,{xs:"12",md:"9",children:Object(p.jsxs)(m.R,{custom:!0,name:"advisorId",id:"select",onChange:M,children:[Object(p.jsx)("option",{value:"0",children:"Please select"}),null===g||void 0===g?void 0:g.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name+" "+e.surname})}))]})})]}),Object(p.jsxs)(m.t,{row:!0,children:[Object(p.jsx)(m.j,{md:"3",children:"Department"}),Object(p.jsx)(m.j,{xs:"12",md:"9",children:Object(p.jsxs)(m.R,{custom:!0,name:"departmentId",id:"select",onChange:M,children:[Object(p.jsx)("option",{value:"0",children:"Please select"}),null===x||void 0===x?void 0:x.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name})}))]})})]})]})}),Object(p.jsxs)(m.g,{children:[Object(p.jsxs)(m.d,{type:"submit",size:"sm",color:"primary",children:[Object(p.jsx)(i.a,{name:"cil-scrubber",onClick:function(e){var a={userId:n.userId,name:n.name,surname:n.surname,passportNumber:n.passportNumber,nationality:n.nationality,advisorId:n.advisorId,departmentId:n.departmentId,user:O};e.preventDefault(),S(Object(l.b)(Object(c.a)({},a))),document.getElementById("resetStudent").reset()}})," Submit"]}),Object(p.jsxs)(m.d,{type:"reset",size:"sm",color:"danger",children:[Object(p.jsx)(i.a,{name:"cil-ban"})," Reset"]})]})]})})}}}]);
//# sourceMappingURL=14.42a23a17.chunk.js.map