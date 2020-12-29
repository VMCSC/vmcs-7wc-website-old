<template>
  <div id="app">
    <div :class="'site-wrapper' + getPageStateClass()">
      <div class="splash-wrapper">
        <div class="vmcs-logo-wrapper">
          <img class="img-fluid vmcs-logo-main" alt="Vincent Massey Computer Science Club logo" src="./assets/7wc-logo-vector.svg" @click="toggleColorMode">
        </div>

        <h3>Vincent Massey 7 Week Challenge</h3>
        <p>The 7 Week Challenge (7WC) is a series of events <strong>coming in mid-2021</strong> hosted by <a :class="'expand-link' + getPageStateClass()" href="https://vmcs.club" target="_blank">Vincent Massey’s Computer Science Club</a> in partnership with <a :class="'expand-link' + getPageStateClass()" target="_blank" href="https://masseyhacks.ca">MasseyHacks</a>, Canada’s oldest and largest high school hackathon. The 7WC is an extension of MasseyHacks’s goal to <strong>inspire innovation, the development of big ideas, and a passion for learning.</strong></p>
        <p>Interested in becoming a sponsor? Check out our prospectus below and contact us at <a :class="'expand-link' + getPageStateClass()" href="mailto:sponsorship@masseyhacks.ca">sponsorship@masseyhacks.ca</a>.</p>
        <p class="text-center social-link-collection">
          <a :class="'social-link' + getPageStateClass()" href="https://b2cdn.vmcs.club/file/7wc-main-assets/7WC_Sponsorship_Prospectus.pdf"><font-awesome-icon icon="file-alt"></font-awesome-icon> Prospectus</a>
          <a :class="'social-link' + getPageStateClass()" href="https://www.subscribepage.com/f8r3r5"><font-awesome-icon icon="paper-plane"></font-awesome-icon> Sign-Up For Updates</a>
        </p>
      </div>
    </div>

    <div class="footer">
      <p class="text-center social-link-collection">
        <a :class="'social-link' + getPageStateClass()" href="https://watch.vmcs.club"><font-awesome-icon :icon="['fab', 'youtube']"></font-awesome-icon></a>
        <a :class="'social-link' + getPageStateClass()" href="https://github.com/VMCSC"><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon></a>
        <a :class="'social-link' + getPageStateClass()" href="mailto:hello@vmcs.club"><font-awesome-icon icon="envelope"></font-awesome-icon></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
      darkMode: false
    }
  },
  methods: {
    toggleColorMode(){
      this.darkMode = !this.darkMode;
    },
    getPageStateClass() {
      return this.darkMode ? ' dark-mode' : ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
