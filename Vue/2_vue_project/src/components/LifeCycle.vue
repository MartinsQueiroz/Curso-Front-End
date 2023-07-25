<template>
    <h1>Meu nome é: {{ nome }} </h1>
</template>

<script>
export default {
    name: 'LifeCycle',
    data(){
        return {
            nome: 'Ainda não sei'
        }
    },
    created() {
        setTimeout(() => {
            this.nome = 'Daniel' // lifecycle hook (o evento acontece em determinado tempo dentro da aplicação)
        }, 1000);
    },
    mounted() {
        setTimeout(() => {
            this.nome = 'Lucas'
        }, 2000);
        
    }
}
</script>
