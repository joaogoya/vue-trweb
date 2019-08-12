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
aula 03:Etruturando o projeto
===============================
    ssepara html, de css e de js

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

















