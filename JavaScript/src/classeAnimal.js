class Animal {

    constructor(especie){
        this.especie = especie
    }
    
    falar(){
        console.log(this.especie + ' late')
    }

    comer(){
        console.log(this.especie + ' come')
    }

    dormir(){
        console.log(this.especie + ' dorme')
    }

}

