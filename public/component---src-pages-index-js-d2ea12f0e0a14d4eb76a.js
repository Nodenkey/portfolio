(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+o+s+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(k,(0,l.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,n(r),s):s})),k=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,l.default)({opacity:R?1:0,transition:L?"opacity "+v+"ms":"none"},s),T="boolean"==typeof b?"lightgray":b,P={transitionDelay:v+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&P,s,f),N={title:t,alt:this.state.isVisible?"":a,style:z,className:m,itemProp:w};if(g){var H=g,V=p(g);return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),T&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&P)}),V.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:N,imageVariants:H,generateSources:j}),V.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:N,imageVariants:H,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,E(H),d.default.createElement(k,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:S},V,{imageVariants:H}))}}))}if(h){var M=h,q=p(h),W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete W.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},T&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:T,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},L&&P)}),q.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:N,imageVariants:M,generateSources:j}),q.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:N,imageVariants:M,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,E(M),d.default.createElement(k,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:S},q,{imageVariants:M}))}}))}return null},t}(d.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function P(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}L.propTypes={resolutions:_,sizes:T,fixed:P(c.default.oneOfType([_,c.default.arrayOf(_)])),fluid:P(c.default.oneOfType([T,c.default.arrayOf(T)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=L;t.default=z},D5Hz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var r=a("MkV5");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return r.EmailJSResponseStatus}});var n=a("USkh"),i=null,o="https://api.emailjs.com";function s(e,t,a){return void 0===a&&(a={}),new Promise((function(n,i){var o=new XMLHttpRequest;for(var s in o.addEventListener("load",(function(e){var t=new r.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?n(t):i(t)})),o.addEventListener("error",(function(e){i(new r.EmailJSResponseStatus(e.target))})),o.open("POST",e,!0),a)o.setRequestHeader(s,a[s]);o.send(t)}))}function l(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function d(e,t){i=e,o=t||"https://api.emailjs.com"}function c(e,t,a,r){var n={lib_version:"2.6.3",user_id:r||i,service_id:e,template_id:t,template_params:l(a)};return s(o+"/api/v1.0/email/send",JSON.stringify(n),{"Content-type":"application/json"})}function u(e,t,a,r){var l;if("string"==typeof a&&(a=document.querySelector("#"!==(l=a)[0]?"#"+l:l)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";n.UI.progressState(a);var d=new FormData(a);return d.append("lib_version","2.6.3"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",r||i),s(o+"/api/v1.0/email/send-form",d).then((function(e){return n.UI.successState(a),e}),(function(e){return n.UI.errorState(a),Promise.reject(e)}))}t.init=d,t.send=c,t.sendForm=u,t.default={init:d,send:c,sendForm:u}},MkV5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var r=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=r},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Bl7J"),o=a("vrFN"),s=a("9eSz"),l=a.n(s),d=a("IP2g"),c=a("wHSu"),u=a("RHZy"),f=a("vOnD"),m=a("7Qib"),p=a("1WYi"),g=Object(f.default)(p.d).withConfig({displayName:"bannerStyles__BannerWrapper",componentId:"u5wgu4-0"})(["height:100vh;width:100vw;#landing{position:absolute !important;width:100%;height:100%;top:0;left:0;z-index:1;transform:scale(1.3);opacity:0;}.gatsby-image-wrapper{width:100%;height:100%;}"]),h=Object(f.default)(p.a).withConfig({displayName:"bannerStyles__BannerText",componentId:"u5wgu4-1"})(["position:relative;z-index:2;height:auto;>div{margin-top:80px;}h4{max-width:600px;}h5{margin:0 30px 0 0;}>*{transform:translateY(100px);opacity:0;}"]),b=f.default.div.withConfig({displayName:"bannerStyles__ArrowContainer",componentId:"u5wgu4-2"})(["width:80px;height:80px;background:none;border:1px solid ",";position:relative;border-radius:50%;display:flex;justify-content:center;align-items:center;svg{font-size:2rem;animation:arrow 2s ease-in-out both infinite;}@keyframes arrow{0%{transform:translateY(-20px);opacity:0;}50%{transform:translateY(0);opacity:1;}100%{transform:translateY(20px);opacity:0;}}"],m.c.radical),v=a("Wbzz"),y=a("6ysj"),w=function(e){var t=e.onCursor,a=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=document.querySelector("#landing");u.a.timeline().to(a.current.children,{duration:1,y:0,delay:.5,opacity:1,stagger:.3}).to(e,{duration:2,scale:1,opacity:1},"-=.8")}));var i=Object(y.c)().currentTheme,o=Object(v.useStaticQuery)("547473420");return n.a.createElement(g,null,n.a.createElement(h,{ref:a},n.a.createElement(p.h,null,"I'm Nii"),n.a.createElement(p.g,null,"I am a front end web developer based in Ghana."),n.a.createElement(v.Link,{to:"/#projects"},n.a.createElement(p.d,{onMouseEnter:function(){return t("hovered")},onMouseLeave:t,inline:!0},n.a.createElement(p.f,null,n.a.createElement(p.m,null,"View projects")),n.a.createElement(b,null,n.a.createElement(d.a,{icon:c.a}))))),n.a.createElement("div",{id:"landing"},"dark"===i?n.a.createElement(l.a,{fluid:o.dark.childImageSharp.fluid,alt:"nii"}):n.a.createElement(l.a,{fluid:o.light.childImageSharp.fluid,alt:"nii"})))},E=a("Haw6"),S=function(e){var t=e.onCursor,a=Object(r.useRef)(null),i=Object(r.useRef)(null);Object(r.useEffect)((function(){u.a.registerPlugin(E.a),u.a.to(a.current,{scrollTrigger:{trigger:a.current,start:"top center"},opacity:1,duration:1,x:0}),u.a.to(i.current,{scrollTrigger:{trigger:a.current,start:"top center"},opacity:1,duration:.7,x:0})}));var o=Object(v.useStaticQuery)("3079876516");return n.a.createElement(p.a,{style:{padding:"150px 0vw 0"}},n.a.createElement(p.e,{num:["1.5fr 2fr"]},n.a.createElement(p.k,{ref:a,style:{opacity:0,transform:"translateX(100px)"}},n.a.createElement(l.a,{fluid:o.me.childImageSharp.fluid})),n.a.createElement(p.a,{fluid:!0,style:{height:"auto",opacity:0,transform:"translateX(-100px)"},ref:i},n.a.createElement(p.i,null,"A little about me"),n.a.createElement(p.f,null,n.a.createElement(p.m,null,'"People ignore design that ignores people"',n.a.createElement("br",null),"---Frank Chimero")),n.a.createElement(p.l,null,"Being very inquisitive and a person who liked to ask so many questions as a child, I have always wanted to figure out how things worked and help make them better. Learning web design has always been a very exciting journey for me; enabling me put myself in users' shoes and make sure those potential users, visit a website that works and leave the websites with a great experience. I am currently a freelance web developer based in Accra, Ghana. I have worked on projects in areas of leasing, creative design, portfolios, logistics, E-commerce. Web design and development is my way of feeling alive. And I make it my topmost priority to learn more about it each and every day. You can always reach out to me ",n.a.createElement(v.Link,{to:"/",onMouseEnter:function(){return t("hovered")},onMouseLeave:t},"here.")))))},x=a("pc+1"),j=f.default.section.withConfig({displayName:"projectStyles__ProjectWrapper",componentId:"sc-1h7f35b-0"})(["width:100%;padding:150px 5vw 100px;.gatsby-image-wrapper{width:100%;height:100%;}"]),I=f.default.div.withConfig({displayName:"projectStyles__ProjectContainer",componentId:"sc-1h7f35b-1"})(["display:grid;min-width:100%;height:100%;grid-template-columns:1fr 1.3fr;.gatsby-image-wrapper{transition:700ms ease-in-out;}"]),R=f.default.div.withConfig({displayName:"projectStyles__TextSection",componentId:"sc-1h7f35b-2"})(["background-color:",";padding:20px 5vw;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;text-align:left;p{color:",";}"],(function(e){return e.color}),(function(e){return e.textColor})),O=f.default.div.withConfig({displayName:"projectStyles__VisitWebsite",componentId:"sc-1h7f35b-3"})(["margin-top:50px;display:inline-flex;color:",";align-items:center;h4{margin-bottom:0;}svg{font-size:3rem;margin-left:10px;transition:500ms ease-in-out;}&:hover svg{transform:translateX(20px) scale(1.2);}"],m.c.radical),C=f.default.div.withConfig({displayName:"projectStyles__AllProjectContainer",componentId:"sc-1h7f35b-4"})(["width:96%;margin:auto;overflow:hidden;>div{margin:0 auto 100px;height:80vh;}"]),k=f.default.div.withConfig({displayName:"projectStyles__ProjectImage",componentId:"sc-1h7f35b-5"})(["overflow:hidden;height:100%;width:100%;.gatsby-image-wrapper{width:100%;height:100%;transform:scale(1);}"]),L=[{key:"00001",name:"wevops",image:"wevops",backgroundColor:"black",headerColor:"white",textColor:"#999999",description:"The website was developed for a startup that specialises in UI/UX design and web development. It was created using React js, styled components and gsap for animations. I was involved in both the design and development of this website.",site:"https://wevops.co/"},{key:"00002",name:"edanra",image:"edanra",backgroundColor:"#FCFCFC",headerColor:"#0E4D40",textColor:"black",description:"This website was developed for Edanra, a startup that provides a platform to link house owners to those in need of housing especially National service personnel. It was designed using Adobe XD, and developed with React js, css, redux and redux sagas. Its backend was hosted on firebase.",site:"https://edanra.com/"},{key:"00003",name:"fr logistics",image:"fr",backgroundColor:"black",headerColor:"white",textColor:"#999999",description:"This website was developed for FrLogistics, a logistics moving and warehousing company in Ghana. It was designed with webflow and developed with HTML, CSS and javascript. The backend was developed using Django. I was mainly involved with the frontend but helped as well with setting up part of the backend.",site:"https://frlogisticsltd.com/"},{key:"00004",name:"qube pcs",image:"qube",backgroundColor:"white",headerColor:"#3C2517",textColor:"black",description:"This website was build for Qube Pcs, an international consulting firm involved in various sectors such as onstruction, aviation, infrastructure, water & utilities, environmental development, property markets and football management. The website was built with gatsby and gsap.",site:"https://qubepcs.com/"},{key:"00005",name:"design studios",image:"design",backgroundColor:"#23383B",headerColor:"white",textColor:"#E7E7E7",description:"Design portfolio is being developed for a design company involved in graphic design and animations. Dummy data has been used for the meantime. It is being developed with React js and sass, with me being involved in the design of the website and it's development",site:"https://drvmroll-design-portfolio.netlify.app/"},{key:"00006",name:"chop flix",image:"chop",backgroundColor:"black",headerColor:"white",textColor:"#999999",description:"Chop Flix is an ecommerce platform used to sell drum packs for music producers. The website is still in development. So far, the main technology that has been used is React.",site:"https://chop-flix.netlify.app/"}],_=function(e){var t=e.onCursor,a=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=document.querySelectorAll(".project-image");u.a.registerPlugin(E.a),e.forEach((function(e){u.a.to(e,{scrollTrigger:{trigger:e},duration:1,scale:1.1,ease:x.b.easeInOut})}))}),[]);var i=Object(v.useStaticQuery)("3363737131");return n.a.createElement(j,{id:"projects"},n.a.createElement(p.a,null,n.a.createElement(p.i,{ref:a,style:{marginBottom:50}},"Selected projects")),n.a.createElement(C,null,L.map((function(e){return n.a.createElement(I,{key:e.key},n.a.createElement(R,{color:e.backgroundColor,textColor:e.textColor},n.a.createElement(p.g,{style:{textTransform:"capitalize",color:""+e.headerColor}},e.name),n.a.createElement(p.l,null,e.description),n.a.createElement("a",{href:e.site,rel:"noopener noreferrer",target:"_blank"},n.a.createElement(O,{onMouseEnter:function(){return t("hovered")},onMouseLeave:t},n.a.createElement(p.g,null,"visit website"),n.a.createElement(d.a,{icon:c.b})))),n.a.createElement(k,null,n.a.createElement(l.a,{fluid:i[e.image].childImageSharp.fluid,className:"project-image"})))}))))},T=a("jJBl"),P=Object(f.default)(p.a).withConfig({displayName:"languageStyles__LanguageWrapper",componentId:"fc4vg2-0"})(["padding:100px 5vw;margin:0 auto;p{padding-bottom:100px;max-width:600px;margin-left:55px;}h3{margin-left:55px;}svg,img{width:80px;height:80px;filter:grayscale(2);transition:500ms ease-in-out;&:hover{filter:grayscale(0);transform:scale(1.1);}}.st0{fill:#0acf83}.st1{fill:#a259ff}.st2{fill:#f24e1e}.st3{fill:#ff7262}.st4{fill:#1abcfe}"]),z=function(){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){u.a.registerPlugin(E.a),u.a.from(e.current.children,{scrollTrigger:{trigger:e.current},duration:1,y:50,opacity:0,stagger:.2})}),[]),n.a.createElement(P,{id:"expertise"},n.a.createElement(p.i,null,"Languages and tools I use"),n.a.createElement(p.l,null,"Here is a list of languages I know and tools I use on a day to day basis. I use others too but these I must say are my favourite!"),n.a.createElement(p.e,{num:"4",ref:e},n.a.createElement(T.f,null),n.a.createElement(T.a,null),n.a.createElement(T.g,null),n.a.createElement(T.k,null),n.a.createElement(T.l,null),n.a.createElement(T.j,null),n.a.createElement(T.e,null),n.a.createElement(T.d,null),n.a.createElement(T.c,null),n.a.createElement(T.n,null),n.a.createElement(T.i,null),n.a.createElement(T.b,null)))},N=a("D5Hz"),H=a.n(N),V=a("e2jF"),M=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),a=Object(r.useState)({name:"",email:"",message:""}),i=a[0],o=a[1],s=function(e){"name"===e.target.name?o(Object.assign({},i,{name:e.target.value})):"email"===e.target.name?o(Object.assign({},i,{email:e.target.value})):"message"===e.target.name&&o(Object.assign({},i,{message:e.target.value}))};Object(r.useEffect)((function(){u.a.registerPlugin(E.a),u.a.from(e.current,{scrollTrigger:{trigger:e.current,start:"top center"},duration:1,opacity:0,x:-200}),u.a.from(t.current,{scrollTrigger:{trigger:e.current,start:"top center"},duration:1,opacity:0,x:200})}),[]);return n.a.createElement(V.a,{id:"contact"},n.a.createElement(p.a,null,n.a.createElement(p.e,{num:["1fr 1fr"]},n.a.createElement("div",{ref:e},n.a.createElement(p.d,null,n.a.createElement(p.j,null,"Say hello!"),n.a.createElement(p.j,{className:"hand"},n.a.createElement("span",{role:"img","aria-label":"wave"},"👋🏽"))),n.a.createElement(p.f,null,"Whether you want to discuss a new project or grab a cup of coffee, I’d love to talk to you. Feel free to reach out to me.")),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),H.a.sendForm("gmail","template_rj1z9eu",e.target,"user_Z47eoUWQ39fcs9dvKU5m6").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},ref:t},n.a.createElement(p.e,{num:"2",gap:"40px"},n.a.createElement(V.d,null,"Name ",n.a.createElement("br",null),n.a.createElement(V.c,{type:"text",placeholder:"Enter full name",name:"name",onChange:s})),n.a.createElement(V.d,null,"Email",n.a.createElement("br",null),n.a.createElement(V.c,{type:"email",placeholder:"Enter your email",name:"email",onChange:s}))),n.a.createElement(V.d,null,"Message",n.a.createElement(V.e,{rows:"6",cols:"50",placeholder:"How can I help you?",name:"message",onChange:s})),n.a.createElement(V.b,null,"Mail me")))))};t.default=function(){return n.a.createElement(i.a,null,n.a.createElement(o.a,{title:"Home"}),n.a.createElement(w,null),n.a.createElement(S,null),n.a.createElement(_,null),n.a.createElement(z,null),n.a.createElement(M,null))}},USkh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var r=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=r}}]);
//# sourceMappingURL=component---src-pages-index-js-d2ea12f0e0a14d4eb76a.js.map