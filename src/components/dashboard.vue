<template>
  <div>
      <navbar/>
      <alert></alert>
    <div class="container-fluid">
        <sidebar></sidebar>
      <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from './sidebar'
import navbar from './navbar'
import alert from './alertMessage'

export default {
  components: {
    sidebar,
    navbar,
    alert
  },
  created () {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexotoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    console.log('myCookie', myCookie)
    this.$http.defaults.headers.common.Authorization = myCookie
  }
}
</script>

<style>
</style>
