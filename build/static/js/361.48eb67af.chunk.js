"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[361],{1361:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var s=t(9439),i=t(2791),r=t(9434),c=t(2072),l=t(7689),a=t(6171),d=t(4515),u=t(184),h=function(e){var n=e.galleries,t=e.deleteGallery,s=(0,l.s0)();return(0,u.jsxs)("table",{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"#"}),(0,u.jsx)("th",{children:"\u0414\u0430\u0442\u0430"}),(0,u.jsx)("th",{children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),(0,u.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),(0,u.jsx)("th",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c"}),(0,u.jsx)("th",{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0433\u0430\u043b\u0435\u0440\u0435\u0438"}),(0,u.jsx)("th",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u043b\u044c\u0431\u043e\u043c\u043e\u0432"}),(0,u.jsx)("th",{children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0433\u0430\u043b\u0435\u0440\u0435\u0438"})]})}),(0,u.jsx)("tbody",{children:n.map((function(e,n){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:n+1}),(0,u.jsx)("td",{children:new Date(e.date).toLocaleDateString()}),(0,u.jsx)("td",{children:(0,u.jsx)("img",{className:d.Z.td__news__image,src:"".concat("https://bike-caucasus.ru","/").concat(e.urlCover),alt:"news"})}),(0,u.jsx)("td",{className:d.Z.align__left,children:e.name}),(0,u.jsx)("td",{children:e.creatorId.username}),(0,u.jsx)("td",{children:(0,u.jsx)(a.Z,{getClick:function(){return s(e._id)},additionalClasses:"td__link",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),(0,u.jsx)("td",{children:(0,u.jsx)(a.Z,{getClick:function(){return s("albums/".concat(e._id))},additionalClasses:"td__link",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),(0,u.jsx)("td",{children:(0,u.jsx)(a.Z,{getClick:function(){return t(e._id,e.name)},additionalClasses:"td__link warning",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]},e._id)}))})]})},o=t(1882),x=t(6626),_=function(){var e=(0,i.useState)([]),n=(0,s.Z)(e,2),t=n[0],l=n[1],a=(0,i.useState)(!1),d=(0,s.Z)(a,2),_=d[0],j=d[1],f=(0,r.I0)();(0,i.useEffect)((function(){(0,c.Fo)().then((function(e){l(e.data.galleries)}))}),[_]);return(0,u.jsxs)("section",{className:x.Z.wrapper,children:[(0,u.jsx)("h2",{className:x.Z.title,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0430\u043b\u0435\u0440\u0435\u0438"}),(0,u.jsx)(h,{galleries:t,deleteGallery:function(e,n){if(!window.confirm('\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0433\u0430\u043b\u0435\u0440\u0435\u044e "'.concat(n,'"?\n\u0412\u0441\u0435 \u0430\u043b\u044c\u0431\u043e\u043c\u044b \u0438 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0438\u0437 \u0434\u0430\u043d\u043d\u043e\u0439 \u0433\u0430\u043b\u0435\u0440\u0435\u0438 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b, \u0431\u0435\u0437 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0438\u0445 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f!')))return f((0,o.u)({message:'\u041e\u0442\u043c\u0435\u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0433\u0430\u043b\u0435\u0440\u0435\u0438 "'.concat(n,'"'),type:"warning",isOpened:!0}));(0,c.Dg)(e).then((function(e){var n;f((0,o.u)({message:null===(n=e.data)||void 0===n?void 0:n.message,type:"success",isOpened:!0}))})).catch((function(e){f((0,o.u)({message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0433\u0430\u043b\u0435\u0440\u0435\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435!",type:"error",isOpened:!0}))})).finally((function(){return j((function(e){return!e}))}))}})]})}},6626:function(e,n){n.Z={wrapper:"NewsCreate_wrapper__3beFw",title:"NewsCreate_title__W7Lp3",box__buttons:"NewsCreate_box__buttons__hvllH"}}}]);
//# sourceMappingURL=361.48eb67af.chunk.js.map