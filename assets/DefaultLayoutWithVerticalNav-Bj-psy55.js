import{d as A,K as j,T as E,r as I,L as Z,M as x,N as F,l as W,j as H,w,a as z,o as s,g as v,f as c,e as g,z as b,b as N,n as e,p as r,I as V,v as R,J as k,h as u,q as h,c as T,F as q,i as K,x as P,O as ee,P as te,k as ae,Q as ie,m as D,R as $,s as B,t as G,y as L,U,V as se,W as ne,X as oe,Y as le,Z as re,A as ce,B as ve,$ as pe,G as M}from"./index-DeLVerzj.js";import de from"./Footer-DlcktJBq.js";import{_ as ue}from"./NavbarThemeSwitcher.vue_vue_type_script_setup_true_lang-CDdkgFNv.js";import{_ as me}from"./UserProfile.vue_vue_type_script_setup_true_lang-C5HhxjkD.js";import{c as fe,a as Y,_ as ge}from"./I18n.vue_vue_type_script_setup_true_lang-CD-pe2Ya.js";import{C as he}from"./vue3-perfect-scrollbar-BteVMmAX.js";import{V as ye}from"./VNodeRenderer-CZJVSexM.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Ne}from"./VSpacer-4mvNjZbf.js";import"./VTooltip-Bx3PM45r.js";import"./VOverlay-CBFUdZLw.js";import"./forwardRefs-DWGaNmQL.js";import"./VImg-DAKvtGbq.js";import"./VMenu-BPeqqJ3y.js";import"./VList-DXz7_fH0.js";import"./VAvatar-B5M2SGw1.js";import"./VDivider-Ct3rYRYf.js";import"./VListItemAction-Dm2P3qfY.js";import"./VBadge-Vtd9irHA.js";/* empty css              */const _e=A({name:"TransitionExpand",setup(y,{slots:l}){const p=a=>{const _=getComputedStyle(a).width;a.style.width=_,a.style.position="absolute",a.style.visibility="hidden",a.style.height="auto";const f=getComputedStyle(a).height;a.style.width="",a.style.position="",a.style.visibility="",a.style.height="0px",getComputedStyle(a).height,requestAnimationFrame(()=>{a.style.height=f})},i=a=>{a.style.height="auto"},n=a=>{const _=getComputedStyle(a).height;a.style.height=_,getComputedStyle(a).height,requestAnimationFrame(()=>{a.style.height="0px"})};return()=>j(j(E),{name:"expand",onEnter:p,onAfterEnter:i,onLeave:n},()=>{var a;return(a=l.default)==null?void 0:a.call(l)})}}),Ce=J(_e,[["__scopeId","data-v-c7a0f8a6"]]),be=y=>(ee("data-v-13f2974c"),y=y(),te(),y),Ve={class:"nav-header"},ke={class:"header-action"},$e=be(()=>g("div",{class:"vertical-nav-items-shadow"},null,-1)),Ie=A({__name:"VerticalNav",props:{tag:{default:"aside"},navItems:{},isOverlayNavActive:{type:Boolean},toggleIsOverlayNavActive:{}},setup(y){const l=y,p=I(),i=Z(p);x(F,i);const n=W(),a=t=>"heading"in t?Me:"children"in t?we:Q,_=H();w(()=>_.name,()=>{l.toggleIsOverlayNavActive(!1)});const f=I(!1),d=t=>f.value=t,C=t=>{f.value=t.target.scrollTop>0},S=n.isVerticalNavMini(i);return(t,o)=>{const m=z("RouterLink");return s(),v(u(l.tag),{ref_key:"refNav",ref:p,class:P(["layout-vertical-nav",[{"overlay-nav":e(n).isLessThanOverlayNavBreakpoint,hovered:e(i),visible:t.isOverlayNavActive,scrolled:e(f)}]])},{default:c(()=>[g("div",Ve,[b(t.$slots,"nav-header",{},()=>[N(m,{to:"/",class:"app-logo app-title-wrapper"},{default:c(()=>[N(e(ye),{nodes:e(r).app.logo},null,8,["nodes"]),N(E,{name:"vertical-nav-app-title"},{default:c(()=>[V(g("h1",{class:"app-logo-title"},R(e(r).app.title),513),[[k,!e(S)]])]),_:1})]),_:1}),g("div",ke,[V((s(),v(u(e(r).app.iconRenderer||"div"),h({class:["d-none nav-unpin",e(n).isVerticalNavCollapsed&&"d-lg-block"]},e(r).icons.verticalNavUnPinned,{onClick:o[0]||(o[0]=O=>e(n).isVerticalNavCollapsed=!e(n).isVerticalNavCollapsed)}),null,16,["class"])),[[k,e(n).isVerticalNavCollapsed]]),V((s(),v(u(e(r).app.iconRenderer||"div"),h({class:["d-none nav-pin",!e(n).isVerticalNavCollapsed&&"d-lg-block"]},e(r).icons.verticalNavPinned,{onClick:o[1]||(o[1]=O=>e(n).isVerticalNavCollapsed=!e(n).isVerticalNavCollapsed)}),null,16,["class"])),[[k,!e(n).isVerticalNavCollapsed]]),(s(),v(u(e(r).app.iconRenderer||"div"),h({class:"d-lg-none"},e(r).icons.close,{onClick:o[2]||(o[2]=O=>t.toggleIsOverlayNavActive(!1))}),null,16))])],!0)]),b(t.$slots,"before-nav-items",{},()=>[$e],!0),b(t.$slots,"nav-items",{updateIsVerticalNavScrolled:d},()=>[(s(),v(e(he),{key:e(n).isAppRTL,tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:C},{default:c(()=>[(s(!0),T(q,null,K(t.navItems,(O,X)=>(s(),v(u(a(O)),{key:X,item:O},null,8,["item"]))),128))]),_:1}))],!0),b(t.$slots,"after-nav-items",{},void 0,!0)]),_:3},8,["class"])}}}),Ae=J(Ie,[["__scopeId","data-v-13f2974c"]]),Se={class:"nav-group-children"},we=A({name:"VerticalNavGroup",__name:"VerticalNavGroup",props:{item:{}},setup(y){const l=y,p=H(),i=ae(),n=W(),a=n.isVerticalNavMini(),_=ie(F,I(!1)),f=I(!1),d=I(!1),C=t=>t.some(o=>{let m=$.value.includes(o.title);return"children"in o&&(m=C(o.children)||m),m}),S=t=>{t.forEach(o=>{"children"in o&&S(o.children),$.value=$.value.filter(m=>m!==o.title)})};return w(()=>p.path,()=>{const t=D(l.item.children,i);d.value=t&&!n.isVerticalNavMini(_).value,f.value=t},{immediate:!0}),w(d,t=>{const o=$.value.indexOf(l.item.title);t&&o===-1?$.value.push(l.item.title):!t&&o!==-1&&($.value.splice(o,1),S(l.item.children))},{immediate:!0}),w($,t=>{if(t.at(-1)===l.item.title)return;const m=D(l.item.children,i);m||C(l.item.children)||(d.value=m,f.value=m)},{deep:!0}),w(n.isVerticalNavMini(_),t=>{d.value=t?!1:f.value}),(t,o)=>e(fe)(t.item)?(s(),T("li",{key:0,class:P(["nav-group",[{active:e(f),open:e(d),disabled:t.item.disable}]])},[g("div",{class:"nav-group-label",onClick:o[0]||(o[0]=m=>d.value=!e(d))},[(s(),v(u(e(r).app.iconRenderer||"div"),h(t.item.icon||e(r).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),(s(),v(u(U),{name:"transition-slide-x"},{default:c(()=>[V((s(),v(u(e(r).app.i18n.enable?"i18n-t":"span"),h(e(B)(t.item.title,"span"),{key:"title",class:"nav-item-title"}),{default:c(()=>[G(R(t.item.title),1)]),_:1},16)),[[k,!e(a)]]),t.item.badgeContent?V((s(),v(u(e(r).app.i18n.enable?"i18n-t":"span"),h({key:0},e(B)(t.item.badgeContent,"span"),{key:"badge",class:["nav-item-badge",t.item.badgeClass]}),{default:c(()=>[G(R(t.item.badgeContent),1)]),_:1},16,["class"])),[[k,!e(a)]]):L("",!0),V((s(),v(u(e(r).app.iconRenderer||"div"),h(e(r).icons.chevronRight,{key:"arrow",class:"nav-group-arrow"}),null,16)),[[k,!e(a)]])]),_:1}))]),N(e(Ce),null,{default:c(()=>[V(g("ul",Se,[(s(!0),T(q,null,K(t.item.children,m=>(s(),v(u("children"in m?"VerticalNavGroup":e(Q)),{key:m.title,item:m},null,8,["item"]))),128))],512),[[k,e(d)]])]),_:1})],2)):L("",!0)}}),Re={class:"layout-content-wrapper"},Te={class:"layout-page-content"},Le={class:"page-content-container"},Oe={class:"layout-footer"},Pe={class:"footer-content-container"},Be=A({__name:"VerticalNavLayout",props:{navItems:{},verticalNavAttrs:{default:()=>({})}},setup(y){const l=y,{width:p}=se(),i=W(),n=I(!1),a=I(!1),_=ne(n);oe(n,a),w(p,()=>{!i.isLessThanOverlayNavBreakpoint&&a.value&&(a.value=!1)});const f=le(()=>{const d=re(l,"verticalNavAttrs"),{wrapper:C,wrapperProps:S,...t}=d.value;return{verticalNavWrapper:C,verticalNavWrapperProps:S,additionalVerticalNavAttrs:t}});return(d,C)=>(s(),T("div",{class:P(["layout-wrapper",e(i)._layoutClasses])},[(s(),v(u(e(f).verticalNavWrapper?e(f).verticalNavWrapper:"div"),h(e(f).verticalNavWrapperProps,{class:"vertical-nav-wrapper"}),{default:c(()=>[N(e(Ae),h({"is-overlay-nav-active":e(n),"toggle-is-overlay-nav-active":e(_),"nav-items":l.navItems},{...e(f).additionalVerticalNavAttrs}),{"nav-header":c(()=>[b(d.$slots,"vertical-nav-header")]),"before-nav-items":c(()=>[b(d.$slots,"before-vertical-nav-items")]),_:3},16,["is-overlay-nav-active","toggle-is-overlay-nav-active","nav-items"])]),_:3},16)),g("div",Re,[g("main",Te,[g("div",Le,[b(d.$slots,"default")])]),g("footer",Oe,[g("div",Pe,[b(d.$slots,"footer")])])]),g("div",{class:P(["layout-overlay",[{visible:e(a)}]]),onClick:C[0]||(C[0]=()=>{a.value=!e(a)})},null,2)],2))}}),Q=A({__name:"VerticalNavLink",props:{item:{}},setup(y){const p=W().isVerticalNavMini();return(i,n)=>e(Y)(i.item.action,i.item.subject)?(s(),T("li",{key:0,class:P(["nav-link",{disabled:i.item.disable}])},[(s(),v(u(i.item.to?"RouterLink":"a"),h(e(ve)(i.item),{class:{"router-link-active router-link-exact-active":e(ce)(i.item,i.$router)}}),{default:c(()=>[(s(),v(u(e(r).app.iconRenderer||"div"),h(i.item.icon||e(r).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),N(U,{name:"transition-slide-x"},{default:c(()=>[V((s(),v(u(e(r).app.i18n.enable?"i18n-t":"span"),h({key:"title",class:"nav-item-title"},e(B)(i.item.title,"span")),{default:c(()=>[G(R(i.item.title),1)]),_:1},16)),[[k,!e(p)]]),i.item.badgeContent?V((s(),v(u(e(r).app.i18n.enable?"i18n-t":"span"),h({key:"badge",class:["nav-item-badge",i.item.badgeClass]},e(B)(i.item.badgeContent,"span")),{default:c(()=>[G(R(i.item.badgeContent),1)]),_:1},16,["class"])),[[k,!e(p)]]):L("",!0)]),_:1})]),_:1},16,["class"]))],2)):L("",!0)}}),Ge={key:0,class:"nav-section-title"},We={class:"title-wrapper"},Me=A({__name:"VerticalNavSectionTitle",props:{item:{}},setup(y){const p=W().isVerticalNavMini();return(i,n)=>e(Y)(i.item.action,i.item.subject)?(s(),T("li",Ge,[g("div",We,[N(E,{name:"vertical-nav-section-title",mode:"out-in"},{default:c(()=>[(s(),v(u(e(p)?e(r).app.iconRenderer:e(r).app.i18n.enable?"i18n-t":"span"),h({key:e(p),class:e(p)?"placeholder-icon":"title-text"},{...e(r).icons.sectionTitlePlaceholder,...e(B)(i.item.heading,"span")}),{default:c(()=>[G(R(e(p)?null:i.item.heading),1)]),_:1},16,["class"]))]),_:1})])])):L("",!0)}}),Ee=[{title:"Home",to:{name:"root"},icon:{icon:"tabler-smart-home"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"tabler-file"}}],je={class:"d-flex h-100 align-center"},lt=A({__name:"DefaultLayoutWithVerticalNav",setup(y){return(l,p)=>{const i=z("IconBtn");return s(),v(e(Be),{"nav-items":e(Ee)},{navbar:c(({toggleVerticalOverlayNavActive:n})=>{var a;return[g("div",je,[N(i,{id:"vertical-nav-toggle-btn",class:"ms-n3 d-lg-none",onClick:_=>n(!0)},{default:c(()=>[N(pe,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"]),N(ue),N(Ne),e(M).app.i18n.enable&&((a=e(M).app.i18n.langConfig)!=null&&a.length)?(s(),v(ge,{key:0,languages:e(M).app.i18n.langConfig},null,8,["languages"])):L("",!0),N(me)])]}),footer:c(()=>[N(de)]),default:c(()=>[b(l.$slots,"default")]),_:3},8,["nav-items"])}}});export{lt as default};
