"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[981],{4079:function(e,t,n){n.d(t,{Z:function(){return a}});n(2791);var r=n(9442),i={box__img:"ImageBox_box__img__760hb",img__info:"ImageBox_img__info__QIBMJ",cross__info:"ImageBox_cross__info__5W7sl",img:"ImageBox_img__pZi5v"},s=n(184),a=function(e){var t=e.pictureUrl,n=e.pictureSource,a=e.setPictureSource,c=null!==t&&void 0!==t&&t.current?"".concat("https://bike-caucasus.ru","/").concat(t.current):n.source;return(0,s.jsx)("div",{className:i.block__picture,children:c?(0,s.jsxs)("div",{className:i.box__img,children:[(0,s.jsx)("img",{className:i.img,src:c,alt:"news"}),(0,s.jsxs)("div",{className:i.img__info,children:[(0,s.jsx)("span",{children:n.name}),(0,s.jsxs)("span",{children:[n.size,"kB"]})]}),(0,s.jsx)("div",{className:i.cross__info,children:(0,s.jsx)(r.Z,{getClick:function(){a({}),t.current=""}})})]}):void 0})}},6078:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(9439),i=n(2791),s=n(9434),a=n(7689),c=n(5208),o=n(1882),u=n(4079),l=n(7023),_=n(6750),d=n(1413),x=n(4165),p=n(5861),m=n(6369),f="InputFileBox_box__input__zVmVg",v="InputFileBox_box__title__Y5cCJ",j=n(184),h=function(e){var t=e.setForm,n=e.pictureUrl,r=e.setPictureSource,i=e.title;return(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)("h2",{className:v,children:i}),(0,j.jsx)(m.Z,{getClick:function(e){var i=e.target.files[0],s=Math.trunc(i.size/8e3),a=new FileReader;a.readAsDataURL(i),a.onload=(0,p.Z)((0,x.Z)().mark((function e(){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.current="",r({source:a.result,name:i.name,size:s});case 2:case"end":return e.stop()}}),e)}))),t((function(e){return(0,d.Z)((0,d.Z)({},e),{},{source:i})}))},children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b"})]})},g=n(7772);var b={inner__picture:"FormNewsEdit_inner__picture__f6yrM",input:"FormNewsEdit_input__pKOyG"},w=function(e){var t,n=e.newsOne,d=e.type,x=(0,i.useState)((function(){var e,t,r,i;return{title:null!==(e=null===n||void 0===n?void 0:n.newsTitle)&&void 0!==e?e:"",textBody:null!==(t=null===n||void 0===n?void 0:n.newsText)&&void 0!==t?t:"",image:null!==(r=null===n||void 0===n?void 0:n.image)&&void 0!==r?r:"",newsId:null!==(i=null===n||void 0===n?void 0:n._id)&&void 0!==i?i:""}})),p=(0,r.Z)(x,2),m=p[0],f=p[1],v=(0,i.useState)({}),w=(0,r.Z)(v,2),Z=w[0],y=w[1],N=(0,i.useRef)(null!==(t=null===n||void 0===n?void 0:n.image)&&void 0!==t?t:""),k=(0,s.I0)(),B=(0,a.s0)();return(0,j.jsxs)("form",{className:b.form,children:[(0,j.jsxs)("div",{className:b.inner__picture,children:[(0,j.jsxs)("div",{className:b.block__picture,children:[(0,j.jsx)(_.Z,{form:m,keyObject:"title",setForm:f,title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0438:"}),(0,j.jsx)(h,{setForm:f,pictureUrl:N,setPictureSource:y,title:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0434\u043b\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u0438:",type:"text"})]}),(0,j.jsx)(u.Z,{pictureUrl:N,pictureSource:Z,setPictureSource:y})]}),(0,j.jsx)(g.Z,{form:m,setForm:f,title:"\u0422\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0441\u0442\u0438:",keyObject:"textBody"}),(0,j.jsx)(l.Z,{sendForm:function(e){if(e.preventDefault(),!!(!m.source&&!N.current)||!m.textBody||!m.title)return k((0,o.u)({message:"\u041d\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b!",type:"warning",isOpened:!0}));var t=function(e,t){var n=new FormData;return n.append("type",t),n.append("newsId",e.newsId),n.append("files",e.source),n.append("title",e.title),n.append("textBody",e.textBody),n}(m,d);(0,c.xs)(t).then((function(e){200===(null===e||void 0===e?void 0:e.status)&&k((0,o.u)({message:e.data.message,type:"success",isOpened:!0})),B(-1)})).catch((function(e){return k((0,o.u)({message:e.response.data.message,type:"error",isOpened:!0}))})).finally((function(){f({title:"",textBody:"",source:""}),y({}),N.current=""}))},title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435!"})]})}},7772:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(4942),i=n(1413),s=(n(2791),n(6074)),a={box__textarea:"TextArea_box__textarea__43r-x",box__interactive:"TextArea_box__interactive__Jvk79",box__title:"TextArea_box__title__iQAgF",textarea:"TextArea_textarea__V56Zd","mr-10":"TextArea_mr-10__ymiKA"},c=n(184),o=function(e){var t=e.form,n=e.setForm,o=e.title,u=e.keyObject,l=e.boxClass;return(0,c.jsxs)("div",{className:"".concat(a.box__textarea," ").concat(a[l]),children:[(0,c.jsx)("h2",{className:a.box__title,children:o}),(0,c.jsxs)("div",{className:a.box__interactive,children:[(0,c.jsx)("textarea",{value:t[u],onChange:function(e){return n((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,r.Z)({},u,e.target.value))}))},className:a.textarea}),(0,c.jsx)(s.Z,{isCompleted:t[u]})]})]})}},6981:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});n(2791);var r=n(6907),i=n(184),s=function(){return(0,i.jsxs)(r.ql,{children:[(0,i.jsx)("link",{rel:"canonical",href:"https://bike-caucasus.ru/create-news"}),(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow, noarchive"}),(0,i.jsx)("meta",{name:"description",content:"\u0424\u043e\u0440\u043c\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u0438, \u0430\u043d\u043e\u043d\u0441\u043e\u0432 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439, \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u0439 \u0438 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u0437\u0430\u0435\u0437\u0434\u043e\u0432."}),(0,i.jsx)("meta",{property:"og:title",content:"\u0424\u043e\u0440\u043c\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u0438"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:url",content:"https://bike-caucasus.ru/create-news"}),(0,i.jsx)("meta",{property:"og:description",content:"\u0424\u043e\u0440\u043c\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u0438, \u0430\u043d\u043e\u043d\u0441\u043e\u0432 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439, \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u0439 \u0438 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u0437\u0430\u0435\u0437\u0434\u043e\u0432."})]})},a=n(6078),c=n(6626),o=function(){return(0,i.jsxs)("section",{className:c.Z.wrapper,children:[(0,i.jsx)(s,{}),(0,i.jsx)("h2",{className:c.Z.title,children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0441\u0430\u0439\u0442\u0430"}),(0,i.jsx)(a.Z,{type:"create"})]})}},6626:function(e,t){t.Z={wrapper:"NewsCreate_wrapper__3beFw",title:"NewsCreate_title__W7Lp3",box__buttons:"NewsCreate_box__buttons__hvllH"}}}]);
//# sourceMappingURL=981.a6000862.chunk.js.map