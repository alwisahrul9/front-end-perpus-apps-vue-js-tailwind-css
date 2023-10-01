<template lang="">
  <main>
    <div class="bg-yellow-500 ps-3 pe-6 rounded-r-[100px] py-2 w-max mb-8">
      <h1 class="text-2xl font-semibold text-white m-0">PENGEMBALIAN</h1>
    </div>
    <div class="search-input flex justify-between align-denter border-[2px] border-sky-600 w-60 gap-2 px-2 py-0.5 rounded-md mb-3">
      <input type="text" class="focus:outline-none w-full" placeholder="Cari Nama" v-model="searchInput" @input="search">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.5 14.5L19 19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>

    <div class="table-responsive">
      <table class="table table table-bordered">
        <thead>
          <tr class="table-light text-center">
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Judul Buku</th>
            <th scope="col">No. Handphone</th>
            <th scope="col">Tanggal Pinjam</th>
            <th scope="col">Tanggal Kembali</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="pengembalians.length < 1 && show">
            <td colspan="7" class="text-center fw-semibold">Data tidak ada</td>
          </tr>
          <tr v-for="(data, index) in pengembalians" :key="data.id">
            <th scope="row" class="text-center">{{ index+1 }}</th>
            <td>{{ data.name }}</td>
            <td>{{ data.judul }}</td>
            <td class="text-center">{{ data.no_hp }}</td>
            <td class="text-center">{{ data.tgl_pinjam }}</td>
            <td class="text-center">{{ data.tgl_kembali }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center">
      <div :class="loader">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    
  </main>
</template>
<script>
import axios from 'axios';

export default {
  data(){
    return {
      url: "http://127.0.0.1:8000/api",
      pengembalians: [],
      show: true,
      searchInput: "",
      loader: "hidden"
    }
  },

  methods: {
    getData(){
      this.loader = "block"
      this.show = false
      axios.get(`${this.url}/list-pengembalian`)

      .then(response => {
        this.pengembalians = response.data.data
        this.loader = "hidden"
        this.show = true
      })

      .catch(error => {
        console.log(error)
      })
    },

    search() {
      if(this.searchInput.length > 2) {
        axios.get(`${this.url}/data/search-pengembalian/${this.searchInput}`)

        .then(response => {
          this.pengembalians = response.data.data
        })
        
        .catch(error => {
          console.log(error)
        })

      } else if(this.searchInput.length < 1) {
        this.getData()
      }
    }
  },


  created(){
    this.getData()
  }
}
</script>
<style lang="">
  
</style>