Vue.component('emite-evento-teste', {
    template: '<div>Emite teste - {{ counter }} <br><br> <button @click="upNumberTest">up countter</button> </div>',
    data(){
        return{
            counter: 0
        }
    },
    methods:{
        upNumberTest(){
            this.counter++;
            this.$emit('change');
        }
    }
})

const app = new Vue ({
    el: '#app',    
    data: {
        pokemonList: [
            {name: 'Charizard', number: '006'},
            {name: 'Squirtle', number: '007'},
            {name: 'Pikachu', number: '025'},
            {name: 'Celebi', number: '251'},
            {name: 'Lucario', number: '448'},
            {name: 'Delphox', number: '655'}
        ],
        count: 0,
    },
    methods: {
        upcounter: function(){
            this.count++;
        },
        emiiter: function(){
            alert('emitiu evento'); 
        },
        printSonthing(){
            console.log('listener working good');
        }
    },
    beforeMount(){
        console.log('mounted');
        fetch('https://pmweb-dev.github.io/resumeCards.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }
});

app.$on('abc', app.emiiter);
