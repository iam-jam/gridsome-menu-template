import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/styles/index.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
