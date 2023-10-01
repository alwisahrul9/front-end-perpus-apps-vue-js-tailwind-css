<template>
    <main>
        <section>
            <div class="card mx-auto my-16 sm:w-2/3 lg:w-[30%] w-5/6 p-4 shadow">
                <div class="rounded-circle border-2 border-cyan-500 p-3 mx-auto mb-4">
                    <img src="./../assets/user.png" alt="" class="lg:w-10 w-12 m-0 p-0">
                </div>
                <span class="text-center mb-3 fs-4 fw-medium">Login</span>
                <form @submit.prevent="login">
                    <div class="email d-flex mb-3">
                        <div class="p-2.5 border-1 border-sky-500 rounded-l bg-light">
                            <svg fill="#000000" class="w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1a11,11,0,0,0,0,22,1,1,0,0,0,0-2,9,9,0,1,1,9-9v2.857a1.857,1.857,0,0,1-3.714,0V7.714a1,1,0,1,0-2,0v.179A5.234,5.234,0,0,0,12,6.714a5.286,5.286,0,1,0,3.465,9.245A3.847,3.847,0,0,0,23,14.857V12A11.013,11.013,0,0,0,12,1Zm0,14.286A3.286,3.286,0,1,1,15.286,12,3.29,3.29,0,0,1,12,15.286Z"/></svg>
                        </div>
                        <input type="text" v-model="dataLogin.username" class="w-full px-2 py-0 border-sky-500 border-y border-r rounded-r focus:outline-none" placeholder="Username" required>
                    </div>
                    <div class="password d-flex">
                        <div class="p-2.5 border-1 border-sky-500 rounded-l bg-light">
                            <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <input type="password" v-model="dataLogin.password" class="w-full px-2 py-0 border-sky-500 border-y border-r rounded-r focus:outline-none" placeholder="Password" required>
                    </div>
                    <div class="d-flex justify-center mt-4">
                        <button class="btn btn-primary">Masuk</button>
                    </div>
                </form>
            </div>
        </section>
    </main>
</template>
<script>

import axios from 'axios';

export default {
    data(){
        return {
            dataLogin: {
                username: "",
                password: ""
            }
        }
    },

    methods: {
        login(){
            axios.post('http://127.0.0.1:8000/api/data/login', this.dataLogin)

            .then(response => {
                if(response.data.message === true){
                    localStorage.setItem('status', response.data.message)
                    this.$router.push({ name: 'home' })
                } else {
                    this.$router.push({ name: 'login' })
                }
            })

            .catch(error => {
                console.log(error)
            })
        }
    }
    
}
</script>
<style>
    
</style>