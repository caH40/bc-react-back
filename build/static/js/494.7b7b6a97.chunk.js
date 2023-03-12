"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[494],{7494:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var i=n(9439),s=n(2791),r=n(9434),l=n(7689),c=n(6373),a=n(8559),d=n(4515),o=n(184),u=function(e){var t=e.event;return(0,o.jsx)(o.Fragment,{children:null!==t&&void 0!==t&&t.eventName?(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"#"}),(0,o.jsx)("th",{children:"\u0414\u0430\u0442\u0430"}),(0,o.jsx)("th",{children:"\u0421\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u0435"}),(0,o.jsx)(a.p,{sizeScreen:"lg",children:(0,o.jsx)("th",{children:"\u0413\u043e\u0440\u043e\u0434"})}),(0,o.jsx)("th",{children:"\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044f"}),(0,o.jsx)("th",{children:"\u0422\u0438\u043f"}),(0,o.jsx)("th",{children:"\u0423\u0447\u0430\u0441\u0442."}),(0,o.jsx)(a.p,{sizeScreen:"sm",children:(0,o.jsx)("th",{children:"\u0421\u0435\u0433\u043c\u0435\u043d\u0442 \u0432 \u0421\u0442\u0440\u0430\u0432\u0435"})})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:1}),(0,o.jsx)("td",{children:t.eventDate}),(0,o.jsx)("td",{className:d.Z.align__left,children:t.eventName}),(0,o.jsx)(a.p,{sizeScreen:"lg",children:(0,o.jsx)("td",{children:t.eventCity})}),(0,o.jsx)("td",{children:t.distance}),(0,o.jsx)("td",{children:t.type}),(0,o.jsx)("td",{children:t.quantityRiders}),(0,o.jsx)(a.p,{sizeScreen:"sm",children:(0,o.jsx)("td",{children:(0,o.jsx)("a",{className:d.Z.link__btn,href:"https://".concat(t.segmentStrava),target:"_blank",rel:"noreferrer",children:"Strava"})})})]},t._id)})]}):void 0})},v=n(6962),h=n(6171),x=n(4045),p=n(4261);var _=n(6369),j=n(6074),f={box__input:"InputFileXlsBox_box__input__0CzB1",box__interactive:"InputFileXlsBox_box__interactive__V2GNx",box__title:"InputFileXlsBox_box__title__EBkgp",file:"InputFileXlsBox_file__fpNXp","mr-10":"InputFileXlsBox_mr-10__hdnsq"},m=function(e){var t=e.setResults,n=e.setEvent,i=e.title,s=e.boxClass,r=(e.keyObject,e.accept),l=e.file,c=e.setFile,a=e.resetRef;return(0,o.jsxs)("div",{className:"".concat(f.box__input," ").concat(f[s]),children:[(0,o.jsx)("h2",{className:f.box__title,children:i}),(0,o.jsxs)("div",{className:f.box__interactive,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(_.Z,{getClick:function(e){var i=e.target.files[0];c(i);var s=new FileReader;s.onload=function(e){var i=e.target.result,s=x.ij(i,{type:"binary"}),r=s.Sheets["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"],l=s.Sheets["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"],c=x.P6.sheet_to_json(r,{range:0,raw:!1}),a=x.P6.sheet_to_json(l,{range:0,raw:!1});t(function(e){var t=[];return e.forEach((function(e){var n={};n._id=(0,p.Z)(),n.place=null===e||void 0===e?void 0:e["\u041c\u0435\u0441\u0442\u043e"],n.number=null===e||void 0===e?void 0:e["\u041d\u043e\u043c\u0435\u0440"],n.athlete=null===e||void 0===e?void 0:e["\u0424\u0418\u041e"],n.athleteCity=null===e||void 0===e?void 0:e["\u0413\u043e\u0440\u043e\u0434"],n.athleteTeam=null===e||void 0===e?void 0:e["\u041a\u043e\u043c\u0430\u043d\u0434\u0430"],n.timeTotal=null===e||void 0===e?void 0:e["\u0412\u0440\u0435\u043c\u044f"],n.distance=null===e||void 0===e?void 0:e["\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044f"],n.\u043c\u0443\u0436\u0441\u043a\u043e\u0439=null===e||void 0===e?void 0:e["\u041f\u043e\u043b"],n.birthday=null===e||void 0===e?void 0:e["\u0413\u043e\u0434 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"],t.push(n)})),t}(c)),n(function(e){var t,n,i,s,r,l;return{eventDate:null===(t=e[0])||void 0===t?void 0:t["\u0414\u0430\u0442\u0430"],eventName:null===(n=e[0])||void 0===n?void 0:n["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"],distance:null===(i=e[0])||void 0===i?void 0:i["\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044f"],type:null===(s=e[0])||void 0===s?void 0:s["\u0422\u0438\u043f \u0437\u0430\u0435\u0437\u0434\u0430"],eventCity:null===(r=e[0])||void 0===r?void 0:r["\u041c\u0435\u0441\u0442\u043e \u0441\u0442\u0430\u0440\u0442\u0430"],segmentStrava:null===(l=e[0])||void 0===l?void 0:l["\u0421\u0435\u0433\u043c\u0435\u043d\u0442 \u0432 \u0421\u0442\u0440\u0430\u0432\u0435"]}}(a))},s.readAsBinaryString(i)},accept:r,resetRef:a,children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b"}),(0,o.jsx)("span",{className:f.file,children:l.name})]}),(0,o.jsx)(j.Z,{isCompleted:l.name})]})]})},b=n(1882),g="Events_wrapper__cDEhu",y="Events_title__2YW0l",Z=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),n=t[0],a=t[1],d=(0,s.useState)({}),x=(0,i.Z)(d,2),p=x[0],_=x[1],j=(0,s.useState)({}),f=(0,i.Z)(j,2),Z=f[0],k=f[1],S=(0,s.useRef)(""),C=(0,l.s0)(),N=(0,r.I0)();return(0,o.jsxs)("section",{className:g,children:[(0,o.jsx)("h2",{className:y,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u0432 \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u0439"}),(0,o.jsx)("article",{}),(0,o.jsx)(m,{file:Z,setFile:k,resetRef:S,setResults:a,event:p,setEvent:_,title:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430  \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 .xlsx",keyObject:"protocol",accept:".xlsx"}),(0,o.jsx)(u,{event:p}),(0,o.jsx)(v.Z,{results:n,setResults:a,removeLink:!0}),n.length?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Z,{getClick:function(){(0,c.c)(n,p).then((function(e){if(201===e.status)return N((0,b.u)({message:"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u0439 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435!",type:"success",isOpened:!0})),void C("/admin/events/edit")})).catch((function(e){N((0,b.u)({message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u043d\u0430\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0435!",type:"error",isOpened:!0}))}))},additionalClasses:"mr-20",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),(0,o.jsx)(h.Z,{getClick:function(){_({}),a([]),k({})},additionalClasses:"mr-20",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]}):void 0]})}},6373:function(e,t,n){n.d(t,{S:function(){return a},c:function(){return l}});var i=n(4165),s=n(5861),r=n(7111);function l(e,t){return c.apply(this,arguments)}function c(){return(c=(0,s.Z)((0,i.Z)().mark((function e(t,n){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,r.G)({method:"POST",url:"/api/protocol",data:{results:t,event:n}});case 3:return s=e.sent,e.abrupt("return",s);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function a(e){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)((0,i.Z)().mark((function e(t){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,r.G)({method:"DELETE",url:"/api/event",data:{eventId:t}});case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=494.7b7b6a97.chunk.js.map