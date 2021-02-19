import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'

import App from './App.vue'

//import SweetAlertIcons from 'vue-sweetalert-icons';

import VueSweetalert2 from 'vue-sweetalert2';
//import VueRouter from 'vue-router';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'mdb-vue-ui-kit/css/mdb.min.css'

const app = createApp(App) //.mount('#app')
app.use(VueSweetalert2)
//app.use(VueRouter)



app.mount('#app')