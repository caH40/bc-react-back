"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[697],{6244:function(e,t,s){s.d(t,{Z:function(){return x}});var r=s(4942),n=s(1413),o=(s(2791),s(9442)),i="ImagesURLBox_block__picture__sKz5H",a="ImagesURLBox_box__img__sxZ6w",c="ImagesURLBox_img__info__qUI+W",l="ImagesURLBox_cross__info__Gd8K9",_="ImagesURLBox_img__iB-BE",m=s(184),x=function(e){var t,s=e.form,x=e.setForm,u=e.boxStyle,d=e.keyObject;return(0,m.jsx)("div",{className:i,children:null!==(t=s[d])&&void 0!==t&&t.length?s[d].map((function(e,t){return(0,m.jsxs)("div",{className:a,style:u,children:[(0,m.jsx)("img",{className:_,src:e.source,alt:"news"}),(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)("span",{children:e.name}),(0,m.jsxs)("span",{children:[e.size,"kB"]})]}),(0,m.jsx)("div",{className:l,children:(0,m.jsx)(o.Z,{getClick:function(){return t=e.name,void x((function(e){return(0,n.Z)((0,n.Z)({},e),{},(0,r.Z)({},d,e[d].filter((function(e){return e.name!==t}))))}));var t}})})]},t+e.name)})):void 0})}},8671:function(e,t,s){s.d(t,{Z:function(){return w}});var r=s(1413),n=s(9439),o=s(2791),i=s(9434),a=s(7689),c=s(8180),l=s(1882),_=s(6244),m=s(4942),x=s(9442),u={box__img:"ImageURLBox_box__img__z2yNc",img__info:"ImageURLBox_img__info__iEiEy",cross__info:"ImageURLBox_cross__info__AO1uX",img:"ImageURLBox_img__ifz-a"},d=s(184),f=function(e){var t,s=e.form,n=e.setForm,o=e.keyObject;return(0,d.jsx)("div",{className:u.block__picture,children:null!==(t=s[o])&&void 0!==t&&t.source?(0,d.jsxs)("div",{className:u.box__img,children:[(0,d.jsx)("img",{className:u.img,src:s[o].source,alt:"news"}),(0,d.jsxs)("div",{className:u.img__info,children:[(0,d.jsx)("span",{children:s[o].name}),(0,d.jsxs)("span",{children:[s[o].size,"kB"]})]}),(0,d.jsx)("div",{className:u.cross__info,children:(0,d.jsx)(x.Z,{getClick:function(){n((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,m.Z)({},o,{}))}))}})})]}):void 0})},j=s(7023),b=s(6750),p=s(4165),h=s(3433),v=s(5861),Z=s(5886),k=s(6369),g=s(6074),y="InputFilesURLBox_box__input__261d0",C="InputFilesURLBox_box__interactive__2rJwj",N="InputFilesURLBox_box__title__dAP7U",F=function(e){var t=e.form,s=e.setForm,n=e.title,o=e.boxStyle;return(0,d.jsxs)("div",{className:y,style:o,children:[(0,d.jsx)("h2",{className:N,children:n}),(0,d.jsxs)("div",{className:C,children:[(0,d.jsx)("div",{children:(0,d.jsx)(k.Z,{getClick:function(e){var t=e.target.files;if(t.length)for(var n=function(e){var n=Math.trunc(t[e].size/8e3),o=new FileReader;o.readAsDataURL(t[e]),o.onload=(0,v.Z)((0,p.Z)().mark((function i(){var a;return(0,p.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,Z.M)(o.result,.625,800);case 2:a=i.sent,s((function(s){return(0,r.Z)((0,r.Z)({},s),{},{descPhotos:[].concat((0,h.Z)(s.descPhotos),[{source:a,name:t[e].name,size:n}])})}));case 4:case"end":return i.stop()}}),i)})))},o=0;o<t.length;o++)n(o)},multiple:!0,children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b"})}),(0,d.jsx)(g.Z,{isCompleted:t.descPhotos.length})]})]})},B={box__input:"InputFileTrekBox_box__input__Yjsi4",box__interactive:"InputFileTrekBox_box__interactive__WznKp",box__title:"InputFileTrekBox_box__title__qL7QA",file:"InputFileTrekBox_file__UB7Fo","mr-10":"InputFileTrekBox_mr-10__jzTje"},T=function(e){var t,s=e.fileRef,n=e.setForm,o=e.title,i=e.boxClass,a=e.keyObject;return(0,d.jsxs)("div",{className:"".concat(B.box__input," ").concat(B[i]),children:[(0,d.jsx)("h2",{className:B.box__title,children:o}),(0,d.jsxs)("div",{className:B.box__interactive,children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(k.Z,{getClick:function(e){s.current={source:e.target.files[0]},n((function(t){return(0,r.Z)((0,r.Z)({},t),{},(0,m.Z)({},a,e.target.files[0].name))}))},accept:".gpx, .fit, .tcx",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b"}),(0,d.jsx)("span",{className:B.file,children:null===(t=s.current.source)||void 0===t?void 0:t.name})]}),(0,d.jsx)(g.Z,{isCompleted:s.current})]})]})},O=s(6767),I=s(6433),R=s(7772),U={block:"FormTrailEdit_block__GmAic"};var P={nameRoute:"",state:"",bikeType:"",start:"",turn:"",finish:"",distance:"",ascent:"",descriptionArea:"",cardPhoto:{},fileTrekName:"",urlVideo:"",urlTrekGConnect:"",descPhotos:[]},w=function(e){var t=e.trail,s=e.type,m=(0,o.useState)((function(){if(!t)return P;var e=(0,r.Z)((0,r.Z)({},t),{},{cardPhoto:{source:t.cardPhoto}}),s=t.descPhoto.map((function(e,t){return{source:e,name:"name-".concat(t)}}));return(0,r.Z)((0,r.Z)({},e),{},{descPhoto:t.descPhotos,descPhotos:s})})),x=(0,n.Z)(m,2),u=x[0],p=x[1],h=(0,o.useRef)(t?{old:t.fileTrekName}:""),v=(0,i.I0)(),Z=(0,a.s0)();return(0,d.jsxs)("form",{className:U.form,children:[(0,d.jsxs)("div",{className:U.block,children:[(0,d.jsx)(I.Z,{form:u,setForm:p,keyObject:"state",title:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430:",values:[{id:0,name:""},{id:1,name:"\u041a\u0430\u0432\u041c\u0438\u043d\u0412\u043e\u0434\u044b"},{id:2,name:"\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0441\u0438\u044f"},{id:3,name:"\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f"},{id:4,name:"\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f"},{id:5,name:"\u0410\u0434\u044b\u0433\u0435\u044f"}],boxClass:"mr-10"}),(0,d.jsx)(I.Z,{form:u,setForm:p,keyObject:"bikeType",title:"\u0422\u0438\u043f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438:",values:[{id:0,name:""},{id:1,name:"\u0428\u043e\u0441\u0441\u0435\u0439\u043d\u044b\u0439"},{id:2,name:"\u0413\u043e\u0440\u043d\u044b\u0439"}],boxClass:"mr-10"}),(0,d.jsx)(b.Z,{form:u,setForm:p,keyObject:"nameRoute",title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430:",type:"text",boxClass:"mr-10"}),(0,d.jsx)(b.Z,{form:u,setForm:p,keyObject:"start",title:"\u041c\u0435\u0441\u0442\u043e \u0441\u0442\u0430\u0440\u0442\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430:",type:"text",boxClass:"mr-10"}),(0,d.jsx)(b.Z,{form:u,setForm:p,keyObject:"turn",title:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0437\u0432\u043e\u0440\u043e\u0442\u0430:",type:"text",boxClass:"mr-10"}),(0,d.jsx)(b.Z,{form:u,setForm:p,keyObject:"finish",title:"\u041c\u0435\u0441\u0442\u043e \u0444\u0438\u043d\u0438\u0448\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430:",type:"text",boxClass:"mr-10"}),(0,d.jsx)(b.Z,{form:u,setForm:p,keyObject:"distance",title:"\u0414\u043b\u0438\u043d\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u0432 \u043a\u0438\u043b\u043e\u043c\u0435\u0442\u0440\u0430\u0445:",type:"number",boxClass:"mr-10"}),(0,d.jsx)(b.Z,{form:u,setForm:p,keyObject:"ascent",title:"\u041e\u0431\u0449\u0438\u0439 \u043d\u0430\u0431\u043e\u0440 \u0432 \u043c\u0435\u0442\u0440\u0430\u0445 \u043d\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0435:",type:"number",boxClass:"mr-10"}),(0,d.jsx)(b.Z,{form:u,setForm:p,keyObject:"urlTrekGConnect",title:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442 \u0432 GConnect:",type:"text",boxClass:"mr-10"}),(0,d.jsx)(b.Z,{form:u,setForm:p,keyObject:"urlVideo",title:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0432\u0438\u0434\u0435\u043e \u0441 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430:",type:"text",boxClass:"mr-10"}),(0,d.jsx)(T,{fileRef:h,keyObject:"fileTrekName",setForm:p,title:"\u0422\u0440\u0435\u043a \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 FIT/GPX/TCX:",boxClass:"mr-10"}),(0,d.jsx)(R.Z,{form:u,setForm:p,title:"\u0411\u043b\u043e\u043a \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0433\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430. \u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u0434\u0435\u0442\u0430\u043b\u0438, \u0434\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u0432\u0430\u0436\u043d\u044b\u0435 \u043c\u043e\u043c\u0435\u043d\u0442\u044b \u043d\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0435.",keyObject:"descriptionArea",boxClass:"mr-10"})]}),(0,d.jsxs)("div",{className:U.block,children:[(0,d.jsx)(O.Z,{form:u,setForm:p,title:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0434\u043b\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438:",keyObject:"cardPhoto",boxClass:"mr-10"}),(0,d.jsx)(f,{form:u,setForm:p,keyObject:"cardPhoto"})]}),(0,d.jsx)(F,{form:u,setForm:p,title:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0434\u043b\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f:",boxClass:"mr-10"}),(0,d.jsx)(_.Z,{form:u,setForm:p,boxClass:"mr-10"}),(0,d.jsx)(j.Z,{sendForm:function(e){e.preventDefault();var t=function(e){var t;return console.log(e.fileTrekName),!!(e.ascent&&e.bikeType&&null!==(t=e.cardPhoto)&&void 0!==t&&t.source&&e.descPhotos.length&&e.descriptionArea&&e.distance&&e.fileTrekName&&e.finish&&e.nameRoute&&e.start&&e.state&&e.turn&&e.urlTrekGConnect)}(u);if(!t)return v((0,l.u)({message:"\u041d\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b!",type:"warning",isOpened:!0}));if(!h.old){var r=function(e){var t=new FormData;return t.append("files",e),t}(h.current.source);(0,c.SN)(r).catch((function(e){return console.log(e)}))}(0,c.mZ)(u,s).then((function(e){200===(null===e||void 0===e?void 0:e.status)&&v((0,l.u)({message:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435!",type:"success",isOpened:!0})),Z("/trails/".concat(e.data.trailId))})).finally((function(){h.current="",p(P)}))},title:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0444\u043e\u0440\u043c\u044b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440!"})]})}},6433:function(e,t,s){s.d(t,{Z:function(){return c}});var r=s(4942),n=s(1413),o=(s(2791),s(6074)),i={box__input:"SelectBox_box__input__MCdVC",box__title:"SelectBox_box__title__wgd0K",box__interactive:"SelectBox_box__interactive__0a4yZ",select:"SelectBox_select__SqTmR",option:"SelectBox_option__Uc8JE","mr-10":"SelectBox_mr-10__YbUw+"},a=s(184),c=function(e){var t=e.title,s=e.setForm,c=e.form,l=e.keyObject,_=e.values,m=e.boxClass;return(0,a.jsxs)("div",{className:"".concat(i.box__input," ").concat(i[m]),children:[(0,a.jsx)("h2",{className:i.box__title,children:t}),(0,a.jsxs)("div",{className:i.box__interactive,children:[(0,a.jsx)("select",{className:i.select,value:c[l],onChange:function(e){return s((function(t){return(0,n.Z)((0,n.Z)({},t),{},(0,r.Z)({},l,e.target.value))}))},children:_.map((function(e){return(0,a.jsx)("option",{className:i.option,value:e.name,children:e.name},e.id)}))}),(0,a.jsx)(o.Z,{isCompleted:c[l]})]})]})}},7772:function(e,t,s){s.d(t,{Z:function(){return c}});var r=s(4942),n=s(1413),o=(s(2791),s(6074)),i={box__textarea:"TextArea_box__textarea__43r-x",box__interactive:"TextArea_box__interactive__Jvk79",box__title:"TextArea_box__title__iQAgF",textarea:"TextArea_textarea__V56Zd","mr-10":"TextArea_mr-10__ymiKA"},a=s(184),c=function(e){var t=e.form,s=e.setForm,c=e.title,l=e.keyObject,_=e.boxClass;return(0,a.jsxs)("div",{className:"".concat(i.box__textarea," ").concat(i[_]),children:[(0,a.jsx)("h2",{className:i.box__title,children:c}),(0,a.jsxs)("div",{className:i.box__interactive,children:[(0,a.jsx)("textarea",{value:t[l],onChange:function(e){return s((function(t){return(0,n.Z)((0,n.Z)({},t),{},(0,r.Z)({},l,e.target.value))}))},className:i.textarea}),(0,a.jsx)(o.Z,{isCompleted:t[l]})]})]})}},9697:function(e,t,s){s.r(t),s.d(t,{default:function(){return l}});s(2791);var r=s(6907),n=s(184),o=function(){return(0,n.jsxs)(r.ql,{children:[(0,n.jsx)("link",{rel:"canonical",href:"https://bike-caucasus.ru/create-trail"}),(0,n.jsx)("meta",{name:"robots",content:"noindex, nofollow, noarchive"}),(0,n.jsx)("meta",{name:"description",content:"\u0424\u043e\u0440\u043c\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u0434\u043b\u044f \u0448\u043e\u0441\u0441\u0435\u0439\u043d\u043e\u0433\u043e \u0438 \u0433\u043e\u0440\u043d\u043e\u0433\u043e \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u043e\u0432"}),(0,n.jsx)("meta",{property:"og:title",content:"\u0424\u043e\u0440\u043c\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u043d\u043e\u0433\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"https://bike-caucasus.ru/create-trail"}),(0,n.jsx)("meta",{property:"og:description",content:"\u0424\u043e\u0440\u043c\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u0434\u043b\u044f \u0448\u043e\u0441\u0441\u0435\u0439\u043d\u043e\u0433\u043e \u0438 \u0433\u043e\u0440\u043d\u043e\u0433\u043e \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u043e\u0432"})]})},i=s(8671),a="TrailCreate_wrapper__WNXbq",c="TrailCreate_title__hCGiB",l=function(){return(0,n.jsxs)("section",{className:a,children:[(0,n.jsx)(o,{}),(0,n.jsx)("h2",{className:c,children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u043d\u043e\u0433\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430"}),(0,n.jsx)(i.Z,{type:"create"})]})}}}]);
//# sourceMappingURL=697.6231fc82.chunk.js.map