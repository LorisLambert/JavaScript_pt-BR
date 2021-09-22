<h1>Introdução ao repositório JavaScript_CemV&Google</h1>

<p>Este repositório contém um material que fiz durante o curso ministrado pelo <strong style="color:#2727ff">Curso em Vídeo</strong> em parceria com a <strong><span style="color: #4885ed">G</span><span style="color:#db3236">o</span><span style=" color:#f4c20d">o</span><span style="color: #4885ed">g</span><span style="color:#3cba54">l</span><span style="color:#db3236">e</span></strong> sobre <mark style="background-color:rgb(240, 219, 79)"><i style="color: rgb(50, 51, 48)">javascript</i></mark> e <i>ECMA6</i></ECMA6>. Para acessar o curso completo, clique <a href="https://www.cursoemvideo.com/course/javascript/">aqui</a>.</p>

<h1>Sumário</h1>

<ol>
    <li><a href="#content1">Módulo A: Conhecendo o JavaScript</a>;</li>
    <li><a href="#content2">Módulo B: Comendos Básicos do JavaScript</a>;</li>
    <li><a href="#content3">Módulo C: Entendendo o DOM</a>;</li>
    <li><a href="#content4">Módulo D: Condições em JavaScript</a>;</li>
    <li><a href="#content5">Módulo E: Repetições em JavaScript</a>;</li>
    <li><a href="#content6">Módulo F: Avançando os estudos em JavaScript</a>;</li>
</ol>

<h1>JavaScript</h1>

<h3>Módulo A: Conhecendo o JavaScript<a name="content1"></a></h3>

<h5>Client-server Architecture</h5>

<p>A <i>client-server</i> é um tipo de arquitetura responsável pelo processamento da informação via <i>internet</i> que é dividido em dois módulos. Existe um módulo que é responsável pela manutenção e fornecimento da informação (<i>server</i>) e um módulo responsável pela solicitação dos dados (<i>client</i>). A seguir veja uma representação dessa arquitetura (fonte: <a href="https://en.wikipedia.org/wiki/Client%E2%80%93server_model">wikipedia</a>):</p>

<img alt="Client-server Architecture" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Client-server-model.svg">

<p>O JavaScript é uma linguagem de programação usada para dar mais autonômia ao cliente ou usuário. Portanto, é realizada pelo lado do <i>client</i> ainda no navegador. Seu objetivo é fornecer maior interatividade e performace para agilizar e melhorar a experiência do usuário.</p>

<h5>Origem do JavaScript</h5>

<p>A <i>internet</i> tem origem militar, na época da Guerra Fria. No início as páginas eram estáticas e muito pouco interativas, até que foi criado o <i>livescript</i>: uma liguagem de programação feita para rodar pelo navegador. Nessa mesma época, o Java estava em destaque e por uma jogada de marketing os criatodores do <i>livescript</i> resolveram adotar o nome JavaScript. As duas linguagens não tem correlação, mas ambas foram criadas a partir da linguagem C.</p>

<h5>ECMAScript</h5>

<p>Com o sucesso do JavaScript, a Microsoft resolveu criar a sua própria linguagem. A partir daí surgiu o JScript que era bem parecido, porém com algumas diferenças pontuais. Para manter o padrão, os criadores do JavaScript cederam a linguagem para uma empresa de padronização, a ECMA. Com isso, passou a se chamar ECMAScript.</p>

<h5>Documentação</h5>

<p>Atualmente, temos duas documentações para o JavaScript:</p>

<ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN Web Docs JavaScript</a>;</li>
    <li><a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/">ECMA 262.</a></li>
</ul>

<h3>Módulo B: Comendos Básicos do JavaScript<a name="content2"></a></h3>

<h5>Variáveis</h5>

<p>Tipos de declarações:</p>

<ul>
    <li><strong>var</strong>: declara uma variável global, opcionalmente, inicializando-a com um valor;</li>
    <code>
        if (true) {
  			var x = 5;
		}
		console.log(x);  // 5
    </code>
    <li><strong>let</strong>: declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor;</li>
    <code>
        if (true) {
  			let x = 5;
		}
		console.log(x);  // Error
    </code>
    <li><strong>const</strong>: declara uma constante de escopo de bloco, apenas de leitura.</li>
</ul>

<p><i>Obs.: uma variável declarada usando <strong>var</strong> ou <strong>let</strong> sem especificar o valor inicial tem o valor <strong>undefined</strong>.</i></p>

<p>Regras para nomear variáveis - Identificadores</p>

<ul>
    <li>Deve começar com uma letra, com underline (_) ou cifrão ($);</li>
    <li>Pode-se usar números no meio do identificador;</li>
    <li>Pode-se usar caracteres unicode no meio do identificador;</li>
    <li>Não pode conter espaços;</li>
    <li>Não pode ser palavras reservadas.</li>
</ul>


<p><i>OBS.: o JavaScript é case sensitive.</i></p>

<h5>Tipos de Dados</h5>

<p>Tipos primitivos:</p>

<ul>
    <li><strong>Boolean</strong>: <code>true</code> e <code>false</code>;</li>
    <li><strong><code>null</code></strong>: palavra reservada para representar um valor nulo (não sendo o mesmo se escrito de outras formas: <code>NULL</code> ou <code>Null</code>);</li>
    <li><strong>Undefined</strong>: uma propriedade superior cujo valor é indefinido;</li>
    <li><strong>Number</strong>: são valores numéricos racionais, podendo ser:
    	<ul>
            <li><strong>Infinity</strong>: ;</li>
        	<li><strong>NaN</strong>: .</li>
        </ul>
    </li>
    <li><strong>Symbol</strong>: (ECMAScript 6) um tipo de dado cujas instâncias são únicas e imutáveis;</li>
    <li><strong>String</strong>: palavras e anagramas.</li>
</ul>


<p>Tipo não primitivo:</p>

<ul>
    <li><strong>Objeto</strong>: dado que é um tipo próprio e possui características específicas.</li>
</ul>


<h5>Operadores Aritméticos</h5>

<ul>
    <li><strong><code>+</code></strong>: soma (5 <code>+</code> 2 = 7);</li>
    <li><strong><code>-</code></strong>: subtração (5 <code>-</code> 2 = 3);</li>
    <li><strong><code>*</code></strong>: multiplicação (5 <code>*</code> 2 = 10);</li>
    <li><strong><code>/</code></strong>: divisão (5 <code>/</code> 2 = 2);</li>
    <li><strong><code>%</code></strong>: resto da divisão (5 <code>%</code> 2 = 1);</li>
    <li><strong><code>**</code></strong>: potência (5 <code>**</code> 2 = 25);</li>
</ul>


<h5>Ordem de precedência dos Operadores Aritméticos</h5>

<ol>
    <li><strong><code>()</code></strong>;</li>
    <li><strong><code>**</code></strong>;</li>
    <li><strong><code>*</code></strong>, <b><code>/</code></b>e <b><code>%</code></b>;</li>
    <li><strong><code>+</code></strong> e <b><code>-</code></b>.</li>
</ol>


<p><i>Obs.: caso haja mais de um com a mesma ordem de precedência, a leitura será realizada sempre da esquerda para a direita.</i></p>

<h5>Autoatribuições</h5>

<ul>
    <li><code>n=n+4</code> pode ser <strong><code>n+=4</code></strong>;</li>
    <li><code>n=n-4</code> pode ser <strong><code>n-=4</code></strong>;</li>
    <li><code>n=n*4</code> pode ser <strong><code>n*=4</code></strong>;</li>
    <li><code>n=n/4</code> pode ser <strong><code>n/=4</code></strong>;</li>
    <li><code>n=n**4</code> pode ser <strong><code>n**=4</code></strong>;</li>
    <li><code>n=n%4</code> pode ser <strong><code>n%=4</code></strong>;</li>
</ul>


<h5>Incrementos</h5>

<ul>
    <li><code>x=x+1</code> ou <code>x+=1</code> pode ser <strong><code>n++</code></strong>;</li>
    <li><code>x=x-1</code> ou <code>x-=1</code> pode ser <strong><code>n--</code></strong>;</li>
</ul>


<h5>Operadores Relacionais</h5>

<ul>
    <li><code>5>2</code> resulta em <code>true</code>;</li>
    <li><code>7<4</code> resulta em <code>false</code>;</li>
    <li><code>8>=8</code> resulta em <code>true</code>;</li>
    <li><code>9<=7</code> resulta em <code>false</code>;</li>
    <li><code>4==4</code> resulta em <code>true</code>;</li>
    <li><code>6!=3</code> resulta em <code>true</code>.</li>
</ul>

<h5>Identidade com operadores relacionais</h5>

<p>Existe um operador de igualdade restrita que verifica todos os quesitos das variáveis e as compara</p>

<ul>
    <li><code>4==4</code> resulta em <code>true</code>;</li>
    <li><code>4=='4'</code> resulta em <code>true</code>;</li>
    <li><code>4==='4'</code> resulta em <code>false</code>.</li>
</ul>

<h5>Operadores Lógicos</h5>

<p>Em ordem de precedência:</p>

<ul>
    <li><strong><code>!</code></strong> negação (<i>not</i>);</li>
    <li><strong><code>&&</code></strong> conjunção (<i>and</i>);</li>
    <li><strong><code>||</code></strong> disjunção (<i>or</i>).</li>
</ul>


<h5>Operador Ternário</h5>

<p><i>Test</i> <code>?</code> <i>true</i> <code>:</code> <i>false</i></p>


<h3>Módulo C: Entendendo o DOM<a name="content3"></a></h3>

<p>DOM significa <i>Document Object Model</i>.</p>

<h5>Árvore DOM</h5>

<h5>Marca</h5>



<h3>Módulo D: Condições em JavaScript<a name="content4"></a></h3>

<h3>Módulo E: Repetições em JavaScript<a name="content5"></a></h3>

<h3>Módulo F: Avançando os estudos em JavaScript<a name="content6"></a></h3>

<h1>Referências</h1>

<p>JavaScript - O Guia Definitivo, David Flanagan, O'Reilly</p>

<p>JavaScript - Guia do Programador, Maurício Samy Silva</p>

<p>Mozilla</p>

<p>ECMAScript</p>

