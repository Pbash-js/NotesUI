(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(5),r=n.n(o),a=n(2),l=n(4),i=n(3),s=(n(11),n(0)),u=function(){var e=Object(c.useState)({title:"Untitled Note",text:"Note here"}),t=Object(i.a)(e,2),n=t[0],o=t[1],r=function(e){o((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(a.a)({},e.target.name,e.target.value))}))};return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{className:"noteTitle",type:"text",name:"title",onChange:function(e){return r(e)},value:n.title,placeholder:"You left me Empty!"}),Object(s.jsx)("textarea",{className:"noteText",name:"text",onChange:function(e){return r(e)},value:n.text})]})},d=function(){document.addEventListener("resize",(function(){a()}));var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],a=function(){var e=document.querySelectorAll(".gridNote");document.querySelectorAll(".note").forEach((function(t,n){0!==n&&(t.style.top="".concat(e[n].getBoundingClientRect().y,"px"),t.style.left="".concat(e[n].getBoundingClientRect().x,"px"))}))},l=function(e,t){var n=document.createElement("div");r.a.render(Object(s.jsx)(u,{}),n),n.classList.add("note",t),n.style.top="".concat(e.target.getBoundingClientRect().top-100,"px"),n.style.left="".concat(e.target.getBoundingClientRect().left-150,"px"),document.querySelector(".App").prepend(n);var c=document.createElement("div");c.classList.add("gridNote"),document.querySelector(".grid").prepend(c),n.style.top="".concat(c.getBoundingClientRect().y,"px"),n.style.left="".concat(c.getBoundingClientRect().x,"px"),n.style.transform="scale(".concat(1,")"),n.style.opacity="".concat(1),a()};return Object(s.jsxs)("div",{className:"dock",children:[Object(s.jsx)("div",{className:"newButton",onClick:function(){return function(){var e=document.querySelectorAll(".newNoteColor"),t=document.querySelector(".colorContainer");n?(t.style.marginTop=null,t.style.opacity=0,e.forEach((function(t,n){setTimeout((function(){for(var t=n;t<e.length;t++)e[t].style.marginTop=null}),500*n)})),o(!n)):(t.style.opacity=null,t.style.marginTop="3rem",e.forEach((function(t,n){setTimeout((function(){for(var t=n;t<e.length;t++)e[t].style.marginTop="".concat(3*n,"rem")}),500*n)})),o(!n))}()},children:Object(s.jsx)("i",{className:"fas fa-plus"})}),Object(s.jsxs)("div",{className:"colorContainer",children:[Object(s.jsx)("div",{className:"newNoteColor redNote",onClick:function(e){return l(e,"redNote")}}),Object(s.jsx)("div",{className:"newNoteColor blueNote",onClick:function(e){return l(e,"blueNote")}}),Object(s.jsx)("div",{className:"newNoteColor greenNote",onClick:function(e){return l(e,"greenNote")}}),Object(s.jsx)("div",{className:"newNoteColor violetNote",onClick:function(e){return l(e,"violetNote")}}),Object(s.jsx)("div",{className:"newNoteColor orangeNote",onClick:function(e){return l(e,"orangeNote")}})]})]})},j=function(){return Object(s.jsx)("div",{id:"grid",className:"grid"})},m=function(){var e=Object(c.useState)({search:""}),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("nav",{children:Object(s.jsx)("input",{className:"search",name:"search",value:n.search,placeholder:"Search",onChange:function(e){return function(e){o((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(a.a)({},e.target.name,e.target.value))}))}(e)}})}),Object(s.jsx)(d,{}),Object(s.jsx)("div",{className:"title",children:"Notes"}),Object(s.jsx)(j,{})]})};r.a.render(Object(s.jsx)(m,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.46e8894a.chunk.js.map