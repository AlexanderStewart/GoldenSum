(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{195:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Le}));var n=r(0),l=r(122),a=r(16),c=r.n(a),o=r(155),s=r.n(o),u=r(5),i=r(17),d=r.n(i),f=r(8),b=r.n(f),x=r(106),h=r(9),j=Object(n.createContext)();var g,m,O,p,v,y,w,C,I,S,P,k,L,T,E,N,V,z,R,A,H,G,D,J,W,Y=function(e){var t=Object(x.default)(),r=t.width,l=t.height,a=Object(n.useState)({open:!1}),c=b()(a,2),o=c[0],s=c[1],u=Object(n.useState)({open:!1}),i=b()(u,2),d={width:r,height:l,play:o,setPlay:s,howToPlay:i[0],setHowToPlay:i[1]};return Object(h.jsx)(j.Provider,{value:d,children:e.children})},B=r(280),F=r(273),U=r(11),q=r.n(U),K=r(15),M=r.n(K),Q=r(65),X=r(26),Z=r(41),$=r(40),_=r(69),ee=r(132);function te(e){var t=Object(n.useContext)(j).height,r=e.num;parseInt(r)>999&&(r="x");var l=e.index,a=e.color,o=e.textColor,s=e.reset,i=Object(n.useState)(!1),f=b()(i,2),x=f[0],O=f[1],p=Object(n.useState)(!1),v=b()(p,2),y=v[0],w=v[1],C=t/800,I=Object(ee.useSpring)({opacity:x?.75:1,height:x||y?55*C:80*C,marginTop:x||y?16.5*C:4,config:x?{mass:1,tension:170,friction:10}:{mass:1,tension:170,friction:26,duration:100},onRest:function(){w(!1)}});Object(n.useEffect)((function(){"#c7d2fe"===a&&w(!0)}),[a]),Object(n.useEffect)((function(){s&&w(!0)}),[s]);return Object(h.jsx)(u.default,{children:Object(h.jsx)(u.default,{children:Object(h.jsx)(Z.default,{onPress:function(){e.tilePressed(l)},onPressIn:function(){return O(!0)},onPressOut:function(){return O(!1)},children:Object(h.jsx)(ee.animated.View,{style:[I,d()(g||(g=c()(["rounded-full justify-center items-center"]))),{margin:4,width:54,backgroundColor:a}],children:Object(h.jsx)(X.default,{style:[d()(m||(m=c()(["font-extrabold text-2xl"]))),{color:o}],children:r})})})})})}function re(){for(var e=[],t=1;t<26;t++)e.push({index:t,number:"",color:"#e4e4e7"});return e[6].color="#fda4af",e[7].color="#f9a8d4",e[8].color="#f0abfc",e[6].number="Y",e[7].number="O",e[8].number="U",e[11].color="#c4b5fd",e[12].color="#a5b4fc",e[13].color="#5eead4",e[11].number="W",e[12].number="I",e[13].number="N",e[17].color="#fbbf24",e[17].number="!",e}var ne,le,ae,ce,oe,se,ue,ie,de,fe,be,xe,he,je,ge,me,Oe=function(){var e=Object(n.useContext)(j),t=e.height,r=e.setHowToPlay,l=Object(n.useState)([]),a=b()(l,2),o=a[0],s=a[1],i=Object(n.useState)(0),f=b()(i,2),x=f[0],g=f[1],m=Object(n.useState)([]),Y=b()(m,2),B=Y[0],F=Y[1],U=Object(n.useState)([]),K=b()(U,2),ee=K[0],ne=K[1],le=Object(n.useState)(!1),ae=b()(le,2),ce=ae[0],oe=ae[1],se=Object(n.useState)(null),ue=b()(se,2),ie=ue[0],de=ue[1],fe=Object(n.useState)(null),be=b()(fe,2),xe=be[0],he=be[1],je=Object(n.useState)(!1),ge=b()(je,2),me=ge[0],Oe=ge[1],pe=function(){var e,t,r;return M.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.a.awrap($.default.getItem("level"));case 2:if(n.t0=n.sent,null!==n.t0){n.next=6;break}return n.next=6,M.a.awrap($.default.setItem("level","1"));case 6:return n.next=8,M.a.awrap($.default.getItem("level"));case 8:return e=n.sent,de(e),n.next=12,M.a.awrap($.default.getItem("highestLevel"));case 12:if(n.t1=n.sent,null!==n.t1){n.next=16;break}return n.next=16,M.a.awrap($.default.setItem("highestLevel","1"));case 16:return n.next=18,M.a.awrap($.default.getItem("highestLevel"));case 18:t=n.sent,he(t),F([]),oe(!1),g(0),r=ve(e),s(r),Oe(!0);case 26:case"end":return n.stop()}}),null,null,null,Promise)},ve=function(e){return function(e){for(var t=e.level,r=parseInt(t),n=[],l=1;l<26;l++)n.push({index:l,number:"",color:"#e4e4e7",textColor:"#6b7280",active:!1,selected:!1,highlighted:!1,goal:!1});return n[12].color="#fcd34d",n[17].color="#fcd34d",n[12].number="1",n[17].number="2",n[12].active=!0,n[17].active=!0,1===r&&(n[21].number="5",n[21].goal=!0,n[21].textColor="#94a3b8"),2===r&&(n[6].number="6",n[6].goal=!0,n[6].textColor="#94a3b8"),3===r&&(n[2].number="8",n[2].goal=!0,n[2].textColor="#94a3b8"),4===r&&(n[15].number="5",n[15].goal=!0,n[15].textColor="#94a3b8"),5===r&&(n[19].number="6",n[19].goal=!0,n[19].textColor="#94a3b8"),6===r&&(n[7].number="7",n[7].goal=!0,n[7].textColor="#94a3b8"),7===r&&(n[24].number="8",n[24].goal=!0,n[24].textColor="#94a3b8"),8===r&&(n[5].number="7",n[5].goal=!0,n[5].textColor="#94a3b8"),9===r&&(n[11].number="8",n[11].goal=!0,n[11].textColor="#94a3b8"),10===r&&(n[18].number="7",n[18].goal=!0,n[18].textColor="#94a3b8"),11===r&&(n[8].number="9",n[8].goal=!0,n[8].textColor="#94a3b8"),12===r&&(n[22].number="8",n[22].goal=!0,n[22].textColor="#94a3b8"),13===r&&(n[21].number="9",n[21].goal=!0,n[21].textColor="#94a3b8"),14===r&&(n[19].number="9",n[19].goal=!0,n[19].textColor="#94a3b8"),15===r&&(n[13].number="11",n[13].goal=!0,n[13].textColor="#94a3b8"),16===r&&(n[5].number="10",n[5].goal=!0,n[5].textColor="#94a3b8"),17===r&&(n[18].number="12",n[18].goal=!0,n[18].textColor="#94a3b8"),18===r&&(n[8].number="10",n[8].goal=!0,n[8].textColor="#94a3b8"),19===r&&(n[7].number="13",n[7].goal=!0,n[7].textColor="#94a3b8"),20===r&&(n[9].number="11",n[9].goal=!0,n[9].textColor="#94a3b8"),21===r&&(n[5].number="12",n[5].goal=!0,n[5].textColor="#94a3b8"),22===r&&(n[19].number="13",n[19].goal=!0,n[19].textColor="#94a3b8"),23===r&&(n[20].number="11",n[20].goal=!0,n[20].textColor="#94a3b8"),24===r&&(n[4].number="12",n[4].goal=!0,n[4].textColor="#94a3b8"),25===r&&(n[5].number="13",n[5].goal=!0,n[5].textColor="#94a3b8"),26===r&&(n[15].number="14",n[15].goal=!0,n[15].textColor="#94a3b8"),27===r&&(n[7].number="15",n[7].goal=!0,n[7].textColor="#94a3b8"),28===r&&(n[19].number="15",n[19].goal=!0,n[19].textColor="#94a3b8"),29===r&&(n[13].number="14",n[13].goal=!0,n[13].textColor="#94a3b8"),30===r&&(n[3].number="16",n[3].goal=!0,n[3].textColor="#94a3b8"),n}({level:parseInt(e)})},ye=function(e,t){return!(!e||!t)&&(e>=2&&e<=4?e+1===t||e-1===t||e+5===t:6===e||11===e||16===e?e+1===t||e-5===t||e+5===t:e>=22&&e<=24?e+1===t||e-1===t||e-5===t:10===e||15===e||20===e?e-1===t||e-5===t||e+5===t:1===e?2===t||6===t:5===e?4===t||10===t:21===e?22===t||16===t:25===e?24===t||20===t:e+1===t||e-1===t||e-5===t||e+5===t)},we=function(e){for(var t=[],r=0;r<e.length;r++)e[r].selected&&t.push(r+1);for(var n=0;n<2;n++)t[n]+1<=24&&ye(t[n],t[n]+1)&&!e[t[n]+1-1].active&&(e[t[n]+1-1].highlighted=!0,e[t[n]+1-1].color="#c7d2fe"),t[n]-1<=24&&ye(t[n],t[n]-1)&&!e[t[n]-1-1].active&&(e[t[n]-1-1].highlighted=!0,e[t[n]-1-1].color="#c7d2fe"),t[n]+5<=24&&ye(t[n],t[n]+5)&&!e[t[n]+5-1].active&&(e[t[n]+5-1].highlighted=!0,e[t[n]+5-1].color="#c7d2fe"),t[n]-5<=24&&ye(t[n],t[n]-5)&&!e[t[n]-5-1].active&&(e[t[n]-5-1].highlighted=!0,e[t[n]-5-1].color="#c7d2fe");return e},Ce=function(e){var t,r,n,l,a,c,u,i,d,f,b,h,j,m,O;return M.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(t=o[e-1],r=x,t.active&&g(r=x+1),!t.active||!t.selected){p.next=10;break}for(n=q()(o),l=0;l<n.length;l++)n[l].selected=!1,n[l].active?n[l].color="#fcd34d":n[l].active||(n[l].color="#e4e4e7");g(0),s(n),p.next=61;break;case 10:if(t.active){p.next=44;break}for(a=q()(o),c=[],u=0;u<a.length;u++)a[u].selected&&c.push(u);if(!ye(c[0]+1,c[1]+1)){p.next=41;break}if(!ye(c[0]+1,e)&&!ye(c[1]+1,e)){p.next=41;break}if(i=(parseInt(a[c[0]].number)+parseInt(a[c[1]].number)).toString(),!a[e-1].goal){p.next=33;break}if(i!==t.number){p.next=31;break}return p.next=21,M.a.awrap($.default.getItem("level"));case 21:return d=p.sent,f=(parseInt(d)+1).toString(),p.next=25,M.a.awrap($.default.setItem("level",f));case 25:return p.next=27,M.a.awrap($.default.setItem("highestLevel",f));case 27:return oe(!0),b=re(),s(b),p.abrupt("return");case 31:p.next=39;break;case 33:a[e-1].number=i,a[e-1].color="#fcd34d",a[e-1].active=!0,(h=q()(B)).push(e-1),F(h);case 39:for(j=0;j<a.length;j++)a[j].selected=!1,a[j].active?a[j].color="#fcd34d":a[j].active||(a[j].color="#e4e4e7");g(0);case 41:s(a),p.next=61;break;case 44:if(!(r<=3)){p.next=61;break}if(m=q()(o),!t.active){p.next=60;break}if(m[e-1].color="#86efac",m[e-1].selected=!0,2===r&&(m=we(m)),3!==r){p.next=60;break}O=0;case 52:if(!(O<m.length)){p.next=59;break}if(O!==e-1){p.next=55;break}return p.abrupt("continue",56);case 55:m[O].selected?(m[O].color="#fcd34d",m[O].selected=!1):m[O].active||(m[O].color="#e4e4e7");case 56:O++,p.next=52;break;case 59:g(1);case 60:s(m);case 61:case"end":return p.stop()}}),null,null,null,Promise)};return Object(n.useEffect)((function(){pe()}),[]),Object(n.useEffect)((function(){setTimeout((function(){Oe(!1)}),200)}),[me]),Object(h.jsxs)(u.default,{style:[{userSelect:"none"},d()(p||(p=c()(["flex flex-1 w-full h-full"])))],children:[Object(h.jsx)(u.default,{style:d()(v||(v=c()(["absolute flex flex-1 left-0 right-0 top-0 items-center z-40"]))),children:Object(h.jsxs)(Q.default,{children:[Object(h.jsx)(X.default,{style:[d()(y||(y=c()(["mt-8 font-extrabold text-4xl text-center"]))),{color:"#fbbf24"}],children:"Golden Sum"}),Object(h.jsx)(u.default,{style:d()(w||(w=c()(["content-center items-center mt-2"]))),children:Object(h.jsx)(u.default,{style:d()(C||(C=c()(["h-2 w-12 bg-green-300"])))})}),Object(h.jsxs)(u.default,{style:d()(I||(I=c()(["flex justify-center items-center flex-row mt-1 z-50"]))),children:[Object(h.jsx)(Z.default,{style:d()(S||(S=c()(["px-6 z-50"]))),onPress:function(){return function(){var e,t;return M.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=parseInt,r.next=3,M.a.awrap($.default.getItem("level"));case 3:if(r.t1=r.sent,!((e=(0,r.t0)(r.t1))>1)){r.next=11;break}return t=e-1,r.next=9,M.a.awrap($.default.setItem("level",t.toString()));case 9:de(e-1),pe();case 11:case"end":return r.stop()}}),null,null,null,Promise)}()},children:Object(h.jsx)(_.ArrowNarrowLeftIcon,{width:45,height:45,color:"#71717a"})}),Object(h.jsx)(u.default,{children:Object(h.jsxs)(X.default,{style:[d()(P||(P=c()(["font-bold text-2xl text-center"]))),{color:"#71717a"}],children:["LEVEL ",ie]})}),Object(h.jsx)(Z.default,{style:d()(k||(k=c()(["px-6"]))),onPress:function(){return function(){var e,t;return M.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,M.a.awrap($.default.getItem("highestLevel"));case 2:return e=r.sent,r.next=5,M.a.awrap($.default.getItem("level"));case 5:if(t=r.sent,!(parseInt(t)<30&&t<e)){r.next=11;break}return r.next=9,M.a.awrap($.default.setItem("level",(parseInt(t)+1).toString()));case 9:de(parseInt(t)+1),pe();case 11:case"end":return r.stop()}}),null,null,null,Promise)}()},children:Object(h.jsx)(_.ArrowNarrowRightIcon,{width:45,height:45,color:"#71717a"})})]})]})}),Object(h.jsx)(u.default,{style:[d()(L||(L=c()(["flex justify-center items-center z-0"]))),{height:t}],children:Object(h.jsx)((function(){var e=o.map((function(e){return Object(h.jsx)(te,{index:e.index,num:e.number,color:e.color,textColor:e.textColor,tilePressed:Ce,reset:me},e.index.toString())}));return Object(h.jsx)(u.default,{style:[d()(O||(O=c()(["flex flex-row flex-wrap mt-4"]))),{maxWidth:310}],children:e})}),{})}),Object(h.jsx)(u.default,{style:d()(T||(T=c()(["absolute flex left-0 right-0 bottom-0 items-center"]))),children:Object(h.jsxs)(Q.default,{children:[Object(h.jsxs)(u.default,{style:d()(E||(E=c()(["flex justify-center items-center flex-row z-40"]))),children:[Object(h.jsx)(Z.default,{style:d()(N||(N=c()(["px-6"]))),onPress:function(){return function(){if(0!==B.length){var e=B[B.length-1],t=q()(o),r=q()(B),n=r.pop();F(r);var l=q()(ee);l.push({index:n,num:t[e].number}),ne(l),t[e].number="",t[e].color="#e4e4e7",t[e].active=!1,t[e].selected=!1;for(var a=0;a<t.length;a++)t[a].highlighted&&!t[a].active&&(t[a].highlighted=!1,t[a].color="#e4e4e7"),t[a].selected&&(t[a].selected=!1,t[a].color="#fcd34d");g(0),s(t)}}()},children:Object(h.jsx)(_.ArrowCircleLeftIcon,{width:45,height:45,color:"#71717a"})}),Object(h.jsx)(Z.default,{style:d()(V||(V=c()(["px-6"]))),onPress:function(){return pe()},children:Object(h.jsx)(_.RefreshIcon,{width:45,height:45,color:"#71717a"})}),Object(h.jsx)(Z.default,{style:d()(z||(z=c()(["px-6"]))),onPress:function(){return function(){if(0!==ee.length){var e=ee[ee.length-1],t=q()(o),r=q()(ee),n=r.pop();ne(r);var l=q()(B);l.push(n.index),F(l),t[e.index].number=e.num,t[e.index].color="#fcd34d",t[e.index].active=!0,t[e.index].selected=!1;for(var a=0;a<t.length;a++)t[a].highlighted&&(t[a].highlighted=!1,t[a].color="#e4e4e7"),t[a].selected&&(t[a].selected=!1,t[a].color="#fcd34d");g(0),s(t)}}()},children:Object(h.jsx)(_.ArrowCircleRightIcon,{width:45,height:45,color:"#71717a"})})]}),Object(h.jsx)(u.default,{style:d()(R||(R=c()(["mb-6"])))}),Object(h.jsxs)(u.default,{style:d()(A||(A=c()(["flex justify-center items-center flex-row"]))),children:[Object(h.jsx)(Z.default,{onPress:function(){return r({open:!0})},children:Object(h.jsx)(u.default,{style:[d()(H||(H=c()(["mx-1 px-4 py-2 bg-white rounded-md border-2 justify-center items-center"]))),{borderColor:"#fbbf24"}],children:Object(h.jsx)(X.default,{style:[d()(G||(G=c()(["text-base font-bold"]))),{color:"#71717a"}],children:"How to Play"})})}),Object(h.jsx)(Z.default,{onPress:function(){return M.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ce){e.next=9;break}if(ie!==xe){e.next=5;break}return e.next=4,M.a.awrap($.default.setItem("highestLevel",(parseInt(xe)+1).toString()));case 4:he(parseInt(xe)+1);case 5:return e.next=7,M.a.awrap($.default.setItem("level",(parseInt(ie)+1).toString()));case 7:de(parseInt(ie)+1),pe();case 9:case"end":return e.stop()}}),null,null,null,Promise)},children:Object(h.jsx)(u.default,{style:[d()(D||(D=c()(["mx-1 px-4 py-2 bg-white rounded-md border-2 w-32 justify-center items-center"]))),ce?{borderColor:"#86efac"}:{borderColor:"#d4d4d8"}],children:Object(h.jsx)(X.default,{style:[d()(J||(J=c()(["text-base font-bold"]))),ce?{color:"#71717a"}:{color:"#d4d4d8"}],children:"Next Level"})})})]}),Object(h.jsx)(u.default,{style:d()(W||(W=c()(["mb-4"])))})]})})]})},pe=r(12),ve=r(30),ye=(ve.default.get("window").width,ve.default.get("window").height),we=function(e){pe.default.timing(e,{toValue:ye,duration:150,useNativeDriver:!0}).start()};function Ce(){var e=Object(n.useContext)(j),t=e.howToPlay,r=e.setHowToPlay,l=e.height,a=(e.width,Object(n.useState)(!1)),o=b()(a,2),s=o[0],i=o[1],f=Object(n.useRef)(new pe.default.Value(l)).current;return Object(n.useEffect)((function(){i(null==t?void 0:t.open)}),[null==t?void 0:t.open]),Object(n.useEffect)((function(){var e;s?(e=f,pe.default.timing(e,{toValue:0,duration:150,useNativeDriver:!0}).start()):we(f)}),[s]),s?Object(h.jsx)(pe.default.View,{style:[{flex:1},d()(ne||(ne=c()(["absolute top-0 left-0 h-full w-full z-50 flex bg-black bg-opacity-80 "])))],children:Object(h.jsxs)(pe.default.View,{style:[{transform:[{translateY:f}]},d()(le||(le=c()(["flex flex-1"])))],children:[Object(h.jsx)(Z.default,{onPress:function(e){we(f),setTimeout((function(){r({open:!1})}),150)},style:d()(ae||(ae=c()(["flex flex-1"])))}),Object(h.jsx)(u.default,{style:[d()(ce||(ce=c()(["absolute bottom-0 left-0 w-full bg-white rounded-t-3xl px-4 flex justify-center items-center"]))),{height:l-128}],children:Object(h.jsx)(Q.default,{children:Object(h.jsxs)(u.default,{style:d()(oe||(oe=c()(["m-8"]))),children:[Object(h.jsxs)(X.default,{style:d()(se||(se=c()(["text-gray-800 text-lg\t"]))),children:[Object(h.jsx)(X.default,{style:d()(ue||(ue=c()(["font-bold"]))),children:"Step 1"}),": Select any two yellow circles that are beside each other.","\n"]}),Object(h.jsxs)(X.default,{style:d()(ie||(ie=c()(["text-gray-800 text-lg\t"]))),children:[Object(h.jsx)(X.default,{style:d()(de||(de=c()(["font-bold"]))),children:"Step 2"}),": Select one of the indigo circles that appears.","\n"]}),Object(h.jsxs)(X.default,{style:d()(fe||(fe=c()(["text-gray-800 text-lg\t"]))),children:[Object(h.jsx)(X.default,{style:d()(be||(be=c()(["font-bold"]))),children:"Step 3"}),": The sum of the two selected circles becomes the value of the new circle.","\n"]}),Object(h.jsxs)(X.default,{style:d()(xe||(xe=c()(["text-gray-800 text-lg\t"]))),children:[Object(h.jsx)(X.default,{style:d()(he||(he=c()(["font-bold"]))),children:"Step 4"}),": Fill in the gray numbered circle by matching its value with the value of a new circle.","\n"]}),Object(h.jsxs)(X.default,{style:d()(je||(je=c()(["text-gray-800 text-lg\t"]))),children:[Object(h.jsx)(X.default,{style:d()(ge||(ge=c()(["font-bold"]))),children:"Step 5"}),": Be kind to yourself and remember that each day can be a new beginning."]})]})})})]})}):null}function Ie(e){var t=Object(n.useContext)(j);s()(t);var r=Object(F.default)();return Object(h.jsx)(B.default,{children:Object(h.jsx)(r.Navigator,{screenOptions:{headerShown:!1},initialRouteName:"Golden Sum",children:Object(h.jsx)(r.Screen,{name:"Golden Sum",component:Se})})})}var Se=function(){return Object(h.jsxs)(u.default,{style:d()(me||(me=c()(["flex flex-1 bg-white"]))),children:[Object(h.jsx)(Ce,{}),Object(h.jsx)(Oe,{})]})},Pe=(r(249),Object(n.createContext)());var ke=function(e){var t=Object(n.useState)(null),r=b()(t,2);return r[0],r[1],Object(h.jsx)(Pe.Provider,{value:{},children:e.children})};function Le(){return Object(h.jsx)(l.SafeAreaProvider,{children:Object(h.jsx)(Y,{children:Object(h.jsx)(ke,{children:Object(h.jsx)(Ie,{})})})})}},200:function(e,t,r){e.exports=r(268)}},[[200,1,2]]]);
//# sourceMappingURL=app.9f6f8fd0.chunk.js.map