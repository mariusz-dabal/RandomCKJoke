import Vue from "vue"
import "tailwindcss/dist/tailwind.css"
import App from "./App.vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faDice } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faDice)

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
