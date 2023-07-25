<template>
  <div>
    <FirstComponent />
    <p>O dado de app é: {{ testando }} </p>
    <LifeCycle />
    <Pessoa />
  </div>
  
</template>

<script>
  import FirstComponent from './components/FirstComponent.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Pessoa from './components/Pessoa.vue'

  export default {
    name: 'app',
    components: {
      FirstComponent,
      LifeCycle,
      Pessoa
    },
    data(){
      return  {
        testando: "teste"
      }
    }

  }
</script>
