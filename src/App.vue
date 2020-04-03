<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <div class="body">
          <!-- <font-awesome-icon icon="search" />
      <router-link to="/">Gioi thieu</router-link> |
          <router-link to="/about">About</router-link>-->
          <!-- <Home></Home> -->
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.body {
  height: 1500px;
}
</style>
