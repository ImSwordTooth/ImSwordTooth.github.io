import{_ as r,r as a,o as p,c as i,a as s,e,b as o,d as t}from"./app-rZSHgSAN.js";const l={},u=s("h1",{id:"正则",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#正则","aria-hidden":"true"},"#"),o(" 正则")],-1),h=t('<h2 id="标志-flag" tabindex="-1"><a class="header-anchor" href="#标志-flag" aria-hidden="true">#</a> 标志 flag</h2><p>描述正则表达式匹配的整体规则。<br> 如果是字面量正则，直接附在后面即可，如<code>/abc/g</code>，如果是用构造函数声明，则放在构造函数的第二个参数里，如<code>new RegExp(&#39;abc&#39;, &#39;g&#39;)</code>。<br> 可以并行使用，比如 <code>/abc/igm</code>。<br> 可以使用<code>RegExp.prototype.flags</code>获取某字符串的标志，返回一个字符串。</p><h3 id="g-全局匹配" tabindex="-1"><a class="header-anchor" href="#g-全局匹配" aria-hidden="true">#</a> g 全局匹配</h3><p><strong>global</strong>，找到所有的匹配，而不是在第一个匹配之后停止。</p>',4),g=t('<div style="font-size:12px;margin-top:8px;">使用正则表达式不断 exec() 字符串，记 exec() 的结果为 res。</div><table><thead><tr><th>测试结果</th><th>abcdabc</th></tr></thead><tbody><tr><td><code>/abc/</code></td><td><code>res.index</code>一直是<code>0</code></td></tr><tr><td><code>/abc/g</code></td><td><code>res.index</code>为<code>0</code>，然后是<code>4</code>，最终<code>res</code>为<code>null</code>，循环此结果</td></tr></tbody></table><h3 id="i-忽略大小写" tabindex="-1"><a class="header-anchor" href="#i-忽略大小写" aria-hidden="true">#</a> i 忽略大小写</h3><p><strong>ignoreCase</strong>，匹配时忽略大小写。</p>',4),b=t('<div style="font-size:12px;margin-top:8px;">exec()。</div><table><thead><tr><th>测试结果</th><th>aBc</th></tr></thead><tbody><tr><td><code>/abc/</code></td><td><code>null</code></td></tr><tr><td><code>/abc/i</code></td><td><code>[&#39;aBc&#39;, index: 0, input: &#39;aBc&#39;, groups: undefined]</code></td></tr></tbody></table><h3 id="m-多行匹配" tabindex="-1"><a class="header-anchor" href="#m-多行匹配" aria-hidden="true">#</a> m 多行匹配</h3><p><strong>multiline</strong>，一个多行输入字符串被看做多行。<br> 例如，使用了<code>m</code>标志<code>^</code>和<code>$</code>将会从“只匹配字符串的开头或结果”，变为“匹配字符串中任一行的开头或结尾”。</p>',4),k=t('<div style="font-size:12px;margin-top:8px;">使用正则表达式不断 exec() 字符串，记 exec() 的结果为 res。</div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">abc\nab</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>测试结果</th><th><code>str1</code></th></tr></thead><tbody><tr><td><code>/^a/g</code></td><td><code>res.index</code>先为<code>0</code>，再次调用则<code>res</code>为<code>null</code>，循环此结果</td></tr><tr><td><code>/^a/mg</code></td><td><code>res.index</code>为<code>0</code>，然后是<code>4</code>，最终<code>res</code>为<code>null</code>，循环此结果</td></tr></tbody></table><h3 id="s-点号匹配所有字符" tabindex="-1"><a class="header-anchor" href="#s-点号匹配所有字符" aria-hidden="true">#</a> s 点号匹配所有字符</h3><p><code>.</code> 匹配除换行符外的任意字符，如果开启该标志，它也会匹配换行符，见<a href="#%E5%8C%B9%E9%85%8D%E6%8D%A2%E8%A1%8C%E7%AC%A6%E5%A4%96%E7%9A%84%E4%BB%BB%E6%84%8F%E5%AD%97%E7%AC%A6">. - 匹配换行符外的任意字符</a>。</p><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><p>还有其他的 <code>flag</code>，但是用途比较少，用到的时候再总结吧，有：<code>u</code>(unicode)、<code>y</code>(sticky，粘性匹配)。</p><h2 id="元字符" tabindex="-1"><a class="header-anchor" href="#元字符" aria-hidden="true">#</a> 元字符</h2><p>正则表达式规定的特殊代码，类似于关键字。<br> 这里只列出常用的元字符，许多不常用的诸如<code>\\a</code>(报警字符)、<code>\\f</code>(换页符)、<code>\\e</code>(Escape) 等就不列出来了，后续有觉得有用的再补充。</p><h3 id="匹配字符串的开头" tabindex="-1"><a class="header-anchor" href="#匹配字符串的开头" aria-hidden="true">#</a> ^ 匹配字符串的开头</h3><p>除了匹配字符串的开头，还有反向匹配的用法<code>[^]</code>，见下文。</p><h3 id="匹配字符串的结尾" tabindex="-1"><a class="header-anchor" href="#匹配字符串的结尾" aria-hidden="true">#</a> $ 匹配字符串的结尾</h3><p>匹配字符串的结尾。</p><h3 id="匹配换行符外的任意字符" tabindex="-1"><a class="header-anchor" href="#匹配换行符外的任意字符" aria-hidden="true">#</a> . 匹配换行符外的任意字符</h3><p>换行符指 <code>\\n</code>，如果正则字符串的标志里有 <code>s</code>(点号匹配所有字符)，它也会匹配换行符。</p>',15),v=t(`<div style="font-size:12px;margin-top:8px;">test()。</div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token string">&#39;1a^&amp;˙˚sd©ß∂å≈åß∂∆åø$b%c^&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a$b%c^
ab</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str3 <span class="token operator">=</span> <span class="token string">&#39;1\\n2&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str4 <span class="token operator">=</span> <span class="token string">&#39;1\\\\n3&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>测试结果</th><th><code>str1</code></th><th><code>str2</code></th><th><code>str3</code></th><th><code>str4</code></th></tr></thead><tbody><tr><td><code>/^.+$/g</code></td><td><code>true</code></td><td><code>false</code></td><td><code>true</code></td><td><code>true</code></td></tr><tr><td><code>/^.+$/gs</code></td><td><code>true</code></td><td><code>true</code></td><td><code>true</code></td><td><code>true</code></td></tr></tbody></table><h3 id="d-匹配数字" tabindex="-1"><a class="header-anchor" href="#d-匹配数字" aria-hidden="true">#</a> \\d 匹配数字</h3><p><strong>digit</strong>，等同于<code>[0-9]</code>，只匹配<code>0123456789</code>这10个字符。</p>`,5),x=t('<div style="font-size:12px;margin-top:8px;">test()。</div><table><thead><tr><th>测试结果</th><th>1998</th><th>19.98</th><th>1e+2</th></tr></thead><tbody><tr><td><code>/^\\d+$/</code></td><td><code>true</code></td><td><code>false</code>，小数不行</td><td><code>false</code>，科学计数法也不行</td></tr></tbody></table><h3 id="w-匹配字母、数字、下划线" tabindex="-1"><a class="header-anchor" href="#w-匹配字母、数字、下划线" aria-hidden="true">#</a> \\w - 匹配字母、数字、下划线</h3><p><strong>word</strong>，等同于<code>[A-Za-z0-9_]</code>。<strong>强调一下，<code>\\w</code> 也匹配数字！</strong></p>',4),m=t('<div style="font-size:12px;margin-top:8px;">test()。</div><table><thead><tr><th>测试结果</th><th>hello</th><th>hel_lo</th><th>hello2</th><th>你好</th><th>enchanté</th></tr></thead><tbody><tr><td><code>/^\\w+$/</code></td><td><code>true</code></td><td><code>true</code></td><td><code>true</code></td><td><code>false</code>，汉语不行</td><td><code>false</code>，有些语言里带注音？的英文也不行</td></tr></tbody></table><h3 id="s-匹配任意空白符" tabindex="-1"><a class="header-anchor" href="#s-匹配任意空白符" aria-hidden="true">#</a> \\s 匹配任意空白符</h3><p><strong>space</strong>，匹配一个空白字符，包含空格、制表符、换页符和换行符，等价于<code>[\\f\\n\\r\\t\\v\\u0020\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]</code>。</p><p>基本包含了所有的空白符了，测试用例也不好写，不测了。</p><h3 id="b-匹配单词的开始或结束" tabindex="-1"><a class="header-anchor" href="#b-匹配单词的开始或结束" aria-hidden="true">#</a> \\b 匹配单词的开始或结束</h3><p><strong>border</strong>，匹配一个词的边界，比如在字母和空格之间。<br> 匹配中不包括边界，也就是说，一个匹配的词的边界内容长度为 0。</p><blockquote><p>JavaScript 的正则表达式引擎将特定的字符集定义为“字”字符。 不在该集合中的任何字符都被认为是一个断词。这组字符相当有限：它只包括大写和小写的罗马字母，十进制数字和下划线字符。 不幸的是，重要的字符，例如“é”或“ü”，被视为断词。</p></blockquote>',8),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,"\\b",-1),q=t('<div style="font-size:12px;margin-top:8px;">exec()，记 exec() 的结果为 res。</div><table><thead><tr><th>测试结果</th><th>something</th><th>some thing</th><th>some_thing</th><th>some-thing</th><th>some/thing</th><th>sométhing</th></tr></thead><tbody><tr><td><code>/\\bt/</code></td><td><code>null</code></td><td><code>res.index</code>为<code>5</code></td><td><code>null</code>, 下划线算是单词的一部分</td><td><code>res.index</code>为<code>5</code>，短横杠可以</td><td><code>res.index</code>为<code>5</code>，斜杠可以</td><td><code>res.index</code>为<code>4</code>，这里匹配到了，所以对于某些语言来说，“边界”真的不好定</td></tr></tbody></table><h2 id="量词" tabindex="-1"><a class="header-anchor" href="#量词" aria-hidden="true">#</a> 量词</h2><p>量词表示要匹配的字符或表达式的数量。</p><h3 id="匹配-0-次或多次" tabindex="-1"><a class="header-anchor" href="#匹配-0-次或多次" aria-hidden="true">#</a> * 匹配 0 次或多次</h3><h3 id="匹配-1-次或多次" tabindex="-1"><a class="header-anchor" href="#匹配-1-次或多次" aria-hidden="true">#</a> + 匹配 1 次或多次</h3><h3 id="n-匹配-n-次" tabindex="-1"><a class="header-anchor" href="#n-匹配-n-次" aria-hidden="true">#</a> {n} 匹配 n 次</h3><h3 id="n-至少匹配-n-次" tabindex="-1"><a class="header-anchor" href="#n-至少匹配-n-次" aria-hidden="true">#</a> {n,} 至少匹配 n 次</h3><h3 id="n-m-匹配-n-m-次" tabindex="-1"><a class="header-anchor" href="#n-m-匹配-n-m-次" aria-hidden="true">#</a> {n,m} 匹配 n ~ m 次</h3>',9),_=t('<div style="font-size:12px;margin-top:8px;">这几个都很好理解，索性都放一起测试了。<br>exec()，记 exec() 的结果为 res。</div><table><thead><tr><th>测试结果</th><th>goooogle</th></tr></thead><tbody><tr><td><code>/(o*)/g</code></td><td><code>res.index</code>为<code>0</code>，<code>res[0]</code>为<code>空字符串</code>，因为没匹配到字符，继续执行<code>exec()</code>也不会继续往后搜索。手动设置正则的<code>lastIndex</code>为<code>1</code>后，可以继续执行。</td></tr><tr><td><code>/(o+)/g</code></td><td><code>res.index</code>为<code>1</code>，<code>res[0]</code>为<code>oooo</code>，继续执行，<code>res</code>为 <code>null</code>，循环此结果</td></tr><tr><td><code>/(o{2})/g</code></td><td><code>res.index</code>为<code>1</code>，<code>res[0]</code>为<code>oo</code>，继续执行，<code>res.index</code>为<code>3</code>，然后<code>res</code>为 <code>null</code>，循环此结果</td></tr><tr><td><code>/(o{3})/g</code></td><td><code>res.index</code>为<code>1</code>，<code>res[0]</code>为<code>ooo</code>，继续执行，<code>res</code>为 <code>null</code>，循环此结果</td></tr><tr><td><code>/(o{4})/g</code></td><td><code>res.index</code>为<code>1</code>，<code>res[0]</code>为<code>oooo</code>，继续执行，<code>res</code>为 <code>null</code>，循环此结果</td></tr><tr><td><code>/(o{5})/g</code></td><td><code>null</code></td></tr><tr><td><code>/(o{3,})/g</code></td><td><code>res.index</code>为<code>1</code>，<code>res[0]</code>为<code>oooo</code>，继续执行，<code>res</code>为 <code>null</code>，循环此结果</td></tr><tr><td><code>/(o{5,})/g</code></td><td><code>null</code></td></tr><tr><td><code>/(o{2,5})/g</code></td><td><code>res.index</code>为<code>1</code>，<code>res[0]</code>为<code>oooo</code>，继续执行，<code>res</code>为 <code>null</code>，循环此结果</td></tr><tr><td><code>/(o{3,3})/g</code></td><td>等同于<code>/(o{3})/g</code></td></tr><tr><td><code>/(o{4,4})/g</code></td><td>等同于<code>/(o{4})/g</code></td></tr><tr><td><code>/(o{4,3})/g</code></td><td>n &gt; m，直接报错，<code>Uncaught SyntaxError: Invalid regular expression: /o{4,3}/g: numbers out of order in {} quantifier</code></td></tr></tbody></table><h3 id="懒惰匹配" tabindex="-1"><a class="header-anchor" href="#懒惰匹配" aria-hidden="true">#</a> ? 懒惰匹配</h3><p>量词默认是贪婪的，也就是<strong>尽可能找到更多的匹配</strong>。<br> 有时候我们需要<strong>懒惰匹配</strong>，也就是<strong>尽可能找到更少的匹配</strong>，只需要在上述量词后面加一个<code>?</code>。</p><ul><li>*<strong>?</strong> 重复任意次，但尽可能少重复</li><li><strong>+?</strong> 重复1次或更多次，但尽可能少重复</li><li><strong>??</strong> 重复0次或1次，但尽可能少重复，实际上跟单个<code>?</code>一样</li><li><strong>{n,m}?</strong> 重复n到m次，但尽可能少重复</li><li><strong>{n,}?</strong> 重复n次以上，但尽可能少重复</li></ul>',5),w=t('<div style="font-size:12px;margin-top:8px;">exec()，记 exec() 的结果为 res。</div><table><thead><tr><th>测试结果</th><th>aabab</th></tr></thead><tbody><tr><td><code>/a.*b/</code></td><td><code>res[0]</code>为<code>aabab</code>，找到了尽可能长的匹配项</td></tr><tr><td><code>/a.*?b/</code></td><td><code>res[0]</code>为<code>aab</code>，到这里就满足要求了，不再继续，懒惰</td></tr></tbody></table><h2 id="分支条件" tabindex="-1"><a class="header-anchor" href="#分支条件" aria-hidden="true">#</a> 分支条件</h2><h3 id="字符集" tabindex="-1"><a class="header-anchor" href="#字符集" aria-hidden="true">#</a> [] 字符集</h3><p>我们也可以用<code>[]</code>轻松指定一个字符范围，只需要在方括号里列出它们，比如<code>[aeiou]</code>匹配任何一个英文元音字母，<code>[.?!]</code>匹配标点符号(.或?或!)。<br> 可以使用连字符<code>-</code>来指定字符范围，但如果连字符用的不规范会被当做普通<code>-</code>处理。</p><p><code>[]</code>中的特殊字符不用加上反斜杠<code>\\</code>转义，除非想在<code>[]</code>中列出和<code>]</code>，<code>[</code>也可以不加转义符。<br><strong>关于<code>[]</code>里匹配<code>\\</code>，很疑惑。比如我想匹配 <code>\\a</code> 这个字符串，写<code>[\\]a</code>会被认为<code>\\]</code>为一组，没有闭合的中括号，直接报错；写<code>[\\\\]a</code>则被认为是两个连续的<code>\\</code>，只能匹配<code>\\\\a</code>。没搞懂，因此下面示例中不再测试<code>[]</code>里带<code>\\</code>的情况。</strong></p>',6),z=t('<div style="font-size:12px;margin-top:8px;">exec()，记 exec() 的结果为 res。</div><table><thead><tr><th>测试结果</th><th>openAi</th><th>open.i</th><th>open[i</th><th>open]i</th></tr></thead><tbody><tr><td><code>/open[AB.]i/</code></td><td><code>res[0]</code>为<code>openAi</code></td><td><code>res[0]</code>为<code>open.i</code></td><td><code>null</code></td><td><code>null</code></td></tr><tr><td><code>/open[AB.\\[]]i/</code></td><td><code>null</code>，这里<code>\\[</code>被当做<code>[</code>，后面的<code>]</code>把中括号闭合了，再后面的<code>]</code>被当做普通字符，匹配不到<code>]i</code>，所以失败</td><td><code>null</code></td><td><code>null</code></td><td><code>null</code></td></tr><tr><td><code>/open[AB.[]i/</code></td><td><code>res[0]</code>为<code>openAi</code></td><td><code>res[0]</code>为<code>open.i</code></td><td><code>res[0]</code>为<code>open[i</code>，中括号里的<code>[</code>不用加转义符</td><td><code>null</code></td></tr><tr><td><code>/open[AB.[\\]]i/</code></td><td><code>res[0]</code>为<code>openAi</code></td><td><code>res[0]</code>为<code>open.i</code></td><td><code>res[0]</code>为<code>open[i</code></td><td><code>res[0]</code>为<code>open]i</code></td></tr></tbody></table>',2),j=t('<div style="font-size:12px;margin-top:8px;">专门测试连字符 -。<br>test()。</div><table><thead><tr><th>测试结果</th><th>openb</th><th>opend</th><th>open-</th></tr></thead><tbody><tr><td><code>/open[a-c]/</code></td><td><code>true</code></td><td><code>false</code></td><td><code>false</code></td></tr><tr><td><code>/open[a-]/</code></td><td><code>false</code>，<code>-</code>在这里是普通连字符</td><td><code>false</code></td><td><code>true</code></td></tr><tr><td><code>/open[-c]/</code></td><td><code>false</code>，<code>-</code>在这里是普通连字符</td><td><code>false</code></td><td><code>true</code></td></tr><tr><td><code>/open[a-1]/</code></td><td>直接报错，<code>Uncaught SyntaxError: Invalid regular expression: /open[a-1]/: Range out of order in character class</code></td><td>同</td><td>同</td></tr><tr><td><code>/open[1-c]/</code></td><td><code>true</code>，数字到字母可以</td><td><code>false</code></td><td><code>false</code></td></tr></tbody></table><h3 id="或" tabindex="-1"><a class="header-anchor" href="#或" aria-hidden="true">#</a> | 或</h3><p>js 里常见的<code>||</code>在正则里是单竖线<code>|</code>。<br> 写法也和 js 里差不多，每个单独的条件不需要加括号，直接可以写作<code>str1|str2|str3</code>，条件里也可以加上别的特殊语法，如元字符、量词等。<br> 括号一般用于不引起歧义、或者分支条件的边框。</p>',4),$=t('<div style="font-size:12px;margin-top:8px;">test()。</div><table><thead><tr><th>测试结果</th><th>app22ex</th><th>orangex</th></tr></thead><tbody><tr><td><code>/(app\\d{2}e|orange)x/</code></td><td><code>true</code></td><td><code>true</code></td></tr></tbody></table><h2 id="反义" tabindex="-1"><a class="header-anchor" href="#反义" aria-hidden="true">#</a> 反义</h2><p>有时候需要反向查找，比如除了数字以外，其他任意字符都行。</p><h3 id="元字符反义" tabindex="-1"><a class="header-anchor" href="#元字符反义" aria-hidden="true">#</a> 元字符反义</h3><p>对于上面的几个元字符，直接把小写换成大写，就是对应的反义。</p><table><thead><tr><th>反义</th><th>说明</th></tr></thead><tbody><tr><td><code>\\W</code></td><td>匹配<strong>任意不是</strong>字母、数字、下划线的字符</td></tr><tr><td><code>\\S</code></td><td>匹配<strong>任意不是</strong>空白符的字符</td></tr><tr><td><code>\\D</code></td><td>匹配<strong>任意不是</strong>数字的字符</td></tr><tr><td><code>\\B</code></td><td>匹配<strong>任意不是</strong>单词开头或结束的位置</td></tr></tbody></table><h3 id="反向字符集" tabindex="-1"><a class="header-anchor" href="#反向字符集" aria-hidden="true">#</a> [^] 反向字符集</h3><p><code>[]</code> 是字符集，里面是<strong>或</strong>的关系；<code>^</code> 匹配开头。两者结合却是反义。<br> 比如：<code>[^abc]</code> 匹配除了 abc 以外的任意字符。<br> 也可以写连字符，规则和<a href="#%E5%AD%97%E7%AC%A6%E9%9B%86">[] 字符集</a>一致。</p>',9),E=t(`<div style="font-size:12px;margin-top:8px;">专门测试连字符 -。可以看到结果正好和“[] 字符集”相反。<br>test()。</div><table><thead><tr><th>测试结果</th><th>openb</th><th>opend</th><th>open-</th></tr></thead><tbody><tr><td><code>/open[^a-c]/</code></td><td><code>false</code></td><td><code>true</code></td><td><code>true</code></td></tr><tr><td><code>/open[^a-]/</code></td><td><code>true</code>，<code>-</code>在这里是普通连字符</td><td><code>true</code></td><td><code>false</code></td></tr><tr><td><code>/open[^-c]/</code></td><td><code>true</code>，<code>-</code>在这里是普通连字符</td><td><code>true</code></td><td><code>false</code></td></tr><tr><td><code>/open[^a-1]/</code></td><td>直接报错，<code>Uncaught SyntaxError: Invalid regular expression: /open[a-1]/: Range out of order in character class</code></td><td>同</td><td>同</td></tr><tr><td><code>/open[^1-c]/</code></td><td><code>false</code>，数字到字母可以</td><td><code>true</code></td><td><code>true</code></td></tr></tbody></table><h2 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h2><h3 id="捕获组" tabindex="-1"><a class="header-anchor" href="#捕获组" aria-hidden="true">#</a> () 捕获组</h3><p>匹配 exp 并记住匹配项。例如，<code>/(foo)/</code>匹配并记住<code>foo bar</code>中的<code>foo</code>。</p><blockquote><p>捕获组会带来性能损失。如果不需要收回匹配的子字符串，请选择非捕获括号。</p></blockquote><p>mdn 说捕获组会带来性能损失，但是我觉得并不会损失很多。<br> 测试项目较多，且都比较重要，此节不再使用表格列出的形式测试。</p><ul><li>对于<code>exec()</code>，<strong>组</strong>会体现在<code>exec()</code>的结果里，数组的第<code>n</code>项，就是第<code>n</code>个分组。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z]+)(\\W+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token string">&quot;Let&#39;s go!&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 在这个示例里，第一次匹配的结果为[&quot;et&#39;&quot;,&quot;et&quot;,&quot;&#39;&quot;]，其中：
 * res[0] 为匹配的结果，et&#39;
 * res[1] 为匹配到的第一个分组，也就是正则表达式里的第一组括号内的字符，et
 * res[2] 为匹配到的第二个分组，也就是正则表达式里第二组括号内的字符，&#39;
 * 
 * 继续匹配，同理可得 [&quot;s &quot;, &quot;s&quot;, &quot; &quot;] 和 [&quot;go!&quot;, &quot;go&quot;, &quot;!&quot;]
 * */</span>
pattern<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>捕获组可以嵌套，对于上面的例子，<code>/([a-z]+)(\\W+)/g</code>和<code>/([a-z]+(\\W+))/g</code>是同样的结果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z]+(\\W+))(\\d+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token string">&quot;Let&#39;1s 2go!3&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 第一次匹配的结果为[&quot;et&#39;1&quot;,&quot;et&quot;,&quot;&#39;&quot;, &quot;1&quot;]，可以看到组的顺序是从左到右从外到里。
 * 继续匹配，同理可得 [&quot;s 2&quot;, &quot;s&quot;, &quot; &quot;, &quot;2&quot;] 和 [&quot;go!3&quot;, &quot;go&quot;, &quot;!&quot;, &quot;3&quot;]
 * */</span>
pattern<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对于 <code>String.prototype.replace()</code>，可以直接使用<code>$n</code>来代指匹配到的组，比如<code>$1</code>就是第<code>1</code>组。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z]+)(\\W+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">&quot;Let&#39;s go!&quot;</span><span class="token punctuation">;</span>

str1 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> <span class="token string">&#39;$1======$2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Let======&#39;s====== go======!&quot;</span>
str1 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> <span class="token string">&#39;$&#39;</span><span class="token operator">+</span><span class="token string">&#39;1======$2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 一样，&quot;Let======&#39;s====== go======!&quot;</span>
str1 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> <span class="token string">&#39;\\$1======\\\\$2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 加反义符也没用，&quot;Let======\\\\&#39;s======\\\\ go======\\\\!&quot;，不过注意这里单个反义符和两个反义符的区别</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>String.prototype.replace()</code>的第二个参数还可以是一个函数，函数的返回值就是要替换的项。<br> 函数的参数是一个队列，队列的第<code>1</code>是整体匹配到的字符，第<code>n+1</code>个就是第<code>n</code>组，也就是相当于<code>...res</code>。<code>res</code>为<code>exec()</code>的结果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z]+)(\\W+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">&quot;Let&#39;s go!&quot;</span><span class="token punctuation">;</span>

str1 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
	 * 打印三次，分别是：
	 * <span class="token punctuation">{</span> a: &quot;et&#39;&quot;, b: &quot;et&quot;, c: &quot;&#39;&quot; <span class="token punctuation">}</span>
	 * <span class="token punctuation">{</span> a: &quot;s &#39;&quot;, b: &quot;s&quot;, c: &quot; &quot; <span class="token punctuation">}</span>
	 * <span class="token punctuation">{</span> a: &quot;go!&quot;, b: &quot;go&quot;, c: &quot;!&quot; <span class="token punctuation">}</span>
	 * */</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// 另外，这里也是可以写 $1 的好地方，函数里不认 $1，所以结果是：&quot;Let$1&#39;s$1 go$1!&quot;</span>
	<span class="token keyword">return</span> b<span class="token operator">+</span><span class="token string">&#39;$1&#39;</span><span class="token operator">+</span>c<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对于<code>String.prototype.split()</code>，如果参数是一个带捕获组的正则，那么捕获到的内容也会按组拼接到返回数组里。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pattern1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]+\\W+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pattern2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z]+)\\W+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pattern3 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z]+)(\\W+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">&quot;Let&#39;s go!&quot;</span><span class="token punctuation">;</span>

str1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>pattern1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;L&#39;, &#39;&#39;, &#39;&#39;, &#39;&#39;]，全匹配</span>
str1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>pattern2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;L&#39;, &#39;et&#39;, &#39;&#39;, &#39;s&#39;, &#39;&#39;, &#39;go&#39;, &#39;&#39;]，匹配到的结果也被塞到了数组里</span>
str1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>pattern3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;L&#39;, &#39;et&#39;, &quot;&#39;&quot;, &#39;&#39;, &#39;s&#39;, &#39; &#39;, &#39;&#39;, &#39;go&#39;, &#39;!&#39;, &#39;&#39;]，匹配到的结果也被塞到了数组里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非捕获组" tabindex="-1"><a class="header-anchor" href="#非捕获组" aria-hidden="true">#</a> (?:) 非捕获组</h3><p>匹配 exp，但是不记得组。</p>`,19),A=t('<div style="font-size:12px;margin-top:8px;">使用 () 捕获组 中的例子。<br>exec()，记 exec() 的结果为 res</div><table><thead><tr><th>测试结果</th><th>Let&#39;s go!</th></tr></thead><tbody><tr><td><code>/(?:[a-z]+)(?:\\W+)/g</code></td><td><code>res[0]</code>为<code>et&#39;</code>，<strong>没有<code>res[1]</code>和<code>res[2]</code></strong>，继续执行，<code>res[0]</code>分别为<code>s </code>和<code>go!</code>，直到<code>null</code></td></tr></tbody></table>',2),L=t(`<div style="font-size:12px;margin-top:8px;">使用 () 捕获组 中的例子。<br>replace(reg, &#39;$1======$2&#39;)，记 replace() 的结果为 res</div><table><thead><tr><th>测试结果</th><th>Let&#39;s go!</th></tr></thead><tbody><tr><td><code>/(?:[a-z]+)(?:\\W+)/g</code></td><td><code>res</code>为<code>&quot;Let======&#39;s====== go======!&quot;&#39;</code>，可以看到<code>replace()</code>中的<code>$n</code>不受影响</td></tr></tbody></table><p>但是<code>replace()</code>的第二个参数为函数时，因为<code>exec()</code>的返回并不包含组了，所以参数队列里第<code>2</code>个为匹配的位置，第<code>3</code>个为原始输入，之后就是<code>undefined</code>了。</p><h3 id="name-rep-具名捕获组" tabindex="-1"><a class="header-anchor" href="#name-rep-具名捕获组" aria-hidden="true">#</a> (?&lt;Name&gt;rep) 具名捕获组</h3><p>可以指定组名的捕获组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;some&gt;[a-z]+)(?&lt;thing&gt;\\W+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token string">&quot;Let&#39;s go!&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 在这个示例里，第一次匹配的结果为[&quot;et&#39;&quot;,&quot;et&quot;,&quot;&#39;&quot;]，其中res.groups为 <span class="token punctuation">{</span> some:&quot;et&quot;, thing:&quot;&#39;&quot; <span class="token punctuation">}</span>;
 * 可以看到，数组的返回和普通的捕获组相同，但是一直为空的 groups 变成了具名捕获的一个对象
 * */</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> pattern<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),B=t(`<div style="font-size:12px;margin-top:8px;">使用 () 捕获组 中的例子。<br>replace(reg, &#39;$1======$2&#39;)，记 replace() 的结果为 res</div><table><thead><tr><th>测试结果</th><th>Let&#39;s go!</th></tr></thead><tbody><tr><td><code>/(?&lt;some&gt;[a-z]+)(?&lt;thing&gt;\\W+)/g</code></td><td><code>res</code>为<code>&quot;Let======&#39;s====== go======!&quot;&#39;</code>，可以看到<code>replace()</code>中的<code>$n</code>不受影响</td></tr></tbody></table><p><code>replace()</code>的第二个参数为函数时表现也和普通捕获组相同，因为<code>exec()</code>的返回的数组一样。</p><h3 id="_1-2-引用捕获组" tabindex="-1"><a class="header-anchor" href="#_1-2-引用捕获组" aria-hidden="true">#</a> \\1 \\2 引用捕获组</h3><p>上面说的捕获组的使用，都是在正则表达式的外部。有些时候我们需要在表达式内部去使用之前捕获的组，比如匹配 html 字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token string">&#39;&lt;div&gt;&lt;span&gt;&lt;/span&gt;&lt;/div&gt;&#39;</span>
<span class="token keyword">const</span> patt1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;\\w+&gt;.+?&lt;\\/\\w+&gt;</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">const</span> patt1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;(\\w+)&gt;.+?&lt;\\/\\1&gt;</span><span class="token regex-delimiter">/</span></span>

patt1<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里我们使用了懒惰匹配，所以只匹配到了 &lt;div&gt;&lt;span&gt;&lt;/span&gt; 就结束了</span>
patt2<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 后面的 \\1 引用了前面括号里匹配到的 div，所以必须找到 &lt;/div&gt; 才算结束，因此结果为 &lt;div&gt;&lt;span&gt;&lt;/span&gt;&lt;/div&gt; </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="零宽断言" tabindex="-1"><a class="header-anchor" href="#零宽断言" aria-hidden="true">#</a> 零宽断言</h2><p><strong>zero-width assertions</strong>，这些语法像<code>\\b</code>、<code>^</code>、<code>$</code>一样指定一个位置，位置没有宽度，所以称为<strong>零宽</strong>。这个位置应该满足一定的条件，所以是<strong>断言</strong>。</p><h3 id="与-在某些内容前或后" tabindex="-1"><a class="header-anchor" href="#与-在某些内容前或后" aria-hidden="true">#</a> (?=) 与 (?&lt;=) 在某些内容前或后</h3><p><code>(?=)</code>称为<strong>先行断言</strong>，<code>(?&lt;=)</code>称为<strong>后行断言</strong>。 见到的可能少，但是实际上非常常用。<br> 比如我想在一篇文章里匹配所有以<code>ing</code>结尾的单词，并提取<code>ing</code>前面的部分。<br> 结合我们之前学到的知识，我们可以用分组轻松完成：<code>/\\b(\\w+)ing\\b/g</code>，取匹配到第一组即可。<br> 现在我们不用分组，换个写法试试：<br><code>/\\b\\w+(?=ing\\b)/g</code>，这个正则表达式，所有<strong>在<code>ing\\b</code>之前的</strong><code>\\b\\w+</code>字符，并且不包括<code>ing\\b</code>。<code>(?=exp)</code>中的<code>exp</code>就是指定这个位置的条件。</p><hr><p>与之相反，<code>(?&lt;=exp)</code>指向在某些内容之后的条件。<br> 比如：<code>/(?&lt;=\\bre)\\w+\\b/g</code>匹配所有<strong>在<code>\\bre</code>之后的</strong><code>\\w+\\b</code>字符。</p>`,12),W=t('<div style="font-size:12px;margin-top:8px;">exec()，记 exec() 的结果为 res</div><table><thead><tr><th>测试结果</th><th>reading</th><th>singing</th></tr></thead><tbody><tr><td><code>/\\w+(?=ing)/</code></td><td><code>res[0]</code>为<code>read</code></td><td><code>res[0]</code>为<code>sing</code>，这里的匹配是贪婪的，尽可能多地匹配到了<code>sing</code></td></tr><tr><td><code>/\\w+?(?=ing)/</code></td><td><code>res[0]</code>为<code>read</code></td><td><code>res[0]</code>为<code>s</code>，在前面加个<code>?</code>进行非贪婪匹配</td></tr><tr><td><code>/(?&lt;=re)\\w+(?=ing)/</code></td><td><code>res[0]</code>为<code>ad</code></td><td><code>null</code></td></tr></tbody></table><h3 id="与-不在某些内容前或后" tabindex="-1"><a class="header-anchor" href="#与-不在某些内容前或后" aria-hidden="true">#</a> (?!) 与 (?&lt;!) 不在某些内容前或后</h3><p><code>(?!)</code>称为<strong>先行否定断言</strong>，<code>(?&lt;!)</code>称为<strong>后行否定断言</strong>。<br> 和前面一组相反，前面的两个匹配在 xxx 之前或之后，这两个匹配不在 xxx 之前或之后。<br> 比如：匹配小数点后的部分：<code>/\\d+(?!\\.)/</code>匹配<code>3.14</code>的结果就是<code>14</code>，因为<code>3</code>在<code>.</code>前面。</p>',4),S=t('<div style="font-size:12px;margin-top:8px;">exec()，记 exec() 的结果为 res</div><table><thead><tr><th>测试结果</th><th>13.24</th></tr></thead><tbody><tr><td><code>/\\d+(?!\\d*\\.)/g</code></td><td><code>res[0]</code>为<code>14</code>，上面的例子小数点前只能匹配一位数字，这个写法可以匹配多个</td></tr></tbody></table><table><thead><tr><th>测试结果</th><th>rgba(11,222,3, 0.4)</th></tr></thead><tbody><tr><td><code>/[\\d\\.]+(?!\\d*,)/g</code></td><td><code>res[0]</code>为<code>0.4</code>，匹配rgba中的透明度</td></tr></tbody></table>',3);function C(R,I){const d=a("RegExpTest"),n=a("PartTitle"),c=a("ExternalLinkIcon");return p(),i("div",null,[u,s("div",null,[e(d)]),h,e(n,{type:"test"}),g,e(n,{type:"test"}),b,e(n,{type:"test"}),k,e(n,{type:"test"}),v,e(n,{type:"test"}),x,e(n,{type:"test"}),m,s("p",null,[o("以上是 "),s("a",f,[o("mdn 的注释"),e(c)]),o("，我理解的意思是，"),y,o(" 所谓的”单词“，并不满足所有的语言系统。")]),e(n,{type:"test"}),q,e(n,{type:"test"}),_,e(n,{type:"test"}),w,e(n,{type:"test"}),z,e(n,{type:"test"}),j,e(n,{type:"test"}),$,e(n,{type:"test"}),E,e(n,{type:"test"}),A,e(n,{type:"test"}),L,e(n,{type:"test"}),B,e(n,{type:"test"}),W,e(n,{type:"test"}),S])}const D=r(l,[["render",C],["__file","regexp.html.vue"]]);export{D as default};