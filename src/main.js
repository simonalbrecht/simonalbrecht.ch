import '~/styles/index.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)

  // Add custom attributes to html, body
  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'min-w-full min-h-full w-full h-full' }
}
