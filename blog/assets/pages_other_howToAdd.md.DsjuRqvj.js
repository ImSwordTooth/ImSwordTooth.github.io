import{_ as k,V as l,c as r,f as s,b as i,E as n,X as p,ao as a,o as d}from"./chunks/framework.IeBF7J3I.js";const c="/blog/assets/env.7rCzv-9l.png",cs=JSON.parse('{"title":"如何添加物料到编辑器","description":"","frontmatter":{},"headers":[],"relativePath":"pages/other/howToAdd.md","filePath":"pages/other/howToAdd.md","lastUpdated":1701308594000}'),o={name:"pages/other/howToAdd.md"},E=i("h1",{id:"如何添加物料到编辑器",tabindex:"-1"},[s("如何添加物料到编辑器 "),i("a",{class:"header-anchor",href:"#如何添加物料到编辑器","aria-label":'Permalink to "如何添加物料到编辑器"'},"​")],-1),g=i("h2",{id:"_0-环境准备",tabindex:"-1"},[s("0. 环境准备 "),i("a",{class:"header-anchor",href:"#_0-环境准备","aria-label":'Permalink to "0. 环境准备"'},"​")],-1),b=i("p",null,[s('第一次准备环境可能比较麻烦，之后再开发就比较"便捷"了~'),i("br"),s(`
感受一下：`),i("br"),s(),i("img",{src:c,alt:""}),s(`
首先需要克隆`),i("code",null,"fda_editor"),s("，执行"),i("code",null,"yarn"),s("安装依赖，可能会安装失败，多试几次就行。")],-1),y=i("p",null,[s("然后在"),i("code",null,"fda_editor"),s("的根目录中创建一个 "),i("strong",null,"library"),s(" 文件夹，然后在 library 里克隆 basic、 business 等物料库，取决于想开发哪个物料库。"),i("br"),s(`
克隆完毕后使用`),i("code",null,"yarn"),s("安装依赖。")],-1),u=i("h2",{id:"_1-启动项目",tabindex:"-1"},[s("1. 启动项目 "),i("a",{class:"header-anchor",href:"#_1-启动项目","aria-label":'Permalink to "1. 启动项目"'},"​")],-1),_=i("p",null,"fda_editor:",-1),m=a('<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre> <div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>物料库:</p>',2),F=a(`<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 作用是把组件动态注入到 fda_editor，这样就可以本地开发调试组件，而不用发布</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lowcode:dev</span></span></code></pre> <div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_2-打开编辑器页面" tabindex="-1">2. 打开编辑器页面 <a class="header-anchor" href="#_2-打开编辑器页面" aria-label="Permalink to &quot;2. 打开编辑器页面&quot;">​</a></h2>`,2),A=i("p",null,[s("fda_editor 启动后会启用 "),i("code",null,"5556"),s(" 端口，所以默认的页面地址就是 "),i("code",null,"http://localhost:5556/"),s(" 。"),i("br"),s(`
但是：`)],-1),D=i("li",null,[s("我们要使用 "),i("strong",null,"ucms"),s(" 的接口去查询碎片，所以要把域名换成 "),i("code",null,"platform.ifeng.com"),s("，"),i("em",null,"此处默认已绑定 host"),s("；")],-1),C=i("li",null,[s("插入浏览器参数 "),i("code",null,"?debug"),s("，来打通 basic 和 fda_editor 的连接；")],-1),T=i("a",{href:"http://platform.ifeng.com:5556/?debug&id=1",target:"_blank",rel:"noreferrer"},"http://platform.ifeng.com:5556/?debug&id=1",-1),f=i("ul",null,[i("li",null,[s("点开组件列表，会发现组件会重复了两次。这是因为我们开启了 "),i("code",null,"?debug"),s("，编辑器本身的组件列表 + basic 动态注入的列表就是两份。")]),s(),i("li",null,[s("新增 "),i("code",null,"?debug=only"),s("，纯开发模式，只显示本地注入的组件，不请求远程组件。")])],-1),v=i("h2",{id:"_3-添加新组件",tabindex:"-1"},[s("3. 添加新组件 "),i("a",{class:"header-anchor",href:"#_3-添加新组件","aria-label":'Permalink to "3. 添加新组件"'},"​")],-1),B=i("p",null,[s("假如我们要在"),i("code",null,"basic"),s("里添加一个新的组件，叫做 "),i("strong",null,"FirstTest"),s("。")],-1),x=i("h4",{id:"_3-1-编写组件代码",tabindex:"-1"},[s("3.1 编写组件代码 "),i("a",{class:"header-anchor",href:"#_3-1-编写组件代码","aria-label":'Permalink to "3.1 编写组件代码"'},"​")],-1),P=a(`<p>首先需要在 <code>basic/src/components</code> 里新建一个目录，叫做 FirstTest，FirstTest 里至少需要组件的具体业务内容（<code>FirstTest.tsx</code>），以及一个负责导出的 <code>index.tsx</code>。<br>
当然也可以添加样式文件 <code>index.module.scss</code>、工具函数等等，非常自由。<br>
注意 <code>FirstTest.tsx</code> 里也要导出其 interface，用于生成 lowcode 描述文件。</p>`,1),S=i("p",null,[s("负责导出的"),i("code",null,"index.tsx"),s("的结构是这样的，基本不会变：")],-1),V=a(`<div class="language-tsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FirstTest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./FirstTest&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { FirstTestProps } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./FirstTest&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FirstTest;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { FirstTest };</span></span></code></pre> <div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="_3-2-放入项目入口" tabindex="-1">3.2 放入项目入口 <a class="header-anchor" href="#_3-2-放入项目入口" aria-label="Permalink to &quot;3.2 放入项目入口&quot;">​</a></h4>`,2),w=i("p",null,[s("写完组件之后，我们需要在项目入口"),i("code",null,"basic/src/index.tsx"),s("中引用它，引用的方式大致是这样的。")],-1),I=a(`<div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { FirstTest_Props } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./components/FirstTest&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FirstTest } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./components/FirstTest&#39;</span></span></code></pre> <div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_3-3-生成描述文件" tabindex="-1">3.3 生成描述文件 <a class="header-anchor" href="#_3-3-生成描述文件" aria-label="Permalink to &quot;3.3 生成描述文件&quot;">​</a></h4>`,2),N=i("p",null,[s("停止 basic 项目，再次 "),i("code",null,"npm run lowcode:dev"),s("，会发现 "),i("code",null,"basic/lowcode"),s(" 下多出一个 "),i("code",null,"FirstTest/meta.ts"),s("，这个文件就是低代码组件的描述文件。"),i("br"),s(`
需要我们修改的有：`)],-1),R=a(`<div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    componentName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 组件名称，必须唯一</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    category</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 组件分类，相同分类的组件在列表中会放置在一起</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> , </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 组件的中文标题</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    screenshot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 组件图片，可以找图标，也可以找现成的实例截图</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    icon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 组件在大纲树里的小图标</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    configure</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 组件的 props 具体配置，可以参考之前的例子，也可以查看 ali 的协议文档，https://lowcode-engine.cn/material#2224-%E7%BC%96%E8%BE%91%E4%BD%93%E9%AA%8C%E5%A2%9E%E5%BC%BA-configure</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 以下是我们的自定义字段，不在官方的协议内</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 组件图片预览时的尺寸，目前有以下几种：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 1. long，长图，600*150</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 2. tall，高图，280*500</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 2. noPreview，不允许预览，此时预览图标半透明</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 3. 什么都不写，默认 450*260</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    screenshotSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;long&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;tall&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;noPreview&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    sort</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在用户筛选 category 时的排序优先级，越小越靠前。不写则不参与排序，按字符串顺序排。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    hide</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否隐藏，不出现在组件库里，默认不隐藏。在测试某组件的时候可能才会需要。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre> <div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>其中最重要的就是 <code>configure</code>，也就是 props 的配置项。
一般情况下 props 的配置项是这样的：</p>`,2),M=a(`<div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FirstTestMeta</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    configure: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        props: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 一般结构都是这样的，看官方文档会更加方便，我就不复制了</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // https://lowcode-engine.cn/material#2224-%E7%BC%96%E8%BE%91%E4%BD%93%E9%AA%8C%E5%A2%9E%E5%BC%BA-configure</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                display: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                setter: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    componentName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    props: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    initialValue: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre> <div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>但是有些 props 形式比较固定，泛用性又比较强，所以我们封装了一些方法，有需要的时候直接引用即可：</p>`,2),q={tabindex:"0"},z=i("thead",null,[i("tr",null,[i("th",null,"方法名"),s(),i("th",null,"功能")])],-1),j=i("tr",null,[i("td",null,[i("a",{href:"./optional.html#getmeta-chip"},"getMeta_chip")]),s(),i("td",null,"封装碎片的 meta 信息，组件里有碎片就应该用它")],-1),$=i("tr",null,[i("td",null,[i("a",{href:"./optional.html#getmeta-style"},"getMeta_style")]),s(),i("td",null,[s("封装样式设置器的 meta 信息，如果组件里有"),i("strong",null,"单独为某个区域"),s("设置样式的 props，比如"),i("code",null,"titleStyle"),s("、"),i("code",null,"imageStyle"),s("之类的，用它")])],-1),O=i("tr",null,[i("td",null,[i("a",{href:"./optional.html#getmeta-skin"},"getMeta_skin")]),s(),i("td",null,'如果某个组件，我们给它预设了一套配置项便于用户选择，那么这套配置项就叫"皮肤"')],-1),J=i("tr",null,[i("td",null,[i("a",{href:"./optional.html#getMeta_FormatImageType"},"getMeta_FormatImageType")]),s(),i("td",null,"组件内图片如果需要设置是否裁图，使用这个方法")],-1),U=i("a",{href:"./optional.html#pxToPxRemObj"},"pxToPxRemObj",-1),X=i("span",{style:{color:"#ff4b4b","font-size":"12px"}},"仅移动端",-1),G=i("td",null,[s("普通的"),i("code",null,"px"),s("转"),i("code",null,"rem")],-1),H=i("a",{href:"./optional.html#styleToPxRemStyle"},"styleToPxRemStyle",-1),K=i("span",{style:{color:"#ff4b4b","font-size":"12px"}},"仅移动端",-1),L=i("td",null,[s("在样式里的"),i("code",null,"px"),s("转"),i("code",null,"rem")],-1),Q=i("h2",{id:"_4-开发调试",tabindex:"-1"},[s("4. 开发调试 "),i("a",{class:"header-anchor",href:"#_4-开发调试","aria-label":'Permalink to "4. 开发调试"'},"​")],-1),W=i("p",null,[s("上述步骤之后，就不再需要重启，可以随意改动组件文件和 "),i("code",null,"meta.ts"),s("，修改之后刷新浏览器页面即可生效（需等待basic热更新生效，一小会）。")],-1),Y=i("p",null,[s("接下来就是组件内的编写了。"),i("br"),s(`
每个组件我们都注入了一个 `),i("code",null,"style"),s(" props，用于设置组件最外层容器的样式。你应该这样使用它：")],-1),Z=a(`<div class="language-tsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FirstTest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 也可以直接使用 style={props.style}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props.style }}&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*组件内容...*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre> <div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>对于移动端，由于要涉及 pxtorem，所以稍微有点麻烦。下面是我推荐的写法：</p>`,2),ss=a(`<div class="language-tsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TitleProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">rem</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// style 本来是质朴的 object，现在多了一层 rem</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">rem</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这种很明显是 Number 类型的，不再是了。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FirstTest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 这里是最佳实践后的写法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 1. props 的变量名不变，便于理解和复制</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 2. style 要带默认值，要不然会报错</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { rem: {} },</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> props</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 也可以直接使用 style={props.style}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ width, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">style }}&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*组件内容...*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre> <div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>以上是所有的必须要做的事情。<br>
接下来是对写代码很有用，但是不一定用得到的，可按需查阅：</p>`,2),is=a('<ul><li><a href="./optional.html#如何使用碎片">如何使用碎片</a></li> <li><a href="./optional.html#如何区分编辑态和渲染态">如何区分编辑态和渲染态</a></li> <li><a href="./optional.html#通用图片组件">通用图片组件</a></li> <li><a href="./optional.html#如何添加-hover-样式">如何添加 hover 样式</a></li> <li><a href="./optional.html#移动端如何处理1px">移动端如何处理1px</a></li></ul>',1),as=i("h2",{id:"_5-发版",tabindex:"-1"},[s("5. 发版 "),i("a",{class:"header-anchor",href:"#_5-发版","aria-label":'Permalink to "5. 发版"'},"​")],-1),ns=i("p",null,[s(`开发完毕之后，git 提交所有的修改，然后打个 tag。
CI/CD 成功之后，默认激活新版本，可以使用去掉 `),i("code",null,"?debug"),s(" 的链接来测试是否发版成功。")],-1);function ls(es,ps,ts,hs,ks,rs){const t=l("a-tag"),h=l("Copy"),e=l("mobile-outlined");return d(),r("div",null,[E,s(),g,s(),b,s(),y,s(),u,s(),_,s(),m,s(),F,s(),A,s(),i("ol",null,[D,s(),C,s(),i("li",null,[s("需要一个页面的 id，来获取、保存 schema，可以使用 fda_pages 查询或者创建，想省劲也可以找 "),n(t,{color:"blue"},{default:p(()=>[s("@lihu3")]),_:1}),s("要id。")])]),s(),i("p",null,[s("所以最终的链接就是 "),n(h,null,{default:p(()=>[T]),_:1}),s("，id 要换成自己的。")]),s(),f,s(),v,s(),B,s(),x,s(),P,s(),S,s(),V,s(),w,s(),I,s(),N,s(),R,s(),M,s(),i("table",q,[z,s(),i("tbody",null,[j,s(),$,s(),O,s(),J,s(),i("tr",null,[i("td",null,[U,n(e,{style:{color:"#ff4b4b","font-size":"16px","margin-left":"10px"}}),X]),s(),G]),s(),i("tr",null,[i("td",null,[H,n(e,{style:{color:"#ff4b4b","font-size":"16px","margin-left":"10px"}}),K]),s(),L])])]),s(),Q,s(),W,s(),Y,s(),Z,s(),ss,s(),is,s(),as,s(),ns])}const os=k(o,[["render",ls]]);export{cs as __pageData,os as default};