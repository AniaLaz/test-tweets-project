"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[125],{125:function(e,t,s){s.r(t),s.d(t,{Tweets:function(){return N},fetch:function(){return B}});var a=s(439),r=s(433),n=s(87),o=s(689),c=s(791),i={tweetsContainer:"TweetsCards_tweetsContainer__jlPBa",tweetsList:"TweetsCards_tweetsList__M03fF",item:"TweetsCards_item__h5Bby",text:"TweetsCards_text__u0veQ",textBottom:"TweetsCards_textBottom__VfjXA",imgFon:"TweetsCards_imgFon__sCPB8",imgString:"TweetsCards_imgString__DhJRS",imgRingBox:"TweetsCards_imgRingBox__nUY7b",imgRingPhoto:"TweetsCards_imgRingPhoto__41WU8",imgRin:"TweetsCards_imgRin__XFy8B",avatar:"TweetsCards_avatar__CeXwj",logo:"TweetsCards_logo__fCZBi",boxBottom:"TweetsCards_boxBottom__+Nhp4",button:"TweetsCards_button__SerPK",buttonTrue:"TweetsCards_buttonTrue__FLZBl"},l=s(861),u=s(757),d=s.n(u),g=s(243),m=s(726);var f=s.p+"static/media/pictureFone_opt.dd7094b01bbf0f6eb73eb0a216fc6fb9.svg";var w=s.p+"static/media/rectangle.90e23cf44c8259d5b2f74d75abbbd5cd.svg";var b=s.p+"static/media/ring.cf73322ac91036f99e3ae778c55a4a05.svg";var p=s.p+"static/media/boy.ac85bc0b7eed23122fbe99f9bbfb2c62.svg",x=s(184),_=function(e){var t=e.user,s=e.id,r=e.tweets,n=e.followers,o=e.avatar,u=e.followersFlag,_=(0,c.useState)(!1),A=(0,a.Z)(_,2),v=A[0],h=A[1],C=(0,c.useState)(!1),B=(0,a.Z)(C,2),N=B[0],T=B[1];(0,c.useEffect)((function(){h(u),T(n)}),[u,n]);var j=function(){var e=(0,l.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,v){e.next=10;break}return console.log(v),console.log(n),console.log(N),e.next=7,g.Z.put("/users/".concat(t),{followers:N-1,followersFlag:!0});case 7:T(N-1),e.next=13;break;case 10:return e.next=12,g.Z.put("/users/".concat(t),{followers:N+1,followersFlag:!1});case 12:T(N+1);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsxs)("li",{className:i.item,children:[(0,x.jsx)("button",{type:"button",className:i.logo,children:(0,x.jsx)("img",{src:m,alt:"fone"})}),(0,x.jsx)("img",{src:f,alt:"fone",className:i.imgFon}),(0,x.jsx)("img",{src:w,alt:"fone",className:i.imgString}),(0,x.jsxs)("div",{className:i.imgRingBox,children:[(0,x.jsxs)("div",{className:i.imgRingPhoto,children:[o?(0,x.jsx)("img",{src:o,alt:t,className:i.avatar}):(0,x.jsx)("img",{src:p,alt:t,className:i.avatar}),(0,x.jsx)("img",{src:o,alt:t,className:i.avatar})]}),(0,x.jsx)("img",{src:b,alt:"fone",className:i.imgRing})]}),(0,x.jsxs)("div",{className:i.boxBottom,children:[(0,x.jsxs)("div",{className:i.text,children:[r," tweets"]}),N?(0,x.jsxs)("div",{className:i.textBottom,children:[N.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," ","followers"]}):(0,x.jsxs)("div",{className:i.textBottom,children:[n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," ","followers"]}),v?(0,x.jsx)("button",{type:"button",className:i.button,onClick:function(){h(!1),j(s)},children:"follow"}):(0,x.jsx)("button",{type:"button",className:i.buttonTrue,onClick:function(){h(!0),j(s)},children:"following"})]})]})},A=function(e){var t=e.tweetsArr;return(0,x.jsxs)("div",{className:i.tweetsContainer,children:[(0,x.jsx)("h2",{children:"TweetsCards"}),(0,x.jsx)("ul",{className:i.tweetsList,children:t.map((function(e){return(0,x.jsx)(_,{user:e.user,id:e.id,tweets:e.tweets,followers:e.followers,avatar:e.avatar,followersFlag:e.followersFlag},e.id)}))})]})},v="Tweets_btnBack__MaIJx",h="Tweets_btnBackText__3EUHW";g.Z.defaults.baseURL="https://63bc0c08fa38d30d85b994d7.mockapi.io";var C=function(){var e=(0,l.Z)(d().mark((function e(t){var s,a,r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.page,a=t.limit,e.prev=1,e.next=4,g.Z.get("/users?page=".concat(s,"&limit=").concat(a));case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),B=function(e){var t=e.page,s=e.limit,a=e.setTweetsArr,n=e.setNotCard;C({page:t,limit:s}).then((function(e){a(1===t?e:function(t){return[].concat((0,r.Z)(t),(0,r.Z)(e))}),0===e.length&&n(!0)}))},N=function(){var e,t,s=(0,o.TH)(),r=(0,c.useState)([]),i=(0,a.Z)(r,2),l=i[0],u=i[1],d=(0,c.useState)(1),g=(0,a.Z)(d,2),m=g[0],f=g[1],w=(0,c.useState)(!1),b=(0,a.Z)(w,2),p=b[0],_=b[1];(0,c.useEffect)((function(){B({page:m,limit:3,setTweetsArr:u,setNotCard:_})}),[m]);var C=null!==(e=null===(t=s.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,x.jsxs)("div",{children:[(0,x.jsx)("button",{type:"button",className:v,children:(0,x.jsx)(n.OL,{to:C,className:h,children:"Go back"})}),(0,x.jsx)(A,{tweetsArr:l,page:m,limit:3,setTweetsArr:u,setNotCard:_}),!p&&(0,x.jsx)("button",{type:"button",className:v,onClick:function(){f(m+1)},children:(0,x.jsx)("div",{className:h,children:"Load More"})})]})}},726:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAABsUlEQVRYhe2YsXKDMAyGMyRDGLow0AGGLAztkAxkyNAOYfCS93+drwMmpwpDUSCF3Jm7/3IRMpY/ZNlmA9xWoBrYbgYu4LiCOG+bpQMQqiIwu8oIzK4sArPJAUkEZlNnEXg1YA4ogRRI/G8OXHr8v4ED8Cb8T8bgqgnAKt9vAnwKeyrsIaVzALsC+4FiXCr/ocK9988bO/BStLUAO/XE15nqgfgmAfsFC9i1WSNsVShQ4Z8EgnKGwRczAnv3WZQipryw5VOByY4TNdCPQHZJuAdhrxVk3W5Izvc9BzCpZGxWWYClouO2XpX+TUg54EvB1c+6qDc6OkgPvDL4LwZMZkVbe+4Q1b2/gNRqWlqAXelfYFYFLJRhhc+gnQLmxP8d3Tr1aIY5P6iXmJJyldIrXKaAacCFyhBZ3yyDzx9osxiwzq7bZ5feVLbALsq+7Wk/dpWce1vxdGA31Aqnr0BARw1UwapHBndWbV8GmASR0dSfjGZb0ZcpNc22Ih3pr3XV0I3AapqTxYnm1BHyqfz987OA/ZccgZOFEdjTtEZg8fOOQfEDokHnPlgRWFedIr9WYD8BzNfcBpFCnAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=125.80844c94.chunk.js.map