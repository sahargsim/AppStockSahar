(function(e){function t(t){for(var a,s,i=t[0],u=t[1],l=t[2],c=0,d=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var a={},s={app:0},n={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-01f1660a":"4c6787a3","chunk-24319501":"1e18d742","chunk-b1d9883c":"7e6f6051","chunk-eb176214":"dc5cc7d9"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-01f1660a":1,"chunk-24319501":1,"chunk-b1d9883c":1,"chunk-eb176214":1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise((function(t,r){for(var a="css/"+({}[e]||e)+"."+{"chunk-01f1660a":"c2cc4b6d","chunk-24319501":"d21fad8a","chunk-b1d9883c":"77c177b6","chunk-eb176214":"66fdc1f5"}[e]+".css",n=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===a||c===n))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],c=l.getAttribute("data-href");if(c===a||c===n)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[e],m.parentNode.removeChild(m),r(o)},m.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){s[e]=0})));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=o);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(m);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,r[1](d)}n[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(r,a,function(t){return e[t]}.bind(null,a));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3d82":function(e,t,r){"use strict";r("94da")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=r("5f5b"),n=r("b1e0"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{href:"#"}},[e._v("AppStock")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"}},[r("router-link",{staticClass:"nav-link",attrs:{to:"/products"}},[e._v("PRODUCTS")])],1),r("b-nav-item",{attrs:{href:"#"}},[r("router-link",{staticClass:"nav-link",attrs:{to:"/addProduct"}},[e._v("ADDPRODUCT")])],1)],1),e.currentUser?e._e():r("div",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[r("font-awesome-icon",{attrs:{icon:"user-plus"}}),e._v("Sign Up ")],1)],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[r("font-awesome-icon",{attrs:{icon:"sign-in-alt"}}),e._v("Login ")],1)],1)]),e.currentUser?r("div",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[r("font-awesome-icon",{attrs:{icon:"user"}}),e._v(" "+e._s(e.currentUser.username)+" ")],1)],1),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logOut(t)}}},[r("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),e._v("LogOut ")],1)])]):e._e()],1)],1),r("div",{staticClass:"container"},[r("router-view")],1)],1)},i=[],u=(r("caad"),r("2532"),{computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}}),l=u,c=(r("739c"),r("2877")),d=Object(c["a"])(l,o,i,!1,null,"268d2be6",null),m=d.exports,f=(r("4989"),r("f9e3"),r("2dd8"),r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row login-wrap"},[r("div",{staticClass:"login-html"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card card-container cardlogin"},[r("img",{staticClass:"profile-img-card ",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleLogin(t)}}},[r("div",{staticClass:"form-group "},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control formlogin",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.errors.has("username")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Username is required!")]):e._e()]),r("div",{staticClass:"form-group "},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control formlogin",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.errors.has("password")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Password is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block loginbtn",attrs:{disabled:e.loading}},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),r("span",[e._v("Login")])])]),r("div",{staticClass:"form-group"},[e.message?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()])])])])])])},g=[],v=(r("25f0"),r("d4ec")),h=function e(t,r,a){Object(v["a"])(this,e),this.username=t,this.email=r,this.password=a},b={name:"Login",data:function(){return{user:new h("",""),loading:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(t){t?e.user.username&&e.user.password&&e.$store.dispatch("auth/login",e.user).then((function(){e.$router.push("/profile")}),(function(t){e.loading=!1,e.message=t.response&&t.response.data||t.message||t.toString()})):e.loading=!1}))}}},w=b,_=(r("3d82"),Object(c["a"])(w,p,g,!1,null,"754a4e4a",null)),C=_.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row login-wrap"},[r("div",{staticClass:"login-html"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card card-container"},[r("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e.successful?e._e():r("div",[r("div",{staticClass:"form-group "},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:20",expression:"'required|min:3|max:20'"}],staticClass:"form-control formRegister",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.submitted&&e.errors.has("username")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("username")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email|max:50",expression:"'required|email|max:50'"}],staticClass:"form-control formRegister",attrs:{type:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e.submitted&&e.errors.has("email")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control formRegister",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.submitted&&e.errors.has("password")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("password")))]):e._e()]),e._m(0)])]),e.message?r("div",{staticClass:"alert",class:e.successful?"alert-success":"alert-danger"},[e._v(e._s(e.message))]):e._e()])])])])},y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block"},[e._v("Sign Up")])])}],x={name:"Register",data:function(){return{user:new h("","",""),submitted:!1,successful:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(t){t&&e.$store.dispatch("auth/register",e.user).then((function(t){e.message=t.message,e.successful=!0}),(function(t){e.message=t.response&&t.response.data||t.message||t.toString(),e.successful=!1}))}))}}},O=x,P=(r("612f"),Object(c["a"])(O,k,y,!1,null,"19d0bcac",null)),S=P.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"error-page"}},[r("div",{staticClass:"content"},[r("h2",{staticClass:"header",attrs:{"data-text":"404"}},[e._v(" 404")]),r("h4",{attrs:{"data-text":"Opps! Page not found"}},[e._v(" Opps! Page not found")]),r("p",[e._v(" Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.")])])])}],E=(r("8434"),{}),I=Object(c["a"])(E,$,j,!1,null,"5a6f0d26",null),N=I.exports;a["default"].use(f["a"]);var U=new f["a"]({mode:"history",routes:[{path:"/",name:"login",component:C},{path:"/login",component:C},{path:"/register",component:S},{path:"/profile",name:"profile",component:function(){return r.e("chunk-24319501").then(r.bind(null,"c66d"))}},{path:"/products",name:"products",component:function(){return r.e("chunk-eb176214").then(r.bind(null,"cae6"))}},{path:"/products/:id",name:"products-details",component:function(){return r.e("chunk-01f1660a").then(r.bind(null,"d2f1"))}},{path:"/addProduct",name:"addProduct",component:function(){return r.e("chunk-b1d9883c").then(r.bind(null,"d0ec"))}},{path:"/:pathMatch(.*)*",name:"not-found",component:N}]});U.beforeEach((function(e,t,r){var a=["/login","/register"],s=!a.includes(e.path),n=localStorage.getItem("user");s&&!n?r("/login"):r()}));var q=r("2f62"),L=r("bee2"),A=r("bc3a"),R=r.n(A),T="http://localhost:8080/api/auth/",D=function(){function e(){Object(v["a"])(this,e)}return Object(L["a"])(e,[{key:"login",value:function(e){return R.a.post(T+"signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return R.a.post(T+"signup",{username:e.username,email:e.email,password:e.password})}}]),e}(),M=new D,B=JSON.parse(localStorage.getItem("user")),F=B?{status:{loggedIn:!0},user:B}:{status:{loggedIn:!1},user:null},J={namespaced:!0,state:F,actions:{login:function(e,t){var r=e.commit;return M.login(t).then((function(e){return r("loginSuccess",e),Promise.resolve(e)}),(function(e){return r("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;M.logout(),t("logout")},register:function(e,t){var r=e.commit;return M.register(t).then((function(e){return r("registerSuccess"),Promise.resolve(e.data)}),(function(e){return r("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}};a["default"].use(q["a"]);var H=new q["a"].Store({modules:{auth:J}}),K=r("7bb1"),z=r("ecee"),G=r("ad3d"),Q=r("c074");z["c"].add(Q["a"],Q["d"],Q["e"],Q["b"],Q["c"]),a["default"].config.productionTip=!1,a["default"].use(s["a"]),a["default"].use(n["a"]),a["default"].use(K["a"]),a["default"].component("font-awesome-icon",G["a"]),new a["default"]({router:U,store:H,render:function(e){return e(m)}}).$mount("#app")},"612f":function(e,t,r){"use strict";r("d281")},"6ef2":function(e,t,r){},"739c":function(e,t,r){"use strict";r("b775")},8434:function(e,t,r){"use strict";r("6ef2")},"94da":function(e,t,r){},b775:function(e,t,r){},d281:function(e,t,r){}});
//# sourceMappingURL=app.a413911f.js.map