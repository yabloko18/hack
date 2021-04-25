(function(t){function e(e){for(var a,n,c=e[0],l=e[1],r=e[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);v&&v(e);while(d.length)d.shift()();return i.push.apply(i,r||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},n={app:0},o={app:0},i=[];function c(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b2b2432d"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(t){var e=[],s={about:1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=new Promise((function(e,s){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"3c51b92d"}[t]+".css",o=l.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var r=i[c],u=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){r=d[c],u=r.getAttribute("data-href");if(u===a||u===o)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[t],v.parentNode.removeChild(v),s(i)},v.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(v)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,s){a=o[t]=[e,s]}));e.push(a[2]=i);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(t);var d=new Error;r=function(e){u.onerror=u.onload=null,clearTimeout(v);var s=o[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,s[1](d)}o[t]=void 0}};var v=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var v=u;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0530":function(t,e,s){"use strict";s("4352")},1337:function(t,e,s){},"2f1d":function(t,e,s){"use strict";s("97db")},4352:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],i=(s("5c0b"),s("2877")),c={},l=Object(i["a"])(c,n,o,!1,null,null,null),r=l.exports,u=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-body"},[s("AppHeader"),s("main",{staticClass:"content"},[s("div",{staticClass:"full-screen"},[s("div",{staticClass:"container position-relative"},[s("div",{staticClass:"row position-relative justify-content-between"},[s("div",{staticClass:"col-12 col-lg-6"},[s("h1",{staticClass:"title"},[t._v("Экстренная психологическая помощь")]),s("div",{staticClass:"d-inline-flex flex-column"},[s("router-link",{staticClass:"button",attrs:{to:{name:"Search"}}},[t._v("Найти помощь")]),s("small",[t._v("Первые 10 минут бесплатно")])],1),t._m(0)]),t._m(1),t._m(2)])])]),s("SectionHelp"),s("SectionWork"),s("SectionAbout")],1),s("AppFooter")],1)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"full-screen__info d-none d-lg-block"},[s("p",{staticClass:"text-1"},[t._v(" Тебе необходима помощь психолога? WISDOM решит проблему быстро! ")]),s("p",{staticClass:"text-1"},[t._v(" Сделай один клик и получи целых 10 минут бесплатного общения с психологом без предварительной регистрации. ")]),s("p",{staticClass:"text-1"},[t._v(" WISDOM - один клик до помощи ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-lg-6 d-flex justify-content-center align-items-center"},[s("div",{staticClass:"image-container"},[s("img",{attrs:{src:"img/home/1.jpg",alt:""}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 bottom-arrow d-flex flex-column align-items-center justify-content-center"},[s("small",[t._v("Подробнее о сервисе")]),s("div",{staticClass:"arrow-down"},[s("span"),s("span")])])}],f=s("a4ce"),m=s("f657"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"psychology"},[s("div",{staticClass:"container"},[s("h2",[t._v("Как это работает?")]),s("div",{staticClass:"row psychology-row"},[s("div",{staticClass:"col-12 col-lg-4"},[s("div",{staticClass:"col-body d-flex"},[s("div",{staticClass:"col-2"},[s("span",{staticClass:"col-number color-red"},[t._v(" 01 ")])]),s("div",{staticClass:"col-10"},[s("h3",{staticClass:"color-blue"},[t._v(" Начало поиска ")]),s("p",{staticClass:"text-1"},[t._v(" В это время наш сервис ищет свободного психолога, а затем связывает вас с ним в нашем чате ")])])])]),s("div",{staticClass:"col-12 col-lg-4"},[s("div",{staticClass:"col-body d-flex"},[s("div",{staticClass:"col-2"},[s("span",{staticClass:"col-number color-red"},[t._v(" 02 ")])]),s("div",{staticClass:"col-10"},[s("h3",{staticClass:"color-blue"},[t._v(" Первое общение с психологом ")]),s("p",{staticClass:"text-1"},[t._v(" После соединения вас с психологом вы получаете бесплатную помощь в течении 10 минут. Психолог выявляет вашу проблему, даёт короткие советы ")])])])]),s("div",{staticClass:"col-12 col-lg-4"},[s("div",{staticClass:"col-body d-flex"},[s("div",{staticClass:"col-2"},[s("span",{staticClass:"col-number color-red"},[t._v(" 03 ")])]),s("div",{staticClass:"col-10"},[s("h3",{staticClass:"color-blue"},[t._v(" Продолжение общения с психологом ")]),s("p",{staticClass:"text-1"},[t._v(" После 10 минут бесплатной помощи вам будет предложенно оплатить продолжение сеанса. После этого вы сможете общаться с психологом по аудио связи ")])])])])])])])}],b={name:"SectionWork"},h=b,C=(s("2f1d"),Object(i["a"])(h,p,_,!1,null,"6bbbfa02",null)),g=C.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"help"},[s("div",{staticClass:"container"},[s("h2",[t._v("Мы поможем вам")]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-md-6 col-lg-3"},[s("div",{staticClass:"col-body"},[s("p",{staticClass:"text-1"},[t._v("Улучшить психо-эмоциональное состояние.")]),s("p",{staticClass:"text-1"},[t._v("Найти ресурсы для изменений в жизни")])])]),s("div",{staticClass:"col-12 col-md-6 col-lg-3"},[s("div",{staticClass:"col-body"},[s("p",{staticClass:"text-1"},[t._v("Наладить отношения с супругом, родителями, коллегами, друзьями. Устранить агрессию в отношениях, ссоры, манипуляции, моральное насилие")])])]),s("div",{staticClass:"col-12 col-md-6 col-lg-3"},[s("div",{staticClass:"col-body"},[s("p",{staticClass:"text-1"},[t._v("Снизить зависимость от партнёра в отношениях, избавиться от душащей ревности.")]),s("p",{staticClass:"text-1"},[t._v("Преодолеть кризис после развода")])])]),s("div",{staticClass:"col-12 col-md-6 col-lg-3"},[s("div",{staticClass:"col-body"},[s("p",{staticClass:"text-1"},[t._v("Сформировать с любовь к себе, избавиться от самокритики и чувства вины и «долга»")])])]),s("div",{staticClass:"col-12 col-md-6 col-lg-3"},[s("div",{staticClass:"col-body"},[s("p",{staticClass:"text-1"},[t._v("Сформировать здоровую самооценку для старта счастливой жизни по своему сценарию.")]),s("p",{staticClass:"text-1"},[t._v("Избавиться от груза прошлого, преодолеть психологические травмы")])])]),s("div",{staticClass:"col-12 col-md-6 col-lg-3"},[s("div",{staticClass:"col-body"},[s("p",{staticClass:"text-1"},[t._v("Научиться не делать старых ошибок в новых отношениях.")]),s("p",{staticClass:"text-1"},[t._v("Преодолеть страх новых отношений после краха прошлых")])])]),s("div",{staticClass:"col-12 col-md-6 col-lg-3"},[s("div",{staticClass:"col-body"},[s("p",{staticClass:"text-1"},[t._v("Преодолеть кризис среднего возраста, прокрастинацию и жизненный ступор.")]),s("p",{staticClass:"text-1"},[t._v("Найти смысл жизни, составить свою картину мира, свои цели и научиться их достигать")])])])])])])}],w={name:"SectionHelp"},k=w,O=(s("0530"),Object(i["a"])(k,y,x,!1,null,"72bb405a",null)),E=O.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"about"},[s("div",{staticClass:"container"},[s("div",{staticClass:"about-body"},[s("h2",[t._v("Что такое Wisdom?")]),s("p",{staticClass:"text-1"},[t._v(" Wisdom - сервис, который быстро подберет для вас психолога. Наши психологи обладают знаниями, опытом и навыками, необходимыми для оказания экстренной психологической помощи. ")]),s("p",{staticClass:"text-1"},[t._v("Цель Wisdom - помочь вам сразу.")]),s("p",{staticClass:"text-1"},[t._v("Что делать, если не к кому обратиться за поддержкой, а на выбор психолога и ожидание встречи нет времени?")]),s("p",{staticClass:"text-1"},[t._v("Что делать, если помощь нужна прямо сейчас?")]),s("p",{staticClass:"text-1"},[t._v("С помощью WISDOM каждый может начать диалог с психологом без регистрации, поиска и записи на сеанс.")]),s("p",{staticClass:"text-1"},[t._v("Это и делает наш сервис уникальным")])])])])}],P={name:"SectionAbout"},A=P,T=(s("df35"),Object(i["a"])(A,S,j,!1,null,"45008a99",null)),$=T.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"modal-window"},[s("p",[t._v("das")]),s("button",[t._v("close")])]),s("div",{staticClass:"modal-window__bg"})])}],I={name:"ModalWindowPay"},M=I,N=Object(i["a"])(M,W,H,!1,null,"38032799",null),F=N.exports,U={name:"Home",components:{AppHeader:f["a"],AppFooter:m["a"],SectionWork:g,SectionHelp:E,SectionAbout:$,ModalWindowPay:F}},D=U,L=(s("6bc2"),Object(i["a"])(D,d,v,!1,null,"549ca053",null)),B=L.exports;a["a"].use(u["a"]);var R=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/search",name:"Search",component:function(){return s.e("about").then(s.bind(null,"2d3b"))}},{path:"/prices",name:"Price",component:function(){return s.e("about").then(s.bind(null,"d3be"))}},{path:"/chat",name:"Chat",component:function(){return s.e("about").then(s.bind(null,"293a"))}},{path:"/psychology",name:"Psychology",component:function(){return s.e("about").then(s.bind(null,"e390"))}},{path:"/registration",name:"Registration",component:function(){return s.e("about").then(s.bind(null,"3fd1"))}},{path:"/psychologyUser",name:"PsychologyUser",component:function(){return s.e("about").then(s.bind(null,"7cac"))}}],q=new u["a"]({routes:R}),G=q,J=s("2f62"),K=s("bc3a"),z=s.n(K);a["a"].use(J["a"]);var Q=new J["a"].Store({state:{},mutations:{},actions:{},getters:{},modules:{psychologyUserInfo:{state:{info:[]},mutations:{SET_INFO_TO_STATE:function(t,e){t.info=e}},actions:{GET_INFO_FROM_API:function(t){var e=t.commit;return z()("http://jsonplaceholder.typicode.com/users/1",{method:"GET"}).then((function(t){return e("SET_INFO_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))}},getters:{INFORMATION:function(t){return t.info}}}}}),V=s("3f9d"),X=(s("ab8b"),s("1dce")),Y=s.n(X),Z=s("2106"),tt=s.n(Z);a["a"].use(tt.a,z.a),a["a"].config.productionTip=!1,a["a"].use(V["a"]),a["a"].use(Y.a),new a["a"]({router:G,store:Q,render:function(t){return t(r)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},6464:function(t,e,s){"use strict";s("ebdc")},"6bc2":function(t,e,s){"use strict";s("1337")},7809:function(t,e,s){"use strict";s("9b64")},"91ce":function(t,e,s){},"97db":function(t,e,s){},"9b64":function(t,e,s){},"9c0c":function(t,e,s){},a4ce:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"container header-container"},[s("nav",{staticClass:"d-flex justify-content-between align-items-center header-line"},[s("router-link",{staticClass:"logo",attrs:{to:{name:"Home"}}},[t._v("Wisdom")]),s("ul",{staticClass:"d-none d-lg-flex pc-list"},[s("li",[s("router-link",{attrs:{to:{name:"Chat"}}},[t._v("Чат (для демонстрации)")])],1),s("li",[s("router-link",{attrs:{to:{name:"PsychologyUser"}}},[t._v("Кабинет психолога (для демонстрации)")])],1),s("li",[s("router-link",{attrs:{to:{name:"About"}}},[t._v("О нас")])],1),s("li",[s("router-link",{attrs:{to:{name:"Price"}}},[t._v("Цены")])],1),s("li",[s("router-link",{attrs:{to:{name:"Psychology"}}},[t._v("Для психологов")])],1)]),s("div",{staticClass:"d-flex d-lg-none align-items-center justify-content-end"},[s("router-link",{staticClass:"button",attrs:{to:{name:"Search"}}},[t._v("Найти помощь")]),s("span",{staticClass:"burger",on:{click:function(e){t.show=!t.show}}})],1)],1)]),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"header-mob"},[s("div",{staticClass:"container"},[s("ul",[s("li",[s("router-link",{attrs:{to:{name:"Chat"}}},[t._v("Чат (для демонстрации)")])],1),s("li",[s("router-link",{attrs:{to:{name:"PsychologyUser"}}},[t._v("Кабинет психолога (для демонстрации)")])],1),s("li",[s("router-link",{attrs:{to:{name:"About"}}},[t._v("О нас")])],1),s("li",[s("router-link",{attrs:{to:{name:"Price"}}},[t._v("Цены")])],1),s("li",[s("router-link",{attrs:{to:{name:"Psychology"}}},[t._v("Для психологов")])],1)])])])])],1)},n=[],o={name:"AppHeader",data:function(){return{show:!1}}},i=o,c=(s("6464"),s("2877")),l=Object(c["a"])(i,a,n,!1,null,"9787ebc0",null);e["a"]=l.exports},df35:function(t,e,s){"use strict";s("91ce")},ebdc:function(t,e,s){},f657:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-between align-items-start"},[s("div",{staticClass:"col-12 col-md-6 footer-logo"},[s("router-link",{staticClass:"logo",attrs:{to:{name:"Home"}}},[t._v("Wisdom")])],1),s("ul",{staticClass:"footer-list col-12 col-md-6"},[s("li",[s("router-link",{attrs:{to:{name:"About"}}},[t._v("О нас")])],1),s("li",[s("router-link",{attrs:{to:{name:"Price"}}},[t._v("Цены")])],1),s("li",[s("router-link",{attrs:{to:{name:"Psychology"}}},[t._v("Для психологов")])],1),s("li",[s("router-link",{attrs:{to:{name:"About"}}},[t._v("О нас")])],1),s("li",[s("router-link",{attrs:{to:{name:"Price"}}},[t._v("Цены")])],1),s("li",[s("router-link",{attrs:{to:{name:"Psychology"}}},[t._v("Для психологов")])],1),s("li",[s("router-link",{attrs:{to:{name:"About"}}},[t._v("О нас")])],1),s("li",[s("router-link",{attrs:{to:{name:"Price"}}},[t._v("Цены")])],1),s("li",[s("router-link",{attrs:{to:{name:"Psychology"}}},[t._v("Для психологов")])],1)])])])])},n=[],o={name:"AppFooter"},i=o,c=(s("7809"),s("2877")),l=Object(c["a"])(i,a,n,!1,null,"171628a6",null);e["a"]=l.exports}});
//# sourceMappingURL=app.e106e27b.js.map