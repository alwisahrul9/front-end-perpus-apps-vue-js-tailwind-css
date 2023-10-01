<template>
  <main>
    <div class="bg-blue-900 ps-3 pe-6 rounded-r-[100px] py-2 w-max mb-8">
      <h1 class="text-2xl font-semibold text-white m-0">BERANDA</h1>
    </div>

    
    <section>
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <!-- <Chart :forData="datas" forLabel="Data Peminjam"/> -->
          <div class="d-flex justify-between flex-wrap gap-4 mb-3">
            <div class="md:w-1/4 w-1/2">
              <label for="" class="mb-1 fw-bold">Data pertahun</label><br>
              <label for="">Pilih Tahun:</label><br>
              <select v-model="inputTahun" @change="getTahun" class="border-2 rounded px-2 py-1 outline-none border-sky-500">
                <option selected disabled>--Pilih Tahun--</option>
                <option v-for="(tahun, index) in filterRangeAwal" :value="tahun">{{ tahun }}</option>
              </select>
            </div>
            
            <div>
              <label class="mb-1 fw-bold">Tampilkan dari tahun ke tahun</label>
              <div class="d-flex gap-3">
                <div class="md:w-full w-1/2">
                  <label for="">Dari:</label>
                  <select v-model="tahunAwal" @change="openTahunAkhirInput" class="border-2 rounded px-2 py-1 outline-none border-sky-500">
                    <option selected disabled>--Pilih Tahun--</option>
                    <option v-for="tahun in filterRangeAwal" :value="tahun">{{ tahun }}</option>
                  </select>
                  <!-- <input type="text" class="form-control" placeholder="cth: 2020"> -->
                </div>
                <div class="md:w-full w-1/2">
                  <label for="">Ke:</label><br>
                  <select v-model="tahunAkhir" @change="getRentang" class="border-2 rounded px-2 py-1 outline-none border-sky-500">
                    <option selected disabled>--Pilih Tahun--</option>
                    <option v-for="tahun in filterRangeAkhir" :value="tahun">{{ tahun }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-center">
            <div :class="loader">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

  // import Chart from './../components/Chart.vue'
  import axios from 'axios'
  import Chart from 'chart.js/auto';

  export default {

    // components: { 
    //   Chart
    // },

    data() {
      return {
        url: "http://127.0.0.1:8000/api",
        datas: [],
        inputTahun: "",
        chart: "",
        tahunAwal: "",
        tahunAkhir: "",
        rentangTahun: [],
        filterRangeAwal: [],
        filterRangeAkhir: [],
        // tahunAwalInput: false,
        // tahunAkhirInput: true,
        loader: "hidden"
      }
    },

    methods: {
      getData(){
        const date = new Date()
        const tahunSekarang = date.getFullYear()
        this.loader = "block"

        axios.get(`${this.url}/data/jml-peminjam/${tahunSekarang}`)

        .then(response => {
          this.datas = response.data.data
          this.loader = "hidden"

          const ctx = document.getElementById('myChart');
          this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
              datasets: [{
                label: "Data Peminjam",
                data: this.datas,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 159, 64, 0.5)',
                  'rgba(255, 205, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(201, 203, 207, 0.5)'
                ],
                
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        })

        .catch(error => {
          console.log(error)
        })
      },

      getTahun(){
        axios.get(`${this.url}/data/jml-peminjam/${this.inputTahun}`)

        .then(response => {
          this.datas = response.data.data
          this.chart.destroy()

          const ctx = document.getElementById('myChart');
          this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
              datasets: [{
                label: "Data Peminjam",
                data: this.datas,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 159, 64, 0.5)',
                  'rgba(255, 205, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(201, 203, 207, 0.5)'
                ],
                
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        })

        .catch(error => {
          console.log(error)
        })
      },

      openTahunAkhirInput(){
        // if(this.tahunAwal.length > 3) {
        //   this.tahunAkhirInput = false
        // } else {
        //   this.tahunAkhirInput = true
        // }
        this.filterRangeAkhir = []

        for(let i = parseInt(this.tahunAwal) + 1; i <= this.filterRangeAwal.slice(-1); i++) {
          this.filterRangeAkhir.push(i)
        }

      },

      getRentang(){

        this.loader = "block"
          
        axios.get(`${this.url}/data/tahun-awal/${this.tahunAwal}/tahun-akhir/${this.tahunAkhir}`)
        .then(response => {
          this.datas = response.data.data
          this.chart.destroy()
          this.loader = "hidden"

          const min = parseInt(this.tahunAwal)
          const max = this.tahunAkhir

          this.rentangTahun = []

          for(let i = min; i <= max; i++) {
            this.rentangTahun.push(i)
          }

          const ctx = document.getElementById('myChart');
          this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: this.rentangTahun,
              datasets: [{
                label: "Data Peminjam",
                data: this.datas,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 159, 64, 0.5)',
                  'rgba(255, 205, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(201, 203, 207, 0.5)'
                ],
                
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        })

        .catch(error => {
          console.log(error)
        })

        // if(this.tahunAkhir.length > 3) {
          
        //   this.tahunAwalInput = true

        // } else if (this.tahunAkhir < 1) {
        //   this.tahunAwalInput = false
        //   this.chart.destroy()
        //   this.getData()
        // }
      },
    },

    created(){
      this.getData()
      axios.get(`${this.url}/data/get-peminjam`)

      .then(response => {
        const getMinTgl = response.data.min.tgl_pinjam
        const getMaxTgl = response.data.max.tgl_pinjam
        const array1 = getMinTgl.split("")
        const array2 = getMaxTgl.split("")

        const newArray1 = []
        const newArray2 = []
        
        for(let i = 0; i < 4; i++) {
          newArray1.push(array1[i])
        }

        for(let i = 0; i < 4; i++) {
          newArray2.push(array2[i])
        }

        const minTgl = newArray1.join('')
        const maxTgl = newArray2.join('')

        for(let i = minTgl; i <= maxTgl; i++) {
          this.filterRangeAwal.push(i)
        }

      })

      .catch(error => {
        console.log(error)
      })
    }
  }
</script>
<style>
  
</style>