<template>
  <main>
    <div :class="alert">
      <div class="position-absolute top-5 start-50 translate-middle-x">
        <div class="alert alert-success d-flex align-items-center" role="alert">
          <div>
            {{ alertContent }}
          </div>
        </div>
      </div>
    </div>
    <div class="bg-violet-900 ps-3 pe-6 rounded-r-[100px] py-2 w-max mb-8">
      <h1 class="text-2xl font-semibold text-white m-0">DAFTAR BUKU</h1>
    </div>
    <div class="grid grid-cols-12 xl:gap-[20px] md:gap-6 gap-8">
      <div class="lg:col-span-8 md:col-span-7 col-span-12">
        <div class="search-input flex justify-between align-denter border-[2px] border-sky-600 w-60 gap-2 px-2 py-0.5 rounded-md mb-4">
          <input type="text" class="focus:outline-none w-full" @input="search" v-model="cariJudul" placeholder="Cari Judul">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.5 14.5L19 19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="relative overflow-x-auto shadow-md rounded-lg">
            <table class="w-full text-sm text-left">
                <thead class="text-xs uppercase bg-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-center">
                            No 
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Judul
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Stok
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Gambar
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            <span class="">Tindakan</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b" v-if="list_buku.length < 1 && show">
                        <th scope="row" colspan="5" class="px-6 py-4 font-medium text-center">
                            Data Kosong!
                        </th>
                    </tr>
                    <tr class="bg-white border-b" v-for="(data, index) in list_buku" :key="data.id">
                        <th scope="row" class="px-6 py-4 font-medium text-center">
                            {{ index+1 }}
                        </th>
                        <td class="px-6 py-4">
                            {{ data.judul }}
                        </td>
                        <td class="px-6 py-4 text-center">
                            {{ data.stok }}
                        </td>
                        <td class="px-6 py-4">
                          <img :src="`http://127.0.0.1:8000/storage/gambar/${data.gambar}`" alt="" width="60" class="mx-auto">
                        </td>
                        <td class="px-6 py-4">
                          <div class="flex flex-wrap gap-3 justify-evenly w-full">
                            <button @click="getInfo(index)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit">Edit</button>
                            <!-- Edit Modal -->
                            <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit buku {{ getDetail.judul }}</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body text-[15px] mx-2">
                                    <form action="">
                                      <label for="judul" class="form-label">Judul</label>
                                      <input type="text" class="form-control mb-3" v-model="edit_buku.judul" id="judul" placeholder="Judul Buku" required>
                                      <label for="stok" class="form-label">Stok</label>
                                      <input type="number" class="form-control mb-3" v-model="edit_buku.stok" id="stok" placeholder="Jumlah Total" required>
                                      <label for="gambar" class="form-label">Gambar</label>
                                      <input type="file" accept="image/*" id="gambarUpdate" class="form-control mb-4">
                                      <div class="flex justify-end gap-3 ">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                        <button type="button" class="btn btn-primary px-4" data-bs-dismiss="modal" @click="edit(getDetail.id)">Ubah</button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>


                            <button type="button" class="btn btn-danger px-2 py-2" @click="getInfo(index)" data-bs-toggle="modal" data-bs-target="#hapus">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                              </svg>
                            </button>

                            <!-- Hapus Modal -->
                            <div class="modal fade" id="hapus" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Hapus buku {{ getDetail.judul }}?</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body text-[15px] text-center">
                                    Setelah dihapus, data akan hilang secara permanen!
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="hapusBuku(getDetail.id)">Hapus</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
          <div class="text-center mt-4">
            <div :class="loader">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <div class="flex w-full justify-evenly mt-6">
            <button @click="previousPage()" :class="list_buku.length < 1 || previous == false ? 'hidden' : 'bg-sky-500 text-white px-4 py-1 rounded'">Previus</button>
            <button @click="nextPage()" :class="next == false ? 'hidden' : 'bg-sky-500 text-white px-4 py-1 rounded'">Next</button>
          </div>
      </div>
      <div class="lg:col-span-4 md:col-span-5 col-span-12">
        <div class="card border rounded-lg px-4 py-4 drop-shadow-lg bg-white" v-bind="active">
          <h2 class="text-xl text-center font-medium mb-4">Tambah Buku</h2>
          <form class="flex flex-col" @submit="sendBuku">
            <label for="judul" class="text-md">Judul</label>
            <input type="text" v-model="new_buku.judul" id="judul" class="border-[2px] border-sky-600 focus:border-blue-800 rounded-md outline-none py-[5px] px-2 mt-1 mb-4" placeholder="Judul Buku" required>
            <label for="stok" class="text-md">Stok</label>
            <input type="number" v-model="new_buku.stok" id="stok" class="border-[2px] border-sky-600 focus:border-blue-800 rounded-md outline-none py-[5px] px-2 mt-1 mb-4" placeholder="Jumlah Total" required>
            <label for="gambar" class="text-md">Gambar <span class="text-rose-500">*maksimal 3MB</span></label>
            <input type="file" @input="selectFile" accept="image/*" ref="gambar" id="gambar" class="border-[1px] border-sky-600 focus:border-blue-800 outline-none mt-1 mb-6" required>
            <div class="flex justify-end">
              <button class="outline-none border-transparant bg-green-700 text-white px-4 py-[7px] rounded-md text-md">Tambah</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from 'axios';
import {ref} from 'vue';

export default {

  setup(){
    const gambar = ref(null);
  },

  data() {
    return {
      url: "http://127.0.0.1:8000/api",
      list_buku: [],
      new_buku: {
        judul: "",
        stok: "",
        gambar: "",
      },
      edit_buku: {
        judul: "",
        stok: "",
        gambar: ""
      },
      getDetail: [],
      cariJudul: "",
      page: 1,
      loader: "hidden",
      show: true,
      alert: "hidden",
      alertContent: "",
      next: false,
      previous: false
    }
  },

  methods: {
    getData() {
        this.loader = "block"
        this.show = false

        axios.get(`${this.url}/list-buku?page=${this.page}`)
        .then(response => {
          this.list_buku = response.data.data
          this.loader = "hidden"
          this.show = true
          
          // Jika nilai page belum mencapai nilai lastPage, maka tombol next akan hilang.
          const lastPage = response.data.last_page
          if(this.page != lastPage) {
            this.next = true
          } else {
            // Jika nilai page sudah mencapai nilai lastPage, maka tombol next akan ditampilkan.
            this.next = false
          }
        })

        .catch(error => {
          console.log(error)
        })
    },

    selectFile(){
        if(gambar.files[0].size > 3000000) {
          gambar.value = ""
          alert("Ukuran File Terlalu Besar!")
        }
        return gambar.files[0]
    },

    async nextPage(){
        this.page++
        const data = await axios.get(`${this.url}/list-buku?page=${this.page}`)
        this.list_buku = data.data.data
        this.previous = true
        
        // Jika nilai page belum mencapai nilai lastPage, maka tombol next akan hilang.
        const lastPage = data.data.last_page
        if(this.page != lastPage) {
          this.next = true
        } else {
          // Jika nilai page sudah mencapai nilai lastPage, maka tombol next akan ditampilkan.
          this.next = false
        }
    },

    async previousPage(){
        this.page--
        this.cariJudul = ""
        if(this.page < 1) {
          this.page = 1
        }
        const data = await axios.get(`${this.url}/list-buku?page=${this.page}`)
        this.list_buku = data.data.data
        this.previous = true

        if(this.page <= 1) {
          this.previous = false
        }

        // Jika nilai page belum mencapai nilai lastPage, maka tombol next akan hilang.
        const lastPage = data.data.last_page
        if(this.page != lastPage) {
          this.next = true
        } else {
          // Jika nilai page sudah mencapai nilai lastPage, maka tombol next akan ditampilkan.
          this.next = false
        }
    },

    sendBuku() {
      
        const formData = new FormData()

        formData.append('judul', this.new_buku.judul)
        formData.append('stok', this.new_buku.stok)
        formData.append('gambar', this.new_buku.gambar = this.selectFile())

        axios.post(`${this.url}/data/store-buku`, formData, {
            headers: {
              "Content-Type":"multipart/form-data"
            }
        })

        .then(response => {
          console.log(response)
          this.getData()

          // variable durasi muncul
          let counter = 4
          
          // Gerakkan durasi dengan set interval
          const timer = setInterval(() => {
            // Kurangi nilai variable durasi muncul
            counter--
            // Munculkan alert
            this.alert = "block"
            this.alertContent = "Data Tersimpan!"

            // Jika durasi muncul == 0, maka alert akan di hilangkan lagi dan fungsi interval di stop
            if(counter == 0) {
              this.alert = "hidden"
              clearInterval(timer)
            }
          }, 1000)

        })

        .catch(error => {
          console.log(error)
        })
    },

    getInfo(index){
      const data = this.list_buku[index]
      this.getDetail = data
      this.edit_buku.judul = this.getDetail.judul
      this.edit_buku.stok = this.getDetail.stok
    },

    hapusBuku(index){
      axios.delete(`${this.url}/data/destroy-buku/${index}`)
      .then(response => {
        console.log(response)
        this.list_buku = []
        this.getData()
        
        // variable durasi muncul
        let counter = 4
        
        // Gerakkan durasi dengan set interval
        const timer = setInterval(() => {
          // Kurangi nilai variable durasi muncul
          counter--
          // Munculkan alert
          this.alert = "block"
          this.alertContent = "Data terhapus!"

          // Jika durasi muncul == 0, maka alert akan di hilangkan lagi dan fungsi interval di stop
          if(counter == 0) {
            this.alert = "hidden"
            clearInterval(timer)
          }
        }, 1000)

      })
      .catch(error => {
        console.log(error)
      })
    },

    search(){
        if (this.cariJudul.length > 2) {
          axios.get(`${this.url}/data/search-buku/${this.cariJudul}`)

          .then(response => {
            this.list_buku = response.data
            this.next = false
          })
          .catch(error => {
            console.log(error)
          })

        } else if(this.cariJudul.length == 0){
          this.getData()
        }
    },

    edit(index) {
        const formData = new FormData()

        const gambar = document.getElementById('gambarUpdate')

        if(gambar.files[0] == true) {
          if(gambar.files[0].type !== "image/jpeg" || gambar.files[0].type !== "image/png" && gambar.files[0].size > 3000000) {
            gambar.value = ""
            alert("Format dan ukuran tidak sesuai")
          }
        }

        formData.append('judul', this.edit_buku.judul)
        formData.append('stok', this.edit_buku.stok)
        formData.append('gambar', this.edit_buku.gambar = gambar.files[0])

        axios.post(`${this.url}/data/update-buku/${index}`, formData, {
            headers: {
              "Content-Type":"multipart/form-data"
            }
        })

        .then(response => {
          console.log(response)
          this.list_buku = []
          this.getData()
          
          // variable durasi muncul
          let counter = 4
          
          // Gerakkan durasi dengan set interval
          const timer = setInterval(() => {
            // Kurangi nilai variable durasi muncul
            counter--
            // Munculkan updated
            this.alert = "block"
            this.alertContent = "Data berhasil diubah!"

            // Jika durasi muncul == 0, maka updated akan di hilangkan lagi dan fungsi interval di stop
            if(counter == 0) {
              this.alert = "hidden"
              clearInterval(timer)
            }
          }, 1000)
        })

        .catch(error => {
          console.log(error)
        })

    }
  },

  created() {
    this.getData()
  }

}
</script>
<style>
  
</style>