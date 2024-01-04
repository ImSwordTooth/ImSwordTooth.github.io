import{_ as t,r as p,o as e,c as o,a as c,b as n,e as i,w as l,d as s}from"./app-rZSHgSAN.js";const u={},r=s(`<h1 id="可选的其他要点" tabindex="-1"><a class="header-anchor" href="#可选的其他要点" aria-hidden="true">#</a> 可选的其他要点</h1><h2 id="getmeta-系列" tabindex="-1"><a class="header-anchor" href="#getmeta-系列" aria-hidden="true">#</a> getMeta 系列</h2><h3 id="getmeta-chip" tabindex="-1"><a class="header-anchor" href="#getmeta-chip" aria-hidden="true">#</a> getMeta_chip</h3><p>封装碎片的 meta 信息。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TYPE_ChipMeta</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 碎片 props 名称</span>
    title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 碎片的中文名称</span>
    type<span class="token operator">:</span> <span class="token string">&#39;recommend&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;static&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;struct&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;ad&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;selectedPool&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;dynamic&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;api&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 碎片类型</span>
    <span class="token comment">// 【分割线上面的要明确写在 meta.ts 里】</span>
    <span class="token comment">// ----------------分割线-------------------</span>
    <span class="token comment">// 【分割线下面的可选】</span>
    format<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        filter<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// 筛选字段，只获取需要的，对于推荐位碎片来说，默认值：[&quot;thumbnails&quot;,&quot;title&quot;,&quot;type&quot;,&quot;url&quot;,&quot;base62Id&quot;,&quot;summary&quot;, &quot;children&quot;, &quot;position&quot;]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    defaultId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    children<span class="token operator">?</span><span class="token operator">:</span> TYPE_ChipMeta<span class="token punctuation">;</span> <span class="token comment">// 用于打底数据，外层是打底的，children 是干涉的</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用法示例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> FirstTestMeta <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    configure<span class="token operator">:</span> <span class="token punctuation">{</span>
        props<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token function">getMeta_chip</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">&#39;newsChip&#39;</span><span class="token punctuation">,</span>
                type<span class="token operator">:</span> <span class="token string">&#39;recommend&#39;</span><span class="token punctuation">,</span>
                title<span class="token operator">:</span> <span class="token string">&#39;新闻内容&#39;</span><span class="token punctuation">,</span>
                defaultId<span class="token operator">:</span> <span class="token string">&#39;285838&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getmeta-style" tabindex="-1"><a class="header-anchor" href="#getmeta-style" aria-hidden="true">#</a> getMeta_style</h3><p>封装样式设置器的 meta 信息。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TYPE_StyleMeta</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 样式的 props 名称</span>
    title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 样式的标题，就是说明这个样式是干啥的</span>
    styleMap<span class="token operator">:</span> StyleMap<span class="token punctuation">;</span> <span class="token comment">// 见下文</span>
    initialValue<span class="token operator">?</span><span class="token operator">:</span> object<span class="token punctuation">;</span> <span class="token comment">// 样式初始值，一个 React css 的对象</span>
    conditionProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 一个 props 名，如果这个 props 为 false，那么我们这个样式设置器就不显示，常用于&quot;是否显示描述&quot; &gt; &quot;描述样式&quot;云云</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),d=s(`<p>用法示例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> FirstTestMeta <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    configure<span class="token operator">:</span> <span class="token punctuation">{</span>
        props<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token function">getMeta_style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;单条样式&#39;</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;itemStyle&#39;</span><span class="token punctuation">,</span>
                styleMap<span class="token operator">:</span> <span class="token punctuation">{</span>
                    layout<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    background<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    font<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    position<span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                initialValue<span class="token operator">:</span> <span class="token punctuation">{</span>
                    paddingBottom<span class="token operator">:</span> <span class="token string">&#39;24px&#39;</span><span class="token punctuation">,</span>
                    marginTop<span class="token operator">:</span> <span class="token string">&#39;24px&#39;</span><span class="token punctuation">,</span>
                    borderBottomWidth<span class="token operator">:</span> <span class="token string">&#39;1px&#39;</span><span class="token punctuation">,</span>
                    borderBottomStyle<span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span><span class="token punctuation">,</span>
                    borderBottomColor<span class="token operator">:</span> <span class="token string">&#39;#ebebeb&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getmeta-skin" tabindex="-1"><a class="header-anchor" href="#getmeta-skin" aria-hidden="true">#</a> getMeta_skin</h3><p>组件皮肤的配置。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TYPE_SkinMeta</span> <span class="token punctuation">{</span>
    name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 皮肤的 props 名，选填，因为一般就叫 skin 了</span>
    list<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 皮肤列表，数组</span>
        title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 皮肤的中文名称</span>
        desc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 皮肤的描述</span>
        image<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 皮肤的示例图</span>
        effects<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 使用该皮肤之后会影响哪些 props</span>
            propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 受影响的 props 名</span>
            value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token comment">// 受影响的 props 值</span>
            title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 可选的受影响的 props 的中文名</span>
        <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    initialValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// skin 初始值，不写就是不设置初始值</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用法示例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> FirstTestMeta <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    configure<span class="token operator">:</span> <span class="token punctuation">{</span>
        props<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token function">getMeta_skin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                list<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        title<span class="token operator">:</span> <span class="token string">&#39;红色方块-仅标题列表&#39;</span><span class="token punctuation">,</span>
                        image<span class="token operator">:</span> <span class="token string">&#39;https://x0.ifengimg.com/ucms/2022_42/92E41C5C6D8370F47B32646BFF48BB622CF07281_size66_w712_h355.png&#39;</span><span class="token punctuation">,</span>
                        effects<span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                propName<span class="token operator">:</span> <span class="token string">&#39;isHasDot&#39;</span><span class="token punctuation">,</span>
                                value<span class="token operator">:</span> <span class="token boolean">true</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                propName<span class="token operator">:</span> <span class="token string">&#39;dotStyle&#39;</span><span class="token punctuation">,</span>
                                value<span class="token operator">:</span> <span class="token punctuation">{</span>
                                    marginLeft<span class="token operator">:</span> <span class="token string">&#39;7px&#39;</span><span class="token punctuation">,</span>
                                    marginRight<span class="token operator">:</span> <span class="token string">&#39;7px&#39;</span><span class="token punctuation">,</span>
                                    width<span class="token operator">:</span> <span class="token string">&#39;6px&#39;</span><span class="token punctuation">,</span>
                                    height<span class="token operator">:</span> <span class="token string">&#39;6px&#39;</span><span class="token punctuation">,</span>
                                    backgroundColor<span class="token operator">:</span> <span class="token string">&#39;#D41E26&#39;</span><span class="token punctuation">,</span>
                                    borderTopLeftRadius<span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span><span class="token punctuation">,</span>
                                    borderTopRightRadius<span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span><span class="token punctuation">,</span>
                                    borderBottomLeftRadius<span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span><span class="token punctuation">,</span>
                                    borderBottomRightRadius<span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                propName<span class="token operator">:</span> <span class="token string">&#39;titleStyle&#39;</span><span class="token punctuation">,</span>
                                value<span class="token operator">:</span> <span class="token punctuation">{</span>
                                    height<span class="token operator">:</span> <span class="token string">&#39;38px&#39;</span><span class="token punctuation">,</span>
                                    fontSize<span class="token operator">:</span> <span class="token string">&#39;16px&#39;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                propName<span class="token operator">:</span> <span class="token string">&#39;isHasTime&#39;</span><span class="token punctuation">,</span>
                                value<span class="token operator">:</span> <span class="token boolean">false</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getmeta-formatimagetype" tabindex="-1"><a class="header-anchor" href="#getmeta-formatimagetype" aria-hidden="true">#</a> getMeta_FormatImageType</h3><p>设置组件内的图片是否需要裁图。<br> 只有一个可选的 <code>name</code> 变量，是否需要裁图的 props 名，不填则是默认的<code>formatImageType</code>。</p><h2 id="pxtorem-系列" tabindex="-1"><a class="header-anchor" href="#pxtorem-系列" aria-hidden="true">#</a> pxtorem 系列</h2><h3 id="pxtopxremobj" tabindex="-1"><a class="header-anchor" href="#pxtopxremobj" aria-hidden="true">#</a> pxToPxRemObj</h3><p>普通的px转rem。<br> 适用于<code>Number</code>类型。</p><p>用法示例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> FirstTestMeta <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    configure<span class="token operator">:</span> <span class="token punctuation">{</span>
        props<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;播放器宽度&#39;</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span>
                setter<span class="token operator">:</span> <span class="token punctuation">{</span>
                    componentName<span class="token operator">:</span> <span class="token string">&#39;NumberSetter&#39;</span><span class="token punctuation">,</span>
                    initialValue<span class="token operator">:</span> <span class="token function">pxToPxRemObj</span><span class="token punctuation">(</span><span class="token number">375</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 此值在px里是 375，在 rem 里就是 375/37.5，保留6位小数</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="styletopxremstyle" tabindex="-1"><a class="header-anchor" href="#styletopxremstyle" aria-hidden="true">#</a> styleToPxRemStyle</h3><p>在样式里的px转rem。</p><p>用法示例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> FirstTestMeta <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    configure<span class="token operator">:</span> <span class="token punctuation">{</span>
        props<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token function">getMeta_style</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// 可以搭配 getMeta_style 使用</span>
                name<span class="token operator">:</span> <span class="token string">&#39;textStyle&#39;</span><span class="token punctuation">,</span>
                title<span class="token operator">:</span> <span class="token string">&#39;文本样式&#39;</span><span class="token punctuation">,</span>
                styleMap<span class="token operator">:</span> <span class="token punctuation">{</span>
                    layout<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    font<span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&#39;fontSize&#39;</span><span class="token punctuation">,</span>
                        <span class="token string">&#39;lineHeight&#39;</span><span class="token punctuation">,</span>
                        <span class="token string">&#39;fontWeight&#39;</span><span class="token punctuation">,</span>
                        <span class="token string">&#39;fontStyle&#39;</span><span class="token punctuation">,</span>
                        <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
                        <span class="token string">&#39;textDecoration&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    background<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    position<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    border<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                initialValue<span class="token operator">:</span> <span class="token function">styleToPxRemStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// 会把 css 里带 px 的单位转为 rem</span>
                    paddingLeft<span class="token operator">:</span> <span class="token string">&#39;24px&#39;</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                    fontWeight<span class="token operator">:</span> <span class="token number">700</span><span class="token punctuation">,</span>
                    fontSize<span class="token operator">:</span> <span class="token string">&#39;24px&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何使用碎片" tabindex="-1"><a class="header-anchor" href="#如何使用碎片" aria-hidden="true">#</a> 如何使用碎片</h2><p>这里直接放代码，具体的解释会在代码里写：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> Chip <span class="token keyword">from</span> <span class="token string">&#39;Chip&#39;</span> <span class="token comment">// 引用的路径已在配置文件中配置，后面的 Chip 是个别名</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useChip<span class="token punctuation">,</span> TYPE_Chip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ifeng/lowcode_tool/src/hooks/useChip&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> formatChip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ifeng/lowcode_tool/src/method/chip&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mask <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ifeng/lowcode_tool/src/components/Mask&#39;</span>
<span class="token comment">// ...</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">FirstTestProps</span> <span class="token punctuation">{</span>
    newsChip<span class="token operator">:</span> TYPE_Chip <span class="token comment">// 碎片有个特殊的 type</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span> 

<span class="token keyword">const</span> <span class="token function-variable function">FirstTest</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> newsChip <span class="token punctuation">}</span> <span class="token operator">=</span> props <span class="token comment">// 想用到碎片，必然会有一个传入碎片信息的 prop</span>

    <span class="token keyword">const</span> newsChipData <span class="token operator">=</span> <span class="token function">useChip</span><span class="token punctuation">(</span>newsChip<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 自定义 hook，通过碎片信息获取碎片内容</span>
    <span class="token keyword">const</span> chipComponentData <span class="token operator">=</span> <span class="token function">formatChip</span><span class="token punctuation">(</span>newsChip<span class="token punctuation">)</span> <span class="token comment">// 把碎片信息转换为 Chip 组件需要的 props</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token comment">// 使用 Chip 组件把内容包起来，和个性化 React 一样。</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Chip</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>chipComponentData<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span>
                newsChipData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token punctuation">(</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                            </span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token plain-text">
                        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token plain-text">
            </span><span class="token punctuation">{</span><span class="token comment">/* 可选，但是最好写上。一个缺省的提示，absolute 布局，父组件记得 relative */</span><span class="token punctuation">}</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mask</span></span> <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span>newsChip<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span> <span class="token attr-name">zIndex</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                示例推荐位碎片—</span><span class="token punctuation">{</span>newsChip<span class="token punctuation">.</span>default<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mask</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Chip</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> FirstTest<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何区分编辑态和渲染态" tabindex="-1"><a class="header-anchor" href="#如何区分编辑态和渲染态" aria-hidden="true">#</a> 如何区分编辑态和渲染态</h2><p>编辑器内是个很复杂的场景，在 iframe 里，而且有时候要禁用点击，要不然点过去就跳走了。<br> 所以有时候我们要在编辑器里做一些取舍，但是又不会影响正式页面，这就需要区分组件的编辑态和渲染态了。</p><p>阿里的引擎会自动在组件里注入一个名为 <code>__designMode</code> 的 prop，当 <code>__designMode === &#39;design&#39;</code> 时，就说明该组件处于编辑态。<br> 示例：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> createElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Style <span class="token keyword">from</span> <span class="token string">&#39;./index.module.scss&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AtomLinkProps</span> <span class="token punctuation">{</span>
    style<span class="token operator">:</span> object<span class="token punctuation">;</span>
    children<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    isTargetBlank<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    __designMode<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> AtomLink<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>AtomLinkProps<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> style<span class="token punctuation">,</span> children<span class="token punctuation">,</span> link<span class="token punctuation">,</span> isTargetBlank<span class="token punctuation">,</span> __designMode <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
            <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Style<span class="token punctuation">.</span>wrap<span class="token punctuation">}</span></span>
            <span class="token attr-name">{...(__designMode</span> <span class="token attr-name">!</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation attr-equals">=</span></span> <span class="token attr-name">&#39;design&#39;</span> <span class="token attr-name">?</span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">href:</span></span> <span class="token attr-name">link</span> <span class="token attr-name">}</span> <span class="token attr-name">:</span> <span class="token attr-name">{})}</span>  <span class="token comment">// 这里判断了是否处于编辑态，如果是编辑态，就不写 a 标签的 href，这样在编辑器里点击这个链接就不会跳走了</span>
            <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">(</span>isTargetBlank <span class="token operator">?</span> <span class="token punctuation">{</span> target<span class="token operator">:</span> <span class="token string">&#39;_blank&#39;</span> <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token operator">...</span>style <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> AtomLink<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通用图片组件" tabindex="-1"><a class="header-anchor" href="#通用图片组件" aria-hidden="true">#</a> 通用图片组件</h2><p>这个组件包含以下功能：</p><ol><li>添加动态裁图，可选的类型有：裁一倍图、裁二倍图、自适应、不裁图</li><li>根据页面的<code>图片懒加载</code>开关，添加懒加载逻辑</li></ol><p>引用方式为：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FormatImage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@ifeng/lowcode_tool/src/components/FormatImage&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>具体的 props 可以点进去查看，写的很清楚，就不贴在这里了~</p><h2 id="如何添加-hover-样式" tabindex="-1"><a class="header-anchor" href="#如何添加-hover-样式" aria-hidden="true">#</a> 如何添加 hover 样式</h2><p>有时不仅仅要支持 <code>style={...}</code>，还想配置组件 hover 时的样式，比如图片组件、原子文本组件。</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> withHover <span class="token keyword">from</span> <span class="token string">&#39;@ifeng/lowcode_tool/src/hoc/withHover&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ImageLink</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 要求 props 里带 hoverStyle，不过此属性已经默认在所有带上了，不用手动配置</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withHover</span><span class="token punctuation">(</span>ImageLink<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移动端如何处理1px" tabindex="-1"><a class="header-anchor" href="#移动端如何处理1px" aria-hidden="true">#</a> 移动端如何处理1px</h2><p>移动端存在 1px 问题，我们需要二次处理 style，生成新的 class 和 style。</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> format1pxStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ifeng/lowcode_tool/src/method/format1pxStyle&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ImageLink</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> style<span class="token operator">:</span> <span class="token punctuation">{</span> rem<span class="token operator">:</span> style <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> rem<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> props

    <span class="token keyword">const</span> <span class="token punctuation">{</span> formatClass<span class="token punctuation">,</span> formatStyle <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">format1pxStyle</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formatClass<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formatStyle<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果你不能保证 style 里没有1px，那么，所有的 style 都应该使用这个方法。</strong></p>`,38);function k(v,m){const a=p("RouterLink");return e(),o("div",null,[r,c("p",null,[n("styleMap 稍微有点复杂，可参考"),i(a,{to:"/pages/setter/customSetter.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F%E7%BC%96%E8%BE%91%E5%99%A8"},{default:l(()=>[n("通用样式设置器-commonStyleSetter")]),_:1}),n("。")]),d])}const g=t(u,[["render",k],["__file","optional.html.vue"]]);export{g as default};
