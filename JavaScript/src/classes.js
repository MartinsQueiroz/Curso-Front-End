
class Cachorro extends Animal {
    falar(){
        console.log(this.especie + '  au au au')
    }

    comer(){
        console.log(this.especie + ' come ração')
    }

}

const cachorro = new Cachorro('cachorro')
cachorro.falar()
cachorro.comer()
cachorro.dormir()


