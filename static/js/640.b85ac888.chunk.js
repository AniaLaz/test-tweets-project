"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[640],{640:function(e,t,a){a.r(t),a.d(t,{Tweets:function(){return B}});var s=a(439),r=a(87),n=a(689),o=a(791),l="TweetsPage_btnBack__IO1iQ",i="TweetsPage_btnBackText__Fgrrj",c={loader:"TweetsCards_loader__MslNK",loader_inner:"TweetsCards_loader_inner__eRmrV",animate:"TweetsCards_animate__xrKis",animate2:"TweetsCards_animate2__bUqCz",tweetsContainer:"TweetsCards_tweetsContainer__jlPBa",tweetsList:"TweetsCards_tweetsList__M03fF",item:"TweetsCards_item__h5Bby",text:"TweetsCards_text__u0veQ",textBottom:"TweetsCards_textBottom__VfjXA",imgFon:"TweetsCards_imgFon__sCPB8",imgString:"TweetsCards_imgString__DhJRS",imgRingBox:"TweetsCards_imgRingBox__nUY7b",imgRingPhoto:"TweetsCards_imgRingPhoto__41WU8",imgRin:"TweetsCards_imgRin__XFy8B",avatar:"TweetsCards_avatar__CeXwj",logo:"TweetsCards_logo__fCZBi",boxBottom:"TweetsCards_boxBottom__+Nhp4",button:"TweetsCards_button__SerPK",buttonTrue:"TweetsCards_buttonTrue__FLZBl"},u=a(861),g=a(687),d=a.n(g),f=a(243),w=a(726);var m=a.p+"static/media/pictureFone_opt.dd7094b01bbf0f6eb73eb0a216fc6fb9.svg";var p=a.p+"static/media/rectangle.90e23cf44c8259d5b2f74d75abbbd5cd.svg";var v=a.p+"static/media/ring.cf73322ac91036f99e3ae778c55a4a05.svg";var _=a.p+"static/media/boy.ac85bc0b7eed23122fbe99f9bbfb2c62.svg",h=a(184),b=function(e){var t=e.user,a=e.id,r=e.tweets,n=e.followers,l=e.avatar,i=e.followersFlag,g=(0,o.useState)(!1),b=(0,s.Z)(g,2),x=b[0],A=b[1],C=(0,o.useState)(!1),N=(0,s.Z)(C,2),T=N[0],F=N[1];(0,o.useEffect)((function(){A(i),F(n)}),[i,n]);var j=function(){var e=(0,u.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,x){e.next=7;break}return e.next=4,f.Z.put("/users/".concat(t),{followers:T-1,followersFlag:!0});case 4:F(T-1),e.next=10;break;case 7:return e.next=9,f.Z.put("/users/".concat(t),{followers:T+1,followersFlag:!1});case 9:F(T+1);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsxs)("li",{className:c.item,children:[(0,h.jsx)("a",{className:c.logo,href:"https://github.com/AniaLaz",target:"_blank",rel:"noreferrer",children:(0,h.jsx)("img",{src:w,alt:"fone"})}),(0,h.jsx)("img",{src:m,alt:"fone",className:c.imgFon}),(0,h.jsx)("img",{src:p,alt:"fone",className:c.imgString}),(0,h.jsxs)("div",{className:c.imgRingBox,children:[(0,h.jsxs)("div",{className:c.imgRingPhoto,children:[l?(0,h.jsx)("img",{src:l,alt:t,className:c.avatar}):(0,h.jsx)("img",{src:_,alt:t,className:c.avatar}),(0,h.jsx)("img",{src:l,alt:t,className:c.avatar})]}),(0,h.jsx)("img",{src:v,alt:"fone",className:c.imgRing})]}),(0,h.jsxs)("div",{className:c.boxBottom,children:[(0,h.jsxs)("div",{className:c.text,children:[r," tweets"]}),T?(0,h.jsxs)("div",{className:c.textBottom,children:[T.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," ","followers"]}):(0,h.jsxs)("div",{className:c.textBottom,children:[n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," ","followers"]}),x?(0,h.jsx)("button",{type:"button",className:c.button,onClick:function(){A(!1),j(a)},children:"follow"}):(0,h.jsx)("button",{type:"button",className:c.buttonTrue,onClick:function(){A(!0),j(a)},children:"following"})]})]})},x=function(e){var t=e.tweetsArr;e.onChangefolowwersF;return(0,h.jsxs)("div",{className:c.tweetsContainer,children:[(0,h.jsx)("h2",{children:"TweetsCards"}),t.length?(0,h.jsx)("ul",{className:c.tweetsList,children:t.map((function(e){return(0,h.jsx)(b,{user:e.user,id:e.id,tweets:e.tweets,followers:e.followers,avatar:e.avatar,followersFlag:e.followersFlag},e.id)}))}):(0,h.jsx)("div",{className:c.loader,children:(0,h.jsx)("div",{className:c.loader_inner})})]})},A="Filter_select__QmVYV",C=a(265),N=[{value:"showAll",label:"Show all"},{value:"follow",label:"Follow"},{value:"followings",label:"Followings"}],T=function(e){var t=e.onChange,a=(0,o.useState)("showAll"),r=(0,s.Z)(a,2),n=r[0],l=r[1];return(0,h.jsx)("div",{className:A,children:(0,h.jsx)(C.ZP,{options:N,onChange:function(e){e.value!==n&&(l(e.value),t(e))},value:N.find((function(e){return e.value===n}))})})},F=a(433);f.Z.defaults.baseURL="https://63bc0c08fa38d30d85b994d7.mockapi.io";var j=function(){var e=(0,u.Z)(d().mark((function e(t){var a,s,r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.page,s=t.limit,e.prev=1,e.next=4,f.Z.get("/users?page=".concat(a,"&limit=").concat(s));case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,u.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.get("/users");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e,t,a=(0,n.TH)(),c=(0,o.useState)([]),u=(0,s.Z)(c,2),g=u[0],d=u[1],f=(0,o.useState)(1),w=(0,s.Z)(f,2),m=w[0],p=w[1],v=(0,o.useState)(!1),_=(0,s.Z)(v,2),b=_[0],A=_[1],C=(0,o.useState)("showAll"),N=(0,s.Z)(C,2),B=N[0],k=N[1],S=(0,o.useState)(3),R=(0,s.Z)(S,2),y=R[0],L=R[1];(0,o.useEffect)((function(){"showAll"===B?function(e){var t=e.page,a=e.limit,s=e.setTweetsArr,r=e.setNotCard;j({page:t,limit:a}).then((function(e){s(1===t?e:function(t){return[].concat((0,F.Z)(t),(0,F.Z)(e))}),e.length<3&&r(!0)}))}({page:m,limit:3,setTweetsArr:d,setNotCard:A}):"follow"===B?function(e){var t=e.setTweetsArr,a=e.pageFollowStart,s=e.pageFollowFinish,r=e.setNotCard;Z().then((function(e){var n=e.filter((function(e){return!0===e.followersFlag})).slice(a,s);t(n),n.length%3!==0&&r(!0)}))}({pageFollowStart:0,pageFollowFinish:y,setTweetsArr:d,setNotCard:A}):"followings"===B&&function(e){var t=e.setTweetsArr,a=e.pageFollowStart,s=e.pageFollowFinish,r=e.setNotCard;Z().then((function(e){var n=e.filter((function(e){return!1===e.followersFlag})).slice(a,s);t(n),n.length%3!==0&&r(!0)}))}({pageFollowStart:0,pageFollowFinish:y,setTweetsArr:d,setNotCard:A})}),[m,B,y]);var Y=null!==(e=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{type:"button",className:l,children:(0,h.jsx)(r.OL,{to:Y,className:i,children:"Go back"})}),(0,h.jsx)(T,{onChange:function(e){var t=e.value;d([]),p(1),k(t),L(3),A(!1)}}),(0,h.jsx)(x,{tweetsArr:g,page:m,limit:3,setTweetsArr:d,setNotCard:A}),!b&&g.length&&(0,h.jsx)("button",{type:"button",className:l,onClick:function(){p(m+1),"follow"===B&&L(y+3),"followings"===B&&L(y+3)},children:(0,h.jsx)("div",{className:i,children:"Load More"})})]})}},726:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAABsUlEQVRYhe2YsXKDMAyGMyRDGLow0AGGLAztkAxkyNAOYfCS93+drwMmpwpDUSCF3Jm7/3IRMpY/ZNlmA9xWoBrYbgYu4LiCOG+bpQMQqiIwu8oIzK4sArPJAUkEZlNnEXg1YA4ogRRI/G8OXHr8v4ED8Cb8T8bgqgnAKt9vAnwKeyrsIaVzALsC+4FiXCr/ocK9988bO/BStLUAO/XE15nqgfgmAfsFC9i1WSNsVShQ4Z8EgnKGwRczAnv3WZQipryw5VOByY4TNdCPQHZJuAdhrxVk3W5Izvc9BzCpZGxWWYClouO2XpX+TUg54EvB1c+6qDc6OkgPvDL4LwZMZkVbe+4Q1b2/gNRqWlqAXelfYFYFLJRhhc+gnQLmxP8d3Tr1aIY5P6iXmJJyldIrXKaAacCFyhBZ3yyDzx9osxiwzq7bZ5feVLbALsq+7Wk/dpWce1vxdGA31Aqnr0BARw1UwapHBndWbV8GmASR0dSfjGZb0ZcpNc22Ih3pr3XV0I3AapqTxYnm1BHyqfz987OA/ZccgZOFEdjTtEZg8fOOQfEDokHnPlgRWFedIr9WYD8BzNfcBpFCnAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=640.b85ac888.chunk.js.map