import{aa as N,al as B,an as Z,b0 as ge,as as J,ba as re,ac as Q,aw as Se,ay as Ce,bb as ue,az as F,Y as m,aB as ee,bc as xe,aM as le,w as Ie,af as de,b as i,bd as te,$ as w,be as Ve,aZ as ze,at as ve,au as fe,ax as pe,aA as Pe,Z as W,q as he,b5 as ae,am as Ae,ao as we,ap as _e,bf as Ee,aq as Re,bg as Te,ar as Fe,bh as Be,av as Ge,bi as Oe,bj as Me,b6 as De,bk as We,bl as Le,bm as He,ad as qe,bn as $e,bo as Ke,I as ne,bp as Ue,bq as je,br as Ne,aU as L,J as Ze,F as se}from"./index-DeLVerzj.js";import{V as ie}from"./VAvatar-B5M2SGw1.js";const nl=e=>e?e.split(" ").map(a=>a.charAt(0).toUpperCase()).join(""):"";function Je(e){let{selectedElement:n,containerElement:a,isRtl:r,isHorizontal:o}=e;const b=G(o,a),c=be(o,r,a),y=G(o,n),v=ye(o,n),k=y*.4;return c>v?v-k:c+b<v+y?v-b+y+k:c}function Qe(e){let{selectedElement:n,containerElement:a,isHorizontal:r}=e;const o=G(r,a),b=ye(r,n),c=G(r,n);return b-o/2+c/2}function oe(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function Xe(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function be(e,n,a){if(!a)return 0;const{scrollLeft:r,offsetWidth:o,scrollWidth:b}=a;return e?n?b-o+r:r:a.scrollTop}function G(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function ye(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const Ye=Symbol.for("vuetify:v-slide-group"),me=N({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ye},nextIcon:{type:B,default:"$next"},prevIcon:{type:B,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...Z(),...ge({mobile:null}),...J(),...re({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ce=Q()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:r}=Se(),{displayClasses:o,mobile:b}=Ce(e),c=ue(e,e.symbol),y=F(!1),v=F(0),k=F(0),x=F(0),d=m(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:_}=ee(),{resizeRef:p,contentRect:V}=ee(),s=xe(),g=m(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),H=m(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[0]):-1),S=m(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[c.selected.value.length-1]):-1);if(le){let l=-1;Ie(()=>[c.selected.value,_.value,V.value,d.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(_.value&&V.value){const t=d.value?"width":"height";k.value=_.value[t],x.value=V.value[t],y.value=k.value+1<x.value}if(H.value>=0&&p.el){const t=p.el.children[S.value];E(t,e.centerActive)}})})}const z=F(!1);function E(l,t){let u=0;t?u=Qe({containerElement:f.el,isHorizontal:d.value,selectedElement:l}):u=Je({containerElement:f.el,isHorizontal:d.value,isRtl:r.value,selectedElement:l}),O(u)}function O(l){if(!le||!f.el)return;const t=G(d.value,f.el),u=be(d.value,r.value,f.el);if(!(oe(d.value,f.el)<=t||Math.abs(l-u)<16)){if(d.value&&r.value&&f.el){const{scrollWidth:D,offsetWidth:j}=f.el;l=D-j-l}d.value?s.horizontal(l,g.value):s(l,g.value)}}function h(l){const{scrollTop:t,scrollLeft:u}=l.target;v.value=d.value?u:t}function I(l){if(z.value=!0,!(!y.value||!p.el)){for(const t of l.composedPath())for(const u of p.el.children)if(u===t){E(u);return}}}function q(l){z.value=!1}let R=!1;function M(l){var t;!R&&!z.value&&!(l.relatedTarget&&((t=p.el)!=null&&t.contains(l.relatedTarget)))&&C(),R=!1}function T(){R=!0}function $(l){if(!p.el)return;function t(u){l.preventDefault(),C(u)}d.value?l.key==="ArrowRight"?t(r.value?"prev":"next"):l.key==="ArrowLeft"&&t(r.value?"next":"prev"):l.key==="ArrowDown"?t("next"):l.key==="ArrowUp"&&t("prev"),l.key==="Home"?t("first"):l.key==="End"&&t("last")}function C(l){var u,A;if(!p.el)return;let t;if(!l)t=Ve(p.el)[0];else if(l==="next"){if(t=(u=p.el.querySelector(":focus"))==null?void 0:u.nextElementSibling,!t)return C("first")}else if(l==="prev"){if(t=(A=p.el.querySelector(":focus"))==null?void 0:A.previousElementSibling,!t)return C("last")}else l==="first"?t=p.el.firstElementChild:l==="last"&&(t=p.el.lastElementChild);t&&t.focus({preventScroll:!0})}function P(l){const t=d.value&&r.value?-1:1,u=(l==="prev"?-t:t)*k.value;let A=v.value+u;if(d.value&&r.value&&f.el){const{scrollWidth:D,offsetWidth:j}=f.el;A+=D-j}O(A)}const K=m(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),U=m(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!b.value;case!0:return y.value||Math.abs(v.value)>0;case"mobile":return b.value||y.value||Math.abs(v.value)>0;default:return!b.value&&(y.value||Math.abs(v.value)>0)}}),X=m(()=>Math.abs(v.value)>1),Y=m(()=>{if(!f.value)return!1;const l=oe(d.value,f.el),t=Xe(d.value,f.el);return l-t-Math.abs(v.value)>1});return de(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":U.value,"v-slide-group--is-overflowing":y.value},o.value,e.class],style:e.style,tabindex:z.value||c.selected.value.length?-1:0,onFocus:M},{default:()=>{var l,t,u;return[U.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!X.value}],onMousedown:T,onClick:()=>X.value&&P("prev")},[((l=a.prev)==null?void 0:l.call(a,K.value))??i(te,null,{default:()=>[i(w,{icon:r.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:h},[i("div",{ref:p,class:"v-slide-group__content",onFocusin:I,onFocusout:q,onKeydown:$},[(t=a.default)==null?void 0:t.call(a,K.value)])]),U.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Y.value}],onMousedown:T,onClick:()=>Y.value&&P("next")},[((u=a.next)==null?void 0:u.call(a,K.value))??i(te,null,{default:()=>[i(w,{icon:r.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:P,scrollOffset:v,focus:C}}}),ke=Symbol.for("vuetify:v-chip-group"),el=N({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ze},...me(),...Z(),...re({selectedClass:"v-chip--selected"}),...J(),...ve(),...fe({variant:"tonal"})},"VChipGroup");Q()({name:"VChipGroup",props:el(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:r}=pe(e),{isSelected:o,select:b,next:c,prev:y,selected:v}=ue(e,ke);return Pe({VChip:{color:W(e,"color"),disabled:W(e,"disabled"),filter:W(e,"filter"),variant:W(e,"variant")}}),de(()=>{const k=ce.filterProps(e);return i(ce,he(k,{class:["v-chip-group",{"v-chip-group--column":e.column},r.value,e.class],style:e.style}),{default:()=>{var x;return[(x=a.default)==null?void 0:x.call(a,{isSelected:o,select:b,next:c,prev:y,selected:v.value})]}})}),{}}});const ll=N({activeClass:String,appendAvatar:String,appendIcon:B,closable:Boolean,closeIcon:{type:B,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ae(),onClickOnce:ae(),...Ae(),...Z(),...we(),..._e(),...Ee(),...Re(),...Te(),...Fe(),...J({tag:"span"}),...ve(),...fe({variant:"tonal"})},"VChip"),sl=Q()({name:"VChip",directives:{Ripple:Be},props:ll(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:a,emit:r,slots:o}=n;const{t:b}=Ge(),{borderClasses:c}=Oe(e),{colorClasses:y,colorStyles:v,variantClasses:k}=Me(e),{densityClasses:x}=De(e),{elevationClasses:d}=We(e),{roundedClasses:f}=Le(e),{sizeClasses:_}=He(e),{themeClasses:p}=pe(e),V=qe(e,"modelValue"),s=$e(e,ke,!1),g=Ke(e,a),H=m(()=>e.link!==!1&&g.isLink.value),S=m(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||g.isClickable.value)),z=m(()=>({"aria-label":b(e.closeLabel),onClick(h){h.preventDefault(),h.stopPropagation(),V.value=!1,r("click:close",h)}}));function E(h){var I;r("click",h),S.value&&((I=g.navigate)==null||I.call(g,h),s==null||s.toggle())}function O(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),E(h))}return()=>{const h=g.isLink.value?"a":e.tag,I=!!(e.appendIcon||e.appendAvatar),q=!!(I||o.append),R=!!(o.close||e.closable),M=!!(o.filter||e.filter)&&s,T=!!(e.prependIcon||e.prependAvatar),$=!!(T||o.prepend),C=!s||s.isSelected.value;return V.value&&ne(i(h,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":M,"v-chip--pill":e.pill},p.value,c.value,C?y.value:void 0,x.value,d.value,f.value,_.value,k.value,s==null?void 0:s.selectedClass.value,e.class],style:[C?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:g.href.value,tabindex:S.value?0:void 0,onClick:E,onKeydown:S.value&&!H.value&&O},{default:()=>{var P;return[je(S.value,"v-chip"),M&&i(Ne,{key:"filter"},{default:()=>[ne(i("div",{class:"v-chip__filter"},[o.filter?i(L,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(w,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ze,s.isSelected.value]])]}),$&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(L,{key:"prepend-defaults",disabled:!T,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(se,null,[e.prependIcon&&i(w,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(ie,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((P=o.default)==null?void 0:P.call(o,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),q&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(L,{key:"append-defaults",disabled:!I,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(se,null,[e.appendIcon&&i(w,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(ie,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),R&&i("button",he({key:"close",class:"v-chip__close",type:"button"},z.value),[o.close?i(L,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(w,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ue("ripple"),S.value&&e.ripple,null]])}}});export{sl as V,nl as a};
