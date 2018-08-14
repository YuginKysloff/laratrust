(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{187:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("In order to upgrade from Laratrust 4.0 to 5.0 you have to follow these steps:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),e("ol",{attrs:{start:"8"}},[e("li",[e("p",[t._v("If you use teams and in your code you use the "),e("code",[t._v("syncRoles")]),t._v(" and "),e("code",[t._v("syncPermissions")]),t._v(" read the new "),e("docs-link",{attrs:{to:"/usage/concepts.html#new-sync-behavior"}},[t._v("sync method behavior")]),t._v(".")],1)]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)]),t._v(" "),e("p",[t._v("Now you can use the 5.0 version without any problem.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"upgrade-from-4-0-to-5-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-from-4-0-to-5-0","aria-hidden":"true"}},[this._v("#")]),this._v(" Upgrade from 4.0 to 5.0")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("IMPORTANT")]),this._v(" "),s("p",[this._v("Laratrust 5.0 requires Laravel >= 5.2.32.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("Change your "),s("code",[this._v("composer.json")]),this._v(" to require the 5.0 version of Laratrust:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[this._v('"santigarcor/laratrust"')]),s("span",{attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),s("span",{attrs:{class:"token string"}},[this._v('"5.0.*"')]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("Run "),e("code",[t._v("composer update")]),t._v(" to update the source code.")])]),t._v(" "),e("li",[e("p",[t._v("Run "),e("code",[t._v("php artisan config:clear")]),t._v(" and "),e("code",[t._v("php artisan cache:clear")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Update your "),e("code",[t._v("config/laratrust.php")]),t._v(":")]),t._v(" "),e("p",[t._v("4.1. Backup your "),e("code",[t._v("config/laratrust.php")]),t._v(" configuration values.")]),t._v(" "),e("p",[t._v("4.2. Delete the "),e("code",[t._v("config/laratrust.php")]),t._v(" file.")]),t._v(" "),e("p",[t._v("4.3. Run "),e("code",[t._v("php artisan vendor:publish --tag=laratrust")]),t._v(".")]),t._v(" "),e("p",[t._v("4.4. Update the "),e("code",[t._v("config/laratrust.php")]),t._v(" file with your old values.")]),t._v(" "),e("p",[t._v("4.5. Set the "),e("code",[t._v("middleware.register")]),t._v(" value to "),e("code",[t._v("false")]),t._v(".")]),t._v(" "),e("p",[t._v("4.6. Set the "),e("code",[t._v("teams_strict_check")]),t._v(" value to "),e("code",[t._v("true")]),t._v(" "),e("strong",[t._v("only")]),t._v(" if you are using teams.")])]),t._v(" "),e("li",[e("p",[t._v("Inside your "),e("code",[t._v("Role")]),t._v(", "),e("code",[t._v("Permission")]),t._v(" and "),e("code",[t._v("Team")]),t._v(" models update the "),e("code",[t._v("use")]),t._v(" statement from:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("use Laratrust\\LaratrustRole")]),t._v(" to "),e("code",[t._v("use Laratrust\\Models\\LaratrustRole")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("use Laratrust\\LaratrustPermission")]),t._v(" to "),e("code",[t._v("use Laratrust\\Models\\LaratrustPermission")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("use Laratrust\\LaratrustTeam")]),t._v(" to "),e("code",[t._v("use Laratrust\\Models\\LaratrustTeam")]),t._v(";")])])]),t._v(" "),e("li",[e("p",[t._v("If you use the ability method and you pass it comma separated roles or permissions, change them to a pipe separated string:")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// From")]),t._v("\n"),e("span",{attrs:{class:"token variable"}},[t._v("$user")]),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token function"}},[t._v("ability")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'admin,owner'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'create-post,edit-user'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("// To")]),t._v("\n"),e("span",{attrs:{class:"token variable"}},[t._v("$user")]),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token function"}},[t._v("ability")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'admin|owner'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'create-post|edit-user'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"7"}},[s("li",[this._v("If you are using the "),s("code",[this._v("Ownable")]),this._v(" interface, please update all the classes implementing it:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("// From")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("ownerKey")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("// To")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("ownerKey")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token variable"}},[t._v("$owner")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[t._v("The "),e("code",[t._v("cachedRoles")]),t._v(" and "),e("code",[t._v("cachedPermissions")]),t._v(" methods now return an array when you have the "),e("code",[t._v("laratrust.use_cache")]),t._v(" option set to "),e("code",[t._v("true")]),t._v(". So if you use these methods, please check your code.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("Delete the "),s("code",[this._v("LaratrustSeeder.php")]),this._v(" file and run "),s("code",[this._v("php artisan laratrust:seeder")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("Run "),s("code",[this._v("composer dump-autoload")]),this._v(".")])])}],!1,null,null,null);n.options.__file="upgrade.md";s.default=n.exports}}]);