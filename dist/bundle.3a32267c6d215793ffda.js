(()=>{"use strict";function t(t){t.classList.add("first-sticky")}function e(t){t.classList.remove("first-sticky")}function o(t){t.classList.add("bhdh")}const n=function(){const t=document.querySelector(".button1"),e=document.querySelector(".button2"),o=document.querySelector(".button3");return{button1:()=>{t.id="active",e.id="",o.id=""},button2:()=>{e.id="active",t.id="",o.id=""},button3:()=>{o.id="active",e.id="",t.id=""}}}(),r={lastElementInViewport:(t,o,n,r)=>{const i=new IntersectionObserver((r=>{r.forEach((r=>{1===r.intersectionRatio&&(e(o),function(t){t.classList.add("sticky")}(n),function(t){t.classList.remove("bhdh")}(t))}))}),{root:null,rootMargin:"0px",threshold:1});i.observe(r)},isInViewport:e=>{new IntersectionObserver((o=>{o.forEach((o=>{1==o.intersectionRatio&&t(e)}))}),{root:null,rootMargin:"0px",threshold:1}).observe(e)},isNotInViewport:(t,o)=>{new IntersectionObserver((t=>{t.forEach((t=>{t.intersectionRatio<=.2&&e(o)}))}),{root:null,rootMargin:"0px",threshold:.2}).observe(t)},navInViewport:(t,e)=>{const o=new IntersectionObserver((t=>{t.forEach((t=>{t.intersectionRatio>=.75&&function(t){t.classList.remove("fixed-nav")}(e)}))}),{root:null,rootMargin:"0px",threshold:.75});o.observe(t)},navNotInViewport:(t,e)=>{const o=new IntersectionObserver((t=>{t.forEach((t=>{t.intersectionRatio<=.2&&function(t){t.classList.add("fixed-nav")}(e)}))}),{root:null,rootMargin:"0px",threshold:.2});o.observe(t)},personalInViewport:(e,r,i)=>{new IntersectionObserver((e=>{e.forEach((e=>{1===e.intersectionRatio&&(n.button1(),t(r),o(i))}))}),{root:null,rootMargin:"0px",threshold:1}).observe(e)},familyInViewport:(e,r,i)=>{new IntersectionObserver((e=>{e.forEach((e=>{1==e.intersectionRatio&&(n.button2(),t(r),o(i))}))}),{root:null,rootMargin:"0px",threshold:1}).observe(e)},teamInViewport:(e,r,i)=>{new IntersectionObserver((e=>{e.forEach((e=>{1==e.intersectionRatio&&(n.button3(),t(r),o(i))}))}),{root:null,rootMargin:"0px",threshold:1}).observe(e)}};(function(){const t=document.querySelector("#first-sticky"),e=document.querySelector("#temp-sticky"),o=document.querySelectorAll("#enter"),i=document.querySelector(".button1"),c=document.querySelector(".button2"),s=document.querySelector(".button3"),l=document.querySelector("nav"),a=document.querySelector("#bdhd"),u=document.querySelector("#team-box-last"),d=document.querySelectorAll("#you-box-start"),b=document.querySelectorAll("#family-box-start"),v=document.querySelectorAll("#team-box-start");return{welcome:()=>{document.addEventListener("DOMContentLoaded",(function(){document.addEventListener("scroll",(()=>{r.isInViewport(t),r.navNotInViewport(a,l),r.lastElementInViewport(a,t,e,u)})),document.addEventListener("scroll",(()=>{r.isNotInViewport(a,t),r.navInViewport(a,l)})),i.addEventListener("click",(()=>{n.button1()})),c.addEventListener("click",(()=>{n.button2()})),s.addEventListener("click",(()=>{n.button3()})),d.forEach((e=>{r.personalInViewport(e,t,a)})),b.forEach((e=>{r.familyInViewport(e,t,a)})),v.forEach((e=>{r.teamInViewport(e,t,a)})),o.forEach((o=>{r.lastElementInViewport(a,t,e,o)}))}))}}})().welcome()})();
//# sourceMappingURL=bundle.3a32267c6d215793ffda.js.map