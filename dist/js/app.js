(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)a=s[l],i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({home:"home"}[e]||e)+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={home:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({home:"home"}[e]||e)+".css",a=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var s=i[o],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===a))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){s=l[o],u=s.getAttribute("data-href");if(u===r||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){a[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=o);var u,l=document.getElementsByTagName("head")[0],p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=s(e),u=function(t){p.onerror=p.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}i[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:p})},12e4);p.onerror=p.onload=u,l.appendChild(p)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;o.push([1,"chunk-vendors"]),n()})({0:function(e,t){},1:function(e,t,n){e.exports=n("56d7")},"17e2":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"clock"},[n("span",[e._v(e._s(e.date))]),n("span",{staticClass:"dayname"},[e._v(e._s(e.dayname))]),n("span",{staticClass:"time icon-clock"},[n("span",[e._v(e._s(e.HH))]),n("span",{staticClass:"colon"},[e._v(":")]),n("span",[e._v(e._s(e.mm))])])])},a=[],i=(n("cadf"),n("551c"),n("097d"),n("c1df")),o=n("3b97"),s=0,c={data:function(){return{moment_now:i(),timeoutInstance_updateMoment:null}},computed:{date:function(){return this.moment_now.format("M/D")},dayname:function(){return this.moment_now.format("(ddd)")},HH:function(){return this.moment_now.format("HH")},mm:function(){return this.moment_now.format("mm")}},methods:{setTimeoutUpdateMoment:function(){var e=this;clearTimeout(this.timeoutInstance_updateMoment),this.timeoutInstance_updateMoment=setTimeout(function(){e.moment_now=i(),e.$emit("tick"),s++,3===s&&(s=0,e.$emit("tick3min")),e.setTimeoutUpdateMoment()},Object(o["b"])())}},created:function(){this.setTimeoutUpdateMoment()},beforeDestroy:function(){clearTimeout(this.timeoutInstance_updateMoment)}},u=c,l=(n("ead9"),n("2877")),p=Object(l["a"])(u,r,a,!1,null,"53fe8b2c",null);p.options.__file="Clock.vue";t["default"]=p.exports},"3b97":function(e,t,n){"use strict";n.d(t,"d",function(){return s}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return l});var r=n("53ca"),a=(n("96cf"),n("1da1")),i=(n("ac6a"),n("5df3"),n("cadf"),n("551c"),n("097d"),n("bc3a")),o=n.n(i);function s(e){return new Promise(function(t){return setTimeout(t,e)})}function c(e,t){return Promise.race([new Promise(function(t,n){return setTimeout(function(){return n(new Error("Timeout Error (".concat(e,"ms)")))},e)}),t])}function u(){return new Promise(function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("/env?".concat(Date.now()));case 3:if(a=e.sent.data,"object"===Object(r["a"])(a)&&a.authConfig&&a.cognitoUser&&a.CINERINO_API_ENDPOINT&&a.authConfig.identityPoolId&&a.authConfig.region&&a.authConfig.userPoolId&&a.authConfig.userPoolWebClientId&&a.cognitoUser.userId&&a.cognitoUser.password){e.next=6;break}throw new Error("/env invalid respoponse");case 6:return e.abrupt("return",t(a));case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",n(e.t0));case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}())}function l(){var e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes()+1,0,0)-e}o.a.defaults.timeout=5e4,o.a.defaults.cache=!1},"56d7":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("1da1"),a=(n("cadf"),n("551c"),n("097d"),n("f5df"),n("2b0e")),i=n("bc3a"),o=n.n(i),s=n("a7fe"),c=n.n(s),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],p={name:"app"},d=p,f=(n("5c0b"),n("2877")),m=Object(f["a"])(d,u,l,!1,null,null,null);m.options.__file="App.vue";var v=m.exports,h=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"maincontent"},[n("div",{staticClass:"maintable"},e._l([].concat(Array(5)),function(t,r){return n("div",{key:r,staticClass:"tablerow"},[n("div",{staticClass:"tablecell tablecell-title"},[e.performanceMovieIdArray[r]&&e.screeningEventsByMovieId[e.performanceMovieIdArray[r]]?n("div",{staticClass:"title"},[n("div",{staticClass:"title-main-and-sub"},[n("div",{class:["title-main",{"title-main-rating":e.screeningEventsByMovieId[e.performanceMovieIdArray[r]][0].contentRating}]},[n("h1",[e._v(e._s(e.screeningEventsByMovieId[e.performanceMovieIdArray[r]][0].title))]),e.screeningEventsByMovieId[e.performanceMovieIdArray[r]][0].contentRating?n("span",{staticClass:"mark mark-rating"},[e._v(e._s(e.screeningEventsByMovieId[e.performanceMovieIdArray[r]][0].contentRating))]):e._e(),e.screeningEventsByMovieId[e.performanceMovieIdArray[r]][0].subtitle?n("h2",[e._v(e._s(e.screeningEventsByMovieId[e.performanceMovieIdArray[r]][0].subtitle))]):e._e()])]),n("div",{staticClass:"title-en"},[n("p",[e._v(e._s(e.screeningEventsByMovieId[e.performanceMovieIdArray[r]][0].entitle))])])]):e._e()]),e._l([].concat(Array(6)),function(t,a){return n("div",{key:"pf"+r+a,staticClass:"tablecell tablecell-pf"},[e.screeningEventsByMovieId[e.performanceMovieIdArray[r]]&&e.screeningEventsByMovieId[e.performanceMovieIdArray[r]][a]?n("div",{staticClass:"pf"},[n("div",{staticClass:"pf-time"},[n("h2",[e._v(e._s(e.screeningEventsByMovieId[e.performanceMovieIdArray[r]][a].startHHmm))])]),n("div",{staticClass:"pf-data"},[n("div",{class:"pf-data-status pf-data-status-"+e.screeningEventsByMovieId[e.performanceMovieIdArray[r]][a].availabilityName},[n("span")]),n("div",{staticClass:"pf-data-floor"},[e._v(e._s(e.screeningEventsByMovieId[e.performanceMovieIdArray[r]][a].addressEnglish))])])]):e._e()])})],2)})),n("footer",[n("div",{staticClass:"clockcontainer"},[n("clock",{staticClass:"clock",on:{tick:function(t){e.update()},tick3min:function(t){e.checkEnv()}}})],1),n("div",{staticClass:"msg"},[e.busy_update?n("span",{staticClass:"anim-loading"}):e._e(),n("span",{staticClass:"msgtext"},[e._v(e._s(e.$store.state.systemMsg))])]),n("div",{staticClass:"logo"})])])},b=[],w=(n("7f7f"),n("55dd"),n("ac6a"),n("456d"),n("c1df")),y=n("6e8d"),E=n("3b97");w["locale"]("ja");var _={name:"mainview",data:function(){return{theater:null,busy_update:!0,screeningEventsByMovieId:[]}},computed:{branchCode:function(){return this.$route.params.branchCode},performanceMovieIdArray:function(){var e=Object.keys(this.screeningEventsByMovieId);return e.sort(function(e,t){return e>t?-1:e<t?1:0}),e}},methods:{checkEnv:function(){var e=this;return new Promise(function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(E["a"])();case 3:if(r=t.sent,!Object(y["diff"])(window.appEnv,r)){t.next=9;break}return e.$store.commit("UPDATE_systemMsg","環境変数の変更を検知 (20秒後リロード)"),t.next=8,Object(E["d"])(2e4);case 8:return t.abrupt("return",window.location.reload(!0));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),e.$store.commit("UPDATE_systemMsg","環境変数の再取得に失敗 ".concat(t.t0.message));case 14:return t.abrupt("return",n());case 15:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e){return t.apply(this,arguments)}}())},getAvailabilityNameByRemainingAttendeeCapacity:function(e){return e?e<=(window.appEnv.STATUS_THRESHOLD_CROWDED||10)?"crowded":"vacant":"soldout"},fetchTheaterByUrlParam:function(){var e=this;return new Promise(function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(n,r){var a,i,o,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("UPDATE_systemMsg","劇場コード ".concat(e.branchCode," の情報を取得中...")),t.prev=1,t.next=4,e.$cinerino.getAuthedServices();case 4:return a=t.sent,i=a.organizationService,t.next=8,Object(E["c"])(18e4,i.searchMovieTheaters({}));case 8:if(o=t.sent.data,s=o.filter(function(t){return t.location.branchCode===e.branchCode})[0],s){t.next=12;break}throw new Error("劇場コード ".concat(e.branchCode," の劇場情報を取得できませんでした"));case 12:e.theater=s,e.$store.commit("UPDATE_systemMsg",""),n(),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](1),r(t.t0);case 20:case"end":return t.stop()}},t,this,[[1,17]])}));return function(e,n){return t.apply(this,arguments)}}())},update:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a,i,o,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.busy_update){e.next=2;break}return e.abrupt("return",!1);case 2:if(this.busy_update=!0,e.prev=3,window.navigator.onLine){e.next=6;break}throw new Error("端末がオフライン状態です");case 6:if(this.theater){e.next=9;break}return e.next=9,this.fetchTheaterByUrlParam();case 9:return t=w(),e.next=12,this.$cinerino.getAuthedServices();case 12:return n=e.sent,r=n.eventService,e.next=16,Object(E["c"])(window.appEnv.CINERINO_SCHEDULE_FETCH_TIMEOUT||5e4,r.searchScreeningEvents({superEvent:{locationBranchCodes:[this.theater.location.branchCode]},startFrom:t.toDate(),endThrough:w().hour(23).minute(59).toDate()}));case 16:if(e.t0=function(e){return/EventScheduled|EventRescheduled/.test(e.eventStatus)&&t.isBetween(e.offers.validFrom,e.offers.validThrough)},a=e.sent.data.filter(e.t0),a.length){e.next=22;break}return this.$store.commit("UPDATE_systemMsg","現在表示できるスケジュールはありません"),this.busy_update=!1,e.abrupt("return",!0);case 22:a.sort(function(e,t){return e.startDate<t.startDate?-1:e.startDate>t.startDate?1:0}),i={},o=a.reduce(function(e,t){if(e[t.superEvent.id]||(e[t.superEvent.id]=[]),6===e[t.superEvent.id].length)return e;var n=i[t.superEvent.id];return n||(i[t.superEvent.id]=t.superEvent.additionalProperty.reduce(function(e,t){return e[t.name]=t.value,e},{}),n=i[t.superEvent.id]||{}),e[t.superEvent.id].push({id:t.id,contentRating:"G"!==t.workPerformed.contentRating?t.workPerformed.contentRating:"",videoFormat:t.superEvent.videoFormat,soundFormat:t.superEvent.soundFormat,startHHmm:w(t.startDate).format("HH:mm"),title:n.signageDisplayName||t.superEvent.name.ja,subtitle:n.signageDislaySubtitleName||t.superEvent.headline.ja,entitle:t.superEvent.name.en,addressEnglish:t.location.address.en,availabilityName:s.getAvailabilityNameByRemainingAttendeeCapacity(t.remainingAttendeeCapacity)}),e},{}),this.screeningEventsByMovieId=o,this.$store.commit("UPDATE_systemMsg",""),e.next=32;break;case 29:e.prev=29,e.t1=e["catch"](3),this.$store.commit("UPDATE_systemMsg","更新処理に失敗しました (".concat(w().format("HH:mm"),")(").concat(e.t1.message,")"));case 32:return this.busy_update=!1,e.abrupt("return",!0);case 34:case"end":return e.stop()}},e,this,[[3,29]])}));return function(){return e.apply(this,arguments)}}()},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetchTheaterByUrlParam();case 3:this.$store.commit("UPDATE_systemMsg","「".concat(this.theater.name.ja,"」のスケジュールを取得中...")),this.busy_update=!1,this.update(),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),this.$store.commit("UPDATE_systemMsg",e.t0.message),this.busy_update=!1;case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},k=_,A=(n("d295"),Object(f["a"])(k,g,b,!1,null,"5e1fa9a8",null));A.options.__file="ScheduleView.vue";var x=A.exports,I=n("2f62");a["a"].use(I["a"]);var P=new I["a"].Store({state:{systemMsg:""},mutations:{UPDATE_systemMsg:function(e,t){e.systemMsg=t}}});a["a"].use(h["a"]);var M=new h["a"]({routes:[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/view/:branchCode",name:"scheduleView",component:x}]});M.beforeEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=M.app.$cinerino,e.next=4,a.checkAuth();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),P.commit("UPDATE_systemMsg","Auth Error: ".concat(e.t0.message));case 9:return e.abrupt("return",r());case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,n,r){return e.apply(this,arguments)}}());var C=M,T=n("9491"),O=n.n(T),R=n("7f85"),j="",D="",S=!1,U=null,N={},B={endpoint:"",auth:R["createAuthInstance"]({domain:"",clientId:"",redirectUri:"",logoutUri:"",responseType:"",scope:"",state:"",nonce:null,tokenIssuer:""})},$=function(e){console.log("[cinerinoPlugin][setTokenToCinerinoClient]",e,"accessToken will be expired at ".concat(new Date(1e3*e.payload.exp).toLocaleString())),U=e.payload.exp,B.auth.setCredentials({accessToken:e.jwtToken}),S=!0},H=function(){return new Promise(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.signIn(j,D);case 3:if(r=e.sent,console.log("[cinerinoPlugin[siginInAndGetAccessToken] signInResponse",r),"NEW_PASSWORD_REQUIRED"!==r.challengeName){e.next=11;break}return e.next=8,r.completeNewPasswordChallenge("M0P!X-signage");case 8:return a=e.sent,console.log("[cinerinoPlugin[siginInAndGetAccessToken] completeNewPasswordChallengeResponse",a),e.abrupt("return",window.location.reload(!0));case 11:return e.next=13,O.a.currentAuthenticatedUser();case 13:i=e.sent,console.log("[cinerinoPlugin][siginInAndGetAccessToken] currentAuthenticatedUser",i),$(i.signInUserSession.accessToken),t(),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](0),n("string"===typeof e.t0?new Error("Auth Error: ".concat(e.t0)):e.t0);case 22:return e.abrupt("return",!0);case 23:case"end":return e.stop()}},e,this,[[0,19]])}));return function(t,n){return e.apply(this,arguments)}}())},F=function(){return new Promise(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,S){e.next=4;break}return e.next=4,H();case 4:return e.next=6,O.a.currentAuthenticatedUser();case 6:t(),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("[failed][cinerinoPlugin][checkAuth]",e.t0),n("string"===typeof e.t0?new Error("Auth Error: ".concat(e.t0)):e.t0);case 13:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}())},L=function(){return new Promise(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,S){e.next=4;break}return e.next=4,H();case 4:if(r=1e3*(U-300),!(Date.now()>r)){e.next=11;break}return console.log("[cinerinoPlugin][refreshAuth] token will be expired (and auto refreshed by Amplify) withn 5 minutes."),e.next=9,O.a.currentSession();case 9:a=e.sent,$(a.accessToken);case 11:return e.abrupt("return",t());case 14:return e.prev=14,e.t0=e["catch"](0),console.log("[failed][cinerinoPlugin][refreshAuth]",e.t0),e.abrupt("return",n("string"===typeof e.t0?new Error("Auth Error: ".concat(e.t0)):e.t0));case 18:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t,n){return e.apply(this,arguments)}}())},G=function(){return new Promise(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L();case 3:N={eventService:new R["service"].Event(B),orderService:new R["service"].Order(B),reservationService:new R["service"].Reservation(B),organizationService:new R["service"].Organization(B),personService:new R["service"].Person(B),transactionService:{placeOrder:new R["service"].transaction.PlaceOrder(B)}},t(N),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("[failed][cinerinoPlugin][getAuthedServices]",e.t0),n("string"===typeof e.t0?new Error("Auth Error: ".concat(e.t0)):e.t0);case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t,n){return e.apply(this,arguments)}}())},W={install:function(e,t){return new Promise(function(){var n=Object(r["a"])(regeneratorRuntime.mark(function n(r,a){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,console.log("[cinerinoPlugin][install]",t),j=t.cognitoUser.userId,D=t.cognitoUser.password,B.endpoint=t.CINERINO_API_ENDPOINT,Object.defineProperties(e.prototype,{$cinerino:{get:function(){return{checkAuth:F,getAuthedServices:G}}}}),n.next=8,O.a.configure(t.authConfig);case 8:return n.next=10,H();case 10:r(),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](0),console.log("[failed][cinerinoPlugin][install]",n.t0),a("string"===typeof n.t0?new Error("Auth Error: ".concat(n.t0)):n.t0);case 17:case"end":return n.stop()}},n,this,[[0,13]])}));return function(e,t){return n.apply(this,arguments)}}())}};a["a"].config.productionTip=!1,o.a.defaults.timeout=5e4,o.a.defaults.cache=!1,a["a"].use(c.a,o.a),Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:e.prev=0,window.appEnv=null;case 2:if(window.appEnv){e.next=16;break}return e.prev=3,e.next=6,Object(E["a"])();case 6:window.appEnv=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e["catch"](3),window.document.getElementById("app").innerHTML="<pre>[FATAL][".concat((new Date).toLocaleString(),"] failed to fetch the server environment variables. (automatically retry in 60 seconds.)<br><br>").concat(e.t0.message,"</pre>"),e.next=14,Object(E["d"])(6e4);case 14:e.next=2;break;case 16:return e.next=18,W.install(a["a"],{authConfig:window.appEnv.authConfig,cognitoUser:window.appEnv.cognitoUser,CINERINO_API_ENDPOINT:window.appEnv.CINERINO_API_ENDPOINT});case 18:e.next=24;break;case 20:e.prev=20,e.t1=e["catch"](0),console.log("[main.js][catched]",e.t1),P.commit("UPDATE_systemMsg","[FATAL] init Auth Error: ".concat(e.t1.message));case 24:return a["a"].component("Clock",n("17e2").default),e.abrupt("return",new a["a"]({router:C,store:P,render:function(e){return e(v)}}).$mount("#app"));case 26:case"end":return e.stop()}},e,this,[[0,20],[3,9]])}))()},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},"81aa":function(e,t,n){},d295:function(e,t,n){"use strict";var r=n("e5ca"),a=n.n(r);a.a},e5ca:function(e,t,n){},ead9:function(e,t,n){"use strict";var r=n("81aa"),a=n.n(r);a.a}});