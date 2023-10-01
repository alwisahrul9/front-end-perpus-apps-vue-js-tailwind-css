<template>
    <div class="w-screen z-30 py-2 px-3 fixed xl:hidden block">
        <button :class="setToogle == true ? 'bg-transparant top-4 left-3' : 'bg-slate-200 rounded-md border top-4 left-3'" @click="showSideBar">
            <div v-if="setToogle == false">
                <svg width="40" height="40" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#000000"/><path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#000000"/><path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#000000"/></svg>
            </div>
            <div v-else>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu / Close_MD">
                        <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </div>
        </button>
    </div>
    <aside class="md:w-[35%] xl:w-[15%] w-screen h-screen py-8 bg-slate-800 drop-shadow-xl fixed px-3 flex flex-col xl:justify-between justify-evenly xl:translate-x-0 translate-x-[-100%] ease-in duration-150">
        <div class="flex flex-col gap-4">
            <RouterLink to="/" class="flex items-center gap-4 px-1 py-2 hover:bg-sky-700 rounded-md ease-in duration-300 text-decoration-none" @click="closeSideBar">
                <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="dashboard" class="icon glyph md:w-[40px] w-[50px]" stroke="#ffffff">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier">

                    <rect x="2" y="2" width="9" height="11" rx="2"/>

                    <rect x="13" y="2" width="9" height="7" rx="2"/>

                    <rect x="2" y="15" width="9" height="7" rx="2"/>

                    <rect x="13" y="11" width="9" height="11" rx="2"/>

                    </g>

                </svg>
                <span class="xl:text-[16px] text-lg text-white">Dashoard</span>
            </RouterLink>
            <RouterLink to="/peminjaman" class="flex items-center gap-4 px-1 py-2 hover:bg-sky-700 rounded-md ease-in duration-300 text-decoration-none" @click="closeSideBar">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" class="md:w-[40px] w-[50px]">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.84467 7.90533C9.13756 8.19822 9.61244 8.19822 9.90533 7.90533L11.625 6.18566L11.625 14.375C11.625 14.7892 11.9608 15.125 12.375 15.125C12.7892 15.125 13.125 14.7892 13.125 14.375V6.18566L14.8447 7.90533C15.1376 8.19822 15.6124 8.19822 15.9053 7.90533C16.1982 7.61244 16.1982 7.13756 15.9053 6.84467L12.9053 3.84467C12.6124 3.55178 12.1376 3.55178 11.8447 3.84467L8.84467 6.84467C8.55178 7.13756 8.55178 7.61244 8.84467 7.90533Z" fill="#ffffff"/> <path d="M12.375 20.375C16.7933 20.375 20.375 16.7933 20.375 12.375L16.625 12.375C15.6822 12.375 15.2108 12.375 14.9179 12.6679C14.625 12.9608 14.625 13.4322 14.625 14.375C14.625 15.6176 13.6176 16.625 12.375 16.625C11.1324 16.625 10.125 15.6176 10.125 14.375C10.125 13.4322 10.125 12.9608 9.83211 12.6679C9.53921 12.375 9.06781 12.375 8.125 12.375H4.375C4.375 16.7933 7.95672 20.375 12.375 20.375Z" fill="#ffffff"/> </g>

                </svg>
                <span class="xl:text-[16px] text-lg text-white">Peminjaman</span>
            </RouterLink>
            <RouterLink to="/pengembalian" class="flex items-center gap-4 px-1 py-2 hover:bg-sky-700 rounded-md ease-in duration-300 text-decoration-none" @click="closeSideBar">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" class="md:w-[40px] w-[50px]">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 10.4697C15.2374 10.1768 14.7626 10.1768 14.4697 10.4697L12.75 12.1893V4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L11.25 12.1893L9.53033 10.4697C9.23744 10.1768 8.76256 10.1768 8.46967 10.4697C8.17678 10.7626 8.17678 11.2374 8.46967 11.5303L11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303L15.5303 11.5303C15.8232 11.2374 15.8232 10.7626 15.5303 10.4697Z" fill="#ffffff"/> <path d="M17.7476 12C17.2996 12 16.9077 12.2742 16.591 12.591L13.591 15.591C12.7123 16.4697 11.2877 16.4697 10.409 15.591L7.40901 12.591C7.09226 12.2742 6.70041 12 6.25245 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12H17.7476Z" fill="#ffffff"/> </g>

                </svg>
                <span class="xl:text-[16px] text-lg text-white">Pengembalian</span>
            </RouterLink>
            <RouterLink to="/daftar-buku" class="flex items-center gap-4 px-1 py-2 hover:bg-sky-700 rounded-md ease-in duration-300 text-decoration-none" @click="closeSideBar">
                <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" class="md:w-[40px] w-[50px]" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" stroke="#ffffff">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <g> <path class="st0" d="M259.031,156.638c-0.009-8.693-0.009-16.24,1.061-23.4l-6.258,7.169 c-10.95,12.627-38.637,20.788-61.835,18.237c-23.215-2.561-33.138-14.859-22.179-27.494l82.473-86.306 c1.601-1.684,2.055-4.161,1.138-6.301c-0.91-2.123-3.016-3.521-5.341-3.521h-13.283c-3.892,0-7.614,1.55-10.336,4.33 l-71.548,72.499c-14.681,15.365-13.999,23.898-13.999,47.802c0,17.066,0,276.892,0,276.892c0,20.494,25.758,37.417,48.964,39.96 c23.207,2.57,54.996-5.61,65.946-18.228l7.287-8.474c-1.306-4.228-2.089-8.642-2.089-13.258V156.638z"/> <path class="st0" d="M120.113,156.638c-0.009-8.693-0.009-16.24,1.062-23.4l-6.267,7.169 c-10.95,12.627-38.629,20.788-61.835,18.237c-23.207-2.561-33.138-14.859-22.179-27.494l82.481-86.306 c1.591-1.684,2.054-4.161,1.137-6.301c-0.91-2.123-3.016-3.521-5.34-3.521H95.879c-3.883,0-7.597,1.55-10.326,4.33l-71.548,72.499 c-14.682,15.365-14,23.898-14,47.802c0,17.066,0,276.892,0,276.892c0,20.494,25.75,37.417,48.965,39.96 c23.197,2.57,54.988-5.61,65.938-18.228l7.303-8.474c-1.314-4.228-2.098-8.642-2.098-13.258V156.638z"/> <path class="st0" d="M506.197,35.022h-14.379c-4.195,0-8.188,1.82-10.951,4.978l-87.51,100.406 c-10.95,12.627-38.638,20.788-61.835,18.237c-23.215-2.561-33.137-14.859-22.179-27.494l82.473-86.306 c1.601-1.684,2.055-4.161,1.145-6.301c-0.918-2.123-3.024-3.521-5.34-3.521H374.33c-3.883,0-7.607,1.55-10.336,4.33l-71.548,72.499 c-14.682,15.365-13.999,23.898-13.999,47.802c0,17.066,0,276.892,0,276.892c0,20.494,25.758,37.417,48.964,39.96 c23.214,2.57,54.996-5.61,65.946-18.228L501.454,332.72c6.806-7.918,10.546-17.992,10.546-28.42V40.826 C512,37.625,509.397,35.022,506.197,35.022z"/> </g> </g>

                </svg>
                <span class="xl:text-[16px] text-lg text-white">Daftar Buku</span>
            </RouterLink>
            <RouterLink to="/anggota" class="flex items-center gap-4 px-1 py-2 hover:bg-sky-700 rounded-md ease-in duration-300 text-decoration-none" @click="closeSideBar">
                <svg fill="#ffffff" class="md:w-[40px] w-[50px]" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35.70 35.70" xml:space="preserve" stroke="#ffffff" stroke-width="0.00035695000000000003">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <g> <path d="M11.558,10.767c0-3.473,2.815-6.29,6.289-6.29c3.476,0,6.289,2.817,6.289,6.29c0,3.475-2.813,6.29-6.289,6.29 C14.373,17.057,11.558,14.243,11.558,10.767z M35.667,22.607l-0.879-5.27c-0.158-0.954-0.961-1.754-1.896-1.984 c-0.836,0.74-1.932,1.191-3.136,1.191c-1.203,0-2.3-0.452-3.135-1.191c-0.938,0.229-1.739,1.03-1.897,1.984l-0.021,0.124 c-0.522-0.503-1.17-0.881-1.868-1.052c-1.33,1.176-3.072,1.896-4.987,1.896s-3.657-0.72-4.987-1.896 c-0.698,0.171-1.346,0.549-1.868,1.052l-0.021-0.124c-0.158-0.954-0.962-1.754-1.897-1.984c-0.835,0.74-1.932,1.191-3.135,1.191 c-1.204,0-2.3-0.452-3.136-1.191c-0.936,0.229-1.738,1.03-1.896,1.984l-0.879,5.27c-0.189,1.131,0.596,2.057,1.741,2.057h7.222 l-0.548,3.283c-0.3,1.799,0.948,3.271,2.771,3.271H24.48c1.823,0,3.071-1.475,2.771-3.271l-0.548-3.283h7.222 C35.071,24.662,35.855,23.738,35.667,22.607z M29.755,15.762c2.184,0,3.954-1.77,3.954-3.954c0-2.183-1.771-3.954-3.954-3.954 s-3.953,1.771-3.953,3.954C25.802,13.992,27.574,15.762,29.755,15.762z M5.938,15.762c2.183,0,3.953-1.77,3.953-3.954 c0-2.183-1.771-3.954-3.953-3.954c-2.184,0-3.954,1.771-3.954,3.954C1.984,13.992,3.755,15.762,5.938,15.762z"/> </g> </g>

                </svg>
                <span class="xl:text-[16px] text-lg text-white">Anggota</span>
            </RouterLink>
        </div>
        <!-- Logout -->
        <button type="button" @click="logout" class="flex items-center gap-4 text-decoration-none">
            <svg class="md:w-[45px] w-[50px]" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00025"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z" fill="#f00000"></path> </g></svg>
            <span class="xl:text-[17px] text-lg text-rose-600 font-bold">Keluar</span>
        </button>
    </aside>
</template>
<script>
import axios from 'axios'

    export default {
        methods: {
            showSideBar() {
                const aside = document.querySelector('aside')
                aside.classList.toggle('active')
                
                if (this.setToogle == false) {
                    this.setToogle = true
                } else {
                    this.setToogle = false
                }
            },
            closeSideBar() {
                const aside = document.querySelector('aside')
                aside.classList.remove('active')
                this.setToogle = false
            },

            logout(){
                let text = "Anda yakin akan keluar?";
                if (confirm(text) == true) {
                    axios.get('http://127.0.0.1:8000/api/data/logout')

                    .then(response => {
                        if (response.data.status === true){
                            localStorage.setItem('status', false)
                            this.$router.push({ name: 'login' })
                        } else {
                            this.$router.push({ name: 'home' })
                        }
                    })

                    .catch(error => {
                        console.log(error)
                    })
                } else {
                    text = "Batal keluar!";
                }
            }
        },
        data() {
            return {
                setToogle: false
            }
        }
    }
</script>
<style>
    .active {
        transform: translateX(0%);
    }
</style>