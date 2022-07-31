"use strict";(self["webpackChunkkenaz_zadatak"]=self["webpackChunkkenaz_zadatak"]||[]).push([[586],{3586:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var s=n(3396),r=n(7139);const i={key:0},l={class:"content"},a={class:"main"},o={class:"pagination"};function c(e,t,n,c,u,d){const w=(0,s.up)("Placeholder"),p=(0,s.up)("HeaderNews"),h=(0,s.up)("NewsPreview"),g=(0,s.up)("router-link"),f=(0,s.up)("SideNews"),m=(0,s.up)("Social"),v=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[e.news.length?((0,s.wg)(),(0,s.iD)("main",i,[(0,s.Wm)(w,{text:["banner","940x120"],span:"lg"===e.size?3:2},null,8,["span"]),(0,s.Wm)(p,{news:e.news.slice(0,5)},null,8,["news"]),(0,s._)("div",l,[(0,s._)("div",a,[(0,s.Wm)(h,{news:e.news.slice(0+6*(e.page-1),6+6*(e.page-1)),title:e.category},null,8,["news","title"]),(0,s._)("div",o,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Math.ceil(e.news.length/6),((t,n)=>((0,s.wg)(),(0,s.j4)(g,{key:n,to:{query:{page:n+1}},class:(0,r.C_)({active:e.page===n+1})},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(n+1),1)])),_:2},1032,["to","class"])))),128))])]),(0,s._)("aside",null,[(0,s.Wm)(f,{popular:e.news.slice(0,5),topRated:e.news.slice(5,10),comments:e.news.sort(((e,t)=>t.comments.length-e.comments.length)).slice(0,5)},null,8,["popular","topRated","comments"]),(0,s.Wm)(m)])]),(0,s.Wm)(w,{text:["banner","620x120"],span:2})])):(0,s.kq)("",!0),(0,s.Wm)(v)],64)}var u=n(2482),d=n(7174),w=n(6520),p=n(4806),h=n(801),g=n(5357),f=n(4620),m=n(2641);const v=e=>((0,s.dD)("data-v-c4c2250c"),e=e(),(0,s.Cn)(),e),y={class:"details"},_=v((()=>(0,s._)("i",null,null,-1))),z={class:"content"},k=["src","alt"],b=(0,s.Uk)("Read article");function Z(e,t,n,i,l,a){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",null,[(0,s._)("h2",null,(0,r.zw)(e.title),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.news,((e,t)=>((0,s.wg)(),(0,s.iD)("article",{key:t},[(0,s._)("h3",null,(0,r.zw)(e.headline),1),(0,s._)("div",y,[(0,s._)("span",null,[_,(0,s.Uk)((0,r.zw)(e.date),1)]),(0,s._)("span",null,"Author: "+(0,r.zw)(e.author.name),1),(0,s._)("span",null,(0,r.zw)(e.comments.length)+" Comments",1)]),(0,s._)("div",z,[(0,s._)("img",{src:`/headers/${e.headerImage}`,alt:e.headline},null,8,k),(0,s._)("div",null,[(0,s._)("p",null,(0,r.zw)(e.content[0].value),1),(0,s.Wm)(o,{to:`/news/${e.id}`},{default:(0,s.w5)((()=>[b])),_:2},1032,["to"])])])])))),128))])}var D=n(8039),W=function(e,t,n,s){var r,i=arguments.length,l=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l};let H=class extends w.w3{constructor(...e){super(...e),(0,u.Z)(this,"news",void 0),(0,u.Z)(this,"title","News")}};W([(0,D.fI)()],H.prototype,"news",void 0),W([(0,D.fI)()],H.prototype,"title",void 0),H=W([(0,w.Ei)({})],H);var R=H,N=n(89);const P=(0,N.Z)(R,[["render",Z],["__scopeId","data-v-c4c2250c"]]);var $=P,j=function(e,t,n,s){var r,i=arguments.length,l=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l};let x=class extends w.w3{constructor(...e){super(...e),(0,u.Z)(this,"news",[]),(0,u.Z)(this,"size","sm"),(0,u.Z)(this,"category",""),(0,u.Z)(this,"page",1)}};x=j([(0,w.Ei)({components:{Placeholder:d.Z,HeaderNews:p.Z,Footer:g.Z,SideNews:f.Z,Social:m.Z,NewsPreview:$},methods:{resizeHandler(){window.innerWidth<768?this.size="sm":window.innerWidth<940?this.size="md":this.size="lg"}},mounted(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler),this.news=h.filter((e=>e.category===this.$route.params.category)),this.page=Number(this.$route.query.page)||1,this.$watch((()=>this.$route.params.category),(e=>{this.news=h.filter((t=>t.category===e)),this.category=e})),this.$watch((()=>this.$route.query.page),(e=>{this.page=parseInt(e)||1}))},beforeDestroy(){window.removeEventListener("resize",this.resizeHandler)}})],x);var I=x;const O=(0,N.Z)(I,[["render",c],["__scopeId","data-v-131325fb"]]);var C=O}}]);
//# sourceMappingURL=586.72161878.js.map