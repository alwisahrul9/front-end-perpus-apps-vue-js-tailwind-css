<template>
  <main>
    <div :class="alert">
      <div class="position-absolute top-5 start-50 translate-middle-x">
        <div class="alert alert-success d-flex align-items-center" :class="danger" role="alert">
          <div>
            {{ alertContent }}
          </div>
        </div>
      </div>
    </div>
    <div class="bg-green-500 ps-3 pe-6 rounded-r-[100px] py-2 w-max mb-8">
      <h1 class="text-2xl font-semibold text-white m-0">PEMINJAMAN</h1>
    </div>
    <div class="d-flex gap-3 mb-4">
      <div class="search-input flex justify-between align-denter border-[2px] border-sky-600 w-60 gap-2 px-2 py-0.5 rounded-md">
        <input type="text" class="focus:outline-none w-full" placeholder="Cari Nama" v-model="searchInput" @input="search">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.5 14.5L19 19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </div>
      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Pinjamkan Buku
      </button>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Pinjamkan Buku</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
             <div class="mx-3">
              <div class="row">
                <div class="col-lg-3">
                  <h4>Nama Peminjam</h4>
                  <div class="d-flex align-items-center mb-2 mt-6 gap-3">
                    <div class="search-input flex justify-between align-denter border-[2px] border-sky-600 w-60 gap-2 px-2 py-0.5 rounded-md">
                      <input type="text" class="focus:outline-none w-full" v-model="inputAnggota" @input="cariAnggota" placeholder="Cari Nama">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.5 14.5L19 19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div :class="loaderAnggota">
                      <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive mb-5">
                    <table class="table table-bordered">
                      <thead class="table-light">
                        <tr>
                          <th scope="col">Nama</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="text-center fw-medium" v-if="anggota.length < 1">
                          <td colspan="2">{{ anggotaMsg }}</td>
                        </tr>
                        <tr v-for="(data, index) in anggota" :key="data.id">
                          <td @click="getAnggota(index)" class="hover:bg-blue-500 hover:text-white cursor-pointer">{{ data.name }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-lg-3">
                  <h4>Judul Buku</h4>
                  <div class="d-flex align-items-center mb-2 mt-6 gap-3">
                    <div class="search-input flex justify-between align-denter border-[2px] border-sky-600 w-60 gap-2 px-2 py-0.5 rounded-md">
                      <input type="text" class="focus:outline-none w-full" v-model="inputBuku" @input="cariBuku" placeholder="Cari Judul">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.5 14.5L19 19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div :class="loaderBuku">
                      <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive mb-5">
                    <table class="table table-bordered">
                      <thead class="table-light">
                        <tr>
                          <th scope="col">Judul</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="text-center fw-medium" v-if="buku.length < 1">
                          <td colspan="2">{{ bukuMsg }}</td>
                        </tr>
                        <tr v-for="(data, index) in buku" :key="data.id">
                          <td @click="getBuku(index)" class="hover:bg-blue-500 hover:text-white cursor-pointer">{{ data.judul }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-lg-5 offset-lg-1">
                  <h4 class="mb-4">Ringkasan</h4>
                  <div class="card py-3 px-4">
                    <form>
                      <label for="name" class="form-label">Nama Peminjam</label>
                      <input type="text" class="form-control mb-3" v-model="ringkasan.name" id="name" readonly>
                      <label for="judul" class="form-label">Judul Buku</label>
                      <input type="text" class="form-control mb-3" v-model="ringkasan.judul" id="judul" readonly>
                      <label for="tgl_pinjam" class="form-label">Tanggal Pinjam</label>
                      <input type="date" v-model="sendingData.tgl_pinjam" class="form-control mb-3" id="tgl_pinjam">
                      <label for="tgl_kembali" class="form-label">Tanggal Kembali</label>
                      <input type="date" class="form-control mb-4" v-model="sendingData.tgl_kembali" id="tgl_kembali">
                      <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="sendData">Selesai</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
             </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr class="table-light text-center">
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Judul Buku</th>
            <th scope="col">No. Handphone</th>
            <th scope="col">Tanggal Pinjam</th>
            <th scope="col">Tanggal Kembali</th>
            <th scope="col">Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="peminjams.length < 1 && show">
            <td colspan="7" class="text-center fw-semibold">Data tidak ada</td>
          </tr>
          <tr v-for="(data, index) in peminjams" :key="data.id">
            <th scope="row" class="text-center">{{ index+1 }}</th>
            <td>{{ data.name }}</td>
            <td>{{ data.judul }}</td>
            <td class="text-center">{{ data.no_hp }}</td>
            <td class="text-center">{{ data.tgl_pinjam }}</td>
            <td class="text-center">{{ data.tgl_kembali }}</td>
            <td class="text-center">
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" @click="detail(index)" data-bs-toggle="modal" data-bs-target="#pengembalian">
                Kembalikan
              </button>

              <!-- Modal -->
              <div class="modal fade" id="pengembalian" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Kembalikan atas nama :</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="mx-3 text-start">
                        <form>
                          <label for="name" class="form-label">Nama</label>
                          <input type="text" class="form-control mb-3" id="name" v-model="getDetail.name" readonly>
                          <label for="judul" class="form-label">Judul</label>
                          <input type="text" class="form-control mb-3" id="judul" v-model="getDetail.judul" readonly>
                          <label for="tgl_pinjam" class="form-label">Tanggal Pinjam</label>
                          <input type="date" class="form-control mb-3" id="tgl_pinjam" v-model="getDetail.tgl_pinjam" readonly>
                          <label for="tgl_kembali" class="form-label">Tanggal Kembali</label>
                          <input type="date" class="form-control mb-4" id="tgl_kembali" v-model="getDetail.tgl_kembali" readonly>
                          <div class="d-flex justify-end gap-3">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="kembalikanBuku()">Kembalikan Buku</button>
                          </div>
                        </form>
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
      peminjams: [],
      inputAnggota: "",
      anggota: [],
      inputBuku: "",
      buku: [],
      ringkasan: {
        name: "",
        judul: "",
        tgl_pinjam: "",
        tgl_kembali: "",
      },
      sendingData: {
        id_anggota: "",
        id_buku: "",
        tgl_pinjam: "",
        tgl_kembali: "",
      },
      getDetail: [],
      show: true,
      searchInput: "",
      anggotaMsg: "Silakan cari nama anggota",
      bukuMsg: "Silakan cari judul buku",
      loaderAnggota: "hidden",
      loaderBuku: "hidden",
      loader: "hidden",
      alert: "hidden",
      alertContent: "",
      danger: ""
    }
  },

  methods:{
    getData(){
      this.loader = "block"
      this.show = false
      axios.get(`${this.url}/list-peminjam`)

      .then(response => {
        this.peminjams = response.data.data
        this.loader = "hidden"
        this.show = true
      })

      .catch(error => {
        console.log(error)
      })
    },

    cariAnggota(){
      if(this.inputAnggota.length > 2) {
        this.loaderAnggota = "block"
        axios.get(`${this.url}/data/search-anggota/${this.inputAnggota}`)
  
        .then(response => {
          this.anggota = response.data.data
          this.anggotaMsg = "Anggota tidak ada!"
          this.loaderAnggota = "hidden"
        })
  
        .catch(error => {
          console.log(error)
        })
        
      } else if (this.inputAnggota.length < 2) {
        this.anggota = []
        this.anggotaMsg = "Silakan cari nama anggota"
      }

    },

    cariBuku(){
      if(this.inputBuku.length > 2) {
        this.loaderBuku = "block"
        axios.get(`${this.url}/data/search-buku/${this.inputBuku}`)
  
        .then(response => {

          if(response.data[0].stok < 1) {
            this.bukuMsg = "Stok buku kosong!"
            this.loaderBuku = "hidden"

          } else {
            const filterBuku = response.data.filter( item => item.stok > 0 )
            this.buku = filterBuku

            this.bukuMsg = "Judul tidak ada!"
            this.loaderBuku = "hidden"
            
          }
        })
  
        .catch(error => {
          console.log(error)
        })

      } else if (this.inputBuku.length < 2) {
        this.buku = []
        this.bukuMsg = "Silakan cari judul buku"
      }

    },

    getAnggota(index){
      this.ringkasan.name = this.anggota[index].name
      this.sendingData.id_anggota = this.anggota[index].id
    },

    getBuku(index){
      this.ringkasan.judul = this.buku[index].judul
      this.sendingData.id_buku = this.buku[index].id
    },

    sendData(){
      if(this.ringkasan.name == "" && this.ringkasan.judul == "" && this.ringkasan.tgl_pinjam == "" && this.ringkasan.tgl_kembali == "")
      {
        alert("Isi data secara lengkap!")
      } else {
        axios.post(`${this.url}/data/store-peminjam`, this.sendingData)
        
        .then(response => {
          this.getData()
          if (response.data.data > 0) {
            this.inputAnggota = ""
            this.inputBuku = ""
            this.anggota = []
            this.buku = []
            this.ringkasan.name = ""
            this.ringkasan.judul = ""
            this.ringkasan.tgl_pinjam = ""
            this.ringkasan.tgl_kembali = ""

            let counter = 10
            const timer = setInterval(() => {
              this.alert = "block"
              this.danger = "alert alert-danger"
              this.alertContent = "Anggota masih meminjam!"
              counter--

              if(counter == 0) {
                this.alert = "hidden"
                clearInterval(timer)
              }
            }, 1000)

          } else {

            this.inputAnggota = ""
            this.inputBuku = ""
            this.anggota = []
            this.buku = []
            this.ringkasan.name = ""
            this.ringkasan.judul = ""
            this.ringkasan.tgl_pinjam = ""
            this.ringkasan.tgl_kembali = ""
            
            let counter = 4
            const timer = setInterval(() => {
              this.alert = "block"
              this.danger = ""
              this.alertContent = "Data ditambahkan!"
              counter--
  
              if(counter == 0) {
                this.alert = "hidden"
                clearInterval(timer)
              }
            }, 1000)

          }
          
        })
  
        .catch(error => {
          console.log(error)
        })
      }
    },

    search(){
      if (this.searchInput.length > 2) {
        axios.get(`${this.url}/data/search-peminjam/${this.searchInput}`)

        .then(response => {
          this.peminjams = response.data.data
          this.show = true
        })

        .catch(error => {
          console.log(error)
        })

      } else if (this.searchInput.length < 2) {
        this.getData()
      }
    },

    detail(index) {
      this.getDetail = this.peminjams[index]
    },

    kembalikanBuku() {
      // const kembalikan = {
      //   id_anggota: this.getDetail.id_anggota,
      //   id_buku: this.getDetail.id_buku,
      //   tgl_pinjam: this.getDetail.tgl_pinjam,
      //   tgl_kembali: this.getDetail.tgl_kembali,
      // }

      axios.get(`${this.url}/data/pengembalian/${this.getDetail.id}`)

      .then(response => {
        console.log(response)
        this.getData()
        let counter = 4
          const timer = setInterval(() => {
            this.alert = "block"
            this.alertContent = "Buku dikembalikan!"
            counter--

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

  created(){
    this.getData()
  },

  // mounted() {
  //   const date = new Date()

  //   const tanggal = date.getDate()
  //   const bulan = date.getMonth()+1
  //   const tahun = date.getFullYear()

  //   this.ringkasan.tgl_pinjam = `${tanggal}-${bulan}-${tahun}`
  // },
}
</script>
<style>
  
</style>