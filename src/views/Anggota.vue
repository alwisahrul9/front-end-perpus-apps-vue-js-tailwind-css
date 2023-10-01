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
    <div class="bg-rose-500 ps-3 pe-6 rounded-r-[100px] py-2 w-max mb-8">
      <h1 class="text-2xl font-semibold text-white m-0">DAFTAR ANGGOTA</h1>
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <div class="flex md:gap-4 md:justify-start justify-between content-center mb-4">
          <div class="search-input flex justify-between align-denter border-[2px] border-sky-600 w-60 gap-2 px-2 py-0.5 rounded-md">
            <input type="text" class="focus:outline-none w-full" v-model="searchInput" @input="search" placeholder="Cari Nama">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.5 14.5L19 19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Tambah Anggota
          </button>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Anggota Baru</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mx-3">
                  <form>
                    <label for="name" class="form-label">Nama</label>
                    <input type="text" class="form-control mb-3" id="name" v-model="new_anggota.name" placeholder="Nama Lengkap" required>
                    <label for="no_hp" class="form-label">No. Handphone</label>
                    <input type="number" class="form-control mb-3" id="no_hp" minlength="10" v-model="new_anggota.no_hp" placeholder="Nomor Handphone / Whatsapp" required>
                    <label for="alamat" class="form-label">Alamat</label>
                    <input type="text" class="form-control mb-3" id="alamat" v-model="new_anggota.alamat" placeholder="Alamat Lengkap" required>
                    <div class="flex justify-end gap-3">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="sendData()">Simpan</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>       
        <div class="relative overflow-x-auto shadow-md rounded-lg">
            <table class="w-full text-sm text-left">
                <thead class="text-xs uppercase bg-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-center">
                            No
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Nama
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            No. Handphone
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Alamat
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Tindakan
                        </th>
                    </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b" v-if="anggotas.length < 1 && show">
                    <th scope="row" colspan="5" class="px-6 py-4 font-medium text-center">
                        Data Kosong!
                    </th>
                  </tr>
                  <tr class="bg-white border-b" v-for="(anggota, index) in anggotas" :key="anggota.id">
                    <th class="px-6 py-4 text-center">
                      {{ index+1 }}
                    </th>
                    <td class="px-6 py-4">
                      {{ anggota.name }}
                    </td>
                    <td class="px-6 py-4 text-center">
                      {{ anggota.no_hp }}
                    </td>
                    <td class="px-6 py-4">
                      {{ anggota.alamat }}
                    </td>
                    <td class="px-6 py-4 text-center">
                      <div class="flex flex-wrap xl:gap-0 gap-4 justify-evenly w-full">
                        <button type="button" class="btn btn-primary" @click="detail(index)" data-bs-toggle="modal" data-bs-target="#edit">
                          Edit
                        </button>
                        <!-- Edit Modal -->
                        <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit {{ getDetail.name }}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body text-start">
                                <div class="mx-3">
                                  <form>
                                    <label for="name" class="form-label">Nama</label>
                                    <input type="text" class="form-control mb-3" id="name" v-model="update_anggota.name" placeholder="Nama Lengkap" required>
                                    <label for="no_hp" class="form-label">No. Handphone</label>
                                    <input type="text" class="form-control mb-3" id="no_hp" v-model="update_anggota.no_hp" placeholder="Nomor Handphone / Whatsapp" required>
                                    <label for="alamat" class="form-label">Alamat</label>
                                    <input type="text" class="form-control mb-3" id="alamat" v-model="update_anggota.alamat" placeholder="Alamat Lengkap" required>
                                    <div class="flex justify-end gap-3">
                                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="edit(getDetail.id)">Simpan</button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button type="button" class="btn btn-danger px-2 py-2" @click="detail(index)" data-bs-toggle="modal" data-bs-target="#hapus">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                          </svg>
                        </button>
                        <!-- Hapus Modal -->
                        <div class="modal fade" id="hapus" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Hapus {{ getDetail.name }}?</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body text-[15px] text-center">
                                Setelah dihapus, data akan hilang secara permanen!
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="hapus(getDetail.id)">Hapus</button>
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
        <div class="text-center my-3">
          <div :class="loader">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div class="flex w-full justify-evenly mt-6">
            <button @click="previousPage()" :class="previous == false ? 'hidden' : 'bg-sky-500 text-white px-4 py-1 rounded'">Previus</button>
            <button @click="nextPage()" :class="next == false ? 'hidden' : 'bg-sky-500 text-white px-4 py-1 rounded'">Next</button>
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
        anggotas: [],
        new_anggota: {
          name: "",
          no_hp: "",
          alamat: ""
        },
        update_anggota: {
          name: "",
          no_hp: "",
          alamat: ""
        },
        getDetail: [],
        loader: "hidden",
        show: true,
        searchInput: "",
        alertHP: false,
        alert: "hidden",
        alertContent: "",
        next: false,
        previous: false,
        page: 1
      }
    },

    methods:{
      getData(){
        this.loader = "block"
        this.show = false
        axios.get(`${this.url}/list-anggota?page=${this.page}`)

        .then(response => {
          this.anggotas = response.data.data
          this.loader = "hidden"
          this.show = true

          const maxPage = response.data.last_page
          if(this.page < maxPage) {
            this.next = true
          } else {
            this.next = false
          }
        })

        .catch(error => {
          console.log(error)
        })
      },

      search(){
        if(this.searchInput.length > 2) {
          axios.get(`${this.url}/data/search-anggota/${this.searchInput}`)
          
          .then(response => {
            this.anggotas = response.data.data
            this.next = false
          })

          .catch(error => {
            console.log(error)
          })

        } else if(this.searchInput < 1) {
          this.getData()
        }
      },

      sendData(){
        if(this.new_anggota.name !== "" && this.new_anggota.no_hp !== "" && this.new_anggota.alamat !== ""){

          axios.post(`${this.url}/data/store-anggota`, this.new_anggota)
  
          .then(response => {
            this.getData()
            this.new_anggota.name = ""
            this.new_anggota.no_hp = ""
            this.new_anggota.alamat = ""

            let counter = 4
            const timer = setInterval(() => {
              counter--
              this.alert = "block"
              this.alertContent = "Berhasil ditambahkan!"
              
              if(counter == 0) {
                this.alert = "hidden"
                clearInterval(timer)
              }
            }, 1000)

          })
  
          .catch(error => {
            console.log(error)
          })

        } else {
          alert("Isi data dengan lengkap!")
        }
      },

      detail(index){
        // console.log(this.anggotas[index])
        this.getDetail = this.anggotas[index]
        this.update_anggota.name = this.getDetail.name
        this.update_anggota.no_hp = this.getDetail.no_hp
        this.update_anggota.alamat = this.getDetail.alamat
      },

      hapus(index) {
        axios.delete(`${this.url}/data/destroy-anggota/${index}`)
  
          .then(response => {
            this.getData()

            let counter = 4
            const timer = setInterval(() => {
              counter--
              this.alert = "block"
              this.alertContent = "Data berhasil dihapus!"

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

      edit(index) {

        axios.post(`${this.url}/data/update-anggota/${index}`, this.update_anggota)
  
        .then(response => {
          this.getData()
          let counter = 4
          const timer = setInterval(() => {
            counter--
            this.alert = "block"
            this.alertContent = "Data diupdate!"

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

      nextPage(){
        this.page++
        axios.get(`${this.url}/list-anggota?page=${this.page}`)

        .then(response => {
          this.anggotas = response.data.data
          this.previous = true

          const maxPage = response.data.last_page
          if(this.page < maxPage) {
            this.next = true
          } else {
            this.next = false
          }
        })

        .catch(error => {
          console.log(error)
        })
      },

      previousPage(){
        this.page--
        if(this.page <= 1) {
          this.page = 1
        }
        axios.get(`${this.url}/list-anggota?page=${this.page}`)

        .then(response => {
          this.anggotas = response.data.data
          this.previous = true

          if(this.page <= 1) {
            this.previous = false
          }

          const maxPage = response.data.last_page
          if(this.page < maxPage) {
            this.next = true
          } else {
            this.next = false
          }
        })
      }

    },


    created(){
      this.getData()
    }
  }
</script>

<style>
  
</style>