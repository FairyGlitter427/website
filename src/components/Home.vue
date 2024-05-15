<template>
  <Header />
  <div class="canvas">
    <div class="home">
      <div class="section">
        <div class="text">Section 1</div>
      </div>
      <div class="section">
        <div class="text">Section 2</div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from './AppHeader/Header.vue'
import Footer from './AppFooter/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 1000px;
  margin: 0 auto;
  padding: 160px 0 50px 0;
  border: 1px solid black;
}
.section {
  margin: 20px auto;
  border: 1px solid grey;
}
</style>
