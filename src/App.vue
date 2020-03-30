<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <!-- <font-awesome-icon icon="search" />
      <router-link to="/">Gioi thieu</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- <router-view/> -->
    <Footer></Footer>
  </div>
</template>

<style>
body{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 1500px;
  margin: auto;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
