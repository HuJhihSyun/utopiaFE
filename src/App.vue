<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  // created() {
  //   const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
  //   // http://伺服器路徑/api/申請的APIPath/products
  //   console.log(process.env.APIPATH,process.env.CUSTOMPATH);
  //   this.$http.get(api).then((response) => {
  //           console.log(response.data)
  //       });
  // }
}
</script>

<style lang="scss">
@import './assets/all'
</style>
