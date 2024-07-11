<template>
  <Header />
  <div class="canvas">
    <div class="home">
      <div class="section">
        <Content />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from './AppHeader/Header.vue'
import Footer from './AppFooter/Footer.vue'
import Content from './Content.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Content,
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
  height: auto;
  margin: 0 auto;
  padding: 50px 0 50px 0;
}

.section {
  margin: 20px auto;
}

.banner {
  width: 100%;
  overflow: hidden;
}

@media only screen and (max-width: 600px){
  
}
</style>
