import{_ as o,M as l,p as c,q as i,Q as n,t as e,N as t,a1 as a}from"./framework-e799b403.js";const r={},p=n("h1",{id:"pc-site-说明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pc-site-说明","aria-hidden":"true"},"#"),e(" pc-site 说明")],-1),d=n("p",null,[e("本项目为乐视网 PC 站。"),n("br"),e(" 重构之前使用 jQuery 的旧项目，使用服务端渲染来达到更快的加载速度和更好的 SEO。")],-1),u=n("h3",{id:"技术栈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#技术栈","aria-hidden":"true"},"#"),e(" 技术栈")],-1),h=n("thead",null,[n("tr",null,[n("th",null,"类型"),n("th",null,"说明")])],-1),_=n("tr",null,[n("td",null,"框架"),n("td",null,"Vue 3")],-1),v=n("tr",null,[n("td",null,"CSS 预处理器"),n("td",null,"less")],-1),k=n("tr",null,[n("td",null,"构建工具"),n("td",null,"vite")],-1),m=n("td",null,"路由",-1),f={href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},b=n("td",null,"状态管理器",-1),g={href:"https://cn.vuejs.org/guide/scaling-up/state-management.html#what-is-state-management",target:"_blank",rel:"noopener noreferrer"},S=n("td",null,"重要插件",-1),j={href:"https://antdv.com/components/overview-cn",target:"_blank",rel:"noopener noreferrer"},x=n("br",null,null,-1),w={href:"https://cn.vite-plugin-ssr.com/",target:"_blank",rel:"noopener noreferrer"},y=n("h3",{id:"ssr",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ssr","aria-hidden":"true"},"#"),e(" SSR")],-1),R=n("br",null,null,-1),C={href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://cn.vite-plugin-ssr.com/",target:"_blank",rel:"noopener noreferrer"},P=n("strong",null,"适合本项目",-1),V=a('<h4 id="基本流程" tabindex="-1"><a class="header-anchor" href="#基本流程" aria-hidden="true">#</a> 基本流程</h4><p>本项目的核心在 <code>/renderer</code> 文件夹内。</p><ul><li><code>_default.page.client.js</code> 仅负责客户端渲染；</li><li><code>_default.page.server.js</code> 仅负责服务端渲染；</li><li><code>app.js</code> 同时负责客户端渲染和服务端渲染。</li></ul>',3),q=a("<li>先从 <code>_default.page.server.js</code> 中请求数据，这里根据路由匹配，所以要注意路由匹配的优先级，尽量和前端 router 里一致</li><li>数据分为 <code>PageData</code> 和 <code>CommonData</code>，分别是页面特有的数据和公共数据</li><li>获取到之后，放置在 <code>AllData</code> 里，通过插件的 api 传输到 <code>_default.page.client.js</code> 里</li>",3),E=n("code",null,"_default.page.client.js",-1),N=n("code",null,"vue",-1),L={href:"https://cn.vuejs.org/api/application.html#app-provide",target:"_blank",rel:"noopener noreferrer"},B=n("li",null,"在业务组件中可以通过以下代码获取注入的数据",-1),M=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useSSRContext<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token comment">// ...</span>
   <span class="token comment">// 两个钩子可以不一致，比如只在客户端做的事，就没必要写在 serverPrefetch 里</span>
   <span class="token function">serverPrefetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 服务端特有的生命周期钩子，这里是给服务端渲染准备的</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>swiperList <span class="token operator">=</span> <span class="token function">useSSRContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>PageData<span class="token punctuation">;</span> <span class="token comment">// 这里是获取页面特有的数据，如果组件是公共数据，那么就获取 CommonData</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token doc-comment comment">/**
    * 客户端特有的生命周期钩子，这里是给客户端端渲染准备的，建议使用 beforeMount
    * 之前用 mounted，发现经常会出现水和失败的提示，导致页面加载两次，是因为 mounted 之前就用 data 里的数据渲染一遍了，还没来得及用服务端的数据，所以和 ssr 的内容不一致。
    */</span>
   <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
       <span class="token keyword">this</span><span class="token punctuation">.</span>swiperList <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;AllData&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>PageData<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他亮点" tabindex="-1"><a class="header-anchor" href="#其他亮点" aria-hidden="true">#</a> 其他亮点</h3><ol><li><strong>线上环境</strong>添加了服务端获取客户端 cookie 的方式，因此可以在服务器调用用户信息接口、会员接口等敏感信息，这样访问页面的时候不会有&quot;未登录&quot;或者&quot;非会员&quot;的中间状态一闪而过。<br> 但是本地开发的时候还挺麻烦。如果用 vite 的一般模式启动，没有向服务器发送 cookie 的地方。<br> 有一个方法可以用 vite 的中间件模式启动，自定义一个服务器，向 ssr 的 render 发送请求页面时的 cookie，就能达成目标。</li><li>为方便调试和排查问题，服务端发出的请求都在客户端备份了一份，可通过 <code>window.__SSRR</code> 查找，里面存储了当前页面在服务端发出的请求的数组，只有在添加了特定的 url 参数才会生效，以免影响日常访问的 html 体积。</li><li>使用了 <code>pre-commit</code> 钩子，每次 commit 之前检测特定文件下第一行的图标链接是否为第三方链接，如果是第三方的，就调用脚本上传为公司自己的链接，来达成外部链接私有化的目的。</li></ol>`,3);function A(I,O){const s=l("ExternalLinkIcon");return c(),i("div",null,[p,d,u,n("table",null,[h,n("tbody",null,[_,v,k,n("tr",null,[m,n("td",null,[n("a",f,[e("Vue Router"),t(s)])])]),n("tr",null,[b,n("td",null,[e("没有使用 vuex，而是简单的 "),n("a",g,[e("状态管理"),t(s)])])]),n("tr",null,[S,n("td",null,[n("a",j,[e("ant-design-vue"),t(s)]),x,n("a",w,[e("vite-plugin-ssr"),t(s)])])])])]),y,n("p",null,[e("本项目最值得一说的就是 SSR 部分。"),R,e(" 服务端渲染可以加快访问速度，优化 SEO，是网站必需的能力。 一般的 SSR 都比较繁杂庞大，我这里基于 "),n("a",C,[e("vite"),t(s)]),e(" 和 "),n("a",D,[e("vite-plugin-ssr"),t(s)]),e(" 开发了一套"),P,e("的服务端渲染流程。 只需添加很小的一部分服务端代码，其余部分都和客户端渲染共用代码。")]),V,n("ol",null,[q,n("li",null,[E,e(" 获取到数据之后，用 "),N,e(" 的 "),n("a",L,[e("provide()"),t(s)]),e(" 方法，注入到应用的所有后代元素里。")]),B]),M])}const z=o(r,[["render",A],["__file","pc-site.html.vue"]]);export{z as default};
