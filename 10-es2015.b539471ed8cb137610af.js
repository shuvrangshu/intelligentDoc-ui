(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{hO9l:function(t,n,o){"use strict";o.r(n),o.d(n,"TabsPageModule",(function(){return d}));var a=o("TEn/"),e=o("ofXK"),b=o("3Pt+"),i=o("tyNb"),c=o("fXoL"),r=o("l3Ae");function l(t,n){1&t&&(c.Kb(0,"ion-badge",9),c.fc(1,"1"),c.Jb())}const s=[{path:"tabs",component:(()=>{class t{constructor(t){this.customerSvc=t}}return t.\u0275fac=function(n){return new(n||t)(c.Hb(r.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-tabs"]],decls:15,vars:1,consts:[[1,"dark-theme"],["slot","bottom"],["tab","tab1"],["name","add-circle"],["tab","tab2"],["name","notifications-outline"],["tab","tab3"],["name","mail"],["id","notifications-badge","color","danger",4,"ngIf"],["id","notifications-badge","color","danger"]],template:function(t,n){1&t&&(c.Kb(0,"ion-tabs",0),c.Kb(1,"ion-tab-bar",1),c.Kb(2,"ion-tab-button",2),c.Ib(3,"ion-icon",3),c.Kb(4,"ion-label"),c.fc(5,"Add Account"),c.Jb(),c.Jb(),c.Kb(6,"ion-tab-button",4),c.Ib(7,"ion-icon",5),c.Kb(8,"ion-label"),c.fc(9,"Notification"),c.Jb(),c.Jb(),c.Kb(10,"ion-tab-button",6),c.Ib(11,"ion-icon",7),c.ec(12,l,2,0,"ion-badge",8),c.Kb(13,"ion-label"),c.fc(14,"Inbox"),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.xb(12),c.Zb("ngIf",n.customerSvc.showInboxBadge))},directives:[a.t,a.r,a.s,a.n,a.o,e.j,a.c],styles:["ion-tab-bar[_ngcontent-%COMP%], ion-tab-button[_ngcontent-%COMP%]{background-color:#0033a1}"]}),t})(),children:[{path:"tab1",loadChildren:()=>o.e(11).then(o.bind(null,"tmrb")).then(t=>t.Tab1PageModule)},{path:"tab2",loadChildren:()=>o.e(12).then(o.bind(null,"TUkU")).then(t=>t.Tab2PageModule)},{path:"tab3",loadChildren:()=>o.e(13).then(o.bind(null,"k+ul")).then(t=>t.Tab3PageModule)},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}];let u=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[i.i.forChild(s)],i.i]}),t})(),d=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[a.x,e.b,b.a,u]]}),t})()},l3Ae:function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));var a=o("fXoL");let e=(()=>{class t{constructor(){this.showInboxBadge=!1}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);