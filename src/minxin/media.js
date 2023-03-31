import store from '@/store'

export default {
  mounted() {
    this.mediaQueryObj = window.matchMedia(this.mediaQuery)
    this.mediaQueryObj.onchange = this.$_handleDeviceToggle
  },
  data() {
    return {
      mediaQuery: '(max-width: 768px)',
      mediaQueryObj: null
    }
  },
  methods: {
    $_handleDeviceToggle(e) {
      if (e.matches) {
        store.dispatch('app/toggleDevice', 'mobile')
      } else {
        store.dispatch('app/toggleDevice', 'desktop')
      }
    }
  }
}
