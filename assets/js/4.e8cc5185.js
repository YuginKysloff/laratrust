(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(t,a,e){},166:function(t,a,e){"use strict";var s=e(164);e.n(s).a},172:function(t,a,e){"use strict";e.r(a);e(90);var s={components:{NavLink:e(18).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.$site.themeConfig.activeVersion.link,text:this.data.actionText}}}},i=(e(166),e(0)),n=Object(i.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),e("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,function(a){return e("div",{staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})):t._e(),t._v(" "),e("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null);n.options.__file="CustomHome.vue";a.default=n.exports}}]);