"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[202],{1202:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(2791),s=n(9439),i=n(9434),c=n(7689),a=n(8106),l=n(6373),d=n(8559),u=n(1882),o=n(6810),h=n(6171),p=n(4515),f=n(8643),x=n(184),j=function(){var e=(0,r.useState)({sortDirection:"up",sortField:"eventDate"}),t=(0,s.Z)(e,2),n=t[0],j=t[1],v=(0,r.useState)([]),_=(0,s.Z)(v,2),m=_[0],Z=_[1],g=(0,r.useState)(!1),k=(0,s.Z)(g,2),S=k[0],w=k[1],y=(0,c.s0)(),C=(0,i.I0)();return(0,r.useEffect)((function(){(0,a.vw)().then((function(e){if(e){var t=(0,o.H)(e,"eventDate","up");Z(t)}}))}),[C,S]),(0,x.jsxs)("table",{children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"col",children:"#"}),(0,x.jsx)(f.Z,{sort:n,setSort:j,data:m,setData:Z,field:"eventDate",children:"\u0414\u0430\u0442\u0430"}),(0,x.jsx)("th",{scope:"col",children:"\u0421\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u0435"}),(0,x.jsx)(d.p,{sizeScreen:"lg",children:(0,x.jsx)("th",{scope:"col",children:"\u0413\u043e\u0440\u043e\u0434"})}),(0,x.jsx)(f.Z,{sort:n,setSort:j,data:m,setData:Z,field:"quantityRiders",children:"\u0423\u0447\u0430\u0441\u0442."}),(0,x.jsx)(d.p,{sizeScreen:"sm",children:(0,x.jsx)("th",{scope:"col",children:"\u0421\u0435\u0433\u043c\u0435\u043d\u0442 \u0432 \u0421\u0442\u0440\u0430\u0432\u0435"})}),(0,x.jsx)("th",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f"}),(0,x.jsx)("th",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"}),(0,x.jsx)("th",{children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435"})]})}),(0,x.jsx)("tbody",{children:m.map((function(e,t){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:t+1}),(0,x.jsx)("td",{children:e.eventDate}),(0,x.jsx)("td",{className:p.Z.align__left,children:e.eventName}),(0,x.jsx)(d.p,{sizeScreen:"lg",children:(0,x.jsx)("td",{children:e.eventCity})}),(0,x.jsx)("td",{children:e.quantityRiders}),(0,x.jsx)(d.p,{sizeScreen:"sm",children:(0,x.jsx)("td",{children:(0,x.jsx)("a",{className:p.Z.link__btn,href:e.segmentStrava,target:"_blank",rel:"noreferrer",children:"Strava"})})}),(0,x.jsx)("td",{children:(0,x.jsx)(h.Z,{getClick:function(){return y(e._id)},additionalClasses:"td__link",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),(0,x.jsx)("td",{children:(0,x.jsx)(h.Z,{getClick:function(){return y("results/".concat(e._id))},additionalClasses:"td__link",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),(0,x.jsx)("td",{children:(0,x.jsx)(h.Z,{getClick:function(){return function(e,t){if(!window.confirm('\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f "'.concat(t,'"')))return C((0,u.u)({message:"\u041e\u0442\u043c\u0435\u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f",type:"warning",isOpened:!0}));(0,l.S)(e).then((function(e){C((0,u.u)({message:e.data.message,type:"success",isOpened:!0})),w((function(e){return!e}))}))}(e._id,e.eventName)},targetClass:"warning",additionalClasses:"td__link",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]},e._id)}))})]})},v="EventsEdit_wrapper__fEFF6",_="EventsEdit_title__H359x",m=function(){return(0,x.jsxs)("section",{className:v,children:[(0,x.jsx)("h2",{className:_,children:"\u0421\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"}),(0,x.jsx)(j,{})]})}},6373:function(e,t,n){n.d(t,{S:function(){return l},c:function(){return c}});var r=n(4165),s=n(5861),i=n(7111);function c(e,t){return a.apply(this,arguments)}function a(){return(a=(0,s.Z)((0,r.Z)().mark((function e(t,n){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.G)({method:"POST",url:"/api/protocol",data:{results:t,event:n}});case 3:return s=e.sent,e.abrupt("return",s);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.G)({method:"DELETE",url:"/api/event",data:{eventId:t}});case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=202.7597f50b.chunk.js.map