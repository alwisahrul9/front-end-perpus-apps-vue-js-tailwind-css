import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import DashboardLayout from '../layout/Dashboard.vue'
import PeminjamanView from '../views/Peminjaman.vue'
import PengembalianView from '../views/Pengembalian.vue'
import DaftarBukuView from '../views/DaftarBuku.vue'
import AnggotaView from '../views/Anggota.vue'
import NotFoundView from '../views/NotFound.vue'
import LoginView from '../layout/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'peminjaman',
          name: 'peminjaman',
          component: PeminjamanView
        },
        {
          path: 'pengembalian',
          name: 'pengembalian',
          component: PengembalianView
        },
        {
          path: 'daftar-buku',
          name: 'daftar-buku',
          component: DaftarBukuView
        },
        {
          path: 'anggota',
          name: 'anggota',
          component: AnggotaView
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('status')) // true
  if(to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' })

  } else if(to.name === 'login' && isAuthenticated) {
    next({ name: 'home' })

  } else {
    next()
  }
})

export default router