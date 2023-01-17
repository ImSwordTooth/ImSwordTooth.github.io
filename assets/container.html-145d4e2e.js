import{_ as a,M as t,p as o,q as r,N as c,V as p,t as n,R as e,a1 as i}from"./framework-125c10c9.js";const l={},d=e("h1",{id:"单容器-container",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#单容器-container","aria-hidden":"true"},"#"),n(" 单容器 - Container")],-1),m=i(`<p>普通的容器组件，可以认作是一个普通的<code>div</code>。<strong>可以在里面放若干子元素</strong>。<br> 本组件有个是否居中的布尔值 props: <code>isCenter</code>，实现原理就是<code>margin: 0 auto</code>，可能会和组件本身的 style 有冲突。<em>待优化</em>。<br> 搭配宽度的设置，可实现活动页常见的<strong>主宽度</strong>。</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ContainerProps</span> <span class="token punctuation">{</span>
    style<span class="token operator">?</span><span class="token operator">:</span> object <span class="token comment">// 组件样式</span>
    width<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 宽度</span>
    isCenter<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// 是否居中</span>
    children<span class="token operator">?</span><span class="token operator">:</span> Element <span class="token comment">// 子元素</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function u(k,h){const s=t("a-tag");return o(),r("div",null,[d,c(s,{color:"orange"},{default:p(()=>[n("布局组件")]),_:1}),m])}const _=a(l,[["render",u],["__file","container.html.vue"]]);export{_ as default};