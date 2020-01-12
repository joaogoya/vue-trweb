=====================================================================================
aula 01: Ol-á mundo
====================
    div com id que quiser 
    vamos usar id="app", mas pode ser qq coisa
    interpola uma variavel ali dentro

    cria uma no inxtancia do obj Vue
        var qqNome = new vue({
            //do sonthing
        })

    passa o seletor, no caso o id da div que vamos interpolar
        new vue({
            el: '#app'    
        })
    
    todos os dados que a noss view irá consumir ficaram dentro de um obj chamado data
        new vue({
            el: '#app'    
            data: {
                // infos para a view
                message: 'alguma mensagem qualquer'
            }
        })  

=====================================================================================
aula 02: Life cicle hooks
==========================
    beforeCreate
    Create
    beforeMount
    Mounted
    beforeUpdate
    Updated
    beforeDestroy
    Destroyed

=====================================================================================
aula 03: Etruturando o projeto
===============================
    separa html, de css e de js

=====================================================================================
aula 04: v-bind
================
    Não é negocio colocar uma variavel do vue em algum atributo da html
    por exemplo
        <span tittle="{{ message }}"> </span>
    para interpolar variaveis nos atributos se usa o v-bind
    e tiramos as chaves
        <span v-bid:tittle="message"> </span>
        ou apenas dois pontos
        <span :tittle="message"> </span>
    serve p qq atributo. Src nas imgs, hrf nos links, ....
    qq atributo

=====================================================================================
aula 05: estruturas de seleção
================================
    v-if
    v-else
    v-fi-else
    v-show

    a diferença entre o v-if e o v-show é que o v-show escreve e poe um display:none
    o v-if nao escreve
        se for p testar uma unica vez, é melhor o if
        se for troca sempre é melhor usar o v-show, pra nao ter que ficar escrevendo e apagando
        ele da um ganho de performance
        

    <h1 v-if="nomeVariavel"></h1>

    data:{
        nomeVariavel: true
    }

    v-else tem q se ligar q ele tem vir logo em seguida do elemento com v-in
        <h1 v-if="nomeVariavel"></h1>
        <h1 v-else="nomeVariavel"></h1>


=====================================================================================
aula 06: estruturas de repetição
==================================
    v-for
    da p pegar o index, segunda ul


=====================================================================================
aula 07: v-html
=================
    renderiza html que vem escrito dentro da string do componente



=====================================================================================
aula 08: Inicio do projeto
============================
    Usa a estrutura de separação de html do css e do js
    não fica esccrevendo css, agente baixa e usa pronto
    

=====================================================================================
aula 09: Reagindo a eventos
=============================
    Cria uma var ocnter e um bt 
    é p pegar o evento de clique
    :v-on:="clicknomeDafunction"
    nao precisa colocar parebteses, mas da pra por se quiser passar alguma coisa
    tb pode ser hardcoded
    :v-on="2+2" ou :v-on="7*algumaVariavel"

    nao precisa escrever :v-on 
    tem atalho, o @
    escreve @click="functionName"

    :Title
    @click
    dois pontos é um atalho para atributis e @ um atalho para eventos


=====================================================================================
aula 10: emitindo eventos
===========================
    na real nao é como emitir, e sim como escutar e reagir
    app.$on('evento', app.function)
    app.$on('abc', app.doSonthing)
    qd o evento abc acontecer a aplicação reage, disparando a função doSonthing

    para emitir um evento
    app.$emit('nomeEevento'),
    aqui tem um detalhe
    vamos supor q eu de um app.emit('abc')
    minha app vai executar a fução do sonthing
    se a função precisar de parametros, precisamos passar qd emitimos o evento
    dae é assim:
    app.$emmit('ac', parametros)

    para aplicação parar de escutar um evento é um app.$off('evento', app.nomeFunction);
    entao qd der um $on, nunca passar funções anonimas, pq nao teremos como dar um off
    p dar o off precisamos do nome da function

    tb da p fazer a aplicação "escutar" e rodar a function apenas uma vez
    app.$once('evento', app.functionName)
    com o once nao precisa dar o off pq o  listener é destruido automaticamente depois de rodar

    de praxe, é boa pretica criar e destruir listeners nos life cilcle hooks

=====================================================================================
aula 11: filtros
==================
    sao funções p formatar textos nas chaves duplas
    ou atributos q vão pra view pela diretiva :v-bind
    todo o filtlro recebe alguma coisa e precisa retornar alguma coisa
    tipo, é obrigatório
    cria um atributo (tipo o data, o computede, methods) chamado filters
        data: {
            title: 'Lorem';
        },
        filters:{
            nomeFiltro: function(title){
                faz alguma coisa com o title e retorna o resultado para a aplicação
            }
        }
        <a > {{ title | nomeFiltro }}</a>

    tb podesmos encadear filtros
        data: {
            title: 'Lorem';
        },
        filters:{
            nomeFiltro: function(title){
                faz alguma coisa com o title e retorna o resultado para a aplicação
            },
            outroFiltro: function (){
                return do sonthimg
            }
        }
        <a > {{ title | nomeFiltro | outroFiltro}}</a>

    da p passar paraametros
        data: {
            title: 'Lorem';
        },
        filters:{
            filtroParams: function(title, param01, param02){
                faz alguma coisa com o title e os parametros
            }
        }
        <a > {{ title | filtroParams(25,'lorem') }}</a>
        

=====================================================================================
aula 12: filtros globais
=========================
    fora da instancia do vue, da um vue.filter()
        *instancia é o app = new vue({})

    vue.fiçter('nome_filtro', function(text){
        faz alguma coisa com o texto e retorna
    })

    na viewe é a maesma coisa - {{ text | nomeFiltro }}

    se ligar de colocar os filtros globais antes da instancia do vue
        vue.fiçter('nome_filtro', function(text){
            faz alguma coisa com o texto e retorna
        });
        app = new vue({el, data, methos, lifeCicles,.....})
        se estiver ao contrario, o vue vai rebderizar o app, e enquanto renderiza
        ele vai procurar o filtro e não vai achar. Por isso o filtro tem que estar antes

=====================================================================================
aula 13: componentes
======================
    o nome tem que ser em caixa baixa e tem que ter um hifem
    <lorem-impsum></lorem-impsum>
    o hifem é pra nao dar conflito
    tipo, se no futuro a w3c criar a tag loremimpsum mau projeto nao vai ter conflitos
    pq nos componentes tem o hifen

    o vue tb permite chamar com o "is" dentro de qq elemento
        <div is="nomeComponente"></div>
        isso é importate qd criamos elementos q tem restrições em relações aos filhos
        tipo uma table 
        table tem q ter tr
            <table>
                <tr is="my-component"></tr>
            </table>
        se fizermos
            <table>
                <my-component></my-component>
            </table>
        vai bugar, pq dentro de table tem q ter tr

=====================================================================================
aula 14: Propriedades
======================
    os componentes podem receber dados dos elementos pais
        dentro do componente tem o atributo props
        ele recebe um array com as propriedades que o componente pode receber
        na view a gente passa como se fosse um atributo

        <div>
            <my-component nomePropos="Lorem"></my-component>
        </div>

        e no template do coponente usamos como uma variavel nomeVariavel

        Vue.component('my-component', {
            template: '<div>some content - {{ nomePropos }}</div>',
            props: ['nomePropos']
        })

        Assim estamos passando o texto lorem na mao
        mas tambem podemos passar uma variavel
            <div>
                <my-component v-bind:nomePropos="nomeVar"></my-component>
            </div>
            ou apenas
            <div>
                <my-component :nomePropos="nomeVar"></my-component>
            </div>

        tambem podemos validar qual o tipo de dado que o componente pode receber
            propos:{
                nomePropos: String,
                props: boolean
            }
        uma propos pode aceitar mais de um tipo
            propos:{
                nomePropos: String,
                props: boolean
                props3: ['String', 'number']
            }

=====================================================================================
aula 15: eventos
=================
    para os pais escutarem eventos nos filhos

        Vue.component('my-component', {
            template: '<div>some content</div> - <button @click="upCounter">Ok</button>',
            data(){
                return {
                    counter: 0
                }
            },
            methods:{
                upConter: function() {
                    this.counter++;
                }
            }
        })
        aqui em cima temos o comp filho com uma function qqualquer disparada em um evento de clique do mouse

        para o pai escutar o clique no filho, criamos no pai uma function , e no filho um evento que chama essa function
        <div id="app">
            <my-component @randonEevent="randomFunction"></my-component>
        </div>
        app = new Vue({
            el
            data
            lifeCicles
            methods: {
                randomFunction(){
                    //do sonthing
                }
            }
        })

        mas para o filho disparar esse vento, o randomEvent é o seguinte:
        Dentro do metodo ativado pelo clique, da um emit com o nome do evento que queremos emitir
        Vue.component('my-component', {
            template: '<div>some content</div> - <button @click="upCounter">Ok</button>',
            data(){
                return {
                    counter: 0
                }
            },
            methods:{
                upConter: function() {
                    this.counter++;
                    this.emmit('randomEvent')
                }
            }
        })

        organizando:
            1 - No filho:
                cria uma função que é ativada por algum evento (nesse caso, o click)            
            2 - no pai:
                no js cria uma função
                no template, onde chama o componente, cria um evento que dispara essa função
            3 - Novamente no filho
                na função disparada pelo click, emmit o evento que foi criado

        se ligar no seguinte, não da p criar um nome de vento
        a gente emite um evento existente, click, keyUp, change,....


=====================================================================================
aula 16: acessando componentes
===============================
    acessar a view, functions e o que for de um componente, sem uso de outras libs como jquery por exemplo
    bota um refs no filho 

    <div id="app">
        <my-component refs="randomName" nomePropos="Lorem"></my-component>
    </div>

    no js do componente pai podemos:
        app.$refs.randomName
        assim temos acesso ao componente filho

=====================================================================================
aula 17: slots:
================
    assim como dentro de um li a gente pode colocar varios li
    dentro de um componente podemos colocar tags e trabalhar com elas
    para isos precisamos "avisar" o vue que ele tem q rendenrizar essas tags    
    tipo:
        <div id="app">
            <randomComponent>
                <p>lorem</p>
            </randomComponent>
        </div>
        assim ele nao renderiza o paragrafo.
        por default ele só renderiza o que ta no template
    
    para renderizá-los, usamos os slots

        <div id="app">
            <randomComponent>
                <p slot="slotName">lorem</p>
            </randomComponent>
        </div>

        Vue.component('my-component', {
                template: '
                    <slot name="slotName"></slot>
                    <div>
                        some content
                    </div>
                    //mais coisas do template
                    ',
                data(){
                    return {
                        counter: 0
                    }
                },
                methods:{
                    upConter: function() {
                        this.counter++;
                        this.emmit('randomEvent')
                    }
                }
            })
    Com aquele slot, o vue renderiza o html escrito dentro do componente
    na posição em que está o slot, ou seja, nesse caso, antes do some content


    tb podemos nomear os slots para indicar onde cada um tem que ser renderizadopra isso o slot possui o atributo name



=====================================================================================
aula 17: slots com escopos
===========================
    é pra mandarmos valores de variaveis para os slots
    <div id="app">
        <randomComponent>
            <p slot="slotName">lorem</p>
        </randomComponent>
    </div>
    essse trecho de html fica no componente pai
    todas interpolações que fizermos aqui dentro pegarão variáveis do componente pai
    até mesmo variáveis que estiverem dentor do html do componente e do slot

    pro slot acessar vas variaveis do comp filho (o comp a que ele pertence) precisamos tratar o escopo

    pra fazer isso é o seguinte:
        1 - o slot precisa permitir. Fazemos isso colocando um atributo nele
        2 - passamos ali a variável que queremos utilizar no template
        3 - no html passamos dentro de uma tag template, indicando qual é o scopo atravás do props

         <div id="app">
            <randomComponent>
                <template scope="props">
                    <p>{{ props.slotVar }}</p>
                </template>                
            </randomComponent>
        </div>

        Vue.component('my-component', {
                template: '
                    <slot :randomVar = "slotVar" name="slotName"></slot>
                    <div>
                        some content
                    </div>
                    //mais coisas do template
                    ',
                data(){
                    return {
                        counter: 0
                    },
                    slotVar: 'lorem'
                },
                methods:{
                    upConter: function() {
                        this.counter++;
                        this.emmit('randomEvent')
                    }
                }
            })

=====================================================================================
aula 18: Computed properties
==============================
    é o computed:{

    }

    sao propriedades calculadas, propriedades computadas
    a grosso modo:
        com elas podemos interpolar uma function
        <div id="app">
            {{ randomFunction }}
        </div>

        Vue.component('my-component', {                
                data(){}
                computed:{
                    randomFunction:{
                        doSonthing
                    }
                }

    mas tipo assim, bem grosso modo
    a conceituação disso é complicada
    acho que o cara pega a manha usando

    tem um datalhe tb, que é o seguinte
        fizemos uma function no computed:
        poderiamos ster feito a mesma function no data
        mas no computed ela fica cacheada e só é chamada qd uma e suas dependencias é alterada

=====================================================================================
aula 18: Computed setters
==========================
    serve para podermos escrever nas computed properties
    dentro das computed Properties podemos trabalhar com getters e setters

        <div id="app">
            {{ randomFunction }}
        </div>

        Vue.component('my-component', {                
            data(){}
            computed:{
                randomFunction:{
                    get(){
                        return //do sonthig
                    },
                    set(someValue){
                        reurn // do sonthing with the value'
                    }
                }
            }


=====================================================================================
aula 19: Watchers
==================
    é para observarmos alterações em variaveis
    data:{
        randomVar:'Lorem'
    }
    watch:{
        randomVar: function(value){
            do sonthing
        }
    }
    o value nos parametros é o valor da variavel, nesse caso, lorem
    é bem util qd precisamos esperar o retorno de funções assincronas
    da um watch nela, qd alterar, a aplicação reage


=====================================================================================
aula 20: diretivas
===================


     <div id="app">
            content
            <input v-directiveName value="">
    </div>

    Vue.directive('directiveName'){
        inserted: function(elem){
            elem.value="impsum"
    }

    var app = new Vue({
        data(){}
        }
        
    })      

    onde inserted é uma lifeCicle hook das diretivas
        bin, inserted, update, componenteUpdaed e unbind   
        
=====================================================================================
aula 21: diretivas simples:
============================
    na aula de cima trabalmanos cvom o elemento html onde estava a diretiva
    por parametro veio to o input, e nos selecionamos o value.

    Mas odemos passar valores para a diretiva
    no template colocamos um ="parametroQueVamosPassar"
    e no js, na diretiva uma função

    <div id="app">
        content
        <input v-directiveName="parametroQueVamosPassar" value="">
    </div>

    Vue.directive('directiveName', function(el, binding){
        /*
            faça alguma coisa com o elemento e com o que veio no binding
        */
    })

    var app = new Vue({
        data(){}
        }
        
    })  


=====================================================================================
aula 22: requisições http
==========================
    instala o http-server
    $ npm install -g http-server
    igual ao angular
    de boas



=====================================================================================
aula 23: inputs
================
    aqui finalmente começam os forms
    para fazer a ligação do input com alguma variável usamos o v-model="nodeVariavel"       
    podemos utilizar alguns modificadores
    v-model.nuber="" - força o campo a ser um numero
    .trim, - auto explicativo
    .lazy - faz o bid qd o inputo toma um focus out, 


=====================================================================================
aula 24: check box
===================
    check e radio
    para checkbox, caso a gente coloque o v-model para a mesma variavel, ele será um array
    com um array pegamos todos os que foram selecionados

    mas as vezes, mesmo com os check, queremos capturar nao o valor, mas o boolena deles
    ao inves de termos um array com [a, b, c], precisamos de [true, falsee, false]
    para isos, nos checkboxes, ao inves de value="A"
    usamos :true-value="A"
    ou :false-value="b"
    assim pegamos o boolean dos check
    
=====================================================================================
aula 25: radio
===================
    igul ao radio, só q no js nao é um array


=====================================================================================
aula 26: selects
=================
    coloca o vmodel na tag select
    <select v-model="nomeVar">

    da p por um multiple, mas dai a variavel tem q ser um array


=====================================================================================
aula 27: Rotas
===============
        o vue possui o vueRouter
        npm install vue-router
        ou
        <script src="https://unpkg.com/vue-router" ></script>
        nesse proj vai o link, mas é mais negocio instalar

        na view
            ao inves do <a hrf=""></a>, usa o <router-link to=""></router-link>

            e para carregar os componentes usa o <router-view></router-view>

        no component:
            cria um array com as rotas
            const routes= [
                { path:'/', component: Home },
                { path:'/about', component: About }
            ]

            chama o router vue passando o array dentro de um obj
            const router = new VueRouter({routes})

            "avisa" a aplicação que tem  e qual é a rota
            var vueApp = new Vue({
                el: '#app',
                router,
                data: {},
                ...
            })

=====================================================================================
aula 27: Rotas com parametros
==============================
    const randomArray = [
        {path: '/randomRout/:var'}
    ]

    para pegar no outro componente é:
        <div>
            lorem
            {{ $route.params.variavelEnviada }}
        </div>

=====================================================================================
aula 28: Aninhamento de views
===============================
    é tipo um view child do angular
    pra rotear uma "sub view"

    vamos supor que o componente about tenha duas subviews
        a about1, e a about2

    na rota, onde criamos o array path, component
    colocamos um children, que tb é um array de path, component

        const routes= [
            { path:'/', component: Home },
            { path:'/about', component: About,
                children: [
                    {path: 'about1', component: 'about1'}
                    {path: 'about2', component: 'about2'}
                ]
            }
        ]    

    na view do componente about precisamos colocar o router outlet e os links

        Vue.component('About', {
            template: '<div>
                Pg about
                <router-link to="about1"></router-link>
                <router-link to="abaout2"></router-link>
                <router-view></router-view>
            </div>',
        })
    com essa configuração,, o about carrega sem nenhuma subview na tela
    precismos clicar na rota para exibir alguma subview

    para o about carregar com alguma subviw tb já carregada, basta deixar o path dela vazio.
        const routes= [
            { path:'/', component: Home },
            { path:'/about', component: About,
                children: [
                    {path: 'about1', component: ''}
                    {path: 'about2', component: 'about2'}
                ]
            }
        ]    


=====================================================================================
aula 29: Guarda rotas
======================
    gurda rotas
    podemos fazer uma declaração global para todas as rotas 

    depois de ter declarado o router, damos um router.berofreEach
    isso faz com a unção seja executada antes de cada um dos redirecionamentos
    ele recebe 3 parametros - to, from, next
        to - é a rota para oonde estamos indo
        from - rota atual. A rota da qual estamos saindo
        next - é uma função de controle
            se colocarmos a ufnção "vaizia - next()", ou nao colocarmos nada,
            o navegador vai para a rota desejada
            podemos colocar o redirecinamento ali - next('/contact')
            com isso, não importa a rota q o cara clicou, ele vai p contact

            podemos colocar um false ali - next(false)
            assim o navegador nao carrega e tb nao redireciona


    const router = new VueRouter({routes}) --> isso é declara a rota, entao depois disso
    router.berofreEach((to, from, next) => {
        // next() next vazio, o navegador vai p rota desejada
    })

    tb podemos colocar no array de rotas um beforeEnter: (to, from, next) ={}
    const routes= [
            { path:'/', component: Home, beforeEnter: (to, from, next) => {

            } },
            { path:'/about', component: About,
                children: [
                    {path: 'about1', component: ''}
                    {path: 'about2', component: 'about2'}
                ]
            }
        ]    
    a aula nao da exemplo de permissão de usuario


=====================================================================================
aula 30: class bind
======================
    <div :class="{ active: isActive }" ></div>






fechamento
    projeto com os componentes separados
    rotas
        rotear e tela de login p permissao de user
        rotear passando parametros
        guarda rotas p nao colocarem texto na url
        canDeactivate
    submissao de form pelo vuex - state e mutations
    passar infos pros comp filhos
    colocar alguns slots recebendo propriedades
    catch error do servidor
    testar funções












