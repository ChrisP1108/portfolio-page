(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,11],{268:function(t,e,r){var content=r(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("263d90e0",content,!0,{sourceMap:!1})},269:function(t,e,r){"use strict";r.r(e);r(96),r(1),r(22);var o={name:"Button",props:{item:Object},computed:{email:function(){return this.$store.state.navMenuItems.find((function(t){return"email"===t.name})).email}},methods:{selected:function(t){this.$store.commit("pageToggler",t)}}},n=r(65),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"button hover-glow button-margin-bottom",on:{click:function(e){return t.selected(t.item.name)}}},[t._v("\n    "+t._s(t.item.name.toUpperCase())+"\n")])}),[],!1,null,"6ca4e040",null);e.default=component.exports},277:function(t,e,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("9653f28a",content,!0,{sourceMap:!1})},278:function(t,e,r){"use strict";r(268)},279:function(t,e,r){var o=r(76)(!1);o.push([t.i,'h1[data-v-5bec5f76]{font-family:"Russo One",sans-serif;font-size:1.375rem;font-weight:500;text-align:center;width:100%}h2[data-v-5bec5f76]{color:#9e4c00;font-size:1.75rem;font-weight:500}.small-text[data-v-5bec5f76],h2[data-v-5bec5f76]{font-family:"Hammersmith One",sans-serif;margin:0;transition:.25s}.small-text[data-v-5bec5f76]{font-size:.875rem}.medium-text[data-v-5bec5f76],.small-text[data-v-5bec5f76]{color:#d86800;text-align:center}.medium-text[data-v-5bec5f76]{font-family:"Hammersmith One",sans-serif;font-size:1rem;transition:.25s;margin:0}.gray-text[data-v-5bec5f76]{color:#8b8b8b}.orange-text[data-v-5bec5f76]{color:#d86800}.hover-glow[data-v-5bec5f76]:hover{filter:drop-shadow(0 0 10px #9e4c00)}.active-nav-link[data-v-5bec5f76]{color:#fff}@media (min-width:576px){.small-text[data-v-5bec5f76]{font-size:1rem}.medium-text[data-v-5bec5f76]{font-size:1.25rem}}@media (min-width:768px){h1[data-v-5bec5f76]{font-size:1.75rem}.small-text[data-v-5bec5f76]{font-size:1.125rem}}@media (min-width:1024px){h1[data-v-5bec5f76]{font-size:1.75rem}.small-text[data-v-5bec5f76]{font-size:1.375rem}}.links-section[data-v-5bec5f76]{margin-top:2rem;margin-left:68%;width:50%;justify-content:center;align-items:center;z-index:1}.links-container[data-v-5bec5f76],.links-section[data-v-5bec5f76]{display:flex;flex-direction:column}.links-container[data-v-5bec5f76]{justify-content:space-between;height:7.875rem}.rounded[data-v-5bec5f76]{border-radius:50%!important}.chamfered[data-v-5bec5f76]{border-radius:10%}.page-container[data-v-5bec5f76]{display:flex;flex-direction:column;align-items:center;width:75vw;height:30.75rem;position:relative}@media (min-width:576px){.page-container[data-v-5bec5f76]{width:70vw!important}}@media (min-width:768px){.page-container[data-v-5bec5f76]{width:80vw!important;padding-bottom:1rem}}@media (min-width:1024px){.page-container[data-v-5bec5f76]{width:70vw!important;max-width:56rem;padding-bottom:2rem}.links-container[data-v-5bec5f76]{display:flex;flex-direction:row;justify-content:space-between;height:7.875rem;width:40%;margin-top:1.5rem}}.button[data-v-5bec5f76]{cursor:pointer;display:flex;justify-content:center;align-items:center;width:42.67vw;max-width:12.5rem;height:2.25rem;background:#9e4c00;border-radius:.375rem;color:#1a1a1a;font-family:"Hammersmith One",sans-serif;font-size:1rem;font-weight:600;transition:.25s;box-shadow:4px 4px 10px #1a1a1a}.button[data-v-5bec5f76]:hover{cursor:pointer;color:#d1d1d1}.button-margin-bottom[data-v-5bec5f76]{margin-bottom:1.5rem}@media (min-width:768px){.button[data-v-5bec5f76]{height:2.5rem}}@media (min-width:1024px){.button[data-v-5bec5f76]{height:2.75rem}}.blur-on[data-v-5bec5f76]{-webkit-animation-name:blurOn-data-v-5bec5f76;animation-name:blurOn-data-v-5bec5f76;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes blurOn-data-v-5bec5f76{0%{filter:blur(0);opacity:1}99%{filter:blur(.5rem);opacity:0;transform:scale(1)}to{transform:scale(0)}}@keyframes blurOn-data-v-5bec5f76{0%{filter:blur(0);opacity:1}99%{filter:blur(.5rem);opacity:0;transform:scale(1)}to{transform:scale(0)}}.blur-off[data-v-5bec5f76]{display:block;-webkit-animation-name:blurOff-data-v-5bec5f76;animation-name:blurOff-data-v-5bec5f76;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes blurOff-data-v-5bec5f76{0%{filter:blur(.5rem);opacity:0;transform:scale(1)}99%{filter:blur(0);opacity:1}to{opacity:1}}@keyframes blurOff-data-v-5bec5f76{0%{filter:blur(.5rem);opacity:0;transform:scale(1)}99%{filter:blur(0);opacity:1}to{opacity:1}}@-webkit-keyframes glow-data-v-5bec5f76{0%{filter:drop-shadow(0 0 6px #000)}50%{filter:drop-shadow(0 0 10px #d86800)}to{filter:drop-shadow(0 0 6px #000)}}@keyframes glow-data-v-5bec5f76{0%{filter:drop-shadow(0 0 6px #000)}50%{filter:drop-shadow(0 0 10px #d86800)}to{filter:drop-shadow(0 0 6px #000)}}@-webkit-keyframes fadeIn-data-v-5bec5f76{0%{opacity:0;filter:blur(.5rem)}to{opacity:1;filter:blur(0)}}@keyframes fadeIn-data-v-5bec5f76{0%{opacity:0;filter:blur(.5rem)}to{opacity:1;filter:blur(0)}}html[data-v-5bec5f76]{min-height:48rem!important}.sample-container[data-v-5bec5f76]{filter:drop-shadow(4px 4px 10px #9e4c00);cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative}.background-container[data-v-5bec5f76],.sample-container[data-v-5bec5f76]{width:6.25rem;height:6.25rem;transition:.25s}.background-container[data-v-5bec5f76]{background-size:cover!important;border-radius:25%}p[data-v-5bec5f76]{position:absolute;left:50%;transform:translateX(-50%);opacity:0;transition:.5s;z-index:5}.portfolio-container-text[data-v-5bec5f76]{font-family:"Hammersmith One",sans-serif;color:#d86800;font-size:.75rem;transition:.25s;margin:0;text-align:center}.sample-container[data-v-5bec5f76]:hover{transform:scale(1.5);z-index:10;filter:drop-shadow(4px 4px 10px #fff)}.sample-container:hover .background-container[data-v-5bec5f76]{filter:brightness(.25) blur(1px);border-radius:50%}.sample-container:hover p[data-v-5bec5f76]{opacity:1;z-index:11;text-shadow:0 0 6px #000}img[data-v-5bec5f76]{background-size:contain;width:3.125rem;height:3.125rem;filter:drop-shadow(0 0 10px #000);position:absolute;top:50%;transform:translateY(-50%);opacity:1}img[data-v-5bec5f76]:hover{opacity:0}@media (min-width:768px){.background-container[data-v-5bec5f76],.sample-container[data-v-5bec5f76]{width:7rem;height:7rem}img[data-v-5bec5f76]{width:4rem;height:4rem}.portfolio-container-text[data-v-5bec5f76]{font-size:.875rem}}@media (min-width:768px){.background-container[data-v-5bec5f76],.sample-container[data-v-5bec5f76]{width:7rem;height:7rem}img[data-v-5bec5f76]{width:4rem;height:4rem}}@media (min-width:1024px){.background-container[data-v-5bec5f76],.sample-container[data-v-5bec5f76]{width:8rem;height:8rem}.portfolio-container-text[data-v-5bec5f76]{font-size:1rem}}.scale-up[data-v-5bec5f76]{transform:scale(1.4) translateY(-37%)}',""]),t.exports=o},282:function(t,e,r){"use strict";r.r(e);var o={name:"PortfolioSample",props:{sample:Object},methods:{openPage:function(){window.open(this.sample.url)}},data:function(){return{backgroundImg:{background:"url('".concat(this.sample.imgSrc,"')"),backgroundSize:"contain"},baseUrl:"https://raw.githubusercontent.com/ChrisP1108/portfolio-page/main/assets/images"}}},n=(r(278),r(65)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sample-container",on:{click:t.openPage}},[r("p",{staticClass:"portfolio-container-text"},[t._v(t._s(t.sample.title))]),t._v(" "),r("img",{class:"angular"===t.sample.framework?"scale-up":"",attrs:{src:t.baseUrl+"/"+t.sample.framework+"-icon.svg",alt:t.sample.framework}}),t._v(" "),r("div",{staticClass:"background-container",style:t.backgroundImg})])}),[],!1,null,"5bec5f76",null);e.default=component.exports},301:function(t,e,r){"use strict";r(277)},302:function(t,e,r){var o=r(76)(!1);o.push([t.i,'h1[data-v-bcfe0842]{font-family:"Russo One",sans-serif;font-size:1.375rem;font-weight:500;text-align:center;width:100%}h2[data-v-bcfe0842]{color:#9e4c00;font-size:1.75rem;font-weight:500}.small-text[data-v-bcfe0842],h2[data-v-bcfe0842]{font-family:"Hammersmith One",sans-serif;margin:0;transition:.25s}.small-text[data-v-bcfe0842]{font-size:.875rem}.medium-text[data-v-bcfe0842],.small-text[data-v-bcfe0842]{color:#d86800;text-align:center}.medium-text[data-v-bcfe0842]{font-family:"Hammersmith One",sans-serif;font-size:1rem;transition:.25s;margin:0}.gray-text[data-v-bcfe0842]{color:#8b8b8b}.orange-text[data-v-bcfe0842]{color:#d86800}.hover-glow[data-v-bcfe0842]:hover{filter:drop-shadow(0 0 10px #9e4c00)}.active-nav-link[data-v-bcfe0842]{color:#fff}@media (min-width:576px){.small-text[data-v-bcfe0842]{font-size:1rem}.medium-text[data-v-bcfe0842]{font-size:1.25rem}}@media (min-width:768px){h1[data-v-bcfe0842]{font-size:1.75rem}.small-text[data-v-bcfe0842]{font-size:1.125rem}}@media (min-width:1024px){h1[data-v-bcfe0842]{font-size:1.75rem}.small-text[data-v-bcfe0842]{font-size:1.375rem}}.links-section[data-v-bcfe0842]{margin-top:2rem;margin-left:68%;width:50%;justify-content:center;align-items:center;z-index:1}.links-container[data-v-bcfe0842],.links-section[data-v-bcfe0842]{display:flex;flex-direction:column}.links-container[data-v-bcfe0842]{justify-content:space-between;height:7.875rem}.rounded[data-v-bcfe0842]{border-radius:50%!important}.chamfered[data-v-bcfe0842]{border-radius:10%}.page-container[data-v-bcfe0842]{display:flex;flex-direction:column;align-items:center;width:75vw;height:30.75rem;position:relative}@media (min-width:576px){.page-container[data-v-bcfe0842]{width:70vw!important}}@media (min-width:768px){.page-container[data-v-bcfe0842]{width:80vw!important;padding-bottom:1rem}}@media (min-width:1024px){.page-container[data-v-bcfe0842]{width:70vw!important;max-width:56rem;padding-bottom:2rem}.links-container[data-v-bcfe0842]{display:flex;flex-direction:row;justify-content:space-between;height:7.875rem;width:40%;margin-top:1.5rem}}.button[data-v-bcfe0842]{cursor:pointer;display:flex;justify-content:center;align-items:center;width:42.67vw;max-width:12.5rem;height:2.25rem;background:#9e4c00;border-radius:.375rem;color:#1a1a1a;font-family:"Hammersmith One",sans-serif;font-size:1rem;font-weight:600;transition:.25s;box-shadow:4px 4px 10px #1a1a1a}.button[data-v-bcfe0842]:hover{cursor:pointer;color:#d1d1d1}.button-margin-bottom[data-v-bcfe0842]{margin-bottom:1.5rem}@media (min-width:768px){.button[data-v-bcfe0842]{height:2.5rem}}@media (min-width:1024px){.button[data-v-bcfe0842]{height:2.75rem}}.blur-on[data-v-bcfe0842]{-webkit-animation-name:blurOn-data-v-bcfe0842;animation-name:blurOn-data-v-bcfe0842;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes blurOn-data-v-bcfe0842{0%{filter:blur(0);opacity:1}99%{filter:blur(.5rem);opacity:0;transform:scale(1)}to{transform:scale(0)}}@keyframes blurOn-data-v-bcfe0842{0%{filter:blur(0);opacity:1}99%{filter:blur(.5rem);opacity:0;transform:scale(1)}to{transform:scale(0)}}.blur-off[data-v-bcfe0842]{display:block;-webkit-animation-name:blurOff-data-v-bcfe0842;animation-name:blurOff-data-v-bcfe0842;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes blurOff-data-v-bcfe0842{0%{filter:blur(.5rem);opacity:0;transform:scale(1)}99%{filter:blur(0);opacity:1}to{opacity:1}}@keyframes blurOff-data-v-bcfe0842{0%{filter:blur(.5rem);opacity:0;transform:scale(1)}99%{filter:blur(0);opacity:1}to{opacity:1}}@-webkit-keyframes glow-data-v-bcfe0842{0%{filter:drop-shadow(0 0 6px #000)}50%{filter:drop-shadow(0 0 10px #d86800)}to{filter:drop-shadow(0 0 6px #000)}}@keyframes glow-data-v-bcfe0842{0%{filter:drop-shadow(0 0 6px #000)}50%{filter:drop-shadow(0 0 10px #d86800)}to{filter:drop-shadow(0 0 6px #000)}}@-webkit-keyframes fadeIn-data-v-bcfe0842{0%{opacity:0;filter:blur(.5rem)}to{opacity:1;filter:blur(0)}}@keyframes fadeIn-data-v-bcfe0842{0%{opacity:0;filter:blur(.5rem)}to{opacity:1;filter:blur(0)}}html[data-v-bcfe0842]{min-height:48rem!important}h1[data-v-bcfe0842]{margin-bottom:0!important}.page-container[data-v-bcfe0842]{justify-content:space-between}.flex-container[data-v-bcfe0842]{display:flex;flex-wrap:wrap;grid-gap:8vw;gap:8vw;justify-content:center}.padding[data-v-bcfe0842]{padding:0 8vw}p[data-v-bcfe0842]{margin-bottom:9vw}@media (min-width:768px){.grid-container[data-v-bcfe0842]{display:flex;justify-content:space-between;width:80%;grid-column-gap:0;grid-row-gap:0}.button[data-v-bcfe0842]{margin:1rem 0 0}}',""]),t.exports=o},311:function(t,e,r){"use strict";r.r(e);r(2),r(1),r(22);var o={name:"About",computed:{aboutButtons:function(){return this.$store.state.navMenuItems.filter((function(t){if("resume"===t.name||"email"===t.name)return!0}))}},data:function(){return{samples:[{id:1,title:"Audiophile E-Commerce App",framework:"angular",imgSrc:"https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/swxkgbgbn1z5yixxqwjb.jpg",url:"https://www.frontendmentor.io/solutions/angular-typescript-localstorage-Ve-xq-UXr"},{id:2,title:"Product Feedback App",framework:"vue",imgSrc:"https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/vnx44muoxqyn886oi5sb.jpg",url:"https://www.frontendmentor.io/solutions/vuejs-rXKKm4EN2"},{id:3,title:"Invoice App",framework:"react",imgSrc:"https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/v760dr4mqyro0xey3dr3.jpg",url:"https://www.frontendmentor.io/solutions/react-js-sass-hooksforredux-3wkJ36EC0"}]}}},n=(r(301),r(65)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-container"},[r("h1",{staticClass:"orange-text"},[t._v("Portfolio")]),t._v(" "),r("p",{staticClass:"medium-text"},[t._v("Click Links To See Various Projects ")]),t._v(" "),r("div",{staticClass:"flex-container"},t._l(t.samples,(function(t){return r("PortfolioSample",{key:t.id,attrs:{sample:t}})})),1),t._v(" "),r("div",{staticClass:"portfolio-buttons"},t._l(t.aboutButtons,(function(t){return r("div",{key:t.id},[r("Button",{attrs:{item:t}})],1)})),0)])}),[],!1,null,"bcfe0842",null);e.default=component.exports;installComponents(component,{PortfolioSample:r(282).default,Button:r(269).default})}}]);