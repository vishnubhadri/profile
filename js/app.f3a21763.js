(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,s=1;s<i.length;s++){var c=i[s];0!==a[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/profile/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"1ec8":function(e,t,i){"use strict";i("aa1d")},3513:function(e,t,i){"use strict";i("a2e8")},"3c46":function(e,t,i){"use strict";i("ad56")},"49f8":function(e,t,i){var n={"./en.json":"edd4"};function a(e){var t=r(e);return i(t)}function r(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="49f8"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("profile-menu"),i("v-main",[i("v-responsive",[i("v-container",{staticClass:"lighten-5"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{lg:"4",md:"4",sm:"6",order:"1"}},[i("profile-card",{attrs:{companies:this.$t("experiences"),picture:this.$t("picture"),introduction:this.$t("introduction"),education:this.$t("education"),name:this.$t("name"),headline:this.$t("headline"),desigination:this.$t("desigination")}})],1),i("v-col",{attrs:{lg:"4",md:"4",sm:"6",order:"2"}},[i("skills-card",{attrs:{skills:this.$t("skills"),languages:this.$t("languages")}})],1),i("v-col",{attrs:{lg:"4",md:"4",sm:"6",order:"4"}},["files"!==this.$t("files")&&this.$t("files").length>0?i("files-card",{attrs:{files:this.$t("files")}}):e._e()],1),i("v-col",{attrs:{lg:"4",md:"3",sm:"6",order:"3"}},e._l(e.reverseExperiences,(function(e,t){return i("experience-card",{key:"experience_"+t,attrs:{data:e}})})),1),i("v-col",{attrs:{lg:"4",md:"4",sm:"6",order:"5"}},[i("achivements-card",{attrs:{achivements:this.$t("achivements")}})],1)],1)],1)],1)],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"ml-2 mb-2",attrs:{"max-width":"350",elevation:"5"}},[n("v-responsive",[n("v-img",{attrs:{src:i("71a2"),height:"200px"}}),n("v-card-title",{staticClass:"primary--text"},[e._v(" "+e._s(e.name)+" ")]),e.headline?n("v-card-subtitle",[e._v(" "+e._s(e.headline)+" ")]):e._e(),!e.headline&&e.desigination?n("v-card-subtitle",{staticClass:"font-weight-light"},[e._v(" "+e._s(e.desigination)+" ")]):e._e(),n("v-card-actions",["phone"!=e.$t("phone")?n("v-btn",{attrs:{icon:"",fab:"",small:"",href:"Tel:"+e.$t("phone"),target:"_blank"}},[n("v-icon",[e._v("mdi-phone")])],1):e._e(),"hotmail"!=e.$t("hotmail")?n("v-btn",{attrs:{icon:"",fab:"",small:"",href:"mailto:"+e.$t("hotmail"),target:"_blank"}},[n("v-icon",[e._v("mdi-microsoft-outlook")])],1):e._e(),"gmail"!=e.$t("gmail")?n("v-btn",{attrs:{icon:"",fab:"",small:"",href:"mailto:"+e.$t("gmail"),target:"_blank"}},[n("v-icon",[e._v("mdi-gmail")])],1):e._e(),n("v-divider",{attrs:{vertical:"",inset:""}}),n("v-card-actions",["github"!=e.$t("github")?n("v-btn",{attrs:{icon:"",fab:"",small:"",href:e.$t("github"),target:"_blank"}},[n("v-icon",[e._v("mdi-github")])],1):e._e(),"linkedin"!=e.$t("linkedin")?n("v-btn",{attrs:{icon:"",fab:"",small:"",href:e.$t("linkedin"),target:"_blank"}},[n("v-icon",[e._v("mdi-linkedin")])],1):e._e(),"facebook"!=e.$t("facebook")?n("v-btn",{attrs:{icon:"",fab:"",small:"",href:e.$t("facebook"),target:"_blank"}},[n("v-icon",[e._v("mdi-facebook")])],1):e._e(),"twitter"!=e.$t("twitter")?n("v-btn",{attrs:{icon:"",fab:"",small:"",href:e.$t("twitter"),target:"_blank"}},[n("v-icon",[e._v("mdi-twitter")])],1):e._e()],1),n("v-divider",{attrs:{vertical:"",inset:""}})],1),n("v-divider"),e.companies?n("v-card-subtitle",{style:e.education?"padding-bottom: 1px":""},e._l(e.companies,(function(t){return n("v-chip",{key:t.company,staticClass:"mr-1",attrs:{color:!0===t.present?"company":"company lighten-1",link:"",outlined:"",href:t.url,target:"_blank",small:""}},[e._v(e._s(t.company))])})),1):e._e(),e.education?n("v-card-subtitle",e._l(e.education,(function(t){return n("v-chip",{key:t.name,class:e.companies?"mr-1":"",attrs:{color:"college lighten-1",link:"",outlined:"",href:t.url,target:"_blank","x-small":""}},[e._v(e._s(t.name))])})),1):e._e(),n("v-divider"),e.introduction?n("v-card-actions",[n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.show=!e.show}}},[e._v(" INTRO ")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[n("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1):e._e(),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-divider"),n("v-card-text",{staticClass:"text--secondary font-weight-light"},[e._v(" "+e._s(e.introduction)+" ")])],1)])],1)],1)},s=[],c={name:"profile-card",props:{companies:{default:!1},education:{default:!1},introduction:{default:!1},name:{required:!0},desigination:{default:!1},headline:{default:!1}},data:function(){return{show:!1}}},l=c,d=(i("bd1a"),i("2877")),u=i("6544"),p=i.n(u),v=i("8336"),h=i("b0af"),m=i("99d9"),f=i("cc20"),g=i("ce7e"),w=i("0789"),_=i("132d"),b=i("adda"),x=i("6b53"),y=i("2fa4"),C=Object(d["a"])(l,o,s,!1,null,"37165e0b",null),k=C.exports;p()(C,{VBtn:v["a"],VCard:h["a"],VCardActions:m["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCardTitle:m["d"],VChip:f["a"],VDivider:g["a"],VExpandTransition:w["a"],VIcon:_["a"],VImg:b["a"],VResponsive:x["a"],VSpacer:y["a"]});var V=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"ml-2 mb-2",attrs:{"max-width":"350",elevation:"5"}},[i("v-responsive",[i("v-card-title",[i("span",{staticClass:"text-h6 font-weight-bold primary--text"},[e._v("Skills")])]),i("v-card-text",{staticClass:"text-h5 font-weight-light text--secondary"},[e._v(" "+e._s(e.skills)+" ")]),i("v-card-text",[i("v-row",{attrs:{"no-gutters":""}},[e.showExpand?e._e():e._l(e.languages,(function(t,n,a){return i("v-col",{key:"normal_"+a},[i("v-divider"),i("span",{staticClass:"text--secondary"},[e._v(e._s(n))]),i("v-rating",{attrs:{color:"primary","half-increments":"",length:"5",value:t,readonly:"","x-small":""}})],1)})),e.showExpand?e._l(e.languages,(function(t,n,a){return i("v-col",{key:"mobile"+a},[a<6?[i("span",{staticClass:"text--secondary"},[e._v(e._s(n))]),i("v-rating",{attrs:{color:"primary","half-increments":"",length:"5",value:t,readonly:"","x-small":""}}),i("v-divider")]:[i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[i("span",{staticClass:"text--secondary"},[e._v(e._s(n))]),i("v-rating",{attrs:{color:"primary","half-increments":"",length:"5",value:t,readonly:"","x-small":""}}),i("v-divider")],1)])]],2)})):e._e()],2)],1),e.showExpand?i("v-card-actions",[i("v-btn",{attrs:{text:"",color:"primary accent-4"},on:{click:function(t){e.show=!e.show}}},[e._v(" Projects ")]),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[i("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1):e._e()],1)],1)},S=[],E={name:"skillsCard",props:{skills:{required:!0},languages:{required:!0}},data:function(){return{showExpand:!1,show:!1}},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{onResize:function(){this.showExpand=window.innerWidth<600||window.innerWidth>960&&window.innerWidth<1264}}},j=E,I=(i("3c46"),i("62ad")),A=i("1d4d"),$=i("0fd9"),T=Object(d["a"])(j,V,S,!1,null,"1b192a16",null),D=T.exports;p()(T,{VBtn:v["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VCol:I["a"],VDivider:g["a"],VExpandTransition:w["a"],VIcon:_["a"],VRating:A["a"],VResponsive:x["a"],VRow:$["a"],VSpacer:y["a"]});var L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"ml-2 mb-2",attrs:{elevation:"5","max-width":"350","min-width":"200"}},[i("v-responsive",[i("v-card-text",[i("div",{staticClass:"text-end font-weight-light text--secondary"},[e._v(" "+e._s(e.data.from)+" / "+e._s(e.data.to?e.data.to:"present")+" ")]),i("p",{staticClass:"text-h5 primary--text"},[e._v(e._s(e.data.grade))]),i("p",{staticClass:"text--secondary"},[e._v(" at "),e.data.url?i("a",{attrs:{href:e.data.url}},[e._v(e._s(e.data.company))]):i("span",[e._v(e._s(e.data.company))])]),i("div",{staticClass:"font-weight-light"},[e._v(" "+e._s(e.data.description)+" ")])]),i("v-card-actions",[i("v-btn",{attrs:{text:"",color:"primary accent-4"},on:{click:function(t){e.show=!e.show}}},[e._v(" Projects ")]),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[i("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[i("v-divider"),e._l(e.data.projects,(function(t,n){return[i("v-card-text",{key:"title_"+n},[i("p",{staticClass:"text-h6 primary--text"},[e._v(e._s(t.projectName))]),i("p",{key:"desc_"+n,staticClass:"text--secondary font-weight-light"},[e._v(" "+e._s(t.projectDesc)+" ")])]),i("v-divider",{key:"divider_"+n,attrs:{inset:""}})]}))],2)])],1)],1)},M=[],O={name:"experience-card",props:{data:{required:!0}},data:function(){return{show:!1}}},P=O,N=(i("3513"),Object(d["a"])(P,L,M,!1,null,"c98e9042",null)),R=N.exports;p()(N,{VBtn:v["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["c"],VDivider:g["a"],VExpandTransition:w["a"],VIcon:_["a"],VResponsive:x["a"],VSpacer:y["a"]});var B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"ml-2 mb-2",attrs:{"max-width":"350","min-width":"200",elevation:"5"}},[i("v-responsive",[i("v-card-title",[i("span",{staticClass:"text-h6 font-weight-bold primary--text"},[e._v("Achivements")])]),i("ul",[[i("achivement-card-list",{attrs:{achivements:e.achivements.slice(0,e.defaultItemShowLength)}})],e.achivements.length>e.defaultItemShowLength?[i("v-card-actions",[i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.show=!e.show}}},[e._v(" Show More ")]),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[i("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[i("achivement-card-list",{attrs:{achivements:e.achivements.slice(e.defaultItemShowLength)}})],1)])]:e._e()],2)],1)],1)},F=[],J=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",e._l(e.achivements,(function(t,n){return i("v-list-item",{key:"achivement_"+n},[i("v-list-item-content",[t.title?i("v-list-item-title",[e._v(e._s(t.title))]):e._e(),i("v-list-item-subtitle",{staticClass:"font-weight-light"},[i("li",[i("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var a=n.on,r=n.attrs;return[i("span",e._g(e._b({},"span",r,!1),a),[e._v(" "+e._s(t.description))])]}}],null,!0)},[i("span",[e._v(e._s(t.description))])])],1)])],1)],1)})),1)},W=[],z={name:"achivementsCardList",props:{achivements:{required:!0},defaultItemShowLength:{default:"3"}},data:function(){return{show:!1}}},q=z,Q=(i("c614"),i("da13")),U=i("5d23"),Z=i("3a2f"),G=Object(d["a"])(q,J,W,!1,null,"166ce452",null),X=G.exports;p()(G,{VListItem:Q["a"],VListItemContent:U["a"],VListItemSubtitle:U["b"],VListItemTitle:U["c"],VTooltip:Z["a"]});var K={components:{achivementCardList:X},name:"achivementsCard",props:{achivements:{required:!0}},data:function(){return{show:!1,defaultItemShowLength:3}}},H=K,Y=(i("1ec8"),Object(d["a"])(H,B,F,!1,null,"45254c2e",null)),ee=Y.exports;p()(Y,{VBtn:v["a"],VCard:h["a"],VCardActions:m["a"],VCardTitle:m["d"],VExpandTransition:w["a"],VIcon:_["a"],VResponsive:x["a"],VSpacer:y["a"]});var te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"ml-2 mb-2",attrs:{"max-width":"350",elevation:"5","min-width":"200"}},[i("v-responsive",[i("v-card-title",[e._v("Files")]),i("v-sheet",{staticClass:"mx-auto",attrs:{"max-width":"700"}},[i("v-slide-group",{attrs:{multiple:"","show-arrows":""}},e._l(e.files,(function(e,t){return i("v-slide-item",{key:"file_"+t},[i("file-list",{attrs:{file:e}})],1)})),1)],1)],1)],1)},ie=[],ne=(i("ac1f"),i("1276"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"text-center mb-2",attrs:{elevation:"3",dense:"",outlined:"",height:"95",width:"200"},on:{click:function(t){return e.openFile()}}},[i("v-icon",[e._v(e._s(e.fileIcon))]),i("v-card-text",[e._v(e._s(e.file.name))]),i("v-card-text",{staticClass:"font-weight-light"},[e._v(e._s(e.file.AdditionalInfo))])],1)}),ae=[],re={name:"fileList",props:{file:{required:!0}},data:function(){return{show:!1}},methods:{openFile:function(){window.open(this.file.path,"_blank")}},computed:{fileIcon:function(){var e=this.file.path.split(".").pop();switch(e.toLowerCase()){case"pdf":return"mdi-file-pdf-outline";case"doc":case"docx":return"mdi-file-word-outline";case"7z":case"zip":case"rar":return"mdi-file-zip-outline";case"ppt":case"pptx":return"mdi-file-powerpoint-outline";case"mp3":case"wav":case"flac":return"mdi-file-music-outline";case"xls":case"xlxs":return"mdi-file-excel-outline";case"mp4":case"mov":case"wmv":case"avi":case"flv":case"webm":case"mkv":return"mdi-file-video-outline";case"jpg":case"jpeg":case"png":case"gif":return"mdi-file-image-outline";default:return"mdi-file-link-outline"}}}},oe=re,se=(i("e24b"),Object(d["a"])(oe,ne,ae,!1,null,"b190cc64",null)),ce=se.exports;p()(se,{VCard:h["a"],VCardText:m["c"],VIcon:_["a"]});var le={components:{FileList:ce},name:"fileCard",props:{files:{default:""}},data:function(){return{show:!1}},computed:{fileIcon:function(e){var t=e.path.split(".").pop();switch(t.toLowerCase()){case"pdf":return"mdi-file-pdf-outline";case"doc":case"docx":return"mdi-file-word-outline";case"7z":case"zip":case"rar":return"mdi-file-zip-outline";case"ppt":case"pptx":return"mdi-file-powerpoint-outline";case"html":return"mdi-file-link-outline";case"mp3":case"wav":case"flac":return"mdi-file-music-outline";case"xls":case"xlxs":return"mdi-file-excel-outline";case"mp4":case"mov":case"wmv":case"avi":case"flv":case"webm":case"mkv":return"mdi-file-video-outline";case"jpg":case"jpeg":case"png":case"gif":return"mdi-file-image-outline";default:return"mdi-file-outline"}}}},de=le,ue=i("8dd9"),pe=i("7efd"),ve=i("9dbe"),he=Object(d["a"])(de,te,ie,!1,null,null,null),me=he.exports;p()(he,{VCard:h["a"],VCardTitle:m["d"],VResponsive:x["a"],VSheet:ue["a"],VSlideGroup:pe["a"],VSlideItem:ve["a"]});var fe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app-bar",{attrs:{app:"",elevation:"5"}},[i("v-btn",{staticStyle:{"margin-left":"auto"},attrs:{inset:"",icon:"","persistent-hint":""},on:{click:e.swithTheme}},[i("v-icon",[e._v(e._s(e.icon)+" ")])],1)],1)},ge=[],we=(i("d3b7"),i("25f0"),{name:"profileMenu",computed:{icon:function(){return"dark"===this.$vuetify.theme.options.themeCache.get("dark")?"mdi-brightness-1":"mdi-brightness-5"}},methods:{swithTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("dark",this.$vuetify.theme.dark.toString())}}}),_e=we,be=i("40dc"),xe=Object(d["a"])(_e,fe,ge,!1,null,null,null),ye=xe.exports;p()(xe,{VAppBar:be["a"],VBtn:v["a"],VIcon:_["a"]});var Ce={name:"App",title:"Vish | SE | Dev | ",components:{ProfileCard:k,SkillsCard:D,ExperienceCard:R,AchivementsCard:ee,FilesCard:me,ProfileMenu:ye},computed:{reverseExperiences:function(){return Array.prototype.reverse.apply(this.$t("experiences"))}},mounted:function(){var e=localStorage.getItem("dark");e&&(this.$vuetify.theme.dark="true"==e)}},ke=Ce,Ve=(i("5c0b"),i("7496")),Se=i("a523"),Ee=i("f6c4"),je=Object(d["a"])(ke,a,r,!1,null,null,null),Ie=je.exports;p()(je,{VApp:Ve["a"],VCol:I["a"],VContainer:Se["a"],VMain:Ee["a"],VResponsive:x["a"],VRow:$["a"]});var Ae=i("f309");n["a"].use(Ae["a"]);var $e=new Ae["a"]({theme:{options:{themeCache:{get:function(e){return localStorage.getItem(e)},set:function(e,t){return localStorage.setItem(e,t)}}},themes:{light:{college:"#1d4277",company:"#ffa500"},dark:{college:"#b794f6",company:"#ecf239"}}}}),Te=(i("159b"),i("ddb0"),i("466d"),i("a925"));function De(){var e=i("49f8"),t={};return e.keys().forEach((function(i){var n=i.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var a=n[1];t[a]=e(i)}})),t}n["a"].use(Te["a"]);var Le=new Te["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/profile/"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/profile/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:De()});function Me(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}var Oe={created:function(){var e=Me(this);e&&(document.title=e)}};n["a"].mixin(Oe),n["a"].config.productionTip=!1,new n["a"]({i18n:Le,vuetify:$e,render:function(e){return e(Ie)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("9c0c")},"71a2":function(e,t,i){e.exports=i.p+"img/profile-pic.70fa4608.jpg"},"81bd":function(e,t,i){},"9c0c":function(e,t,i){},a2e8:function(e,t,i){},aa1d:function(e,t,i){},ad56:function(e,t,i){},b5e3:function(e,t,i){},bd1a:function(e,t,i){"use strict";i("81bd")},c614:function(e,t,i){"use strict";i("b5e3")},e24b:function(e,t,i){"use strict";i("fe84")},edd4:function(e){e.exports=JSON.parse('{"name":"Vishnuraj P S","headline":"Software Engineer (Not limited to Technologies and don\'t want to be) | Problem Solver | Mentor | Learner |","desigination":"Associate Consultant","company":"Intellect Design Arena","phone":"+91 8015330617","hotmail":"vishnubhadri@hotmail.com","gmail":"vishnubhadrii@gmail.com","github":"https://github.com/vishnubhadri","linkedin":"https://www.linkedin.com/in/vishnu-raj-sivakumar/","experiences":[{"grade":"Software Engineer","company":"GoDB Tech Pvt Ltd","url":"https://in.go-db.com/","location":"Chennai","from":"05-2018","to":"04-2021","description":"Working as Front-End developer","projects":[{"projectName":"Event Manager","projectDesc":"Scheduling the meetings between the companies and gathering the information of the people who are traveling from one place to another and their accommodation details. Worked as Full Stack Developer (JavaScript, jQuery, and Java Servlet)"},{"projectName":"TAGIC E-Marine","projectDesc":"This is a Marine insurance project where the insured will get the quotation, proposal, payment, policy, Endorsement, and Renewal with details, log, statement, and report for each flow. Primarily Worked as Back End Developer (Node.js) and Guided front-end (Angular (V9))."},{"projectName":"TAGIC Non-Rater","projectDesc":"Non-Rater is basically Quote, NSTP, Proposal, Payment, and Policy flow insurance project with special features like UW referral, UW Escalation Matrix. Working as Full Stack Developer (Angular (V9), Node.js, and java)."}]},{"grade":"Associate Consultant","company":"Intellect Design Arena","url":"https://www.intellectdesign.com/","location":"Chennai","from":"04-2021","description":"Working as Front-End developer","projects":[{"projectName":"IDX (Intelligent Data Extraction)","projectDesc":"IDX is an AI platform that extracts information, Validation, and Data Enrichment from unstructured (pdf, image), structured (excel), and semi-structured (Forms) data which Embedded with deep learning models, IDX accurately predicts and extracts data across various document types with an accuracy of >96% within minutes versus hours and days."}]}],"skills":"Skilled in Multiple Technologies and Languages.","languages":{"JavaScript":4,"Java":3.5,"Vue":4,"Node.js":3,"jQuery":3.5,"TypeScript":4,"Data Structures":4,"Multithreading":3,"Design Pattern":2.5,"Micro frontend":3,"Web components":4,"SQL Server":4,"MySQL":4,"Git":5},"education":[{"name":"Ex-SCTian","college":"Sona College of Technology","branch":"CSE","qualification":"B.E","from":"2015","to":"2018","url":"https://www.sonatech.ac.in/"}],"introduction":"Experienced 3+ years in Software Engineering profession. Passionate on data structures and Mentoring. Skilled in Java, Vue, JavaScript, Node.js, Design Patterns, MS SQL, MySQL, and AJAX. Strong in Logical thinking, problem analysis, Problem-solving, Multithreading and debugging. An engineering professional with a Bachelor of Engineering (B.E.) focused on Computer Science from Sona College of Technology.","achivements":[{"description":"Design and develop Micro-frontend product."},{"description":"Collaborated with Testing, Business Analyst, Deployment teams, and Client."},{"description":"Shaped 2-4 new graduates for a project."},{"description":"Mentoring Freshers"},{"description":"Technical Mentoring for 7."},{"description":"Proactive Front-End developer."},{"description":"Resolved Development Complexity with Design Pattern."},{"description":"Self-started Back-End Developer. Developed Applications in Java Servlet, J2EE, and Node.js."},{"description":"Achieved Front-End development using Angular (V9), TypeScript, JavaScript (ECMAScript 5), and jQuery."},{"description":"Designed and Written Monolithic services and Multithreading Program in Java Servlet using the MVC pattern and Trained for Microservice."},{"description":"Build an Event Management system and Marine Insurance system."},{"description":"Aware of agile methodology (SDLC)."},{"description":"Excellent Debugging skills."},{"description":"Maintaining a record of the work done and cooperate with other progress of development."},{"description":"Worked as Front-End Developer in Vue.js."},{"description":"Research and convert a Vue module into web component and library which can easily integrated in vanilla JS and other frameworks. "},{"description":"Convert Monolithic application to Micro-Frontend Architect. "},{"description":"Familiar with Vue libraries such as Vuex, Vuetify, and Vue-Router."},{"description":"Knowledge in Rest API and implement oauth2 Login."},{"description":"Working on agile methodology (SDLC)."}],"files":[{"name":"Vishnuraj_SE_resume","AdditionalInfo":"Resume","path":""},{"name":"CutShort Certified Vue.js - Basic","AdditionalInfo":"Certificate - CutShort","path":"https://cutshort.io/certificate/43677"},{"name":"CutShort Certified React - Basic","AdditionalInfo":"Certificate - CutShort","path":"https://cutshort.io/certificate/14771"},{"name":"CutShort Certified NodeJS (Node.js) - Basic","AdditionalInfo":"Certificate - CutShort","path":"https://cutshort.io/certificate/12512"},{"name":"CutShort Certified Java - Basic","AdditionalInfo":"Certificate - CutShort","path":"https://cutshort.io/certificate/2952"},{"name":"Techgig Javascript Easy","AdditionalInfo":"Certificate - Techgig","path":"https://www.techgig.com/skilltest/result/javascript/javascript-easy/dWFISWJIM0xER1RlZEp4bzFDcHVIQT09"},{"name":"Techgig SQL Easy","AdditionalInfo":"Certificate - Techgig","path":"https://www.techgig.com/skilltest/result/sql/sql-easy/Zy8yRStvZkZYV3o2ZkVLR3pCbFBnZz09"}]}')},fe84:function(e,t,i){}});
//# sourceMappingURL=app.f3a21763.js.map