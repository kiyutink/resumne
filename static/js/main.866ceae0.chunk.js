(this.webpackJsonpresumne=this.webpackJsonpresumne||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"name":"Firtname Lastname","address":"Address","email":"email@email.email","phone":"555-555-555","summary":"Summary Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem vitae labore ratione dolore. Aperiam nemo consectetur error cum aliquam beatae, quaerat, commodi rem quas voluptate cupiditate porro explicabo laudantium eos. Impedit nulla atque adipisci labore neque minus explicabo ducimus, maiores rerum! Sapiente mollitia iste nemo officia corrupti assumenda eligendi.","experience":[{"companyName":"Company name","companyLocation":"Company location","companyDescription":"Company description","dates":"Start date - End date","position":"Position","description":"Description","id":"1"}],"education":[{"id":"1","otherInfo":"Received qualifications, Field, Year finished","schoolName":"School name"}],"other":"Any other info that might be relevant"}')},27:function(e,n,c){},31:function(e,n,c){},32:function(e,n,c){},33:function(e,n,c){},34:function(e,n,c){},38:function(e,n,c){},39:function(e,n,c){},40:function(e,n,c){},41:function(e,n,c){},42:function(e,n,c){},43:function(e,n,c){},44:function(e,n,c){"use strict";c.r(n);var a=c(1),t=c(0),s=c(15),i=c.n(s),o=(c(27),c(28),c(3)),r=c(18),m=(c(31),function(e){var n=e.children;return Object(a.jsx)("div",{className:"page",children:n})}),l=(c(32),c(33),c(6)),d=c(10),j=(c(34),c(9)),u=c.n(j),p=c(19),b=c.n(p),x=function(e){var n=Object(o.e)(e),c=Object(d.a)(n,1)[0];return Object(a.jsx)(b.a,Object(l.a)(Object(l.a)(Object(l.a)({},c),e),{},{inputClassName:u()("input",e.className)}))},O=(c(38),c(21)),h=function(e){var n=Object(o.e)(e),c=Object(d.a)(n,1)[0];return Object(a.jsx)(O.a,Object(l.a)(Object(l.a)(Object(l.a)({},c),e),{},{className:u()("textarea",e.className)}))},_=function(e){var n=e.name,c=e.onRemove;return Object(a.jsxs)("div",{className:"experience-entry",children:[Object(a.jsx)("button",{className:"experience-entry__remove-button",onClick:c,children:Object(a.jsx)("i",{className:"far fa-trash-alt"})}),Object(a.jsxs)("div",{className:"experience-entry__company-name-and-location",children:[Object(a.jsx)(x,{className:"experience-entry__company-name",name:"".concat(n,".companyName")}),Object(a.jsx)(x,{className:"experience-entry__company-location",name:"".concat(n,".companyLocation")})]}),Object(a.jsx)(x,{className:"experience-entry__company-description",name:"".concat(n,".companyDescription")}),Object(a.jsxs)("div",{className:"experience-entry__position-and-dates",children:[Object(a.jsx)(x,{className:"experience-entry__position",name:"".concat(n,".position")}),Object(a.jsx)(x,{className:"experience-entry__dates",name:"".concat(n,".dates")})]}),Object(a.jsx)(h,{className:"experience-entry__role-description",name:"".concat(n,".description")})]})},f=c(46),N=function(){var e="experience";return Object(a.jsxs)("div",{className:"experience-section",children:[Object(a.jsx)("div",{className:"experience-section__heading",children:"Experience"}),Object(a.jsx)("div",{className:"experience-section__list",children:Object(a.jsx)(o.a,{name:e,children:function(n){var c=n.form,s=n.push,i=n.remove;return Object(a.jsxs)(t.Fragment,{children:[c.values[e].map((function(n,c){return Object(a.jsx)(_,{name:"".concat(e,"[").concat(c,"]"),onRemove:function(){i(c)}},n.id)})),Object(a.jsx)("div",{className:"experience-section__add-button-container",children:Object(a.jsxs)("button",{type:"button",className:"experience-section__add-button",onClick:function(){s({companyName:"Company name",companyLocation:"Company location",companyDescription:"Company description",position:"Position",dates:"start date - end date",description:"Role description",id:Object(f.a)()})},children:[Object(a.jsx)("i",{className:"fa fa-plus"})," Add"]})})]})}})})]})},v=(c(39),function(){return Object(a.jsxs)("div",{className:"personal-section",children:[Object(a.jsx)("div",{className:"personal-section__row",children:Object(a.jsx)(x,{name:"name",className:"personal-section__name"})}),Object(a.jsx)("div",{className:"personal-section__row",children:Object(a.jsx)(x,{name:"address",className:"personal-section__address"})}),Object(a.jsxs)("div",{className:"personal-section__row",children:[Object(a.jsx)(x,{name:"phone",className:"personal-section__phone-and-email"}),Object(a.jsx)("b",{className:"personal-section__separator",children:"\xb7"}),Object(a.jsx)(x,{name:"email",className:"personal-section__email"})]})]})}),y=(c(40),function(){return Object(a.jsxs)("div",{className:"summary-section",children:[Object(a.jsx)("div",{className:"summary-section__heading",children:"Summary"}),Object(a.jsx)(h,{name:"summary",className:"summary-section__textarea"})]})}),C=(c(41),c(42),function(e){var n=e.name,c=e.onRemove;return Object(a.jsxs)("div",{className:"education-entry",children:[Object(a.jsx)("button",{type:"button",className:"education-entry__remove-button",onClick:c,children:Object(a.jsx)("i",{className:"far fa-trash-alt"})}),Object(a.jsx)(x,{className:"education-entry__school-name",name:"".concat(n,".schoolName")}),","," ",Object(a.jsx)(x,{className:"eduction-entry__other-info",name:"".concat(n,".otherInfo")})]})}),g=function(){var e="education";return Object(a.jsxs)("div",{className:"education-section",children:[Object(a.jsx)("div",{className:"education-section__heading",children:"Education"}),Object(a.jsx)(o.a,{name:"education",children:function(n){var c=n.form,s=n.push,i=n.remove;return Object(a.jsxs)(t.Fragment,{children:[c.values[e].map((function(n,c){return Object(a.jsx)(C,{name:"".concat(e,"[").concat(c,"]"),onRemove:function(){i(c)}},n.id)})),Object(a.jsx)("div",{className:"education-section__add-button-container",children:Object(a.jsxs)("button",{type:"button",className:"education-section__add-button",onClick:function(){s({id:Object(f.a)(),otherInfo:"Received qualifications, Field, Year finished",schoolName:"School name"})},children:[Object(a.jsx)("i",{className:"fa fa-plus"})," Add"]})})]})}})]})},S=c(20),q=(c(43),function(){return Object(a.jsxs)("div",{className:"other-section",children:[Object(a.jsx)("div",{className:"other-section__heading",children:"Other"}),Object(a.jsx)(h,{name:"other",className:"other-section__text"})]})}),R=function(){return Object(a.jsx)(o.c,{onSubmit:function(){},initialValues:S,children:Object(a.jsx)(o.b,{children:Object(a.jsxs)(m,{children:[Object(a.jsx)(r.a,{name:"cvState"}),Object(a.jsx)(v,{}),Object(a.jsx)(y,{}),Object(a.jsx)(N,{}),Object(a.jsx)(g,{}),Object(a.jsx)(q,{})]})})})};i.a.render(Object(a.jsx)(R,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.866ceae0.chunk.js.map