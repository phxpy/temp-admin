import{d as K,o as y,c as I,F as Bt,i as Vt,g as _,h as P,j as Mt,k as ne,l as wt,r as tt,w as ht,m as oe,n as u,f as S,e as b,p as $,q as G,s as zt,t as Ft,v as xt,x as et,y as bt,z as B,b as H,A as ie,B as se,C as re,D as le,E as ae,G as T,H as dt,I as Et,J as Lt,T as ce,a as fe}from"./index-DeLVerzj.js";import ue from"./Footer-DlcktJBq.js";import{_ as pe}from"./NavbarThemeSwitcher.vue_vue_type_script_setup_true_lang-CDdkgFNv.js";import{_ as de}from"./UserProfile.vue_vue_type_script_setup_true_lang-C5HhxjkD.js";import{c as me,a as he,_ as ge}from"./I18n.vue_vue_type_script_setup_true_lang-CD-pe2Ya.js";import{V as ve}from"./VNodeRenderer-CZJVSexM.js";import{V as ye}from"./VSpacer-4mvNjZbf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VTooltip-Bx3PM45r.js";import"./VOverlay-CBFUdZLw.js";import"./forwardRefs-DWGaNmQL.js";import"./VImg-DAKvtGbq.js";import"./VMenu-BPeqqJ3y.js";import"./VList-DXz7_fH0.js";import"./VAvatar-B5M2SGw1.js";import"./VDivider-Ct3rYRYf.js";import"./VListItemAction-Dm2P3qfY.js";import"./VBadge-Vtd9irHA.js";/* empty css              */const we={class:"nav-items"},xe=K({__name:"HorizontalNav",props:{navItems:{}},setup(t){const e=n=>"children"in n?Ce:Ht;return(n,o)=>(y(),I("ul",we,[(y(!0),I(Bt,null,Vt(n.navItems,(i,r)=>(y(),_(P(e(i)),{key:r,item:i},null,8,["item"]))),128))]))}}),be={class:"nav-group-label"},Ce=K({name:"HorizontalNavGroup",__name:"HorizontalNavGroup",props:{item:{},childrenAtEnd:{type:Boolean,default:!1},isSubItem:{type:Boolean,default:!1}},setup(t){const e=t,n=Mt(),o=ne(),i=wt(),r=tt(!1);return ht(()=>n.path,()=>{const s=oe(e.item.children,o);r.value=s},{immediate:!0}),(s,l)=>u(me)(s.item)?(y(),_(u(pn),{key:0,"is-rtl":u(i).isAppRTL,class:et(["nav-group",[{active:u(r),"children-at-end":s.childrenAtEnd,"sub-item":s.isSubItem,disabled:s.item.disable}]]),tag:"li","content-container-tag":"ul","popper-inline-end":s.childrenAtEnd},{content:S(()=>[(y(!0),I(Bt,null,Vt(s.item.children,a=>(y(),_(P("children"in a?"HorizontalNavGroup":u(Ht)),{key:a.title,item:a,"children-at-end":"","is-sub-item":""},null,8,["item"]))),128))]),default:S(()=>[b("div",be,[(y(),_(P(u($).app.iconRenderer||"div"),G({class:"nav-item-icon"},s.item.icon||u($).verticalNav.defaultNavItemIconProps),null,16)),(y(),_(P(u($).app.i18n.enable?"i18n-t":"span"),G(u(zt)(s.item.title,"span"),{class:"nav-item-title"}),{default:S(()=>[Ft(xt(s.item.title),1)]),_:1},16)),(y(),_(P(u($).app.iconRenderer||"div"),G(u($).icons.chevronDown,{class:"nav-group-arrow"}),null,16))])]),_:1},8,["is-rtl","class","popper-inline-end"])):bt("",!0)}}),Ae={class:"layout-navbar"},_e={class:"navbar-content-container"},Re={class:"layout-horizontal-nav"},ke={class:"horizontal-nav-content-container"},Se={class:"layout-page-content"},Ne={class:"layout-footer"},Ee={class:"footer-content-container"},Le=K({__name:"HorizontalNavLayout",props:{navItems:{}},setup(t){const e=wt();return(n,o)=>(y(),I("div",{class:et(["layout-wrapper",u(e)._layoutClasses])},[b("div",{class:et(["layout-navbar-and-nav-container",u(e).isNavbarBlurEnabled&&"header-blur"])},[b("div",Ae,[b("div",_e,[B(n.$slots,"navbar")])]),b("div",Re,[b("div",ke,[H(u(xe),{"nav-items":n.navItems},null,8,["nav-items"])])])],2),b("main",Se,[B(n.$slots,"default")]),b("footer",Ne,[b("div",Ee,[B(n.$slots,"footer")])])],2))}}),Ht=K({__name:"HorizontalNavLink",props:{item:{},isSubItem:{type:Boolean,default:!1}},setup(t){const e=t;return(n,o)=>u(he)(n.item.action,n.item.subject)?(y(),I("li",{key:0,class:et(["nav-link",[{"sub-item":e.isSubItem,disabled:n.item.disable}]])},[(y(),_(P(n.item.to?"RouterLink":"a"),G(u(se)(n.item),{class:{"router-link-active router-link-exact-active":u(ie)(n.item,n.$router)}}),{default:S(()=>[(y(),_(P(u($).app.iconRenderer||"div"),G({class:"nav-item-icon"},n.item.icon||u($).verticalNav.defaultNavItemIconProps),null,16)),(y(),_(P(u($).app.i18n.enable?"i18n-t":"span"),G({class:"nav-item-title"},u(zt)(n.item.title,"span")),{default:S(()=>[Ft(xt(n.item.title),1)]),_:1},16))]),_:1},16,["class"]))],2)):bt("",!0)}}),gt=Math.min,X=Math.max,st=Math.round,V=t=>({x:t,y:t}),Te={left:"right",right:"left",bottom:"top",top:"bottom"},Pe={start:"end",end:"start"};function Tt(t,e,n){return X(t,gt(e,n))}function at(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function ct(t){return t.split("-")[1]}function It(t){return t==="x"?"y":"x"}function Wt(t){return t==="y"?"height":"width"}function q(t){return["top","bottom"].includes(W(t))?"y":"x"}function jt(t){return It(q(t))}function Oe(t,e,n){n===void 0&&(n=!1);const o=ct(t),i=jt(t),r=Wt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=rt(s)),[s,rt(s)]}function De(t){const e=rt(t);return[vt(t),e,vt(e)]}function vt(t){return t.replace(/start|end/g,e=>Pe[e])}function $e(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Be(t,e,n,o){const i=ct(t);let r=$e(W(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(vt)))),r}function rt(t){return t.replace(/left|right|bottom|top/g,e=>Te[e])}function Ve(t){return{top:0,right:0,bottom:0,left:0,...t}}function Me(t){return typeof t!="number"?Ve(t):{top:t,right:t,bottom:t,left:t}}function lt(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Pt(t,e,n){let{reference:o,floating:i}=t;const r=q(e),s=jt(e),l=Wt(s),a=W(e),c=r==="y",p=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,m=o[l]/2-i[l]/2;let d;switch(a){case"top":d={x:p,y:o.y-i.height};break;case"bottom":d={x:p,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:f};break;case"left":d={x:o.x-i.width,y:f};break;default:d={x:o.x,y:o.y}}switch(ct(e)){case"start":d[s]-=m*(n&&c?-1:1);break;case"end":d[s]+=m*(n&&c?-1:1);break}return d}const ze=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:f}=Pt(c,o,a),m=o,d={},h=0;for(let g=0;g<l.length;g++){const{name:v,fn:w}=l[g],{x,y:A,data:k,reset:C}=await w({x:p,y:f,initialPlacement:o,placement:m,strategy:i,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});p=x??p,f=A??f,d={...d,[v]:{...d[v],...k}},C&&h<=50&&(h++,typeof C=="object"&&(C.placement&&(m=C.placement),C.rects&&(c=C.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):C.rects),{x:p,y:f}=Pt(c,m,a)),g=-1)}return{x:p,y:f,placement:m,strategy:i,middlewareData:d}};async function Gt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:f="floating",altBoundary:m=!1,padding:d=0}=at(e,t),h=Me(d),v=l[m?f==="floating"?"reference":"floating":f],w=lt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(v)))==null||n?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:p,strategy:a})),x=f==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,A=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),k=await(r.isElement==null?void 0:r.isElement(A))?await(r.getScale==null?void 0:r.getScale(A))||{x:1,y:1}:{x:1,y:1},C=lt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:A,strategy:a}):x);return{top:(w.top-C.top+h.top)/k.y,bottom:(C.bottom-w.bottom+h.bottom)/k.y,left:(w.left-C.left+h.left)/k.x,right:(C.right-w.right+h.right)/k.x}}const Fe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...v}=at(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const w=W(i),x=q(l),A=W(l)===l,k=await(a.isRTL==null?void 0:a.isRTL(c.floating)),C=m||(A||!g?[rt(l)]:De(l)),_t=h!=="none";!m&&_t&&C.push(...Be(l,g,h,k));const te=[l,...C],pt=await Gt(e,v),it=[];let U=((o=r.flip)==null?void 0:o.overflows)||[];if(p&&it.push(pt[w]),f){const F=Oe(i,s,k);it.push(pt[F[0]],pt[F[1]])}if(U=[...U,{placement:i,overflows:it}],!it.every(F=>F<=0)){var Rt,kt;const F=(((Rt=r.flip)==null?void 0:Rt.index)||0)+1,Nt=te[F];if(Nt)return{data:{index:F,overflows:U},reset:{placement:Nt}};let Z=(kt=U.filter(j=>j.overflows[0]<=0).sort((j,O)=>j.overflows[1]-O.overflows[1])[0])==null?void 0:kt.placement;if(!Z)switch(d){case"bestFit":{var St;const j=(St=U.filter(O=>{if(_t){const D=q(O.placement);return D===x||D==="y"}return!0}).map(O=>[O.placement,O.overflows.filter(D=>D>0).reduce((D,ee)=>D+ee,0)]).sort((O,D)=>O[1]-D[1])[0])==null?void 0:St[0];j&&(Z=j);break}case"initialPlacement":Z=l;break}if(i!==Z)return{reset:{placement:Z}}}return{}}}};async function He(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=W(n),l=ct(n),a=q(n)==="y",c=["left","top"].includes(s)?-1:1,p=r&&a?-1:1,f=at(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:h}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof h=="number"&&(d=l==="end"?h*-1:h),a?{x:d*p,y:m*c}:{x:m*c,y:d*p}}const Ie=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,a=await He(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:s}}}}},We=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:v=>{let{x:w,y:x}=v;return{x:w,y:x}}},...a}=at(t,e),c={x:n,y:o},p=await Gt(e,a),f=q(W(i)),m=It(f);let d=c[m],h=c[f];if(r){const v=m==="y"?"top":"left",w=m==="y"?"bottom":"right",x=d+p[v],A=d-p[w];d=Tt(x,d,A)}if(s){const v=f==="y"?"top":"left",w=f==="y"?"bottom":"right",x=h+p[v],A=h-p[w];h=Tt(x,h,A)}const g=l.fn({...e,[m]:d,[f]:h});return{...g,data:{x:g.x-n,y:g.y-o}}}}};function Q(t){return Xt(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function z(t){var e;return(e=(Xt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Xt(t){return t instanceof Node||t instanceof R(t).Node}function N(t){return t instanceof Element||t instanceof R(t).Element}function L(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function Ot(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=E(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function je(t){return["table","td","th"].includes(Q(t))}function ft(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ct(t){const e=At(),n=N(t)?E(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Ge(t){let e=M(t);for(;L(e)&&!J(e);){if(Ct(e))return e;if(ft(e))return null;e=M(e)}return null}function At(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function J(t){return["html","body","#document"].includes(Q(t))}function E(t){return R(t).getComputedStyle(t)}function ut(t){return N(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function M(t){if(Q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ot(t)&&t.host||z(t);return Ot(e)?e.host:e}function Yt(t){const e=M(t);return J(e)?t.ownerDocument?t.ownerDocument.body:t.body:L(e)&&ot(e)?e:Yt(e)}function yt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Yt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=R(i);if(r){const l=Xe(s);return e.concat(s,s.visualViewport||[],ot(i)?i:[],l&&n?yt(l):[])}return e.concat(i,yt(i,[],n))}function Xe(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function qt(t){const e=E(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=L(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=st(n)!==r||st(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function Jt(t){return N(t)?t:t.contextElement}function Y(t){const e=Jt(t);if(!L(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=qt(e);let s=(r?st(n.width):n.width)/o,l=(r?st(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Ye=V(0);function Kt(t){const e=R(t);return!At()||!e.visualViewport?Ye:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function qe(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==R(t)?!1:e}function nt(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Jt(t);let s=V(1);e&&(o?N(o)&&(s=Y(o)):s=Y(t));const l=qe(r,n,o)?Kt(r):V(0);let a=(i.left+l.x)/s.x,c=(i.top+l.y)/s.y,p=i.width/s.x,f=i.height/s.y;if(r){const m=R(r),d=o&&N(o)?R(o):o;let h=m,g=h.frameElement;for(;g&&o&&d!==h;){const v=Y(g),w=g.getBoundingClientRect(),x=E(g),A=w.left+(g.clientLeft+parseFloat(x.paddingLeft))*v.x,k=w.top+(g.clientTop+parseFloat(x.paddingTop))*v.y;a*=v.x,c*=v.y,p*=v.x,f*=v.y,a+=A,c+=k,h=R(g),g=h.frameElement}}return lt({width:p,height:f,x:a,y:c})}function Je(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=z(o),l=e?ft(e.floating):!1;if(o===s||l&&r)return n;let a={scrollLeft:0,scrollTop:0},c=V(1);const p=V(0),f=L(o);if((f||!f&&!r)&&((Q(o)!=="body"||ot(s))&&(a=ut(o)),L(o))){const m=nt(o);c=Y(o),p.x=m.x+o.clientLeft,p.y=m.y+o.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+p.x,y:n.y*c.y-a.scrollTop*c.y+p.y}}function Ke(t){return Array.from(t.getClientRects())}function Qt(t){return nt(z(t)).left+ut(t).scrollLeft}function Qe(t){const e=z(t),n=ut(t),o=t.ownerDocument.body,i=X(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=X(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Qt(t);const l=-n.scrollTop;return E(o).direction==="rtl"&&(s+=X(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function Ue(t,e){const n=R(t),o=z(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,a=0;if(i){r=i.width,s=i.height;const c=At();(!c||c&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:l,y:a}}function Ze(t,e){const n=nt(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=L(t)?Y(t):V(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,a=i*r.x,c=o*r.y;return{width:s,height:l,x:a,y:c}}function Dt(t,e,n){let o;if(e==="viewport")o=Ue(t,n);else if(e==="document")o=Qe(z(t));else if(N(e))o=Ze(e,n);else{const i=Kt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return lt(o)}function Ut(t,e){const n=M(t);return n===e||!N(n)||J(n)?!1:E(n).position==="fixed"||Ut(n,e)}function tn(t,e){const n=e.get(t);if(n)return n;let o=yt(t,[],!1).filter(l=>N(l)&&Q(l)!=="body"),i=null;const r=E(t).position==="fixed";let s=r?M(t):t;for(;N(s)&&!J(s);){const l=E(s),a=Ct(s);!a&&l.position==="fixed"&&(i=null),(r?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(s)&&!a&&Ut(t,s))?o=o.filter(p=>p!==s):i=l,s=M(s)}return e.set(t,o),o}function en(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?ft(e)?[]:tn(e,this._c):[].concat(n),o],l=s[0],a=s.reduce((c,p)=>{const f=Dt(e,p,i);return c.top=X(f.top,c.top),c.right=gt(f.right,c.right),c.bottom=gt(f.bottom,c.bottom),c.left=X(f.left,c.left),c},Dt(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function nn(t){const{width:e,height:n}=qt(t);return{width:e,height:n}}function on(t,e,n){const o=L(e),i=z(e),r=n==="fixed",s=nt(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const a=V(0);if(o||!o&&!r)if((Q(e)!=="body"||ot(i))&&(l=ut(e)),o){const f=nt(e,!0,r,e);a.x=f.x+e.clientLeft,a.y=f.y+e.clientTop}else i&&(a.x=Qt(i));const c=s.left+l.scrollLeft-a.x,p=s.top+l.scrollTop-a.y;return{x:c,y:p,width:s.width,height:s.height}}function mt(t){return E(t).position==="static"}function $t(t,e){return!L(t)||E(t).position==="fixed"?null:e?e(t):t.offsetParent}function Zt(t,e){const n=R(t);if(ft(t))return n;if(!L(t)){let i=M(t);for(;i&&!J(i);){if(N(i)&&!mt(i))return i;i=M(i)}return n}let o=$t(t,e);for(;o&&je(o)&&mt(o);)o=$t(o,e);return o&&J(o)&&mt(o)&&!Ct(o)?n:o||Ge(t)||n}const sn=async function(t){const e=this.getOffsetParent||Zt,n=this.getDimensions,o=await n(t.floating);return{reference:on(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function rn(t){return E(t).direction==="rtl"}const ln={convertOffsetParentRelativeRectToViewportRelativeRect:Je,getDocumentElement:z,getClippingRect:en,getOffsetParent:Zt,getElementRects:sn,getClientRects:Ke,getDimensions:nn,getScale:Y,isElement:N,isRTL:rn},an=Ie,cn=We,fn=Fe,un=(t,e,n)=>{const o=new Map,i={platform:ln,...n},r={...i.platform,_c:o};return ze(t,e,{...i,platform:r})},pn=K({__name:"HorizontalNavPopper",props:{popperInlineEnd:{type:Boolean,default:!1},tag:{default:"div"},contentContainerTag:{default:"div"},isRtl:{type:Boolean}},setup(t){const e=t,n=wt(),o=tt(),i=tt(),r=tt({left:"0px",top:"0px"}),s=async()=>{if(o.value!==void 0&&i.value!==void 0){const{x:f,y:m}=await un(o.value,i.value,{placement:e.popperInlineEnd?e.isRtl?"left-start":"right-start":"bottom-start",middleware:[...n.horizontalNavPopoverOffset?[an(n.horizontalNavPopoverOffset)]:[],fn({boundary:document.querySelector("body"),padding:{bottom:16}}),cn({boundary:document.querySelector("body"),padding:{bottom:16}})]});r.value.left=`${f}px`,r.value.top=`${m}px`}};re(()=>n.horizontalNavType).toMatch(f=>f==="static").then(()=>{le("scroll",s)});const l=tt(!1),a=()=>{l.value=!0,s()},c=()=>{l.value=!1};ae(s),ht([()=>n.isAppRTL,()=>n.appContentWidth],s);const p=Mt();return ht(()=>p.fullPath,c),(f,m)=>(y(),I("div",{class:et(["nav-popper",[{"popper-inline-end":f.popperInlineEnd,"show-content":u(l)}]])},[b("div",{ref_key:"refPopperContainer",ref:o,class:"popper-triggerer",onMouseenter:a,onMouseleave:c},[B(f.$slots,"default")],544),u(T).horizontalNav.transition?typeof u(T).horizontalNav.transition=="string"?(y(),_(ce,{key:1,name:u(T).horizontalNav.transition},{default:S(()=>[Et(b("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:dt(u(r)),onMouseenter:a,onMouseleave:c},[b("div",null,[B(f.$slots,"content")])],36),[[Lt,u(l)]])]),_:3},8,["name"])):(y(),_(P(u(T).horizontalNav.transition),{key:2},{default:S(()=>[Et(b("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:dt(u(r)),onMouseenter:a,onMouseleave:c},[b("div",null,[B(f.$slots,"content")])],36),[[Lt,u(l)]])]),_:3})):(y(),I("div",{key:0,ref_key:"refPopper",ref:i,class:"popper-content",style:dt(u(r)),onMouseenter:a,onMouseleave:c},[b("div",null,[B(f.$slots,"content")])],36))],2))}}),dn=[{title:"Home",to:{name:"root"},icon:{icon:"tabler-smart-home"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"tabler-file"}}],mn={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},Dn=K({__name:"DefaultLayoutWithHorizontalNav",setup(t){return(e,n)=>{const o=fe("RouterLink");return y(),_(u(Le),{"nav-items":u(dn)},{navbar:S(()=>{var i;return[H(o,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:S(()=>[H(u(ve),{nodes:u(T).app.logo},null,8,["nodes"]),b("h1",mn,xt(u(T).app.title),1)]),_:1}),H(ye),u(T).app.i18n.enable&&((i=u(T).app.i18n.langConfig)!=null&&i.length)?(y(),_(ge,{key:0,languages:u(T).app.i18n.langConfig},null,8,["languages"])):bt("",!0),H(pe,{class:"me-2"}),H(de)]}),footer:S(()=>[H(ue)]),default:S(()=>[B(e.$slots,"default")]),_:3},8,["nav-items"])}}});export{Dn as default};
