const MyNameApp = {
    data(){
        return{
            name: "Lucas",
            age: 30
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");